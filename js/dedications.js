/**
 * dedications.js - Community Dedications Feed for ImArixu Birthday
 * Supports text, fanart/images, video/clips, song/music with synchronized lyrics, rarity borders, and interactive reactions.
 * Stores extra dedications in localStorage.
 */

const STATIC_LYRICS_DATA = {
  sito: `
    <div class="space-y-3.5 text-sm sm:text-base text-gray-200 leading-relaxed font-sans p-1 select-text">
      <div class="bg-purple-950/40 rounded-xl p-3 border border-purple-800/40">
        <span class="font-burbank text-yellow-400 text-xs tracking-wider block mb-1 font-bold">[INTRO – HABLADO]</span>
        <p class="whitespace-pre-line">¡Ey, ey, ey!
¡Que se prepare el chat, que hoy es un día especial!
Que se escuchen los emotes, que comience la celebración…
¡Porque hoy cumple años nuestra Arichu! ❤️🎉</p>
      </div>

      <div class="bg-purple-950/40 rounded-xl p-3 border border-purple-800/40">
        <span class="font-burbank text-yellow-400 text-xs tracking-wider block mb-1 font-bold">[VERSO 1]</span>
        <p class="whitespace-pre-line">Se enciende el directo, ya comienza la misión,
Arichu está en la partida, preparados corazón.
Con el Fortnite en la pantalla y su gente alrededor,
cada tarde se convierte en una fiesta de emoción.

Entre risas y victorias, algún baile inesperado,
con su comunidad entera siempre tiene un escuadrón preparado.
No importa si hay derrota o si toca remontar,
porque estando todos juntos siempre hay ganas de jugar.</p>
      </div>

      <div class="bg-purple-950/40 rounded-xl p-3 border border-purple-800/40">
        <span class="font-burbank text-yellow-400 text-xs tracking-wider block mb-1 font-bold">[PREESTRIBILLO]</span>
        <p class="whitespace-pre-line">Y que lo sepa todo el mundo, que hoy no hay que competir,
hoy las estrellas del directo solo brillan para ti.
Que se llene todo el chat, que no pare la ilusión,
¡que hoy cumple años Arichu y lo celebra el corazón!</p>
      </div>

      <div class="bg-gradient-to-r from-amber-500/15 to-yellow-500/10 rounded-xl p-3.5 border border-yellow-500/40 shadow-sm">
        <span class="font-burbank text-yellow-300 text-xs tracking-wider block mb-1 font-bold">[ESTRIBILLO]</span>
        <p class="whitespace-pre-line font-medium text-white">¡Feliz cumpleaños, Arichu,
hoy el mundo es para ti!
Que te sobren las victorias
y mil sueños por cumplir.

Con tu gente a tu lado,
con Lusimi junto a ti,
y Simba moviendo la cola,
¡qué bonito es verte feliz!

¡Feliz cumpleaños, Arichu,
que no pare la emoción!
Tu comunidad es tu familia,
¡y hoy te canta esta canción!</p>
      </div>

      <div class="bg-purple-950/40 rounded-xl p-3 border border-purple-800/40">
        <span class="font-burbank text-yellow-400 text-xs tracking-wider block mb-1 font-bold">[VERSO 2]</span>
        <p class="whitespace-pre-line">Hay un montón de personas que se quedan por aquí,
que no vienen solo al juego, vienen porque estás tú ahí.
Una comunidad gigante, leal de corazón,
que convierte cada directo en una gran celebración.

Desde el lobby hasta la victoria, desde el meme hasta el baile,
cada día hay mil recuerdos que hacen que nada les falle.
Y aunque cambie la temporada y haya un nuevo aterrizaje,
tu comunidad seguirá acompañándote en el viaje.</p>
      </div>

      <div class="bg-purple-950/40 rounded-xl p-3 border border-purple-800/40">
        <span class="font-burbank text-yellow-400 text-xs tracking-wider block mb-1 font-bold">[PREESTRIBILLO 2]</span>
        <p class="whitespace-pre-line">Que hoy las preocupaciones se vayan a desconectar,
que las velas de tu tarta sean deseos por cumplir.
Que la vida te regale mil motivos para sonreír,
porque todo lo bonito hoy se merece quedar junto a ti.</p>
      </div>

      <div class="bg-gradient-to-r from-amber-500/15 to-yellow-500/10 rounded-xl p-3.5 border border-yellow-500/40 shadow-sm">
        <span class="font-burbank text-yellow-300 text-xs tracking-wider block mb-1 font-bold">[ESTRIBILLO]</span>
        <p class="whitespace-pre-line font-medium text-white">¡Feliz cumpleaños, Arichu,
hoy el mundo es para ti!
Que te sobren las victorias
y mil sueños por cumplir.

Con tu gente a tu lado,
con Lusimi junto a ti,
y Simba moviendo la cola,
¡qué bonito es verte feliz!

¡Feliz cumpleaños, Arichu,
que no pare la emoción!
Tu comunidad es tu familia,
¡y hoy te canta esta canción!</p>
      </div>

      <div class="bg-purple-950/40 rounded-xl p-3 border border-purple-800/40">
        <span class="font-burbank text-yellow-400 text-xs tracking-wider block mb-1 font-bold">[PUENTE – MÁS EMOTIVO]</span>
        <p class="whitespace-pre-line">Y entre tantas aventuras que nos quedan por jugar,
hay momentos que en la vida no se pueden reiniciar.
Son las risas, son las noches, son las ganas de volver,
son las personas que te quieren y que siempre van a estar.

Que Lusimi te acompañe en cada nuevo amanecer,
que Simba llene de alegría cada rincón de tu hogar.
Y que nunca te falten motivos para celebrar,
ni una comunidad entera que te quiera hacer brillar.

¡Emotes arriba! ¡Que se escuche ese chat!
¡Hoy no hay tormenta que nos pueda parar!</p>
      </div>

      <div class="bg-gradient-to-r from-amber-500/20 to-yellow-500/15 rounded-xl p-3.5 border border-yellow-400/80 shadow-md">
        <span class="font-burbank text-yellow-300 text-xs tracking-wider block mb-1 font-bold">[ESTRIBILLO FINAL – A LO GRANDE]</span>
        <p class="whitespace-pre-line font-semibold text-white">¡Feliz cumpleaños, Arichu,
hoy el mundo es para ti!
Que la vida te dé todo
lo que sueñas conseguir.

Con Lusimi a tu lado,
con Simba junto a ti,
y esa gente que te quiere
que hoy se reúne por ti.

¡Feliz cumpleaños, Arichu,
nuestra estrella del directo!
Que haya risas, amor y sueños,
¡y mil años de momentos!

Y si mañana hay otra partida,
allí nos vamos a encontrar,
porque más que una comunidad,
¡somos tu familia digital!</p>
      </div>

      <div class="bg-purple-950/40 rounded-xl p-3 border border-purple-800/40">
        <span class="font-burbank text-yellow-400 text-xs tracking-wider block mb-1 font-bold">[OUTRO – HABLADO]</span>
        <p class="whitespace-pre-line">De parte de toda tu comunidad,
por las risas, los momentos y todo lo compartido…
Que este nuevo año te traiga felicidad, amor y muchísimas aventuras.

Un abrazo enorme para Lusimi,
un montón de mimos para Simba…
Y para ti, Arichu, todo el cariño del mundo.

<strong class="text-yellow-300">¡Feliz cumpleaños! ❤️🎂🎮</strong></p>
      </div>
    </div>
  `,

  livingbenidorm: `
    <div class="space-y-3.5 text-sm sm:text-base text-gray-200 leading-relaxed font-sans p-1 select-text">
      <div class="bg-purple-950/40 rounded-xl p-3 border border-purple-800/40">
        <span class="font-burbank text-yellow-400 text-xs tracking-wider block mb-1 font-bold">[INTRO]</span>
        <p class="whitespace-pre-line">¡Ey, Arixu, hoy toca celebrar!
Deja un momento el Fortnite,
¡que te venimos a felicitar!</p>
      </div>

      <div class="bg-purple-950/40 rounded-xl p-3 border border-purple-800/40">
        <span class="font-burbank text-yellow-400 text-xs tracking-wider block mb-1 font-bold">[VERSO 1]</span>
        <p class="whitespace-pre-line">Cada día me conecto,
ya es parte de mi rutina,
a tu stream para verte jugar,
¡y echarme unas risas contigo, Arixu, una vez más!
Con el mando y sin construcción,
buscando otra victoria,
entre partidas y locuras,
vamos sumando nuestra historia.</p>
      </div>

      <div class="bg-purple-950/40 rounded-xl p-3 border border-purple-800/40">
        <span class="font-burbank text-yellow-400 text-xs tracking-wider block mb-1 font-bold">[PREESTRIBILLO]</span>
        <p class="whitespace-pre-line">18 meses ya que estoy suscrito,
y parece que fue ayer,
tantos momentos divertidos
que no se pueden ni contar, ¡qué bien!</p>
      </div>

      <div class="bg-gradient-to-r from-amber-500/15 to-yellow-500/10 rounded-xl p-3.5 border border-yellow-500/40 shadow-sm">
        <span class="font-burbank text-yellow-300 text-xs tracking-wider block mb-1 font-bold">[ESTRIBILLO]</span>
        <p class="whitespace-pre-line font-medium text-white">¡Feliz cumpleaños, Arixu!
Que hoy te salga todo genial,
que consigas mil victorias
y que no falte la felicidad.
¡Feliz cumpleaños, Arixu!
Hoy el chat va a celebrar,
aunque yo escriba poquito,
¡casi siempre estoy detrás!</p>
      </div>

      <div class="bg-purple-950/40 rounded-xl p-3 border border-purple-800/40">
        <span class="font-burbank text-yellow-400 text-xs tracking-wider block mb-1 font-bold">[PREESTRIBILLO]</span>
        <p class="whitespace-pre-line">18 meses de sub compartiendo
aventuras frente a la pantalla,
y aunque no me toquen los ñorteos
aquí tienes a alguien siempre detrás</p>
      </div>

      <div class="bg-gradient-to-r from-amber-500/15 to-yellow-500/10 rounded-xl p-3.5 border border-yellow-500/40 shadow-sm">
        <span class="font-burbank text-yellow-300 text-xs tracking-wider block mb-1 font-bold">[ESTRIBILLO]</span>
        <p class="whitespace-pre-line font-medium text-white">¡Feliz cumpleaños, Imarixu!
Que hoy te salga todo genial,
que consigas mil victorias
y que no falte la felicidad.
¡Feliz cumpleaños, Arixu!
Que la suerte te acompañe al jugar,
que haya risas, buenos momentos
y más streams para disfrutar.</p>
      </div>

      <div class="bg-purple-950/40 rounded-xl p-3 border border-purple-800/40">
        <span class="font-burbank text-yellow-400 text-xs tracking-wider block mb-1 font-bold">[PUENTE]</span>
        <p class="whitespace-pre-line">Que si pierdes una partida,
que si toca remontar,
lo importante es estar juntos
y tener motivos para celebrar.</p>
      </div>

      <div class="bg-gradient-to-r from-amber-500/20 to-yellow-500/15 rounded-xl p-3.5 border border-yellow-400/80 shadow-md">
        <span class="font-burbank text-yellow-300 text-xs tracking-wider block mb-1 font-bold">[ESTRIBILLO FINAL]</span>
        <p class="whitespace-pre-line font-semibold text-white">¡Feliz cumpleaños, Imarixu!
Hoy te toca brillar,
que explote de alegría el directo
y que no paremos de celebrar.
Año y medio de aventuras,
mil recuerdos que guardar,
soy de los que hablan poquito,
¡pero casi siempre están!</p>
      </div>

      <div class="bg-purple-950/40 rounded-xl p-3 border border-purple-800/40">
        <span class="font-burbank text-yellow-400 text-xs tracking-wider block mb-1 font-bold">[OUTRO]</span>
        <p class="whitespace-pre-line">Así que sopla las velas,
pide un deseo especial,
de parte de uno de tus suscriptores:
<strong class="text-yellow-300">¡Mamixu, que cumplas muchos más!</strong></p>
      </div>
    </div>
  `,
  ferdinang: `
    <div class="space-y-3.5 text-sm sm:text-base text-gray-200 leading-relaxed font-sans p-1 select-text">
      <div class="bg-purple-950/40 rounded-xl p-3 border border-purple-800/40">
        <span class="font-burbank text-yellow-400 text-xs tracking-wider block mb-1 font-bold">[INTRO]</span>
        <p class="whitespace-pre-line">¡Ay, qué noche más bonita!
¡Veinticinco primaveras!
Hoy le cantamos a Ariadna,
¡la reina de nuestra fiesta!</p>
      </div>

      <div class="bg-purple-950/40 rounded-xl p-3 border border-purple-800/40">
        <span class="font-burbank text-yellow-400 text-xs tracking-wider block mb-1 font-bold">[VERSO 1]</span>
        <p class="whitespace-pre-line">Hoy es tu día, llegó tu cumpleaños,
y todo el chat te quiere celebrar,
con tu constancia y tus grandes ideas,
cada día más lejos vas a llegar.
Con esa fuerza que nunca se rinde,
con esa chispa que sabe enganchar,
eres la reina de nuestra familia,
y hoy nadie te va a olvidar.</p>
      </div>

      <div class="bg-purple-950/40 rounded-xl p-3 border border-purple-800/40">
        <span class="font-burbank text-yellow-400 text-xs tracking-wider block mb-1 font-bold">[VERSO 2]</span>
        <p class="whitespace-pre-line">Dice que entrena en el pádel,
¡vaya manera de jugar!
Con ese cuerpazo, niña,
¡que no deje de entrenar!</p>
      </div>

      <div class="bg-gradient-to-r from-amber-500/15 to-yellow-500/10 rounded-xl p-3.5 border border-yellow-500/40 shadow-sm">
        <span class="font-burbank text-yellow-300 text-xs tracking-wider block mb-1 font-bold">[ESTRIBILLO]</span>
        <p class="whitespace-pre-line font-medium text-white">¡ARI-ADNA-NANA!
¡ARI-ADNA-NANA!
Veinticinco primaveras,
¡hoy te vamos a cantar!
¡ARI-ADNA-NANA!
¡ARI-ADNA-NANA!
¡Reina de nuestro corazón,
que cumplas muchos más!</p>
      </div>

      <div class="bg-purple-950/40 rounded-xl p-3 border border-purple-800/40">
        <span class="font-burbank text-yellow-400 text-xs tracking-wider block mb-1 font-bold">[VERSO 3]</span>
        <p class="whitespace-pre-line">Gracias, moderadores, por estar a su lado,
los VIPs y la plebe ya vienen preparados.
Podemos rondarte en este día especial,
porque contigo, Ariadna, ¡lo vamos a celebrar!
Para las buenas y las mejores,
aquí contigo estaremos,
que aunque pasen los días y cambien las horas,
siempre en el corazón te llevaremos.</p>
      </div>

      <div class="bg-purple-950/40 rounded-xl p-3 border border-purple-800/40">
        <span class="font-burbank text-yellow-400 text-xs tracking-wider block mb-1 font-bold">[CUMPLEAÑOS FELIZ]</span>
        <p class="whitespace-pre-line">Y Simba te canta: «¡Cumpleaños feliz!»,
con todo el cariño que sentimos por ti.
Cumpleaños feliz,
cumpleaños feliz,
te deseamos, Ariadna,
¡cumpleaños feliz!</p>
      </div>

      <div class="bg-gradient-to-r from-amber-500/20 to-yellow-500/15 rounded-xl p-3.5 border border-yellow-400/80 shadow-md">
        <span class="font-burbank text-yellow-300 text-xs tracking-wider block mb-1 font-bold">[ESTRIBILLO FINAL]</span>
        <p class="whitespace-pre-line font-semibold text-white">¡ARI-ADNA-NANA!
¡ARI-ADNA-NANA!
Veinticinco primaveras,
¡hoy te vamos a cantar!
¡ARI-ADNA-NANA!
¡ARI-ADNA-NANA!
¡Reina de nuestro corazón,
que cumplas muchos más!</p>
      </div>

      <div class="bg-purple-950/40 rounded-xl p-3 border border-purple-800/40">
        <span class="font-burbank text-yellow-400 text-xs tracking-wider block mb-1 font-bold">[OUTRO]</span>
        <p class="whitespace-pre-line">¡Ole, Ariadna!
¡Ole tu arte y tu salero!
¡Tu familia te quiere,
hoy y el año entero!
<strong class="text-yellow-300">¡Veinticinco primaveras! ¡Y que cumplas muchos más!</strong></p>
      </div>
    </div>
  `,

  rubenillo: `
    <div class="space-y-3.5 text-sm sm:text-base text-gray-200 leading-relaxed font-sans p-1 select-text">
      <div class="bg-purple-950/40 rounded-xl p-3 border border-purple-800/40">
        <span class="font-burbank text-yellow-400 text-xs tracking-wider block mb-1 font-bold">[INTRO – HABLADO]</span>
        <p class="whitespace-pre-line">Un día encendiste la cámara por primera vez...
y sin saberlo, creaste un hogar para todos nosotros.
Desde el otro lado de este cristal,
hoy tu chat entero tiene algo que cantarte.
Para ti, Ari.</p>
      </div>

      <div class="bg-purple-950/40 rounded-xl p-3 border border-purple-800/40">
        <span class="font-burbank text-yellow-400 text-xs tracking-wider block mb-1 font-bold">[VERSO 1]</span>
        <p class="whitespace-pre-line">Qué difícil es a veces mirar esta pantalla,
querer saltar el cristal y no poder abrazarte.
Ver cómo pasa el tiempo, cómo ganas las batallas,
y sentir que nuestro premio es poder acompañarte.
Toda esta comunidad que late a tu compás,
sabe que detrás del micro hay alguien de verdad.</p>
      </div>

      <div class="bg-purple-950/40 rounded-xl p-3 border border-purple-800/40">
        <span class="font-burbank text-yellow-400 text-xs tracking-wider block mb-1 font-bold">[PRE-ESTRIBILLO]</span>
        <p class="whitespace-pre-line">Es cierto que hemos perdido a gente por el camino,
hemos cambiado de piel y han llegado nombres nuevos.
Pero mira bien el chat, es testigo del destino:
hay quienes siguen aquí desde el primer segundo de tus juegos.</p>
      </div>

      <div class="bg-gradient-to-r from-amber-500/15 to-yellow-500/10 rounded-xl p-3.5 border border-yellow-500/40 shadow-sm">
        <span class="font-burbank text-yellow-300 text-xs tracking-wider block mb-1 font-bold">[ESTRIBILLO]</span>
        <p class="whitespace-pre-line font-medium text-white">Feliz cumple, Ari,
disfruta quién eres.
Mira lo que has construido,
y abraaaaaaaza lo que tienes.
Cumpliendo tus metas, sumando otro año,
hagas lo que hagas... jamáaaaaaaas te soltamos.</p>
      </div>

      <div class="bg-purple-950/40 rounded-xl p-3 border border-purple-800/40">
        <span class="font-burbank text-yellow-400 text-xs tracking-wider block mb-1 font-bold">[VERSO 2]</span>
        <p class="whitespace-pre-line">Lloramos contigo aquella tarde al conseguir el Partner,
y nos curaste el alma riendo con las bromas telefónicas.
Te hemos visto brillar y coronarte en los torneos,
escribiendo en cada directo tu propia historia icónica.
¡Si es que ni un habanero del infierno te ha podido parar!
Tienes el fuego en las venas y el mundo por conquistar.</p>
      </div>

      <div class="bg-purple-950/40 rounded-xl p-3 border border-purple-800/40">
        <span class="font-burbank text-yellow-400 text-xs tracking-wider block mb-1 font-bold">[PRE-ESTRIBILLO]</span>
        <p class="whitespace-pre-line">Si el mundo hace ruido y te fallan las fuerzas,
recuerda la legión que te guarda la espalda.
Aquí está tu gente, tu escudo, tu esencia,
dispuestos a todo si el miedo te asalta.</p>
      </div>

      <div class="bg-gradient-to-r from-amber-500/15 to-yellow-500/10 rounded-xl p-3.5 border border-yellow-500/40 shadow-sm">
        <span class="font-burbank text-yellow-300 text-xs tracking-wider block mb-1 font-bold">[ESTRIBILLO]</span>
        <p class="whitespace-pre-line font-medium text-white">Feliz cumple, Ari,
disfruta quién eres.
Mira lo que has construido,
y abraaaaaaaza lo que tienes.
Cumpliendo tus metas, sumando otro año,
hagas lo que hagas... jamáaaaaaaas te soltamos.</p>
      </div>

      <div class="bg-purple-950/40 rounded-xl p-3 border border-purple-800/40">
        <span class="font-burbank text-yellow-400 text-xs tracking-wider block mb-1 font-bold">[PUENTE – CON FUERZA]</span>
        <p class="whitespace-pre-line">¡No dejes de creer que puedes conseguir mucho más!
¡Mira hacia atrás y mira a los lados!
Sabes que hay mucha gente que va detrás de ti,
que cada paso que das, lo damos agarrados.
¡No dejes de creer, que no tienes techo!
¡Que este ejército late directo en tu pecho!</p>
      </div>

      <div class="bg-gradient-to-r from-amber-500/15 to-yellow-500/10 rounded-xl p-3.5 border border-yellow-500/40 shadow-sm">
        <span class="font-burbank text-yellow-300 text-xs tracking-wider block mb-1 font-bold">[ESTRIBILLO FINAL]</span>
        <p class="whitespace-pre-line font-semibold text-white">Feliz cumple, Ari,
disfruta quién eres.
Mira lo que has construido,
y abraaaaaaaza lo que tienes.
Cumpliendo tus metas, sumando otro año...
hagas lo que hagas... jamáaaaaaaas te soltamos.</p>
      </div>

      <div class="bg-purple-950/40 rounded-xl p-3 border border-purple-800/40">
        <span class="font-burbank text-yellow-400 text-xs tracking-wider block mb-1 font-bold">[OUTRO – FINAL EMOTIVO]</span>
        <p class="whitespace-pre-line">Porque esta casa que has levantado,
es el mejor rincón donde nos hemos quedado.
Aquí seguimos, Ari... aquí nos quedamos.
Aquí seguimos, Ari... jamás te soltamos.
Aquí seguimos, Ari... aquí nos quedamos.
Aquí seguimos... jamás te soltamos.

<em class="text-xs text-purple-300/80 block mt-1">(Un último acorde de guitarra, muy suave y largo, dejándolo sonar hasta que se apaga)</em>
<strong class="text-yellow-300 text-sm block mt-1">Feliz cumple. 💜🎂</strong></p>
      </div>
    </div>
  `
};

