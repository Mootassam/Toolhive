import type { Dict } from "./en";

const fr: Dict = {
  nav: { generator: "Générateur QR", scanner: "Scanner QR", bulk: "QR en masse", barcode: "Code-barres", tools: "Tous les outils", types: "Types de QR", language: "Langue", theme: "Thème" },
  home: {
    title: "Générateur de QR Code Gratuit avec Logo — Sans inscription, n'expire jamais",
    meta: "Créez des QR codes personnalisés gratuitement : logo, couleurs, dégradés, cadres, export SVG et PDF, WiFi, vCard, WhatsApp et plus. Sans inscription, sans filigrane, n'expirent jamais.",
    badge: "100 % gratuit · Sans inscription · Sans filigrane · N'expire jamais",
    h1a: "Le générateur de QR code gratuit",
    h1b: "qui ne s'arrête jamais de fonctionner",
    sub: "Toutes les fonctions « premium » que les autres font payer — logos, cadres, dégradés, SVG/PDF, en masse — gratuites pour toujours. Créé dans votre navigateur, privé par conception.",
  },
  type: {
    title: "Générateur de QR Code {name} — Gratuit, personnalisé, sans expiration",
    h1: "Générateur de QR code {name} gratuit",
    meta: "Créez un QR code {name} gratuitement. {desc} Ajoutez votre logo, vos couleurs et un cadre, téléchargez en PNG, SVG ou PDF. Sans inscription, n'expire jamais.",
  },
  types: {
    url: { name: "URL", desc: "Ouvre n'importe quel site ou lien dès le scan." },
    text: { name: "Texte", desc: "Affiche un message texte, fonctionne hors ligne." },
    wifi: { name: "WiFi", desc: "Vos invités se connectent au WiFi sans taper le mot de passe." },
    vcard: { name: "vCard", desc: "Partagez votre carte de visite — enregistrée en un geste." },
    email: { name: "E-mail", desc: "Ouvre un e-mail prêt à envoyer avec adresse, objet et message." },
    sms: { name: "SMS", desc: "Ouvre un SMS pré-rédigé vers votre numéro." },
    phone: { name: "Téléphone", desc: "Appelez un numéro en un seul scan." },
    whatsapp: { name: "WhatsApp", desc: "Démarre une discussion WhatsApp avec vous, message optionnel." },
    location: { name: "Localisation", desc: "Ouvre un lieu ou des coordonnées GPS dans Google Maps." },
    event: { name: "Événement", desc: "Ajoute un événement au calendrier avec date, heure et lieu." },
    social: { name: "Réseaux sociaux", desc: "Lien vers votre Instagram, TikTok, Facebook, YouTube et plus." },
    upi: { name: "Paiement UPI", desc: "Recevez des paiements UPI en Inde via GPay, PhonePe, Paytm." },
    crypto: { name: "Crypto", desc: "Recevez Bitcoin, Ethereum, USDT et d'autres cryptos." },
    paypal: { name: "PayPal", desc: "Soyez payé via votre lien PayPal.me, montant optionnel." },
  },
  f: {
    url: "URL du site", text: "Votre texte", ssid: "Nom du réseau (SSID)", password: "Mot de passe", encryption: "Sécurité",
    noPassword: "Sans mot de passe", hiddenNetwork: "Réseau masqué", firstName: "Prénom", lastName: "Nom",
    mobile: "Mobile", workPhone: "Téléphone pro", email: "E-mail", website: "Site web", company: "Entreprise", jobTitle: "Poste",
    street: "Rue", city: "Ville", zip: "Code postal", country: "Pays", note: "Note", emailTo: "Envoyer à (e-mail)",
    subject: "Objet", message: "Message", phone: "Numéro de téléphone", whatsappNumber: "Numéro WhatsApp (avec indicatif)",
    prefilledMessage: "Message pré-rempli (optionnel)", addressOrPlace: "Adresse ou nom du lieu", latitude: "Latitude",
    longitude: "Longitude", eventTitle: "Titre de l'événement", start: "Début", end: "Fin", location: "Lieu", description: "Description",
    platform: "Plateforme", usernameOrLink: "Nom d'utilisateur ou lien du profil", upiId: "Identifiant UPI", payeeName: "Nom du bénéficiaire",
    amountOptional: "Montant (optionnel)", coin: "Monnaie", walletAddress: "Adresse du portefeuille", paypalMeUser: "Nom PayPal.me",
    currency: "Devise",
  },
  ui: {
    step1: "1. Contenu", step2: "2. Design", step3: "3. Télécharger",
    templates: "Modèles", shapes: "Formes", colors: "Couleurs", logo: "Logo", frame: "Cadre", advanced: "Avancé",
    dots: "Points", eyeFrame: "Cadre des coins", eyeBall: "Point des coins", foreground: "Couleur des points", second: "Deuxième couleur",
    gradient: "Dégradé", none: "Aucun", linear: "Linéaire", radial: "Radial", angle: "Angle", eyeColor: "Couleur des coins",
    sameAsDots: "Comme les points", background: "Fond", transparent: "Transparent",
    uploadLogo: "Importer un logo", removeLogo: "Retirer", logoSize: "Taille du logo", clearBehindLogo: "Effacer les points derrière le logo",
    orPickIcon: "Ou choisissez une icône", frameText: "Texte du cadre", frameColor: "Couleur du cadre", textColor: "Couleur du texte",
    ecc: "Correction d'erreurs", eccL: "Faible 7 %", eccM: "Moyenne 15 %", eccQ: "Haute 25 %", eccH: "Max 30 %", margin: "Marge",
    size: "Taille", download: "Télécharger", copy: "Copier l'image", copied: "Copié !", print: "Imprimer", reset: "Réinitialiser",
    scannable: "Test réussi — ce code fonctionne", notScannable: "Test échoué — augmentez le contraste ou réduisez le logo",
    checking: "Test du scan…", lowContrast: "Contraste faible : des points foncés sur fond clair se lisent mieux.",
    inverted: "Points clairs sur fond foncé — certains anciens lecteurs ne le lisent pas.",
    enterContent: "Remplissez le contenu pour créer votre QR code", neverExpires: "Code statique — fonctionne pour toujours, sans compte",
    vectorHint: "SVG et PDF sont vectoriels — parfaits pour imprimer à toute taille.", saveDesign: "Enregistrer", savedDesigns: "Mes designs enregistrés",
    load: "Charger", del: "Supprimer", noneSaved: "Rien d'enregistré — vos designs restent sur cet appareil.", privacy: "Vos données ne quittent jamais votre navigateur.",
    allTypes: "Tous les types de QR code",
    tooLong: "Trop de contenu pour un QR code — raccourcissez-le.",
  },
  features: {
    title: "Tout ce que les sites QR font payer — gratuit",
    items: [
      { t: "N'expire jamais", d: "Les QR codes statiques contiennent vos données. Aucun essai qui désactive vos codes imprimés." },
      { t: "Logo et couleurs de marque", d: "Importez un logo, choisissez couleurs et dégradés, 9 styles de points et 10 de coins." },
      { t: "Cadres avec appel à l'action", d: "Ajoutez un cadre « Scannez-moi » en 5 styles avec votre texte et vos couleurs." },
      { t: "Prêt pour l'impression", d: "PNG jusqu'à 4096 px, SVG vectoriel, PDF, JPG et WebP. Jamais de filigrane." },
      { t: "Génération en masse", d: "Créez des centaines de QR codes depuis une liste ou un CSV et téléchargez un ZIP." },
      { t: "Privé et instantané", d: "Tout fonctionne dans votre navigateur. Rien n'est envoyé, stocké ou suivi." },
    ],
  },
  compare: {
    title: "{brand} vs. les générateurs QR « gratuits » habituels",
    feature: "Fonction", us: "{brand}", them: "Autres",
    rows: ["Sans inscription", "Les codes n'expirent jamais", "Import de logo", "Export SVG / PDF", "Sans filigrane", "Générateur en masse", "Cadres avec texte", "Scans illimités"],
    themVals: ["Souvent obligatoire", "L'essai finit après 7–14 jours", "Offre payante", "Offre payante", "Parfois", "Offre payante", "Limité", "Scans limités"],
  },
  howto: {
    title: "Créer un QR code en 3 étapes",
    steps: [
      { t: "Choisissez le type et le contenu", d: "Collez un lien ou remplissez WiFi, contact, WhatsApp, paiement et plus." },
      { t: "Personnalisez-le", d: "Choisissez un modèle ou modifiez points, coins, couleurs, ajoutez logo et cadre." },
      { t: "Téléchargez et utilisez", d: "Nous testons le scan ; téléchargez en PNG, SVG ou PDF puis imprimez ou partagez." },
    ],
  },
  faq: {
    title: "Questions fréquentes",
    items: [
      { q: "Ce générateur de QR code est-il vraiment gratuit ?", a: "Oui. Toutes les fonctions sont gratuites, sans inscription, sans essai et sans filigrane. Usage personnel et commercial autorisé." },
      { q: "Les QR codes expirent-ils ?", a: "Jamais. Ce sont des QR codes statiques : le contenu est dans le code lui-même, il fonctionne pour toujours — même si ce site disparaissait." },
      { q: "Puis-je ajouter mon logo ?", a: "Oui. Importez un logo PNG, JPG ou SVG. La correction d'erreurs est augmentée automatiquement et un test de scan est fait avant le téléchargement." },
      { q: "Quel format pour l'impression ?", a: "SVG ou PDF. Ce sont des fichiers vectoriels, nets sur cartes de visite, flyers, menus et grandes affiches." },
      { q: "Y a-t-il une limite de scans ou de codes ?", a: "Aucune limite. Créez autant de QR codes que vous voulez, scannables à l'infini." },
      { q: "Mes données sont-elles en sécurité ?", a: "Vos QR codes sont générés dans votre navigateur. Nous n'envoyons, ne stockons et ne voyons pas ce que vous tapez." },
      { q: "Puis-je modifier un QR code après impression ?", a: "Un code statique ne change pas une fois imprimé. Astuce : pointez-le vers une page que vous contrôlez et modifiez cette page." },
      { q: "Comment scanner un QR code ?", a: "Ouvrez l'appareil photo du téléphone et visez le code, ou utilisez notre scanner QR en ligne gratuit avec webcam ou image." },
    ],
  },
  scanner: {
    title: "Scanner de QR Code en Ligne Gratuit — Caméra ou image",
    meta: "Scannez des QR codes en ligne gratuitement avec la caméra ou une image. Fonctionne sur mobile et ordinateur, rien n'est envoyé.",
    h1: "Scanner de QR code en ligne gratuit",
    sub: "Utilisez la caméra ou importez une capture. Le décodage se fait sur votre appareil — rien n'est envoyé.",
    camera: "Scanner avec la caméra", stop: "Arrêter la caméra", upload: "Importer une image", drop: "ou déposez / collez une image ici",
    result: "Résultat", open: "Ouvrir le lien", copy: "Copier", copied: "Copié !", notFound: "Aucun QR code trouvé dans cette image.",
    noCamera: "Caméra indisponible. Autorisez l'accès ou importez une image.", history: "Historique", clear: "Effacer",
    wifiJoin: "Réseau WiFi", makeOwn: "Créez votre propre QR code",
  },
  bulk: {
    title: "Générateur de QR Code en Masse — Des centaines gratuits, ZIP",
    meta: "Générez des centaines de QR codes d'un coup depuis une liste ou un CSV. Couleurs et logo personnalisés, téléchargement PNG ou SVG en ZIP. Gratuit, sans inscription.",
    h1: "Générateur de QR code en masse gratuit",
    sub: "Un lien ou texte par ligne — ou importez un CSV. Chaque code reçoit votre design. Téléchargez tout en ZIP.",
    input: "Vos données (une par ligne)", csv: "Importer CSV / TXT", csvHint: "2e colonne optionnelle = nom du fichier : https://site.com/a, table-1",
    count: "{n} QR codes", format: "Format", generate: "Générer le ZIP", working: "Création {i} sur {n}…", done: "Terminé ! Votre ZIP se télécharge.",
    max: "Jusqu'à 1 000 codes par lot.",
  },
  legal: {
    privacyTitle: "Politique de confidentialité",
    privacy: [
      "Les QR codes sont créés entièrement dans votre navigateur. Textes, liens, contacts, mots de passe WiFi et images saisis ne sont pas envoyés à nos serveurs.",
      "Les designs enregistrés et l'historique de scan restent uniquement dans le stockage local de votre navigateur. Vous pouvez les supprimer à tout moment.",
      "Nous utilisons une mesure d'audience sans cookies et respectueuse de la vie privée (Vercel Web Analytics). Nous pourrions afficher de la publicité à l'avenir ; les partenaires publicitaires pourraient alors utiliser des cookies et cette politique sera mise à jour.",
      "Contact : {email}",
    ],
    termsTitle: "Conditions d'utilisation",
    terms: [
      "Ce service est gratuit et fourni « tel quel », sans garantie. Testez toujours un QR code avant de l'imprimer en grande quantité.",
      "Vous pouvez utiliser les QR codes générés à toute fin personnelle ou commerciale. Vous êtes responsable du contenu encodé.",
      "N'utilisez pas ce service pour créer des codes menant à du contenu illégal, des logiciels malveillants ou du phishing.",
    ],
  },
  barcode: {
    "title": "Générateur de Code-Barres Gratuit — EAN-13, UPC, Code 128 | PNG, SVG, PDF",
    "meta": "Créez des codes-barres en ligne gratuitement : EAN-13, UPC-A, Code 128, Code 39, ITF-14 et plus. Taille et couleurs personnalisées, téléchargement PNG, SVG ou PDF. Sans inscription, sans filigrane.",
    "h1": "Générateur de code-barres gratuit",
    "sub": "EAN, UPC, Code 128 et plus pour vos produits, expéditions et stocks. Prêt à imprimer, sans inscription, sans filigrane.",
    "type": "Type de code-barres",
    "data": "Données du code",
    "label": "Texte sous le code (facultatif)",
    "showText": "Afficher le texte",
    "hideText": "Masquer le texte",
    "barWidth": "Largeur des barres",
    "height": "Hauteur",
    "fontSize": "Taille du texte",
    "margin": "Marge",
    "barColor": "Couleur des barres",
    "fileType": "Type de fichier",
    "example": "Utiliser un exemple",
    "invalid": "Ces données ne conviennent pas à {name}.",
    "hints": {
      "CODE128": "Lettres, chiffres et symboles. Le code le plus utilisé pour l'expédition et les stocks.",
      "EAN13": "12 ou 13 chiffres. Produits de commerce dans le monde entier — saisissez 12 chiffres, on ajoute la clé de contrôle.",
      "UPC": "11 ou 12 chiffres. Produits de commerce aux États-Unis et au Canada.",
      "EAN8": "7 ou 8 chiffres. Petits emballages.",
      "UPCE": "6 ou 8 chiffres. UPC court pour petits articles.",
      "CODE39": "Majuscules, chiffres, espace et - . $ / + %. Industrie et badges.",
      "ITF14": "13 ou 14 chiffres. Cartons d'expédition et palettes.",
      "codabar": "Chiffres et - $ : / . + avec A, B, C ou D au début et à la fin. Bibliothèques et banques du sang.",
      "MSI": "Chiffres uniquement. Rayonnages d'entrepôt et inventaire.",
      "pharmacode": "Un nombre de 3 à 131070. Emballages pharmaceutiques."
    },
    "faq": [
      {
        "q": "Quel type de code-barres choisir ?",
        "a": "Pour les produits vendus en magasin, utilisez EAN-13 (monde) ou UPC-A (États-Unis et Canada). Pour les étiquettes d'expédition, les stocks et les codes internes, utilisez Code 128 : il accepte lettres et chiffres."
      },
      {
        "q": "Puis-je les utiliser gratuitement à des fins commerciales ?",
        "a": "Oui. Téléchargez et imprimez-en autant que nécessaire, pour tout usage, sans filigrane ni inscription."
      },
      {
        "q": "Ai-je besoin d'un numéro GS1 pour vendre en magasin ?",
        "a": "La plupart des magasins exigent des numéros EAN/UPC enregistrés auprès de GS1. Cet outil crée l'image du code-barres ; il ne fournit pas de numéro de produit officiel."
      },
      {
        "q": "Quel format est le meilleur pour l'impression ?",
        "a": "SVG ou PDF. Ce sont des fichiers vectoriels : les barres restent nettes à toutes les tailles, ce qui compte pour les lecteurs."
      },
      {
        "q": "Pourquoi mon code-barres ne se lit pas ?",
        "a": "Utilisez des barres foncées sur fond clair, ne l'imprimez pas trop petit et gardez la marge blanche autour. EAN et UPC exigent une clé de contrôle correcte : saisissez 12 chiffres pour un EAN-13 et nous la calculons."
      }
    ]
  },
  tools: {
    "hubTitle": "Outils en Ligne Gratuits — Image, PDF, QR Code et Code-Barres",
    "hubMeta": "Outils en ligne gratuits qui fonctionnent dans votre navigateur : compresser et redimensionner des images, HEIC en JPG, JPG en PDF, fusionner et diviser des PDF, QR codes et codes-barres. Sans inscription, sans envoi.",
    "hubH1": "Tous les outils gratuits",
    "hubSub": "Images, PDF, QR codes et codes-barres — rapide, gratuit et privé. Vos fichiers ne quittent jamais votre appareil.",
    "badge": "100 % gratuit · Sans inscription · Vos fichiers restent sur votre appareil",
    "more": "Plus d'outils gratuits",
    "groups": {
      "qr": "QR code et code-barres",
      "image": "Outils image",
      "pdf": "Outils PDF"
    },
    "ui": {
      "chooseFiles": "Choisir des fichiers",
      "chooseFile": "Choisir un fichier",
      "dropHint": "ou glissez-les ici — vous pouvez aussi coller avec Ctrl+V",
      "wrongType": "Certains fichiers ont été ignorés car cet outil ne les prend pas en charge.",
      "files": "{n} fichiers",
      "pages": "{n} pages",
      "clear": "Tout effacer",
      "remove": "Retirer",
      "download": "Télécharger",
      "downloadAll": "Tout télécharger (ZIP)",
      "settings": "Réglages",
      "working": "Traitement {i} sur {n}…",
      "done": "Terminé !",
      "kept": "Déjà optimisée — original conservé",
      "error": "Impossible de lire ce fichier.",
      "noWebp": "Votre navigateur ne peut pas créer de fichiers WebP. Essayez Chrome, Edge ou Firefox.",
      "encrypted": "Ce PDF est protégé par mot de passe ou endommagé.",
      "bySize": "Par taille",
      "byPercent": "Par pourcentage",
      "width": "Largeur",
      "height": "Hauteur",
      "keepRatio": "Conserver les proportions",
      "percent": "Taille",
      "maxWidth": "Largeur max",
      "original": "Originale",
      "format": "Format de sortie",
      "auto": "Auto",
      "sameFormat": "Identique",
      "quality": "Qualité",
      "background": "Fond",
      "pageSize": "Format de page",
      "fitImage": "Adapter à l'image",
      "margin": "Marge",
      "none": "Aucune",
      "small": "Petite",
      "large": "Grande",
      "resolution": "Qualité d'image",
      "normal": "Normale",
      "high": "Haute",
      "veryHigh": "Très haute",
      "splitEach": "Chaque page",
      "extract": "Choisir les pages",
      "pagesOptional": "Pages (vide = toutes)",
      "pagesToExtract": "Pages à extraire",
      "rangesHint": "Exemple : 1-3, 5, 8-10",
      "addOneMore": "Ajoutez au moins 2 fichiers PDF à fusionner.",
      "noPages": "Aucune page ne correspond — vérifiez les numéros.",
      "moveUp": "Monter",
      "moveDown": "Descendre",
      "privacy": "Vos fichiers sont traités sur votre appareil et jamais envoyés."
    },
    "faqCommon": [
      {
        "q": "Est-ce vraiment gratuit ?",
        "a": "Oui. Tous les outils sont gratuits, sans inscription, sans filigrane et sans limite quotidienne."
      },
      {
        "q": "Mes fichiers sont-ils en sécurité ?",
        "a": "Vos fichiers ne quittent jamais votre appareil. Tout est traité dans votre navigateur, rien n'est envoyé sur un serveur."
      }
    ],
    "items": {
      "compressImage": {
        "name": "Compresser une image",
        "desc": "Réduisez le poids des JPG, PNG et WebP sans perte visible.",
        "title": "Compresser une Image en Ligne Gratuit — Réduire JPG, PNG et WebP",
        "meta": "Compressez vos images en ligne gratuitement. Réduisez le poids des JPG, PNG, WebP et HEIC en quelques secondes sans perte de qualité. Par lots, sans inscription, sans envoi.",
        "h1": "Compresser des images gratuitement",
        "sub": "Allégez vos photos pour le web, l'e-mail et WhatsApp. Compressez plusieurs images d'un coup — rien n'est envoyé.",
        "action": "Compresser",
        "accepts": "JPG · PNG · WebP · HEIC",
        "faq": [
          {
            "q": "De combien mes images seront-elles allégées ?",
            "a": "En général 50 à 80 % plus légères pour des photos en qualité 70, sans différence visible. Baissez la qualité ou fixez une largeur max pour aller plus loin."
          },
          {
            "q": "Puis-je compresser des PNG ?",
            "a": "Oui. En mode Auto, nous essayons PNG et un format moderne et gardons le plus léger. Les images transparentes restent transparentes."
          }
        ]
      },
      "resizeImage": {
        "name": "Redimensionner une image",
        "desc": "Changez largeur et hauteur en pixels ou en pourcentage.",
        "title": "Redimensionner une Image en Ligne Gratuit — Pixels ou Pourcentage",
        "meta": "Redimensionnez vos images en ligne gratuitement. Changez la largeur et la hauteur des JPG, PNG et WebP en pixels ou en %, gardez les proportions, par lots. Sans inscription, sans envoi.",
        "h1": "Redimensionner des images gratuitement",
        "sub": "Choisissez une taille exacte en pixels ou un pourcentage. Redimensionnez plusieurs images à la fois pour les réseaux sociaux, sites et formulaires.",
        "action": "Redimensionner",
        "accepts": "JPG · PNG · WebP · HEIC",
        "faq": [
          {
            "q": "Comment redimensionner sans déformer ?",
            "a": "Laissez « Conserver les proportions » activé et indiquez seulement la largeur ou la hauteur — l'autre côté est calculé automatiquement."
          },
          {
            "q": "Puis-je redimensionner plusieurs images d'un coup ?",
            "a": "Oui. Ajoutez autant d'images que vous voulez ; elles reçoivent les mêmes réglages et se téléchargent dans un seul ZIP."
          }
        ]
      },
      "heicToJpg": {
        "name": "HEIC en JPG",
        "desc": "Convertissez les photos HEIC d'iPhone en JPG lisibles partout.",
        "title": "Convertir HEIC en JPG Gratuit — Photos iPhone en JPG en Ligne",
        "meta": "Convertissez HEIC en JPG en ligne gratuitement. Transformez les photos HEIC et HEIF d'iPhone en JPG lisibles sur Windows, Android et tous les sites. Par lots, sans envoi.",
        "h1": "Convertir HEIC en JPG gratuitement",
        "sub": "Les photos HEIC de l'iPhone ne s'ouvrent pas partout. Convertissez-les en JPG en quelques secondes — plusieurs à la fois, sur votre appareil.",
        "action": "Convertir en JPG",
        "accepts": "HEIC · HEIF",
        "faq": [
          {
            "q": "Qu'est-ce qu'un fichier HEIC ?",
            "a": "HEIC est le format photo par défaut des iPhone. Il prend moins de place, mais beaucoup de PC Windows, de téléphones Android et de sites ne l'ouvrent pas — le JPG marche partout."
          },
          {
            "q": "Perd-on en qualité en passant de HEIC à JPG ?",
            "a": "À partir de la qualité 90, la différence est invisible. Vous pouvez mettre 100 pour le meilleur résultat."
          }
        ]
      },
      "pngToJpg": {
        "name": "PNG en JPG",
        "desc": "Convertissez vos PNG en fichiers JPG plus légers.",
        "title": "Convertir PNG en JPG Gratuit — PNG en JPEG en Ligne",
        "meta": "Convertissez PNG en JPG en ligne gratuitement. Allégez vos PNG en JPEG, choisissez la qualité et la couleur de fond. Par lots, sans inscription, sans envoi.",
        "h1": "Convertir PNG en JPG gratuitement",
        "sub": "Pour les photos, le JPG est bien plus léger que le PNG. Choisissez la qualité et la couleur de fond des zones transparentes.",
        "action": "Convertir en JPG",
        "accepts": "PNG",
        "faq": [
          {
            "q": "Que deviennent les zones transparentes ?",
            "a": "Le JPG ne gère pas la transparence : ces zones sont remplies avec la couleur de fond choisie (blanc par défaut)."
          },
          {
            "q": "Pourquoi convertir un PNG en JPG ?",
            "a": "Pour une photo, un JPG est souvent 5 à 10 fois plus léger qu'un PNG : plus rapide à envoyer, partager et charger sur un site."
          }
        ]
      },
      "webpToJpg": {
        "name": "WebP en JPG",
        "desc": "Convertissez les images WebP en JPG lisibles par toutes les applis.",
        "title": "Convertir WebP en JPG Gratuit — Images WebP en Ligne",
        "meta": "Convertissez WebP en JPG en ligne gratuitement. Transformez les images WebP enregistrées depuis des sites en JPG lisibles partout. Par lots, sans inscription, sans envoi.",
        "h1": "Convertir WebP en JPG gratuitement",
        "sub": "Vous avez enregistré une image d'un site et c'est du WebP ? Convertissez-la en JPG pour l'ouvrir dans n'importe quelle appli.",
        "action": "Convertir en JPG",
        "accepts": "WebP",
        "faq": [
          {
            "q": "Pourquoi les images des sites sont-elles en WebP ?",
            "a": "Beaucoup de sites utilisent le WebP car il se charge vite. Mais certaines applis, imprimantes et anciens logiciels ne l'ouvrent pas : le JPG est plus sûr pour partager."
          },
          {
            "q": "Puis-je convertir plusieurs WebP à la fois ?",
            "a": "Oui. Ajoutez toutes vos images WebP et téléchargez les JPG un par un ou ensemble dans un ZIP."
          }
        ]
      },
      "jpgToPng": {
        "name": "JPG en PNG",
        "desc": "Convertissez vos photos JPG en images PNG sans perte.",
        "title": "Convertir JPG en PNG Gratuit — JPEG en PNG en Ligne",
        "meta": "Convertissez JPG en PNG en ligne gratuitement. Transformez vos photos JPEG en images PNG sans perte en quelques secondes. Par lots, sans inscription, sans envoi, sans filigrane.",
        "h1": "Convertir JPG en PNG gratuitement",
        "sub": "Transformez vos photos JPEG en PNG sans perte — idéal pour l'édition, les outils de design et les formulaires qui exigent du PNG.",
        "action": "Convertir en PNG",
        "accepts": "JPG · JPEG",
        "faq": [
          {
            "q": "Le PNG aura-t-il un fond transparent ?",
            "a": "Non — un JPG n'a pas de transparence, le PNG garde donc le même fond. Seul le format du fichier change."
          },
          {
            "q": "Pourquoi le PNG est-il plus lourd que mon JPG ?",
            "a": "Le PNG est sans perte et conserve chaque pixel exactement. Parfait pour l'édition, mais plus lourd qu'un JPG."
          }
        ]
      },
      "jpgToWebp": {
        "name": "Convertir en WebP",
        "desc": "Convertissez JPG et PNG en WebP légers pour le web.",
        "title": "Convertir JPG en WebP Gratuit — Images en WebP en Ligne",
        "meta": "Convertissez JPG et PNG en WebP en ligne gratuitement. Des images jusqu'à 30 % plus légères pour un site plus rapide et un meilleur SEO. Par lots, sans inscription, sans envoi.",
        "h1": "Convertir des images en WebP gratuitement",
        "sub": "Le WebP est plus léger que le JPG et le PNG à qualité égale — parfait pour des sites et boutiques en ligne rapides.",
        "action": "Convertir en WebP",
        "accepts": "JPG · PNG · HEIC",
        "faq": [
          {
            "q": "Pourquoi utiliser le WebP sur mon site ?",
            "a": "Un WebP est en général 25 à 35 % plus léger qu'un JPG à qualité égale : les pages se chargent plus vite, ce qui aide vos visiteurs et votre référencement Google."
          },
          {
            "q": "Le WebP garde-t-il la transparence ?",
            "a": "Oui. Les PNG transparents restent transparents une fois convertis en WebP."
          }
        ]
      },
      "jpgToPdf": {
        "name": "JPG en PDF",
        "desc": "Transformez photos et scans en un seul PDF.",
        "title": "Convertir JPG en PDF Gratuit — Images en PDF en Ligne",
        "meta": "Convertissez des images JPG, PNG et HEIC en PDF en ligne gratuitement. Réunissez plusieurs photos dans un PDF, choisissez A4 ou Letter et les marges. Sans inscription, sans envoi, sans filigrane.",
        "h1": "Convertir JPG en PDF gratuitement",
        "sub": "Réunissez photos, scans et captures d'écran dans un seul PDF. Changez l'ordre, choisissez le format de page et téléchargez aussitôt.",
        "action": "Créer le PDF",
        "accepts": "JPG · PNG · WebP · HEIC",
        "faq": [
          {
            "q": "Puis-je mettre plusieurs images dans un PDF ?",
            "a": "Oui. Ajoutez toutes vos images, utilisez les flèches pour les ordonner : chaque image devient une page du PDF."
          },
          {
            "q": "Quel format de page choisir ?",
            "a": "A4 est la norme en France et dans la plupart des pays, Letter aux États-Unis et au Canada. « Adapter à l'image » donne à chaque page la taille exacte de sa photo."
          }
        ]
      },
      "mergePdf": {
        "name": "Fusionner PDF",
        "desc": "Combinez plusieurs PDF en un seul, dans l'ordre voulu.",
        "title": "Fusionner PDF Gratuit — Combiner des Fichiers PDF en Ligne",
        "meta": "Fusionnez des fichiers PDF en ligne gratuitement. Combinez plusieurs PDF en un seul document dans l'ordre souhaité. Sans inscription, sans envoi, sans filigrane, sans limite.",
        "h1": "Fusionner des PDF gratuitement",
        "sub": "Réunissez contrats, factures et documents dans un seul PDF. Ajoutez vos fichiers, réglez l'ordre et téléchargez.",
        "action": "Fusionner",
        "accepts": "PDF",
        "faq": [
          {
            "q": "Comment changer l'ordre des PDF ?",
            "a": "Utilisez les flèches haut et bas à côté de chaque fichier. Les pages sont fusionnées de haut en bas."
          },
          {
            "q": "Y a-t-il une limite de fichiers ?",
            "a": "Pas de limite fixe. Les très gros fichiers dépendent de la mémoire de votre appareil, mais des dizaines de PDF normaux passent sans problème."
          }
        ]
      },
      "pdfToJpg": {
        "name": "PDF en JPG",
        "desc": "Transformez chaque page d'un PDF en image haute qualité.",
        "title": "Convertir PDF en JPG Gratuit — Pages PDF en Images en Ligne",
        "meta": "Convertissez PDF en JPG ou PNG en ligne gratuitement. Chaque page en image haute qualité, choix des pages et de la résolution, téléchargement en ZIP. Sans inscription, sans envoi.",
        "h1": "Convertir PDF en JPG gratuitement",
        "sub": "Enregistrez les pages d'un PDF en images JPG ou PNG — toutes ou seulement celles choisies, en haute résolution.",
        "action": "Convertir en images",
        "accepts": "PDF",
        "faq": [
          {
            "q": "Puis-je convertir seulement quelques pages ?",
            "a": "Oui. Indiquez les pages voulues, par exemple 1-3, 5. Laissez vide pour tout convertir."
          },
          {
            "q": "Quelle qualité choisir ?",
            "a": "« Haute » suffit pour la plupart des usages. Prenez « Très haute » pour l'impression ou les petits textes ; les fichiers seront plus lourds."
          }
        ]
      },
      "splitPdf": {
        "name": "Diviser PDF",
        "desc": "Extrayez des pages ou séparez un PDF en plusieurs fichiers.",
        "title": "Diviser PDF Gratuit — Extraire des Pages d'un PDF en Ligne",
        "meta": "Divisez un PDF en ligne gratuitement. Extrayez les pages utiles dans un nouveau PDF ou séparez chaque page dans son propre fichier. Sans inscription, sans envoi, sans filigrane.",
        "h1": "Diviser un PDF gratuitement",
        "sub": "Récupérez les pages dont vous avez besoin, ou divisez un PDF en un fichier par page. Rapide, gratuit et privé.",
        "action": "Diviser",
        "accepts": "PDF",
        "faq": [
          {
            "q": "Comment extraire des pages précises ?",
            "a": "Choisissez « Choisir les pages » et indiquez celles voulues, comme 1-3, 5. Elles sont enregistrées dans un nouveau PDF dans cet ordre."
          },
          {
            "q": "La division change-t-elle la qualité ?",
            "a": "Non. Les pages sont copiées telles quelles — textes, images et liens restent identiques."
          }
        ]
      }
    }
  },
  footer: { tagline: "Des outils en ligne gratuits qui respectent votre vie privée.", privacy: "Confidentialité", terms: "Conditions", rights: "Tous droits réservés.", madeFree: "Gratuit pour toujours. Sans inscription." },
};

export default fr;
