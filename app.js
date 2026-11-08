/* Irupana — mockup turístico bilingüe (ES/EN). */

const I18N = {
  es: {
    'skip':'Saltar al contenido','brand.aria':'Irupana, inicio','brand.sub':'SUD YUNGAS · BOLIVIA',
    'nav.aria':'Navegación principal','nav.conoce':'Conoce','nav.mapa':'Mapa','nav.atractivos':'Atractivos','nav.rutas':'Rutas','nav.gastronomia':'Gastronomía','nav.planifica':'Planifica','nav.contacto':'Contacto','nav.cta':'Planea tu visita',
    'lang.aria':'Cambiar idioma / Switch language',
    'a11y.menuOpen':'Abrir menú','a11y.menuClose':'Cerrar menú','a11y.scrollDown':'Desplazarse hacia abajo','a11y.toTop':'Volver arriba',
    'hero.imgAlt':'Valle verde de los Yungas bolivianos','hero.eyebrow':'UN DESTINO ENTRE MONTAÑA Y SELVA',
    'hero.title':'Irupana —<br>Yungas con historia,<br><em>naturaleza y sabor</em>',
    'hero.copy':'Descubre el municipio de los valles cálidos de Sud Yungas: ríos, cascadas, cafetales, cultura afroboliviana y aventura.',
    'hero.btn1':'Explorar atractivos','hero.btn2':'Planifica tu viaje','hero.btn3':'📍 Cómo llegar desde mi ubicación',
    'hero.note.loc':'LA PAZ, BOLIVIA','hero.note.coords':'PROVINCIA SUD YUNGAS','hero.side':'VALLES CÁLIDOS DE SUD YUNGAS',
    's01.kicker':'EL LUGAR','s01.eyebrow':'UN ENCUENTRO DE MUNDOS','s01.title':'Altura andina.<br><em>Alma yungueña.</em>',
    's01.intro':'Entre nevados y bosques húmedos, Irupana reúne paisajes que cambian con cada curva y una cultura que se siente en sus plazas, sus caminos y el ritmo de la saya.',
    's01.link':'Conoce antes de venir',
    'story.readMore':'Leer más','story.readLess':'Leer menos',
    'facts.label':'EN CIFRAS','facts.f1':'desde La Paz','facts.f2':'de territorio','facts.f3':'Illimani · altura máxima','facts.f4':'valle cálido','facts.f5':'clima subtropical',
    'source.note':'Referencias de la propuesta: Brañez & Rodríguez (1998); Castillo Apuri & Mamani Ticona (2017); GAM Irupana (2021); Viceministerio de Turismo (2021); Riveros (2024).',
    'atlas.kicker':'GEOGRAFÍA · SUD YUNGAS','atlas.title':'Un territorio entre cumbres y valles.','atlas.note':'Mapa regional de referencia incluido en la propuesta. La señalética y el recorrido didáctico para Irupana siguen pendientes de definición.','atlas.alt':'Mapa regional de los Yungas incluido en la propuesta del sitio',
    'journey.kicker':'UNA GEOGRAFÍA QUE SE SIENTE','journey.eyebrow':'MONTAÑA · BOSQUE · COMUNIDAD','journey.title':'Tres paisajes.<br><em>Un solo viaje.</em>','journey.copy':'Recorre con la mirada los contrastes de Irupana: la profundidad verde de los Yungas, el agua entre las rocas y una cultura que se comparte.','journey.valleyAlt':'Valle verde de los Yungas','journey.waterAlt':'Caída de agua entre rocas y vegetación','journey.sayaAlt':'Integrantes de la comunidad de Chicaloma con tambores','journey.festivalAlt':'Danza tradicional en una celebración local','journey.craftAlt':'Artesanía tallada en pepa de durazno','journey.landscape':'PAISAJE','journey.landscapeTitle':'El valle abre el camino','journey.mapLink':'Explorar mapa regional ↗','journey.nature':'NATURALEZA','journey.waterTitle':'El bosque guarda agua','journey.culture':'CULTURA VIVA','journey.sayaTitle':'La saya reúne voces','journey.celebration':'CELEBRACIÓN','journey.festivalTitle':'Fiesta que sigue viva','journey.craft':'OFICIO','journey.craftTitle':'Una semilla, una historia','journey.discover':'Conocer este lugar ↗',
    's02.kicker':'EXPLORA EL TERRITORIO','s02.eyebrow':'EL DESTINO, A TU MANERA','s02.title':'Un mapa para <em>perderse bien.</em>',
    's02.desc':'Encuentra naturaleza, historia y caminos que conectan cada rincón del municipio.','s02.filtersAria':'Filtrar atractivos del mapa','s02.nearBtn':'⌖ Atractivos cerca de mí',
    'map.loading':'Preparando el mapa…','map.aside.eyebrow':'PUNTOS DE INTERÉS','map.count.one':'sitio','map.count.many':'sitios',
    'map.aside.note':'Explora los puntos de referencia. Las ubicaciones son aproximadas; la señalética y el recorrido didáctico siguen pendientes.',
    'map.routeBtn':'⌖ Cómo llegar desde mi ubicación','map.microNote':'La ubicación solo se solicita cuando tú lo indicas.',
    'cat.all':'Todos',
    's03.kicker':'DESCUBRE IRUPANA','s03.eyebrow':'14 FORMAS DE VIVIR LOS YUNGAS','s03.title':'Pequeños desvíos.<br><em>Grandes historias.</em>',
    's03.link':'Ver todos en el mapa','s03.showMore':'Ver los 14 atractivos ↓','s03.allViewed':'Ya viste todos los atractivos',
    'attraction.cardAria':'Conocer más sobre','attraction.cardCta':'Conocer más','attraction.mapFicha':'Ver ficha',
    'detail.history':'Historia','detail.activities':'Actividades','detail.location':'Dirección / GPS','detail.locationPending':'La propuesta aún no incluye una ubicación precisa para esta ficha. Punto cartográfico por validar.','detail.transport':'Cómo llegar','detail.hours':'Horarios','detail.cost':'Costos',
    'detail.footer':'Información compilada de la propuesta proporcionada.','detail.geoBtn':'⌖ Cómo llegar',
    's04.kicker':'CAMINOS CON SENTIDO','s04.eyebrow':'ELIGE TU PROPIO RITMO','s04.title':'Cuatro rutas.<br><em>Un mismo asombro.</em>',
    's04.desc':'Arma tu recorrido entre cultura viva, paisajes de agua, huellas antiguas y cielos abiertos.',
    'route.label':'RUTA PROPUESTA','route.pending':'La propuesta contempla esta categoría; el recorrido y la señalética están pendientes de definición.','route.viewMap':'Consultar mapa didáctico',
    's05.kicker':'DE LA TIERRA A LA MESA','s05.eyebrow':'SABORES DE LOS YUNGAS','s05.title':'Siéntate. <em>Estás en casa.</em>',
    's05.desc':'Una cocina generosa, hecha de productos locales, recetas familiares y café cultivado bajo sombra.',
    's05.disclaimer':'Rangos de precio incluidos en la propuesta; confirma la disponibilidad antes de viajar.',
    's06.kicker':'ANTES DE SALIR','s06.eyebrow':'LO ESENCIAL, SIN COMPLICACIONES','s06.title':'Tu viaje<br>empieza <em>aquí.</em>',
    's06.desc':'Datos prácticos para que solo tengas que preocuparte de disfrutar el camino.','s06.btn':'⌖ Calcula tu ruta',
    's07.kicker':'HABLEMOS','s07.eyebrow':'¿LISTO PARA VENIR?','s07.title':'Irupana te<br><em>está esperando.</em>','s07.copy':'Déjanos tu consulta y te orientaremos para preparar tu visita.',
    'form.name':'Tu nombre','form.namePh':'¿Cómo te llamas?','form.email':'Correo electrónico','form.emailPh':'tu@correo.com',
    'form.message':'¿En qué podemos ayudarte?','form.messagePh':'Cuéntanos un poco…','form.submit':'Enviar consulta',
    'form.note':'Este formulario es una demostración y no envía datos.','form.feedback':'¡Gracias! Tu consulta quedó registrada en esta demostración.',
    'contact.fb':'Facebook del Gobierno Autónomo Municipal de Irupana','contact.agency':'Agencia de turismo','contact.guides':'Guías de recorrido y asociaciones comunitarias','contact.transport':'Terminal de Buses Irupana · información de transporte','contact.pending':'Enlace oficial pendiente de confirmar',
    'footer.tagline':'Valles cálidos, caminos vivos.<br>Un lugar que se queda contigo.','footer.backTop':'Volver arriba ↑',
    'footer.copy':'© 2026 · Mockup de demostración · Datos de referencia','footer.credit':'Hecho para descubrir Irupana',
    'modal.close':'Cerrar',
    'geo.route.eyebrow':'PLANIFICA EL RECORRIDO','geo.route.title':'Tu camino a Irupana.','geo.near.eyebrow':'CERCA DE TI','geo.near.title':'Encuentra lo que te queda cerca.',
    'geo.consent':'Usaremos tu ubicación solo para calcular la ruta hasta Irupana. No la almacenamos. La ubicación solo se solicita si eliges continuar.',
    'geo.continue':'Continuar','geo.cancel':'Cancelar','geo.waiting':'Esperando permiso de ubicación…',
    'geo.manual.label':'Punto de partida','geo.manual.btn':'Calcular ruta',
    'geo.manual.default':'También puedes elegir un punto de partida para calcular una distancia aproximada.',
    'geo.error':'No pudimos obtener tu ubicación. Puedes escribir tu punto de partida para calcular la ruta.',
    'geo.noGeo':'Este navegador no permite obtener la ubicación.',
    'geo.km':'km en línea recta','geo.estimated':'estimados',
    'geo.result.note':'Estimación simple a 60 km/h; no considera el trazado real de carretera.',
    'geo.result.near':'Los 3 atractivos más cercanos (referencia):',
    'geo.gmaps':'Google Maps ↗','geo.waze':'Waze ↗'
  },
  en: {
    'skip':'Skip to content','brand.aria':'Irupana, home','brand.sub':'SOUTH YUNGAS · BOLIVIA',
    'nav.aria':'Main navigation','nav.conoce':'Discover','nav.mapa':'Map','nav.atractivos':'Attractions','nav.rutas':'Routes','nav.gastronomia':'Food','nav.planifica':'Plan','nav.contacto':'Contact','nav.cta':'Plan your visit',
    'lang.aria':'Switch language / Cambiar idioma',
    'a11y.menuOpen':'Open menu','a11y.menuClose':'Close menu','a11y.scrollDown':'Scroll down','a11y.toTop':'Back to top',
    'hero.imgAlt':'Green valley landscape of the Bolivian Yungas','hero.eyebrow':'A DESTINATION BETWEEN MOUNTAIN AND JUNGLE',
    'hero.title':'Irupana —<br>Yungas with history,<br><em>nature and flavor</em>',
    'hero.copy':'Discover the warm valleys of Sud Yungas: rivers, waterfalls, coffee farms, Afro-Bolivian culture and adventure.',
    'hero.btn1':'Explore attractions','hero.btn2':'Plan your trip','hero.btn3':'📍 How to get here from my location',
    'hero.note.loc':'LA PAZ, BOLIVIA','hero.note.coords':'SUD YUNGAS PROVINCE','hero.side':'WARM VALLEYS OF SOUTH YUNGAS',
    's01.kicker':'THE PLACE','s01.eyebrow':'A MEETING OF WORLDS','s01.title':'Andean heights.<br><em>Yungas soul.</em>',
    's01.intro':'Between snowy peaks and humid forests, Irupana brings together landscapes that change with every bend and a culture felt in its squares, its paths and the rhythm of the saya.',
    's01.link':'Know before you go',
    'story.readMore':'Read more','story.readLess':'Read less',
    'facts.label':'BY THE NUMBERS','facts.f1':'from La Paz','facts.f2':'of territory','facts.f3':'Illimani · highest point','facts.f4':'warm valley','facts.f5':'subtropical climate',
    'source.note':'References listed in the proposal: Brañez & Rodríguez (1998); Castillo Apuri & Mamani Ticona (2017); GAM Irupana (2021); Viceministerio de Turismo (2021); Riveros (2024).',
    'atlas.kicker':'GEOGRAPHY · SUD YUNGAS','atlas.title':'A territory between peaks and valleys.','atlas.note':'Regional reference map included in the proposal. Signage and the didactic route for Irupana still need to be defined.','atlas.alt':'Regional map of the Yungas included in the website proposal',
    'journey.kicker':'A LANDSCAPE YOU CAN FEEL','journey.eyebrow':'MOUNTAIN · FOREST · COMMUNITY','journey.title':'Three landscapes.<br><em>One journey.</em>','journey.copy':'See the contrasts of Irupana: the deep green of the Yungas, water among the rocks and a culture shared with visitors.','journey.valleyAlt':'Green valley of the Yungas','journey.waterAlt':'Waterfall among rocks and vegetation','journey.sayaAlt':'Members of the Chicaloma community with drums','journey.festivalAlt':'Traditional dance at a local celebration','journey.craftAlt':'Craft carved from a peach pit','journey.landscape':'LANDSCAPE','journey.landscapeTitle':'The valley opens the way','journey.mapLink':'Explore the regional map ↗','journey.nature':'NATURE','journey.waterTitle':'The forest holds water','journey.culture':'LIVING CULTURE','journey.sayaTitle':'Saya brings voices together','journey.celebration':'CELEBRATION','journey.festivalTitle':'A festival still alive','journey.craft':'CRAFT','journey.craftTitle':'A seed, a story','journey.discover':'Discover this place ↗',
    's02.kicker':'EXPLORE THE TERRITORY','s02.eyebrow':'THE DESTINATION, YOUR WAY','s02.title':'A map to <em>get lost, well.</em>',
    's02.desc':'Find nature, history and paths connecting every corner of the municipality.','s02.filtersAria':'Filter map attractions','s02.nearBtn':'⌖ Attractions near me',
    'map.loading':'Preparing the map…','map.aside.eyebrow':'POINTS OF INTEREST','map.count.one':'site','map.count.many':'sites',
    'map.aside.note':'Explore the reference points. Locations are approximate; signage and the didactic route are still pending.',
    'map.routeBtn':'⌖ How to get here from my location','map.microNote':'Location is only requested when you ask for it.',
    'cat.all':'All',
    's03.kicker':'DISCOVER IRUPANA','s03.eyebrow':'14 WAYS TO LIVE THE YUNGAS','s03.title':'Small detours.<br><em>Great stories.</em>',
    's03.link':'See all on the map','s03.showMore':'Show 14 attractions ↓','s03.allViewed':'You have seen all attractions',
    'attraction.cardAria':'Learn more about','attraction.cardCta':'Learn more','attraction.mapFicha':'View details',
    'detail.history':'History','detail.activities':'Activities','detail.location':'Address / GPS','detail.locationPending':'The proposal does not yet include a precise location for this site. Map point to be verified.','detail.transport':'Getting there','detail.hours':'Hours','detail.cost':'Costs',
    'detail.footer':'Information compiled from the proposal provided.','detail.geoBtn':'⌖ Get directions',
    's04.kicker':'PATHS WITH MEANING','s04.eyebrow':'CHOOSE YOUR OWN PACE','s04.title':'Four routes.<br><em>One same wonder.</em>',
    's04.desc':'Build your itinerary among living culture, water landscapes, ancient footprints and open skies.',
    'route.label':'PROPOSED ROUTE','route.pending':'This route category appears in the proposal; the itinerary and signage still need to be defined.','route.viewMap':'View didactic map',
    's05.kicker':'FROM EARTH TO TABLE','s05.eyebrow':'FLAVORS OF THE YUNGAS','s05.title':'Take a seat. <em>You are home.</em>',
    's05.desc':'A generous cuisine made from local produce, family recipes and shade-grown coffee.',
    's05.disclaimer':'Price ranges listed in the proposal; confirm availability before your visit.',
    's06.kicker':'BEFORE YOU LEAVE','s06.eyebrow':'THE ESSENTIALS, SIMPLIFIED','s06.title':'Your trip<br>starts <em>here.</em>',
    's06.desc':'Practical details so you only have to worry about enjoying the journey.','s06.btn':'⌖ Calculate your route',
    's07.kicker':'LET\'S TALK','s07.eyebrow':'READY TO COME?','s07.title':'Irupana is<br><em>waiting for you.</em>','s07.copy':'Leave us your inquiry and we will help you prepare your visit.',
    'form.name':'Your name','form.namePh':'What is your name?','form.email':'Email address','form.emailPh':'you@email.com',
    'form.message':'How can we help you?','form.messagePh':'Tell us a bit…','form.submit':'Send inquiry',
    'form.note':'This form is a demo and does not send data.','form.feedback':'Thank you! Your query was recorded in this demo.',
    'contact.fb':'Facebook of the Irupana Municipal Government','contact.agency':'Tourism agency','contact.guides':'Local tour guides and community associations','contact.transport':'Irupana Bus Terminal · transport information','contact.pending':'Official channel link to be confirmed',
    'footer.tagline':'Warm valleys, living paths.<br>A place that stays with you.','footer.backTop':'Back to top ↑',
    'footer.copy':'© 2026 · Demo mockup · Reference data','footer.credit':'Made to discover Irupana',
    'modal.close':'Close',
    'geo.route.eyebrow':'PLAN YOUR ROUTE','geo.route.title':'Your way to Irupana.','geo.near.eyebrow':'NEAR YOU','geo.near.title':'Find what is close to you.',
    'geo.consent':'We will use your location only to calculate the route to Irupana. We do not store it. Location is only requested if you choose to continue.',
    'geo.continue':'Continue','geo.cancel':'Cancel','geo.waiting':'Waiting for location permission…',
    'geo.manual.label':'Starting point','geo.manual.btn':'Calculate route',
    'geo.manual.default':'You can also choose a starting point to calculate an approximate distance.',
    'geo.error':'We could not get your location. You can type your starting point to calculate the route.',
    'geo.noGeo':'This browser does not allow location access.',
    'geo.km':'km as the crow flies','geo.estimated':'estimated',
    'geo.result.note':'Simple estimate at 60 km/h; it does not consider the real road layout.',
    'geo.result.near':'The 3 nearest attractions (reference):',
    'geo.gmaps':'Google Maps ↗','geo.waze':'Waze ↗'
  }
};

