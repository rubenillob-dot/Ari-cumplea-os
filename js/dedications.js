/**
 * dedications.js - Community Dedications Feed for ImArixu Birthday
 * Supports text, fanart/images, video/clips, song/music with synchronized lyrics, rarity borders, and interactive reactions.
 * Stores extra dedications in localStorage.
 */

const FERDINANG_LYRICS = [
  { time: 0, text: "🎶 [Intro Musical Flamenca / Rumba]" },
  { time: 13, text: "¡Ay, qué noche más bonita!" },
  { time: 16.5, text: "¡Veinticinco primaveras!" },
  { time: 20, text: "Hoy le cantamos a Ariadna," },
  { time: 24, text: "¡la reina de nuestra fiesta!" },
  { time: 36, text: "Hoy es tu día, llegó tu cumpleaños," },
  { time: 41, text: "y todo el chat te quiere celebrar," },
  { time: 47, text: "con tu constancia y tus grandes ideas," },
  { time: 52, text: "cada día más lejos vas a llegar." },
  { time: 57, text: "Con esa fuerza que nunca se rinde," },
  { time: 61.5, text: "con esa chispa que sabe enganchar," },
  { time: 66, text: "eres la reina de nuestra familia," },
  { time: 69.5, text: "y hoy nadie te va a olvidar." },
  { time: 73, text: "Dice que entrena en el pádel," },
  { time: 76, text: "¡vaya manera de jugar!" },
  { time: 79, text: "Con ese cuerpazo, niña," },
  { time: 82, text: "¡que no deje de entrenar!" },
  { time: 85, text: "¡ARI-ADNA-NANA!" },
  { time: 87.5, text: "¡ARI-ADNA-NANA!" },
  { time: 90.5, text: "Veinticinco primaveras," },
  { time: 93.5, text: "¡hoy te vamos a cantar!" },
  { time: 96.5, text: "¡ARI-ADNA-NANA!" },
  { time: 99.5, text: "¡ARI-ADNA-NANA!" },
  { time: 102, text: "¡Reina de nuestro corazón," },
  { time: 104.5, text: "que cumplas muchos más!" },
  { time: 108, text: "Gracias, moderadores, por estar a su lado," },
  { time: 112, text: "los VIPs y la plebe ya vienen preparados." },
  { time: 115, text: "Podemos rondarte en este día especial," },
  { time: 118, text: "porque contigo, Ariadna, ¡lo vamos a celebrar!" },
  { time: 121, text: "Para las buenas y las mejores," },
  { time: 124, text: "aquí contigo estaremos," },
  { time: 127, text: "que aunque pasen los días y cambien las horas," },
  { time: 130.5, text: "siempre en el corazón te llevaremos." },
  { time: 134, text: "Y Simba te canta: «¡Cumpleaños feliz!»," },
  { time: 139, text: "con todo el cariño que sentimos por ti." },
  { time: 144, text: "Cumpleaños feliz," },
  { time: 147.5, text: "cumpleaños feliz," },
  { time: 151, text: "te deseamos, Ariadna," },
  { time: 155, text: "¡cumpleaños feliz!" },
  { time: 159, text: "¡ARI-ADNA-NANA!" },
  { time: 162, text: "¡ARI-ADNA-NANA!" },
  { time: 165, text: "Veinticinco primaveras," },
  { time: 168, text: "¡hoy te vamos a cantar!" },
  { time: 171.5, text: "¡ARI-ADNA-NANA!" },
  { time: 174.5, text: "¡ARI-ADNA-NANA!" },
  { time: 177, text: "¡Reina de nuestro corazón," },
  { time: 180, text: "que cumplas muchos más!" },
  { time: 187, text: "¡Ole, Ariadna!" },
  { time: 191, text: "¡Ole tu arte y tu salero!" },
  { time: 195, text: "¡Tu familia te quiere," },
  { time: 198.5, text: "hoy y el año entero!" },
  { time: 202.5, text: "¡Veinticinco primaveras!" },
  { time: 206, text: "¡Y que cumplas muchos más!" },
  { time: 212, text: "🎉 [Fin de fiesta • ¡Viva Ariadna!]" }
];

