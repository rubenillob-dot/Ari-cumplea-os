/**
 * dedications.js - Community Dedications Feed for ImArixu Birthday
 * Supports text, fanart/images, video/clips, rarity borders, and interactive reactions.
 * Stores extra dedications in localStorage.
 */

const DEFAULT_DEDICATIONS = [
  {
    id: 'ded-1',
    user: 'SoyTuDuoFavorito',
    platform: 'twitch',
    role: 'Dúo Legendario',
    rarity: 'mythic', // mythic, legendary, epic, rare
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&auto=format&fit=crop&q=80',
    type: 'text',
    message: '¡¡Feliz cumpleaños Arixu!! 🎂👑 Gracias por revivirme siempre que me caigo de la rampa y por carrilearme en los finales de partida más tensos. ¡Que este nuevo año venga cargado de más Victorias Campales y coronas infinitas! Eres la mejor streamer.',
    reactions: { gg: 42, shield: 28, crown: 65 },
    date: 'Hoy a las 15:30'
  },
  {
    id: 'ded-2',
    user: 'PapiLlama_Fanart',
    platform: 'discord',
    role: 'Artista de la Comunidad',
    rarity: 'legendary',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80',
    caption: '¡Fanart especial de cumpleaños! ImArixu con la corona de Clash Royale y el pico de Fortnite listo para rushear el nuevo nivel 🎉✨',
    message: '¡Muchas felicidades Ari! Te dejamos este dibujo con todo el cariño de la comunidad de Discord. ¡A celebrarlo por todo lo alto!',
    reactions: { gg: 89, shield: 45, crown: 112 },
    date: 'Hoy a las 14:15'
  },
  {
    id: 'ded-3',
    user: 'TryhardMaster_99',
    platform: 'twitch',
    role: 'VIP & Mod',
    rarity: 'epic',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    type: 'clip',
    clipTitle: 'Clip Mítico: ¡El clutch 1v4 en zona final con 1 de vida!',
    clipDuration: '0:45',
    clipThumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1', // placeholder video player modal
    message: 'No podía faltar recordar el clip del año. ¡Casi rompes los cascos del grito pero nos diste la partida del siglo! Feliz cumple capitana 🔥🚀',
    reactions: { gg: 74, shield: 63, crown: 91 },
    date: 'Hoy a las 13:02'
  },
  {
    id: 'ded-4',
    user: 'MiniPocionera',
    platform: 'twitch',
    role: 'Sub Nivel 24',
    rarity: 'rare',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    type: 'text',
    message: '¡Feliz cumple Ari! Ver tus streams después de un día duro siempre me saca una sonrisa enorme. Que cumplas muchísimos más y que nunca falten los minis de 50 en tu inventario. ¡GG WP!',
    reactions: { gg: 35, shield: 52, crown: 40 },
    date: 'Hoy a las 11:45'
  },
  {
    id: 'ded-5',
    user: 'Huggy_Wuggy_Fan',
    platform: 'discord',
    role: 'Experto en Sustos',
    rarity: 'legendary',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80',
    type: 'text',
    message: '¡Feliz cumpleaños Arixu! Aún recuerdo cuando jugaste a Poppy Playtime y casi tiras la cámara por la ventana con el GrabPack jajaja. ¡Los mejores momentos siempre! Pásalo genial con toda tu gente 💙❤️',
    reactions: { gg: 61, shield: 19, crown: 54 },
    date: 'Ayer a las 22:18'
  }
];

class DedicationsManager {
  constructor() {
    this.storageKey = 'imarixu_birthday_dedications_v1';
    this.dedications = this.loadDedications();
  }