let lang = 'es';
try { lang = localStorage.getItem('irupana-lang') || 'es'; } catch (_) { /* El idioma sigue funcionando aunque el navegador bloquee almacenamiento local. */ }
const t = (key) => (I18N[lang] && I18N[lang][key] !== undefined) ? I18N[lang][key] : key;
const localized = (obj) => (obj && typeof obj === 'object' && 'es' in obj) ? obj[lang] : obj;

// [FICTICIO] Coordenadas de referencia del prototipo; validar con cartografía turística oficial.
const center = [-16.4667, -67.4667];
const categories = { Cultural:'#c0392b', Natural:'#3fa36b', Arqueológico:'#805738', Aventura:'#d98425', Gastronomía:'#e0ac35' };
const categoryLabels = {
  Cultural:{es:'Cultural',en:'Cultural'}, Natural:{es:'Natural',en:'Natural'}, Arqueológico:{es:'Arqueológico',en:'Archaeological'},
  Aventura:{es:'Aventura',en:'Adventure'}, Gastronomía:{es:'Gastronomía',en:'Gastronomy'}
};
const photos = {
  village:'assets/villa-de-lanza.jpeg', map:'assets/mapa-regional-yungas.jpeg', forest:'assets/bosque-montano-yungas.jpeg', valley:'assets/valle-yungas.jpeg',
  sayaScene:'assets/saya-folklore.jpeg', festivalScene:'assets/fiesta-tradicional.jpeg', fruit:'assets/fruta-mercado.jpeg', craft:'assets/artesania-pepas-durazno.jpeg',
  ceibos:'assets/avenida-ceibos.jpeg', churiaca:'assets/area-verde-churiaca.jpeg', river:'assets/rios-solacama-planta.jpeg', trail:'assets/sendero-victorio-lanza.jpeg',
  waterfall:'assets/cascada-agua-rica.jpeg', plazuela:'assets/poblado-la-plazuela.jpeg', culture:'assets/saya-chicaloma.jpeg', christ:'assets/cristo-werner-kunzel.jpeg',
  arch:'assets/arco-virgen-dolorosa.jpeg', ruins:'assets/pasto-grande.jpeg', bridge:'assets/puente-historico.jpeg', paraglide:'assets/parapente-yanata.jpeg',
  festival:'assets/festividad-patronal.jpeg', locro:'assets/sopa-locro.jpeg', wallake:'assets/sopa-wallake.jpeg', hen:'assets/gallina-criolla.jpeg',
  campestre:'assets/plato-campestre.jpeg', familyMeal:'assets/menu-familiar.jpeg', coffee:'assets/cafe-irupana.jpeg'
};
const img = (id) => id;

