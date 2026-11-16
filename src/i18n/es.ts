import type { Dict } from "./en";

const es: Dict = {
  nav: { generator: "Generador QR", scanner: "Lector QR", bulk: "QR masivo", barcode: "Código de barras", types: "Tipos de QR", language: "Idioma", theme: "Tema" },
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
  footer: { tagline: "Herramientas online gratis que respetan tu privacidad.", privacy: "Privacidad", terms: "Términos", rights: "Todos los derechos reservados.", madeFree: "Gratis para siempre. Sin registro." },
};

export default es;
