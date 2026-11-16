import type { Dict } from "./en";

const id: Dict = {
  nav: { generator: "Pembuat QR", scanner: "Pemindai QR", bulk: "QR Massal", barcode: "Barcode", types: "Jenis QR", language: "Bahasa", theme: "Tema" },
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
  footer: { tagline: "Alat online gratis yang menghormati privasi Anda.", privacy: "Privasi", terms: "Ketentuan", rights: "Hak cipta dilindungi.", madeFree: "Gratis selamanya. Tanpa daftar." },
};

export default id;
