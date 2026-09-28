/**
 * particles.js - Particle Systems & Confetti for ImArixu Birthday SPA
 * Handles Fortnite victory confetti, Minecraft XP orb bursts, and ambient lobby particles.
 */

class ParticleEngine {
  constructor() {
    this.confettiCanvas = null;
    this.confettiCtx = null;
    this.confettiParticles = [];
    this.animId = null;
  }

  init() {
    this.confettiCanvas = document.getElementById('confetti-canvas');
    if (this.confettiCanvas) {
      this.confettiCtx = this.confettiCanvas.getContext('2d');
      this.resize();
      window.addEventListener('resize', () => this.resize());
      this.loop();
    }
  }

  resize() {
    if (!this.confettiCanvas) return;
    this.confettiCanvas.width = window.innerWidth;
    this.confettiCanvas.height = window.innerHeight;
  }

  // --- Fortnite Victory Confetti & Streamers ---
  triggerFortniteConfetti(count = 90) {
    if (!this.confettiCanvas) return;
    const colors = [
      '#7a22ff', // Storm Purple
      '#00f0ff', // Fortnite Slurp Cyan
      '#f4c430', // Legendary Gold
      '#e69e24', // Amber Gold
      '#ff007f', // Battle Pass Pink
      '#ffffff'  // Bright White
    ];

    for (let i = 0; i < count; i++) {
      this.confettiParticles.push({
        x: Math.random() * this.confettiCanvas.width,
        y: -20 - Math.random() * 50,
        w: 8 + Math.random() * 12,
        h: 6 + Math.random() * 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 4,
        vy: 2.5 + Math.random() * 4,
        rot: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 8,
        shape: Math.random() > 0.3 ? 'rect' : 'diamond',
        opacity: 1,
        life: 0,
        maxLife: 180 + Math.random() * 120
      });
    }
  }

  // --- Minecraft Green XP Orb Burst ---
  spawnMinecraftXPOrbs(clientX, clientY, count = 12) {
    const container = document.body;
    for (let i = 0; i < count; i++) {
      const orb = document.createElement('div');
      orb.className = 'minecraft-xp-orb';
      
      const angle = Math.random() * Math.PI * 2;
      const speed = 40 + Math.random() * 90;
      const dx = Math.cos(angle) * speed;
      const dy = Math.sin(angle) * speed - 60; // Initial upward bounce
      
      orb.style.left = `${clientX}px`;
      orb.style.top = `${clientY}px`;
      orb.style.setProperty('--tx', `${dx}px`);
      orb.style.setProperty('--ty', `${dy}px`);
      
      container.appendChild(orb);
      
      setTimeout(() => {
        if (orb.parentNode) {
          orb.parentNode.removeChild(orb);
        }
      }, 900);
    }
  }

  // --- Clash Royale Floating Crown / Emote Reaction ---
  spawnFloatingCrown(clientX, clientY) {
    const crown = document.createElement('div');
    crown.className = 'floating-reaction-crown';
    crown.innerHTML = `<img src="assets/images/crown.svg" class="w-8 h-8 drop-shadow-[0_0_8px_rgba(244,196,48,0.8)]" alt="Crown">`;
    crown.style.left = `${clientX - 16}px`;
    crown.style.top = `${clientY - 20}px`;
    document.body.appendChild(crown);

    setTimeout(() => {
      if (crown.parentNode) {
        crown.parentNode.removeChild(crown);
      }
    }, 1100);
  }

  // --- Slurp Potion Splash Particles ---
  spawnSlurpSplash(clientX, clientY) {
    for (let i = 0; i < 8; i++) {
      const drop = document.createElement('div');
      drop.className = 'slurp-splash-drop';
      const angle = Math.random() * Math.PI * 2;
      const dist = 30 + Math.random() * 50;
      drop.style.left = `${clientX}px`;
      drop.style.top = `${clientY}px`;
      drop.style.setProperty('--dx', `${Math.cos(angle) * dist}px`);
      drop.style.setProperty('--dy', `${Math.sin(angle) * dist}px`);
      document.body.appendChild(drop);

      setTimeout(() => {
        if (drop.parentNode) drop.parentNode.removeChild(drop);
      }, 700);
    }
  }

  loop() {
    if (!this.confettiCtx || !this.confettiCanvas) return;
    this.confettiCtx.clearRect(0, 0, this.confettiCanvas.width, this.confettiCanvas.height);

    for (let i = this.confettiParticles.length - 1; i >= 0; i--) {
      const p = this.confettiParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.rotSpeed;
      p.life++;

      // Fade out near end of life
      if (p.life > p.maxLife - 30) {
        p.opacity = (p.maxLife - p.life) / 30;
      }

      this.confettiCtx.save();
      this.confettiCtx.translate(p.x, p.y);
      this.confettiCtx.rotate((p.rot * Math.PI) / 180);
      this.confettiCtx.globalAlpha = Math.max(0, p.opacity);
      this.confettiCtx.fillStyle = p.color;

      if (p.shape === 'diamond') {
        this.confettiCtx.beginPath();
        this.confettiCtx.moveTo(0, -p.h / 2);
        this.confettiCtx.lineTo(p.w / 2, 0);
        this.confettiCtx.lineTo(0, p.h / 2);
        this.confettiCtx.lineTo(-p.w / 2, 0);
        this.confettiCtx.closePath();
        this.confettiCtx.fill();
      } else {
        this.confettiCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      }
      this.confettiCtx.restore();

      // Remove offscreen or expired particles
      if (p.y > this.confettiCanvas.height + 50 || p.life >= p.maxLife) {
        this.confettiParticles.splice(i, 1);
      }
    }

    this.animId = requestAnimationFrame(() => this.loop());
  }
}

window.particleEngine = new ParticleEngine();
