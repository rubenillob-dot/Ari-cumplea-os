/**
 * audio.js - Web Audio API Sound Synthesizer for ImArixu Birthday SPA
 * 100% standalone, no external audio files needed (no 404s, works offline).
 * Provides Fortnite UI sounds, Minecraft XP chimes, Clash Royale chest fanfares,
 * and an ambient Fortnite lobby lo-fi synth theme.
 */

class SoundSystem {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.bgmPlaying = false;
    this.bgmGain = null;
    this.bgmTimer = null;
    this.bgmStep = 0;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      if (this.bgmGain && this.ctx) {
        this.bgmGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.1);
      }
    } else {
      if (this.bgmGain && this.ctx && this.bgmPlaying) {
        this.bgmGain.gain.setTargetAtTime(0.18, this.ctx.currentTime, 0.1);
      }
    }
    return this.isMuted;
  }

  // --- Sound: Button Hover / Pop ---
  playHover() {
    if (this.isMuted) return;
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    const now = this.ctx.currentTime;
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.04);
    gain.gain.setValueAtTime(0.04, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.05);
  }

  // --- Sound: Fortnite "LISTO" / Ready Click ---
  playFortniteClick() {
    if (this.isMuted) return;
    this.init();
    const now = this.ctx.currentTime;
    
    // Sub bass punch
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.exponentialRampToValueAtTime(45, now + 0.18);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.18);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.2);

    // High snap
    const snap = this.ctx.createOscillator();
    const snapGain = this.ctx.createGain();
    snap.type = 'sine';
    snap.frequency.setValueAtTime(1200, now);
    snap.frequency.exponentialRampToValueAtTime(300, now + 0.08);
    snapGain.gain.setValueAtTime(0.15, now);
    snapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    snap.connect(snapGain);
    snapGain.connect(this.ctx.destination);
    snap.start(now);
    snap.stop(now + 0.09);
  }

  // --- Sound: Fortnite Shield Potion / Mini Slurp ---
  playShieldPotion() {
    if (this.isMuted) return;
    this.init();
    const now = this.ctx.currentTime;

    // Bubbles (modulated FM oscillator)
    const bubbleOsc = this.ctx.createOscillator();
    const bubbleMod = this.ctx.createOscillator();
    const bubbleModGain = this.ctx.createGain();
    const bubbleGain = this.ctx.createGain();

    bubbleMod.frequency.setValueAtTime(25, now);
    bubbleMod.frequency.linearRampToValueAtTime(40, now + 0.6);
    bubbleModGain.gain.setValueAtTime(120, now);

    bubbleOsc.type = 'sine';
    bubbleOsc.frequency.setValueAtTime(400, now);
    bubbleOsc.frequency.linearRampToValueAtTime(750, now + 0.6);

    bubbleMod.connect(bubbleOsc.frequency);
    bubbleOsc.connect(bubbleGain);

    bubbleGain.gain.setValueAtTime(0.0, now);
    bubbleGain.gain.linearRampToValueAtTime(0.2, now + 0.1);
    bubbleGain.gain.exponentialRampToValueAtTime(0.01, now + 0.7);

    bubbleGain.connect(this.ctx.destination);

    bubbleMod.start(now);
    bubbleOsc.start(now);
    bubbleMod.stop(now + 0.7);
    bubbleOsc.stop(now + 0.7);

    // Energetic Shield Chime (Fortnite Slurp shimmer)
    const chimeTimes = [0.25, 0.45, 0.65, 0.85];
    const freqs = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    chimeTimes.forEach((t, i) => {
      const o = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      o.type = 'triangle';
      o.frequency.setValueAtTime(freqs[i], now + t);
      g.gain.setValueAtTime(0, now + t);
      g.gain.linearRampToValueAtTime(0.18, now + t + 0.05);
      g.gain.exponentialRampToValueAtTime(0.001, now + t + 0.4);
      o.connect(g);
      g.connect(this.ctx.destination);
      o.start(now + t);
      o.stop(now + t + 0.45);
    });
  }

  // --- Sound: Minecraft XP Orb Ding (Level-Up Pitch) ---
  playMinecraftXP(pitchMultiplier = 1.0) {
    if (this.isMuted) return;
    this.init();
    const now = this.ctx.currentTime;
    
    // Classic crystal chime
    const osc = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc2.type = 'triangle';

    const baseFreq = (800 + Math.random() * 200) * pitchMultiplier;
    osc.frequency.setValueAtTime(baseFreq, now);
    osc2.frequency.setValueAtTime(baseFreq * 2, now);

    gain.gain.setValueAtTime(0.22, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(gain);
    osc2.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc2.start(now);
    osc.stop(now + 0.36);
    osc2.stop(now + 0.36);
  }

  // --- Sound: Clash Royale Crown Chime ---
  playCrownSound() {
    if (this.isMuted) return;
    this.init();
    const now = this.ctx.currentTime;
    const notes = [440, 554.37, 659.25, 880]; // A major
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);
      gain.gain.setValueAtTime(0, now + idx * 0.08);
      gain.gain.linearRampToValueAtTime(0.2, now + idx * 0.08 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.5);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.55);
    });
  }

  // --- Sound: Clash Royale Legendary Chest Opening ---
  playChestOpen() {
    if (this.isMuted) return;
    this.init();
    const now = this.ctx.currentTime;

    // Deep windup / rumble
    const rumble = this.ctx.createOscillator();
    const rumbleGain = this.ctx.createGain();
    rumble.type = 'sawtooth';
    rumble.frequency.setValueAtTime(60, now);
    rumble.frequency.linearRampToValueAtTime(140, now + 1.2);
    rumbleGain.gain.setValueAtTime(0.05, now);
    rumbleGain.gain.linearRampToValueAtTime(0.25, now + 1.1);
    rumbleGain.gain.exponentialRampToValueAtTime(0.001, now + 1.3);

    // Lowpass filter for smooth rumble
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(250, now);
    filter.frequency.linearRampToValueAtTime(600, now + 1.2);

    rumble.connect(filter);
    filter.connect(rumbleGain);
    rumbleGain.connect(this.ctx.destination);
    rumble.start(now);
    rumble.stop(now + 1.3);

    // Legendary Sparkle Arpeggio burst
    const arpeggio = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50, 1318.51];
    arpeggio.forEach((f, i) => {
      const spark = this.ctx.createOscillator();
      const sparkG = this.ctx.createGain();
      spark.type = 'triangle';
      const t = now + 1.0 + i * 0.09;
      spark.frequency.setValueAtTime(f, t);
      sparkG.gain.setValueAtTime(0, t);
      sparkG.gain.linearRampToValueAtTime(0.18, t + 0.02);
      sparkG.gain.exponentialRampToValueAtTime(0.001, t + 0.6);
      spark.connect(sparkG);
      sparkG.connect(this.ctx.destination);
      spark.start(t);
      spark.stop(t + 0.65);
    });
  }

  // --- Sound: Victory Royale Fanfare ---
  playVictoryFanfare() {
    if (this.isMuted) return;
    this.init();
    const now = this.ctx.currentTime;
    // Epic brass fanfare
    const chords = [
      { notes: [349.23, 440, 523.25], delay: 0, dur: 0.3 },    // F
      { notes: [392.00, 493.88, 587.33], delay: 0.35, dur: 0.3 }, // G
      { notes: [440, 554.37, 659.25], delay: 0.7, dur: 0.35 },    // A
      { notes: [523.25, 659.25, 783.99, 1046.5], delay: 1.1, dur: 1.2 } // High C major victory
    ];

    chords.forEach(c => {
      c.notes.forEach(note => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(note, now + c.delay);
        gain.gain.setValueAtTime(0, now + c.delay);
        gain.gain.linearRampToValueAtTime(0.16, now + c.delay + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, now + c.delay + c.dur);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + c.delay);
        osc.stop(now + c.delay + c.dur + 0.05);
      });
    });
  }

  // --- Ambient Fortnite Lobby Chill BGM (Synthesizer Loop) ---
  startBGM() {
    this.init();
    if (this.bgmPlaying) return;
    this.bgmPlaying = true;

    this.bgmGain = this.ctx.createGain();
    this.bgmGain.gain.setValueAtTime(this.isMuted ? 0 : 0.16, this.ctx.currentTime);
    this.bgmGain.connect(this.ctx.destination);

    // Warm chord progression loop (Fortnite Season 4 / Chapter lobby vibe)
    const progression = [
      [174.61, 220.00, 261.63, 329.63], // Fmaj7
      [220.00, 261.63, 329.63, 392.00], // Am7
      [196.00, 246.94, 293.66, 349.23], // G7
      [146.83, 174.61, 220.00, 261.63]  // Dm7
    ];

    const tempo = 82; // BPM
    const chordDuration = (60 / tempo) * 2; // 2 beats per chord

    const playChordStep = () => {
      if (!this.bgmPlaying || !this.ctx) return;
      const now = this.ctx.currentTime;
      const chord = progression[this.bgmStep % progression.length];

      // Soft synth pad
      chord.forEach(freq => {
        const osc = this.ctx.createOscillator();
        const padGain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        padGain.gain.setValueAtTime(0, now);
        padGain.gain.linearRampToValueAtTime(0.06, now + 0.4);
        padGain.gain.exponentialRampToValueAtTime(0.002, now + chordDuration - 0.05);

        osc.connect(padGain);
        padGain.connect(this.bgmGain);
        osc.start(now);
        osc.stop(now + chordDuration);
      });

      // Subtle sub-kick on beat 1
      const kick = this.ctx.createOscillator();
      const kickG = this.ctx.createGain();
      kick.type = 'sine';
      kick.frequency.setValueAtTime(110, now);
      kick.frequency.exponentialRampToValueAtTime(45, now + 0.25);
      kickG.gain.setValueAtTime(0.12, now);
      kickG.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      kick.connect(kickG);
      kickG.connect(this.bgmGain);
      kick.start(now);
      kick.stop(now + 0.32);

      this.bgmStep++;
      this.bgmTimer = setTimeout(playChordStep, chordDuration * 1000 - 30);
    };

    playChordStep();
  }

  stopBGM() {
    this.bgmPlaying = false;
    if (this.bgmTimer) {
      clearTimeout(this.bgmTimer);
      this.bgmTimer = null;
    }
    if (this.bgmGain && this.ctx) {
      this.bgmGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.2);
    }
  }
}

// Export singleton
window.soundFX = new SoundSystem();
