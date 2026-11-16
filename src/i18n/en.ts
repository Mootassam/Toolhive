const en = {
  nav: { generator: "QR Generator", scanner: "QR Scanner", bulk: "Bulk QR", barcode: "Barcode", tools: "All tools", types: "QR Types", language: "Language", theme: "Theme" },
  home: {
    title: "Free QR Code Generator with Logo — No Sign-up, Never Expires",
    meta: "Create custom QR codes free: logo, colors, gradients, frames, SVG & PDF export, WiFi, vCard, WhatsApp, UPI and more. No sign-up, no watermark, codes never expire.",
    badge: "100% free · No sign-up · No watermark · Never expires",
    h1a: "The free QR code generator",
    h1b: "that never stops working",
    sub: "Every “premium” feature other sites charge for — logos, frames, gradients, SVG/PDF, bulk — free forever. Made in your browser, private by design.",
  },
  type: {
    title: "{name} QR Code Generator — Free, Custom, Never Expires",
    h1: "Free {name} QR Code Generator",
    meta: "Create a {name} QR code for free. {desc} Add your logo, colors and frame, download PNG, SVG or PDF. No sign-up, never expires.",
  },
  types: {
    url: { name: "URL", desc: "Open any website or link instantly when scanned." },
    text: { name: "Text", desc: "Show a plain text message, works fully offline." },
    wifi: { name: "WiFi", desc: "Let guests join your WiFi without typing the password." },
    vcard: { name: "vCard", desc: "Share your contact card — saved to the phone in one tap." },
    email: { name: "Email", desc: "Open a ready-to-send email with address, subject and message." },
    sms: { name: "SMS", desc: "Open a pre-written text message to your number." },
    phone: { name: "Phone", desc: "Call a phone number with a single scan." },
    whatsapp: { name: "WhatsApp", desc: "Start a WhatsApp chat with you, with an optional message." },
    location: { name: "Location", desc: "Open a place or GPS coordinates in Google Maps." },
    event: { name: "Event", desc: "Add an event to the calendar with date, time and place." },
    social: { name: "Social Media", desc: "Link to your Instagram, TikTok, Facebook, YouTube and more." },
    upi: { name: "UPI Payment", desc: "Receive UPI payments in India via GPay, PhonePe, Paytm." },
    crypto: { name: "Crypto", desc: "Receive Bitcoin, Ethereum, USDT and other crypto payments." },
    paypal: { name: "PayPal", desc: "Get paid through your PayPal.me link, with an optional amount." },
  },
  f: {
    url: "Website URL", text: "Your text", ssid: "Network name (SSID)", password: "Password", encryption: "Security",
    noPassword: "No password", hiddenNetwork: "Hidden network", firstName: "First name", lastName: "Last name",
    mobile: "Mobile", workPhone: "Work phone", email: "Email", website: "Website", company: "Company", jobTitle: "Job title",
    street: "Street", city: "City", zip: "ZIP / Postal code", country: "Country", note: "Note", emailTo: "Send to (email)",
    subject: "Subject", message: "Message", phone: "Phone number", whatsappNumber: "WhatsApp number (with country code)",
    prefilledMessage: "Pre-filled message (optional)", addressOrPlace: "Address or place name", latitude: "Latitude",
    longitude: "Longitude", eventTitle: "Event title", start: "Start", end: "End", location: "Location", description: "Description",
    platform: "Platform", usernameOrLink: "Username or profile link", upiId: "UPI ID", payeeName: "Payee name",
    amountOptional: "Amount (optional)", coin: "Coin", walletAddress: "Wallet address", paypalMeUser: "PayPal.me username",
    currency: "Currency",
  },
  ui: {
    step1: "1. Content", step2: "2. Design", step3: "3. Download",
    templates: "Templates", shapes: "Shapes", colors: "Colors", logo: "Logo", frame: "Frame", advanced: "Advanced",
    dots: "Dots", eyeFrame: "Corner frame", eyeBall: "Corner dot", foreground: "Dots color", second: "Second color",
    gradient: "Gradient", none: "None", linear: "Linear", radial: "Radial", angle: "Angle", eyeColor: "Corners color",
    sameAsDots: "Same as dots", background: "Background", transparent: "Transparent",
    uploadLogo: "Upload logo", removeLogo: "Remove", logoSize: "Logo size", clearBehindLogo: "Clear dots behind logo",
    orPickIcon: "Or pick an icon", frameText: "Frame text", frameColor: "Frame color", textColor: "Text color",
    ecc: "Error correction", eccL: "Low 7%", eccM: "Medium 15%", eccQ: "High 25%", eccH: "Max 30%", margin: "Quiet zone",
    size: "Size", download: "Download", copy: "Copy image", copied: "Copied!", print: "Print", reset: "Reset design",
    scannable: "Scan test passed — this code works", notScannable: "Scan test failed — increase contrast or reduce the logo",
    checking: "Testing scan…", lowContrast: "Low contrast: dark dots on a light background scan best.",
    inverted: "Light dots on a dark background — some older scanners can't read this.",
    enterContent: "Fill in the content to create your QR code", neverExpires: "Static code — works forever, no account needed",
    vectorHint: "SVG & PDF are vector — perfect for print at any size.", saveDesign: "Save design", savedDesigns: "My saved designs",
    load: "Load", del: "Delete", noneSaved: "Nothing saved yet — your designs stay on this device.", privacy: "Your data never leaves your browser.",
    allTypes: "All QR code types",
    tooLong: "Too much content for one QR code — please shorten it.",
  },
  features: {
    title: "Everything paid QR sites charge for — free",
    items: [
      { t: "Never expires", d: "Static QR codes encode your data directly. No trial that switches your printed codes off." },
      { t: "Logo & brand colors", d: "Upload a logo, pick colors and gradients, choose from 9 dot and 10 corner styles." },
      { t: "Frames & call-to-action", d: "Add a “Scan me” frame in 5 styles with your own text and colors." },
      { t: "Print-ready exports", d: "PNG up to 4096 px, vector SVG, PDF, JPG and WebP. No watermark, ever." },
      { t: "Bulk generation", d: "Create hundreds of QR codes from a list or CSV and download them as a ZIP." },
      { t: "Private & instant", d: "Everything runs in your browser. Nothing is uploaded, stored or tracked." },
    ],
  },
  compare: {
    title: "{brand} vs. typical “free” QR generators",
    feature: "Feature", us: "{brand}", them: "Others",
    rows: ["No sign-up", "Codes never expire", "Logo upload", "SVG / PDF export", "No watermark", "Bulk generator", "Frames with text", "Unlimited scans"],
    themVals: ["Often required", "Trial ends after 7–14 days", "Paid plan", "Paid plan", "Sometimes", "Paid plan", "Limited", "Scan caps"],
  },
  howto: {
    title: "How to create a QR code in 3 steps",
    steps: [
      { t: "Choose the type and add content", d: "Paste a link, or fill in WiFi, contact, WhatsApp, payment details and more." },
      { t: "Make it yours", d: "Pick a template or change dots, corners, colors, add your logo and a frame." },
      { t: "Download and use", d: "We test that it scans, then download PNG, SVG or PDF and print or share it." },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      { q: "Is this QR code generator really free?", a: "Yes. Every feature is free with no sign-up, no trial and no watermark. You can use the codes for personal and commercial projects." },
      { q: "Do the QR codes expire?", a: "Never. They are static QR codes: your content is stored inside the code itself, so it keeps working forever — even if this website disappeared." },
      { q: "Can I add my logo?", a: "Yes. Upload a PNG, JPG or SVG logo. We automatically raise error correction so the code still scans, and run a scan test before you download." },
      { q: "Which format is best for printing?", a: "SVG or PDF. They are vector files, so they stay sharp on business cards, flyers, menus and big posters." },
      { q: "Is there a limit on scans or codes?", a: "No limits. Create as many QR codes as you want and they can be scanned an unlimited number of times." },
      { q: "Is my data safe?", a: "Your QR codes are generated in your own browser. We don't upload, store or see the content you type." },
      { q: "Can I edit a QR code after printing?", a: "A static code can't change once printed. Tip: point it to a page you control (like your website) and update that page instead." },
      { q: "How do I scan a QR code?", a: "Open your phone camera and point it at the code, or use our free online QR scanner with your webcam or an image." },
    ],
  },
  scanner: {
    title: "Free Online QR Code Scanner — Scan from Camera or Image",
    meta: "Scan QR codes online for free with your camera or by uploading an image. Works on phone and computer, nothing is uploaded.",
    h1: "Free online QR code scanner",
    sub: "Use your camera or upload a screenshot. Decoding happens on your device — nothing is uploaded.",
    camera: "Scan with camera", stop: "Stop camera", upload: "Upload image", drop: "or drop / paste an image here",
    result: "Result", open: "Open link", copy: "Copy", copied: "Copied!", notFound: "No QR code found in this image.",
    noCamera: "Camera not available. Allow camera access or upload an image instead.", history: "Scan history", clear: "Clear",
    wifiJoin: "WiFi network", makeOwn: "Create your own QR code",
  },
  bulk: {
    title: "Bulk QR Code Generator — Create Hundreds Free, Download ZIP",
    meta: "Generate hundreds of QR codes at once from a list or CSV. Custom colors and logo, download as PNG or SVG in a ZIP. Free, no sign-up.",
    h1: "Free bulk QR code generator",
    sub: "One link or text per line — or upload a CSV. Every code gets your design. Download all as a ZIP.",
    input: "Your data (one per line)", csv: "Upload CSV / TXT", csvHint: "Optional 2nd column = file name: https://site.com/a, menu-table-1",
    count: "{n} QR codes", format: "Format", generate: "Generate ZIP", working: "Creating {i} of {n}…", done: "Done! Your ZIP is downloading.",
    max: "Up to 1,000 codes per batch.",
  },
  legal: {
    privacyTitle: "Privacy Policy",
    privacy: [
      "QR codes are created entirely in your browser. The text, links, contacts, WiFi passwords and images you enter are not sent to our servers.",
      "Saved designs and scan history are stored only in your browser's local storage on your device. You can delete them at any time.",
      "We use privacy-friendly, cookie-less analytics (Vercel Web Analytics) to count page visits. We may show advertising in the future; if so, ad partners may use cookies, and this policy will be updated.",
      "Contact: {email}",
    ],
    termsTitle: "Terms of Use",
    terms: [
      "This service is provided free of charge, “as is”, without warranty. Always test a QR code before printing it in large quantities.",
      "You may use generated QR codes for any personal or commercial purpose. You are responsible for the content you encode.",
      "Do not use this service to create codes that link to illegal content, malware or phishing.",
    ],
  },
  barcode: {
    "title": "Free Barcode Generator — EAN-13, UPC, Code 128 | PNG, SVG, PDF",
    "meta": "Create barcodes online for free: EAN-13, UPC-A, Code 128, Code 39, ITF-14 and more. Custom size and colors, download PNG, SVG or PDF. No sign-up, no watermark.",
    "h1": "Free barcode generator",
    "sub": "EAN, UPC, Code 128 and more for products, shipping and inventory. Print-ready, no sign-up, no watermark.",
    "type": "Barcode type",
    "data": "Barcode data",
    "label": "Text under the barcode (optional)",
    "showText": "Show text",
    "hideText": "Hide text",
    "barWidth": "Bar width",
    "height": "Height",
    "fontSize": "Text size",
    "margin": "Margin",
    "barColor": "Bars color",
    "fileType": "File type",
    "example": "Use an example",
    "invalid": "This data doesn't fit {name}.",
    "hints": {
      "CODE128": "Letters, numbers and symbols. The most used barcode for shipping and inventory.",
      "EAN13": "12 or 13 digits. Retail products worldwide — enter 12 digits and we add the check digit.",
      "UPC": "11 or 12 digits. Retail products in the USA and Canada.",
      "EAN8": "7 or 8 digits. Small retail packages.",
      "UPCE": "6 or 8 digits. Short UPC for small items.",
      "CODE39": "Capital letters, numbers, space and - . $ / + %. Used in industry and ID badges.",
      "ITF14": "13 or 14 digits. Shipping cartons and pallets.",
      "codabar": "Numbers and - $ : / . + with A, B, C or D at the start and end. Libraries and blood banks.",
      "MSI": "Numbers only. Warehouse shelves and inventory.",
      "pharmacode": "A number from 3 to 131070. Pharmaceutical packaging."
    },
    "faq": [
      {
        "q": "Which barcode type should I use?",
        "a": "For products sold in shops, use EAN-13 (worldwide) or UPC-A (USA and Canada). For shipping labels, inventory and internal codes, use Code 128 — it accepts letters and numbers."
      },
      {
        "q": "Are these barcodes free for commercial use?",
        "a": "Yes. Download and print as many as you need, for any purpose, with no watermark and no sign-up."
      },
      {
        "q": "Do I need a GS1 number to sell in stores?",
        "a": "Most retail stores require EAN/UPC numbers registered with GS1. This tool creates the barcode image; it does not give you an official product number."
      },
      {
        "q": "Which file format is best for printing?",
        "a": "SVG or PDF. They are vector files, so the bars stay sharp at any size — important for scanners."
      },
      {
        "q": "Why doesn't my barcode scan?",
        "a": "Use dark bars on a light background, don't print it too small and keep the white margin around it. EAN and UPC need a correct check digit — enter 12 digits for EAN-13 and we calculate it for you."
      }
    ]
  },
  tools: {
    "hubTitle": "Free Online Tools — Image, PDF, QR Code & Barcode",
    "hubMeta": "Free online tools that work in your browser: compress and resize images, HEIC to JPG, JPG to PDF, merge and split PDF, QR codes and barcodes. No sign-up, no upload.",
    "hubH1": "All free tools",
    "hubSub": "Images, PDFs, QR codes and barcodes — fast, free and private. Your files never leave your device.",
    "badge": "100% free · No sign-up · Files never leave your device",
    "more": "More free tools",
    "groups": {
      "qr": "QR code & barcode",
      "image": "Image tools",
      "pdf": "PDF tools"
    },
    "ui": {
      "chooseFiles": "Choose files",
      "chooseFile": "Choose a file",
      "dropHint": "or drag & drop them here — you can also paste with Ctrl+V",
      "wrongType": "Some files were skipped because this tool doesn't support them.",
      "files": "{n} files",
      "pages": "{n} pages",
      "clear": "Clear all",
      "remove": "Remove",
      "download": "Download",
      "downloadAll": "Download all (ZIP)",
      "settings": "Settings",
      "working": "Working {i} of {n}…",
      "done": "Done!",
      "kept": "Already optimized — original kept",
      "error": "Couldn't read this file.",
      "noWebp": "Your browser can’t create WebP files. Please try Chrome, Edge or Firefox.",
      "encrypted": "This PDF is password-protected or damaged.",
      "bySize": "By size",
      "byPercent": "By percentage",
      "width": "Width",
      "height": "Height",
      "keepRatio": "Keep aspect ratio",
      "percent": "Size",
      "maxWidth": "Max width",
      "original": "Original",
      "format": "Output format",
      "auto": "Auto",
      "sameFormat": "Same",
      "quality": "Quality",
      "background": "Background",
      "pageSize": "Page size",
      "fitImage": "Fit image",
      "margin": "Margin",
      "none": "None",
      "small": "Small",
      "large": "Large",
      "resolution": "Image quality",
      "normal": "Normal",
      "high": "High",
      "veryHigh": "Very high",
      "splitEach": "Every page",
      "extract": "Choose pages",
      "pagesOptional": "Pages (empty = all)",
      "pagesToExtract": "Pages to extract",
      "rangesHint": "Example: 1-3, 5, 8-10",
      "addOneMore": "Add at least 2 PDF files to merge.",
      "noPages": "No pages match — check the page numbers.",
      "moveUp": "Move up",
      "moveDown": "Move down",
      "privacy": "Your files are processed on your device and never uploaded."
    },
    "faqCommon": [
      {
        "q": "Is it really free?",
        "a": "Yes. Every tool is free with no sign-up, no watermark and no daily limit."
      },
      {
        "q": "Are my files safe?",
        "a": "Your files never leave your device. Everything is processed inside your browser, so nothing is uploaded to a server."
      }
    ],
    "items": {
      "compressImage": {
        "name": "Compress Image",
        "desc": "Make JPG, PNG and WebP files smaller without visible quality loss.",
        "title": "Compress Image Online Free — Reduce JPG, PNG & WebP Size",
        "meta": "Compress images online for free. Reduce JPG, PNG, WebP and HEIC file size in seconds without losing quality. Batch compress, no sign-up, no upload.",
        "h1": "Compress images for free",
        "sub": "Reduce photo file size for websites, email and WhatsApp. Batch compress many images at once — nothing is uploaded.",
        "action": "Compress images",
        "accepts": "JPG · PNG · WebP · HEIC",
        "faq": [
          {
            "q": "How much smaller will my images get?",
            "a": "Usually 50–80% smaller for photos at quality 70, with no difference you can see. Lower the quality or set a max width to make them even smaller."
          },
          {
            "q": "Can I compress PNG files?",
            "a": "Yes. In Auto mode we try PNG and a modern format and keep the smallest one. Transparent images stay transparent."
          }
        ]
      },
      "resizeImage": {
        "name": "Resize Image",
        "desc": "Change image width and height in pixels or by percentage.",
        "title": "Resize Image Online Free — Change Size in Pixels or Percent",
        "meta": "Resize images online for free. Change JPG, PNG and WebP width and height in pixels or percent, keep the aspect ratio, batch resize. No sign-up, no upload.",
        "h1": "Resize images for free",
        "sub": "Set an exact size in pixels or scale by percentage. Resize many images at once for social media, websites and forms.",
        "action": "Resize images",
        "accepts": "JPG · PNG · WebP · HEIC",
        "faq": [
          {
            "q": "How do I resize without stretching?",
            "a": "Keep \"Keep aspect ratio\" on and enter only the width or the height — the other side is calculated for you."
          },
          {
            "q": "Can I resize many images at once?",
            "a": "Yes. Add as many images as you want; they all get the same settings and you can download them as one ZIP."
          }
        ]
      },
      "heicToJpg": {
        "name": "HEIC to JPG",
        "desc": "Convert iPhone HEIC photos to JPG that open everywhere.",
        "title": "HEIC to JPG Converter Free — Convert iPhone Photos Online",
        "meta": "Convert HEIC to JPG online for free. Turn iPhone HEIC and HEIF photos into JPG that open on Windows, Android and every website. Batch convert, no upload.",
        "h1": "Convert HEIC to JPG for free",
        "sub": "iPhone photos in HEIC format don't open everywhere. Convert them to JPG in seconds — many at once, right on your device.",
        "action": "Convert to JPG",
        "accepts": "HEIC · HEIF",
        "faq": [
          {
            "q": "What is a HEIC file?",
            "a": "HEIC is the photo format iPhones use by default. It saves space but many Windows PCs, Android phones and websites can't open it — JPG works everywhere."
          },
          {
            "q": "Do I lose quality converting HEIC to JPG?",
            "a": "At quality 90 or higher the difference is invisible. You can set quality to 100 for the best result."
          }
        ]
      },
      "pngToJpg": {
        "name": "PNG to JPG",
        "desc": "Convert PNG images to smaller JPG files.",
        "title": "PNG to JPG Converter Free — Convert PNG to JPEG Online",
        "meta": "Convert PNG to JPG online for free. Make PNG images smaller as JPEG, choose quality and background color. Batch convert, no sign-up, no upload.",
        "h1": "Convert PNG to JPG for free",
        "sub": "JPG files are much smaller than PNG for photos. Choose the quality and the background color for transparent areas.",
        "action": "Convert to JPG",
        "accepts": "PNG",
        "faq": [
          {
            "q": "What happens to transparent areas?",
            "a": "JPG doesn't support transparency, so transparent areas are filled with the background color you pick (white by default)."
          },
          {
            "q": "Why convert PNG to JPG?",
            "a": "For photos, JPG files are often 5–10 times smaller than PNG, which makes them faster to upload, send and load on websites."
          }
        ]
      },
      "webpToJpg": {
        "name": "WebP to JPG",
        "desc": "Convert WebP images to JPG that open in any app.",
        "title": "WebP to JPG Converter Free — Convert WebP Images Online",
        "meta": "Convert WebP to JPG online for free. Turn WebP images saved from websites into JPG files that open in every app. Batch convert, no sign-up, no upload.",
        "h1": "Convert WebP to JPG for free",
        "sub": "Saved an image from a website and it's WebP? Convert it to JPG so it opens in every app and editor.",
        "action": "Convert to JPG",
        "accepts": "WebP",
        "faq": [
          {
            "q": "Why are images from websites saved as WebP?",
            "a": "Many websites use WebP because it loads fast. But some apps, printers and older programs can't open it, so JPG is safer for sharing."
          },
          {
            "q": "Can I convert many WebP files at once?",
            "a": "Yes. Add all your WebP images and download the JPG files one by one or together in a ZIP."
          }
        ]
      },
      "jpgToPng": {
        "name": "JPG to PNG",
        "desc": "Convert JPG photos to lossless PNG images.",
        "title": "JPG to PNG Converter Free — Convert JPEG to PNG Online",
        "meta": "Convert JPG to PNG online for free. Turn JPEG photos into lossless PNG images in seconds. Batch convert, no sign-up, no upload, no watermark.",
        "h1": "Convert JPG to PNG for free",
        "sub": "Turn JPEG photos into lossless PNG files — ideal for editing, design tools and uploads that require PNG.",
        "action": "Convert to PNG",
        "accepts": "JPG · JPEG",
        "faq": [
          {
            "q": "Will the PNG have a transparent background?",
            "a": "No — a JPG has no transparency, so the PNG keeps the same background. Converting only changes the file format."
          },
          {
            "q": "Why is the PNG bigger than my JPG?",
            "a": "PNG is lossless, so it stores every pixel exactly. That's great for editing, but files are larger than JPG."
          }
        ]
      },
      "jpgToWebp": {
        "name": "Convert to WebP",
        "desc": "Convert JPG and PNG images to light WebP files for websites.",
        "title": "JPG to WebP Converter Free — Convert Images to WebP Online",
        "meta": "Convert JPG and PNG to WebP online for free. Make images up to 30% smaller for faster websites and better SEO. Batch convert, no sign-up, no upload.",
        "h1": "Convert images to WebP for free",
        "sub": "WebP images are smaller than JPG and PNG at the same quality — perfect for fast websites and online stores.",
        "action": "Convert to WebP",
        "accepts": "JPG · PNG · HEIC",
        "faq": [
          {
            "q": "Why use WebP on my website?",
            "a": "WebP files are usually 25–35% smaller than JPG at the same quality, so pages load faster — which helps visitors and Google rankings."
          },
          {
            "q": "Does WebP keep transparency?",
            "a": "Yes. Transparent PNG images stay transparent when converted to WebP."
          }
        ]
      },
      "jpgToPdf": {
        "name": "JPG to PDF",
        "desc": "Turn photos and scans into one PDF document.",
        "title": "JPG to PDF Converter Free — Convert Images to PDF Online",
        "meta": "Convert JPG, PNG and HEIC images to PDF online for free. Combine many photos into one PDF, choose A4 or Letter and margins. No sign-up, no upload, no watermark.",
        "h1": "Convert JPG to PDF for free",
        "sub": "Combine photos, scans and screenshots into one PDF. Change the order, pick the page size and download instantly.",
        "action": "Create PDF",
        "accepts": "JPG · PNG · WebP · HEIC",
        "faq": [
          {
            "q": "Can I put many images in one PDF?",
            "a": "Yes. Add all your images, use the arrows to change the order, and each image becomes one page of the PDF."
          },
          {
            "q": "Which page size should I choose?",
            "a": "A4 is standard in most countries and Letter in the USA and Canada. \"Fit image\" makes each page exactly the size of its photo."
          }
        ]
      },
      "mergePdf": {
        "name": "Merge PDF",
        "desc": "Combine several PDF files into one, in any order.",
        "title": "Merge PDF Free — Combine PDF Files Online in Seconds",
        "meta": "Merge PDF files online for free. Combine multiple PDFs into one document in the order you want. No sign-up, no upload, no watermark, no file limit.",
        "h1": "Merge PDF files for free",
        "sub": "Combine contracts, invoices and documents into one PDF. Drag in your files, set the order and download.",
        "action": "Merge PDF",
        "accepts": "PDF",
        "faq": [
          {
            "q": "How do I change the order of the PDFs?",
            "a": "Use the up and down arrows next to each file. The pages are merged from top to bottom."
          },
          {
            "q": "Is there a limit on the number of files?",
            "a": "No fixed limit. Very large files depend on your device's memory, but dozens of normal PDFs work fine."
          }
        ]
      },
      "pdfToJpg": {
        "name": "PDF to JPG",
        "desc": "Turn every PDF page into a high-quality image.",
        "title": "PDF to JPG Converter Free — Convert PDF Pages to Images Online",
        "meta": "Convert PDF to JPG or PNG online for free. Turn every page into a high-quality image, choose pages and resolution, download as ZIP. No sign-up, no upload.",
        "h1": "Convert PDF to JPG for free",
        "sub": "Save PDF pages as JPG or PNG images — all pages or only the ones you choose, in high resolution.",
        "action": "Convert to images",
        "accepts": "PDF",
        "faq": [
          {
            "q": "Can I convert only some pages?",
            "a": "Yes. Type the pages you want, for example 1-3, 5. Leave it empty to convert all pages."
          },
          {
            "q": "Which quality should I choose?",
            "a": "\"High\" is sharp enough for most uses. Choose \"Very high\" for printing or small text; files will be larger."
          }
        ]
      },
      "splitPdf": {
        "name": "Split PDF",
        "desc": "Extract pages or split a PDF into separate files.",
        "title": "Split PDF Free — Extract Pages from PDF Online",
        "meta": "Split PDF online for free. Extract the pages you need into a new PDF or split every page into its own file. No sign-up, no upload, no watermark.",
        "h1": "Split PDF for free",
        "sub": "Pull out the pages you need, or split a PDF into one file per page. Fast, free and private.",
        "action": "Split PDF",
        "accepts": "PDF",
        "faq": [
          {
            "q": "How do I extract specific pages?",
            "a": "Choose \"Choose pages\" and type the pages you want, like 1-3, 5. They are saved into one new PDF in that order."
          },
          {
            "q": "Does splitting change the quality?",
            "a": "No. Pages are copied exactly as they are — text, images and links stay the same."
          }
        ]
      }
    }
  },
  footer: { tagline: "Free online tools that respect your privacy.", privacy: "Privacy", terms: "Terms", rights: "All rights reserved.", madeFree: "Free forever. No sign-up." },
};

export default en;
export type Dict = typeof en;
