import type { Dict } from "./en";

const es: Dict = {
  nav: { generator: "Generador QR", scanner: "Lector QR", bulk: "QR masivo", barcode: "Código de barras", tools: "Herramientas", types: "Tipos de QR", language: "Idioma", theme: "Tema" },
  home: {
    title: "Generador de Códigos QR Gratis con Logo — Sin registro, nunca caduca",
    meta: "Crea códigos QR personalizados gratis: logo, colores, degradados, marcos, exporta SVG y PDF, WiFi, vCard, WhatsApp y más. Sin registro, sin marca de agua, nunca caducan.",
    badge: "100% gratis · Sin registro · Sin marca de agua · Nunca caduca",
    h1a: "El generador de códigos QR gratis",
    h1b: "que nunca deja de funcionar",
    sub: "Todas las funciones “premium” que otros cobran — logos, marcos, degradados, SVG/PDF, masivo — gratis para siempre. Se crea en tu navegador, privado por diseño.",
  },
  type: {
    title: "Generador de QR {name} — Gratis, personalizado, nunca caduca",
    h1: "Generador de código QR {name} gratis",
    meta: "Crea un código QR {name} gratis. {desc} Añade tu logo, colores y marco, descarga PNG, SVG o PDF. Sin registro, nunca caduca.",
  },
  types: {
    url: { name: "URL", desc: "Abre cualquier sitio web o enlace al escanear." },
    text: { name: "Texto", desc: "Muestra un mensaje de texto, funciona sin internet." },
    wifi: { name: "WiFi", desc: "Tus invitados se conectan al WiFi sin escribir la contraseña." },
    vcard: { name: "vCard", desc: "Comparte tu tarjeta de contacto — se guarda en el móvil con un toque." },
    email: { name: "Email", desc: "Abre un email listo para enviar con dirección, asunto y mensaje." },
    sms: { name: "SMS", desc: "Abre un SMS ya escrito hacia tu número." },
    phone: { name: "Teléfono", desc: "Llama a un número con un solo escaneo." },
    whatsapp: { name: "WhatsApp", desc: "Inicia un chat de WhatsApp contigo, con mensaje opcional." },
    location: { name: "Ubicación", desc: "Abre un lugar o coordenadas GPS en Google Maps." },
    event: { name: "Evento", desc: "Añade un evento al calendario con fecha, hora y lugar." },
    social: { name: "Redes sociales", desc: "Enlaza tu Instagram, TikTok, Facebook, YouTube y más." },
    upi: { name: "Pago UPI", desc: "Recibe pagos UPI en India con GPay, PhonePe y Paytm." },
    crypto: { name: "Cripto", desc: "Recibe Bitcoin, Ethereum, USDT y otras criptomonedas." },
    paypal: { name: "PayPal", desc: "Cobra con tu enlace PayPal.me, con importe opcional." },
  },
  f: {
    url: "URL del sitio web", text: "Tu texto", ssid: "Nombre de la red (SSID)", password: "Contraseña", encryption: "Seguridad",
    noPassword: "Sin contraseña", hiddenNetwork: "Red oculta", firstName: "Nombre", lastName: "Apellido",
    mobile: "Móvil", workPhone: "Teléfono del trabajo", email: "Email", website: "Sitio web", company: "Empresa", jobTitle: "Cargo",
    street: "Calle", city: "Ciudad", zip: "Código postal", country: "País", note: "Nota", emailTo: "Enviar a (email)",
    subject: "Asunto", message: "Mensaje", phone: "Número de teléfono", whatsappNumber: "Número de WhatsApp (con código de país)",
    prefilledMessage: "Mensaje predefinido (opcional)", addressOrPlace: "Dirección o nombre del lugar", latitude: "Latitud",
    longitude: "Longitud", eventTitle: "Título del evento", start: "Inicio", end: "Fin", location: "Lugar", description: "Descripción",
    platform: "Plataforma", usernameOrLink: "Usuario o enlace del perfil", upiId: "ID de UPI", payeeName: "Nombre del beneficiario",
    amountOptional: "Importe (opcional)", coin: "Moneda", walletAddress: "Dirección de la billetera", paypalMeUser: "Usuario de PayPal.me",
    currency: "Divisa",
  },
  ui: {
    step1: "1. Contenido", step2: "2. Diseño", step3: "3. Descargar",
    templates: "Plantillas", shapes: "Formas", colors: "Colores", logo: "Logo", frame: "Marco", advanced: "Avanzado",
    dots: "Puntos", eyeFrame: "Marco de esquina", eyeBall: "Punto de esquina", foreground: "Color de puntos", second: "Segundo color",
    gradient: "Degradado", none: "Ninguno", linear: "Lineal", radial: "Radial", angle: "Ángulo", eyeColor: "Color de esquinas",
    sameAsDots: "Igual que los puntos", background: "Fondo", transparent: "Transparente",
    uploadLogo: "Subir logo", removeLogo: "Quitar", logoSize: "Tamaño del logo", clearBehindLogo: "Limpiar puntos detrás del logo",
    orPickIcon: "O elige un icono", frameText: "Texto del marco", frameColor: "Color del marco", textColor: "Color del texto",
    ecc: "Corrección de errores", eccL: "Baja 7%", eccM: "Media 15%", eccQ: "Alta 25%", eccH: "Máx 30%", margin: "Margen",
    size: "Tamaño", download: "Descargar", copy: "Copiar imagen", copied: "¡Copiado!", print: "Imprimir", reset: "Restablecer diseño",
    scannable: "Prueba superada — este código funciona", notScannable: "Prueba fallida — aumenta el contraste o reduce el logo",
    checking: "Probando escaneo…", lowContrast: "Contraste bajo: los puntos oscuros sobre fondo claro se leen mejor.",
    inverted: "Puntos claros sobre fondo oscuro — algunos lectores antiguos no lo leen.",
    enterContent: "Completa el contenido para crear tu código QR", neverExpires: "Código estático — funciona para siempre, sin cuenta",
    vectorHint: "SVG y PDF son vectoriales — perfectos para imprimir a cualquier tamaño.", saveDesign: "Guardar", savedDesigns: "Mis diseños guardados",
    load: "Cargar", del: "Eliminar", noneSaved: "Nada guardado aún — tus diseños se quedan en este dispositivo.", privacy: "Tus datos nunca salen de tu navegador.",
    allTypes: "Todos los tipos de código QR",
    tooLong: "Demasiado contenido para un código QR — acórtalo, por favor.",
  },
  features: {
    title: "Todo lo que cobran otros sitios QR — gratis",
    items: [
      { t: "Nunca caduca", d: "Los QR estáticos guardan tus datos directamente. Ninguna prueba que desactive tus códigos impresos." },
      { t: "Logo y colores de marca", d: "Sube un logo, elige colores y degradados, 9 estilos de puntos y 10 de esquinas." },
      { t: "Marcos con llamada a la acción", d: "Añade un marco “Escanéame” en 5 estilos con tu texto y colores." },
      { t: "Listo para imprimir", d: "PNG hasta 4096 px, SVG vectorial, PDF, JPG y WebP. Sin marca de agua, nunca." },
      { t: "Generación masiva", d: "Crea cientos de códigos QR desde una lista o CSV y descárgalos en ZIP." },
      { t: "Privado e instantáneo", d: "Todo funciona en tu navegador. Nada se sube, guarda ni rastrea." },
    ],
  },
  compare: {
    title: "{brand} vs. generadores QR “gratis” típicos",
    feature: "Función", us: "{brand}", them: "Otros",
    rows: ["Sin registro", "Los códigos nunca caducan", "Subir logo", "Exportar SVG / PDF", "Sin marca de agua", "Generador masivo", "Marcos con texto", "Escaneos ilimitados"],
    themVals: ["Suele ser obligatorio", "La prueba acaba en 7–14 días", "Plan de pago", "Plan de pago", "A veces", "Plan de pago", "Limitado", "Límite de escaneos"],
  },
  howto: {
    title: "Cómo crear un código QR en 3 pasos",
    steps: [
      { t: "Elige el tipo y añade el contenido", d: "Pega un enlace o completa WiFi, contacto, WhatsApp, datos de pago y más." },
      { t: "Hazlo tuyo", d: "Elige una plantilla o cambia puntos, esquinas, colores, añade tu logo y un marco." },
      { t: "Descarga y usa", d: "Comprobamos que se escanea; descarga PNG, SVG o PDF e imprímelo o compártelo." },
    ],
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      { q: "¿Este generador de QR es realmente gratis?", a: "Sí. Todas las funciones son gratis, sin registro, sin prueba y sin marca de agua. Puedes usar los códigos en proyectos personales y comerciales." },
      { q: "¿Los códigos QR caducan?", a: "Nunca. Son códigos QR estáticos: el contenido va dentro del propio código, así que funcionan para siempre — aunque este sitio desapareciera." },
      { q: "¿Puedo añadir mi logo?", a: "Sí. Sube un logo PNG, JPG o SVG. Aumentamos la corrección de errores automáticamente y hacemos una prueba de escaneo antes de descargar." },
      { q: "¿Qué formato es mejor para imprimir?", a: "SVG o PDF. Son vectoriales, así que se ven nítidos en tarjetas, folletos, menús y pósteres grandes." },
      { q: "¿Hay límite de escaneos o de códigos?", a: "Sin límites. Crea todos los códigos QR que quieras y se pueden escanear ilimitadamente." },
      { q: "¿Mis datos están seguros?", a: "Tus códigos QR se generan en tu propio navegador. No subimos, guardamos ni vemos lo que escribes." },
      { q: "¿Puedo editar un QR después de imprimirlo?", a: "Un código estático no cambia una vez impreso. Consejo: apúntalo a una página que controles (tu web) y actualiza esa página." },
      { q: "¿Cómo escaneo un código QR?", a: "Abre la cámara del móvil y apunta al código, o usa nuestro lector QR online gratis con tu webcam o una imagen." },
    ],
  },
  scanner: {
    title: "Lector de Códigos QR Online Gratis — Desde cámara o imagen",
    meta: "Escanea códigos QR online gratis con tu cámara o subiendo una imagen. Funciona en móvil y ordenador, nada se sube.",
    h1: "Lector de códigos QR online gratis",
    sub: "Usa tu cámara o sube una captura. Se decodifica en tu dispositivo — nada se sube.",
    camera: "Escanear con cámara", stop: "Detener cámara", upload: "Subir imagen", drop: "o suelta / pega una imagen aquí",
    result: "Resultado", open: "Abrir enlace", copy: "Copiar", copied: "¡Copiado!", notFound: "No se encontró ningún código QR en esta imagen.",
    noCamera: "Cámara no disponible. Permite el acceso a la cámara o sube una imagen.", history: "Historial", clear: "Borrar",
    wifiJoin: "Red WiFi", makeOwn: "Crea tu propio código QR",
  },
  bulk: {
    title: "Generador de QR Masivo — Crea cientos gratis, descarga ZIP",
    meta: "Genera cientos de códigos QR a la vez desde una lista o CSV. Colores y logo personalizados, descarga PNG o SVG en ZIP. Gratis, sin registro.",
    h1: "Generador de códigos QR masivo gratis",
    sub: "Un enlace o texto por línea — o sube un CSV. Cada código lleva tu diseño. Descarga todo en un ZIP.",
    input: "Tus datos (uno por línea)", csv: "Subir CSV / TXT", csvHint: "2ª columna opcional = nombre del archivo: https://sitio.com/a, mesa-1",
    count: "{n} códigos QR", format: "Formato", generate: "Generar ZIP", working: "Creando {i} de {n}…", done: "¡Listo! Tu ZIP se está descargando.",
    max: "Hasta 1.000 códigos por lote.",
  },
  legal: {
    privacyTitle: "Política de privacidad",
    privacy: [
      "Los códigos QR se crean completamente en tu navegador. Los textos, enlaces, contactos, contraseñas WiFi e imágenes que introduces no se envían a nuestros servidores.",
      "Los diseños guardados y el historial de escaneo se guardan solo en el almacenamiento local de tu navegador. Puedes borrarlos cuando quieras.",
      "Usamos analítica respetuosa con la privacidad y sin cookies (Vercel Web Analytics) para contar visitas. Podríamos mostrar publicidad en el futuro; en ese caso, los socios publicitarios podrían usar cookies y esta política se actualizará.",
      "Contacto: {email}",
    ],
    termsTitle: "Términos de uso",
    terms: [
      "Este servicio es gratuito y se ofrece “tal cual”, sin garantía. Prueba siempre un código QR antes de imprimirlo en grandes cantidades.",
      "Puedes usar los códigos QR generados para cualquier fin personal o comercial. Eres responsable del contenido que codificas.",
      "No uses este servicio para crear códigos que enlacen a contenido ilegal, malware o phishing.",
    ],
  },
  barcode: {
    "title": "Generador de Códigos de Barras Gratis — EAN-13, UPC, Code 128 | PNG, SVG, PDF",
    "meta": "Crea códigos de barras online gratis: EAN-13, UPC-A, Code 128, Code 39, ITF-14 y más. Tamaño y colores a tu gusto, descarga PNG, SVG o PDF. Sin registro ni marca de agua.",
    "h1": "Generador de códigos de barras gratis",
    "sub": "EAN, UPC, Code 128 y más para productos, envíos e inventario. Listo para imprimir, sin registro ni marca de agua.",
    "type": "Tipo de código",
    "data": "Datos del código",
    "label": "Texto bajo el código (opcional)",
    "showText": "Mostrar texto",
    "hideText": "Ocultar texto",
    "barWidth": "Ancho de barra",
    "height": "Altura",
    "fontSize": "Tamaño del texto",
    "margin": "Margen",
    "barColor": "Color de las barras",
    "fileType": "Tipo de archivo",
    "example": "Usar un ejemplo",
    "invalid": "Estos datos no sirven para {name}.",
    "hints": {
      "CODE128": "Letras, números y símbolos. El código más usado en envíos e inventario.",
      "EAN13": "12 o 13 dígitos. Productos de tienda en todo el mundo — escribe 12 y añadimos el dígito de control.",
      "UPC": "11 o 12 dígitos. Productos de tienda en EE. UU. y Canadá.",
      "EAN8": "7 u 8 dígitos. Envases pequeños.",
      "UPCE": "6 u 8 dígitos. UPC corto para artículos pequeños.",
      "CODE39": "Mayúsculas, números, espacio y - . $ / + %. Industria y credenciales.",
      "ITF14": "13 o 14 dígitos. Cajas de envío y palés.",
      "codabar": "Números y - $ : / . + con A, B, C o D al inicio y al final. Bibliotecas y bancos de sangre.",
      "MSI": "Solo números. Estanterías de almacén e inventario.",
      "pharmacode": "Un número de 3 a 131070. Envases farmacéuticos."
    },
    "faq": [
      {
        "q": "¿Qué tipo de código de barras debo usar?",
        "a": "Para productos de tienda, usa EAN-13 (mundial) o UPC-A (EE. UU. y Canadá). Para etiquetas de envío, inventario y códigos internos, usa Code 128: acepta letras y números."
      },
      {
        "q": "¿Puedo usarlos gratis con fines comerciales?",
        "a": "Sí. Descarga e imprime todos los que necesites, para cualquier uso, sin marca de agua ni registro."
      },
      {
        "q": "¿Necesito un número GS1 para vender en tiendas?",
        "a": "La mayoría de tiendas exigen números EAN/UPC registrados en GS1. Esta herramienta crea la imagen del código; no asigna un número de producto oficial."
      },
      {
        "q": "¿Qué formato es mejor para imprimir?",
        "a": "SVG o PDF. Son vectoriales, así que las barras quedan nítidas a cualquier tamaño, algo importante para los lectores."
      },
      {
        "q": "¿Por qué no se escanea mi código?",
        "a": "Usa barras oscuras sobre fondo claro, no lo imprimas muy pequeño y deja el margen blanco alrededor. EAN y UPC necesitan un dígito de control correcto: escribe 12 dígitos para EAN-13 y lo calculamos por ti."
      }
    ]
  },
  tools: {
    "hubTitle": "Herramientas Online Gratis — Imagen, PDF, Código QR y Código de Barras",
    "hubMeta": "Herramientas online gratis que funcionan en tu navegador: comprimir y redimensionar imágenes, HEIC a JPG, JPG a PDF, unir y dividir PDF, códigos QR y de barras. Sin registro ni subidas.",
    "hubH1": "Todas las herramientas gratis",
    "hubSub": "Imágenes, PDF, códigos QR y de barras: rápido, gratis y privado. Tus archivos nunca salen de tu dispositivo.",
    "badge": "100% gratis · Sin registro · Tus archivos no salen de tu dispositivo",
    "more": "Más herramientas gratis",
    "groups": {
      "qr": "Código QR y de barras",
      "image": "Herramientas de imagen",
      "pdf": "Herramientas PDF"
    },
    "ui": {
      "chooseFiles": "Elegir archivos",
      "chooseFile": "Elegir un archivo",
      "dropHint": "o arrástralos aquí; también puedes pegar con Ctrl+V",
      "wrongType": "Se omitieron algunos archivos porque esta herramienta no los admite.",
      "files": "{n} archivos",
      "pages": "{n} páginas",
      "clear": "Borrar todo",
      "remove": "Quitar",
      "download": "Descargar",
      "downloadAll": "Descargar todo (ZIP)",
      "settings": "Ajustes",
      "working": "Procesando {i} de {n}…",
      "done": "¡Listo!",
      "kept": "Ya está optimizada: se mantiene el original",
      "error": "No se pudo leer este archivo.",
      "noWebp": "Tu navegador no puede crear archivos WebP. Prueba con Chrome, Edge o Firefox.",
      "encrypted": "Este PDF está protegido con contraseña o dañado.",
      "bySize": "Por tamaño",
      "byPercent": "Por porcentaje",
      "width": "Ancho",
      "height": "Alto",
      "keepRatio": "Mantener proporción",
      "percent": "Tamaño",
      "maxWidth": "Ancho máximo",
      "original": "Original",
      "format": "Formato de salida",
      "auto": "Auto",
      "sameFormat": "Igual",
      "quality": "Calidad",
      "background": "Fondo",
      "pageSize": "Tamaño de página",
      "fitImage": "Ajustar a imagen",
      "margin": "Margen",
      "none": "Ninguno",
      "small": "Pequeño",
      "large": "Grande",
      "resolution": "Calidad de imagen",
      "normal": "Normal",
      "high": "Alta",
      "veryHigh": "Muy alta",
      "splitEach": "Cada página",
      "extract": "Elegir páginas",
      "pagesOptional": "Páginas (vacío = todas)",
      "pagesToExtract": "Páginas a extraer",
      "rangesHint": "Ejemplo: 1-3, 5, 8-10",
      "addOneMore": "Añade al menos 2 archivos PDF para unir.",
      "noPages": "Ninguna página coincide: revisa los números.",
      "moveUp": "Subir",
      "moveDown": "Bajar",
      "privacy": "Tus archivos se procesan en tu dispositivo y nunca se suben."
    },
    "faqCommon": [
      {
        "q": "¿Es realmente gratis?",
        "a": "Sí. Todas las herramientas son gratis, sin registro, sin marca de agua y sin límite diario."
      },
      {
        "q": "¿Mis archivos están seguros?",
        "a": "Tus archivos nunca salen de tu dispositivo. Todo se procesa en tu navegador, así que nada se sube a un servidor."
      }
    ],
    "items": {
      "compressImage": {
        "name": "Comprimir imagen",
        "desc": "Reduce el peso de JPG, PNG y WebP sin pérdida visible de calidad.",
        "title": "Comprimir Imagen Online Gratis — Reduce el Peso de JPG, PNG y WebP",
        "meta": "Comprime imágenes online gratis. Reduce el peso de JPG, PNG, WebP y HEIC en segundos sin perder calidad. Compresión por lotes, sin registro ni subidas.",
        "h1": "Comprimir imágenes gratis",
        "sub": "Reduce el peso de tus fotos para webs, correo y WhatsApp. Comprime muchas imágenes a la vez; nada se sube.",
        "action": "Comprimir imágenes",
        "accepts": "JPG · PNG · WebP · HEIC",
        "faq": [
          {
            "q": "¿Cuánto más pequeñas quedarán mis imágenes?",
            "a": "Normalmente entre un 50 y un 80% menos en fotos con calidad 70, sin diferencia visible. Baja la calidad o fija un ancho máximo para reducirlas aún más."
          },
          {
            "q": "¿Puedo comprimir archivos PNG?",
            "a": "Sí. En modo Auto probamos PNG y un formato moderno y nos quedamos con el más pequeño. Las imágenes transparentes siguen siéndolo."
          }
        ]
      },
      "resizeImage": {
        "name": "Redimensionar imagen",
        "desc": "Cambia el ancho y alto en píxeles o por porcentaje.",
        "title": "Redimensionar Imagen Online Gratis — Cambiar Tamaño en Píxeles o %",
        "meta": "Redimensiona imágenes online gratis. Cambia el ancho y alto de JPG, PNG y WebP en píxeles o porcentaje, mantén la proporción y procesa por lotes. Sin registro ni subidas.",
        "h1": "Redimensionar imágenes gratis",
        "sub": "Elige un tamaño exacto en píxeles o escala por porcentaje. Redimensiona muchas imágenes a la vez para redes, webs y formularios.",
        "action": "Redimensionar",
        "accepts": "JPG · PNG · WebP · HEIC",
        "faq": [
          {
            "q": "¿Cómo cambio el tamaño sin deformar la imagen?",
            "a": "Deja activado \"Mantener proporción\" y escribe solo el ancho o el alto; el otro lado se calcula solo."
          },
          {
            "q": "¿Puedo redimensionar muchas imágenes a la vez?",
            "a": "Sí. Añade todas las que quieras; reciben los mismos ajustes y puedes descargarlas en un solo ZIP."
          }
        ]
      },
      "heicToJpg": {
        "name": "HEIC a JPG",
        "desc": "Convierte fotos HEIC del iPhone a JPG que se abren en todas partes.",
        "title": "Convertir HEIC a JPG Gratis — Fotos de iPhone a JPG Online",
        "meta": "Convierte HEIC a JPG online gratis. Pasa fotos HEIC y HEIF del iPhone a JPG que se abren en Windows, Android y cualquier web. Conversión por lotes, sin subidas.",
        "h1": "Convertir HEIC a JPG gratis",
        "sub": "Las fotos HEIC del iPhone no se abren en todas partes. Conviértelas a JPG en segundos, muchas a la vez y en tu dispositivo.",
        "action": "Convertir a JPG",
        "accepts": "HEIC · HEIF",
        "faq": [
          {
            "q": "¿Qué es un archivo HEIC?",
            "a": "HEIC es el formato de foto que usan los iPhone por defecto. Ocupa menos, pero muchos PC con Windows, móviles Android y webs no lo abren; JPG funciona en todas partes."
          },
          {
            "q": "¿Pierdo calidad al convertir HEIC a JPG?",
            "a": "Con calidad 90 o más la diferencia es invisible. Puedes poner calidad 100 para el mejor resultado."
          }
        ]
      },
      "pngToJpg": {
        "name": "PNG a JPG",
        "desc": "Convierte imágenes PNG en archivos JPG más ligeros.",
        "title": "Convertir PNG a JPG Gratis — PNG a JPEG Online",
        "meta": "Convierte PNG a JPG online gratis. Haz tus PNG más ligeros como JPEG, elige la calidad y el color de fondo. Conversión por lotes, sin registro ni subidas.",
        "h1": "Convertir PNG a JPG gratis",
        "sub": "Para fotos, los JPG pesan mucho menos que los PNG. Elige la calidad y el color de fondo para las zonas transparentes.",
        "action": "Convertir a JPG",
        "accepts": "PNG",
        "faq": [
          {
            "q": "¿Qué pasa con las zonas transparentes?",
            "a": "JPG no admite transparencia, así que esas zonas se rellenan con el color de fondo que elijas (blanco por defecto)."
          },
          {
            "q": "¿Por qué convertir PNG a JPG?",
            "a": "En fotos, un JPG suele pesar de 5 a 10 veces menos que un PNG, así que se sube, se envía y carga en webs más rápido."
          }
        ]
      },
      "webpToJpg": {
        "name": "WebP a JPG",
        "desc": "Convierte imágenes WebP a JPG que abre cualquier app.",
        "title": "Convertir WebP a JPG Gratis — Imágenes WebP a JPG Online",
        "meta": "Convierte WebP a JPG online gratis. Pasa las imágenes WebP guardadas de webs a JPG que se abren en cualquier app. Conversión por lotes, sin registro ni subidas.",
        "h1": "Convertir WebP a JPG gratis",
        "sub": "¿Guardaste una imagen de una web y es WebP? Conviértela a JPG para abrirla en cualquier app o editor.",
        "action": "Convertir a JPG",
        "accepts": "WebP",
        "faq": [
          {
            "q": "¿Por qué las imágenes de las webs se guardan como WebP?",
            "a": "Muchas webs usan WebP porque carga rápido. Pero algunas apps, impresoras y programas antiguos no lo abren, por eso JPG es más seguro para compartir."
          },
          {
            "q": "¿Puedo convertir muchos WebP a la vez?",
            "a": "Sí. Añade todas tus imágenes WebP y descarga los JPG uno a uno o juntos en un ZIP."
          }
        ]
      },
      "jpgToPng": {
        "name": "JPG a PNG",
        "desc": "Convierte fotos JPG en imágenes PNG sin pérdida.",
        "title": "Convertir JPG a PNG Gratis — JPEG a PNG Online",
        "meta": "Convierte JPG a PNG online gratis. Pasa fotos JPEG a imágenes PNG sin pérdida en segundos. Conversión por lotes, sin registro, sin subidas y sin marca de agua.",
        "h1": "Convertir JPG a PNG gratis",
        "sub": "Convierte fotos JPEG en PNG sin pérdida, ideal para editar, herramientas de diseño y formularios que piden PNG.",
        "action": "Convertir a PNG",
        "accepts": "JPG · JPEG",
        "faq": [
          {
            "q": "¿El PNG tendrá fondo transparente?",
            "a": "No. Un JPG no tiene transparencia, así que el PNG conserva el mismo fondo. Solo cambia el formato del archivo."
          },
          {
            "q": "¿Por qué el PNG pesa más que mi JPG?",
            "a": "PNG no tiene pérdida y guarda cada píxel exacto. Es ideal para editar, pero los archivos pesan más que un JPG."
          }
        ]
      },
      "jpgToWebp": {
        "name": "Convertir a WebP",
        "desc": "Convierte JPG y PNG en archivos WebP ligeros para webs.",
        "title": "Convertir JPG a WebP Gratis — Imágenes a WebP Online",
        "meta": "Convierte JPG y PNG a WebP online gratis. Imágenes hasta un 30% más ligeras para webs más rápidas y mejor SEO. Conversión por lotes, sin registro ni subidas.",
        "h1": "Convertir imágenes a WebP gratis",
        "sub": "Las imágenes WebP pesan menos que JPG y PNG con la misma calidad, perfectas para webs y tiendas online rápidas.",
        "action": "Convertir a WebP",
        "accepts": "JPG · PNG · HEIC",
        "faq": [
          {
            "q": "¿Por qué usar WebP en mi web?",
            "a": "Un WebP suele pesar entre un 25 y un 35% menos que un JPG con la misma calidad, así que las páginas cargan más rápido, lo que ayuda a visitantes y a Google."
          },
          {
            "q": "¿WebP mantiene la transparencia?",
            "a": "Sí. Las imágenes PNG transparentes siguen siéndolo al convertirlas a WebP."
          }
        ]
      },
      "jpgToPdf": {
        "name": "JPG a PDF",
        "desc": "Convierte fotos y escaneos en un solo PDF.",
        "title": "Convertir JPG a PDF Gratis — Imágenes a PDF Online",
        "meta": "Convierte imágenes JPG, PNG y HEIC a PDF online gratis. Une muchas fotos en un PDF, elige A4 o Carta y márgenes. Sin registro, sin subidas y sin marca de agua.",
        "h1": "Convertir JPG a PDF gratis",
        "sub": "Une fotos, escaneos y capturas en un solo PDF. Cambia el orden, elige el tamaño de página y descarga al instante.",
        "action": "Crear PDF",
        "accepts": "JPG · PNG · WebP · HEIC",
        "faq": [
          {
            "q": "¿Puedo poner muchas imágenes en un PDF?",
            "a": "Sí. Añade todas tus imágenes, usa las flechas para ordenarlas y cada imagen será una página del PDF."
          },
          {
            "q": "¿Qué tamaño de página elijo?",
            "a": "A4 es el estándar en la mayoría de países y Carta (Letter) en EE. UU. y Canadá. \"Ajustar a imagen\" hace cada página del tamaño exacto de su foto."
          }
        ]
      },
      "mergePdf": {
        "name": "Unir PDF",
        "desc": "Combina varios PDF en uno, en el orden que quieras.",
        "title": "Unir PDF Gratis — Combinar Archivos PDF Online en Segundos",
        "meta": "Une archivos PDF online gratis. Combina varios PDF en un solo documento en el orden que quieras. Sin registro, sin subidas, sin marca de agua y sin límite.",
        "h1": "Unir archivos PDF gratis",
        "sub": "Combina contratos, facturas y documentos en un solo PDF. Añade tus archivos, ordénalos y descarga.",
        "action": "Unir PDF",
        "accepts": "PDF",
        "faq": [
          {
            "q": "¿Cómo cambio el orden de los PDF?",
            "a": "Usa las flechas arriba y abajo junto a cada archivo. Las páginas se unen de arriba a abajo."
          },
          {
            "q": "¿Hay límite de archivos?",
            "a": "No hay un límite fijo. Los archivos muy grandes dependen de la memoria de tu dispositivo, pero docenas de PDF normales funcionan bien."
          }
        ]
      },
      "pdfToJpg": {
        "name": "PDF a JPG",
        "desc": "Convierte cada página del PDF en una imagen de alta calidad.",
        "title": "Convertir PDF a JPG Gratis — Páginas PDF a Imágenes Online",
        "meta": "Convierte PDF a JPG o PNG online gratis. Cada página en una imagen de alta calidad, elige páginas y resolución, descarga en ZIP. Sin registro ni subidas.",
        "h1": "Convertir PDF a JPG gratis",
        "sub": "Guarda las páginas del PDF como imágenes JPG o PNG: todas o solo las que elijas, en alta resolución.",
        "action": "Convertir a imágenes",
        "accepts": "PDF",
        "faq": [
          {
            "q": "¿Puedo convertir solo algunas páginas?",
            "a": "Sí. Escribe las páginas que quieras, por ejemplo 1-3, 5. Déjalo vacío para convertir todas."
          },
          {
            "q": "¿Qué calidad elijo?",
            "a": "\"Alta\" es lo bastante nítida para casi todo. Elige \"Muy alta\" para imprimir o textos pequeños; los archivos pesarán más."
          }
        ]
      },
      "splitPdf": {
        "name": "Dividir PDF",
        "desc": "Extrae páginas o divide un PDF en archivos separados.",
        "title": "Dividir PDF Gratis — Extraer Páginas de un PDF Online",
        "meta": "Divide PDF online gratis. Extrae las páginas que necesitas en un nuevo PDF o separa cada página en su propio archivo. Sin registro, sin subidas y sin marca de agua.",
        "h1": "Dividir PDF gratis",
        "sub": "Saca las páginas que necesitas o divide un PDF en un archivo por página. Rápido, gratis y privado.",
        "action": "Dividir PDF",
        "accepts": "PDF",
        "faq": [
          {
            "q": "¿Cómo extraigo páginas concretas?",
            "a": "Elige \"Elegir páginas\" y escribe las que quieras, como 1-3, 5. Se guardan en un nuevo PDF en ese orden."
          },
          {
            "q": "¿Dividir cambia la calidad?",
            "a": "No. Las páginas se copian tal cual: el texto, las imágenes y los enlaces no cambian."
          }
        ]
      }
    }
  },
  footer: { tagline: "Herramientas online gratis que respetan tu privacidad.", privacy: "Privacidad", terms: "Términos", rights: "Todos los derechos reservados.", madeFree: "Gratis para siempre. Sin registro." },
};

export default es;