const DEFAULT_DEDICATIONS = [
  {
    id: 'ded-ferdinang',
    user: 'Ferdinang',
    platform: 'twitch',
    role: 'VIP & MOD • CANCIÓN ORIGINAL 🎵',
    rarity: 'mythic',
    avatar: 'assets/Iconos de perfiles/Ferdinang.webp',
    type: 'song',
    songKey: 'ferdinang',
    songTitle: 'FELICIDADES',
    subtitle: '25 Primaveras • Para Ariadna • <strong class="text-purple-300 font-bold">Ferdinang</strong>',
    audioUrl: 'assets/Dedicatorias/Ferdinang.mp3',
    durationText: '03:37',
    message: 'Un cuarto de siglo, 25 añicos muchísimas felicidades!! Que alegría haberte conocido y tener el privilegio de poder felicitarte, pues no sé cómo hiciste pero tal cual empecé a verte me enganchaste con tú carisma y alegría, con tu amabilidad y respeto, pero sobre todo y por encima de cualquiera cosa, como revientas en las partidas, como sabes moverte, me dejas alucinado. Solo voy a pedirte una cosa, que no cambies nunca, sino mis chistes serán peores, aviso, y que sigas así de feliz. Te queremos mucho!!!',
    reactions: { gg: 154, shield: 92, crown: 210 },
    date: 'Hoy a las 16:00'
  },
  {
    id: 'ded-livingbenidorm',
    user: 'LivingBenidorm',
    platform: 'twitch',
    role: 'SUB 18 MESES • CANCIÓN ORIGINAL 🎵',
    rarity: 'mythic',
    avatar: 'assets/Iconos de perfiles/LivingBenidorm.webp',
    type: 'song',
    songKey: 'livingbenidorm',
    songTitle: '¡EY, ARIXU!',
    subtitle: '18 Meses de Sub • Para Ariadna • <strong class="text-purple-300 font-bold">LivingBenidorm</strong>',
    audioUrl: 'assets/Dedicatorias/LivingBenidorm.mp3',
    durationText: '02:21',
    message: `¡Muchas felicidades Ari! 🎂🎮 18 meses ya suscrito a tus directos, compartiendo risas, partidas sin construcción y grandes momentos en el chat.
Te he preparado esta canción con todo el cariño de parte de uno de tus suscriptores. ¡Sube el volumen, cántala a tope y que cumplas muchísimos más, Mamixu! 👑💜`,
    reactions: { gg: 175, shield: 108, crown: 234 },
    date: 'Hoy a las 16:30'
  },
  {
    id: 'ded-sito',
    user: 'Sito',
    platform: 'twitch',
    role: 'DÚO LEGENDARIO • CANCIÓN ORIGINAL 🎵',
    rarity: 'mythic',
    avatar: 'assets/Iconos de perfiles/Sito.webp',
    type: 'song',
    songKey: 'sito',
    songTitle: 'NUESTRA ARICHU',
    subtitle: 'Dúo Legendario • Para Arichu • <strong class="text-purple-300 font-bold">Sito</strong>',
    audioUrl: 'assets/Dedicatorias/Sito.m4a',
    durationText: '04:54',
    message: `¡Muchas felicidades Arichu! ❤️🎂🎮 Que nunca cambies y sigas así de humilde, que te queremos muchísimo. Te dedico esta canción con todo el cariño del mundo de parte de tu dúo y de toda tu comunidad. ¡Y recordad todos: código ARIXU en la tienda de Fortnite! 🎉👑`,
    reactions: { gg: 198, shield: 135, crown: 260 },
    date: 'Hoy a las 16:45'
  },
  {
    id: 'ded-rubenillo',
    user: 'Rubenillo',
    platform: 'twitch',
    role: 'MODERADOR • CANCIÓN ORIGINAL 🎵',
    rarity: 'mythic',
    avatar: 'assets/Iconos de perfiles/Rubenillo.webp',
    type: 'song',
    songKey: 'rubenillo',
    songTitle: 'AQUÍ SEGUIMOS, ARI',
    subtitle: 'Canción Original • Para Ariadna • <strong class="text-purple-300 font-bold">Rubenillo</strong>',
    audioUrl: 'assets/Dedicatorias/Rubenillo.mp3',
    durationText: '04:50',
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
    id: 'ded-errederamon',
    user: 'ErreDeRamon',
    platform: 'twitch',
    role: 'TRYHARD DE ZONA • FANART EXCLUSIVO 🎨',
    rarity: 'mythic',
    avatar: 'assets/Iconos de perfiles/ErreDeRamon.webp',
    type: 'image',
    image: 'assets/Dedicatorias/ErreDeRamon.webp',
    caption: 'Fanart y felicitación especial de ErreDeRamon para Ariadna',
    message: '¡Felicidades campeona! 🎂👑💜 Sigue haciendo lo que haces, que es genial. Que todos tus deseos se hagan realidad en este nivel 25, Ari. ¡Que no se acaben nunca las risas, los sustos en directo y las coronas ganadas en el último segundo! ¡A celebrarlo a lo grande, te lo mereces! 🎉🎮',
    reactions: { gg: 172, shield: 104, crown: 218 },
    date: 'Hoy a las 17:15'
  },
  {
    id: 'ded-bailen82',
    user: 'Bailen82',
    platform: 'twitch',
    role: 'COMUNIDAD TWITCH • NUEVA EPIC PARTNER 👑',
    rarity: 'mythic',
    layout: 'side-by-side',
    avatar: 'assets/Iconos de perfiles/Bailen82.webp',
    type: 'image',
    image: 'assets/Dedicatorias/Bailen82.webp',
    caption: 'Doble celebración de Bailen82: ¡Cumpleaños y Nueva Epic Partner!',
    message: '¡Feliz cumpleaños Arixu y enhorabuena por ser nueva Epic Partner! 🎉👑 Doble celebración para una grande. Que este nuevo año de vida venga lleno de éxitos, risas y muchas victorias. ¡Sigue rompiéndola en cada partida y disfrutando de todo lo que has conseguido! 🎂🎈✨',
    reactions: { gg: 164, shield: 95, crown: 205 },
    date: 'Hoy a las 17:20'
  },
  {
    id: 'ded-chookity',
    user: 'Chookity',
    platform: 'twitch',
    role: 'COMUNIDAD TWITCH • VÍDEO DEDICATORIA 🎬',
    rarity: 'mythic',
    avatar: 'assets/Iconos de perfiles/Chookity.webp',
    type: 'video',
    video: 'assets/Dedicatorias/Chookity.mp4',
    videoUrl: 'assets/Dedicatorias/Chookity.mp4',
    caption: 'Vídeo dedicatoria y felicitación especial de Chookity para Ariadna',
    message: `¡Feliz cumpleaños, Ari! 🎂🎉✨

Disfruta mucho tu día, sonríe, celebra y agradece por un año más de vida.
Te deseo lo mejor, que Diosito te llene de bendiciones, te cuide siempre y te permita cumplir muchos sueños más.

Espero que este sea un día muy especial para ti.
Un beso y un abrazo enorme a la distancia. 😘🫂💜`,
    reactions: { gg: 184, shield: 112, crown: 226 },
    date: 'Hoy a las 17:30'
  },
  /* ========================================================
     APARTADO ESPECIAL: STREAMERS & COMPAÑEROS DE TWITCH
     ======================================================== */
  {
    id: 'ded-anerius16',
    user: 'Anerius16',
    scenicBg: 'assets/images/fortnite-scenic-mountain.jpg',
    scenicLocation: 'CUMBRE PANORÁMICA AL ATARDECER • FORTNITE',
    watermarkTopRight: 'assets/images/fortnite-llama.svg',
    watermarkBottomLeft: 'assets/images/victory-crown.svg',
    fortniteTag: 'FORTNITE SQUAD ⚡',
    platform: 'twitch',
    role: 'STREAMER DE TWITCH & COMPAÑERA • VÍDEO DEDICATORIA 🎬',
    rarity: 'streamer',
    isStreamer: true,
    avatar: 'assets/Iconos de perfiles/Anerius16.png',
    twitchUrl: 'https://twitch.tv/anerius16',
    twitchUser: 'Anerius16',
    creatorCode: 'ANERIUS16',
    type: 'video',
    video: 'assets/Dedicatorias/Anerius16.mp4',
    videoUrl: 'assets/Dedicatorias/Anerius16.mp4',
    caption: 'Vídeo dedicatoria y felicitación especial de Anerius16 para Ariadna',
    message: `¡Hello Ari! Me han dicho que es tu cumpleaños, principalmente ¡muchísimas felicidades! 🎂✨

A ver, cosas que contarte... yo me enrollo mucho y me han dicho que no puedo hablar mucho, así que voy al grano: principalmente estoy muy emocionada y muy alegre porque este año nos hemos empezado a hablar mucho más, nos hemos empezado a llevar muchísimo mejor, que eso me encanta, y es como que hemos ampliado nuestro rango de amistades entre todas.

Es algo que a mí me gusta un montón. Te siento una persona muy real y alguien en quien de verdad puedo confiar, que en este mundo ya sabes que es muy difícil. ¡Así que muchísimas gracias por eso, feliz cumpleaños otra vez, espero que pases tu día de la mejor manera y que te den muchos regalos, que no nos merecemos menos! 💜🎉🎮`,
    reactions: { gg: 238, shield: 148, crown: 310 },
    date: 'Hoy a las 18:30'
  },
  {
    id: 'ded-dang3rclips',
    user: 'Dang3rclips',
    scenicBg: 'assets/images/fortnite-scenic-lake.jpg',
    scenicLocation: 'BALSA BOTÍN (LOOT LAKE) AL ANOCHECER • FORTNITE',
    watermarkTopRight: 'assets/images/fortnite-battlebus.svg',
    watermarkBottomLeft: 'assets/images/fortnite-pickaxe.svg',
    fortniteTag: 'FORTNITE CLIPS ⚡',
    platform: 'twitch',
    role: 'STREAMER & CREADOR DE CONTENIDO • VÍDEO DEDICATORIA 🎬',
    rarity: 'streamer',
    isStreamer: true,
    avatar: 'assets/Iconos de perfiles/dang3rclips.jpeg',
    twitchUrl: 'https://twitch.tv/dang3rclips',
    twitchUser: 'dang3rclips',
    creatorCode: 'DANG3R',
    youtubeUrl: 'https://youtube.com/@dang3r',
    type: 'video',
    video: 'assets/Dedicatorias/dang3rclips.mp4',
    videoUrl: 'assets/Dedicatorias/dang3rclips.mp4',
    caption: 'Vídeo dedicatoria y felicitación especial de Dang3rclips para Ariadna',
    message: `¡Hola Ari! ¡Muchísimas felicidades por tu cumpleaños! 🎂👑

Pasaba por aquí para desearte que pases un día increíble celebrando este nivel 25. Espero que vaya todo genial en esta nueva etapa, bendiciones gigantes para ti y para toda tu comunidad, que te lo mereces un montón por todo el curro y el corazón que le metes a cada directo.

¡A seguir rompiéndola a lo grande y que cumplas muchísimos más! 🔥🎉🎮`,
    reactions: { gg: 224, shield: 140, crown: 295 },
    date: 'Hoy a las 18:45'
  },
  {
    id: 'ded-teverdeconlimon',
    user: 'TeverdeconLimon',
    scenicBg: 'assets/images/fortnite-scenic-valley.jpg',
    scenicLocation: 'VALLE DE PRADERAS & RÍOS AL ATARDECER • FORTNITE',
    watermarkTopRight: 'assets/images/shield-potion.svg',
    watermarkBottomLeft: 'assets/images/fortnite-llama.svg',
    fortniteTag: 'SLURP ROYALE ⚡',
    platform: 'twitch',
    role: 'STREAMER DE TWITCH & COMPAÑERA • VÍDEO DEDICATORIA 🎬',
    rarity: 'streamer',
    isStreamer: true,
    avatar: 'assets/Iconos de perfiles/TeverdeconLimon.png',
    twitchUrl: 'https://twitch.tv/teverdeconlimon',
    twitchUser: 'teverdeconlimon',
    type: 'video',
    video: 'assets/Dedicatorias/TeverdeconLimon.mp4',
    videoUrl: 'assets/Dedicatorias/TeverdeconLimon.mp4',
    caption: 'Vídeo dedicatoria y felicitación especial de TeverdeconLimon para Ariadna',
    message: `¡Hello, aquí la Té Verde! 🍋🍵✨

Te deseo un súper feliz cumpleaños, Ari. Espero que hayas tenido un día precioso rodeada de tu gente y de toda tu comunidad.

Quiero aprovechar también para felicitarte por todo lo que estás consiguiendo: se nota que disfrutas de verdad lo que haces, que le dedicas muchísimo tiempo, ganas y un cariño enorme. Espero que sigas creciendo sin parar porque te lo mereces, no solo por todo tu esfuerzo, sino por la gran persona que eres.

¡Te mando un abrazo enorme, un besazo y a seguir cumpliendo muchos sueños! ¡Chaooo! 💜🎂`,
    reactions: { gg: 232, shield: 144, crown: 304 },
    date: 'Hoy a las 19:00'
  },
  /* ========================================================
     LISTA NORMAL DE LA COMUNIDAD (MARTA, LAURA Y CHAT)
     ======================================================== */
  {
    id: 'ded-marta',
    user: 'Marta',
    platform: 'twitch',
    role: 'DÚO LEGENDARIO • FANART & DEDICATORIA 🎨',
    rarity: 'mythic',
    avatar: 'assets/Iconos de perfiles/Marta.webp',
    type: 'image',
    image: 'assets/Dedicatorias/Marta.jpeg',
    caption: 'Tarta 3D personalizada y felicitación especial de Marta para Ariadna',
    message: `¡Feliz cumpleaños Arixu! ❤️🎂 Hoy no es un día cualquiera, hoy celebramos a una persona increíble que con su energía, su risa y su forma única de ser hace que cada directo sea especial.

Gracias por tantas risas en cada stream jugando juntas y los momentos más divertidos en dúo. ¡Para la mejor streamer del mundo, que este nuevo año te traiga todo lo bonito que mereces: salud, alegría, éxitos, más momentos épicos y todo lo que sueñes!

¡Los Arixulitos siempre contigo! ¡Feliz cumpleaños! 💜✨`,
    reactions: { gg: 186, shield: 124, crown: 240 },
    date: 'Hoy a las 17:45'
  },
  {
    id: 'ded-laura',
    user: 'Laura',
    platform: 'twitch',
    role: 'COMUNIDAD TWITCH • CARTA ESPECIAL 💌',
    rarity: 'legendary',
    avatar: 'assets/Iconos de perfiles/Laura.webp',
    type: 'image',
    image: 'assets/Dedicatorias/Laura.webp',
    caption: 'Carta y dedicatoria manuscrita de Laura para Ariadna',
    message: `Ari, ♡

Hoy celebras 25 años, y qué suerte la nuestra de que el mundo tenga personas tan bonitas como tú.

Que este nuevo año te traiga todo lo bonito que mereces: salud, amor, éxito, muchos momentos felices y sueños que se hagan realidad.

Disfruta mucho tu día, te lo mereces de verdad.

¡Feliz 25! ♡`,
    reactions: { gg: 168, shield: 106, crown: 224 },
    date: 'Hoy a las 18:00'
  },
  {
    id: 'ded-18',
    user: 'Neus',
    platform: 'twitch',
    role: 'COMUNIDAD TWITCH',
    rarity: 'epic',
    avatar: 'assets/Iconos de perfiles/Neus.webp',
    type: 'image',
    image: 'assets/Dedicatorias/Neus.jpeg',
    caption: 'Carta y recuerdo especial de Neus para Ariadna',
    message: `Quién me iba a decir que, hace un año, cuando empecé en tu canal, acabarías convirtiéndote en alguien tan especial para mí. Porque, aunque para muchos seas simplemente su creadora, para mí eres mucho más que mi “jefa”.

Te he cogido un cariño enorme y, aunque a veces tengamos nuestras diferencias, eso no cambia lo mucho que te quiero y te aprecio. Me alegro muchísimo de haber coincidido contigo y de poder formar parte de tu camino. Gracias por todos los momentos compartidos y por dejarme vivir este año a tu lado.

Hoy solo deseo que la vida te regale todo lo bonito que mereces, que nunca te falten motivos para sonreír y que puedas cumplir cada uno de tus sueños.

Feliz cumpleaños, Ari. ♡ ¡Por muchos años más!`,
    reactions: { gg: 58, shield: 37, crown: 79 },
    date: 'Hoy a las 17:00'
  },
  {
    id: 'ded-2',
    user: 'LUSANITO',
    platform: 'twitch',
    role: 'COMUNIDAD TWITCH',
    rarity: 'legendary',
    avatar: 'assets/Iconos de perfiles/Lusanito.webp',
    type: 'text',
    message: 'Gracias Ari por ser como eres y crear la comunidad que tienes, no recuerdo cómo llegué aquí pero me alegro de haber descubierto tu canal. No sabes lo que indirectamente me has ayudado en los días malos que tenía con tus directos. Sigue así! Me alegra mucho ver como en un año has crecido tanto y sé que seguirás creciendo!!',
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
  }
];