const story = [
  {icon:'⌂',photo:photos.ruins,title:{es:'Historia',en:'History'},short:{es:'De las terrazas prehispánicas a las rutas de la independencia, Irupana guarda siglos de memoria.',en:'From pre-Hispanic terraces to the routes of independence, Irupana holds centuries of memory.'},full:{es:'Tiwanaku e Inca dejaron terrazas agrícolas (tacanas) que aún se aprecian en Pasto Grande. Fundada durante la Colonia el 25 de julio de 1746, Irupana fue refugio estratégico de los patriotas de la Republiqueta de Ayopaya. Hoy conviven la memoria andina y colonial con la cultura afroboliviana de Chicaloma y su saya.',en:'Tiwanaku and Inca left agricultural terraces (tacanas) still visible in Pasto Grande. Founded during the Colonial era on July 25, 1746, Irupana was a strategic refuge for the patriots of the Ayopaya Republic. Today, Andean and colonial memory coexist with the Afro-Bolivian culture of Chicaloma and its saya.'}},
  {icon:'⌖',photo:photos.village,title:{es:'Ubicación',en:'Location'},short:{es:'A 112 km de La Paz, el municipio recorre desde cumbres cordilleranas hasta valles subtropicales.',en:'112 km from La Paz, the municipality stretches from Andean peaks to subtropical valleys.'},full:{es:'Irupana es la Segunda Sección de la Provincia Sud Yungas, en el departamento de La Paz. Su territorio de 1.365 km² va desde las cumbres del Illimani y Mururata, hasta los valles cálidos del río. La altitud varía aproximadamente entre 6.410 y 751 m s. n. m.',en:'Irupana is the Second Section of the Sud Yungas Province, in the La Paz department. Its 1,365 km² territory ranges from the peaks of Illimani and Mururata to the warm river valleys. Altitude varies roughly between 6,410 and 751 m a.s.l.'}},
  {icon:'❋',photo:photos.forest,title:{es:'Naturaleza',en:'Nature'},short:{es:'Cañones, ríos y bosques montanos forman un paisaje diverso entre montaña y selva.',en:'Canyons, rivers and montane forests form a diverse landscape between mountain and jungle.'},full:{es:'La topografía se compone de cañones fluviales, laderas escarpadas y terrazas agrícolas intermontanas. Los ríos Solacama y La Planta, cascadas y pozas naturales atraviesan bosques montanos pluviales con orquídeas, helechos arborescentes y fauna silvestre como el gallito de la roca (tunqui).',en:'The topography comprises river canyons, steep slopes and intermontane agricultural terraces. The Solacama and La Planta rivers, waterfalls and natural pools cross montane rainforests with orchids, tree ferns and wildlife such as the Andean cock-of-the-rock (tunqui).'}},
  {icon:'♫',photo:photos.sayaScene,title:{es:'Cultura viva',en:'Living culture'},short:{es:'La herencia aymara, mestiza y afroboliviana se expresa en fiestas, música y artesanía.',en:'Aymara, mestizo and Afro-Bolivian heritage is expressed in festivals, music and crafts.'},full:{es:'Chicaloma es un centro histórico de la cultura afroboliviana y de la saya, con tambores artesanales y coplas rimadas. Las fiestas de la Virgen de las Nieves (5 de agosto) y del Apóstol Santiago (24 de julio) reúnen danzas como los Loco Palla Palla. También destacan los rituales del Mara Ta’ka y el tallado de pepas de durazno.',en:'Chicaloma is a historic center of Afro-Bolivian culture and the saya, with handmade drums and rhymed couplets. The festivals of the Virgen de las Nieves (August 5) and the Apostle Santiago (July 24) bring together dances such as the Loco Palla Palla. The Mara Ta\'ka rituals and peach-pit carving also stand out.'}}
];

