/**
 * app.js - Main Application Logic for ImArixu Birthday SPA
 * Fortnite 90%, Clash Royale 5%, Poppy Playtime 4%, Minecraft 1%
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize engines
  if (window.particleEngine) {
    window.particleEngine.init();
    // Initial celebration confetti burst
    setTimeout(() => {
      window.particleEngine.triggerFortniteConfetti(80);
    }, 400);
  }

  // 2. Render initial community dedications feed
  if (window.dedicationsManager) {
    window.dedicationsManager.renderFeed('dedications-feed');
  }

  // 3. Setup sound & audio toggle
  setupAudioControls();

  // 4. Setup GrabPack cursor toggle
  setupGrabPackToggle();

  // 5. Setup Shield Potion HUD mechanic
  setupShieldMechanic();

  // 6. Setup Year in Review filter tabs
  setupYearInReviewFilters();

  // 7. Setup dedication modal form
  setupDedicationModal();

  // 8. Setup Legendary Chest Easter Egg
  setupLegendaryChest();

  // 9. Setup Minecraft XP interactions
  setupMinecraftEasterEggs();

  // Enable sound on first interaction
  const unlockAudio = () => {
    if (window.soundFX) window.soundFX.init();
    document.removeEventListener('click', unlockAudio);
  };
  document.addEventListener('click', unlockAudio);
});

/* ========================================================
   1. AUDIO CONTROLS & BGM TOGGLE
   ======================================================== */
function setupAudioControls() {
  const musicToggleBtn = document.getElementById('music-toggle-btn');
  const eqVisualizer = document.getElementById('audio-visualizer');
  const soundStatusText = document.getElementById('sound-status-text');

  if (!musicToggleBtn) return;

  musicToggleBtn.addEventListener('click', () => {
    if (!window.soundFX) return;
    
    // Toggle BGM and sound state
    if (!window.soundFX.bgmPlaying) {
      window.soundFX.startBGM();
      if (eqVisualizer) eqVisualizer.classList.remove('opacity-30');
      if (soundStatusText) soundStatusText.textContent = 'Música: ON';
      musicToggleBtn.classList.add('border-yellow-400');
    } else {
      const isMuted = window.soundFX.toggleMute();
      if (isMuted) {
        if (eqVisualizer) eqVisualizer.classList.add('opacity-30');
        if (soundStatusText) soundStatusText.textContent = 'Música: MUTE';
        musicToggleBtn.classList.remove('border-yellow-400');
      } else {
        if (eqVisualizer) eqVisualizer.classList.remove('opacity-30');
        if (soundStatusText) soundStatusText.textContent = 'Música: ON';
        musicToggleBtn.classList.add('border-yellow-400');
      }
    }

    if (window.soundFX) window.soundFX.playFortniteClick();
  });
}

/* ========================================================
   2. POPPY PLAYTIME GRABPACK TOGGLE & EASTER EGG
   ======================================================== */
function setupGrabPackToggle() {
  const grabpackToggleBtn = document.getElementById('grabpack-toggle-btn');
  let isGrabpackActive = true;

  // Active by default for the playful theme
  document.body.classList.add('grabpack-cursor-active');

  if (grabpackToggleBtn) {
    grabpackToggleBtn.addEventListener('click', () => {
      isGrabpackActive = !isGrabpackActive;
      if (isGrabpackActive) {
        document.body.classList.add('grabpack-cursor-active');
        grabpackToggleBtn.innerHTML = `
          <img src="assets/images/grabpack-blue.svg" class="w-5 h-5 drop-shadow" alt="GrabPack">
          <span class="hidden sm:inline">GrabPack Cursor: <strong class="text-cyan-400">ON</strong></span>
        `;
      } else {
        document.body.classList.remove('grabpack-cursor-active');
        grabpackToggleBtn.innerHTML = `
          <img src="assets/images/grabpack-blue.svg" class="w-5 h-5 opacity-40" alt="GrabPack">
          <span class="hidden sm:inline">GrabPack Cursor: <strong class="text-gray-400">OFF</strong></span>
        `;
      }
      if (window.soundFX) window.soundFX.playFortniteClick();
    });
  }
}

/* ========================================================
   3. FORTNITE SHIELD POTION MECHANIC & "LISTO" BUTTON
   ======================================================== */
let currentShield = 50;