const DEFAULT_DEDICATIONS = [
  {
    id: 'ded-ferdinang',
    user: 'Ferdinang',
    platform: 'twitch',
    role: 'VIP & MOD • CANCIÓN ORIGINAL 🎵',
    rarity: 'mythic',
    avatar: 'assets/Iconos de perfiles/Ferdinang.webp',
    type: 'song',
    songTitle: 'FELICIDADES',
    audioUrl: 'assets/Dedicatorias/Ferdinang.mp3',
    message: '¡Muchas felicidades Ariadna! 🎂👑 25 primaveras no se cumplen todos los días. Te he preparado esta canción con todo el cariño de nuestra familia y de todo el chat para celebrarlo por todo lo alto. ¡Sube el volumen, cántala con nosotros y disfruta de tu día reina!',
    reactions: { gg: 154, shield: 92, crown: 210 },
    date: 'Hoy a las 16:00'
  },
  {
    id: 'ded-rubenillo',
    user: 'Rubenillo',
    platform: 'twitch',
    role: 'MODERADOR',
    rarity: 'mythic',
    avatar: 'assets/Iconos de perfiles/Rubenillo.webp',
    type: 'image',
    image: 'assets/Dedicatorias/Rubenillo.png',
    caption: 'Recuerdo especial de Rubenillo con Ariadna',
    message: `Ari, familia... hoy cuelgo la placa de moderador un momento para hablaros simplemente desde el corazón.

Mirar atrás y ver todo lo que hemos construido juntos este último año es increíble. Ari, gracias infinitas por darme la oportunidad de cuidar esta comunidad desde primera línea y confiar en mí para proteger este espacio. He visto de cerca tu esfuerzo incansable detrás de cada directo, y acompañarte hasta lograr la meta del tan soñado Partner de Twitch ha sido un orgullo inmenso.

Ese 'check' morado no es solo una marca, es el reflejo de tu constancia y del refugio tan bonito que has creado para todos nosotros.

Felicidades, Ari. Te lo has ganado a pulso. A por el siguiente nivel, porque esto acaba de empezar y aquí seguiremos, siempre cubriéndote las espaldas. 💜`,
    reactions: { gg: 188, shield: 115, crown: 245 },
    date: 'Hoy a las 16:15'
  },
  {
    id: 'ded-1',
    user: 'SITOGAMER',
    platform: 'twitch',
    role: 'DÚO LEGENDARIO',
    rarity: 'mythic', // mythic, legendary, epic, rare
    avatar: 'assets/images/sitogamer-avatar.svg',
    type: 'text',
    message: '¡¡Feliz cumpleaños Arixu!! 🎂👑 Gracias por revivirme siempre que me caigo de la rampa y por carrilearme en los finales de partida más tensos. ¡Que este nuevo año venga cargado de más Victorias Campales y coronas infinitas! Eres la mejor streamer.',
    reactions: { gg: 42, shield: 28, crown: 65 },
    date: 'Hoy a las 15:30'
  },
  {
    id: 'ded-2',
    user: 'LUSANITO',
    platform: 'twitch',
    role: 'COMUNIDAD TWITCH',
    rarity: 'legendary',
    avatar: '',
    type: 'text',
    message: '¡Muchas felicidades Ari! Te dejamos esta dedicatoria con todo el cariño de la comunidad de Twitch. ¡A celebrarlo por todo lo alto y a seguir sumando niveles y victorias en directo!',
    reactions: { gg: 89, shield: 45, crown: 112 },
    date: 'Hoy a las 14:15'
  },
  {
    id: 'ded-3',
    user: 'G4PALAU',
    platform: 'twitch',
    role: 'VIP & MOD',
    rarity: 'epic',
    avatar: '',
    type: 'text',
    message: 'No podía faltar recordar los mejores momentos de los directos. ¡Casi rompes los cascos del grito pero nos diste momentos legendarios moderando el chat! Feliz cumple capitana 🔥🚀',
    reactions: { gg: 74, shield: 63, crown: 91 },
    date: 'Hoy a las 13:02'
  },
  {
    id: 'ded-4',
    user: 'BANQUITO',
    platform: 'twitch',
    role: 'TWITCH CHAT',
    rarity: 'rare',
    avatar: '',
    type: 'text',
    message: '¡Feliz cumple Ari! Ver tus streams después de un día duro siempre me saca una sonrisa enorme. Que cumplas muchísimos más y que nunca falten los minis de 50 en tu inventario. ¡GG WP!',
    reactions: { gg: 35, shield: 52, crown: 40 },
    date: 'Hoy a las 11:45'
  },
  {
    id: 'ded-5',
    user: 'MARTA',
    platform: 'twitch',
    role: 'DÚO LEGENDARIO',
    rarity: 'legendary',
    avatar: '',
    type: 'text',
    message: '¡Feliz cumpleaños Arixu! Aún recuerdo las risas en cada stream jugando juntas y los momentos más divertidos en dúo. ¡Los mejores momentos siempre! Pásalo genial con toda tu gente 💙❤️',
    reactions: { gg: 61, shield: 19, crown: 54 },
    date: 'Ayer a las 22:18'
  },
  {
    id: 'ded-6',
    user: 'Sleezzy',
    platform: 'twitch',
    role: 'VIP & TRYHARD',
    rarity: 'epic',
    avatar: '',
    type: 'text',
    message: '¡Feliz cumpleaños Ari! Que este nivel 25 venga cargado de muchas coronas de victoria, snipes limpios y momentos inolvidables en stream. ¡A seguir rompiéndola!',
    reactions: { gg: 53, shield: 31, crown: 77 },
    date: 'Hoy a las 11:10'
  },
  {
    id: 'ded-7',
    user: 'Ferdinang',
    platform: 'twitch',
    role: 'SUB NIVEL 25',
    rarity: 'legendary',
    avatar: '',
    type: 'text',
    message: '¡Muchas felicidades Arixu! Gracias por todos los buenos momentos y las risas diarias en el chat. Eres una streamer increíble y te mereces lo mejor en tu día. ¡GG!',
    reactions: { gg: 48, shield: 39, crown: 82 },
    date: 'Hoy a las 10:45'
  },
  {
    id: 'ded-8',
    user: 'Hellkhan77',
    platform: 'twitch',
    role: 'SNIPER DE ÉLITE',
    rarity: 'mythic',
    avatar: '',
    type: 'text',
    message: '¡Feliz cumple Ari! Por otro año más de rusheos épicos, victorias campales y clutches imposibles en final de zona. ¡Pásalo genial y disfruta al máximo de tu día!',
    reactions: { gg: 70, shield: 44, crown: 95 },
    date: 'Hoy a las 10:15'
  },
  {
    id: 'ded-9',
    user: 'Abranzin',
    platform: 'twitch',
    role: 'COMUNIDAD TWITCH',
    rarity: 'rare',
    avatar: '',
    type: 'text',
    message: '¡Felicidades Ari! Qué alegría celebrar tus 25 años con toda la comunidad de Twitch. Gracias por alegrarnos las tardes con tu energía y buen rollo. ¡A por más!',
    reactions: { gg: 38, shield: 26, crown: 49 },
    date: 'Hoy a las 09:30'
  },
  {
    id: 'ded-10',
    user: 'Dante',
    platform: 'twitch',
    role: 'MODERADOR TWITCH',
    rarity: 'epic',
    avatar: '',
    type: 'text',
    message: '¡Muy feliz cumpleaños capitana! Cuidar el chat y ver cómo disfrutas de cada partida es un placer. Que este nuevo nivel te traiga muchísimos éxitos y alegrías.',
    reactions: { gg: 65, shield: 50, crown: 88 },
    date: 'Ayer a las 21:50'
  },
  {
    id: 'ded-11',
    user: 'GregorM',
    platform: 'twitch',
    role: 'SUB VETERANO',
    rarity: 'legendary',
    avatar: '',
    type: 'text',
    message: '¡Felices 25 Ari! Ya son muchos directos compartidos y partidas inolvidables. Que sigas brillando igual y que nunca falte el escudo ni las buenas partidas. ¡Felicidades!',
    reactions: { gg: 57, shield: 34, crown: 73 },
    date: 'Ayer a las 21:15'
  },
  {
    id: 'ded-12',
    user: 'laabluue',
    platform: 'twitch',
    role: 'COMUNIDAD TWITCH',
    rarity: 'rare',
    avatar: '',
    type: 'text',
    message: '¡Felicidades Arixu! Eres una inspiración y una persona súper divertida. Que pases un cumpleaños maravilloso rodeada de todos los que te quieren. ¡Un abrazo enorme!',
    reactions: { gg: 44, shield: 29, crown: 61 },
    date: 'Ayer a las 20:40'
  },
  {
    id: 'ded-13',
    user: 'ErreDeRamon',
    platform: 'twitch',
    role: 'TRYHARD DE ZONA',
    rarity: 'epic',
    avatar: '',
    type: 'text',
    message: '¡Feliz nivel 25 Ari! Que no se acaben nunca las partidas de risas, los gritos de susto y las coronas ganadas en el último segundo. ¡A celebrarlo a lo grande!',
    reactions: { gg: 62, shield: 41, crown: 85 },
    date: 'Ayer a las 19:25'
  },
  {
    id: 'ded-14',
    user: 'Arcosmen01',
    platform: 'twitch',
    role: 'DÚO DE CORONAS',
    rarity: 'legendary',
    avatar: '',
    type: 'text',
    message: '¡Muchas felicidades Ari! Siempre es un gusto verte jugar y compartir stream con la mejor comunidad. ¡Que disfrutes al máximo de tu cumpleaños, reina de Twitch!',
    reactions: { gg: 76, shield: 47, crown: 104 },
    date: 'Ayer a las 18:00'
  },
  {
    id: 'ded-15',
    user: 'jaratos',
    platform: 'twitch',
    role: 'COMUNIDAD TWITCH',
    rarity: 'epic',
    avatar: '',
    type: 'text',
    message: '¡Muchísimas felicidades Ari! Gracias por hacer directos tan divertidos y crear esta pedazo de comunidad. ¡Que este año te traiga muchísimas victorias y momentos inolvidables!',
    reactions: { gg: 51, shield: 36, crown: 68 },
    date: 'Ayer a las 17:30'
  },
  {
    id: 'ded-16',
    user: 'Joandix',
    platform: 'twitch',
    role: 'COMUNIDAD TWITCH',
    rarity: 'legendary',
    avatar: '',
    type: 'text',
    message: '¡Feliz cumpleaños Arixu! Siempre es un placer pasarse por el chat a compartir risas y buenas partidas. ¡A seguir disfrutando a tope y celebrando el nivel 25 como te mereces! 🎂👑',
    reactions: { gg: 64, shield: 42, crown: 88 },
    date: 'Ayer a las 16:45'
  },
  {
    id: 'ded-17',
    user: 'Bailen82',
    platform: 'twitch',
    role: 'COMUNIDAD TWITCH',
    rarity: 'rare',
    avatar: '',
    type: 'text',
    message: '¡Feliz cumpleaños Ari! Que nunca falte el buen rollo en directo ni los minis en el inventario para salvar la partida. ¡Que pases un día espectacular con toda tu gente! 🥤🔥',
    reactions: { gg: 47, shield: 31, crown: 62 },
    date: 'Ayer a las 16:10'
  }
];

