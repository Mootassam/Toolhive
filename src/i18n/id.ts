import type { Dict } from "./en";

const id: Dict = {
  nav: { generator: "Pembuat QR", scanner: "Pemindai QR", bulk: "QR Massal", barcode: "Barcode", tools: "Semua alat", types: "Jenis QR", language: "Bahasa", theme: "Tema" },
  home: {
    title: "Pembuat Kode QR Gratis dengan Logo — Tanpa Daftar, Tidak Pernah Kedaluwarsa",
    meta: "Buat kode QR kustom gratis: logo, warna, gradasi, bingkai, ekspor SVG & PDF, WiFi, vCard, WhatsApp, dan lainnya. Tanpa daftar, tanpa watermark, tidak pernah kedaluwarsa.",
    badge: "100% gratis · Tanpa daftar · Tanpa watermark · Tidak pernah kedaluwarsa",
    h1a: "Pembuat kode QR gratis",
    h1b: "yang tidak pernah berhenti bekerja",
    sub: "Semua fitur “premium” yang dijual situs lain — logo, bingkai, gradasi, SVG/PDF, massal — gratis selamanya. Dibuat di browser Anda, privat sejak awal.",
  },
  type: {
    title: "Pembuat Kode QR {name} — Gratis, Kustom, Tidak Pernah Kedaluwarsa",
    h1: "Pembuat kode QR {name} gratis",
    meta: "Buat kode QR {name} gratis. {desc} Tambahkan logo, warna, dan bingkai, unduh PNG, SVG, atau PDF. Tanpa daftar, tidak pernah kedaluwarsa.",
  },
  types: {
    url: { name: "URL", desc: "Buka situs atau tautan apa pun saat dipindai." },
    text: { name: "Teks", desc: "Tampilkan pesan teks, bisa tanpa internet." },
    wifi: { name: "WiFi", desc: "Tamu tersambung ke WiFi tanpa mengetik kata sandi." },
    vcard: { name: "vCard", desc: "Bagikan kartu kontak Anda — tersimpan di ponsel sekali ketuk." },
    email: { name: "Email", desc: "Buka email siap kirim dengan alamat, subjek, dan pesan." },
    sms: { name: "SMS", desc: "Buka SMS yang sudah ditulis ke nomor Anda." },
    phone: { name: "Telepon", desc: "Telepon sebuah nomor dengan sekali pindai." },
    whatsapp: { name: "WhatsApp", desc: "Mulai chat WhatsApp dengan Anda, dengan pesan opsional." },
    location: { name: "Lokasi", desc: "Buka tempat atau koordinat GPS di Google Maps." },
    event: { name: "Acara", desc: "Tambahkan acara ke kalender dengan tanggal, jam, dan tempat." },
    social: { name: "Media Sosial", desc: "Tautkan Instagram, TikTok, Facebook, YouTube, dan lainnya." },
    upi: { name: "Pembayaran UPI", desc: "Terima pembayaran UPI di India lewat GPay, PhonePe, Paytm." },
    crypto: { name: "Kripto", desc: "Terima Bitcoin, Ethereum, USDT, dan kripto lainnya." },
    paypal: { name: "PayPal", desc: "Terima pembayaran lewat tautan PayPal.me, jumlah opsional." },
  },
  f: {
    url: "URL situs", text: "Teks Anda", ssid: "Nama jaringan (SSID)", password: "Kata sandi", encryption: "Keamanan",
    noPassword: "Tanpa kata sandi", hiddenNetwork: "Jaringan tersembunyi", firstName: "Nama depan", lastName: "Nama belakang",
    mobile: "Ponsel", workPhone: "Telepon kantor", email: "Email", website: "Situs web", company: "Perusahaan", jobTitle: "Jabatan",
    street: "Jalan", city: "Kota", zip: "Kode pos", country: "Negara", note: "Catatan", emailTo: "Kirim ke (email)",
    subject: "Subjek", message: "Pesan", phone: "Nomor telepon", whatsappNumber: "Nomor WhatsApp (dengan kode negara)",
    prefilledMessage: "Pesan otomatis (opsional)", addressOrPlace: "Alamat atau nama tempat", latitude: "Lintang",
    longitude: "Bujur", eventTitle: "Judul acara", start: "Mulai", end: "Selesai", location: "Tempat", description: "Deskripsi",
    platform: "Platform", usernameOrLink: "Nama pengguna atau tautan profil", upiId: "ID UPI", payeeName: "Nama penerima",
    amountOptional: "Jumlah (opsional)", coin: "Koin", walletAddress: "Alamat dompet", paypalMeUser: "Nama pengguna PayPal.me",
    currency: "Mata uang",
  },
  ui: {
    step1: "1. Konten", step2: "2. Desain", step3: "3. Unduh",
    templates: "Templat", shapes: "Bentuk", colors: "Warna", logo: "Logo", frame: "Bingkai", advanced: "Lanjutan",
    dots: "Titik", eyeFrame: "Bingkai sudut", eyeBall: "Titik sudut", foreground: "Warna titik", second: "Warna kedua",
    gradient: "Gradasi", none: "Tidak ada", linear: "Linear", radial: "Radial", angle: "Sudut", eyeColor: "Warna sudut",
    sameAsDots: "Sama dengan titik", background: "Latar", transparent: "Transparan",
    uploadLogo: "Unggah logo", removeLogo: "Hapus", logoSize: "Ukuran logo", clearBehindLogo: "Bersihkan titik di belakang logo",
    orPickIcon: "Atau pilih ikon", frameText: "Teks bingkai", frameColor: "Warna bingkai", textColor: "Warna teks",
    ecc: "Koreksi kesalahan", eccL: "Rendah 7%", eccM: "Sedang 15%", eccQ: "Tinggi 25%", eccH: "Maks 30%", margin: "Margin",
    size: "Ukuran", download: "Unduh", copy: "Salin gambar", copied: "Disalin!", print: "Cetak", reset: "Atur ulang desain",
    scannable: "Tes pindai lulus — kode ini berfungsi", notScannable: "Tes pindai gagal — naikkan kontras atau kecilkan logo",
    checking: "Menguji pindai…", lowContrast: "Kontras rendah: titik gelap di latar terang paling mudah dipindai.",
    inverted: "Titik terang di latar gelap — beberapa pemindai lama tidak bisa membacanya.",
    enterContent: "Isi konten untuk membuat kode QR Anda", neverExpires: "Kode statis — berfungsi selamanya, tanpa akun",
    vectorHint: "SVG & PDF adalah vektor — sempurna untuk dicetak di ukuran apa pun.", saveDesign: "Simpan", savedDesigns: "Desain tersimpan saya",
    load: "Muat", del: "Hapus", noneSaved: "Belum ada yang disimpan — desain Anda tetap di perangkat ini.", privacy: "Data Anda tidak pernah keluar dari browser.",
    allTypes: "Semua jenis kode QR",
    tooLong: "Konten terlalu banyak untuk satu kode QR — mohon persingkat.",
  },
  features: {
    title: "Semua yang dijual situs QR lain — gratis",
    items: [
      { t: "Tidak pernah kedaluwarsa", d: "Kode QR statis menyimpan data Anda langsung. Tidak ada masa uji coba yang mematikan kode cetak Anda." },
      { t: "Logo & warna merek", d: "Unggah logo, pilih warna dan gradasi, 9 gaya titik dan 10 gaya sudut." },
      { t: "Bingkai ajakan pindai", d: "Tambahkan bingkai “Pindai saya” dalam 5 gaya dengan teks dan warna Anda." },
      { t: "Siap cetak", d: "PNG hingga 4096 px, SVG vektor, PDF, JPG, dan WebP. Tanpa watermark, selamanya." },
      { t: "Pembuatan massal", d: "Buat ratusan kode QR dari daftar atau CSV dan unduh sebagai ZIP." },
      { t: "Privat & instan", d: "Semuanya berjalan di browser Anda. Tidak ada yang diunggah, disimpan, atau dilacak." },
    ],
  },
  compare: {
    title: "{brand} vs. pembuat QR “gratis” biasa",
    feature: "Fitur", us: "{brand}", them: "Lainnya",
    rows: ["Tanpa daftar", "Kode tidak pernah kedaluwarsa", "Unggah logo", "Ekspor SVG / PDF", "Tanpa watermark", "Pembuat massal", "Bingkai dengan teks", "Pindai tanpa batas"],
    themVals: ["Sering wajib", "Uji coba habis 7–14 hari", "Paket berbayar", "Paket berbayar", "Kadang", "Paket berbayar", "Terbatas", "Batas pindai"],
  },
  howto: {
    title: "Cara membuat kode QR dalam 3 langkah",
    steps: [
      { t: "Pilih jenis dan isi konten", d: "Tempel tautan, atau isi WiFi, kontak, WhatsApp, data pembayaran, dan lainnya." },
      { t: "Buat sesuai gaya Anda", d: "Pilih templat atau ubah titik, sudut, warna, tambahkan logo dan bingkai." },
      { t: "Unduh dan gunakan", d: "Kami uji pindainya; unduh PNG, SVG, atau PDF lalu cetak atau bagikan." },
    ],
  },
  faq: {
    title: "Pertanyaan umum",
    items: [
      { q: "Apakah pembuat kode QR ini benar-benar gratis?", a: "Ya. Semua fitur gratis tanpa daftar, tanpa uji coba, dan tanpa watermark. Kode boleh dipakai untuk proyek pribadi maupun komersial." },
      { q: "Apakah kode QR bisa kedaluwarsa?", a: "Tidak pernah. Ini kode QR statis: konten tersimpan di dalam kode itu sendiri, jadi berfungsi selamanya — bahkan jika situs ini hilang." },
      { q: "Bisakah saya menambahkan logo?", a: "Bisa. Unggah logo PNG, JPG, atau SVG. Kami otomatis menaikkan koreksi kesalahan dan melakukan tes pindai sebelum diunduh." },
      { q: "Format apa yang terbaik untuk dicetak?", a: "SVG atau PDF. Keduanya file vektor yang tetap tajam di kartu nama, brosur, menu, dan poster besar." },
      { q: "Apakah ada batas pindai atau jumlah kode?", a: "Tanpa batas. Buat kode QR sebanyak yang Anda mau, bisa dipindai tanpa batas." },
      { q: "Apakah data saya aman?", a: "Kode QR Anda dibuat di browser Anda sendiri. Kami tidak mengunggah, menyimpan, atau melihat isi yang Anda ketik." },
      { q: "Bisakah kode QR diubah setelah dicetak?", a: "Kode statis tidak berubah setelah dicetak. Tips: arahkan ke halaman yang Anda kelola (situs Anda) lalu ubah halaman itu." },
      { q: "Bagaimana cara memindai kode QR?", a: "Buka kamera ponsel dan arahkan ke kode, atau gunakan pemindai QR online gratis kami dengan webcam atau gambar." },
    ],
  },
  scanner: {
    title: "Pemindai Kode QR Online Gratis — Dari Kamera atau Gambar",
    meta: "Pindai kode QR online gratis dengan kamera atau unggah gambar. Bisa di ponsel dan komputer, tidak ada yang diunggah.",
    h1: "Pemindai kode QR online gratis",
    sub: "Gunakan kamera atau unggah tangkapan layar. Pembacaan terjadi di perangkat Anda — tidak ada yang diunggah.",
    camera: "Pindai dengan kamera", stop: "Hentikan kamera", upload: "Unggah gambar", drop: "atau seret / tempel gambar di sini",
    result: "Hasil", open: "Buka tautan", copy: "Salin", copied: "Disalin!", notFound: "Tidak ada kode QR di gambar ini.",
    noCamera: "Kamera tidak tersedia. Izinkan akses kamera atau unggah gambar.", history: "Riwayat pindai", clear: "Hapus",
    wifiJoin: "Jaringan WiFi", makeOwn: "Buat kode QR Anda sendiri",
  },
  bulk: {
    title: "Pembuat Kode QR Massal — Ratusan Gratis, Unduh ZIP",
    meta: "Buat ratusan kode QR sekaligus dari daftar atau CSV. Warna dan logo kustom, unduh PNG atau SVG dalam ZIP. Gratis, tanpa daftar.",
    h1: "Pembuat kode QR massal gratis",
    sub: "Satu tautan atau teks per baris — atau unggah CSV. Setiap kode memakai desain Anda. Unduh semua dalam ZIP.",
    input: "Data Anda (satu per baris)", csv: "Unggah CSV / TXT", csvHint: "Kolom ke-2 opsional = nama file: https://situs.com/a, meja-1",
    count: "{n} kode QR", format: "Format", generate: "Buat ZIP", working: "Membuat {i} dari {n}…", done: "Selesai! ZIP Anda sedang diunduh.",
    max: "Hingga 1.000 kode per batch.",
  },
  legal: {
    privacyTitle: "Kebijakan Privasi",
    privacy: [
      "Kode QR dibuat sepenuhnya di browser Anda. Teks, tautan, kontak, kata sandi WiFi, dan gambar yang Anda masukkan tidak dikirim ke server kami.",
      "Desain tersimpan dan riwayat pindai hanya disimpan di penyimpanan lokal browser Anda. Anda bisa menghapusnya kapan saja.",
      "Kami memakai analitik ramah privasi tanpa cookie (Vercel Web Analytics) untuk menghitung kunjungan. Kami mungkin menampilkan iklan di masa depan; jika demikian, mitra iklan dapat memakai cookie dan kebijakan ini akan diperbarui.",
      "Kontak: {email}",
    ],
    termsTitle: "Ketentuan Penggunaan",
    terms: [
      "Layanan ini gratis dan disediakan “apa adanya” tanpa jaminan. Selalu uji kode QR sebelum mencetak dalam jumlah besar.",
      "Anda boleh memakai kode QR yang dibuat untuk tujuan pribadi atau komersial apa pun. Anda bertanggung jawab atas konten yang dikodekan.",
      "Jangan gunakan layanan ini untuk membuat kode yang mengarah ke konten ilegal, malware, atau phishing.",
    ],
  },
  barcode: {
    "title": "Generator Barcode Gratis — EAN-13, UPC, Code 128 | PNG, SVG, PDF",
    "meta": "Buat barcode online gratis: EAN-13, UPC-A, Code 128, Code 39, ITF-14 dan lainnya. Atur ukuran dan warna, unduh PNG, SVG atau PDF. Tanpa daftar, tanpa watermark.",
    "h1": "Generator barcode gratis",
    "sub": "EAN, UPC, Code 128 dan lainnya untuk produk, pengiriman dan stok. Siap cetak, tanpa daftar, tanpa watermark.",
    "type": "Jenis barcode",
    "data": "Data barcode",
    "label": "Teks di bawah barcode (opsional)",
    "showText": "Tampilkan teks",
    "hideText": "Sembunyikan teks",
    "barWidth": "Lebar batang",
    "height": "Tinggi",
    "fontSize": "Ukuran teks",
    "margin": "Margin",
    "barColor": "Warna batang",
    "fileType": "Jenis file",
    "example": "Pakai contoh",
    "invalid": "Data ini tidak cocok untuk {name}.",
    "hints": {
      "CODE128": "Huruf, angka dan simbol. Barcode paling umum untuk pengiriman dan stok.",
      "EAN13": "12 atau 13 digit. Produk ritel di seluruh dunia — ketik 12 digit, kami tambahkan digit cek.",
      "UPC": "11 atau 12 digit. Produk ritel di AS dan Kanada.",
      "EAN8": "7 atau 8 digit. Kemasan kecil.",
      "UPCE": "6 atau 8 digit. UPC pendek untuk barang kecil.",
      "CODE39": "Huruf besar, angka, spasi dan - . $ / + %. Industri dan kartu identitas.",
      "ITF14": "13 atau 14 digit. Kardus pengiriman dan palet.",
      "codabar": "Angka dan - $ : / . + dengan A, B, C atau D di awal dan akhir. Perpustakaan dan bank darah.",
      "MSI": "Hanya angka. Rak gudang dan inventaris.",
      "pharmacode": "Angka dari 3 sampai 131070. Kemasan obat."
    },
    "faq": [
      {
        "q": "Jenis barcode mana yang harus saya pakai?",
        "a": "Untuk produk yang dijual di toko, pakai EAN-13 (internasional) atau UPC-A (AS dan Kanada). Untuk label pengiriman, stok dan kode internal, pakai Code 128 — bisa huruf dan angka."
      },
      {
        "q": "Bolehkah dipakai gratis untuk bisnis?",
        "a": "Boleh. Unduh dan cetak sebanyak yang Anda perlukan, untuk keperluan apa pun, tanpa watermark dan tanpa daftar."
      },
      {
        "q": "Apakah saya perlu nomor GS1 untuk jual di toko?",
        "a": "Sebagian besar toko ritel meminta nomor EAN/UPC yang terdaftar di GS1. Alat ini membuat gambar barcode; tidak memberi nomor produk resmi."
      },
      {
        "q": "Format apa yang terbaik untuk dicetak?",
        "a": "SVG atau PDF. Keduanya file vektor, jadi batang tetap tajam di ukuran berapa pun — penting untuk scanner."
      },
      {
        "q": "Kenapa barcode saya tidak bisa dipindai?",
        "a": "Gunakan batang gelap di latar terang, jangan cetak terlalu kecil dan sisakan margin putih di sekelilingnya. EAN dan UPC butuh digit cek yang benar — ketik 12 digit untuk EAN-13 dan kami hitungkan."
      }
    ]
  },
  tools: {
    "hubTitle": "Alat Online Gratis — Gambar, PDF, Kode QR & Barcode",
    "hubMeta": "Alat online gratis yang berjalan di browser Anda: kompres dan ubah ukuran gambar, HEIC ke JPG, JPG ke PDF, gabung dan pisah PDF, kode QR dan barcode. Tanpa daftar, tanpa upload.",
    "hubH1": "Semua alat gratis",
    "hubSub": "Gambar, PDF, kode QR dan barcode — cepat, gratis dan privat. File Anda tidak pernah keluar dari perangkat Anda.",
    "badge": "100% gratis · Tanpa daftar · File tetap di perangkat Anda",
    "more": "Alat gratis lainnya",
    "groups": {
      "qr": "Kode QR & barcode",
      "image": "Alat gambar",
      "pdf": "Alat PDF"
    },
    "ui": {
      "chooseFiles": "Pilih file",
      "chooseFile": "Pilih satu file",
      "dropHint": "atau seret ke sini — bisa juga tempel dengan Ctrl+V",
      "wrongType": "Beberapa file dilewati karena tidak didukung alat ini.",
      "files": "{n} file",
      "pages": "{n} halaman",
      "clear": "Hapus semua",
      "remove": "Hapus",
      "download": "Unduh",
      "downloadAll": "Unduh semua (ZIP)",
      "settings": "Pengaturan",
      "working": "Memproses {i} dari {n}…",
      "done": "Selesai!",
      "kept": "Sudah optimal — file asli dipertahankan",
      "error": "File ini tidak bisa dibaca.",
      "noWebp": "Browser Anda tidak bisa membuat file WebP. Coba Chrome, Edge atau Firefox.",
      "encrypted": "PDF ini dilindungi kata sandi atau rusak.",
      "bySize": "Berdasarkan ukuran",
      "byPercent": "Berdasarkan persen",
      "width": "Lebar",
      "height": "Tinggi",
      "keepRatio": "Pertahankan rasio",
      "percent": "Ukuran",
      "maxWidth": "Lebar maks",
      "original": "Asli",
      "format": "Format hasil",
      "auto": "Otomatis",
      "sameFormat": "Sama",
      "quality": "Kualitas",
      "background": "Latar",
      "pageSize": "Ukuran halaman",
      "fitImage": "Sesuai gambar",
      "margin": "Margin",
      "none": "Tanpa",
      "small": "Kecil",
      "large": "Besar",
      "resolution": "Kualitas gambar",
      "normal": "Normal",
      "high": "Tinggi",
      "veryHigh": "Sangat tinggi",
      "splitEach": "Setiap halaman",
      "extract": "Pilih halaman",
      "pagesOptional": "Halaman (kosong = semua)",
      "pagesToExtract": "Halaman yang diambil",
      "rangesHint": "Contoh: 1-3, 5, 8-10",
      "addOneMore": "Tambahkan minimal 2 file PDF untuk digabung.",
      "noPages": "Tidak ada halaman yang cocok — cek nomor halaman.",
      "moveUp": "Naikkan",
      "moveDown": "Turunkan",
      "privacy": "File Anda diproses di perangkat Anda dan tidak pernah diunggah."
    },
    "faqCommon": [
      {
        "q": "Benar-benar gratis?",
        "a": "Ya. Semua alat gratis, tanpa daftar, tanpa watermark dan tanpa batas harian."
      },
      {
        "q": "Apakah file saya aman?",
        "a": "File Anda tidak pernah keluar dari perangkat Anda. Semua diproses di browser, jadi tidak ada yang diunggah ke server."
      }
    ],
    "items": {
      "compressImage": {
        "name": "Kompres gambar",
        "desc": "Perkecil ukuran JPG, PNG dan WebP tanpa penurunan kualitas yang terlihat.",
        "title": "Kompres Gambar Online Gratis — Perkecil Ukuran JPG, PNG & WebP",
        "meta": "Kompres gambar online gratis. Perkecil ukuran JPG, PNG, WebP dan HEIC dalam hitungan detik tanpa kehilangan kualitas. Banyak sekaligus, tanpa daftar, tanpa upload.",
        "h1": "Kompres gambar gratis",
        "sub": "Perkecil ukuran foto untuk website, email dan WhatsApp. Kompres banyak gambar sekaligus — tidak ada yang diunggah.",
        "action": "Kompres gambar",
        "accepts": "JPG · PNG · WebP · HEIC",
        "faq": [
          {
            "q": "Seberapa kecil gambar saya nanti?",
            "a": "Biasanya 50–80% lebih kecil untuk foto dengan kualitas 70, tanpa beda yang terlihat. Turunkan kualitas atau atur lebar maks agar lebih kecil lagi."
          },
          {
            "q": "Bisakah saya kompres file PNG?",
            "a": "Bisa. Di mode Otomatis kami coba PNG dan format modern lalu memakai yang terkecil. Gambar transparan tetap transparan."
          }
        ]
      },
      "resizeImage": {
        "name": "Ubah ukuran gambar",
        "desc": "Ubah lebar dan tinggi dalam piksel atau persen.",
        "title": "Ubah Ukuran Gambar Online Gratis — Dalam Piksel atau Persen",
        "meta": "Ubah ukuran gambar online gratis. Atur lebar dan tinggi JPG, PNG dan WebP dalam piksel atau persen, pertahankan rasio, banyak sekaligus. Tanpa daftar, tanpa upload.",
        "h1": "Ubah ukuran gambar gratis",
        "sub": "Atur ukuran pasti dalam piksel atau skala dengan persen. Ubah banyak gambar sekaligus untuk media sosial, website dan formulir.",
        "action": "Ubah ukuran",
        "accepts": "JPG · PNG · WebP · HEIC",
        "faq": [
          {
            "q": "Bagaimana mengubah ukuran tanpa gepeng?",
            "a": "Biarkan \"Pertahankan rasio\" aktif dan isi lebar atau tinggi saja — sisi lainnya dihitung otomatis."
          },
          {
            "q": "Bisakah banyak gambar sekaligus?",
            "a": "Bisa. Tambahkan sebanyak yang Anda mau; semua memakai pengaturan yang sama dan bisa diunduh dalam satu ZIP."
          }
        ]
      },
      "heicToJpg": {
        "name": "HEIC ke JPG",
        "desc": "Ubah foto HEIC iPhone ke JPG yang bisa dibuka di mana saja.",
        "title": "Konversi HEIC ke JPG Gratis — Ubah Foto iPhone Online",
        "meta": "Konversi HEIC ke JPG online gratis. Ubah foto HEIC dan HEIF dari iPhone menjadi JPG yang bisa dibuka di Windows, Android dan semua website. Banyak sekaligus, tanpa upload.",
        "h1": "Konversi HEIC ke JPG gratis",
        "sub": "Foto HEIC dari iPhone tidak bisa dibuka di semua tempat. Ubah ke JPG dalam hitungan detik — banyak sekaligus, langsung di perangkat Anda.",
        "action": "Ubah ke JPG",
        "accepts": "HEIC · HEIF",
        "faq": [
          {
            "q": "Apa itu file HEIC?",
            "a": "HEIC adalah format foto bawaan iPhone. Hemat tempat, tapi banyak PC Windows, HP Android dan website tidak bisa membukanya — JPG bisa di mana saja."
          },
          {
            "q": "Apakah kualitas turun saat diubah ke JPG?",
            "a": "Dengan kualitas 90 atau lebih, perbedaannya tidak terlihat. Atur ke 100 untuk hasil terbaik."
          }
        ]
      },
      "pngToJpg": {
        "name": "PNG ke JPG",
        "desc": "Ubah gambar PNG menjadi file JPG yang lebih kecil.",
        "title": "Konversi PNG ke JPG Gratis — PNG ke JPEG Online",
        "meta": "Konversi PNG ke JPG online gratis. Perkecil gambar PNG menjadi JPEG, pilih kualitas dan warna latar. Banyak sekaligus, tanpa daftar, tanpa upload.",
        "h1": "Konversi PNG ke JPG gratis",
        "sub": "Untuk foto, file JPG jauh lebih kecil dari PNG. Pilih kualitas dan warna latar untuk area transparan.",
        "action": "Ubah ke JPG",
        "accepts": "PNG",
        "faq": [
          {
            "q": "Bagaimana dengan area transparan?",
            "a": "JPG tidak mendukung transparansi, jadi area itu diisi warna latar yang Anda pilih (putih secara bawaan)."
          },
          {
            "q": "Kenapa mengubah PNG ke JPG?",
            "a": "Untuk foto, JPG sering 5–10 kali lebih kecil dari PNG, jadi lebih cepat diunggah, dikirim dan dimuat di website."
          }
        ]
      },
      "webpToJpg": {
        "name": "WebP ke JPG",
        "desc": "Ubah gambar WebP ke JPG yang bisa dibuka aplikasi apa pun.",
        "title": "Konversi WebP ke JPG Gratis — Ubah Gambar WebP Online",
        "meta": "Konversi WebP ke JPG online gratis. Ubah gambar WebP yang disimpan dari website menjadi JPG yang bisa dibuka di semua aplikasi. Banyak sekaligus, tanpa daftar, tanpa upload.",
        "h1": "Konversi WebP ke JPG gratis",
        "sub": "Menyimpan gambar dari website dan ternyata WebP? Ubah ke JPG agar bisa dibuka di aplikasi dan editor apa pun.",
        "action": "Ubah ke JPG",
        "accepts": "WebP",
        "faq": [
          {
            "q": "Kenapa gambar dari website tersimpan sebagai WebP?",
            "a": "Banyak website memakai WebP karena cepat dimuat. Tapi beberapa aplikasi, printer dan program lama tidak bisa membukanya, jadi JPG lebih aman untuk dibagikan."
          },
          {
            "q": "Bisakah banyak WebP sekaligus?",
            "a": "Bisa. Tambahkan semua gambar WebP lalu unduh JPG satu per satu atau sekaligus dalam ZIP."
          }
        ]
      },
      "jpgToPng": {
        "name": "JPG ke PNG",
        "desc": "Ubah foto JPG menjadi gambar PNG tanpa kehilangan kualitas.",
        "title": "Konversi JPG ke PNG Gratis — JPEG ke PNG Online",
        "meta": "Konversi JPG ke PNG online gratis. Ubah foto JPEG menjadi gambar PNG lossless dalam hitungan detik. Banyak sekaligus, tanpa daftar, tanpa upload, tanpa watermark.",
        "h1": "Konversi JPG ke PNG gratis",
        "sub": "Ubah foto JPEG menjadi file PNG lossless — cocok untuk editing, alat desain dan upload yang meminta PNG.",
        "action": "Ubah ke PNG",
        "accepts": "JPG · JPEG",
        "faq": [
          {
            "q": "Apakah PNG-nya berlatar transparan?",
            "a": "Tidak — JPG tidak punya transparansi, jadi PNG tetap memakai latar yang sama. Hanya format file yang berubah."
          },
          {
            "q": "Kenapa PNG lebih besar dari JPG saya?",
            "a": "PNG bersifat lossless dan menyimpan setiap piksel persis. Bagus untuk editing, tapi ukurannya lebih besar dari JPG."
          }
        ]
      },
      "jpgToWebp": {
        "name": "Ubah ke WebP",
        "desc": "Ubah JPG dan PNG menjadi file WebP ringan untuk website.",
        "title": "Konversi JPG ke WebP Gratis — Ubah Gambar ke WebP Online",
        "meta": "Konversi JPG dan PNG ke WebP online gratis. Gambar hingga 30% lebih kecil untuk website lebih cepat dan SEO lebih baik. Banyak sekaligus, tanpa daftar, tanpa upload.",
        "h1": "Ubah gambar ke WebP gratis",
        "sub": "Gambar WebP lebih kecil dari JPG dan PNG dengan kualitas yang sama — pas untuk website dan toko online yang cepat.",
        "action": "Ubah ke WebP",
        "accepts": "JPG · PNG · HEIC",
        "faq": [
          {
            "q": "Kenapa pakai WebP di website saya?",
            "a": "File WebP biasanya 25–35% lebih kecil dari JPG dengan kualitas sama, jadi halaman lebih cepat dimuat — bagus untuk pengunjung dan peringkat Google."
          },
          {
            "q": "Apakah WebP mempertahankan transparansi?",
            "a": "Ya. Gambar PNG transparan tetap transparan setelah diubah ke WebP."
          }
        ]
      },
      "jpgToPdf": {
        "name": "JPG ke PDF",
        "desc": "Jadikan foto dan hasil scan satu dokumen PDF.",
        "title": "Konversi JPG ke PDF Gratis — Ubah Gambar ke PDF Online",
        "meta": "Konversi gambar JPG, PNG dan HEIC ke PDF online gratis. Gabungkan banyak foto jadi satu PDF, pilih A4 atau Letter dan margin. Tanpa daftar, tanpa upload, tanpa watermark.",
        "h1": "Konversi JPG ke PDF gratis",
        "sub": "Gabungkan foto, scan dan screenshot jadi satu PDF. Ubah urutan, pilih ukuran halaman dan unduh langsung.",
        "action": "Buat PDF",
        "accepts": "JPG · PNG · WebP · HEIC",
        "faq": [
          {
            "q": "Bisakah banyak gambar dalam satu PDF?",
            "a": "Bisa. Tambahkan semua gambar, atur urutan dengan tanda panah, dan setiap gambar menjadi satu halaman PDF."
          },
          {
            "q": "Ukuran halaman mana yang dipilih?",
            "a": "A4 adalah standar di Indonesia dan kebanyakan negara, Letter di AS dan Kanada. \"Sesuai gambar\" membuat tiap halaman persis seukuran fotonya."
          }
        ]
      },
      "mergePdf": {
        "name": "Gabung PDF",
        "desc": "Gabungkan beberapa PDF jadi satu dengan urutan sesuka Anda.",
        "title": "Gabung PDF Gratis — Gabungkan File PDF Online dalam Detik",
        "meta": "Gabung file PDF online gratis. Satukan beberapa PDF menjadi satu dokumen dengan urutan yang Anda mau. Tanpa daftar, tanpa upload, tanpa watermark, tanpa batas.",
        "h1": "Gabung file PDF gratis",
        "sub": "Satukan kontrak, invoice dan dokumen menjadi satu PDF. Tambahkan file, atur urutan, lalu unduh.",
        "action": "Gabung PDF",
        "accepts": "PDF",
        "faq": [
          {
            "q": "Bagaimana mengubah urutan PDF?",
            "a": "Gunakan tanda panah atas dan bawah di samping setiap file. Halaman digabung dari atas ke bawah."
          },
          {
            "q": "Apakah ada batas jumlah file?",
            "a": "Tidak ada batas pasti. File yang sangat besar tergantung memori perangkat Anda, tapi puluhan PDF biasa bisa dengan lancar."
          }
        ]
      },
      "pdfToJpg": {
        "name": "PDF ke JPG",
        "desc": "Ubah setiap halaman PDF menjadi gambar berkualitas tinggi.",
        "title": "Konversi PDF ke JPG Gratis — Ubah Halaman PDF ke Gambar Online",
        "meta": "Konversi PDF ke JPG atau PNG online gratis. Setiap halaman jadi gambar berkualitas tinggi, pilih halaman dan resolusi, unduh dalam ZIP. Tanpa daftar, tanpa upload.",
        "h1": "Konversi PDF ke JPG gratis",
        "sub": "Simpan halaman PDF sebagai gambar JPG atau PNG — semua halaman atau yang Anda pilih saja, dalam resolusi tinggi.",
        "action": "Ubah ke gambar",
        "accepts": "PDF",
        "faq": [
          {
            "q": "Bisakah hanya beberapa halaman?",
            "a": "Bisa. Ketik halaman yang Anda mau, misalnya 1-3, 5. Biarkan kosong untuk semua halaman."
          },
          {
            "q": "Kualitas mana yang dipilih?",
            "a": "\"Tinggi\" sudah cukup tajam untuk kebanyakan keperluan. Pilih \"Sangat tinggi\" untuk cetak atau teks kecil; file akan lebih besar."
          }
        ]
      },
      "splitPdf": {
        "name": "Pisah PDF",
        "desc": "Ambil halaman tertentu atau pisahkan PDF jadi beberapa file.",
        "title": "Pisah PDF Gratis — Ambil Halaman dari PDF Online",
        "meta": "Pisah PDF online gratis. Ambil halaman yang Anda butuhkan ke PDF baru atau jadikan setiap halaman file sendiri. Tanpa daftar, tanpa upload, tanpa watermark.",
        "h1": "Pisah PDF gratis",
        "sub": "Ambil halaman yang Anda perlukan, atau pisahkan PDF menjadi satu file per halaman. Cepat, gratis dan privat.",
        "action": "Pisah PDF",
        "accepts": "PDF",
        "faq": [
          {
            "q": "Bagaimana mengambil halaman tertentu?",
            "a": "Pilih \"Pilih halaman\" lalu ketik halamannya, seperti 1-3, 5. Halaman itu disimpan ke PDF baru dengan urutan tersebut."
          },
          {
            "q": "Apakah memisah mengubah kualitas?",
            "a": "Tidak. Halaman disalin persis apa adanya — teks, gambar dan tautan tetap sama."
          }
        ]
      }
    }
  },
  footer: { tagline: "Alat online gratis yang menghormati privasi Anda.", privacy: "Privasi", terms: "Ketentuan", rights: "Hak cipta dilindungi.", madeFree: "Gratis selamanya. Tanpa daftar." },
};

export default id;