// [FICTICIO] Las coordenadas asociadas a las fichas son pines visuales aproximados y deben validarse.
const attractions = [
  {id:1,name:{es:'Avenida de los Ceibos de Irupana',en:'Avenue of the Ceibos of Irupana'},category:'Cultural',photo:photos.ceibos, brief:{es:'Un corredor natural donde los ceibos visten el camino con rojos y amarillos durante la floración.',en:'A natural corridor where ceibo trees dress the path in reds and yellows during their blooming season.'}, history:{es:'Este corredor forma parte del paisaje tradicional de acceso al centro poblado desde la fundación y consolidación urbana, y es un símbolo de la biodiversidad regional.',en:'This corridor has been part of the traditional landscape leading to the town center since its founding and urban consolidation, and is a visual symbol of the region\'s biodiversity.'}, activities:{es:'Fotografía paisajística, caminatas recreativas e interpretación ambiental.',en:'Landscape photography, recreational walks and environmental interpretation.'}, coords:[-16.4700,-67.4792],transport:{es:'Caminata desde el centro urbano o auto particular.',en:'Walk from the town center or by private car.'}, hours:{es:'Libre acceso en cualquier momento del día.',en:'Free access at any time of day.'},cost:{es:'Acceso gratuito.',en:'Free access.'}},
  {id:2,name:{es:'Área Verde de Churiaca',en:'Churiaca Green Area'},category:'Natural',photo:photos.churiaca, brief:{es:'Un respiro verde de bosque regenerado y espacios abiertos cerca del centro urbano.',en:'A green breath of regenerated forest and open spaces near the urban center.'}, history:{es:'Zona tradicional de descanso y esparcimiento que ha evolucionado junto con el crecimiento periurbano de Villa de Lanza.',en:'A traditional rest and recreation area that has evolved alongside the peri-urban growth of Villa de Lanza, preserving green spots of local ecological value.'}, activities:{es:'Recreación al aire libre, deporte ligero y descanso.',en:'Outdoor recreation, light sports and relaxation.'}, coords:[-16.4639,-67.4861],transport:{es:'Acceso peatonal o auto particular desde la capital municipal.',en:'Walking access or by private car from the municipal capital.'}, hours:{es:'Abierto todo el día.',en:'Open all day.'},cost:{es:'Acceso gratuito.',en:'Free access.'}},
  {id:3,name:{es:'Ríos Solacama y La Planta',en:'Solacama and La Planta Rivers'},category:'Natural',photo:photos.river, brief:{es:'Aguas cristalinas, cascadas y pozas naturales rodeadas de vegetación yungueña.',en:'Crystal-clear waters, waterfalls and natural pools surrounded by Yungas vegetation.'}, history:{es:'Ecosistemas hídricos ancestrales vinculados al desarrollo de haciendas y rutas de Chicaloma y sus alrededores.',en:'Ancestral water ecosystems linked to the development of haciendas and historic routes in Chicaloma and surrounding areas.'}, activities:{es:'Ecoturismo, natación recreativa, turismo de naturaleza y fotografía.',en:'Ecotourism, recreational swimming, nature tourism and photography.'}, coords:[-16.4847,-67.4583],transport:{es:'Auto, movilidad 4x4 o tour guiado por caminos vecinales desde Chicaloma o Irupana.',en:'Car, 4x4 or guided tour along rural roads from Chicaloma or Irupana.'}, hours:{es:'Acceso diurno; se recomienda visitar con luz solar.',en:'Daytime access; visiting with sunlight is recommended.'},cost:{es:'Acceso gratuito.',en:'Free access.'}},
  {id:4,name:{es:'Sendero Ecológico de Victorio Lanza (Llojeta)',en:'Victorio Lanza Ecological Trail (Llojeta)'},category:'Aventura',photo:photos.trail, brief:{es:'Caminos de herradura ancestrales entre bosques secundarios y zonas de transición ecológica.',en:'Ancestral bridle paths through secondary forests and ecological transition zones.'}, history:{es:'Antiguas rutas peatonales de comunicación y comercio entre pisos ecológicos y comunidades yungueñas.',en:'Ancient pedestrian routes for communication and trade between ecological floors and Yungas communities.'}, activities:{es:'Senderismo, ecoturismo e interpretación de flora y fauna.',en:'Hiking (trekking), ecotourism and flora and fauna interpretation.'}, coords:[-16.4556,-67.4944],transport:{es:'Caminata guiada o vehículo adaptado hasta el inicio del sendero.',en:'Guided walk or adapted vehicle to the trailhead.'}, hours:{es:'Acceso libre; recomendado durante el día.',en:'Free access; daytime recommended.'},cost:{es:'Gratuito.',en:'Free.'}},
  {id:5,name:{es:'Cascadas de Agua Rica y Túnel de los Murciélagos',en:'Agua Rica Waterfalls and Bat Tunnel'},category:'Aventura',categoryLabel:{es:'Aventura · Natural',en:'Adventure · Natural'},secondaryCategory:'Natural',photo:photos.waterfall, brief:{es:'Caídas de agua y galerías rocosas en un entorno de bosque montano y biodiversidad.',en:'Waterfalls and rocky galleries in a montane forest setting rich in biodiversity.'}, history:{es:'Espacios naturales conocidos por las leyendas locales y explorados tradicionalmente por lugareños.',en:'Natural spaces known through local legends and traditionally explored by locals.'}, activities:{es:'Trekking, espeleología recreativa, aventura y observación de biodiversidad.',en:'Trekking, recreational caving, adventure and biodiversity observation.'}, coords:[-16.5028,-67.4486],transport:{es:'Caminata por senderos locales con asistencia de un guía comunitario.',en:'Walk along local trails with a community guide.'}, hours:{es:'Acceso diurno.',en:'Daytime access.'},cost:{es:'Gratuito.',en:'Free.'}},
  {id:6,name:{es:'Poblado y Cañaverales de La Plazuela',en:'La Plazuela Village and Sugarcane Fields'},category:'Cultural',photo:photos.plazuela, brief:{es:'Plantaciones de caña, mangales y arquitectura rural tradicional del cantón.',en:'Sugarcane plantations, mango groves and traditional rural architecture of the canton.'}, history:{es:'Testimonio del pasado agrícola e industrial azucarero de los valles de Sud Yungas.',en:'A living testimony to the agricultural and sugar-industry past of the warm valleys of Sud Yungas.'}, activities:{es:'Agroturismo, rutas de la caña, turismo vivencial y fotografía rural.',en:'Agrotourism, sugarcane routes, experiential agricultural tourism and rural photography.'}, coords:[-16.5167,-67.4278],transport:{es:'Bus local, trufi o auto particular desde el centro municipal.',en:'Local bus, shared taxi or private car from the municipal center.'}, hours:{es:'Áreas públicas abiertas; coordina con anticipación las visitas a propiedades privadas.',en:'Public areas open; coordinate visits to private properties in advance.'},cost:{es:'Acceso libre a áreas públicas.',en:'Free access to public areas.'}},
  {id:7,name:{es:'Artesanía en Pepas de Durazno',en:'Peach Pit Crafts'},category:'Cultural',photo:photos.craft, brief:{es:'Semillas de durazno talladas con detalle para crear piezas decorativas y funcionales.',en:'Peach pits carved in detail to create decorative and functional pieces.'}, history:{es:'Tradición artesanal heredada entre generaciones que refleja el ingenio y la identidad irupanense.',en:'A craft tradition passed down through generations, reflecting the ingenuity and identity of Irupana artisans.'}, activities:{es:'Observar el tallado, conversar con artesanos y adquirir recuerdos.',en:'Watch the carving process, talk with artisans and buy souvenirs.'}, coords:[-16.4750,-67.4722],transport:{es:'A pie por ferias, mercados y tiendas del centro urbano.',en:'On foot through fairs, markets and shops in the town center.'}, hours:{es:'Horario comercial habitual en ferias y mercados.',en:'Usual business hours at fairs and markets.'},cost:{es:'Variable según la pieza.',en:'Varies by piece.'}},
  {id:8,name:{es:'Comunidad Afroboliviana y Saya de Chicaloma',en:'Afro-Bolivian Community and Saya of Chicaloma'},category:'Cultural',photo:photos.culture, brief:{es:'La memoria y el presente afroboliviano viven en la música, la danza y la identidad de Chicaloma.',en:'Afro-Bolivian memory and present live in the music, dance and identity of Chicaloma.'}, history:{es:'La comunidad preservó su cohesión cultural y mantiene viva la saya con tambores artesanales: gancha, requinto y asentador.',en:'The community preserved its cultural cohesion and keeps the saya alive with handmade drums: gancha, requinto and asentador.'}, activities:{es:'Saya en vivo, talleres, convivencia comunitaria y turismo vivencial.',en:'Live saya, workshops, community gathering and experiential tourism.'}, coords:[-16.4444,-67.5042],transport:{es:'Bus local o trufi desde Villa de Lanza (aprox. 45 min a 1 hora).',en:'Local bus or shared taxi from Villa de Lanza (approx. 45 min to 1 hour).'}, hours:{es:'Visitas diurnas; presentaciones especiales con coordinación previa.',en:'Daytime visits; special performances with prior coordination.'},cost:{es:'Acceso libre; contraprestación local por presentaciones.',en:'Free access; local contribution for performances.'}},
  {id:9,name:{es:'Cristo de Werner Kunzel',en:'Christ of Werner Kunzel'},category:'Cultural',photo:photos.christ, brief:{es:'Monumento religioso y mirador panorámico que sirve de punto de referencia local.',en:'A religious monument and panoramic viewpoint that serves as a local landmark.'}, history:{es:'Obra erigida en honor a figuras de la historia local y religiosa; forma parte del patrimonio simbólico de Irupana.',en:'A work erected in honor of figures from local and religious history; part of Irupana\'s symbolic heritage.'}, activities:{es:'Visita cultural, fotografía panorámica y caminatas devocionales.',en:'Cultural visit, panoramic photography and devotional walks.'}, coords:[-16.4667,-67.4833],transport:{es:'Caminata corta o auto particular por rutas secundarias.',en:'Short walk or private car along secondary roads.'}, hours:{es:'Acceso libre durante el día.',en:'Free access during the day.'},cost:{es:'Gratuito.',en:'Free.'}},
  {id:10,name:{es:'Arco de la Virgen Dolorosa y Monumentos Históricos',en:'Arch of the Virgen Dolorosa and Historic Monuments'},category:'Cultural',photo:photos.arch, brief:{es:'Arcos patrimoniales y monumentos del casco antiguo que evocan otras épocas.',en:'Heritage arches and monuments of the old town that evoke other eras.'}, history:{es:'Construcciones coloniales y republicanas que testimonian el trazo urbano tradicional y las celebraciones locales.',en:'Colonial and republican constructions that testify to the traditional urban layout and local celebrations.'}, activities:{es:'Recorridos urbanos, fotografía e interpretación histórica.',en:'Urban tours, photography and historical interpretation.'}, coords:[-16.4694,-67.4778],transport:{es:'Acceso peatonal dentro del casco urbano de Villa de Lanza.',en:'Walking access within the urban center of Villa de Lanza.'}, hours:{es:'Exteriores de libre acceso.',en:'Outdoor areas freely accessible.'},cost:{es:'Gratuito.',en:'Free.'}},
  {id:11,name:{es:'Área Arqueológica de Pasto Grande',en:'Pasto Grande Archaeological Area'},category:'Arqueológico',photo:photos.ruins, brief:{es:'Andenería agrícola prehispánica, cimientos de piedra y estructuras habitacionales.',en:'Pre-Hispanic agricultural terraces, stone foundations and residential structures.'}, history:{es:'Testimonio de la tecnología agrícola inca-aymara para aprovechar las laderas y cultivar en altura.',en:'Testimony to Inca-Aymara agricultural technology for cultivating on slopes at high altitude.'}, activities:{es:'Trekking arqueológico, fotografía y vivencia del Mara Ta’ka.',en:'Archaeological trekking, photography and the Mara Ta\'ka experience.'}, coords:[-16.5556,-67.4028],transport:{es:'Vehículo 4x4 y caminata por senderos desde el sur del municipio.',en:'4x4 vehicle and walk along trails from the south of the municipality.'}, hours:{es:'Acceso libre durante el día.',en:'Free access during the day.'},cost:{es:'Gratuito; se recomienda apoyo de guías comunitarios.',en:'Free; community guides recommended.'}},
  {id:12,name:{es:'Puente Histórico de La Plazuela y Haciendas',en:'La Plazuela Historic Bridge and Haciendas'},category:'Arqueológico',photo:photos.bridge, brief:{es:'Ingeniería antigua, casonas e instalaciones de hacienda en un paisaje rural.',en:'Ancient engineering, manor houses and hacienda facilities in a rural landscape.'}, history:{es:'Infraestructura productiva y caminos de herradura que facilitaron el comercio agrícola en los Yungas.',en:'Productive infrastructure and bridle paths that facilitated agricultural trade in the Yungas.'}, activities:{es:'Circuitos de arquitectura histórica, ingeniería tradicional y fotografía documental.',en:'Historic architecture circuits, traditional engineering and documentary photography.'}, coords:[-16.5208,-67.4222],transport:{es:'Auto particular o transporte mixto por caminos intercantonales.',en:'Private car or mixed transport along inter-cantonal roads.'}, hours:{es:'Acceso exterior libre.',en:'Exterior access free.'},cost:{es:'Gratuito.',en:'Free.'}},
  {id:13,name:{es:'Aventura en Parapente (Mirador Yanata)',en:'Paragliding Adventure (Yanata Viewpoint)'},category:'Aventura',photo:photos.paraglide, brief:{es:'Un mirador elevado con vistas abiertas y condiciones para deportes aéreos.',en:'An elevated viewpoint with open views and conditions for aerial sports.'}, history:{es:'La actividad impulsó eventos como Irupanapente y posicionó al municipio entre los destinos de aventura.',en:'The activity drove events like Irupanapente and positioned the municipality among adventure destinations.'}, activities:{es:'Vuelos biplaza, parapente profesional, aventura y fotografía aérea.',en:'Tandem flights, professional paragliding, adventure and aerial photography.'}, coords:[-16.4944,-67.5000],transport:{es:'Auto o transporte contratado por caminos de tierra.',en:'Car or hired transport along dirt roads.'}, hours:{es:'Sujeto al clima; generalmente por la mañana y al mediodía.',en:'Weather-dependent; usually morning and midday.'},cost:{es:'Mirador gratuito; vuelos con tarifa del operador.',en:'Viewpoint free; flights at operator rate.'}},
  {id:14,name:{es:'Festividad de la Virgen de las Nieves y Apóstol Santiago',en:'Feast of the Virgen de las Nieves and Apostle Santiago'},category:'Cultural',photo:photos.festival, brief:{es:'Fe, procesiones y entradas folklóricas en las fiestas patronales de Irupana.',en:'Faith, processions and folkloric entries at Irupana\'s patron saint festivals.'}, history:{es:'Celebración centenaria donde convergen devoción, danzas autóctonas como los Loco Palla Palla y banquete festivo.',en:'A centuries-old celebration where devotion, native dances such as the Loco Palla Palla and festive banquets converge.'}, activities:{es:'Procesiones, danzas tradicionales y gastronomía festiva.',en:'Processions, traditional dances and festive gastronomy.'}, coords:center,transport:{es:'Bus o miniván desde Terminal Minas; se recomienda reservar en fechas festivas.',en:'Bus or minivan from Terminal Minas; booking recommended on festival dates.'}, hours:{es:'24 de julio (Santiago) y 5 de agosto (Virgen de las Nieves).',en:'July 24 (Santiago) and August 5 (Virgen de las Nieves).'},cost:{es:'Acceso libre a calles, plazas y procesiones.',en:'Free access to streets, squares and processions.'}}
];