  loadDedications() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Error loading saved dedications', e);
      }
    }
    return [...DEFAULT_DEDICATIONS];
  }

  save() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.dedications));
  }

  addDedication(newDed) {
    const item = {
      id: 'user-ded-' + Date.now(),
      reactions: { gg: 1, shield: 1, crown: 1 },
      date: 'Justo ahora',
      ...newDed
    };
    this.dedications.unshift(item);
    this.save();
    return item;
  }

  addReaction(id, reactionType) {
    const item = this.dedications.find(d => d.id === id);
    if (item && item.reactions[reactionType] !== undefined) {
      item.reactions[reactionType]++;
      this.save();
      return item.reactions[reactionType];
    }
    return 0;
  }

  getRarityConfig(rarity) {
    switch (rarity) {
      case 'mythic':
        return {
          label: 'MÍTICO',
          border: 'border-amber-400',
          bg: 'from-amber-500/20 to-red-500/10',
          badgeBg: 'bg-gradient-to-r from-amber-500 to-red-500 text-black',
          glow: 'shadow-[0_0_20px_rgba(245,158,11,0.35)]'
        };
      case 'legendary':
        return {
          label: 'LEGENDARIO',
          border: 'border-yellow-400',
          bg: 'from-yellow-500/20 to-amber-600/10',
          badgeBg: 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black',
          glow: 'shadow-[0_0_20px_rgba(234,179,8,0.3)]'
        };
      case 'epic':
        return {
          label: 'ÉPICO',
          border: 'border-purple-500',
          bg: 'from-purple-600/20 to-indigo-600/10',
          badgeBg: 'bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white',
          glow: 'shadow-[0_0_20px_rgba(168,85,247,0.3)]'
        };
      case 'rare':
      default:
        return {
          label: 'RARO / SLURP',
          border: 'border-cyan-400',
          bg: 'from-cyan-500/20 to-blue-600/10',
          badgeBg: 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black',
          glow: 'shadow-[0_0_20px_rgba(6,182,212,0.3)]'
        };
    }
  }

  renderFeed(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = this.dedications.map(item => {
      const cfg = this.getRarityConfig(item.rarity || 'rare');

      let mediaContent = '';
      if (item.type === 'image' && item.image) {
        mediaContent = `
          <div class="mt-4 rounded-xl overflow-hidden border-2 border-white/10 group cursor-pointer relative" onclick="openLightbox('${item.image}', '${encodeURIComponent(item.caption || 'Fanart para ImArixu')}')">
            <img src="${item.image}" alt="Fanart" class="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300" loading="lazy">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
              <span class="text-xs text-white/90 flex items-center gap-1 font-semibold">
                <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/></svg>
                Ver imagen completa
              </span>
            </div>
          </div>
          ${item.caption ? `<p class="text-xs text-yellow-200/80 italic mt-2">${item.caption}</p>` : ''}
        `;
      } else if (item.type === 'clip') {
        mediaContent = `
          <div class="mt-4 rounded-xl overflow-hidden border-2 border-purple-500/40 relative bg-black/60 group cursor-pointer" onclick="openClipModal('${item.clipTitle}', '${item.videoUrl}')">
            <img src="${item.clipThumbnail}" alt="Clip preview" class="w-full h-52 object-cover opacity-80 group-hover:opacity-100 group-hover:scale-102 transition-all">
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-14 h-14 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 20 20"><polygon points="5 3 19 10 5 17 5 3"/></svg>
              </div>
            </div>
            <div class="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur px-3 py-1.5 rounded-lg flex items-center justify-between text-xs font-bold text-white">
              <span class="truncate">${item.clipTitle || 'Ver Clip'}</span>
              <span class="text-yellow-400 ml-2 font-mono">${item.clipDuration || 'CLIP'}</span>
            </div>
          </div>
        `;
      }

      return `
        <article class="feed-card relative bg-[#130b28]/90 backdrop-blur-md rounded-2xl p-5 md:p-6 border-2 ${cfg.border} ${cfg.glow} transition-all duration-300 hover:-translate-y-1" data-id="${item.id}">
          <!-- Angled Cut Ribbon Tag -->
          <div class="absolute -top-3.5 right-6 ${cfg.badgeBg} font-black text-[11px] uppercase tracking-wider px-3 py-0.5 rounded-md skew-x-[-10deg] shadow-md border border-black/40">
            ${cfg.label}
          </div>

          <!-- User Header -->
          <div class="flex items-center gap-3.5 mb-3">
            <!-- Avatar with Rarity Ring -->
            <div class="relative">
              <div class="w-13 h-13 rounded-full p-0.5 bg-gradient-to-tr ${cfg.border === 'border-amber-400' ? 'from-amber-400 to-red-500' : 'from-purple-500 to-cyan-400'} shadow-md">
                <img src="${item.avatar}" alt="${item.user}" class="w-12 h-12 rounded-full object-cover border-2 border-[#130b28]">
              </div>
              <span class="absolute -bottom-1 -right-1 bg-purple-900 border border-purple-400 rounded-full p-0.5" title="${item.platform}">
                ${item.platform === 'twitch' ? 
                  `<svg class="w-3.5 h-3.5 text-purple-300" fill="currentColor" viewBox="0 0 24 24"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/></svg>` : 
                  `<svg class="w-3.5 h-3.5 text-indigo-300" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>`
                }
              </span>
            </div>

            <!-- Nickname & Badges -->
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="font-burbank text-lg font-bold text-white tracking-wide truncate">${item.user}</span>
                <span class="text-[10px] uppercase font-black px-2 py-0.5 rounded bg-purple-950/80 text-purple-300 border border-purple-700/60">${item.role}</span>
              </div>
              <span class="text-[11px] text-gray-400 block">${item.date}</span>
            </div>
          </div>

          <!-- Message Body -->
          <p class="text-gray-200 text-sm md:text-base leading-relaxed font-sans font-medium whitespace-pre-line">
            ${item.message}
          </p>

          <!-- Media attachment (if any) -->
          ${mediaContent}

          <!-- Interactive Reaction Counters (GG, Mini Escudo, Golden Crown) -->
          <div class="mt-5 pt-4 border-t border-purple-900/60 flex items-center justify-between flex-wrap gap-2">
            <div class="flex items-center gap-2">
              <!-- GG Button -->
              <button onclick="handleReaction('${item.id}', 'gg', event)" class="reaction-btn flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-950/70 hover:bg-purple-800/80 border border-purple-700/50 hover:border-yellow-400 text-xs font-bold text-yellow-300 transition-all active:scale-95">
                <span class="font-black text-sm">GG</span>
                <span class="counter-val text-white/90" id="cnt-${item.id}-gg">${item.reactions.gg}</span>
              </button>

              <!-- Shield Potion Button -->
              <button onclick="handleReaction('${item.id}', 'shield', event)" class="reaction-btn flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-950/70 hover:bg-cyan-950/80 border border-cyan-800/60 hover:border-cyan-400 text-xs font-bold text-cyan-300 transition-all active:scale-95">
                <img src="assets/images/shield-potion.svg" class="w-4 h-4" alt="Mini">
                <span class="counter-val text-white/90" id="cnt-${item.id}-shield">${item.reactions.shield}</span>
              </button>

              <!-- Clash Royale Crown Button -->
              <button onclick="handleReaction('${item.id}', 'crown', event)" class="reaction-btn flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-950/70 hover:bg-amber-950/80 border border-amber-700/60 hover:border-amber-400 text-xs font-bold text-amber-300 transition-all active:scale-95">
                <img src="assets/images/crown.svg" class="w-4 h-4" alt="Corona">
                <span class="counter-val text-white/90" id="cnt-${item.id}-crown">${item.reactions.crown}</span>
              </button>
            </div>

            <!-- Share / Highlight flair -->
            <span class="text-[11px] text-purple-400/80 font-mono flex items-center gap-1">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              En directo
            </span>
          </div>
        </article>
      `;
    }).join('');
  }
}

window.dedicationsManager = new DedicationsManager();
