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

  // 4. Setup Cursor Arsenal & Customization Panel
  setupCursorCustomization();

  // 5. Setup Level 25 Battle Pass Celebration
  setupLevel25Celebration();

  // 6. Setup Shield Potion HUD mechanic
  setupShieldMechanic();

  // 7. Setup Year in Review filter tabs
  setupYearInReviewFilters();

  // 8. Setup Legendary Chest Easter Egg
  setupLegendaryChest();

  // 10. Setup Minecraft XP interactions
  setupMinecraftEasterEggs();

  // 11. Setup Chart Point Hover Interactions
  setupChartInteractions();

  // 12. Setup Cookie Policy & Privacy Modal / Banner
  setupCookiePolicy();

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
   2. CURSOR ARSENAL & CUSTOMIZATION PANEL
   ======================================================== */
const CURSOR_THEMES = {
  poppy: {
    id: 'poppy',
    name: 'Guante Poppy',
    game: 'Poppy Playtime',
    class: 'cursor-mode-poppy',
    icon: 'assets/images/grabpack-blue.svg',
    sound: 'playFortniteClick'
  },
  fortnite: {
    id: 'fortnite',
    name: 'Pico Fortnite',
    game: 'Fortnite Battle Royale',
    class: 'cursor-mode-fortnite',
    icon: 'assets/images/fortnite-pickaxe.svg',
    sound: 'playFortniteClick'
  },
  minecraft: {
    id: 'minecraft',
    name: 'Pico Diamante',
    game: 'Minecraft Hardcore',
    class: 'cursor-mode-minecraft',
    icon: 'assets/images/minecraft-diamond-pickaxe.svg',
    sound: 'playMinecraftXP'
  },
  clash: {
    id: 'clash',
    name: 'Corona Royale',
    game: 'Clash Royale',
    class: 'cursor-mode-clash',
    icon: 'assets/images/clash-crown-cursor.svg',
    sound: 'playCrownSound'
  }
};

let activeCursorId = 'fortnite';

function equipCursor(cursorId, playEffects = false) {
  if (!CURSOR_THEMES[cursorId]) cursorId = 'fortnite';
  activeCursorId = cursorId;
  const config = CURSOR_THEMES[cursorId];

  // 1. Update body classes
  Object.values(CURSOR_THEMES).forEach(t => {
    document.body.classList.remove(t.class);
  });
  document.body.classList.remove('fortnite-cursor-active', 'grabpack-cursor-active');
  document.body.classList.add(config.class);

  // 2. Update Header Button Indicator
  const headerIcon = document.getElementById('header-active-cursor-icon');
  const headerName = document.getElementById('header-active-cursor-name');
  if (headerIcon) headerIcon.src = config.icon;
  if (headerName) headerName.textContent = config.name;

  // 3. Update Modal Cards UI
  const cards = document.querySelectorAll('.cursor-option-card');
  cards.forEach(card => {
    const cardId = card.getAttribute('data-cursor-id');
    const dot = card.querySelector('.status-dot');
    const text = card.querySelector('.status-text');

    if (cardId === cursorId) {
      card.classList.add('active-cursor');
      if (dot) {
        dot.className = 'w-2 h-2 rounded-full bg-yellow-400 status-dot shadow-[0_0_8px_#facc15]';
      }
      if (text) {
        text.innerHTML = '<strong class="text-yellow-400">✓ EQUIPADO</strong>';
      }
    } else {
      card.classList.remove('active-cursor');
      if (dot) {
        dot.className = 'w-2 h-2 rounded-full bg-gray-500 status-dot';
      }
      if (text) {
        text.textContent = 'Click para equipar';
      }
    }
  });

  // 4. Save to localStorage
  try {
    localStorage.setItem('imarixu_active_cursor', cursorId);
  } catch (e) {
    // ignore
  }

  // 5. Sound & Particles if manual change
  if (playEffects) {
    if (window.soundFX) {
      if (config.sound === 'playMinecraftXP') window.soundFX.playMinecraftXP(1.2);
      else if (config.sound === 'playCrownSound') window.soundFX.playCrownSound();
      else window.soundFX.playFortniteClick();
    }
    if (window.particleEngine) {
      window.particleEngine.triggerFortniteConfetti(45);
    }
  }
}

function setupCursorCustomization() {
  const modal = document.getElementById('cursor-customization-modal');
  const openBtn = document.getElementById('open-cursor-modal-btn');
  const closeBtn = document.getElementById('close-cursor-modal-btn');
  const cards = document.querySelectorAll('.cursor-option-card');

  // Load saved preference or default to 'fortnite'
  let saved = null;
  try {
    saved = localStorage.getItem('imarixu_active_cursor');
  } catch (e) {}
  equipCursor(saved || 'fortnite', false);

  // Modal open
  if (openBtn && modal) {
    openBtn.addEventListener('click', () => {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      if (window.soundFX) window.soundFX.playFortniteClick();
    });
  }

  // Modal close
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    });
  }

  // Backdrop click close
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    });
  }

  // Card click to equip
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const cursorId = card.getAttribute('data-cursor-id');
      equipCursor(cursorId, true);
    });
  });

  // Keyboard shortcut: ESC to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  });
}