class DedicationsManager {
  constructor() {
    this.storageKey = 'imarixu_birthday_dedications_v7';
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
    try {
      localStorage.removeItem('imarixu_birthday_dedications_v1');
      localStorage.removeItem('imarixu_birthday_dedications_v2');
      localStorage.removeItem('imarixu_birthday_dedications_v3');
      localStorage.removeItem('imarixu_birthday_dedications_v4');
      localStorage.removeItem('imarixu_birthday_dedications_v5');
      localStorage.removeItem('imarixu_birthday_dedications_v6');
    } catch (_) {}
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
          <div class="mt-4 rounded-xl overflow-hidden border-2 border-white/10 group cursor-pointer relative" onclick="openLightbox('${item.image}', '${encodeURIComponent(item.caption || 'Recuerdo especial de ' + item.user)}')">
            <img src="${item.image}" alt="Dedicatoria" class="w-full h-64 sm:h-80 md:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-300" loading="lazy">
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
      } else if (item.type === 'song') {
        mediaContent = `
          <div class="mt-5 rounded-2xl bg-[#0f0622]/95 border-2 border-yellow-400/80 p-4 sm:p-5 shadow-[0_0_25px_rgba(244,196,48,0.2)]">
            <!-- Audio element hidden -->
            <audio id="ferdinang-audio" src="${item.audioUrl}" preload="metadata"></audio>

            <!-- Main Player Controls Row -->
            <div class="flex flex-col md:flex-row items-center justify-between gap-4">
              
              <!-- Vinyl Avatar + Track Info -->
              <div class="flex items-center gap-3.5 w-full md:w-auto">
                <div class="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0">
                  <div id="vinyl-disc" class="w-full h-full rounded-full bg-gradient-to-tr from-black via-zinc-900 to-black p-1 border-2 border-zinc-700 shadow-xl flex items-center justify-center transition-transform">
                    <div class="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-yellow-400 shadow">
                      <img src="${item.avatar}" alt="Ferdinang" class="w-full h-full object-cover">
                    </div>
                  </div>
                  <span id="player-status-badge" class="absolute -bottom-1 -right-1 bg-yellow-400 text-black text-[9px] font-black px-1.5 py-0.5 rounded uppercase shadow font-mono">PAUSA</span>
                </div>

                <div class="min-w-0">
                  <h4 class="font-burbank text-lg sm:text-xl text-yellow-300 truncate tracking-wide">FELICIDADES</h4>
                  <p class="text-xs text-purple-200 truncate font-sans">25 Primaveras • Para Ariadna • <strong class="text-white">Ferdinang</strong></p>
                </div>
              </div>

              <!-- Controls + Timeline Scrubber -->
              <div class="flex flex-col items-center w-full md:max-w-md">
                <div class="flex items-center justify-center gap-3 mb-2">
                  <button onclick="skipFerdinangAudio(-10)" class="px-2.5 py-1.5 rounded-xl bg-purple-950/80 hover:bg-purple-900 border border-purple-700/70 text-yellow-300 transition-all hover:scale-105 active:scale-95" title="Retroceder 10 segundos">
                    <span class="text-xs font-mono font-black">⏪ -10s</span>
                  </button>

                  <button id="ferdinang-play-btn" onclick="toggleFerdinangPlay()" class="px-5 py-2 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-black font-burbank text-base flex items-center gap-2 shadow-[0_0_20px_rgba(244,196,48,0.5)] hover:scale-105 active:scale-95 transition-all duration-200 border border-yellow-200">
                    <span id="ferdinang-play-icon" class="text-lg">▶</span>
                    <span id="ferdinang-play-text" class="font-black uppercase tracking-wider">REPRODUCIR</span>
                  </button>

                  <button onclick="skipFerdinangAudio(10)" class="px-2.5 py-1.5 rounded-xl bg-purple-950/80 hover:bg-purple-900 border border-purple-700/70 text-yellow-300 transition-all hover:scale-105 active:scale-95" title="Avanzar 10 segundos">
                    <span class="text-xs font-mono font-black">+10s ⏩</span>
                  </button>
                </div>

                <div class="w-full flex items-center gap-2.5">
                  <span id="ferdinang-time-current" class="text-[11px] font-mono text-yellow-300 font-bold w-10 text-right">00:00</span>
                  <div class="relative flex-1 h-2 bg-black/70 rounded-full cursor-pointer group" id="ferdinang-progress-container" onclick="seekFerdinangAudio(event)">
                    <div id="ferdinang-progress-bar" class="h-full bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full w-0 transition-all duration-100 shadow-[0_0_10px_rgba(244,196,48,0.7)]"></div>
                  </div>
                  <span id="ferdinang-time-total" class="text-[11px] font-mono text-gray-400 w-10">03:37</span>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="flex items-center gap-2 w-full md:w-auto justify-end flex-wrap">
                <button id="toggle-lyrics-btn" onclick="toggleLyricsPanel()" class="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-purple-900/60 hover:bg-purple-800 border border-purple-600/70 text-xs font-bold font-hud text-purple-200 hover:text-white transition-all hover:scale-102">
                  <span>📜</span>
                  <span id="toggle-lyrics-text">Ver Letra</span>
                </button>
              </div>

            </div>

            <!-- VERTICAL LYRICS VIEW (Hidden by default, expands vertically on click) -->
            <div id="ferdinang-lyrics-wrapper" class="hidden mt-4 pt-4 border-t border-purple-800/60 transition-all duration-300">
              <div class="flex items-center justify-between pb-2 mb-3 border-b border-purple-900/40 text-xs text-gray-400">
                <span class="font-burbank text-yellow-300 text-sm tracking-wide">📜 LETRA DE LA CANCIÓN</span>
                <span class="text-[11px] font-mono text-purple-300/70">Click en cualquier verso para saltar</span>
              </div>

              <div id="ferdinang-lyrics-list" class="max-h-80 sm:max-h-96 overflow-y-auto space-y-2 px-2 py-1 lyrics-scrollbar scroll-smooth">
                <!-- Generated dynamically by initFerdinangPlayer -->
              </div>
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
                ${item.avatar ? `
                  <img src="${item.avatar}" alt="${item.user}" class="w-12 h-12 rounded-full object-cover border-2 border-[#130b28]">
                ` : `
                  <div class="w-12 h-12 rounded-full bg-[#1b0c36] border-2 border-[#130b28] flex items-center justify-center text-purple-300/70" title="Sin foto">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                `}
              </div>
              <span class="absolute -bottom-1 -right-1 bg-purple-900 border border-purple-400 rounded-full p-0.5" title="${item.platform}">
                ${item.platform === 'twitch' ? 
                  `<svg class="w-3.5 h-3.5 text-purple-300" fill="currentColor" viewBox="0 0 24 24"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/></svg>` : 
                  `<svg class="w-3.5 h-3.5 text-indigo-300" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>`
                }
              </span>
            </div>

            <!-- Nickname -->
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="font-burbank text-lg font-bold text-white tracking-wide truncate">${item.user}</span>
              </div>
              <div class="flex items-center gap-1.5 text-[11px] text-gray-400 mt-0.5">
                <span class="inline-flex items-center gap-1 text-[#a970ff] font-bold" title="Twitch">
                  <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/></svg>
                  <span class="text-[10px] uppercase font-mono tracking-wider">Twitch</span>
                </span>
                <span class="text-purple-400/50">•</span>
                <span>${item.date}</span>
              </div>
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

    // Initialize Spotify-style player and lyrics listeners
    setTimeout(() => {
      if (window.initFerdinangPlayer) {
        window.initFerdinangPlayer();
      }
    }, 50);
  }
}

window.dedicationsManager = new DedicationsManager();

/* ========================================================
   FERDINANG PLAYER & VERTICAL SYNCHRONIZED LYRICS
   ======================================================== */
window.initFerdinangPlayer = function() {
  const audio = document.getElementById('ferdinang-audio');
  const lyricsList = document.getElementById('ferdinang-lyrics-list');
  if (!audio || !lyricsList) return;

  function formatTime(sec) {
    if (isNaN(sec) || sec < 0) return '00:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  // Populate lyrics if empty
  if (lyricsList.children.length === 0 || !lyricsList.querySelector('.lyric-line')) {
    lyricsList.innerHTML = FERDINANG_LYRICS.map((line, idx) => `
      <div class="lyric-line ${idx === 0 ? 'lyric-active' : 'lyric-future'}" data-index="${idx}" data-time="${line.time}" onclick="seekSongTo(${line.time})">
        ${line.text}
      </div>
    `).join('');
  }

  audio.addEventListener('loadedmetadata', () => {
    const totalEl = document.getElementById('ferdinang-time-total');
    if (totalEl) totalEl.textContent = formatTime(audio.duration);
  });

  // Default duration fallback
  const totalEl = document.getElementById('ferdinang-time-total');
  if (totalEl && audio.duration) {
    totalEl.textContent = formatTime(audio.duration);
  }

  let activeIndex = -1;
  audio.addEventListener('timeupdate', () => {
    const curTime = audio.currentTime;
    const duration = audio.duration || 217.6;

    // Update progress bar
    const progressEl = document.getElementById('ferdinang-progress-bar');
    const timeCurEl = document.getElementById('ferdinang-time-current');
    if (progressEl) {
      const pct = (curTime / duration) * 100;
      progressEl.style.width = `${pct}%`;
    }
    if (timeCurEl) {
      timeCurEl.textContent = formatTime(curTime);
    }

    // Determine active line in lyrics
    let newIndex = 0;
    for (let i = 0; i < FERDINANG_LYRICS.length; i++) {
      if (curTime >= FERDINANG_LYRICS[i].time) {
        newIndex = i;
      } else {
        break;
      }
    }

    if (newIndex !== activeIndex) {
      activeIndex = newIndex;
      const lines = lyricsList.querySelectorAll('.lyric-line');
      lines.forEach((line, idx) => {
        if (idx === activeIndex) {
          line.classList.remove('lyric-past', 'lyric-future');
          line.classList.add('lyric-active');
          
          // Smooth vertical centering inside lyricsList container
          const targetOffset = line.offsetTop - (lyricsList.clientHeight / 2) + (line.clientHeight / 2);
          lyricsList.scrollTo({
            top: Math.max(0, targetOffset),
            behavior: 'smooth'
          });
        } else if (idx < activeIndex) {
          line.classList.remove('lyric-active', 'lyric-future');
          line.classList.add('lyric-past');
        } else {
          line.classList.remove('lyric-active', 'lyric-past');
          line.classList.add('lyric-future');
        }
      });
    }
  });

  audio.addEventListener('play', () => {
    // Lower or pause background lobby music so song is heard clearly
    if (window.soundFX && window.soundFX.bgmAudio && !window.soundFX.bgmAudio.paused) {
      window.soundFX.bgmAudio.pause();
    }
    const playIcon = document.getElementById('ferdinang-play-icon');
    const playText = document.getElementById('ferdinang-play-text');
    const disc = document.getElementById('vinyl-disc');
    const badge = document.getElementById('player-status-badge');
    if (playIcon) playIcon.textContent = '⏸';
    if (playText) playText.textContent = 'PAUSAR';
    if (disc) disc.classList.add('vinyl-playing');
    if (badge) {
      badge.textContent = 'SONANDO';
      badge.classList.remove('bg-yellow-400');
      badge.classList.add('bg-emerald-400');
    }
  });

  audio.addEventListener('pause', () => {
    const playIcon = document.getElementById('ferdinang-play-icon');
    const playText = document.getElementById('ferdinang-play-text');
    const disc = document.getElementById('vinyl-disc');
    const badge = document.getElementById('player-status-badge');
    if (playIcon) playIcon.textContent = '▶';
    if (playText) playText.textContent = 'REPRODUCIR';
    if (disc) disc.classList.remove('vinyl-playing');
    if (badge) {
      badge.textContent = 'PAUSA';
      badge.classList.remove('bg-emerald-400');
      badge.classList.add('bg-yellow-400');
    }
  });

  audio.addEventListener('ended', () => {
    const playIcon = document.getElementById('ferdinang-play-icon');
    const playText = document.getElementById('ferdinang-play-text');
    const disc = document.getElementById('vinyl-disc');
    const badge = document.getElementById('player-status-badge');
    if (playIcon) playIcon.textContent = '▶';
    if (playText) playText.textContent = 'REPETIR';
    if (disc) disc.classList.remove('vinyl-playing');
    if (badge) {
      badge.textContent = 'FINAL';
      badge.classList.remove('bg-emerald-400');
      badge.classList.add('bg-yellow-400');
    }
  });
};

window.toggleFerdinangPlay = function() {
  const audio = document.getElementById('ferdinang-audio');
  if (!audio) return;
  if (audio.paused) {
    audio.play().catch(() => {});
  } else {
    audio.pause();
  }
};

window.skipFerdinangAudio = function(sec) {
  const audio = document.getElementById('ferdinang-audio');
  if (!audio) return;
  audio.currentTime = Math.max(0, Math.min(audio.duration || 217.6, audio.currentTime + sec));
  if (window.soundFX && window.soundFX.playFortniteClick) {
    window.soundFX.playFortniteClick();
  }
};

window.seekFerdinangAudio = function(e) {
  const audio = document.getElementById('ferdinang-audio');
  const container = document.getElementById('ferdinang-progress-container');
  if (!audio || !container) return;
  const rect = container.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const pct = Math.max(0, Math.min(1, clickX / rect.width));
  audio.currentTime = pct * (audio.duration || 217.6);
};

window.seekSongTo = function(seconds) {
  const audio = document.getElementById('ferdinang-audio');
  if (!audio) return;
  audio.currentTime = seconds;
  if (audio.paused) {
    audio.play().catch(() => {});
  }
};

window.toggleLyricsPanel = function() {
  const wrapper = document.getElementById('ferdinang-lyrics-wrapper');
  const textEl = document.getElementById('toggle-lyrics-text');
  if (!wrapper) return;
  wrapper.classList.toggle('hidden');
  const isHidden = wrapper.classList.contains('hidden');
  if (textEl) {
    textEl.textContent = isHidden ? 'Ver Letra' : 'Ocultar Letra';
  }
  if (window.soundFX && window.soundFX.playFortniteClick) {
    window.soundFX.playFortniteClick();
  }
};

window.downloadFerdinangLyrics = function() {
  const lyricsText = `FELICIDADES (25 Primaveras de Ariadna)
Dedicatoria especial de: Ferdinang

¡Ay, qué noche más bonita!
¡Veinticinco primaveras!
Hoy le cantamos a Ariadna,
¡la reina de nuestra fiesta!

Hoy es tu día, llegó tu cumpleaños,
y todo el chat te quiere celebrar,
con tu constancia y tus grandes ideas,
cada día más lejos vas a llegar.

Con esa fuerza que nunca se rinde,
con esa chispa que sabe enganchar,
eres la reina de nuestra familia,
y hoy nadie te va a olvidar.

Dice que entrena en el pádel,
¡vaya manera de jugar!
Con ese cuerpazo, niña,
¡que no deje de entrenar!

¡ARI-ADNA-NANA!
¡ARI-ADNA-NANA!
Veinticinco primaveras,
¡hoy te vamos a cantar!

¡ARI-ADNA-NANA!
¡ARI-ADNA-NANA!
¡Reina de nuestro corazón,
que cumplas muchos más!

Gracias, moderadores, por estar a su lado,
los VIPs y la plebe ya vienen preparados.
Podemos rondarte en este día especial,
porque contigo, Ariadna, ¡lo vamos a celebrar!

Para las buenas y las mejores,
aquí contigo estaremos,
que aunque pasen los días y cambien las horas,
siempre en el corazón te llevaremos.

Y Simba te canta: «¡Cumpleaños feliz!»,
con todo el cariño que sentimos por ti.

Cumpleaños feliz,
cumpleaños feliz,
te deseamos, Ariadna,
¡cumpleaños feliz!

¡ARI-ADNA-NANA!
¡ARI-ADNA-NANA!
Veinticinco primaveras,
¡hoy te vamos a cantar!

¡ARI-ADNA-NANA!
¡ARI-ADNA-NANA!
¡Reina de nuestro corazón,
que cumplas muchos más!

¡Ole, Ariadna!
¡Ole tu arte y tu salero!
¡Tu familia te quiere,
hoy y el año entero!

¡Veinticinco primaveras!
¡Y que cumplas muchos más!
`;

  const blob = new Blob([lyricsText], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Letra_Ferdinang_Felicidades_Ari.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

};