class DedicationsManager {
  constructor() {
    this.storageKey = 'imarixu_birthday_dedications_v25';
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
      localStorage.removeItem('imarixu_birthday_dedications_v7');
      localStorage.removeItem('imarixu_birthday_dedications_v8');
      localStorage.removeItem('imarixu_birthday_dedications_v9');
      localStorage.removeItem('imarixu_birthday_dedications_v10');
      localStorage.removeItem('imarixu_birthday_dedications_v11');
      localStorage.removeItem('imarixu_birthday_dedications_v12');
      localStorage.removeItem('imarixu_birthday_dedications_v13');
      localStorage.removeItem('imarixu_birthday_dedications_v14');
      localStorage.removeItem('imarixu_birthday_dedications_v15');
      localStorage.removeItem('imarixu_birthday_dedications_v16');
      localStorage.removeItem('imarixu_birthday_dedications_v17');
      localStorage.removeItem('imarixu_birthday_dedications_v18');
      localStorage.removeItem('imarixu_birthday_dedications_v19');
      localStorage.removeItem('imarixu_birthday_dedications_v20');
      localStorage.removeItem('imarixu_birthday_dedications_v21');
      localStorage.removeItem('imarixu_birthday_dedications_v22');
      localStorage.removeItem('imarixu_birthday_dedications_v23');
      localStorage.removeItem('imarixu_birthday_dedications_v24');
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
      case 'streamer':
        return {
          label: 'STREAMER TWITCH 👑',
          border: 'border-[#9146FF]',
          bg: 'from-purple-900/40 via-[#9146FF]/20 to-amber-500/10',
          badgeBg: 'bg-gradient-to-r from-[#9146FF] via-purple-600 to-amber-400 text-white',
          glow: 'shadow-[0_0_35px_rgba(145,70,255,0.45)]'
        };
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

  renderFeed(containerId, activeFilter = 'all') {
    const container = document.getElementById(containerId);
    if (!container) return;

    let filtered = this.dedications;
    if (activeFilter === 'streamers') {
      filtered = this.dedications.filter(d => d.isStreamer);
    } else if (activeFilter === 'songs') {
      filtered = this.dedications.filter(d => d.type === 'song');
    } else if (activeFilter === 'fanarts') {
      filtered = this.dedications.filter(d => d.type === 'image');
    } else if (activeFilter === 'videos') {
      filtered = this.dedications.filter(d => d.type === 'video');
    }

    let hasRenderedStreamerSectionHeader = false;

    container.innerHTML = filtered.map(item => {
      // Special Streamer Card Rendering
      if (item.isStreamer) {
        let streamerApartadoHeader = '';
        if (!hasRenderedStreamerSectionHeader && (activeFilter === 'all' || activeFilter === 'streamers')) {
          hasRenderedStreamerSectionHeader = true;
          streamerApartadoHeader = `
            <!-- ========================================================
                 APARTADO ESPECIAL: COMPAÑEROS DE TWITCH & STREAMERS
                 ======================================================== -->
            <div id="zona-streamers-apartado" class="streamers-showcase-header my-10 relative overflow-hidden rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#240b4a] via-[#3d127c] to-[#240b4a] border-2 border-[#9146FF] shadow-[0_0_40px_rgba(145,70,255,0.5)]">
              <div class="absolute -right-6 -bottom-6 w-40 h-40 opacity-10 pointer-events-none text-white">
                <svg class="w-full h-full fill-current" viewBox="0 0 24 24"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/></svg>
              </div>
              <div class="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
                <div class="flex flex-col sm:flex-row items-center gap-4">
                  <div class="w-16 h-16 rounded-2xl bg-[#9146FF] flex items-center justify-center shadow-[0_0_25px_rgba(145,70,255,0.65)] shrink-0 border border-purple-300">
                    <svg class="w-9 h-9 text-white fill-current" viewBox="0 0 24 24"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/></svg>
                  </div>
                  <div>
                    <div class="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-yellow-400 text-black text-[11px] font-black tracking-wider uppercase mb-1 shadow">
                      <span>👑</span> APARTADO ESPECIAL • ZONA STREAMERS
                    </div>
                    <h3 class="font-burbank text-2xl sm:text-3xl text-yellow-300 uppercase tracking-wide">
                      COMPAÑEROS DE TWITCH
                    </h3>
                    <p class="text-xs sm:text-sm text-purple-200 mt-1 max-w-xl">
                      El escuadrón de streamers y compañeros de Twitch que comparten partidas y risas con Ariadna se unen a la celebración con dedicatorias exclusivas en vídeo y sus redes oficiales.
                    </p>
                  </div>
                </div>
                <div class="flex items-center gap-2 shrink-0">
                  <div class="px-4 py-2 rounded-xl bg-purple-950/80 border border-purple-400/60 text-xs font-mono text-purple-200 flex items-center gap-2 shadow-inner">
                    <span class="w-2.5 h-2.5 rounded-full bg-[#9146FF] animate-ping"></span>
                    <span class="font-bold text-yellow-300 font-hud">TWITCH SQUAD</span>
                  </div>
                </div>
              </div>
            </div>
          `;
        }

        const topWatermark = item.watermarkTopRight || 'assets/images/fortnite-llama.svg';
        const bottomWatermark = item.watermarkBottomLeft || 'assets/images/victory-crown.svg';
        const fnTag = item.fortniteTag || 'FORTNITE CREATOR ⚡';

        return streamerApartadoHeader + `
          <!-- DEDICATORIA STREAMER VIP: ${item.user} (CON FONDO FORTNITE) -->
          <article class="feed-card streamer-special-card relative rounded-3xl p-5 md:p-7 border-2 border-[#9146FF] shadow-[0_0_35px_rgba(145,70,255,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(145,70,255,0.7)] group overflow-hidden" data-id="${item.id}">
            <!-- Tactical Fortnite Corner Brackets -->
            <div class="fortnite-corner-tl"></div>
            <div class="fortnite-corner-br"></div>

            <!-- Dynamic Fortnite Background Watermarks -->
            <div class="absolute -top-4 -right-4 w-36 h-36 sm:w-44 sm:h-44 opacity-20 pointer-events-none select-none animate-fortnite-float z-0">
              <img src="${topWatermark}" class="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]" alt="Fortnite Element">
            </div>
            <div class="absolute -bottom-5 -left-5 w-28 h-28 sm:w-36 sm:h-36 opacity-15 pointer-events-none select-none animate-fortnite-float-rev z-0">
              <img src="${bottomWatermark}" class="w-full h-full object-contain filter drop-shadow-[0_0_16px_rgba(244,196,48,0.8)]" alt="Fortnite Element">
            </div>

            <!-- Scenic Fortnite Landscape Background Layer -->
            <div class="fortnite-scenic-bg-layer">
              <img src="${item.scenicBg || 'assets/images/fortnite-scenic-mountain.jpg'}" alt="Paisaje de Fortnite - ${item.user}">
              <div class="fortnite-scenic-overlay"></div>
            </div>

            <div class="relative z-10">
              <!-- Ribbon Badge: Styled with Fortnite Victory Gold & Twitch Purple -->
              <div class="absolute -top-3.5 right-4 sm:right-6 bg-gradient-to-r from-amber-400 via-purple-600 to-[#9146FF] text-black font-black text-[11px] uppercase tracking-wider px-3.5 py-1 rounded-md skew-x-[-10deg] shadow-[0_0_15px_rgba(244,196,48,0.5)] border border-yellow-200 flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5 fill-current text-black" viewBox="0 0 24 24"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/></svg>
                <span class="font-burbank text-black tracking-wide">COMPAÑERO DE TWITCH 👑</span>
              </div>

              <!-- Streamer Header -->
              <div class="flex items-center gap-4 mb-4">
                <div class="relative shrink-0">
                  <div class="w-16 h-16 rounded-full p-1 bg-gradient-to-tr from-[#9146FF] via-yellow-400 to-[#00f0ff] shadow-[0_0_20px_rgba(145,70,255,0.7)] animate-pulse-slow">
                    <img src="${item.avatar}" alt="${item.user}" class="w-full h-full rounded-full object-cover border-2 border-[#130728]">
                  </div>
                  <span class="absolute -bottom-1 -right-1 bg-[#9146FF] border-2 border-white rounded-full p-1 shadow-md" title="Streamer Verificado en Twitch">
                    <svg class="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/></svg>
                  </span>
                </div>

                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="font-username text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-purple-100 to-white tracking-wide truncate">${item.user}</span>
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-yellow-500/25 via-purple-600/30 to-amber-500/25 border border-yellow-400/60 text-yellow-300 text-[10px] font-hud font-bold shadow-sm">
                      <img src="assets/images/fortnite-pickaxe.svg" class="w-3.5 h-3.5 inline" alt="Pickaxe">
                      <span>${fnTag}</span>
                    </span>
                  </div>
                  <div class="flex items-center gap-2 text-xs text-purple-300 mt-1 flex-wrap">
                    <span class="font-bold text-yellow-400">${item.role}</span>
                    <span class="text-purple-400/50">•</span>
                    <span class="text-gray-400 font-mono text-[11px]">${item.date}</span>
                  </div>
                </div>
              </div>

              <!-- Social Media & Creator Networks Showcase Bar (Fortnite Battle Pass HUD Style) -->
              <div class="mb-4 p-3.5 rounded-2xl bg-gradient-to-r from-[#1b083b]/95 via-[#2b0d5c]/95 to-[#1b083b]/95 border border-yellow-400/40 shadow-[0_0_20px_rgba(145,70,255,0.25)] flex items-center justify-between flex-wrap gap-2.5">
                <div class="flex items-center gap-2 flex-wrap">
                  <!-- Twitch Button -->
                  <a href="${item.twitchUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#9146FF] hover:bg-[#772ce8] text-white text-xs font-hud font-bold shadow-[0_0_15px_rgba(145,70,255,0.4)] transition-all hover:scale-105" title="Visitar canal de Twitch de ${item.user}">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/></svg>
                    <span>Twitch: <span class="underline underline-offset-2">${item.twitchUser || item.user}</span></span>
                    <svg class="w-3 h-3 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                  </a>

                  ${item.creatorCode ? `
                    <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-950/90 border border-yellow-400/60 text-xs font-hud text-yellow-300 shadow-md" title="Código de Apoyo a Creador en Fortnite">
                      <img src="assets/images/vbuck.svg" class="w-4 h-4 inline-block drop-shadow" alt="V-Bucks">
                      <span>Código Epic: <strong class="text-white font-mono bg-yellow-500/25 px-1.5 py-0.5 rounded border border-yellow-400/50">${item.creatorCode}</strong></span>
                    </div>
                  ` : ''}

                  ${item.youtubeUrl ? `
                    <a href="${item.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-600/30 hover:bg-red-600/50 border border-red-500/70 text-red-200 hover:text-white text-xs font-hud font-bold transition-all hover:scale-105" title="Canal de YouTube">
                      <svg class="w-3.5 h-3.5 text-red-400 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                      <span>YouTube</span>
                    </a>
                  ` : ''}
                </div>

                <div class="flex items-center gap-1.5 text-[11px] text-[#c084fc] font-mono">
                  <span class="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
                  <span class="font-bold text-amber-300 font-hud">🌄 ${item.scenicLocation || 'PAISAJE DE FORTNITE'}</span>
                </div>
              </div>

              <!-- Message Quote Bubble (Fortnite Locker Aesthetic) -->
              <div class="relative bg-gradient-to-r from-purple-950/80 via-[#220c4a]/60 to-purple-950/80 border-l-4 border-yellow-400 border-y border-r border-purple-600/30 pl-4 pr-3 py-3.5 rounded-r-2xl my-4 shadow-inner">
                <span class="text-2xl text-yellow-400/50 font-serif absolute top-1 left-1.5 select-none">“</span>
                <p class="text-gray-100 text-sm md:text-base leading-relaxed font-sans font-medium whitespace-pre-line pl-2">
${item.message}
                </p>
              </div>

              <!-- Video Player -->
              <div class="mt-4 rounded-2xl overflow-hidden border-2 border-[#9146FF]/80 bg-black/85 shadow-[0_0_30px_rgba(145,70,255,0.4)] relative max-w-[360px] sm:max-w-[400px] mx-auto group">
                <video src="${item.video}" controls playsinline preload="metadata" class="w-full h-auto max-h-[580px] object-contain mx-auto rounded-xl bg-black block" onplay="document.querySelectorAll('audio').forEach(a => { if(!a.paused) a.pause(); }); if(window.soundFX && window.soundFX.stopBGM) window.soundFX.stopBGM();"></video>
              </div>

              <!-- Fullscreen Action button -->
              <div class="mt-3 flex items-center justify-center gap-3">
                <button onclick="openClipModal('${(item.caption || 'Vídeo de ' + item.user).replace(/'/g, "\\'")}', '${item.video}')" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#9146FF] to-purple-700 hover:from-[#772ce8] hover:to-purple-600 border border-purple-400/80 text-xs font-bold font-hud text-white shadow-[0_0_20px_rgba(145,70,255,0.4)] transition-all hover:scale-105">
                  <span>🎬</span>
                  <span>Ver vídeo en pantalla completa</span>
                </button>
              </div>
              ${item.caption ? `<p class="text-xs text-yellow-200/80 italic mt-2 text-center">${item.caption}</p>` : ''}

              <!-- Reactions Bar -->
              <div class="mt-5 pt-4 border-t border-purple-900/60 flex items-center justify-between flex-wrap gap-2">
                <div class="flex items-center gap-2">
                  <button onclick="handleReaction('${item.id}', 'gg', event)" class="reaction-btn flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-950/70 hover:bg-purple-800/80 border border-purple-700/50 hover:border-yellow-400 text-xs font-bold text-yellow-300 transition-all active:scale-95">
                    <span class="font-black text-sm">GG</span>
                    <span class="counter-val text-white/90" id="cnt-${item.id}-gg">${item.reactions.gg}</span>
                  </button>
                  <button onclick="handleReaction('${item.id}', 'shield', event)" class="reaction-btn flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-950/70 hover:bg-cyan-950/80 border border-cyan-800/60 hover:border-cyan-400 text-xs font-bold text-cyan-300 transition-all active:scale-95">
                    <img src="assets/images/shield-potion.svg" class="w-4 h-4" alt="Mini">
                    <span class="counter-val text-white/90" id="cnt-${item.id}-shield">${item.reactions.shield}</span>
                  </button>
                  <button onclick="handleReaction('${item.id}', 'crown', event)" class="reaction-btn flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-950/70 hover:bg-amber-950/80 border border-amber-700/60 hover:border-amber-400 text-xs font-bold text-amber-300 transition-all active:scale-95">
                    <img src="assets/images/crown.svg" class="w-4 h-4" alt="Corona">
                    <span class="counter-val text-white/90" id="cnt-${item.id}-crown">${item.reactions.crown}</span>
                  </button>
                </div>

                <a href="${item.twitchUrl}" target="_blank" rel="noopener noreferrer" class="text-xs text-[#d8b4fe] hover:text-white font-mono flex items-center gap-1 hover:underline">
                  <svg class="w-3.5 h-3.5 fill-current text-[#9146FF]" viewBox="0 0 24 24"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/></svg>
                  <span>Canal oficial en Twitch</span>
                </a>
              </div>
            </div>
          </article>
        `;
      }
      const cfg = this.getRarityConfig(item.rarity || 'rare');

      let mediaContent = '';
      if (item.layout === 'side-by-side' && item.type === 'image' && item.image) {
        mediaContent = `
          <!-- Content: Side-by-side Layout (Vertical Image + Text Column) -->
          <div class="mt-4 flex flex-col md:flex-row items-center md:items-stretch gap-6 bg-purple-950/30 p-4 sm:p-5 rounded-2xl border border-purple-800/50">
            <!-- Vertical Image Column -->
            <div class="w-full md:w-5/12 max-w-[280px] shrink-0 mx-auto rounded-xl overflow-hidden border-2 border-yellow-400/70 shadow-[0_0_25px_rgba(244,196,48,0.25)] group cursor-pointer relative bg-black/50" onclick="openLightbox('${item.image}', '${encodeURIComponent(item.caption || 'Recuerdo especial de ' + item.user)}')">
              <img src="${item.image}" alt="${item.user}" class="w-full h-auto max-h-[460px] object-contain mx-auto group-hover:scale-105 transition-transform duration-300" loading="lazy">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5 pointer-events-none">
                <span class="text-xs text-white/90 flex items-center gap-1 font-semibold">
                  <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/></svg>
                  Ver imagen completa
                </span>
              </div>
            </div>

            <!-- Text & Info Column -->
            <div class="flex-1 flex flex-col justify-center space-y-3.5">
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-yellow-400/15 border border-yellow-400/40 text-yellow-300 text-xs font-hud font-bold w-fit">
                <span>👑</span> <span>DOBLE CELEBRACIÓN: CUMPLEAÑOS & EPIC PARTNER</span>
              </div>
              <div class="bg-black/30 rounded-xl p-4 border border-purple-800/40">
                <p class="text-gray-100 text-sm sm:text-base leading-relaxed font-sans font-medium whitespace-pre-line">
${item.message}
                </p>
              </div>
              ${item.caption ? `
                <p class="text-xs text-yellow-300/80 italic border-l-2 border-yellow-400/60 pl-3 py-1 bg-yellow-400/5 rounded-r">
                  ${item.caption}
                </p>
              ` : ''}
            </div>
          </div>
        `;
      } else if (item.type === 'image' && item.image) {
        mediaContent = `
          <div class="mt-4 rounded-xl overflow-hidden border-2 border-white/10 group cursor-pointer relative bg-black/40" onclick="openLightbox('${item.image}', '${encodeURIComponent(item.caption || 'Recuerdo especial de ' + item.user)}')">
            <img src="${item.image}" alt="Dedicatoria" class="w-full h-auto max-h-[650px] object-contain object-top mx-auto group-hover:scale-105 transition-transform duration-300" loading="lazy">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3 pointer-events-none">
              <span class="text-xs text-white/90 flex items-center gap-1 font-semibold">
                <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/></svg>
                Ver imagen completa
              </span>
            </div>
          </div>
          ${item.caption ? `<p class="text-xs text-yellow-200/80 italic mt-2">${item.caption}</p>` : ''}
        `;
      } else if (item.type === 'video' && (item.video || item.videoUrl)) {
        const vidSrc = item.video || item.videoUrl;
        const vidCap = (item.caption || `Vídeo dedicatoria de ${item.user}`).replace(/'/g, "\\'");
        mediaContent = `
          <div class="mt-4 rounded-2xl overflow-hidden border-2 border-purple-500/50 bg-black/70 shadow-[0_0_25px_rgba(168,85,247,0.25)] relative max-w-[340px] sm:max-w-[380px] mx-auto">
            <video src="${vidSrc}" controls playsinline preload="metadata" class="w-full h-auto max-h-[580px] object-contain mx-auto rounded-xl bg-black block" onplay="document.querySelectorAll('audio').forEach(a => { if(!a.paused) a.pause(); }); if(window.soundFX && window.soundFX.stopBGM) window.soundFX.stopBGM();"></video>
          </div>
          <div class="mt-3 flex items-center justify-center gap-3">
            <button onclick="openClipModal('${vidCap}', '${vidSrc}')" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-800/70 hover:bg-purple-700 border border-purple-500/70 text-xs font-bold font-hud text-purple-200 hover:text-white transition-all hover:scale-105 shadow-md">
              <span>🎬</span>
              <span>Ver en pantalla completa</span>
            </button>
          </div>
          ${item.caption ? `<p class="text-xs text-yellow-200/80 italic mt-2 text-center">${item.caption}</p>` : ''}
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
        const songKey = item.songKey || (item.id === 'ded-ferdinang' ? 'ferdinang' : item.id.replace('ded-', ''));
        const subtitle = item.subtitle || `Para Ariadna • <strong class="text-purple-300 font-bold">${item.user}</strong>`;
        const durText = item.durationText || '03:37';

        let songImageHtml = '';
        if (item.image) {
          songImageHtml = `
            <div class="mt-4 rounded-xl overflow-hidden border-2 border-white/10 group cursor-pointer relative" onclick="openLightbox('${item.image}', '${encodeURIComponent(item.caption || 'Recuerdo especial de ' + item.user)}')">
              <img src="${item.image}" alt="Dedicatoria de ${item.user}" class="w-full h-64 sm:h-80 md:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-300" loading="lazy">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3 pointer-events-none">
                <span class="text-xs text-white/90 flex items-center gap-1 font-semibold">
                  <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/></svg>
                  Ver imagen completa
                </span>
              </div>
            </div>
            ${item.caption ? `<p class="text-xs text-yellow-200/80 italic mt-2">${item.caption}</p>` : ''}
          `;
        }

        mediaContent = `
          ${songImageHtml}
          <div class="mt-5 rounded-2xl bg-[#0f0622]/95 border-2 border-yellow-400/80 p-4 sm:p-5 shadow-[0_0_25px_rgba(244,196,48,0.2)]">
            <!-- Audio element hidden -->
            <audio id="${songKey}-audio" src="${item.audioUrl}" preload="metadata"></audio>

            <!-- Main Player Controls Row -->
            <div class="flex flex-col md:flex-row items-center justify-between gap-4">
              
              <!-- Vinyl Avatar + Track Info -->
              <div class="flex items-center gap-3.5 w-full md:w-auto">
                <div class="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0">
                  <div id="${songKey}-vinyl-disc" class="w-full h-full rounded-full bg-gradient-to-tr from-black via-zinc-900 to-black p-1 border-2 border-zinc-700 shadow-xl flex items-center justify-center transition-transform">
                    <div class="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-yellow-400 shadow">
                      <img src="${item.avatar}" alt="${item.user}" class="w-full h-full object-cover">
                    </div>
                  </div>
                  <span id="${songKey}-player-status-badge" class="absolute -bottom-1 -right-1 bg-yellow-400 text-black text-[9px] font-black px-1.5 py-0.5 rounded uppercase shadow font-mono">PAUSA</span>
                </div>

                <div class="min-w-0">
                  <h4 class="font-burbank text-lg sm:text-xl text-yellow-300 truncate tracking-wide">${item.songTitle}</h4>
                  <p class="text-xs text-purple-200 truncate font-sans">${subtitle}</p>
                </div>
              </div>

              <!-- Controls + Timeline Scrubber -->
              <div class="flex flex-col items-center w-full md:max-w-md">
                <div class="flex items-center justify-center gap-3 mb-2">
                  <button onclick="skipSongAudio('${songKey}', -10)" class="px-2.5 py-1.5 rounded-xl bg-purple-950/80 hover:bg-purple-900 border border-purple-700/70 text-yellow-300 transition-all hover:scale-105 active:scale-95" title="Retroceder 10 segundos">
                    <span class="text-xs font-mono font-black">⏪ -10s</span>
                  </button>

                  <button id="${songKey}-play-btn" onclick="toggleSongPlay('${songKey}')" class="px-5 py-2 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-black font-burbank text-base flex items-center gap-2 shadow-[0_0_20px_rgba(244,196,48,0.5)] hover:scale-105 active:scale-95 transition-all duration-200 border border-yellow-200">
                    <span id="${songKey}-play-icon" class="text-lg">▶</span>
                    <span id="${songKey}-play-text" class="font-black uppercase tracking-wider">REPRODUCIR</span>
                  </button>

                  <button onclick="skipSongAudio('${songKey}', 10)" class="px-2.5 py-1.5 rounded-xl bg-purple-950/80 hover:bg-purple-900 border border-purple-700/70 text-yellow-300 transition-all hover:scale-105 active:scale-95" title="Avanzar 10 segundos">
                    <span class="text-xs font-mono font-black">+10s ⏩</span>
                  </button>
                </div>

                <div class="w-full flex items-center gap-2.5">
                  <span id="${songKey}-time-current" class="text-[11px] font-mono text-yellow-300 font-bold w-10 text-right">00:00</span>
                  <div class="relative flex-1 h-2 bg-black/70 rounded-full cursor-pointer group" id="${songKey}-progress-container" onclick="seekSongAudio('${songKey}', event)">
                    <div id="${songKey}-progress-bar" class="h-full bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full w-0 transition-all duration-100 shadow-[0_0_10px_rgba(244,196,48,0.7)]"></div>
                  </div>
                  <span id="${songKey}-time-total" class="text-[11px] font-mono text-gray-400 w-10">${durText}</span>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="flex items-center gap-2 w-full md:w-auto justify-end flex-wrap">
                ${item.videoUrl ? `
                  <button onclick="openClipModal('${item.songTitle} - ${item.user}', '${item.videoUrl}')" class="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-purple-700/80 hover:bg-purple-600 border border-purple-400/80 text-xs font-bold font-hud text-white transition-all hover:scale-105 shadow-md" title="Ver video oficial">
                    <span>🎬</span>
                    <span>Ver Video</span>
                  </button>
                ` : ''}
                <button id="${songKey}-toggle-lyrics-btn" onclick="toggleSongLyrics('${songKey}')" class="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-purple-900/60 hover:bg-purple-800 border border-purple-600/70 text-xs font-bold font-hud text-purple-200 hover:text-white transition-all hover:scale-102">
                  <span>📜</span>
                  <span id="${songKey}-toggle-lyrics-text">Ver Letra</span>
                </button>
                <button onclick="downloadSongLyrics('${songKey}')" class="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-purple-950/80 hover:bg-purple-900 border border-purple-700/60 text-xs font-bold font-hud text-yellow-300 hover:text-yellow-200 transition-all hover:scale-102" title="Descargar letra en .txt">
                  <span>💾</span>
                  <span>Descargar</span>
                </button>
              </div>

            </div>

            <!-- STATIC LYRICS VIEW (Hidden by default, expands vertically on click) -->
            <div id="${songKey}-lyrics-wrapper" class="hidden mt-4 pt-4 border-t border-purple-800/60 transition-all duration-300">
              <div class="flex items-center justify-between pb-2 mb-3 border-b border-purple-900/40 text-xs text-gray-400">
                <span class="font-burbank text-yellow-300 text-sm tracking-wide">📜 LETRA DE LA CANCIÓN</span>
                <span class="text-[11px] font-mono text-purple-300/70">Letra oficial</span>
              </div>

              <div id="${songKey}-lyrics-list" class="max-h-80 sm:max-h-96 overflow-y-auto px-2 py-1 lyrics-scrollbar">
                ${STATIC_LYRICS_DATA[songKey] || ''}
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
                <span class="font-username text-lg font-bold text-purple-300 tracking-wide truncate">${item.user}</span>
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

          ${item.layout === 'side-by-side' ? '' : `
            <!-- Message Body -->
            <p class="text-gray-200 text-sm md:text-base leading-relaxed font-sans font-medium whitespace-pre-line">
              ${item.message}
            </p>
          `}

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
      if (window.initSongPlayers) {
        window.initSongPlayers();
      } else if (window.initFerdinangPlayer) {
        window.initFerdinangPlayer();
      }
    }, 50);
  }
}

window.dedicationsManager = new DedicationsManager();

/* ========================================================
   UNIFIED SONG PLAYERS & VERTICAL SYNCHRONIZED LYRICS
   (Supports Ferdinang, LivingBenidorm, and any future songs)
   ======================================================== */
function initSingleSongPlayer(songKey) {
  const audio = document.getElementById(`${songKey}-audio`);
  const lyricsList = document.getElementById(`${songKey}-lyrics-list`);
  if (!audio) return;

  function formatTime(sec) {
    if (isNaN(sec) || sec < 0) return '00:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  // Populate static lyrics if empty
  if (lyricsList && (!lyricsList.innerHTML || !lyricsList.innerHTML.trim())) {
    lyricsList.innerHTML = STATIC_LYRICS_DATA[songKey] || '';
  }

  const getTotalEl = () => document.getElementById(`${songKey}-time-total`) || (songKey === 'ferdinang' ? document.getElementById('ferdinang-time-total') : null);
  const getCurEl = () => document.getElementById(`${songKey}-time-current`) || (songKey === 'ferdinang' ? document.getElementById('ferdinang-time-current') : null);
  const getProgEl = () => document.getElementById(`${songKey}-progress-bar`) || (songKey === 'ferdinang' ? document.getElementById('ferdinang-progress-bar') : null);
  const getPlayIcon = () => document.getElementById(`${songKey}-play-icon`) || (songKey === 'ferdinang' ? document.getElementById('ferdinang-play-icon') : null);
  const getPlayText = () => document.getElementById(`${songKey}-play-text`) || (songKey === 'ferdinang' ? document.getElementById('ferdinang-play-text') : null);
  const getDisc = () => document.getElementById(`${songKey}-vinyl-disc`) || (songKey === 'ferdinang' ? document.getElementById('vinyl-disc') : null);
  const getBadge = () => document.getElementById(`${songKey}-player-status-badge`) || (songKey === 'ferdinang' ? document.getElementById('player-status-badge') : null);

  const updateTotal = () => {
    const totalEl = getTotalEl();
    if (totalEl && audio.duration) {
      totalEl.textContent = formatTime(audio.duration);
    }
  };

  audio.addEventListener('loadedmetadata', updateTotal);
  if (audio.duration) updateTotal();

  audio.addEventListener('timeupdate', () => {
    const curTime = audio.currentTime;
    const duration = audio.duration || (songKey === 'sito' ? 294 : (songKey === 'rubenillo' ? 289.6 : (songKey === 'livingbenidorm' ? 140.8 : 217.6)));

    // Update progress bar
    const progressEl = getProgEl();
    const timeCurEl = getCurEl();
    if (progressEl) {
      const pct = (curTime / duration) * 100;
      progressEl.style.width = `${pct}%`;
    }
    if (timeCurEl) {
      timeCurEl.textContent = formatTime(curTime);
    }
    // Static lyrics: no automatic scrolling or dynamic highlighting
  });

  audio.addEventListener('play', () => {
    // Lower or pause background lobby music so song is heard clearly
    if (window.soundFX && window.soundFX.bgmAudio && !window.soundFX.bgmAudio.paused) {
      window.soundFX.bgmAudio.pause();
    }
    if (window.soundFX && window.soundFX.stopBGM) {
      window.soundFX.stopBGM();
    }
    // Pause other songs
    Object.keys(STATIC_LYRICS_DATA).forEach(otherKey => {
      if (otherKey !== songKey) {
        const otherAudio = document.getElementById(`${otherKey}-audio`);
        if (otherAudio && !otherAudio.paused) {
          otherAudio.pause();
        }
      }
    });

    const playIcon = getPlayIcon();
    const playText = getPlayText();
    const disc = getDisc();
    const badge = getBadge();
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
    const playIcon = getPlayIcon();
    const playText = getPlayText();
    const disc = getDisc();
    const badge = getBadge();
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
    const playIcon = getPlayIcon();
    const playText = getPlayText();
    const disc = getDisc();
    const badge = getBadge();
    if (playIcon) playIcon.textContent = '▶';
    if (playText) playText.textContent = 'REPETIR';
    if (disc) disc.classList.remove('vinyl-playing');
    if (badge) {
      badge.textContent = 'FINAL';
      badge.classList.remove('bg-emerald-400');
      badge.classList.add('bg-yellow-400');
    }
  });
}

window.initSongPlayers = function() {
  Object.keys(STATIC_LYRICS_DATA).forEach(songKey => {
    initSingleSongPlayer(songKey);
  });
};

window.initFerdinangPlayer = function() {
  window.initSongPlayers();
};

window.toggleSongPlay = function(songKey) {
  const audio = document.getElementById(`${songKey}-audio`);
  if (!audio) return;
  if (audio.paused) {
    audio.play().catch(() => {});
  } else {
    audio.pause();
  }
};

window.skipSongAudio = function(songKey, sec) {
  const audio = document.getElementById(`${songKey}-audio`);
  if (!audio) return;
  const dur = audio.duration || (songKey === 'sito' ? 294 : (songKey === 'rubenillo' ? 289.6 : (songKey === 'livingbenidorm' ? 140.8 : 217.6)));
  audio.currentTime = Math.max(0, Math.min(dur, audio.currentTime + sec));
  if (window.soundFX && window.soundFX.playFortniteClick) {
    window.soundFX.playFortniteClick();
  }
};

window.seekSongAudio = function(songKey, e) {
  const audio = document.getElementById(`${songKey}-audio`);
  const container = document.getElementById(`${songKey}-progress-container`) || (songKey === 'ferdinang' ? document.getElementById('ferdinang-progress-container') : null);
  if (!audio || !container) return;
  const rect = container.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const pct = Math.max(0, Math.min(1, clickX / rect.width));
  const dur = audio.duration || (songKey === 'sito' ? 294 : (songKey === 'rubenillo' ? 289.6 : (songKey === 'livingbenidorm' ? 140.8 : 217.6)));
  audio.currentTime = pct * dur;
};

window.seekSongVerse = function(songKey, seconds) {
  const audio = document.getElementById(`${songKey}-audio`);
  if (!audio) return;
  audio.currentTime = seconds;
  if (audio.paused) {
    audio.play().catch(() => {});
  }
};

window.toggleSongLyrics = function(songKey) {
  const wrapper = document.getElementById(`${songKey}-lyrics-wrapper`) || (songKey === 'ferdinang' ? document.getElementById('ferdinang-lyrics-wrapper') : null);
  const textEl = document.getElementById(`${songKey}-toggle-lyrics-text`) || (songKey === 'ferdinang' ? document.getElementById('toggle-lyrics-text') : null);
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

// Backwards compatibility wrappers for Ferdinang
window.toggleFerdinangPlay = () => window.toggleSongPlay('ferdinang');
window.skipFerdinangAudio = (sec) => window.skipSongAudio('ferdinang', sec);
window.seekFerdinangAudio = (e) => window.seekSongAudio('ferdinang', e);
window.seekSongTo = (sec) => window.seekSongVerse('ferdinang', sec);
window.toggleLyricsPanel = () => window.toggleSongLyrics('ferdinang');
window.downloadFerdinangLyrics = () => window.downloadSongLyrics('ferdinang');

window.downloadSongLyrics = function(songKey) {
  let filename = '';
  let lyricsText = '';

  if (songKey === 'rubenillo') {
    filename = 'Letra_Rubenillo_Aqui_Seguimos_Ari.txt';
    lyricsText = `AQUÍ SEGUIMOS, ARI (FELIZ CUMPLEAÑOS)
Dedicatoria especial de: Rubenillo (Moderador)

[Intro]
Un día encendiste la cámara por primera vez...
y sin saberlo, creaste un hogar para todos nosotros.
Desde el otro lado de este cristal,
hoy tu chat entero tiene algo que cantarte.
Para ti, Ari.

[Verso 1]
Qué difícil es a veces mirar esta pantalla,
querer saltar el cristal y no poder abrazarte.
Ver cómo pasa el tiempo, cómo ganas las batallas,
y sentir que nuestro premio es poder acompañarte.
Toda esta comunidad que late a tu compás,
sabe que detrás del micro hay alguien de verdad.

[Pre-estribillo]
Es cierto que hemos perdido a gente por el camino,
hemos cambiado de piel y han llegado nombres nuevos.
Pero mira bien el chat, es testigo del destino:
hay quienes siguen aquí desde el primer segundo de tus juegos.

[Estribillo]
Feliz cumple, Ari,
disfruta quién eres.
Mira lo que has construido,
y abraaaaaaaza lo que tienes.
Cumpliendo tus metas, sumando otro año,
hagas lo que hagas... jamáaaaaaaas te soltamos.

[Verso 2]
Lloramos contigo aquella tarde al conseguir el Partner,
y nos curaste el alma riendo con las bromas telefónicas.
Te hemos visto brillar y coronarte en los torneos,
escribiendo en cada directo tu propia historia icónica.
¡Si es que ni un habanero del infierno te ha podido parar!
Tienes el fuego en las venas y el mundo por conquistar.

[Pre-estribillo]
Si el mundo hace ruido y te fallan las fuerzas,
recuerda la legión que te guarda la espalda.
Aquí está tu gente, tu escudo, tu esencia,
dispuestos a todo si el miedo te asalta.

[Estribillo]
Feliz cumple, Ari,
disfruta quién eres.
Mira lo que has construido,
y abraaaaaaaza lo que tienes.
Cumpliendo tus metas, sumando otro año,
hagas lo que hagas... jamáaaaaaaas te soltamos.

[Puente]
¡No dejes de creer que puedes conseguir mucho más!
¡Mira hacia atrás y mira a los lados!
Sabes que hay mucha gente que va detrás de ti,
que cada paso que das, lo damos agarrados.
¡No dejes de creer, que no tienes techo!
¡Que este ejército late directo en tu pecho!

[Estribillo Final]
Feliz cumple, Ari,
disfruta quién eres.
Mira lo que has construido,
y abraaaaaaaza lo que tienes.
Cumpliendo tus metas, sumando otro año...
hagas lo que hagas... jamáaaaaaaas te soltamos.

[Outro]
Porque esta casa que has levantado,
es el mejor rincón donde nos hemos quedado.
Aquí seguimos, Ari... aquí nos quedamos.
Aquí seguimos, Ari... jamás te soltamos.
Aquí seguimos, Ari... aquí nos quedamos.
Aquí seguimos... jamás te soltamos.
(Un último acorde de guitarra, muy suave y largo, dejándolo sonar hasta que se apaga)
Feliz cumple.
`;
  } else if (songKey === 'sito') {
    filename = 'Letra_Sito_Nuestra_Arichu.txt';
    lyricsText = `NUESTRA ARICHU (FELIZ CUMPLEAÑOS)
Dedicatoria especial de: Sito (Dúo Legendario)

[Intro – Hablado]
¡Ey, ey, ey!
¡Que se prepare el chat, que hoy es un día especial!
Que se escuchen los emotes, que comience la celebración…
¡Porque hoy cumple años nuestra Arichu! ❤️🎉

[Verso 1]
Se enciende el directo, ya comienza la misión,
Arichu está en la partida, preparados corazón.
Con el Fortnite en la pantalla y su gente alrededor,
cada tarde se convierte en una fiesta de emoción.

Entre risas y victorias, algún baile inesperado,
con su comunidad entera siempre tiene un escuadrón preparado.
No importa si hay derrota o si toca remontar,
porque estando todos juntos siempre hay ganas de jugar.

[Preestribillo]
Y que lo sepa todo el mundo, que hoy no hay que competir,
hoy las estrellas del directo solo brillan para ti.
Que se llene todo el chat, que no pare la ilusión,
¡que hoy cumple años Arichu y lo celebra el corazón!

[Estribillo]
¡Feliz cumpleaños, Arichu,
hoy el mundo es para ti!
Que te sobren las victorias
y mil sueños por cumplir.

Con tu gente a tu lado,
con Lusimi junto a ti,
y Simba moviendo la cola,
¡qué bonito es verte feliz!

¡Feliz cumpleaños, Arichu,
que no pare la emoción!
Tu comunidad es tu familia,
¡y hoy te canta esta canción!

[Verso 2]
Hay un montón de personas que se quedan por aquí,
que no vienen solo al juego, vienen porque estás tú ahí.
Una comunidad gigante, leal de corazón,
que convierte cada directo en una gran celebración.

Desde el lobby hasta la victoria, desde el meme hasta el baile,
cada día hay mil recuerdos que hacen que nada les falle.
Y aunque cambie la temporada y haya un nuevo aterrizaje,
tu comunidad seguirá acompañándote en el viaje.

[Preestribillo 2]
Que hoy las preocupaciones se vayan a desconectar,
que las velas de tu tarta sean deseos por cumplir.
Que la vida te regale mil motivos para sonreír,
porque todo lo bonito hoy se merece quedar junto a ti.

[Estribillo]
¡Feliz cumpleaños, Arichu,
hoy el mundo es para ti!
Que te sobren las victorias
y mil sueños por cumplir.

Con tu gente a tu lado,
con Lusimi junto a ti,
y Simba moviendo la cola,
¡qué bonito es verte feliz!

¡Feliz cumpleaños, Arichu,
que no pare la emoción!
Tu comunidad es tu familia,
¡y hoy te canta esta canción!

[Puente – Más emotivo]
Y entre tantas aventuras que nos quedan por jugar,
hay momentos que en la vida no se pueden reiniciar.
Son las risas, son las noches, son las ganas de volver,
son las personas que te quieren y que siempre van a estar.

Que Lusimi te acompañe en cada nuevo amanecer,
que Simba llene de alegría cada rincón de tu hogar.
Y que nunca te falten motivos para celebrar,
ni una comunidad entera que te quiera hacer brillar.

¡Emotes arriba! ¡Que se escuche ese chat!
¡Hoy no hay tormenta que nos pueda parar!

[Estribillo final – A lo grande]
¡Feliz cumpleaños, Arichu,
hoy el mundo es para ti!
Que la vida te dé todo
lo que sueñas conseguir.

Con Lusimi a tu lado,
con Simba junto a ti,
y esa gente que te quiere
que hoy se reúne por ti.

¡Feliz cumpleaños, Arichu,
nuestra estrella del directo!
Que haya risas, amor y sueños,
¡y mil años de momentos!

Y si mañana hay otra partida,
allí nos vamos a encontrar,
porque más que una comunidad,
¡somos tu familia digital!

[Outro – Hablado, con música bajando]
De parte de toda tu comunidad,
por las risas, los momentos y todo lo compartido…
Que este nuevo año te traiga felicidad, amor y muchísimas aventuras.

Un abrazo enorme para Lusimi,
un montón de mimos para Simba…
Y para ti, Arichu, todo el cariño del mundo.

¡Feliz cumpleaños! ❤️🎂🎮
Y recuerda: ¡código ARIXU en la tienda de Fortnite!
`;
  } else if (songKey === 'livingbenidorm') {
    filename = 'Letra_LivingBenidorm_Arixu.txt';
    lyricsText = `FELIZ CUMPLEAÑOS, ARIXU
Dedicatoria especial de: LivingBenidorm (@ximoahuir)

[Intro]
¡Ey, Arixu, hoy toca celebrar!
Deja un momento el Fortnite,
¡que te venimos a felicitar!

[Verso 1]
Cada día me conecto,
ya es parte de mi rutina,
a tu stream para verte jugar,
¡y echarme unas risas contigo, Arixu, una vez más!
Con el mando y sin construcción,
buscando otra victoria,
entre partidas y locuras,
vamos sumando nuestra historia.

[Preestribillo]
18 meses ya que estoy suscrito,
y parece que fue ayer,
tantos momentos divertidos
que no se pueden ni contar, ¡qué bien!

[Estribillo]
¡Feliz cumpleaños, Arixu!
Que hoy te salga todo genial,
que consigas mil victorias
y que no falte la felicidad.
¡Feliz cumpleaños, Arixu!
Hoy el chat va a celebrar,
aunque yo escriba poquito,
¡casi siempre estoy detrás!

[Preestribillo]
18 meses de sub compartiendo
aventuras frente a la pantalla,
y aunque no me toquen los ñorteos
aquí tienes a alguien siempre detrás

[Estribillo]
¡Feliz cumpleaños, Imarixu!
Que hoy te salga todo genial,
que consigas mil victorias
y que no falte la felicidad.
¡Feliz cumpleaños, Arixu!
Que la suerte te acompañe al jugar,
que haya risas, buenos momentos
y más streams para disfrutar.

[Puente]
Que si pierdes una partida,
que si toca remontar,
lo importante es estar juntos
y tener motivos para celebrar.

[Estribillo final]
¡Feliz cumpleaños, Imarixu!
Hoy te toca brillar,
que explote de alegría el directo
y que no paremos de celebrar.
Año y medio de aventuras,
mil recuerdos que guardar,
soy de los que hablan poquito,
¡pero casi siempre están!

[Outro]
Así que sopla las velas,
pide un deseo especial,
de parte de uno de tus suscriptores:
¡Mamixu, que cumplas muchos más!
`;
  } else {
    filename = 'Letra_Ferdinang_Felicidades_Ari.txt';
    lyricsText = `FELICIDADES (25 Primaveras de Ariadna)
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
  }

  const blob = new Blob([lyricsText], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};




/* ========================================================
   COMMUNITY DEDICATIONS FILTER TABS HELPER
   ======================================================== */
window.currentDedicationFilter = 'all';
window.filterDedications = function(filterCategory) {
  window.currentDedicationFilter = filterCategory;
  if (window.dedicationsManager) {
    window.dedicationsManager.renderFeed('dedications-feed', filterCategory);
  }
  document.querySelectorAll('.dedication-filter-btn').forEach(btn => {
    const f = btn.getAttribute('data-filter');
    if (f === filterCategory) {
      btn.className = 'dedication-filter-btn px-4 py-2 rounded-xl text-xs font-bold font-hud transition-all shadow-md bg-gradient-to-r from-yellow-400 to-amber-500 text-black border border-yellow-200 scale-105';
    } else {
      btn.className = 'dedication-filter-btn px-4 py-2 rounded-xl text-xs font-bold font-hud transition-all bg-purple-950/60 hover:bg-purple-900 border border-purple-700/60 text-purple-200 hover:text-white';
    }
  });
};