/* ========================================================
   2.1. LEVEL 25 BATTLE PASS CELEBRATION
   ======================================================== */
function setupLevel25Celebration() {
  const levelTriggers = document.querySelectorAll('.level25-trigger');
  levelTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      const rect = trigger.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      if (window.soundFX) {
        window.soundFX.playLevelUp();
      }

      if (window.particleEngine) {
        window.particleEngine.triggerFortniteConfetti(120);
        window.particleEngine.spawnMinecraftXPOrbs(cx, cy, 20);
      }

      // Visual flash animation on badge
      const badge = document.querySelector('.badge-level25-pulse');
      if (badge) {
        badge.classList.add('scale-125');
        setTimeout(() => badge.classList.remove('scale-125'), 400);
      }
    });
  });
}

/* ========================================================
   3. HERO NAVIGATION ("LISTO" BUTTON)
   ======================================================== */
function setupShieldMechanic() {
  const navBtn = document.getElementById('hero-shield-action-btn');
  if (navBtn) {
    navBtn.addEventListener('click', (event) => {
      event.preventDefault();
      if (window.soundFX) window.soundFX.playFortniteClick();
      const yearSection = document.getElementById('year-in-review');
      if (yearSection) {
        yearSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
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
  const clipVideo = document.getElementById('modal-clip-video');

  if (modal) {
    if (clipTitleEl) clipTitleEl.textContent = title;

    const isMp4OrLocal = videoUrl && (videoUrl.endsWith('.mp4') || videoUrl.endsWith('.webm') || videoUrl.startsWith('assets/'));
    
    if (isMp4OrLocal && clipVideo) {
      if (clipIframe) {
        clipIframe.src = '';
        clipIframe.classList.add('hidden');
      }
      clipVideo.src = videoUrl;
      clipVideo.classList.remove('hidden');
      clipVideo.currentTime = 0;
      clipVideo.play().catch(() => {});
    } else if (clipIframe) {
      if (clipVideo) {
        clipVideo.pause();
        clipVideo.src = '';
        clipVideo.classList.add('hidden');
      }
      clipIframe.src = videoUrl;
      clipIframe.classList.remove('hidden');
    }

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    if (window.soundFX) window.soundFX.playFortniteClick();
  }
};

window.closeClipModal = function() {
  const modal = document.getElementById('clip-player-modal');
  const clipIframe = document.getElementById('modal-clip-iframe');
  const clipVideo = document.getElementById('modal-clip-video');
  if (modal) {
    if (clipVideo) {
      clipVideo.pause();
      clipVideo.src = '';
      clipVideo.classList.add('hidden');
    }
    if (clipIframe) {
      clipIframe.src = '';
      clipIframe.classList.add('hidden');
    }
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

// Global escape key listener to close modals
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    window.closeLightbox();
    window.closeClipModal();
    if (typeof window.closeCookiesModal === 'function') {
      window.closeCookiesModal();
    }
  }
});

// Support-A-Creator Code: ARIXU copy interaction
window.copyCreatorCode = function(btn) {
  const code = 'ARIXU';
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(code).catch(() => {});
  } else {
    const textarea = document.createElement('textarea');
    textarea.value = code;
    document.body.appendChild(textarea);
    textarea.select();
    try { document.execCommand('copy'); } catch(e) {}
    document.body.removeChild(textarea);
  }
  
  if (window.soundFX && window.soundFX.playFortniteClick) {
    window.soundFX.playFortniteClick();
  }
  
  if (btn) {
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<span>✅</span><span class="font-black">¡COPIADO: ARIXU!</span>';
    btn.classList.add('bg-emerald-400', 'from-emerald-400', 'to-teal-400');
    setTimeout(() => {
      btn.innerHTML = originalHTML;
      btn.classList.remove('bg-emerald-400', 'from-emerald-400', 'to-teal-400');
    }, 2200);
  }
};

/* ========================================================
   11. CÓDIGO ARIXU GROWTH CHART HOVER INTERACTIONS
   ======================================================== */
function setupChartInteractions() {
  const pointGroups = document.querySelectorAll('.chart-point-group');
  const hudBadge = document.getElementById('chart-hover-indicator');
  const defaultText = hudBadge ? hudBadge.innerHTML : '';

  if (!pointGroups.length) return;

  pointGroups.forEach(group => {
    const month = group.getAttribute('data-month');
    const val = group.getAttribute('data-val');
    const tag = group.getAttribute('data-tag');

    const handleEnter = () => {
      // Clear active class from all other points
      pointGroups.forEach(g => g.classList.remove('is-active'));
      group.classList.add('is-active');

      // Soft audio feedback when hovering over a month
      if (window.soundFX && window.soundFX.playMinecraftXP && !group._soundCooldown) {
        window.soundFX.playMinecraftXP(1.1);
        group._soundCooldown = true;
        setTimeout(() => { group._soundCooldown = false; }, 160);
      }

      // Update HUD badge text and styling
      if (hudBadge && month && val) {
        const tagHTML = tag ? `<span class="ml-1 text-[10px] px-1.5 py-0.5 rounded bg-yellow-400 text-black font-black uppercase tracking-wider">${tag}</span>` : '';
        hudBadge.innerHTML = `<span class="text-yellow-300">📈</span> <strong class="text-white">${month}:</strong> <span class="text-yellow-300 font-bold">${val} personas</span> ${tagHTML}`;
        hudBadge.classList.add('border-yellow-400/90', 'bg-yellow-400/20', 'shadow-[0_0_12px_rgba(244,196,48,0.4)]');
        hudBadge.classList.remove('border-purple-600/60', 'bg-purple-950/90');
      }
    };

    const handleLeave = () => {
      group.classList.remove('is-active');
      if (hudBadge) {
        hudBadge.innerHTML = defaultText;
        hudBadge.classList.remove('border-yellow-400/90', 'bg-yellow-400/20', 'shadow-[0_0_12px_rgba(244,196,48,0.4)]');
        hudBadge.classList.add('border-purple-600/60', 'bg-purple-950/90');
      }
    };

    group.addEventListener('mouseenter', handleEnter);
    group.addEventListener('mouseleave', handleLeave);

    // Mobile touch interaction
    group.addEventListener('touchstart', () => {
      handleEnter();
    }, { passive: true });
  });

  // Touch outside to dismiss active point on mobile
  document.addEventListener('touchstart', (e) => {
    if (!e.target.closest('.chart-point-group')) {
      pointGroups.forEach(g => g.classList.remove('is-active'));
      if (hudBadge) {
        hudBadge.innerHTML = defaultText;
        hudBadge.classList.remove('border-yellow-400/90', 'bg-yellow-400/20', 'shadow-[0_0_12px_rgba(244,196,48,0.4)]');
        hudBadge.classList.add('border-purple-600/60', 'bg-purple-950/90');
      }
    }
  }, { passive: true });
}

/* ========================================================
   12. COOKIE POLICY & PRIVACY MODAL / BANNER
   ======================================================== */
function setupCookiePolicy() {
  const cookiesModal = document.getElementById('cookies-modal');
  const openBtn = document.getElementById('open-cookies-modal-btn');
  const closeBtn = document.getElementById('close-cookies-modal-btn');
  const acceptModalBtn = document.getElementById('accept-cookies-modal-btn');
  const banner = document.getElementById('cookie-banner');
  const bannerAcceptBtn = document.getElementById('banner-accept-cookies-btn');
  const bannerOpenBtn = document.getElementById('banner-open-modal-btn');
  const bannerCloseBtn = document.getElementById('banner-close-btn');

  const openCookiesModal = () => {
    if (!cookiesModal) return;
    cookiesModal.classList.remove('hidden');
    cookiesModal.classList.add('flex');
    if (window.soundFX && window.soundFX.playFortniteClick) {
      window.soundFX.playFortniteClick();
    }
  };

  const closeCookiesModal = () => {
    if (!cookiesModal) return;
    cookiesModal.classList.add('hidden');
    cookiesModal.classList.remove('flex');
  };

  window.openCookiesModal = openCookiesModal;
  window.closeCookiesModal = closeCookiesModal;

  const acceptCookies = () => {
    try {
      localStorage.setItem('imarixu_cookies_accepted', 'true');
    } catch (e) {}

    closeCookiesModal();

    if (banner) {
      banner.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      banner.style.opacity = '0';
      banner.style.transform = 'translateY(16px)';
      setTimeout(() => banner.classList.add('hidden'), 350);
    }

    if (window.soundFX && window.soundFX.playFortniteClick) {
      window.soundFX.playFortniteClick();
    }
  };

  const dismissBanner = () => {
    try {
      localStorage.setItem('imarixu_cookies_accepted', 'dismissed');
    } catch (e) {}

    if (banner) {
      banner.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      banner.style.opacity = '0';
      banner.style.transform = 'translateY(16px)';
      setTimeout(() => banner.classList.add('hidden'), 350);
    }
  };

  // Open & Close triggers
  if (openBtn) openBtn.addEventListener('click', openCookiesModal);
  if (closeBtn) closeBtn.addEventListener('click', closeCookiesModal);
  if (acceptModalBtn) acceptModalBtn.addEventListener('click', acceptCookies);

  // Banner triggers
  if (bannerAcceptBtn) bannerAcceptBtn.addEventListener('click', acceptCookies);
  if (bannerOpenBtn) bannerOpenBtn.addEventListener('click', openCookiesModal);
  if (bannerCloseBtn) bannerCloseBtn.addEventListener('click', dismissBanner);

  // Backdrop click to close
  if (cookiesModal) {
    cookiesModal.addEventListener('click', (e) => {
      if (e.target === cookiesModal) {
        closeCookiesModal();
      }
    });
  }

  // Check initial banner visibility
  try {
    const isConsentGiven = localStorage.getItem('imarixu_cookies_accepted');
    if (!isConsentGiven && banner) {
      setTimeout(() => {
        banner.classList.remove('hidden');
      }, 1000);
    }
  } catch (e) {
    if (banner) banner.classList.remove('hidden');
  }
}
