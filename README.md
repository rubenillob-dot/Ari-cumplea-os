# 🎂 ¡Feliz Cumpleaños ImArixu! 👑 Victoria Campal SPA

Una Single Page Application interactiva desarrollada en **HTML5, Tailwind CSS y JavaScript Vanilla**, diseñada como regalo sorpresa de cumpleaños para la streamer y creadora de contenido **ImArixu**.

---

## 🎮 Balance Visual y Temático

- **🟣 90% Fortnite (Battle Royale Lobby UI)**:
  - Paleta de color oficial: Morado/azul tormenta (`#0e071e`, `#1b113a`, `#7a22ff`), cian slurp (`#00f0ff`) y dorado legendario (`#f4c430`, `#e69e24`).
  - Tipografía épica estilo *"Burbank Big Condensed"* (Google Fonts `Luckiest Guy` + `Lilita One` + `Chakra Petch`).
  - Botón principal de estilo **"LISTO"** (*Ready Up*) con bisel 3D, inclinación (`skew`), sombra profunda y animación continua de reflejo brillante (*shine*).
  - Banner 3D de **Victoria Campal #1** con alas de laureles dorados.
  - HUD interactivo de Salud y Escudo: Escudo inicial de 50/100 que se llena a 100/100 al beber una poción de mini escudo con sonido burbujeante y aura slurp.
  - Confeti y serpentinas con la paleta de colores de Fortnite.

- **👑 5% Clash Royale**:
  - Corona dorada de 3 puntas con rubí y zafiros en badges de perfil y botones de reacción.
  - Cofre Legendario interactivo con animación de giro de rayos arcoíris y apertura que revela la **"Carta Legendaria de Cumpleaños: ImArixu - Calidad Campeona"**.
  - Sonidos de fanfarria legendaria y campanilleo de coronas.

- **🖐️ 4% Poppy Playtime**:
  - Cursores interactivos de las manos mecánicas del **GrabPack**:
    - Cursor normal: Mano azul del GrabPack.
    - Cursor hover / click: Mano roja del GrabPack lista para pulsar botones.
    - Interruptor visible en la barra superior para activar/desactivar el cursor personalizado.
  - Easter egg de clips y menciones a los sustos de Poppy Playtime.

- **💚 1% Minecraft**:
  - Orbes verdes pixelados de experiencia (XP) que brotan y rebotan al hacer click o reaccionar.
  - Sonido clásico de nivel / pickup de orbe XP de Minecraft ("*Ding!*").
  - Barra de 10 corazones del **Modo Hardcore** de Minecraft en el footer interactivos con sonido: *"Sobrevivido un año más sin perder vidas • Nivel 2X alcanzado"*.

---

## 🗂️ Estructura del Proyecto

```text
Ari-cumplea-os/
├── index.html                   # Documento principal SPA semántico y responsive
├── README.md                    # Documentación y guía de personalización
├── css/
│   └── style.css                # Estilos gaming, tipografías, animaciones y cursores
├── js/
│   ├── app.js                   # Controlador principal, HUD de escudo y modales
│   ├── audio.js                 # Sintetizador Web Audio API (100% offline, sin 404s)
│   ├── dedications.js           # Gestor del muro de dedicatorias y almacenamiento local
│   └── particles.js             # Motor de confeti Fortnite, orbes XP y salpicaduras
└── assets/
    └── images/
        ├── crown.svg            # Corona dorada estilo Clash Royale
        ├── grabpack-blue.svg    # Mano azul GrabPack (Poppy Playtime)
        ├── grabpack-red.svg     # Mano roja GrabPack (Poppy Playtime)
        ├── legendary-chest.svg  # Cofre Legendario
        ├── minecraft-heart.svg  # Corazón pixel art Hardcore de Minecraft
        ├── minecraft-xp.svg     # Orbe de experiencia XP pixel art
        ├── shield-potion.svg    # Poción de escudo / Mini de Fortnite
        ├── vbuck.svg            # Moneda V-Buck de Fortnite
        └── victory-crown.svg    # Corona de Victoria Campal #1
```

---

## 🚀 Cómo Visualizar la Página

No requiere instalación de Node ni dependencias pesadas. Es completamente autónoma:

1. **Opción Directa**: Haz doble click en el archivo `index.html` para abrirlo en cualquier navegador moderno (Chrome, Edge, Firefox, Safari).
2. **Servidor Local (Recomendado)**:
   ```bash
   # Con Python:
   python3 -m http.server 8080
   # Luego abre en tu navegador: http://localhost:8080
   ```
3. **Publicación en la nube**: Puedes subir este repositorio directamente a **GitHub Pages**, **Vercel** o **Netlify** para compartir el enlace público con ImArixu durante su stream.

---

## ✏️ Cómo Personalizar Mensajes, Fotos y Clips

### 1. Cambiar los mensajes del Muro de Dedicatorias
Abre el archivo [`js/dedications.js`](file:///home/alumnot/Documentos/Ari-cumplea-os/js/dedications.js) y edita el arreglo `DEFAULT_DEDICATIONS`. Cada dedicatoria tiene esta estructura sencilla:

```javascript
{
  id: 'ded-1',
  user: 'NombreDelSeguidor',
  platform: 'twitch', // o 'discord'
  role: 'Mod / VIP / Sub',
  rarity: 'mythic', // 'mythic', 'legendary', 'epic' o 'rare'
  avatar: 'URL_DE_LA_FOTO_DE_PERFIL',
  type: 'text', // 'text', 'image' o 'clip'
  message: 'Tu mensaje emotivo o felicitación aquí...',
  reactions: { gg: 50, shield: 30, crown: 70 }
}
```

> **Nota:** La página también incluye un botón en vivo **"+ Dejar Dedicatoria"** con formulario modal para que cualquier persona pueda escribir su dedicatoria en tiempo real sin tocar código (se guardará en su navegador vía `localStorage`).

### 2. Cambiar la foto principal de ImArixu
En [`index.html`](file:///home/alumnot/Documentos/Ari-cumplea-os/index.html), busca la etiqueta `img` con el avatar de ImArixu y reemplaza el enlace con su foto real o avatar de Twitch:
```html
<img src="URL_DE_LA_FOTO_DE_ARIXU" alt="ImArixu Avatar">
```

### 3. Embeber Clips reales de Twitch o YouTube
En [`index.html`](file:///home/alumnot/Documentos/Ari-cumplea-os/index.html) (sección de hitos) o en [`js/dedications.js`](file:///home/alumnot/Documentos/Ari-cumplea-os/js/dedications.js), solo reemplaza los enlaces de `videoUrl` con la URL de inserción (*embed*) del clip de Twitch o vídeo de YouTube.

---

## ✨ Características Técnicas Destacadas

- **Audio 100% Autónomo (Web Audio API)**: Genera efectos de sonido mediante síntesis en tiempo real (sorbo de poción con burbujas, ding de Minecraft XP, fanfarria de Victoria Campal y música de fondo chill lo-fi de lobby de Fortnite) sin depender de archivos de audio externos que puedan dar error 404.
- **Diseño Mobile-First & Streaming Friendly**: Se adapta fluidamente tanto a pantallas de smartphone como a pantallas ultra-panorámicas de PC y captura para OBS.
- **Microinteracciones y Efectos Físicos**:
  - Salpicaduras de líquido slurp.
  - Orbes de experiencia verde que flotan y giran con gravedad.
  - Coronas de Clash Royale que levitan al reaccionar.
  - Transición suave con filtrado por categorías de hitos de la temporada.