const routes = [
  {name:{es:'Cultural',en:'Cultural'},icon:'♫',color:'#c0392b'},
  {name:{es:'Natural y paisajística',en:'Natural and scenic'},icon:'❋',color:'#3fa36b'},
  {name:{es:'Arqueológica',en:'Archaeological'},icon:'⊞',color:'#805738'},
  {name:{es:'Aventura',en:'Adventure'},icon:'➤',color:'#d98425'}
];

const foods = [
  {tag:{es:'MERCADO MUNICIPAL',en:'MUNICIPAL MARKET'},title:{es:'Comedores populares',en:'Popular eateries'},text:{es:'Locro de maíz o yuca con carnes y condimentos locales. Wallake de pescado de agua dulce con papa, chuño, ají amarillo y wacataya.',en:'Locro with corn or cassava, meat and local seasonings. Wallake freshwater fish soup with potato, chuño, yellow chili and wacataya.'},price:{es:'12–25 BOB · plato',en:'12–25 BOB · dish'},images:[photos.locro,photos.wallake,photos.fruit]},
  {tag:{es:'COCINA DE CAMPO',en:'COUNTRY KITCHEN'},title:{es:'Restaurantes campestres',en:'Country restaurants'},text:{es:'Gallina criolla, ají de gallina o fideo uchu con yuca, plátano cocido o papas nativas.',en:'Free-range hen, ají de gallina or fideo uchu with cassava, cooked plantain or native potatoes.'},price:{es:'30–60 BOB · plato',en:'30–60 BOB · dish'},images:[photos.hen,photos.campestre]},
  {tag:{es:'SABOR DE CASA',en:'HOME FLAVOR'},title:{es:'Pensiones familiares',en:'Family guesthouses'},text:{es:'Almuerzos caseros con productos de la zona. Café orgánico cultivado bajo sombra y jawitas calientes con queso criollo.',en:'Home-style lunches with local produce. Shade-grown organic coffee and warm jawitas filled with criollo cheese.'},price:{es:'15–30 BOB · menú',en:'15–30 BOB · menu'},images:[photos.familyMeal,photos.coffee]}
];

