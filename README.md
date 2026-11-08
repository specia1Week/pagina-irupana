# Irupana — sitio turístico demostrativo

Sitio bilingüe (español e inglés), responsivo y navegable para conocer Irupana, Sud Yungas. La información se preparó a partir de `propuesta pagina web Irupana 2.docx`; varias de las fotografías y el mapa de `assets/` fueron reemplazados por imágenes de mayor resolución proporcionadas para el sitio.

## Cómo abrirlo

Abre `index.html` en un navegador moderno. No requiere instalación ni compilación. Las fotografías del documento están guardadas localmente. Google Fonts, Leaflet y el mapa base de OpenStreetMap requieren conexión a internet.

## Decisiones técnicas

- HTML, CSS y JavaScript vanilla para mantener el proyecto fácil de abrir y modificar.
- Leaflet y OpenStreetMap para el mapa de referencia, sin clave de API.
- Playfair Display y DM Sans para jerarquía editorial y lectura cómoda.
- El selector ES/EN, el menú SPA, las fichas modales, los filtros y el formulario de demostración se conservan.
- El bloque fotográfico combina escenas locales, entrada por teclado/tacto a las fichas y movimiento suave de desplazamiento. Respeta la preferencia de movimiento reducido del sistema.
- La ubicación del visitante se solicita únicamente después de elegir “Continuar” en el diálogo de consentimiento.

## Fuente y datos pendientes

Los textos, referencias bibliográficas, fotografías, categorías de atractivos, precios y contactos previstos se basan en la propuesta. La propuesta indica que falta definir el recorrido didáctico y la señalética; por ello se muestran como pendientes. Los pines del prototipo son aproximados y no deben usarse para navegación real hasta validar sus coordenadas. No se añadieron enlaces de redes, teléfonos ni correos que el documento no proporciona.

## Siguiente iteración

Validar coordenadas y trazados con el municipio, incorporar la señalética final, agregar enlaces oficiales confirmados y conectar el formulario a un canal de atención real.