function setupShieldMechanic() {
  const shieldBtn = document.getElementById('hero-shield-action-btn');
  const shieldBarFill = document.getElementById('shield-bar-fill');
  const shieldValText = document.getElementById('shield-val-text');
  const drinkMiniTrigger = document.getElementById('drink-mini-trigger');

  const drinkPotion = (event) => {
    if (window.soundFX) window.soundFX.playShieldPotion();
    
    // Slurp particles at click position
    const rect = (event && event.currentTarget) ? event.currentTarget.getBoundingClientRect() : { left: window.innerWidth / 2, top: window.innerHeight / 2, width: 0, height: 0 };
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    if (window.particleEngine) {
      window.particleEngine.spawnSlurpSplash(cx, cy);
      window.particleEngine.spawnMinecraftXPOrbs(cx, cy, 10);
    }

    currentShield = 100;
    if (shieldBarFill) {
      shieldBarFill.style.width = '100%';
      shieldBarFill.classList.add('animate-pulse');
    }
    if (shieldValText) {
      shieldValText.textContent = '100 / 100 (¡ESCUDO MÁXIMO!)';
      shieldValText.classList.add('text-cyan-300', 'font-black');
    }

    // Scroll to Year in Review section
    setTimeout(() => {
      const yearSection = document.getElementById('year-in-review');
      if (yearSection) {
        yearSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 700);
  };

  if (shieldBtn) shieldBtn.addEventListener('click', drinkPotion);
  if (drinkMiniTrigger) drinkMiniTrigger.addEventListener('click', drinkPotion);
}

/* ========================================================
   4. YEAR IN REVIEW FILTER TABS
   ======================================================== */
function setupYearInReviewFilters() {
  const filterBtns = document.querySelectorAll('.review-filter-btn');
  const cards = document.querySelectorAll('.review-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Update button styles
      filterBtns.forEach(b => {
        b.classList.remove('bg-yellow-400', 'text-black', 'border-yellow-300', 'shadow-[0_0_15px_rgba(244,196,48,0.5)]');
        b.classList.add('bg-purple-950/70', 'text-gray-300', 'border-purple-800');
      });
      btn.classList.add('bg-yellow-400', 'text-black', 'border-yellow-300', 'shadow-[0_0_15px_rgba(244,196,48,0.5)]');
      btn.classList.remove('bg-purple-950/70', 'text-gray-300', 'border-purple-800');

      if (window.soundFX) window.soundFX.playFortniteClick();

      // Filter cards
      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
          card.classList.add('animate-fade-in');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* ========================================================
   5. INTERACTIVE DEDICATION REACTIONS & FORM
   ======================================================== */
window.handleReaction = function(id, type, event) {
  event.stopPropagation();
  if (!window.dedicationsManager) return;

  const newVal = window.dedicationsManager.addReaction(id, type);
  const counterEl = document.getElementById(`cnt-${id}-${type}`);
  if (counterEl) {
    counterEl.textContent = newVal;
    counterEl.classList.add('text-yellow-400', 'scale-125');
    setTimeout(() => counterEl.classList.remove('scale-125'), 200);
  }

  const rect = event.currentTarget.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top;

  if (type === 'gg') {
    if (window.soundFX) window.soundFX.playMinecraftXP(1.1);
    if (window.particleEngine) window.particleEngine.spawnMinecraftXPOrbs(cx, cy, 8);
  } else if (type === 'shield') {
    if (window.soundFX) window.soundFX.playShieldPotion();
    if (window.particleEngine) window.particleEngine.spawnSlurpSplash(cx, cy);
  } else if (type === 'crown') {
    if (window.soundFX) window.soundFX.playCrownSound();
    if (window.particleEngine) window.particleEngine.spawnFloatingCrown(cx, cy);
  }
};

function setupDedicationModal() {
  const openModalBtn = document.getElementById('open-dedication-modal-btn');
  const modal = document.getElementById('dedication-modal');
  const closeBtn = document.getElementById('close-dedication-modal-btn');
  const form = document.getElementById('new-dedication-form');

  if (openModalBtn && modal) {
    openModalBtn.addEventListener('click', () => {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      if (window.soundFX) window.soundFX.playFortniteClick();
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const user = document.getElementById('form-user').value.trim() || 'Fan Anónimo';
      const role = document.getElementById('form-role').value.trim() || 'Seguidor';
      const platform = document.getElementById('form-platform').value || 'twitch';
      const rarity = document.getElementById('form-rarity').value || 'legendary';
      const message = document.getElementById('form-message').value.trim();
      const type = document.getElementById('form-type').value || 'text';
      const mediaUrl = document.getElementById('form-media-url').value.trim();

      if (!message) return;

      const newEntry = {
        user,
        role,
        platform,
        rarity,
        type,
        message,
        avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(user)}`
      };

      if (type === 'image' && mediaUrl) {
        newEntry.image = mediaUrl;
        newEntry.caption = 'Fanart compartido por ' + user;
      } else if (type === 'clip' && mediaUrl) {
        newEntry.clipTitle = 'Momento especial compartido por ' + user;
        newEntry.videoUrl = mediaUrl;
        newEntry.clipThumbnail = 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80';
      }

      if (window.dedicationsManager) {
        window.dedicationsManager.addDedication(newEntry);
        window.dedicationsManager.renderFeed('dedications-feed');
      }

      // Close modal & celebrate
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      form.reset();

      if (window.soundFX) {
        window.soundFX.playVictoryFanfare();
      }
      if (window.particleEngine) {
        window.particleEngine.triggerFortniteConfetti(120);
      }

      // Scroll to dedications top
      const dedicationsSection = document.getElementById('muro-comunidad');
      if (dedicationsSection) {
        dedicationsSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

/* ========================================================
   6. CLASH ROYALE LEGENDARY CHEST MODAL
   ======================================================== */
function setupLegendaryChest() {
  const openChestBtn = document.getElementById('open-legendary-chest-btn');
  const chestModal = document.getElementById('chest-modal');
  const closeChestBtn = document.getElementById('close-chest-modal-btn');
  const chestAnimatedBox = document.getElementById('chest-animated-box');
  const chestRewardContent = document.getElementById('chest-reward-content');

  if (openChestBtn && chestModal) {
    openChestBtn.addEventListener('click', () => {
      chestModal.classList.remove('hidden');
      chestModal.classList.add('flex');
      
      // Reset state
      if (chestAnimatedBox) chestAnimatedBox.classList.remove('hidden');
      if (chestRewardContent) chestRewardContent.classList.add('hidden');

      if (window.soundFX) window.soundFX.playHover();
    });
  }

  // Trigger opening on chest click
  if (chestAnimatedBox) {
    chestAnimatedBox.addEventListener('click', () => {
      if (window.soundFX) window.soundFX.playChestOpen();

      // Shake and open animation
      chestAnimatedBox.classList.add('animate-bounce');
      
      setTimeout(() => {
        chestAnimatedBox.classList.add('hidden');
        chestAnimatedBox.classList.remove('animate-bounce');
        if (chestRewardContent) {
          chestRewardContent.classList.remove('hidden');
          chestRewardContent.classList.add('animate-fade-in');
        }
        if (window.particleEngine) {
          window.particleEngine.triggerFortniteConfetti(100);
          window.particleEngine.spawnMinecraftXPOrbs(window.innerWidth / 2, window.innerHeight / 2, 25);
        }
      }, 1200);
    });
  }

  if (closeChestBtn && chestModal) {
    closeChestBtn.addEventListener('click', () => {
      chestModal.classList.add('hidden');
      chestModal.classList.remove('flex');
    });
  }
}

/* ========================================================
   7. MINECRAFT EASTER EGGS (HEARTS & SOUNDS)
   ======================================================== */
function setupMinecraftEasterEggs() {
  const mcHearts = document.querySelectorAll('.minecraft-heart-el');
  const soundXpButtons = document.querySelectorAll('.mc-xp-trigger');

  mcHearts.forEach(heart => {
    heart.addEventListener('click', (e) => {
      if (window.soundFX) window.soundFX.playMinecraftXP(1.2);
      const rect = heart.getBoundingClientRect();
      if (window.particleEngine) {
        window.particleEngine.spawnMinecraftXPOrbs(rect.left + 10, rect.top, 8);
      }
      heart.classList.add('scale-150');
      setTimeout(() => heart.classList.remove('scale-150'), 300);
    });
  });

  soundXpButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (window.soundFX) window.soundFX.playMinecraftXP();
      const rect = btn.getBoundingClientRect();
      if (window.particleEngine) {
        window.particleEngine.spawnMinecraftXPOrbs(rect.left + rect.width / 2, rect.top + rect.height / 2, 10);
      }
    });
  });
}

/* ========================================================
   8. LIGHTBOX & CLIP MODAL HELPERS
   ======================================================== */
window.openLightbox = function(imgSrc, caption) {
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');

  if (lightbox && lightboxImg) {
    lightboxImg.src = imgSrc;
    if (lightboxCaption) lightboxCaption.textContent = decodeURIComponent(caption || '');
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
    if (window.soundFX) window.soundFX.playFortniteClick();
  }
};

window.closeLightbox = function() {
  const lightbox = document.getElementById('lightbox-modal');
  if (lightbox) {
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
  }
};

window.openClipModal = function(title, videoUrl) {
  const modal = document.getElementById('clip-player-modal');
  const clipTitleEl = document.getElementById('modal-clip-title');
  const clipIframe = document.getElementById('modal-clip-iframe');

  if (modal && clipIframe) {
    clipIframe.src = videoUrl;
    if (clipTitleEl) clipTitleEl.textContent = title;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    if (window.soundFX) window.soundFX.playFortniteClick();
  }
};

window.closeClipModal = function() {
  const modal = document.getElementById('clip-player-modal');
  const clipIframe = document.getElementById('modal-clip-iframe');
  if (modal) {
    if (clipIframe) clipIframe.src = '';
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};