const planItems = [
  {title:{es:'Cómo llegar',en:'How to get there'},body:{es:'<p><strong>Ruta troncal · La Paz – Unduavi – Chulumani – Irupana.</strong> Desde la Terminal Minasa, en Villa Fátima, se asciende por carretera asfaltada hasta La Cumbre (aprox. 4.200 m s. n. m.) y se desciende a Unduavi. Luego se continúa por ripio y empedrado por Puente Villa y Chulumani hasta el desvío a Irupana.</p><p><strong>Ruta sur · Pariguaya – Pasto Grande.</strong> Alternativa por Lambate y Pariguaya, vinculada con caminos prehispánicos; la propuesta la recomienda para recorridos 4x4 y trekking.</p><p><strong>Conexión yungueña · Chicaloma – Laza.</strong> Vías secundarias y caminos de tierra enlazan comunidades productoras y el casco urbano.</p>',en:'<p><strong>Main route · La Paz – Unduavi – Chulumani – Irupana.</strong> From Terminal Minasa in Villa Fátima, the paved road climbs to La Cumbre (about 4,200 m a.s.l.) and descends to Unduavi. Continue on gravel and cobblestone through Puente Villa and Chulumani to the Irupana turnoff.</p><p><strong>South route · Pariguaya – Pasto Grande.</strong> An alternative via Lambate and Pariguaya, linked to pre-Hispanic paths; the proposal recommends 4x4 vehicles and trekking.</p><p><strong>Yungas connection · Chicaloma – Laza.</strong> Secondary roads and dirt tracks connect farming communities with the town center.</p>'}},
  {title:{es:'Transporte',en:'Transport'},body:{es:'<p>Minivanes y buses interprovinciales salen diariamente desde la Terminal Minasa de La Paz. El viaje toma aproximadamente 4–5 horas y el pasaje indicado en la propuesta es de <strong>25–35 BOB</strong>.</p><p>Trufis y vehículos 4x4 conectan Villa de Lanza con Chicaloma, La Plazuela y Victorio Lanza. En época de lluvias (diciembre a marzo), consulta el estado de los caminos secundarios.</p>',en:'<p>Minivans and interprovincial buses leave daily from Terminal Minasa in La Paz. The trip takes about 4–5 hours and the fare listed in the proposal is <strong>25–35 BOB</strong>.</p><p>Shared taxis and 4x4 vehicles connect Villa de Lanza with Chicaloma, La Plazuela and Victorio Lanza. During the rainy season (December to March), check the condition of secondary roads.</p>'}},
  {title:{es:'Dónde hospedarse',en:'Where to stay'},body:{es:'<p><strong>Hotel / Residencial Los Ceibos</strong> · habitaciones básicas, agua caliente y ubicación céntrica. <strong>50–100 BOB/noche.</strong></p><p><strong>San Silvestre Casa Grande</strong> · entorno campestre y atención familiar. <strong>80–150 BOB/noche.</strong></p><p><strong>Alojamientos locales</strong> · servicios esenciales en Villa de Lanza. <strong>30–60 BOB/noche.</strong></p><small>Rangos indicados en la propuesta; verifica disponibilidad local.</small>',en:'<p><strong>Hotel / Residencial Los Ceibos</strong> · basic rooms, hot water and central location. <strong>50–100 BOB/night.</strong></p><p><strong>San Silvestre Casa Grande</strong> · countryside setting and family service. <strong>80–150 BOB/night.</strong></p><p><strong>Local lodgings</strong> · essential services in Villa de Lanza. <strong>30–60 BOB/night.</strong></p><small>Ranges listed in the proposal; check local availability.</small>'}},
  {title:{es:'Restaurantes en hospedajes',en:'Restaurants in guesthouses'},body:{es:'<p><strong>Hotel Los Ceibos.</strong> Café orgánico de altura, sopa de fideo y platos criollos. Desayuno de 07:00 a 09:30; cena de 19:00 a 21:00. <strong>15–30 BOB.</strong></p><p><strong>San Silvestre Casa Grande.</strong> Gallina criolla, ají de fideo, yuca y bebidas de frutas regionales. Almuerzo bajo pedido, de 12:00 a 15:00. <strong>30–55 BOB.</strong></p><p><strong>Alojamientos familiares.</strong> Jawitas, café orgánico y menú del día. Desayuno desde las 07:00; almuerzo de 12:00 a 14:00. <strong>12–25 BOB.</strong></p>',en:'<p><strong>Hotel Los Ceibos.</strong> High-altitude organic coffee, noodle soup and criollo dishes. Breakfast 07:00–09:30; dinner 19:00–21:00. <strong>15–30 BOB.</strong></p><p><strong>San Silvestre Casa Grande.</strong> Free-range hen, ají de fideo, cassava and regional fruit drinks. Lunch by request, 12:00–15:00. <strong>30–55 BOB.</strong></p><p><strong>Family guesthouses.</strong> Jawitas, organic coffee and daily menus. Breakfast from 07:00; lunch 12:00–14:00. <strong>12–25 BOB.</strong></p>'}},
  {title:{es:'Información turística',en:'Tourist information'},body:{es:'<p><strong>Gobierno Autónomo Municipal de Irupana</strong><br>Plaza Principal, Villa de Lanza, Provincia Sud Yungas, La Paz.</p><p>Consulta en la Terminal de Buses Irupana por salidas y transporte local. Para recorridos especializados, coordina con guías locales y asociaciones comunitarias.</p>',en:'<p><strong>Gobierno Autónomo Municipal de Irupana</strong><br>Plaza Principal, Villa de Lanza, Sud Yungas Province, La Paz.</p><p>Ask at the Irupana Bus Terminal about departures and local transport. For specialized tours, coordinate with local guides and community associations.</p>'}}
];

const $ = (sel) => document.querySelector(sel);
const allCategories = ['Todos','Cultural','Natural','Arqueológico','Aventura','Gastronomía'];
let mapCategory = 'Todos', attractionCategory = 'Todos', visibleCount = 6; // CORRECCIÓN: inicia en 6
let currentDetailId = null;
let map, markerLayer;

function applyI18n() {
  document.documentElement.lang = lang === 'es' ? 'es-BO' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => { const v = t(el.dataset.i18n); if (v !== undefined) el.textContent = v; });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { const v = t(el.dataset.i18nHtml); if (v !== undefined) el.innerHTML = v; });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { const v = t(el.dataset.i18nPlaceholder); if (v !== undefined) el.placeholder = v; });
  document.querySelectorAll('[data-i18n-alt]').forEach(el => { const v = t(el.dataset.i18nAlt); if (v !== undefined) el.alt = v; });
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => { const v = t(el.dataset.i18nAriaLabel); if (v !== undefined) el.setAttribute('aria-label', v); });
  document.querySelectorAll('#langToggle .lang-opt').forEach(o => o.classList.toggle('active', o.dataset.lang === lang));
  const nav = $('#mainNav'), navToggle = $('#navToggle');
  navToggle.setAttribute('aria-label', nav.classList.contains('open') ? t('a11y.menuClose') : t('a11y.menuOpen'));
  renderFilters(); renderStory(); renderAttractions(); renderRoutes(); renderFoods(); renderPlan(); renderContactLinks(); renderLegend(); renderMarkers();
}

function renderStory() {
  $('#storyGrid').innerHTML = story.map((s,i)=>`<article class="story-card"><img class="story-photo" src="${s.photo}" alt=""><span class="story-icon" aria-hidden="true">${s.icon}</span><h3>${s.title[lang]}</h3><p>${s.short[lang]}</p><button type="button" data-story="${i}" aria-expanded="false">${t('story.readMore')} <span>＋</span></button></article>`).join('');
}
$('#storyGrid').addEventListener('click', e => {
  const b = e.target.closest('[data-story]'); if (!b) return;
  const i = +b.dataset.story, card = b.closest('.story-card'), p = card.querySelector('p');
  const open = b.getAttribute('aria-expanded') === 'true', s = story[i];
  p.textContent = open ? s.short[lang] : s.full[lang];
  b.setAttribute('aria-expanded', String(!open));
  b.innerHTML = open ? `${t('story.readMore')} <span>＋</span>` : `${t('story.readLess')} <span>−</span>`;
});

function chip(cat, active=false) {
  const label = cat === 'Todos' ? t('cat.all') : (categoryLabels[cat] ? categoryLabels[cat][lang] : cat);
  return `<button class="filter-chip${active?' active':''}" data-category="${cat}" aria-pressed="${active}">${label}</button>`;
}
function renderFilters() {
  $('#mapFilters').innerHTML = allCategories.map(c => chip(c, c === mapCategory)).join('');
  $('#attractionFilters').innerHTML = allCategories.slice(0,5).map(c => chip(c, c === attractionCategory)).join('');
}
function renderLegend() {
  $('#mapLegend').innerHTML = Object.entries(categories).map(([c,color]) => `<div class="legend-item"><span class="legend-dot" style="background:${color}"></span>${categoryLabels[c][lang]}</div>`).join('');
}
function setActive(container, cat) {
  container.querySelectorAll('.filter-chip').forEach(b => {
    const active = b.dataset.category === cat;
    b.classList.toggle('active', active);
    b.setAttribute('aria-pressed', String(active));
  });
}

