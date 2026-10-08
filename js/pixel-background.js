/**
 * pixel-background.js - Interactive Pixel / Voxel Grid Trail & Ripple Background
 * Inspired by Omarchy (https://omarchy.org/)
 * 
 * Features:
 * - Subtle voxel/pixel grid across the full viewport.
 * - Reactive mouse & touch trail: pixels light up and expand within cursor radius,
 *   gradually fading out with smooth exponential decay.
 * - Interactive Click / Tap Pixel Shockwave ("Onda de Píxeles"):
 *   Clicking on the background generates an expanding circular ripple wave that
 *   propagates outward through the pixel matrix, exciting voxels along the wavefront
 *   with an accompanying harmonic echo wave!
 * - Project color palette: Fortnite Slurp Cyan (#00f0ff / #25a2e6) & Twitch Purple (#9146ff / #a970ff).
 * - Semi-dispersed ambient static/pulsing pixels along edges and dark zones.
 * - Idle gentle ambient wanderer for mobile & stationary viewing.
 * - Highly optimized with requestAnimationFrame, active-cell tracking, and zero GC pressure (60+ FPS).
 */

(function () {
  'use strict';

  class PixelGridBackground {
    constructor() {
      this.canvas = null;
      this.ctx = null;
      this.animId = null;

      // Configuration
      this.pixelSize = 10;       // Base square size in px
      this.gap = 8;              // Gap between squares
      this.cellSize = 18;        // pixelSize + gap
      this.radius = 130;         // Cursor activation blast radius in px
      this.decayRate = 0.935;    // Exponential fade-out rate per frame (~45-60 frames)
      this.minActiveEnergy = 0.015;

      // Grid Dimensions
      this.cols = 0;
      this.rows = 0;
      this.totalCells = 0;
      this.width = 0;
      this.height = 0;
      this.dpr = 1;

      // Cell Buffers
      this.energy = null;        // Float32Array of cell energy (0.0 to 1.0)
      this.colorHue = null;      // Float32Array (0.0 = Twitch Purple, 1.0 = Slurp Cyan)
      this.activeIndices = new Set();

      // Ambient Dispersed Pixels
      this.ambientPixels = [];

      // Interactive Click Shockwaves ("Ondas de Píxeles")
      this.shockwaves = [];

      // Mouse & Pointer State
      this.mouseX = -9999;
      this.mouseY = -9999;
      this.lastMouseX = -9999;
      this.lastMouseY = -9999;
      this.isPointerActive = false;
      this.lastInteractionTime = 0;

      // Ambient Ghost Wanderer (idle animation for mobile / stationary)
      this.ghostX = 0;
      this.ghostY = 0;
      this.ghostLastX = 0;
      this.ghostLastY = 0;

      this.init();
    }

    init() {
      // Find or create canvas
      this.canvas = document.getElementById('pixel-grid-canvas');
      if (!this.canvas) {
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'pixel-grid-canvas';
        this.canvas.className = 'fixed inset-0 w-full h-full pointer-events-none z-0';
        document.body.prepend(this.canvas);
      }

      this.ctx = this.canvas.getContext('2d', { alpha: true });
      if (!this.ctx) return;

      this.resize();
      this.bindEvents();

      // Start render loop
      this.lastInteractionTime = performance.now();
      this.loop = this.loop.bind(this);
      this.animId = requestAnimationFrame(this.loop);
    }

    resize() {
      if (!this.canvas) return;

      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.dpr = Math.min(window.devicePixelRatio || 1, 2);

      // Adaptive size: slightly smaller cells on mobile screens
      if (this.width < 640) {
        this.pixelSize = 8;
        this.gap = 6;
      } else if (this.width < 1024) {
        this.pixelSize = 9;
        this.gap = 7;
      } else {
        this.pixelSize = 10;
        this.gap = 8;
      }
      this.cellSize = this.pixelSize + this.gap;

      this.canvas.width = Math.floor(this.width * this.dpr);
      this.canvas.height = Math.floor(this.height * this.dpr);
      this.canvas.style.width = this.width + 'px';
      this.canvas.style.height = this.height + 'px';

      this.cols = Math.ceil(this.width / this.cellSize) + 1;
      this.rows = Math.ceil(this.height / this.cellSize) + 1;
      this.totalCells = this.cols * this.rows;

      // Allocate / reset typed buffers
      this.energy = new Float32Array(this.totalCells);
      this.colorHue = new Float32Array(this.totalCells);
      this.activeIndices.clear();
      this.shockwaves = [];

      // Initialize ambient dispersed pixels
      this.initAmbientPixels();

      // Initial ghost position
      this.ghostX = this.width * 0.5;
      this.ghostY = this.height * 0.4;
      this.ghostLastX = this.ghostX;
      this.ghostLastY = this.ghostY;
    }

    initAmbientPixels() {
      this.ambientPixels = [];
      // Generate ~140 to 240 ambient pixels with higher bias towards edges & dark corners
      const count = Math.min(Math.floor((this.cols * this.rows) * 0.035), 240);

      for (let i = 0; i < count; i++) {
        // 60% probability of favoring edges (left 20%, right 20%, top 20%, bottom 20%)
        let c, r;
        if (Math.random() < 0.6) {
          const edge = Math.floor(Math.random() * 4);
          if (edge === 0) { // Left edge
            c = Math.floor(Math.random() * (this.cols * 0.22));
            r = Math.floor(Math.random() * this.rows);
          } else if (edge === 1) { // Right edge
            c = Math.floor(this.cols - 1 - Math.random() * (this.cols * 0.22));
            r = Math.floor(Math.random() * this.rows);
          } else if (edge === 2) { // Top edge
            c = Math.floor(Math.random() * this.cols);
            r = Math.floor(Math.random() * (this.rows * 0.22));
          } else { // Bottom edge
            c = Math.floor(Math.random() * this.cols);
            r = Math.floor(this.rows - 1 - Math.random() * (this.rows * 0.22));
          }
        } else {
          // Uniformly random
          c = Math.floor(Math.random() * this.cols);
          r = Math.floor(Math.random() * this.rows);
        }

        // Palette choice: 55% Slurp Cyan, 45% Twitch Purple
        const isCyan = Math.random() < 0.55;

        this.ambientPixels.push({
          col: c,
          row: r,
          idx: r * this.cols + c,
          baseAlpha: 0.04 + Math.random() * 0.12, // subtle 0.04 - 0.16
          pulseSpeed: 0.0012 + Math.random() * 0.0025,
          phase: Math.random() * Math.PI * 2,
          isCyan: isCyan
        });
      }
    }

    bindEvents() {
      // Resize listener
      let resizeTimeout;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => this.resize(), 100);
      }, { passive: true });

      // Mouse Move
      window.addEventListener('mousemove', (e) => {
        this.handlePointerMove(e.clientX, e.clientY);
      }, { passive: true });

      window.addEventListener('mouseleave', () => {
        this.isPointerActive = false;
        this.mouseX = -9999;
        this.mouseY = -9999;
      }, { passive: true });

      // Touch Events (Mobile support)
      window.addEventListener('touchstart', (e) => {
        if (e.touches && e.touches[0]) {
          this.handlePointerMove(e.touches[0].clientX, e.touches[0].clientY, true);
        }
      }, { passive: true });

      window.addEventListener('touchmove', (e) => {
        if (e.touches && e.touches[0]) {
          this.handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
        }
      }, { passive: true });

      window.addEventListener('touchend', () => {
        this.isPointerActive = false;
        this.mouseX = -9999;
        this.mouseY = -9999;
      }, { passive: true });

      // Interactive Click / Tap Shockwave ("Onda de Píxeles")
      // Listen to pointerdown on window (covers desktop mouse, trackpad & mobile tap)
      window.addEventListener('pointerdown', (e) => {
        // Allow user to interact with input/textarea/select without triggering huge wave
        if (e.target && e.target.closest('input, textarea, select')) {
          return;
        }
        this.triggerShockwave(e.clientX, e.clientY);
      }, { passive: true });
    }

    handlePointerMove(x, y, isImmediate = false) {
      this.isPointerActive = true;
      this.lastInteractionTime = performance.now();

      if (isImmediate || this.lastMouseX < -1000) {
        this.lastMouseX = x;
        this.lastMouseY = y;
      }

      this.mouseX = x;
      this.mouseY = y;

      // Interpolate between last position and current position to prevent gaps on fast flicks
      const dx = this.mouseX - this.lastMouseX;
      const dy = this.mouseY - this.lastMouseY;
      const dist = Math.hypot(dx, dy);

      const stepDist = 14;
      const steps = Math.min(Math.max(1, Math.ceil(dist / stepDist)), 12);

      for (let s = 1; s <= steps; s++) {
        const px = this.lastMouseX + (dx * s) / steps;
        const py = this.lastMouseY + (dy * s) / steps;
        this.activateVoxelRegion(px, py, this.radius, 1.0);
      }

      this.lastMouseX = this.mouseX;
      this.lastMouseY = this.mouseY;
    }

    /**
     * Triggers an expanding circular shockwave of voxels ("Onda de Píxeles")
     * ripples outward from the click/tap coordinate with a trailing echo wave.
     */
    triggerShockwave(x, y) {
      this.lastInteractionTime = performance.now();

      // 1. Instant epicenter splash / flash
      this.activateVoxelRegion(x, y, 75, 1.0);

      const maxR = this.width < 640 ? 320 : 460;
      const baseSpeed = this.width < 640 ? 11 : 14.5;

      // 2. Primary expanding shockwave
      this.shockwaves.push({
        x: x,
        y: y,
        radius: 8,
        maxRadius: maxR,
        speed: baseSpeed,
        thickness: 52,
        intensity: 1.0
      });

      // 3. Harmonic echo ripple (trailing 110ms later)
      setTimeout(() => {
        if (this.shockwaves.length < 8) {
          this.shockwaves.push({
            x: x,
            y: y,
            radius: 4,
            maxRadius: maxR * 0.72,
            speed: baseSpeed * 0.82,
            thickness: 40,
            intensity: 0.65
          });
        }
      }, 110);

      // Prevent unbounded array growth if user rapid-clicks
      if (this.shockwaves.length > 8) {
        this.shockwaves.shift();
      }
    }

    activateVoxelRegion(px, py, radius, maxIntensity = 1.0) {
      const minCol = Math.max(0, Math.floor((px - radius) / this.cellSize));
      const maxCol = Math.min(this.cols - 1, Math.floor((px + radius) / this.cellSize));
      const minRow = Math.max(0, Math.floor((py - radius) / this.cellSize));
      const maxRow = Math.min(this.rows - 1, Math.floor((py + radius) / this.cellSize));

      const rSq = radius * radius;

      for (let r = minRow; r <= maxRow; r++) {
        const cy = r * this.cellSize + this.cellSize * 0.5;
        const dy = py - cy;
        const dySq = dy * dy;

        for (let c = minCol; c <= maxCol; c++) {
          const cx = c * this.cellSize + this.cellSize * 0.5;
          const dx = px - cx;
          const distSq = dx * dx + dySq;

          if (distSq <= rSq) {
            const dist = Math.sqrt(distSq);
            const ratio = 1 - (dist / radius); // 1.0 at center, 0.0 at edge
            // Smooth ease-out intensity falloff
            const intensity = Math.pow(ratio, 1.35) * maxIntensity;

            const idx = r * this.cols + c;
            const currentEnergy = this.energy[idx];

            if (intensity > currentEnergy) {
              this.energy[idx] = intensity;
              // Center is Slurp cyan (1.0), perimeter fades to Twitch purple (0.0)
              this.colorHue[idx] = ratio;
              this.activeIndices.add(idx);
            }
          }
        }
      }
    }

    drawPixel(ctx, x, y, size, r, g, b, alpha, cornerRadius = 2) {
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;

      if (ctx.roundRect) {
        ctx.beginPath();
        ctx.roundRect(x, y, size, size, cornerRadius);
        ctx.fill();
      } else {
        ctx.fillRect(x, y, size, size);
      }
    }

    loop(time) {
      this.animId = requestAnimationFrame(this.loop);

      const ctx = this.ctx;
      if (!ctx) return;

      // Clear full canvas
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      ctx.save();
      ctx.scale(this.dpr, this.dpr);

      // --- 1. Ambient Dispersed Pixels (Subtle background breathing) ---
      for (let i = 0; i < this.ambientPixels.length; i++) {
        const ap = this.ambientPixels[i];
        const idx = ap.idx;

        // Skip if this cell is actively lit by cursor trail or shockwave
        if (this.energy[idx] > 0.15) continue;

        const pulse = Math.sin(time * ap.pulseSpeed + ap.phase);
        const alpha = ap.baseAlpha * (0.65 + 0.35 * pulse);

        const x = ap.col * this.cellSize + this.gap * 0.5;
        const y = ap.row * this.cellSize + this.gap * 0.5;

        if (ap.isCyan) {
          // Slurp Cyan #00f0ff (0, 240, 255)
          this.drawPixel(ctx, x, y, this.pixelSize, 0, 240, 255, alpha, 1.5);
        } else {
          // Twitch Purple #9146ff (145, 70, 255)
          this.drawPixel(ctx, x, y, this.pixelSize, 145, 70, 255, alpha, 1.5);
        }
      }

      // --- 2. Idle Ambient Wanderer (Soft floating spark when inactive) ---
      const idleTime = time - this.lastInteractionTime;
      if (idleTime > 2200 && this.shockwaves.length === 0) {
        // Smooth multi-frequency Lissajous curves across the screen
        const t = (time - 2200) * 0.0006;
        const targetX = (this.width * 0.5) + Math.sin(t * 1.1) * (this.width * 0.38) + Math.cos(t * 2.3) * (this.width * 0.08);
        const targetY = (this.height * 0.45) + Math.cos(t * 0.9) * (this.height * 0.32) + Math.sin(t * 1.7) * (this.height * 0.08);

        // Smooth drift towards target
        this.ghostX += (targetX - this.ghostX) * 0.06;
        this.ghostY += (targetY - this.ghostY) * 0.06;

        this.activateVoxelRegion(this.ghostX, this.ghostY, this.radius * 0.75, 0.45);
      }

      // --- 3. Interactive Pixel Shockwaves ("Ondas de Píxeles") Propagation ---
      if (this.shockwaves.length > 0) {
        for (let swIdx = this.shockwaves.length - 1; swIdx >= 0; swIdx--) {
          const sw = this.shockwaves[swIdx];
          sw.radius += sw.speed;
          const progress = sw.radius / sw.maxRadius;
          sw.intensity = Math.max(0, 1.0 - Math.pow(progress, 1.25));

          if (progress >= 1.0 || sw.intensity <= 0.01) {
            this.shockwaves.splice(swIdx, 1);
            continue;
          }

          // Optical Energy Shockwave Ring along the wave crest
          if (sw.radius > 12) {
            ctx.save();
            ctx.beginPath();
            ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
            const ringAlpha = sw.intensity * 0.28;
            ctx.strokeStyle = `rgba(0, 240, 255, ${ringAlpha})`;
            ctx.lineWidth = Math.max(1, 2.5 * sw.intensity);
            ctx.stroke();
            ctx.restore();
          }

          // Excite voxels intersecting the annular wavefront ring
          const halfThick = sw.thickness * 0.5;
          const minR = Math.max(0, sw.radius - halfThick);
          const maxR = sw.radius + halfThick;

          const minCol = Math.max(0, Math.floor((sw.x - maxR) / this.cellSize));
          const maxCol = Math.min(this.cols - 1, Math.floor((sw.x + maxR) / this.cellSize));
          const minRow = Math.max(0, Math.floor((sw.y - maxR) / this.cellSize));
          const maxRow = Math.min(this.rows - 1, Math.floor((sw.y + maxR) / this.cellSize));

          const minRSq = minR * minR;
          const maxRSq = maxR * maxR;

          for (let r = minRow; r <= maxRow; r++) {
            const cy = r * this.cellSize + this.cellSize * 0.5;
            const dy = sw.y - cy;
            const dySq = dy * dy;

            for (let c = minCol; c <= maxCol; c++) {
              const cx = c * this.cellSize + this.cellSize * 0.5;
              const dx = sw.x - cx;
              const distSq = dx * dx + dySq;

              if (distSq <= maxRSq && distSq >= minRSq) {
                const dist = Math.sqrt(distSq);
                const diff = Math.abs(dist - sw.radius);

                if (diff <= halfThick) {
                  // Smooth cosine wave profile across the wavefront crest
                  const crestProfile = Math.cos((diff / halfThick) * (Math.PI * 0.5));
                  const waveEnergy = crestProfile * sw.intensity * 1.2;

                  const idx = r * this.cols + c;
                  if (waveEnergy > this.energy[idx]) {
                    this.energy[idx] = Math.min(1.0, waveEnergy);
                    // Wavefront chromatic transition: Slurp Cyan at crest, electric blue/purple along perimeter
                    this.colorHue[idx] = Math.max(this.colorHue[idx], 0.2 + 0.8 * (1 - progress));
                    this.activeIndices.add(idx);
                  }
                }
              }
            }
          }
        }
      }

      // --- 4. Reactive Active Pixels (Voxel rendering & smooth decay) ---
      if (this.activeIndices.size > 0) {
        // Collect dead indices to remove after iteration
        const toRemove = [];

        for (const idx of this.activeIndices) {
          let e = this.energy[idx];

          // Exponential decay
          e *= this.decayRate;
          this.energy[idx] = e;

          if (e < this.minActiveEnergy) {
            this.energy[idx] = 0;
            toRemove.push(idx);
            continue;
          }

          // Cell coordinates
          const c = idx % this.cols;
          const r = Math.floor(idx / this.cols);

          // Dynamic scale: slight expansion at peak energy for tactile voxel pop
          const scaleBoost = e * 2.4;
          const size = this.pixelSize + scaleBoost;
          const offset = scaleBoost * 0.5;

          const x = c * this.cellSize + this.gap * 0.5 - offset;
          const y = r * this.cellSize + this.gap * 0.5 - offset;

          // Color blend between Slurp Cyan and Twitch Purple based on colorHue
          const hueRatio = this.colorHue[idx];
          let red, green, blue;

          if (hueRatio > 0.6) {
            // Bright Slurp Cyan: #00f0ff (0, 240, 255)
            // Extra brilliant white-cyan core at peak energy
            if (e > 0.75) {
              red = 110;
              green = 247;
              blue = 255;
            } else {
              red = 0;
              green = 240;
              blue = 255;
            }
          } else if (hueRatio > 0.3) {
            // Electric Slurp Blue: #25a2e6 (37, 162, 230)
            red = 37;
            green = 162;
            blue = 230;
          } else {
            // Twitch Neon Purple: #9146ff (145, 70, 255) to #7a22ff (122, 34, 255)
            red = 145;
            green = 70;
            blue = 255;
          }

          // Alpha range: between 0.08 and 0.85
          const alpha = Math.min(0.85, Math.max(0.08, e * 0.85));

          // Draw the voxel square with rounded corners
          this.drawPixel(ctx, x, y, size, red, green, blue, alpha, 2);

          // Subtle neon glow halo for high-energy voxels
          if (e > 0.6) {
            const glowSize = size + 3;
            const glowOffset = 1.5;
            ctx.strokeStyle = `rgba(${red}, ${green}, ${blue}, ${alpha * 0.4})`;
            ctx.lineWidth = 1;
            if (ctx.roundRect) {
              ctx.beginPath();
              ctx.roundRect(x - glowOffset, y - glowOffset, glowSize, glowSize, 3);
              ctx.stroke();
            }
          }
        }

        // Cleanup extinguished cells
        for (let k = 0; k < toRemove.length; k++) {
          this.activeIndices.delete(toRemove[k]);
        }
      }

      ctx.restore();
    }

    destroy() {
      if (this.animId) {
        cancelAnimationFrame(this.animId);
      }
      if (this.canvas && this.canvas.parentNode) {
        this.canvas.parentNode.removeChild(this.canvas);
      }
    }
  }

  // Export to window
  window.PixelGridBackground = PixelGridBackground;

  // Auto-initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.pixelGridBackgroundInstance = new PixelGridBackground();
    });
  } else {
    window.pixelGridBackgroundInstance = new PixelGridBackground();
  }
})();
