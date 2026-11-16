import type { Dict } from "./en";

const de: Dict = {
  nav: { generator: "QR-Generator", scanner: "QR-Scanner", bulk: "Massen-QR", barcode: "Barcode", types: "QR-Typen", language: "Sprache", theme: "Design" },
  home: {
    title: "Kostenloser QR-Code-Generator mit Logo — Ohne Anmeldung, läuft nie ab",
    meta: "Erstelle kostenlos individuelle QR-Codes: Logo, Farben, Verläufe, Rahmen, SVG- & PDF-Export, WLAN, vCard, WhatsApp und mehr. Ohne Anmeldung, ohne Wasserzeichen, läuft nie ab.",
    badge: "100 % kostenlos · Ohne Anmeldung · Ohne Wasserzeichen · Läuft nie ab",
    h1a: "Der kostenlose QR-Code-Generator,",
    h1b: "der niemals aufhört zu funktionieren",
    sub: "Alle „Premium“-Funktionen, für die andere Geld verlangen — Logos, Rahmen, Verläufe, SVG/PDF, Massenerstellung — für immer kostenlos. Direkt im Browser erstellt, privat von Grund auf.",
  },
  type: {
    title: "{name} QR-Code-Generator — Kostenlos, individuell, läuft nie ab",
    h1: "Kostenloser {name} QR-Code-Generator",
    meta: "Erstelle kostenlos einen {name} QR-Code. {desc} Logo, Farben und Rahmen hinzufügen, als PNG, SVG oder PDF herunterladen. Ohne Anmeldung, läuft nie ab.",
  },
  types: {
    url: { name: "URL", desc: "Öffnet beim Scannen jede Website oder jeden Link." },
    text: { name: "Text", desc: "Zeigt eine Textnachricht an, funktioniert offline." },
    wifi: { name: "WLAN", desc: "Gäste verbinden sich ohne Passwort-Eintippen mit deinem WLAN." },
    vcard: { name: "vCard", desc: "Teile deine Visitenkarte — mit einem Tipp im Handy gespeichert." },
    email: { name: "E-Mail", desc: "Öffnet eine fertige E-Mail mit Adresse, Betreff und Nachricht." },
    sms: { name: "SMS", desc: "Öffnet eine vorgeschriebene SMS an deine Nummer." },
    phone: { name: "Telefon", desc: "Ruft eine Nummer mit einem einzigen Scan an." },
    whatsapp: { name: "WhatsApp", desc: "Startet einen WhatsApp-Chat mit dir, optional mit Nachricht." },
    location: { name: "Standort", desc: "Öffnet einen Ort oder GPS-Koordinaten in Google Maps." },
    event: { name: "Termin", desc: "Fügt einen Termin mit Datum, Uhrzeit und Ort zum Kalender hinzu." },
    social: { name: "Social Media", desc: "Verlinke dein Instagram, TikTok, Facebook, YouTube und mehr." },
    upi: { name: "UPI-Zahlung", desc: "Empfange UPI-Zahlungen in Indien über GPay, PhonePe, Paytm." },
    crypto: { name: "Krypto", desc: "Empfange Bitcoin, Ethereum, USDT und andere Kryptowährungen." },
    paypal: { name: "PayPal", desc: "Werde über deinen PayPal.me-Link bezahlt, optional mit Betrag." },
  },
  f: {
    url: "Website-URL", text: "Dein Text", ssid: "Netzwerkname (SSID)", password: "Passwort", encryption: "Sicherheit",
    noPassword: "Kein Passwort", hiddenNetwork: "Verstecktes Netzwerk", firstName: "Vorname", lastName: "Nachname",
    mobile: "Mobil", workPhone: "Telefon geschäftlich", email: "E-Mail", website: "Website", company: "Firma", jobTitle: "Position",
    street: "Straße", city: "Stadt", zip: "PLZ", country: "Land", note: "Notiz", emailTo: "Senden an (E-Mail)",
    subject: "Betreff", message: "Nachricht", phone: "Telefonnummer", whatsappNumber: "WhatsApp-Nummer (mit Ländervorwahl)",
    prefilledMessage: "Vorausgefüllte Nachricht (optional)", addressOrPlace: "Adresse oder Ortsname", latitude: "Breitengrad",
    longitude: "Längengrad", eventTitle: "Titel des Termins", start: "Beginn", end: "Ende", location: "Ort", description: "Beschreibung",
    platform: "Plattform", usernameOrLink: "Benutzername oder Profil-Link", upiId: "UPI-ID", payeeName: "Name des Empfängers",
    amountOptional: "Betrag (optional)", coin: "Coin", walletAddress: "Wallet-Adresse", paypalMeUser: "PayPal.me-Name",
    currency: "Währung",
  },
  ui: {
    step1: "1. Inhalt", step2: "2. Design", step3: "3. Download",
    templates: "Vorlagen", shapes: "Formen", colors: "Farben", logo: "Logo", frame: "Rahmen", advanced: "Erweitert",
    dots: "Punkte", eyeFrame: "Eckrahmen", eyeBall: "Eckpunkt", foreground: "Punktfarbe", second: "Zweite Farbe",
    gradient: "Verlauf", none: "Keiner", linear: "Linear", radial: "Radial", angle: "Winkel", eyeColor: "Eckenfarbe",
    sameAsDots: "Wie Punkte", background: "Hintergrund", transparent: "Transparent",
    uploadLogo: "Logo hochladen", removeLogo: "Entfernen", logoSize: "Logogröße", clearBehindLogo: "Punkte hinter dem Logo entfernen",
    orPickIcon: "Oder ein Symbol wählen", frameText: "Rahmentext", frameColor: "Rahmenfarbe", textColor: "Textfarbe",
    ecc: "Fehlerkorrektur", eccL: "Niedrig 7 %", eccM: "Mittel 15 %", eccQ: "Hoch 25 %", eccH: "Max 30 %", margin: "Rand",
    size: "Größe", download: "Download", copy: "Bild kopieren", copied: "Kopiert!", print: "Drucken", reset: "Design zurücksetzen",
    scannable: "Scan-Test bestanden — dieser Code funktioniert", notScannable: "Scan-Test fehlgeschlagen — Kontrast erhöhen oder Logo verkleinern",
    checking: "Scan wird getestet…", lowContrast: "Geringer Kontrast: dunkle Punkte auf hellem Hintergrund scannen am besten.",
    inverted: "Helle Punkte auf dunklem Hintergrund — manche ältere Scanner lesen das nicht.",
    enterContent: "Fülle den Inhalt aus, um deinen QR-Code zu erstellen", neverExpires: "Statischer Code — funktioniert für immer, kein Konto nötig",
    vectorHint: "SVG & PDF sind Vektorformate — perfekt für den Druck in jeder Größe.", saveDesign: "Speichern", savedDesigns: "Meine gespeicherten Designs",
    load: "Laden", del: "Löschen", noneSaved: "Noch nichts gespeichert — deine Designs bleiben auf diesem Gerät.", privacy: "Deine Daten verlassen nie deinen Browser.",
    allTypes: "Alle QR-Code-Typen",
    tooLong: "Zu viel Inhalt für einen QR-Code — bitte kürzen.",
  },
  features: {
    title: "Alles, wofür QR-Seiten Geld verlangen — kostenlos",
    items: [
      { t: "Läuft nie ab", d: "Statische QR-Codes enthalten deine Daten direkt. Keine Testphase, die deine gedruckten Codes abschaltet." },
      { t: "Logo & Markenfarben", d: "Logo hochladen, Farben und Verläufe wählen, 9 Punkt- und 10 Eckstile." },
      { t: "Rahmen mit Call-to-Action", d: "Füge einen „Scan mich“-Rahmen in 5 Stilen mit eigenem Text und Farben hinzu." },
      { t: "Druckfertige Exporte", d: "PNG bis 4096 px, Vektor-SVG, PDF, JPG und WebP. Niemals Wasserzeichen." },
      { t: "Massenerstellung", d: "Erstelle Hunderte QR-Codes aus einer Liste oder CSV und lade sie als ZIP herunter." },
      { t: "Privat & sofort", d: "Alles läuft in deinem Browser. Nichts wird hochgeladen, gespeichert oder getrackt." },
    ],
  },
  compare: {
    title: "{brand} vs. typische „kostenlose“ QR-Generatoren",
    feature: "Funktion", us: "{brand}", them: "Andere",
    rows: ["Ohne Anmeldung", "Codes laufen nie ab", "Logo-Upload", "SVG- / PDF-Export", "Ohne Wasserzeichen", "Massen-Generator", "Rahmen mit Text", "Unbegrenzte Scans"],
    themVals: ["Oft Pflicht", "Test endet nach 7–14 Tagen", "Bezahlplan", "Bezahlplan", "Manchmal", "Bezahlplan", "Eingeschränkt", "Scan-Limits"],
  },
  howto: {
    title: "QR-Code in 3 Schritten erstellen",
    steps: [
      { t: "Typ wählen und Inhalt eingeben", d: "Link einfügen oder WLAN, Kontakt, WhatsApp, Zahlungsdaten und mehr ausfüllen." },
      { t: "Individuell gestalten", d: "Vorlage wählen oder Punkte, Ecken, Farben ändern, Logo und Rahmen hinzufügen." },
      { t: "Herunterladen und nutzen", d: "Wir testen den Scan; lade PNG, SVG oder PDF herunter und drucke oder teile ihn." },
    ],
  },
  faq: {
    title: "Häufige Fragen",
    items: [
      { q: "Ist dieser QR-Code-Generator wirklich kostenlos?", a: "Ja. Alle Funktionen sind kostenlos, ohne Anmeldung, ohne Testphase und ohne Wasserzeichen — auch für kommerzielle Projekte." },
      { q: "Laufen die QR-Codes ab?", a: "Nie. Es sind statische QR-Codes: Der Inhalt steckt im Code selbst, er funktioniert also für immer — selbst wenn diese Website verschwände." },
      { q: "Kann ich mein Logo einfügen?", a: "Ja. Lade ein PNG-, JPG- oder SVG-Logo hoch. Wir erhöhen automatisch die Fehlerkorrektur und machen vor dem Download einen Scan-Test." },
      { q: "Welches Format ist am besten für den Druck?", a: "SVG oder PDF. Das sind Vektordateien, die auf Visitenkarten, Flyern, Speisekarten und großen Plakaten scharf bleiben." },
      { q: "Gibt es ein Limit für Scans oder Codes?", a: "Keine Limits. Erstelle so viele QR-Codes wie du willst, unbegrenzt scanbar." },
      { q: "Sind meine Daten sicher?", a: "Deine QR-Codes werden in deinem eigenen Browser erzeugt. Wir laden nichts hoch, speichern nichts und sehen nicht, was du eingibst." },
      { q: "Kann ich einen QR-Code nach dem Druck ändern?", a: "Ein statischer Code ändert sich nach dem Druck nicht. Tipp: Lass ihn auf eine Seite zeigen, die du kontrollierst, und ändere diese Seite." },
      { q: "Wie scanne ich einen QR-Code?", a: "Öffne die Handykamera und richte sie auf den Code, oder nutze unseren kostenlosen Online-QR-Scanner mit Webcam oder Bild." },
    ],
  },
  scanner: {
    title: "Kostenloser Online-QR-Code-Scanner — Per Kamera oder Bild",
    meta: "Scanne QR-Codes kostenlos online mit deiner Kamera oder per Bild-Upload. Funktioniert auf Handy und PC, nichts wird hochgeladen.",
    h1: "Kostenloser Online-QR-Code-Scanner",
    sub: "Nutze deine Kamera oder lade einen Screenshot hoch. Das Dekodieren passiert auf deinem Gerät — nichts wird hochgeladen.",
    camera: "Mit Kamera scannen", stop: "Kamera stoppen", upload: "Bild hochladen", drop: "oder Bild hier ablegen / einfügen",
    result: "Ergebnis", open: "Link öffnen", copy: "Kopieren", copied: "Kopiert!", notFound: "In diesem Bild wurde kein QR-Code gefunden.",
    noCamera: "Kamera nicht verfügbar. Erlaube den Zugriff oder lade ein Bild hoch.", history: "Verlauf", clear: "Löschen",
    wifiJoin: "WLAN-Netzwerk", makeOwn: "Eigenen QR-Code erstellen",
  },
  bulk: {
    title: "Massen-QR-Code-Generator — Hunderte kostenlos, als ZIP",
    meta: "Erstelle Hunderte QR-Codes auf einmal aus einer Liste oder CSV. Eigene Farben und Logo, Download als PNG oder SVG im ZIP. Kostenlos, ohne Anmeldung.",
    h1: "Kostenloser Massen-QR-Code-Generator",
    sub: "Ein Link oder Text pro Zeile — oder lade eine CSV hoch. Jeder Code bekommt dein Design. Alles als ZIP herunterladen.",
    input: "Deine Daten (eine pro Zeile)", csv: "CSV / TXT hochladen", csvHint: "Optionale 2. Spalte = Dateiname: https://seite.de/a, tisch-1",
    count: "{n} QR-Codes", format: "Format", generate: "ZIP erstellen", working: "Erstelle {i} von {n}…", done: "Fertig! Dein ZIP wird heruntergeladen.",
    max: "Bis zu 1.000 Codes pro Durchgang.",
  },
  legal: {
    privacyTitle: "Datenschutzerklärung",
    privacy: [
      "QR-Codes werden vollständig in deinem Browser erstellt. Texte, Links, Kontakte, WLAN-Passwörter und Bilder, die du eingibst, werden nicht an unsere Server gesendet.",
      "Gespeicherte Designs und der Scan-Verlauf liegen nur im lokalen Speicher deines Browsers. Du kannst sie jederzeit löschen.",
      "Wir nutzen datenschutzfreundliche, cookielose Statistik (Vercel Web Analytics), um Seitenaufrufe zu zählen. Künftig zeigen wir eventuell Werbung; dann können Werbepartner Cookies verwenden und diese Erklärung wird aktualisiert.",
      "Kontakt: {email}",
    ],
    termsTitle: "Nutzungsbedingungen",
    terms: [
      "Dieser Dienst ist kostenlos und wird „wie besehen“ ohne Gewähr bereitgestellt. Teste einen QR-Code immer, bevor du ihn in großer Menge druckst.",
      "Du darfst erzeugte QR-Codes für jeden privaten oder kommerziellen Zweck nutzen. Du bist für den kodierten Inhalt verantwortlich.",
      "Nutze diesen Dienst nicht für Codes, die zu illegalen Inhalten, Malware oder Phishing führen.",
    ],
  },
  barcode: {
    "title": "Kostenloser Barcode-Generator — EAN-13, UPC, Code 128 | PNG, SVG, PDF",
    "meta": "Barcodes online kostenlos erstellen: EAN-13, UPC-A, Code 128, Code 39, ITF-14 und mehr. Größe und Farben anpassen, als PNG, SVG oder PDF herunterladen. Ohne Anmeldung, ohne Wasserzeichen.",
    "h1": "Kostenloser Barcode-Generator",
    "sub": "EAN, UPC, Code 128 und mehr für Produkte, Versand und Lager. Druckfertig, ohne Anmeldung, ohne Wasserzeichen.",
    "type": "Barcode-Typ",
    "data": "Barcode-Daten",
    "label": "Text unter dem Barcode (optional)",
    "showText": "Text anzeigen",
    "hideText": "Text ausblenden",
    "barWidth": "Strichbreite",
    "height": "Höhe",
    "fontSize": "Textgröße",
    "margin": "Rand",
    "barColor": "Strichfarbe",
    "fileType": "Dateityp",
    "example": "Beispiel verwenden",
    "invalid": "Diese Daten passen nicht zu {name}.",
    "hints": {
      "CODE128": "Buchstaben, Zahlen und Zeichen. Der meistgenutzte Barcode für Versand und Lager.",
      "EAN13": "12 oder 13 Ziffern. Handelsprodukte weltweit — gib 12 Ziffern ein, wir ergänzen die Prüfziffer.",
      "UPC": "11 oder 12 Ziffern. Handelsprodukte in den USA und Kanada.",
      "EAN8": "7 oder 8 Ziffern. Kleine Verpackungen.",
      "UPCE": "6 oder 8 Ziffern. Kurzer UPC für kleine Artikel.",
      "CODE39": "Großbuchstaben, Zahlen, Leerzeichen und - . $ / + %. Industrie und Ausweise.",
      "ITF14": "13 oder 14 Ziffern. Versandkartons und Paletten.",
      "codabar": "Zahlen und - $ : / . + mit A, B, C oder D am Anfang und Ende. Bibliotheken und Blutbanken.",
      "MSI": "Nur Zahlen. Lagerregale und Inventur.",
      "pharmacode": "Eine Zahl von 3 bis 131070. Arzneimittelverpackungen."
    },
    "faq": [
      {
        "q": "Welchen Barcode-Typ soll ich nehmen?",
        "a": "Für Produkte im Handel EAN-13 (weltweit) oder UPC-A (USA und Kanada). Für Versandetiketten, Lager und interne Codes Code 128 — er erlaubt Buchstaben und Zahlen."
      },
      {
        "q": "Darf ich die Barcodes kostenlos gewerblich nutzen?",
        "a": "Ja. Lade so viele herunter und drucke sie, wie du brauchst — für jeden Zweck, ohne Wasserzeichen und ohne Anmeldung."
      },
      {
        "q": "Brauche ich eine GS1-Nummer für den Handel?",
        "a": "Die meisten Händler verlangen bei GS1 registrierte EAN/UPC-Nummern. Dieses Tool erstellt das Barcode-Bild; es vergibt keine offizielle Produktnummer."
      },
      {
        "q": "Welches Format ist am besten zum Drucken?",
        "a": "SVG oder PDF. Das sind Vektordateien, die Striche bleiben in jeder Größe scharf — wichtig für Scanner."
      },
      {
        "q": "Warum lässt sich mein Barcode nicht scannen?",
        "a": "Nutze dunkle Striche auf hellem Hintergrund, drucke ihn nicht zu klein und lass den weißen Rand frei. EAN und UPC brauchen eine korrekte Prüfziffer — gib für EAN-13 12 Ziffern ein, wir berechnen sie."
      }
    ]
  },
  footer: { tagline: "Kostenlose Online-Tools, die deine Privatsphäre respektieren.", privacy: "Datenschutz", terms: "Bedingungen", rights: "Alle Rechte vorbehalten.", madeFree: "Für immer kostenlos. Ohne Anmeldung." },
};

export default de;