function attractionCard(a) {
  const catText = localized(a.categoryLabel) || categoryLabels[a.category][lang];
  return `<article class="attraction-card" data-id="${a.id}" tabindex="0" role="button" aria-label="${t('attraction.cardAria')} ${a.name[lang]}"><div class="card-photo" style="background-image:url('${img(a.photo,800)}')"><span class="card-index">${String(a.id).padStart(2,'0')}</span><span class="card-category" style="color:${categories[a.category]}">${catText}</span></div><div class="card-body"><h3>${a.name[lang]}</h3><p>${a.brief[lang]}</p><span class="card-link">${t('attraction.cardCta')} <span>↗</span></span></div></article>`;
}
function renderAttractions() {
  const data = attractions.filter(a => attractionCategory === 'Todos' || a.category === attractionCategory || a.secondaryCategory === attractionCategory);
  $('#attractionGrid').innerHTML = data.slice(0, visibleCount).map(attractionCard).join('');
  const btn = $('#showMore');
  btn.hidden = data.length <= 6 || visibleCount >= data.length;
  btn.innerHTML = visibleCount >= data.length ? t('s03.allViewed') : `${t('s03.showMore')} <span>↓</span>`;
}
$('#attractionFilters').addEventListener('click', e => {
  const b = e.target.closest('[data-category]'); if (!b) return;
  attractionCategory = b.dataset.category; visibleCount = 14; // Mostrar todos al filtrar
  setActive(e.currentTarget, attractionCategory); renderAttractions();
});
$('#showMore').addEventListener('click', () => { visibleCount = 14; renderAttractions(); });
$('#attractionGrid').addEventListener('click', e => { const c = e.target.closest('.attraction-card'); if (c) openDetail(+c.dataset.id); });
$('#attractionGrid').addEventListener('keydown', e => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.attraction-card')) { e.preventDefault(); openDetail(+e.target.dataset.id); }
});
$('#journeyMosaic').addEventListener('click',e=>{const button=e.target.closest('[data-journey-attraction]');if(button)openDetail(+button.dataset.journeyAttraction)});

function renderRoutes() {
  $('#routeGrid').innerHTML = routes.map((r,i) => `
    <article class="route-card" style="--route-color:${r.color}">
      <span class="route-number">${r.icon} ${t('route.label')}</span>
      <h3>${r.name[lang]}</h3>
      <p class="route-pending">${t('route.pending')}</p>
      <div class="route-actions"><a class="text-link" href="#mapa">${t('route.viewMap')} ↗</a></div>
    </article>`).join('');
}

function renderFoods() {
  $('#foodGrid').innerHTML = foods.map(f => `<article class="food-card"><div class="food-photos${f.images.length===3?' food-trio':''}">${f.images.map(src=>`<img src="${img(src)}" alt="" loading="lazy">`).join('')}</div><div class="food-content"><p class="eyebrow">${f.tag[lang]}</p><h3>${f.title[lang]}</h3><p>${f.text[lang]}</p><span class="food-price">${f.price[lang]}</span></div></article>`).join('');
}

function renderPlan() {
  const openIndex = [...document.querySelectorAll('#planAccordion .accordion-item')].findIndex(x => x.classList.contains('open'));
  const keep = openIndex >= 0 ? openIndex : 0;
  $('#planAccordion').innerHTML = planItems.map((x,i) => {
    const isOpen = i === keep;
    return `<div class="accordion-item${isOpen?' open':''}"><button class="accordion-trigger" aria-expanded="${isOpen}" aria-controls="plan-panel-${i}">${x.title[lang]}<span>${isOpen?'−':'＋'}</span></button><div class="accordion-panel" id="plan-panel-${i}">${x.body[lang]}</div></div>`;
  }).join('');
}
$('#planAccordion').addEventListener('click', e => {
  const b = e.target.closest('.accordion-trigger'); if (!b) return;
  const item = b.parentElement, was = item.classList.contains('open');
  document.querySelectorAll('#planAccordion .accordion-item').forEach(x => {
    x.classList.remove('open');
    x.querySelector('button').setAttribute('aria-expanded','false');
    x.querySelector('button span').textContent = '＋';
  });
  if (!was) { item.classList.add('open'); b.setAttribute('aria-expanded','true'); b.querySelector('span').textContent = '−'; }
});

function renderContactLinks() {
  $('#contactLinks').innerHTML = `<div class="contact-item"><span>f</span><div>${t('contact.fb')}<small>${t('contact.pending')}</small></div></div><div class="contact-item"><span>⌖</span><div>${t('contact.agency')}<small>${t('contact.pending')}</small></div></div><div class="contact-item"><span>♧</span><div>${t('contact.guides')}<small>${t('contact.pending')}</small></div></div><div class="contact-item"><span>↗</span><div>${t('contact.transport')}<small>${t('contact.pending')}</small></div></div>`;
}
$('#contactForm').addEventListener('submit', e => {
  e.preventDefault(); if (!e.currentTarget.reportValidity()) return;
  $('#formFeedback').textContent = t('form.feedback'); e.currentTarget.reset();
});

let lastFocus = null;
function showModal(el) { lastFocus = document.activeElement; el.hidden = false; document.body.classList.add('modal-open'); el.querySelector('.modal-close').focus(); }
function hideModal(which) { const el = document.querySelector(`#${which}Backdrop`); el.hidden = true; document.body.classList.toggle('modal-open', document.querySelector('.modal-backdrop:not([hidden])') !== null); if (lastFocus && lastFocus.focus) lastFocus.focus(); }
document.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', () => hideModal(b.dataset.close)));
document.querySelectorAll('.modal-backdrop').forEach(bg => bg.addEventListener('click', e => { if (e.target === bg) hideModal(bg.id.replace('Backdrop','')); }));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { const active = [...document.querySelectorAll('.modal-backdrop:not([hidden])')].at(-1); if (active) hideModal(active.id.replace('Backdrop','')); }
  if (e.key === 'Tab') {
    const m = [...document.querySelectorAll('.modal-backdrop:not([hidden])')].at(-1); if (!m) return;
    const f = [...m.querySelectorAll('button:not([disabled]),a[href],input,select,textarea,[tabindex="0"]')].filter(x => x.offsetParent !== null);
    if (!f.length) return;
    if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f.at(-1).focus(); }
    else if (!e.shiftKey && document.activeElement === f.at(-1)) { e.preventDefault(); f[0].focus(); }
  }
});

function openDetail(id) {
  const a = attractions.find(x => x.id === id); if (!a) return;
  currentDetailId = id;
  const catText = localized(a.categoryLabel) || categoryLabels[a.category][lang];
  $('#detailContent').innerHTML = `
    <div class="detail-hero" style="background-image:url('${img(a.photo,1200)}')">
      <div class="detail-hero-title"><span>${catText.toUpperCase()} · IRUPANA</span><h2 id="detailTitle">${a.name[lang]}</h2></div>
    </div>
    <div class="detail-body">
      <p>${a.brief[lang]}</p>
      <div class="detail-fields">
        <div class="detail-field"><strong>${t('detail.history')}</strong><span>${a.history[lang]}</span></div>
        <div class="detail-field"><strong>${t('detail.activities')}</strong><span>${a.activities[lang]}</span></div>
        <div class="detail-field"><strong>${t('detail.location')}</strong><span>${t('detail.locationPending')}</span></div>
        <div class="detail-field"><strong>${t('detail.transport')}</strong><span>${a.transport[lang]}</span></div>
        <div class="detail-field"><strong>${t('detail.hours')}</strong><span>${a.hours[lang]}</span></div>
        <div class="detail-field"><strong>${t('detail.cost')}</strong><span>${a.cost[lang]}</span></div>
      </div>
      <div class="detail-footer"><span>${t('detail.footer')}</span><button class="button button-primary button-small" data-geo="route">${t('detail.geoBtn')}</button></div>
    </div>`;
  $('#detailContent [data-geo]').addEventListener('click', () => openGeo('route'));
  showModal($('#detailBackdrop'));
}

// [FICTICIO] Coordenadas de las sugerencias de partida para la geocodificación simulada.
const cityCoords = { 'La Paz':[-16.4897,-68.1193], 'El Alto':[-16.5047,-68.1633], 'Cochabamba':[-17.3935,-66.1570], 'Santa Cruz':[-17.7833,-63.1821] };
let geoMode = 'route', origin = null;

