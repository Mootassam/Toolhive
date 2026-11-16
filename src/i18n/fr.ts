import type { Dict } from "./en";

const fr: Dict = {
  nav: { generator: "Générateur QR", scanner: "Scanner QR", bulk: "QR en masse", barcode: "Code-barres", types: "Types de QR", language: "Langue", theme: "Thème" },
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
  footer: { tagline: "Des outils en ligne gratuits qui respectent votre vie privée.", privacy: "Confidentialité", terms: "Conditions", rights: "Tous droits réservés.", madeFree: "Gratuit pour toujours. Sans inscription." },
};

export default fr;
