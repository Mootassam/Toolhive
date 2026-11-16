import type { Dict } from "./en";

const tr: Dict = {
  nav: { generator: "QR Oluşturucu", scanner: "QR Okuyucu", bulk: "Toplu QR", barcode: "Barkod", tools: "Tüm araçlar", types: "QR Türleri", language: "Dil", theme: "Tema" },
  home: {
    title: "Logolu Ücretsiz QR Kod Oluşturucu — Üyelik Yok, Süresi Asla Dolmaz",
    meta: "Ücretsiz özel QR kod oluşturun: logo, renkler, gradyanlar, çerçeveler, SVG ve PDF indirme, WiFi, vCard, WhatsApp ve daha fazlası. Üyelik yok, filigran yok, süresi asla dolmaz.",
    badge: "%100 ücretsiz · Üyelik yok · Filigran yok · Süresi dolmaz",
    h1a: "Ücretsiz QR kod oluşturucu",
    h1b: "asla çalışmayı bırakmayan",
    sub: "Diğer sitelerin para aldığı tüm “premium” özellikler — logo, çerçeve, gradyan, SVG/PDF, toplu oluşturma — sonsuza kadar ücretsiz. Tarayıcınızda oluşturulur, tamamen gizli.",
  },
  type: {
    title: "{name} QR Kod Oluşturucu — Ücretsiz, Özel, Süresi Dolmaz",
    h1: "Ücretsiz {name} QR kod oluşturucu",
    meta: "Ücretsiz {name} QR kod oluşturun. {desc} Logonuzu, renklerinizi ve çerçeve ekleyin, PNG, SVG veya PDF indirin. Üyelik yok, süresi dolmaz.",
  },
  types: {
    url: { name: "URL", desc: "Tarandığında herhangi bir siteyi veya bağlantıyı açar." },
    text: { name: "Metin", desc: "Bir metin mesajı gösterir, internetsiz çalışır." },
    wifi: { name: "WiFi", desc: "Misafirler şifre yazmadan WiFi'ye bağlanır." },
    vcard: { name: "vCard", desc: "Kartvizitinizi paylaşın — tek dokunuşla telefona kaydedilir." },
    email: { name: "E-posta", desc: "Adres, konu ve mesajla hazır bir e-posta açar." },
    sms: { name: "SMS", desc: "Numaranıza önceden yazılmış bir SMS açar." },
    phone: { name: "Telefon", desc: "Tek taramayla bir numarayı arayın." },
    whatsapp: { name: "WhatsApp", desc: "Sizinle WhatsApp sohbeti başlatır, isteğe bağlı mesajla." },
    location: { name: "Konum", desc: "Bir yeri veya GPS koordinatlarını Google Haritalar'da açar." },
    event: { name: "Etkinlik", desc: "Tarih, saat ve yerle takvime etkinlik ekler." },
    social: { name: "Sosyal Medya", desc: "Instagram, TikTok, Facebook, YouTube ve daha fazlasına bağlantı." },
    upi: { name: "UPI Ödeme", desc: "Hindistan'da GPay, PhonePe, Paytm ile UPI ödemesi alın." },
    crypto: { name: "Kripto", desc: "Bitcoin, Ethereum, USDT ve diğer kripto ödemelerini alın." },
    paypal: { name: "PayPal", desc: "PayPal.me bağlantınızla ödeme alın, isteğe bağlı tutarla." },
  },
  f: {
    url: "Web sitesi URL'si", text: "Metniniz", ssid: "Ağ adı (SSID)", password: "Şifre", encryption: "Güvenlik",
    noPassword: "Şifre yok", hiddenNetwork: "Gizli ağ", firstName: "Ad", lastName: "Soyad",
    mobile: "Cep telefonu", workPhone: "İş telefonu", email: "E-posta", website: "Web sitesi", company: "Şirket", jobTitle: "Unvan",
    street: "Sokak", city: "Şehir", zip: "Posta kodu", country: "Ülke", note: "Not", emailTo: "Alıcı (e-posta)",
    subject: "Konu", message: "Mesaj", phone: "Telefon numarası", whatsappNumber: "WhatsApp numarası (ülke koduyla)",
    prefilledMessage: "Hazır mesaj (isteğe bağlı)", addressOrPlace: "Adres veya yer adı", latitude: "Enlem",
    longitude: "Boylam", eventTitle: "Etkinlik adı", start: "Başlangıç", end: "Bitiş", location: "Yer", description: "Açıklama",
    platform: "Platform", usernameOrLink: "Kullanıcı adı veya profil bağlantısı", upiId: "UPI ID", payeeName: "Alıcı adı",
    amountOptional: "Tutar (isteğe bağlı)", coin: "Coin", walletAddress: "Cüzdan adresi", paypalMeUser: "PayPal.me kullanıcı adı",
    currency: "Para birimi",
  },
  ui: {
    step1: "1. İçerik", step2: "2. Tasarım", step3: "3. İndir",
    templates: "Şablonlar", shapes: "Şekiller", colors: "Renkler", logo: "Logo", frame: "Çerçeve", advanced: "Gelişmiş",
    dots: "Noktalar", eyeFrame: "Köşe çerçevesi", eyeBall: "Köşe noktası", foreground: "Nokta rengi", second: "İkinci renk",
    gradient: "Gradyan", none: "Yok", linear: "Doğrusal", radial: "Dairesel", angle: "Açı", eyeColor: "Köşe rengi",
    sameAsDots: "Noktalarla aynı", background: "Arka plan", transparent: "Şeffaf",
    uploadLogo: "Logo yükle", removeLogo: "Kaldır", logoSize: "Logo boyutu", clearBehindLogo: "Logonun arkasındaki noktaları temizle",
    orPickIcon: "Veya bir simge seçin", frameText: "Çerçeve metni", frameColor: "Çerçeve rengi", textColor: "Metin rengi",
    ecc: "Hata düzeltme", eccL: "Düşük %7", eccM: "Orta %15", eccQ: "Yüksek %25", eccH: "Maks %30", margin: "Kenar boşluğu",
    size: "Boyut", download: "İndir", copy: "Resmi kopyala", copied: "Kopyalandı!", print: "Yazdır", reset: "Tasarımı sıfırla",
    scannable: "Tarama testi başarılı — bu kod çalışıyor", notScannable: "Tarama testi başarısız — kontrastı artırın veya logoyu küçültün",
    checking: "Tarama test ediliyor…", lowContrast: "Düşük kontrast: açık zemin üzerinde koyu noktalar en iyi okunur.",
    inverted: "Koyu zeminde açık noktalar — bazı eski okuyucular bunu okuyamaz.",
    enterContent: "QR kodunuzu oluşturmak için içeriği doldurun", neverExpires: "Statik kod — sonsuza kadar çalışır, hesap gerekmez",
    vectorHint: "SVG ve PDF vektördür — her boyutta baskı için mükemmel.", saveDesign: "Kaydet", savedDesigns: "Kayıtlı tasarımlarım",
    load: "Yükle", del: "Sil", noneSaved: "Henüz kayıt yok — tasarımlarınız bu cihazda kalır.", privacy: "Verileriniz tarayıcınızdan asla çıkmaz.",
    allTypes: "Tüm QR kod türleri",
    tooLong: "Tek bir QR kod için içerik çok uzun — lütfen kısaltın.",
  },
  features: {
    title: "QR sitelerinin para aldığı her şey — ücretsiz",
    items: [
      { t: "Süresi asla dolmaz", d: "Statik QR kodlar verinizi doğrudan içerir. Basılı kodlarınızı kapatan deneme süresi yok." },
      { t: "Logo ve marka renkleri", d: "Logo yükleyin, renk ve gradyan seçin, 9 nokta ve 10 köşe stili." },
      { t: "Harekete geçiren çerçeveler", d: "Kendi metin ve renklerinizle 5 stilde “Beni tara” çerçevesi ekleyin." },
      { t: "Baskıya hazır", d: "4096 px'e kadar PNG, vektör SVG, PDF, JPG ve WebP. Asla filigran yok." },
      { t: "Toplu oluşturma", d: "Bir listeden veya CSV'den yüzlerce QR kod oluşturup ZIP olarak indirin." },
      { t: "Gizli ve anında", d: "Her şey tarayıcınızda çalışır. Hiçbir şey yüklenmez, saklanmaz veya izlenmez." },
    ],
  },
  compare: {
    title: "{brand} ve tipik “ücretsiz” QR oluşturucular",
    feature: "Özellik", us: "{brand}", them: "Diğerleri",
    rows: ["Üyelik yok", "Kodların süresi dolmaz", "Logo yükleme", "SVG / PDF indirme", "Filigran yok", "Toplu oluşturucu", "Metinli çerçeveler", "Sınırsız tarama"],
    themVals: ["Genelde zorunlu", "Deneme 7–14 günde biter", "Ücretli plan", "Ücretli plan", "Bazen", "Ücretli plan", "Sınırlı", "Tarama limiti"],
  },
  howto: {
    title: "3 adımda QR kod nasıl oluşturulur",
    steps: [
      { t: "Türü seçin ve içeriği ekleyin", d: "Bir bağlantı yapıştırın veya WiFi, kişi, WhatsApp, ödeme bilgilerini doldurun." },
      { t: "Kendinize göre tasarlayın", d: "Bir şablon seçin veya noktaları, köşeleri, renkleri değiştirin, logo ve çerçeve ekleyin." },
      { t: "İndirin ve kullanın", d: "Taranabildiğini test ederiz; PNG, SVG veya PDF indirin, yazdırın veya paylaşın." },
    ],
  },
  faq: {
    title: "Sık sorulan sorular",
    items: [
      { q: "Bu QR kod oluşturucu gerçekten ücretsiz mi?", a: "Evet. Tüm özellikler üyeliksiz, denemesiz ve filigransız ücretsizdir. Kodları kişisel ve ticari projelerde kullanabilirsiniz." },
      { q: "QR kodların süresi dolar mı?", a: "Asla. Bunlar statik QR kodlardır: içerik kodun içinde saklanır, bu yüzden sonsuza kadar çalışır — bu site kapansa bile." },
      { q: "Logomu ekleyebilir miyim?", a: "Evet. PNG, JPG veya SVG logo yükleyin. Hata düzeltmeyi otomatik artırır ve indirmeden önce tarama testi yaparız." },
      { q: "Baskı için en iyi format hangisi?", a: "SVG veya PDF. Vektör dosyalardır; kartvizit, broşür, menü ve büyük afişlerde net kalır." },
      { q: "Tarama veya kod sınırı var mı?", a: "Sınır yok. İstediğiniz kadar QR kod oluşturun, sınırsız taranabilir." },
      { q: "Verilerim güvende mi?", a: "QR kodlarınız kendi tarayıcınızda oluşturulur. Yazdıklarınızı yüklemeyiz, saklamayız ve görmeyiz." },
      { q: "Basıldıktan sonra QR kodu düzenleyebilir miyim?", a: "Statik kod basıldıktan sonra değişmez. İpucu: kontrol ettiğiniz bir sayfaya (sitenize) yönlendirin ve o sayfayı güncelleyin." },
      { q: "QR kod nasıl taranır?", a: "Telefon kameranızı açıp koda doğrultun veya web kamerası ya da resimle ücretsiz online QR okuyucumuzu kullanın." },
    ],
  },
  scanner: {
    title: "Ücretsiz Online QR Kod Okuyucu — Kameradan veya Resimden",
    meta: "Kameranızla veya resim yükleyerek QR kodları ücretsiz online tarayın. Telefonda ve bilgisayarda çalışır, hiçbir şey yüklenmez.",
    h1: "Ücretsiz online QR kod okuyucu",
    sub: "Kameranızı kullanın veya ekran görüntüsü yükleyin. Çözümleme cihazınızda yapılır — hiçbir şey yüklenmez.",
    camera: "Kamerayla tara", stop: "Kamerayı durdur", upload: "Resim yükle", drop: "veya buraya resim bırakın / yapıştırın",
    result: "Sonuç", open: "Bağlantıyı aç", copy: "Kopyala", copied: "Kopyalandı!", notFound: "Bu resimde QR kod bulunamadı.",
    noCamera: "Kamera kullanılamıyor. Kamera iznini verin veya resim yükleyin.", history: "Tarama geçmişi", clear: "Temizle",
    wifiJoin: "WiFi ağı", makeOwn: "Kendi QR kodunuzu oluşturun",
  },
  bulk: {
    title: "Toplu QR Kod Oluşturucu — Yüzlercesi Ücretsiz, ZIP İndir",
    meta: "Bir listeden veya CSV'den aynı anda yüzlerce QR kod oluşturun. Özel renk ve logo, PNG veya SVG olarak ZIP'te indirin. Ücretsiz, üyeliksiz.",
    h1: "Ücretsiz toplu QR kod oluşturucu",
    sub: "Her satıra bir bağlantı veya metin — ya da CSV yükleyin. Her kod tasarımınızı alır. Hepsini ZIP olarak indirin.",
    input: "Verileriniz (her satıra bir tane)", csv: "CSV / TXT yükle", csvHint: "İsteğe bağlı 2. sütun = dosya adı: https://site.com/a, masa-1",
    count: "{n} QR kod", format: "Format", generate: "ZIP oluştur", working: "{n} içinden {i} oluşturuluyor…", done: "Tamam! ZIP dosyanız indiriliyor.",
    max: "Seferde en fazla 1.000 kod.",
  },
  legal: {
    privacyTitle: "Gizlilik Politikası",
    privacy: [
      "QR kodlar tamamen tarayıcınızda oluşturulur. Girdiğiniz metinler, bağlantılar, kişiler, WiFi şifreleri ve resimler sunucularımıza gönderilmez.",
      "Kayıtlı tasarımlar ve tarama geçmişi yalnızca tarayıcınızın yerel depolamasında tutulur. Dilediğiniz zaman silebilirsiniz.",
      "Ziyaretleri saymak için gizlilik dostu, çerezsiz analiz (Vercel Web Analytics) kullanıyoruz. Gelecekte reklam gösterebiliriz; bu durumda reklam ortakları çerez kullanabilir ve bu politika güncellenir.",
      "İletişim: {email}",
    ],
    termsTitle: "Kullanım Koşulları",
    terms: [
      "Bu hizmet ücretsizdir ve garanti olmaksızın “olduğu gibi” sunulur. Büyük miktarda basmadan önce QR kodu her zaman test edin.",
      "Oluşturulan QR kodları her türlü kişisel veya ticari amaçla kullanabilirsiniz. Kodlanan içerikten siz sorumlusunuz.",
      "Bu hizmeti yasa dışı içeriğe, kötü amaçlı yazılıma veya oltalamaya yönlendiren kodlar için kullanmayın.",
    ],
  },
  barcode: {
    "title": "Ücretsiz Barkod Oluşturucu — EAN-13, UPC, Code 128 | PNG, SVG, PDF",
    "meta": "Online ücretsiz barkod oluşturun: EAN-13, UPC-A, Code 128, Code 39, ITF-14 ve daha fazlası. Boyut ve renkleri ayarlayın, PNG, SVG veya PDF indirin. Üyelik yok, filigran yok.",
    "h1": "Ücretsiz barkod oluşturucu",
    "sub": "Ürünler, kargo ve stok için EAN, UPC, Code 128 ve daha fazlası. Baskıya hazır, üyelik yok, filigran yok.",
    "type": "Barkod türü",
    "data": "Barkod verisi",
    "label": "Barkodun altındaki metin (isteğe bağlı)",
    "showText": "Metni göster",
    "hideText": "Metni gizle",
    "barWidth": "Çubuk genişliği",
    "height": "Yükseklik",
    "fontSize": "Metin boyutu",
    "margin": "Kenar boşluğu",
    "barColor": "Çubuk rengi",
    "fileType": "Dosya türü",
    "example": "Örnek kullan",
    "invalid": "Bu veri {name} için uygun değil.",
    "hints": {
      "CODE128": "Harf, rakam ve semboller. Kargo ve stokta en çok kullanılan barkod.",
      "EAN13": "12 veya 13 hane. Dünya genelinde perakende ürünler — 12 hane girin, kontrol hanesini biz ekleriz.",
      "UPC": "11 veya 12 hane. ABD ve Kanada'daki perakende ürünler.",
      "EAN8": "7 veya 8 hane. Küçük ambalajlar.",
      "UPCE": "6 veya 8 hane. Küçük ürünler için kısa UPC.",
      "CODE39": "Büyük harf, rakam, boşluk ve - . $ / + %. Sanayi ve kimlik kartları.",
      "ITF14": "13 veya 14 hane. Koli ve paletler.",
      "codabar": "Rakamlar ve - $ : / . + — başta ve sonda A, B, C veya D. Kütüphaneler ve kan bankaları.",
      "MSI": "Yalnızca rakam. Depo rafları ve envanter.",
      "pharmacode": "3 ile 131070 arasında bir sayı. İlaç ambalajları."
    },
    "faq": [
      {
        "q": "Hangi barkod türünü kullanmalıyım?",
        "a": "Mağazada satılan ürünler için EAN-13 (dünya geneli) veya UPC-A (ABD ve Kanada). Kargo etiketleri, stok ve iç kodlar için Code 128 — harf ve rakam kabul eder."
      },
      {
        "q": "Ticari amaçla ücretsiz kullanabilir miyim?",
        "a": "Evet. İstediğiniz kadar indirip yazdırın, her amaç için, filigransız ve üyeliksiz."
      },
      {
        "q": "Mağazalarda satmak için GS1 numarası gerekir mi?",
        "a": "Çoğu perakende mağaza GS1'e kayıtlı EAN/UPC numarası ister. Bu araç barkod görselini oluşturur; resmi ürün numarası vermez."
      },
      {
        "q": "Baskı için en iyi format hangisi?",
        "a": "SVG veya PDF. Vektör dosyalardır, çubuklar her boyutta keskin kalır — okuyucular için önemlidir."
      },
      {
        "q": "Barkodum neden okunmuyor?",
        "a": "Açık zemin üzerine koyu çubuk kullanın, çok küçük basmayın ve çevresinde beyaz boşluk bırakın. EAN ve UPC doğru kontrol hanesi ister — EAN-13 için 12 hane girin, biz hesaplarız."
      }
    ]
  },
  tools: {
    "hubTitle": "Ücretsiz Online Araçlar — Görsel, PDF, QR Kod ve Barkod",
    "hubMeta": "Tarayıcınızda çalışan ücretsiz online araçlar: görsel sıkıştırma ve boyutlandırma, HEIC'ten JPG'ye, JPG'den PDF'ye, PDF birleştirme ve bölme, QR kod ve barkod. Üyelik yok, yükleme yok.",
    "hubH1": "Tüm ücretsiz araçlar",
    "hubSub": "Görseller, PDF'ler, QR kodlar ve barkodlar — hızlı, ücretsiz ve gizli. Dosyalarınız cihazınızdan asla çıkmaz.",
    "badge": "%100 ücretsiz · Üyelik yok · Dosyalar cihazınızda kalır",
    "more": "Diğer ücretsiz araçlar",
    "groups": {
      "qr": "QR kod ve barkod",
      "image": "Görsel araçları",
      "pdf": "PDF araçları"
    },
    "ui": {
      "chooseFiles": "Dosya seç",
      "chooseFile": "Bir dosya seç",
      "dropHint": "veya buraya sürükleyip bırakın — Ctrl+V ile yapıştırabilirsiniz",
      "wrongType": "Bazı dosyalar bu araç desteklemediği için atlandı.",
      "files": "{n} dosya",
      "pages": "{n} sayfa",
      "clear": "Tümünü temizle",
      "remove": "Kaldır",
      "download": "İndir",
      "downloadAll": "Tümünü indir (ZIP)",
      "settings": "Ayarlar",
      "working": "{n} dosyadan {i}. işleniyor…",
      "done": "Bitti!",
      "kept": "Zaten optimize — orijinal korundu",
      "error": "Bu dosya okunamadı.",
      "noWebp": "Tarayıcınız WebP dosyası oluşturamıyor. Lütfen Chrome, Edge veya Firefox deneyin.",
      "encrypted": "Bu PDF şifreli veya bozuk.",
      "bySize": "Boyuta göre",
      "byPercent": "Yüzdeye göre",
      "width": "Genişlik",
      "height": "Yükseklik",
      "keepRatio": "En-boy oranını koru",
      "percent": "Boyut",
      "maxWidth": "Maks. genişlik",
      "original": "Orijinal",
      "format": "Çıktı formatı",
      "auto": "Otomatik",
      "sameFormat": "Aynı",
      "quality": "Kalite",
      "background": "Arka plan",
      "pageSize": "Sayfa boyutu",
      "fitImage": "Görsele göre",
      "margin": "Kenar boşluğu",
      "none": "Yok",
      "small": "Küçük",
      "large": "Büyük",
      "resolution": "Görsel kalitesi",
      "normal": "Normal",
      "high": "Yüksek",
      "veryHigh": "Çok yüksek",
      "splitEach": "Her sayfa",
      "extract": "Sayfa seç",
      "pagesOptional": "Sayfalar (boş = tümü)",
      "pagesToExtract": "Çıkarılacak sayfalar",
      "rangesHint": "Örnek: 1-3, 5, 8-10",
      "addOneMore": "Birleştirmek için en az 2 PDF dosyası ekleyin.",
      "noPages": "Eşleşen sayfa yok — sayfa numaralarını kontrol edin.",
      "moveUp": "Yukarı taşı",
      "moveDown": "Aşağı taşı",
      "privacy": "Dosyalarınız cihazınızda işlenir ve asla yüklenmez."
    },
    "faqCommon": [
      {
        "q": "Gerçekten ücretsiz mi?",
        "a": "Evet. Tüm araçlar ücretsiz; üyelik, filigran ve günlük sınır yok."
      },
      {
        "q": "Dosyalarım güvende mi?",
        "a": "Dosyalarınız cihazınızdan asla çıkmaz. Her şey tarayıcınızda işlenir, hiçbir şey sunucuya yüklenmez."
      }
    ],
    "items": {
      "compressImage": {
        "name": "Görsel sıkıştır",
        "desc": "JPG, PNG ve WebP boyutunu görünür kalite kaybı olmadan küçültün.",
        "title": "Görsel Sıkıştırma Online Ücretsiz — JPG, PNG ve WebP Boyutunu Küçült",
        "meta": "Görselleri online ücretsiz sıkıştırın. JPG, PNG, WebP ve HEIC dosya boyutunu saniyeler içinde kalite kaybı olmadan küçültün. Toplu sıkıştırma, üyelik yok, yükleme yok.",
        "h1": "Ücretsiz görsel sıkıştırma",
        "sub": "Web siteleri, e-posta ve WhatsApp için fotoğraf boyutunu küçültün. Birçok görseli aynı anda sıkıştırın — hiçbir şey yüklenmez.",
        "action": "Görselleri sıkıştır",
        "accepts": "JPG · PNG · WebP · HEIC",
        "faq": [
          {
            "q": "Görsellerim ne kadar küçülür?",
            "a": "Kalite 70'te fotoğraflar genelde %50–80 küçülür ve fark görülmez. Daha da küçültmek için kaliteyi düşürün veya maks. genişlik belirleyin."
          },
          {
            "q": "PNG dosyalarını sıkıştırabilir miyim?",
            "a": "Evet. Otomatik modda PNG ve modern bir format denenir, en küçüğü seçilir. Şeffaf görseller şeffaf kalır."
          }
        ]
      },
      "resizeImage": {
        "name": "Görsel boyutlandır",
        "desc": "Genişlik ve yüksekliği piksel veya yüzde ile değiştirin.",
        "title": "Görsel Boyutlandırma Online Ücretsiz — Piksel veya Yüzde ile",
        "meta": "Görselleri online ücretsiz boyutlandırın. JPG, PNG ve WebP genişlik ve yüksekliğini piksel veya yüzde ile değiştirin, oranı koruyun, toplu işlem yapın. Üyelik yok, yükleme yok.",
        "h1": "Ücretsiz görsel boyutlandırma",
        "sub": "Piksel olarak tam boyut verin veya yüzde ile ölçekleyin. Sosyal medya, web siteleri ve formlar için birçok görseli birden boyutlandırın.",
        "action": "Boyutlandır",
        "accepts": "JPG · PNG · WebP · HEIC",
        "faq": [
          {
            "q": "Görseli bozmadan nasıl boyutlandırırım?",
            "a": "\"En-boy oranını koru\" açık kalsın ve sadece genişlik veya yüksekliği girin — diğer kenar otomatik hesaplanır."
          },
          {
            "q": "Birçok görseli aynı anda boyutlandırabilir miyim?",
            "a": "Evet. İstediğiniz kadar görsel ekleyin; hepsi aynı ayarları alır ve tek bir ZIP olarak indirebilirsiniz."
          }
        ]
      },
      "heicToJpg": {
        "name": "HEIC'ten JPG'ye",
        "desc": "iPhone HEIC fotoğraflarını her yerde açılan JPG'ye çevirin.",
        "title": "HEIC'ten JPG'ye Dönüştürücü Ücretsiz — iPhone Fotoğraflarını Online Çevir",
        "meta": "HEIC'i online ücretsiz JPG'ye çevirin. iPhone HEIC ve HEIF fotoğraflarını Windows, Android ve her sitede açılan JPG'ye dönüştürün. Toplu dönüştürme, yükleme yok.",
        "h1": "Ücretsiz HEIC'ten JPG'ye dönüştürme",
        "sub": "iPhone'un HEIC fotoğrafları her yerde açılmaz. Saniyeler içinde JPG'ye çevirin — birçoğunu birden, doğrudan cihazınızda.",
        "action": "JPG'ye çevir",
        "accepts": "HEIC · HEIF",
        "faq": [
          {
            "q": "HEIC dosyası nedir?",
            "a": "HEIC, iPhone'ların varsayılan fotoğraf formatıdır. Yer kazandırır ama birçok Windows bilgisayar, Android telefon ve site açamaz — JPG her yerde çalışır."
          },
          {
            "q": "HEIC'ten JPG'ye çevirince kalite düşer mi?",
            "a": "Kalite 90 ve üzerinde fark görünmez. En iyi sonuç için 100 seçebilirsiniz."
          }
        ]
      },
      "pngToJpg": {
        "name": "PNG'den JPG'ye",
        "desc": "PNG görselleri daha küçük JPG dosyalarına çevirin.",
        "title": "PNG'den JPG'ye Dönüştürücü Ücretsiz — PNG'yi JPEG'e Online Çevir",
        "meta": "PNG'yi online ücretsiz JPG'ye çevirin. PNG görselleri JPEG olarak küçültün, kaliteyi ve arka plan rengini seçin. Toplu dönüştürme, üyelik yok, yükleme yok.",
        "h1": "Ücretsiz PNG'den JPG'ye dönüştürme",
        "sub": "Fotoğraflarda JPG dosyaları PNG'den çok daha küçüktür. Şeffaf alanlar için kaliteyi ve arka plan rengini seçin.",
        "action": "JPG'ye çevir",
        "accepts": "PNG",
        "faq": [
          {
            "q": "Şeffaf alanlara ne olur?",
            "a": "JPG şeffaflığı desteklemez; bu alanlar seçtiğiniz arka plan rengiyle doldurulur (varsayılan beyaz)."
          },
          {
            "q": "PNG'yi neden JPG'ye çevirmeliyim?",
            "a": "Fotoğraflarda JPG çoğu zaman PNG'den 5–10 kat küçüktür; yüklemesi, göndermesi ve sitede açılması daha hızlıdır."
          }
        ]
      },
      "webpToJpg": {
        "name": "WebP'den JPG'ye",
        "desc": "WebP görselleri her uygulamada açılan JPG'ye çevirin.",
        "title": "WebP'den JPG'ye Dönüştürücü Ücretsiz — WebP Görselleri Online Çevir",
        "meta": "WebP'yi online ücretsiz JPG'ye çevirin. Sitelerden kaydedilen WebP görselleri her uygulamada açılan JPG'ye dönüştürün. Toplu dönüştürme, üyelik yok, yükleme yok.",
        "h1": "Ücretsiz WebP'den JPG'ye dönüştürme",
        "sub": "Bir siteden görsel kaydettiniz ve WebP mi çıktı? Her uygulamada ve editörde açılması için JPG'ye çevirin.",
        "action": "JPG'ye çevir",
        "accepts": "WebP",
        "faq": [
          {
            "q": "Sitelerdeki görseller neden WebP olarak kaydediliyor?",
            "a": "Birçok site hızlı yüklendiği için WebP kullanır. Ama bazı uygulamalar, yazıcılar ve eski programlar açamaz; paylaşmak için JPG daha güvenlidir."
          },
          {
            "q": "Birçok WebP'yi aynı anda çevirebilir miyim?",
            "a": "Evet. Tüm WebP görselleri ekleyin, JPG'leri tek tek veya bir ZIP içinde indirin."
          }
        ]
      },
      "jpgToPng": {
        "name": "JPG'den PNG'ye",
        "desc": "JPG fotoğrafları kayıpsız PNG görsellere çevirin.",
        "title": "JPG'den PNG'ye Dönüştürücü Ücretsiz — JPEG'i PNG'ye Online Çevir",
        "meta": "JPG'yi online ücretsiz PNG'ye çevirin. JPEG fotoğrafları saniyeler içinde kayıpsız PNG görsellere dönüştürün. Toplu dönüştürme, üyelik yok, yükleme yok, filigran yok.",
        "h1": "Ücretsiz JPG'den PNG'ye dönüştürme",
        "sub": "JPEG fotoğrafları kayıpsız PNG dosyalarına çevirin — düzenleme, tasarım araçları ve PNG isteyen yüklemeler için ideal.",
        "action": "PNG'ye çevir",
        "accepts": "JPG · JPEG",
        "faq": [
          {
            "q": "PNG'nin arka planı şeffaf olur mu?",
            "a": "Hayır — JPG'de şeffaflık yoktur, PNG aynı arka planı korur. Sadece dosya formatı değişir."
          },
          {
            "q": "PNG neden JPG'mden büyük?",
            "a": "PNG kayıpsızdır ve her pikseli birebir saklar. Düzenleme için harika ama dosyalar JPG'den büyüktür."
          }
        ]
      },
      "jpgToWebp": {
        "name": "WebP'ye çevir",
        "desc": "JPG ve PNG'yi web siteleri için hafif WebP dosyalarına çevirin.",
        "title": "JPG'den WebP'ye Dönüştürücü Ücretsiz — Görselleri Online WebP Yap",
        "meta": "JPG ve PNG'yi online ücretsiz WebP'ye çevirin. Daha hızlı siteler ve daha iyi SEO için %30'a kadar daha küçük görseller. Toplu dönüştürme, üyelik yok, yükleme yok.",
        "h1": "Görselleri ücretsiz WebP'ye çevirin",
        "sub": "WebP görseller aynı kalitede JPG ve PNG'den küçüktür — hızlı web siteleri ve online mağazalar için ideal.",
        "action": "WebP'ye çevir",
        "accepts": "JPG · PNG · HEIC",
        "faq": [
          {
            "q": "Sitemde neden WebP kullanmalıyım?",
            "a": "WebP dosyaları aynı kalitede genelde JPG'den %25–35 küçüktür; sayfalar daha hızlı açılır — ziyaretçiler ve Google sıralaması için iyidir."
          },
          {
            "q": "WebP şeffaflığı korur mu?",
            "a": "Evet. Şeffaf PNG görseller WebP'ye çevrildiğinde de şeffaf kalır."
          }
        ]
      },
      "jpgToPdf": {
        "name": "JPG'den PDF'ye",
        "desc": "Fotoğrafları ve taramaları tek bir PDF belgesine dönüştürün.",
        "title": "JPG'den PDF'ye Dönüştürücü Ücretsiz — Görselleri Online PDF Yap",
        "meta": "JPG, PNG ve HEIC görselleri online ücretsiz PDF'ye çevirin. Birçok fotoğrafı tek PDF'de birleştirin, A4 veya Letter ve kenar boşluğu seçin. Üyelik yok, yükleme yok, filigran yok.",
        "h1": "Ücretsiz JPG'den PDF'ye dönüştürme",
        "sub": "Fotoğrafları, taramaları ve ekran görüntülerini tek bir PDF'de birleştirin. Sırayı değiştirin, sayfa boyutunu seçin ve hemen indirin.",
        "action": "PDF oluştur",
        "accepts": "JPG · PNG · WebP · HEIC",
        "faq": [
          {
            "q": "Tek PDF'ye birçok görsel koyabilir miyim?",
            "a": "Evet. Tüm görsellerinizi ekleyin, oklarla sırayı değiştirin; her görsel PDF'nin bir sayfası olur."
          },
          {
            "q": "Hangi sayfa boyutunu seçmeliyim?",
            "a": "A4 Türkiye'de ve çoğu ülkede standarttır, Letter ise ABD ve Kanada'da. \"Görsele göre\" her sayfayı fotoğrafıyla aynı boyutta yapar."
          }
        ]
      },
      "mergePdf": {
        "name": "PDF birleştir",
        "desc": "Birden çok PDF'yi istediğiniz sırayla tek dosyada birleştirin.",
        "title": "PDF Birleştirme Ücretsiz — PDF Dosyalarını Online Saniyeler İçinde Birleştir",
        "meta": "PDF dosyalarını online ücretsiz birleştirin. Birden çok PDF'yi istediğiniz sırayla tek belgede toplayın. Üyelik yok, yükleme yok, filigran yok, sınır yok.",
        "h1": "Ücretsiz PDF birleştirme",
        "sub": "Sözleşmeleri, faturaları ve belgeleri tek bir PDF'de birleştirin. Dosyaları ekleyin, sırayı ayarlayın ve indirin.",
        "action": "PDF birleştir",
        "accepts": "PDF",
        "faq": [
          {
            "q": "PDF'lerin sırasını nasıl değiştiririm?",
            "a": "Her dosyanın yanındaki yukarı ve aşağı okları kullanın. Sayfalar yukarıdan aşağıya birleştirilir."
          },
          {
            "q": "Dosya sayısı sınırı var mı?",
            "a": "Sabit bir sınır yok. Çok büyük dosyalar cihazınızın belleğine bağlıdır, ama onlarca normal PDF sorunsuz çalışır."
          }
        ]
      },
      "pdfToJpg": {
        "name": "PDF'den JPG'ye",
        "desc": "Her PDF sayfasını yüksek kaliteli bir görsele çevirin.",
        "title": "PDF'den JPG'ye Dönüştürücü Ücretsiz — PDF Sayfalarını Online Görsele Çevir",
        "meta": "PDF'yi online ücretsiz JPG veya PNG'ye çevirin. Her sayfa yüksek kaliteli görsel olur, sayfaları ve çözünürlüğü seçin, ZIP olarak indirin. Üyelik yok, yükleme yok.",
        "h1": "Ücretsiz PDF'den JPG'ye dönüştürme",
        "sub": "PDF sayfalarını JPG veya PNG görsel olarak kaydedin — tüm sayfalar veya sadece seçtikleriniz, yüksek çözünürlükte.",
        "action": "Görsele çevir",
        "accepts": "PDF",
        "faq": [
          {
            "q": "Sadece bazı sayfaları çevirebilir miyim?",
            "a": "Evet. İstediğiniz sayfaları yazın, örneğin 1-3, 5. Tüm sayfalar için boş bırakın."
          },
          {
            "q": "Hangi kaliteyi seçmeliyim?",
            "a": "\"Yüksek\" çoğu kullanım için yeterince nettir. Baskı veya küçük yazılar için \"Çok yüksek\" seçin; dosyalar büyür."
          }
        ]
      },
      "splitPdf": {
        "name": "PDF böl",
        "desc": "Sayfa çıkarın veya PDF'yi ayrı dosyalara bölün.",
        "title": "PDF Bölme Ücretsiz — PDF'den Online Sayfa Çıkar",
        "meta": "PDF'yi online ücretsiz bölün. İhtiyacınız olan sayfaları yeni bir PDF'ye çıkarın veya her sayfayı ayrı dosya yapın. Üyelik yok, yükleme yok, filigran yok.",
        "h1": "Ücretsiz PDF bölme",
        "sub": "İhtiyacınız olan sayfaları alın veya PDF'yi sayfa başına bir dosyaya bölün. Hızlı, ücretsiz ve gizli.",
        "action": "PDF böl",
        "accepts": "PDF",
        "faq": [
          {
            "q": "Belirli sayfaları nasıl çıkarırım?",
            "a": "\"Sayfa seç\"i seçin ve sayfaları yazın, örneğin 1-3, 5. Bu sırayla yeni bir PDF'ye kaydedilir."
          },
          {
            "q": "Bölmek kaliteyi değiştirir mi?",
            "a": "Hayır. Sayfalar olduğu gibi kopyalanır — metin, görseller ve bağlantılar aynı kalır."
          }
        ]
      }
    }
  },
  footer: { tagline: "Gizliliğinize saygı duyan ücretsiz online araçlar.", privacy: "Gizlilik", terms: "Koşullar", rights: "Tüm hakları saklıdır.", madeFree: "Sonsuza kadar ücretsiz. Üyelik yok." },
};

export default tr;