function openGeo(mode = 'route') {
  geoMode = mode; origin = null;
  $('#geoContent').innerHTML = `<p class="eyebrow">${mode==='near'?t('geo.near.eyebrow'):t('geo.route.eyebrow')}</p><h2 id="geoTitle">${mode==='near'?t('geo.near.title'):t('geo.route.title')}</h2><p>${t('geo.consent')}</p><div class="geo-actions"><button class="button button-primary" id="geoContinue">${t('geo.continue')}</button><button class="button button-outline" id="geoCancel">${t('geo.cancel')}</button></div><div id="geoExtra"></div>`;
  showModal($('#geoBackdrop'));
  $('#geoCancel').addEventListener('click', () => hideModal('geo'));
  $('#geoContinue').addEventListener('click', requestLocation);
}
function requestLocation() {
  if (!navigator.geolocation) { showManual(t('geo.noGeo')); return; }
  $('#geoExtra').innerHTML = `<p class="aside-note">${t('geo.waiting')}</p>`;
  navigator.geolocation.getCurrentPosition(
    pos => { origin = [pos.coords.latitude, pos.coords.longitude]; showRouteResult(origin); },
    () => showManual(t('geo.error')),
    { enableHighAccuracy:false, timeout:9000, maximumAge:300000 }
  );
}
function showManual(message = '') {
  $('#geoExtra').innerHTML = `<div class="manual-route"><p class="aside-note">${message || t('geo.manual.default')}</p><label for="originCity">${t('geo.manual.label')}</label><select id="originCity"><option value="La Paz">La Paz, Bolivia</option><option value="El Alto">El Alto, Bolivia</option><option value="Cochabamba">Cochabamba, Bolivia</option><option value="Santa Cruz">Santa Cruz, Bolivia</option></select><button class="button button-primary full-width" id="calculateRoute">${t('geo.manual.btn')}</button></div>`;
  $('#calculateRoute').addEventListener('click', () => { origin = cityCoords[$('#originCity').value]; showRouteResult(origin); });
}
function distanceKm(from, to) {
  const rad = n => n * Math.PI / 180;
  const dLat = rad(to[0]-from[0]), dLon = rad(to[1]-from[1]);
  const a = Math.sin(dLat/2)**2 + Math.cos(rad(from[0])) * Math.cos(rad(to[0])) * Math.sin(dLon/2)**2;
  return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}
function showRouteResult(from) {
  const km = distanceKm(from, center), hours = km / 60;
  const time = hours < 1 ? `${Math.max(1, Math.round(hours*60))} min` : `${Math.floor(hours)} h ${Math.round((hours%1)*60)} min`;
  let near = '';
  if (geoMode === 'near') {
    const nearest = [...attractions].sort((a,b) => distanceKm(from,a.coords) - distanceKm(from,b.coords)).slice(0,3);
    near = `<p><strong>${t('geo.result.near')}</strong></p><ol class="near-list">${nearest.map(a => `<li>${a.name[lang]} · ${distanceKm(from,a.coords).toFixed(1)} km</li>`).join('')}</ol>`;
  }
  $('#geoExtra').innerHTML = `<div class="route-result"><strong>${km.toFixed(1)} ${t('geo.km')} · ${time} ${t('geo.estimated')}</strong><span>${t('geo.result.note')}</span>${near}<div class="route-links"><a class="button button-primary" target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&destination=-16.4667,-67.4667">${t('geo.gmaps')}</a><a class="button button-outline" target="_blank" rel="noopener" href="https://waze.com/ul?ll=-16.4667,-67.4667&navigate=yes">${t('geo.waze')}</a></div></div>`;
}
document.querySelectorAll('[data-geo]').forEach(b => b.addEventListener('click', () => openGeo(b.dataset.geo)));

function markerIcon(color) {
  return L.divIcon({ className:'', html:`<span style="display:block;width:19px;height:19px;background:${color};border:3px solid #fff;border-radius:50% 50% 50% 2px;transform:rotate(-45deg);box-shadow:0 2px 7px #24342466"></span>`, iconSize:[19,19], iconAnchor:[9,17], popupAnchor:[0,-15] });
}
function renderMarkers() {
  if (!map || !markerLayer) return;
  markerLayer.clearLayers();
  const list = attractions.filter(a => mapCategory === 'Todos' || a.category === mapCategory || a.secondaryCategory === mapCategory);
  const countEl = $('#mapCount');
  if (countEl) countEl.textContent = `${list.length} ${list.length === 1 ? t('map.count.one') : t('map.count.many')}`;
  list.forEach(a => {
    const catText = localized(a.categoryLabel) || categoryLabels[a.category][lang];
    const marker = L.marker(a.coords, { icon: markerIcon(categories[a.category]) });
    marker.bindPopup(`<div class="map-popup-title">${a.name[lang]}</div><div class="map-popup-cat">${catText}</div><button type="button" data-map-detail="${a.id}">${t('attraction.mapFicha')} ↗</button>`);
    marker.on('popupopen', ev => { const btn = ev.popup.getElement().querySelector('[data-map-detail]'); if (btn) btn.addEventListener('click', () => openDetail(+btn.dataset.mapDetail)); });
    marker.addTo(markerLayer);
  });
}
function initMap() {
  const skeleton = $('#mapSkeleton');
  if (!window.L) { skeleton.innerHTML = `<span>${lang==='es'?'El mapa requiere conexión a internet para cargar Leaflet.':'The map requires an internet connection to load Leaflet.'}</span>`; return; }
  map = L.map('map', { scrollWheelZoom:false }).setView(center, 12);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom:19, attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' }).addTo(map);
  markerLayer = L.layerGroup().addTo(map);
  renderMarkers();
  map.whenReady(() => setTimeout(() => { map.invalidateSize(); skeleton.classList.add('hidden'); }, 250));
}
initMap();
$('#mapFilters').addEventListener('click', e => {
  const b = e.target.closest('[data-category]'); if (!b) return;
  mapCategory = b.dataset.category; setActive(e.currentTarget, mapCategory); renderMarkers();
});
const navToggle = $('#navToggle'), navEl = $('#mainNav');
navToggle.addEventListener('click', () => { const open = navEl.classList.toggle('open'); navToggle.setAttribute('aria-expanded', String(open)); navToggle.setAttribute('aria-label', open ? t('a11y.menuClose') : t('a11y.menuOpen')); });
navEl.addEventListener('click', e => { if (e.target.closest('a')) { navEl.classList.remove('open'); navToggle.setAttribute('aria-expanded','false'); navToggle.setAttribute('aria-label', t('a11y.menuOpen')); } });
const header = document.querySelector('.site-header'), toTop = $('#toTop');
window.addEventListener('scroll', () => { header.classList.toggle('scrolled', window.scrollY > 10); toTop.classList.toggle('visible', window.scrollY > 500); }, { passive:true });
const progressTrack = $('#scrollProgress span');
window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-window.innerHeight;progressTrack.style.width=`${max>0?Math.min(100,window.scrollY/max*100):0}%`},{passive:true});
const heroImage = document.querySelector('.hero-image'), heroSection = document.querySelector('.hero');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let parallaxPending = false;
window.addEventListener('scroll',()=>{
  if(reduceMotion||parallaxPending)return;
  parallaxPending=true;
  requestAnimationFrame(()=>{heroImage.style.transform=`translate3d(0,${Math.min(window.scrollY,heroSection.offsetHeight)*.09}px,0) scale(1.08)`;parallaxPending=false});
},{passive:true});
toTop.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));

$('#langToggle').addEventListener('click', e => {
  const opt = e.target.closest('.lang-opt'); if (!opt) return;
  if (opt.dataset.lang === lang) return;
  lang = opt.dataset.lang;
  try { localStorage.setItem('irupana-lang', lang); } catch (_) { /* No se requiere almacenamiento para cambiar idioma durante esta sesión. */ }
  applyI18n();
  if (!$('#detailBackdrop').hidden && currentDetailId) openDetail(currentDetailId);
  if (!$('#geoBackdrop').hidden) hideModal('geo');
});

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); io.unobserve(entry.target); } }), { threshold:.08 });
  document.querySelectorAll('.section-kicker,.story-card,.atlas-figure,.journey-shot,.attraction-card,.route-card,.food-card').forEach(el => { el.classList.add('reveal'); io.observe(el); });
}

/* ============================================================
   LÓGICA DE NAVEGACIÓN SPA (Mostrar/Ocultar secciones)
   ============================================================ */
const homeSections = ['#inicio', '#conoce', '#experiencia', '#atractivos', '#contacto'];
const altSections = ['#mapa', '#rutas', '#gastronomia', '#planifica'];

function handleRoute() {
  const hash = window.location.hash || '#inicio';
  const targetEl = document.querySelector(hash);
  if (!targetEl) return;

  if (homeSections.includes(hash)) {
    homeSections.forEach(id => document.querySelector(id).classList.remove('hidden-view'));
    altSections.forEach(id => document.querySelector(id).classList.add('hidden-view'));
    setTimeout(() => targetEl.scrollIntoView({ behavior: 'smooth' }), 50);
  } else if (altSections.includes(hash)) {
    homeSections.forEach(id => document.querySelector(id).classList.add('hidden-view'));
    altSections.forEach(id => document.querySelector(id).classList.add('hidden-view'));
    targetEl.classList.remove('hidden-view');
    
    // Si entramos al mapa, recalculamos su tamaño para que Leaflet no se rompa
    if (hash === '#mapa' && map) {
      setTimeout(() => map.invalidateSize(), 100);
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (hash === '#inicio') {
    homeSections.forEach(id => document.querySelector(id).classList.remove('hidden-view'));
    altSections.forEach(id => document.querySelector(id).classList.add('hidden-view'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

window.addEventListener('hashchange', handleRoute);
applyI18n();
handleRoute(); // Ejecutar al cargar la página
