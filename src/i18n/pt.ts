import type { Dict } from "./en";

const pt: Dict = {
  nav: { generator: "Gerador QR", scanner: "Leitor QR", bulk: "QR em massa", barcode: "Código de barras", tools: "Ferramentas", types: "Tipos de QR", language: "Idioma", theme: "Tema" },
  home: {
    title: "Gerador de QR Code Grátis com Logo — Sem cadastro, nunca expira",
    meta: "Crie QR Codes personalizados grátis: logo, cores, degradês, molduras, exportação SVG e PDF, WiFi, vCard, WhatsApp e mais. Sem cadastro, sem marca d'água, nunca expiram.",
    badge: "100% grátis · Sem cadastro · Sem marca d'água · Nunca expira",
    h1a: "O gerador de QR Code grátis",
    h1b: "que nunca para de funcionar",
    sub: "Todos os recursos “premium” que outros sites cobram — logos, molduras, degradês, SVG/PDF, em massa — grátis para sempre. Feito no seu navegador, privado por padrão.",
  },
  type: {
    title: "Gerador de QR Code {name} — Grátis, personalizado, nunca expira",
    h1: "Gerador de QR Code {name} grátis",
    meta: "Crie um QR Code {name} grátis. {desc} Adicione seu logo, cores e moldura, baixe PNG, SVG ou PDF. Sem cadastro, nunca expira.",
  },
  types: {
    url: { name: "URL", desc: "Abra qualquer site ou link ao escanear." },
    text: { name: "Texto", desc: "Mostre uma mensagem de texto, funciona offline." },
    wifi: { name: "WiFi", desc: "Seus convidados entram no WiFi sem digitar a senha." },
    vcard: { name: "vCard", desc: "Compartilhe seu cartão de contato — salvo no celular com um toque." },
    email: { name: "E-mail", desc: "Abra um e-mail pronto com endereço, assunto e mensagem." },
    sms: { name: "SMS", desc: "Abra um SMS já escrito para o seu número." },
    phone: { name: "Telefone", desc: "Ligue para um número com um único escaneamento." },
    whatsapp: { name: "WhatsApp", desc: "Inicie uma conversa no WhatsApp com você, com mensagem opcional." },
    location: { name: "Localização", desc: "Abra um local ou coordenadas GPS no Google Maps." },
    event: { name: "Evento", desc: "Adicione um evento à agenda com data, hora e local." },
    social: { name: "Redes sociais", desc: "Link para seu Instagram, TikTok, Facebook, YouTube e mais." },
    upi: { name: "Pagamento UPI", desc: "Receba pagamentos UPI na Índia via GPay, PhonePe, Paytm." },
    crypto: { name: "Cripto", desc: "Receba Bitcoin, Ethereum, USDT e outras criptomoedas." },
    paypal: { name: "PayPal", desc: "Receba pelo seu link PayPal.me, com valor opcional." },
  },
  f: {
    url: "URL do site", text: "Seu texto", ssid: "Nome da rede (SSID)", password: "Senha", encryption: "Segurança",
    noPassword: "Sem senha", hiddenNetwork: "Rede oculta", firstName: "Nome", lastName: "Sobrenome",
    mobile: "Celular", workPhone: "Telefone comercial", email: "E-mail", website: "Site", company: "Empresa", jobTitle: "Cargo",
    street: "Rua", city: "Cidade", zip: "CEP", country: "País", note: "Observação", emailTo: "Enviar para (e-mail)",
    subject: "Assunto", message: "Mensagem", phone: "Número de telefone", whatsappNumber: "Número do WhatsApp (com código do país)",
    prefilledMessage: "Mensagem pré-preenchida (opcional)", addressOrPlace: "Endereço ou nome do local", latitude: "Latitude",
    longitude: "Longitude", eventTitle: "Título do evento", start: "Início", end: "Fim", location: "Local", description: "Descrição",
    platform: "Plataforma", usernameOrLink: "Usuário ou link do perfil", upiId: "ID UPI", payeeName: "Nome do recebedor",
    amountOptional: "Valor (opcional)", coin: "Moeda", walletAddress: "Endereço da carteira", paypalMeUser: "Usuário PayPal.me",
    currency: "Moeda",
  },
  ui: {
    step1: "1. Conteúdo", step2: "2. Design", step3: "3. Baixar",
    templates: "Modelos", shapes: "Formas", colors: "Cores", logo: "Logo", frame: "Moldura", advanced: "Avançado",
    dots: "Pontos", eyeFrame: "Moldura do canto", eyeBall: "Ponto do canto", foreground: "Cor dos pontos", second: "Segunda cor",
    gradient: "Degradê", none: "Nenhum", linear: "Linear", radial: "Radial", angle: "Ângulo", eyeColor: "Cor dos cantos",
    sameAsDots: "Igual aos pontos", background: "Fundo", transparent: "Transparente",
    uploadLogo: "Enviar logo", removeLogo: "Remover", logoSize: "Tamanho do logo", clearBehindLogo: "Limpar pontos atrás do logo",
    orPickIcon: "Ou escolha um ícone", frameText: "Texto da moldura", frameColor: "Cor da moldura", textColor: "Cor do texto",
    ecc: "Correção de erros", eccL: "Baixa 7%", eccM: "Média 15%", eccQ: "Alta 25%", eccH: "Máx 30%", margin: "Margem",
    size: "Tamanho", download: "Baixar", copy: "Copiar imagem", copied: "Copiado!", print: "Imprimir", reset: "Redefinir design",
    scannable: "Teste aprovado — este código funciona", notScannable: "Teste falhou — aumente o contraste ou reduza o logo",
    checking: "Testando leitura…", lowContrast: "Contraste baixo: pontos escuros em fundo claro funcionam melhor.",
    inverted: "Pontos claros em fundo escuro — alguns leitores antigos não conseguem ler.",
    enterContent: "Preencha o conteúdo para criar seu QR Code", neverExpires: "Código estático — funciona para sempre, sem conta",
    vectorHint: "SVG e PDF são vetoriais — perfeitos para imprimir em qualquer tamanho.", saveDesign: "Salvar", savedDesigns: "Meus designs salvos",
    load: "Carregar", del: "Excluir", noneSaved: "Nada salvo ainda — seus designs ficam neste dispositivo.", privacy: "Seus dados nunca saem do seu navegador.",
    allTypes: "Todos os tipos de QR Code",
    tooLong: "Conteúdo demais para um QR Code — por favor, encurte.",
  },
  features: {
    title: "Tudo que os sites de QR cobram — grátis",
    items: [
      { t: "Nunca expira", d: "QR Codes estáticos guardam seus dados diretamente. Nenhum teste que desliga seus códigos impressos." },
      { t: "Logo e cores da marca", d: "Envie um logo, escolha cores e degradês, 9 estilos de pontos e 10 de cantos." },
      { t: "Molduras com chamada", d: "Adicione uma moldura “Escaneie-me” em 5 estilos com seu texto e cores." },
      { t: "Pronto para impressão", d: "PNG até 4096 px, SVG vetorial, PDF, JPG e WebP. Sem marca d'água, nunca." },
      { t: "Geração em massa", d: "Crie centenas de QR Codes a partir de uma lista ou CSV e baixe em ZIP." },
      { t: "Privado e instantâneo", d: "Tudo roda no seu navegador. Nada é enviado, armazenado ou rastreado." },
    ],
  },
  compare: {
    title: "{brand} vs. geradores de QR “grátis” comuns",
    feature: "Recurso", us: "{brand}", them: "Outros",
    rows: ["Sem cadastro", "Códigos nunca expiram", "Enviar logo", "Exportar SVG / PDF", "Sem marca d'água", "Gerador em massa", "Molduras com texto", "Leituras ilimitadas"],
    themVals: ["Geralmente obrigatório", "Teste acaba em 7–14 dias", "Plano pago", "Plano pago", "Às vezes", "Plano pago", "Limitado", "Limite de leituras"],
  },
  howto: {
    title: "Como criar um QR Code em 3 passos",
    steps: [
      { t: "Escolha o tipo e adicione o conteúdo", d: "Cole um link ou preencha WiFi, contato, WhatsApp, dados de pagamento e mais." },
      { t: "Deixe com a sua cara", d: "Escolha um modelo ou mude pontos, cantos, cores, adicione seu logo e uma moldura." },
      { t: "Baixe e use", d: "Testamos a leitura; baixe PNG, SVG ou PDF e imprima ou compartilhe." },
    ],
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      { q: "Este gerador de QR Code é realmente grátis?", a: "Sim. Todos os recursos são grátis, sem cadastro, sem teste e sem marca d'água. Use os códigos em projetos pessoais e comerciais." },
      { q: "Os QR Codes expiram?", a: "Nunca. São QR Codes estáticos: o conteúdo fica dentro do próprio código, então funciona para sempre — mesmo se este site sumisse." },
      { q: "Posso adicionar meu logo?", a: "Sim. Envie um logo PNG, JPG ou SVG. Aumentamos a correção de erros automaticamente e fazemos um teste de leitura antes do download." },
      { q: "Qual o melhor formato para imprimir?", a: "SVG ou PDF. São vetoriais, ficam nítidos em cartões, panfletos, cardápios e banners grandes." },
      { q: "Existe limite de leituras ou de códigos?", a: "Sem limites. Crie quantos QR Codes quiser, com leituras ilimitadas." },
      { q: "Meus dados estão seguros?", a: "Seus QR Codes são gerados no seu próprio navegador. Não enviamos, armazenamos nem vemos o que você digita." },
      { q: "Posso editar um QR Code depois de impresso?", a: "Um código estático não muda depois de impresso. Dica: aponte para uma página que você controla (seu site) e atualize essa página." },
      { q: "Como escanear um QR Code?", a: "Abra a câmera do celular e aponte para o código, ou use nosso leitor de QR online grátis com webcam ou imagem." },
    ],
  },
  scanner: {
    title: "Leitor de QR Code Online Grátis — Pela câmera ou imagem",
    meta: "Leia QR Codes online grátis com a câmera ou enviando uma imagem. Funciona no celular e no computador, nada é enviado.",
    h1: "Leitor de QR Code online grátis",
    sub: "Use a câmera ou envie um print. A leitura acontece no seu aparelho — nada é enviado.",
    camera: "Ler com a câmera", stop: "Parar câmera", upload: "Enviar imagem", drop: "ou solte / cole uma imagem aqui",
    result: "Resultado", open: "Abrir link", copy: "Copiar", copied: "Copiado!", notFound: "Nenhum QR Code encontrado nesta imagem.",
    noCamera: "Câmera indisponível. Permita o acesso ou envie uma imagem.", history: "Histórico", clear: "Limpar",
    wifiJoin: "Rede WiFi", makeOwn: "Crie seu próprio QR Code",
  },
  bulk: {
    title: "Gerador de QR Code em Massa — Centenas grátis, baixe em ZIP",
    meta: "Gere centenas de QR Codes de uma vez a partir de uma lista ou CSV. Cores e logo personalizados, baixe PNG ou SVG em ZIP. Grátis, sem cadastro.",
    h1: "Gerador de QR Code em massa grátis",
    sub: "Um link ou texto por linha — ou envie um CSV. Cada código recebe seu design. Baixe tudo em um ZIP.",
    input: "Seus dados (um por linha)", csv: "Enviar CSV / TXT", csvHint: "2ª coluna opcional = nome do arquivo: https://site.com/a, mesa-1",
    count: "{n} QR Codes", format: "Formato", generate: "Gerar ZIP", working: "Criando {i} de {n}…", done: "Pronto! Seu ZIP está sendo baixado.",
    max: "Até 1.000 códigos por lote.",
  },
  legal: {
    privacyTitle: "Política de Privacidade",
    privacy: [
      "Os QR Codes são criados inteiramente no seu navegador. Textos, links, contatos, senhas de WiFi e imagens que você insere não são enviados aos nossos servidores.",
      "Designs salvos e histórico de leitura ficam apenas no armazenamento local do seu navegador. Você pode apagá-los a qualquer momento.",
      "Usamos análise de visitas sem cookies e respeitosa à privacidade (Vercel Web Analytics). Poderemos exibir anúncios no futuro; nesse caso, parceiros de anúncios podem usar cookies e esta política será atualizada.",
      "Contato: {email}",
    ],
    termsTitle: "Termos de Uso",
    terms: [
      "Este serviço é gratuito e fornecido “como está”, sem garantia. Sempre teste um QR Code antes de imprimir em grande quantidade.",
      "Você pode usar os QR Codes gerados para qualquer fim pessoal ou comercial. Você é responsável pelo conteúdo codificado.",
      "Não use este serviço para criar códigos que levem a conteúdo ilegal, malware ou phishing.",
    ],
  },
  barcode: {
    "title": "Gerador de Código de Barras Grátis — EAN-13, UPC, Code 128 | PNG, SVG, PDF",
    "meta": "Crie códigos de barras online grátis: EAN-13, UPC-A, Code 128, Code 39, ITF-14 e mais. Tamanho e cores personalizados, baixe PNG, SVG ou PDF. Sem cadastro e sem marca d'água.",
    "h1": "Gerador de código de barras grátis",
    "sub": "EAN, UPC, Code 128 e mais para produtos, envios e estoque. Pronto para imprimir, sem cadastro e sem marca d'água.",
    "type": "Tipo de código",
    "data": "Dados do código",
    "label": "Texto abaixo do código (opcional)",
    "showText": "Mostrar texto",
    "hideText": "Ocultar texto",
    "barWidth": "Largura da barra",
    "height": "Altura",
    "fontSize": "Tamanho do texto",
    "margin": "Margem",
    "barColor": "Cor das barras",
    "fileType": "Tipo de arquivo",
    "example": "Usar um exemplo",
    "invalid": "Estes dados não servem para {name}.",
    "hints": {
      "CODE128": "Letras, números e símbolos. O código mais usado em envios e estoque.",
      "EAN13": "12 ou 13 dígitos. Produtos de varejo no mundo todo — digite 12 e adicionamos o dígito verificador.",
      "UPC": "11 ou 12 dígitos. Produtos de varejo nos EUA e Canadá.",
      "EAN8": "7 ou 8 dígitos. Embalagens pequenas.",
      "UPCE": "6 ou 8 dígitos. UPC curto para itens pequenos.",
      "CODE39": "Letras maiúsculas, números, espaço e - . $ / + %. Indústria e crachás.",
      "ITF14": "13 ou 14 dígitos. Caixas de transporte e paletes.",
      "codabar": "Números e - $ : / . + com A, B, C ou D no início e no fim. Bibliotecas e bancos de sangue.",
      "MSI": "Apenas números. Prateleiras de armazém e estoque.",
      "pharmacode": "Um número de 3 a 131070. Embalagens farmacêuticas."
    },
    "faq": [
      {
        "q": "Qual tipo de código de barras devo usar?",
        "a": "Para produtos vendidos em lojas, use EAN-13 (mundial) ou UPC-A (EUA e Canadá). Para etiquetas de envio, estoque e códigos internos, use Code 128 — aceita letras e números."
      },
      {
        "q": "Posso usar de graça para fins comerciais?",
        "a": "Sim. Baixe e imprima quantos precisar, para qualquer uso, sem marca d'água e sem cadastro."
      },
      {
        "q": "Preciso de um número GS1 para vender em lojas?",
        "a": "A maioria das lojas exige números EAN/UPC registrados na GS1. Esta ferramenta cria a imagem do código; ela não fornece um número de produto oficial."
      },
      {
        "q": "Qual formato é melhor para imprimir?",
        "a": "SVG ou PDF. São vetoriais, então as barras ficam nítidas em qualquer tamanho — importante para os leitores."
      },
      {
        "q": "Por que meu código não é lido?",
        "a": "Use barras escuras em fundo claro, não imprima muito pequeno e mantenha a margem branca ao redor. EAN e UPC precisam de um dígito verificador correto — digite 12 dígitos para EAN-13 e nós calculamos."
      }
    ]
  },
  tools: {
    "hubTitle": "Ferramentas Online Grátis — Imagem, PDF, QR Code e Código de Barras",
    "hubMeta": "Ferramentas online grátis que funcionam no seu navegador: comprimir e redimensionar imagens, HEIC para JPG, JPG para PDF, juntar e dividir PDF, QR codes e códigos de barras. Sem cadastro, sem upload.",
    "hubH1": "Todas as ferramentas grátis",
    "hubSub": "Imagens, PDFs, QR codes e códigos de barras — rápido, grátis e privado. Seus arquivos nunca saem do seu dispositivo.",
    "badge": "100% grátis · Sem cadastro · Arquivos não saem do seu dispositivo",
    "more": "Mais ferramentas grátis",
    "groups": {
      "qr": "QR code e código de barras",
      "image": "Ferramentas de imagem",
      "pdf": "Ferramentas de PDF"
    },
    "ui": {
      "chooseFiles": "Escolher arquivos",
      "chooseFile": "Escolher um arquivo",
      "dropHint": "ou arraste aqui — também dá para colar com Ctrl+V",
      "wrongType": "Alguns arquivos foram ignorados porque esta ferramenta não os aceita.",
      "files": "{n} arquivos",
      "pages": "{n} páginas",
      "clear": "Limpar tudo",
      "remove": "Remover",
      "download": "Baixar",
      "downloadAll": "Baixar tudo (ZIP)",
      "settings": "Configurações",
      "working": "Processando {i} de {n}…",
      "done": "Pronto!",
      "kept": "Já está otimizada — original mantido",
      "error": "Não foi possível ler este arquivo.",
      "noWebp": "Seu navegador não consegue criar arquivos WebP. Tente o Chrome, Edge ou Firefox.",
      "encrypted": "Este PDF está protegido por senha ou danificado.",
      "bySize": "Por tamanho",
      "byPercent": "Por porcentagem",
      "width": "Largura",
      "height": "Altura",
      "keepRatio": "Manter proporção",
      "percent": "Tamanho",
      "maxWidth": "Largura máxima",
      "original": "Original",
      "format": "Formato de saída",
      "auto": "Auto",
      "sameFormat": "Igual",
      "quality": "Qualidade",
      "background": "Fundo",
      "pageSize": "Tamanho da página",
      "fitImage": "Ajustar à imagem",
      "margin": "Margem",
      "none": "Nenhuma",
      "small": "Pequena",
      "large": "Grande",
      "resolution": "Qualidade da imagem",
      "normal": "Normal",
      "high": "Alta",
      "veryHigh": "Muito alta",
      "splitEach": "Cada página",
      "extract": "Escolher páginas",
      "pagesOptional": "Páginas (vazio = todas)",
      "pagesToExtract": "Páginas para extrair",
      "rangesHint": "Exemplo: 1-3, 5, 8-10",
      "addOneMore": "Adicione pelo menos 2 arquivos PDF para juntar.",
      "noPages": "Nenhuma página corresponde — confira os números.",
      "moveUp": "Subir",
      "moveDown": "Descer",
      "privacy": "Seus arquivos são processados no seu dispositivo e nunca enviados."
    },
    "faqCommon": [
      {
        "q": "É grátis mesmo?",
        "a": "Sim. Todas as ferramentas são grátis, sem cadastro, sem marca d'água e sem limite diário."
      },
      {
        "q": "Meus arquivos estão seguros?",
        "a": "Seus arquivos nunca saem do seu dispositivo. Tudo é processado no navegador, então nada é enviado para um servidor."
      }
    ],
    "items": {
      "compressImage": {
        "name": "Comprimir imagem",
        "desc": "Deixe JPG, PNG e WebP menores sem perda visível de qualidade.",
        "title": "Comprimir Imagem Online Grátis — Reduzir Tamanho de JPG, PNG e WebP",
        "meta": "Comprima imagens online grátis. Reduza o tamanho de JPG, PNG, WebP e HEIC em segundos sem perder qualidade. Compressão em lote, sem cadastro, sem upload.",
        "h1": "Comprimir imagens grátis",
        "sub": "Reduza o tamanho das fotos para sites, e-mail e WhatsApp. Comprima várias imagens de uma vez — nada é enviado.",
        "action": "Comprimir imagens",
        "accepts": "JPG · PNG · WebP · HEIC",
        "faq": [
          {
            "q": "Quanto menores as imagens vão ficar?",
            "a": "Normalmente de 50 a 80% menores para fotos com qualidade 70, sem diferença visível. Diminua a qualidade ou defina uma largura máxima para reduzir ainda mais."
          },
          {
            "q": "Posso comprimir arquivos PNG?",
            "a": "Sim. No modo Auto testamos PNG e um formato moderno e ficamos com o menor. Imagens transparentes continuam transparentes."
          }
        ]
      },
      "resizeImage": {
        "name": "Redimensionar imagem",
        "desc": "Mude largura e altura em pixels ou por porcentagem.",
        "title": "Redimensionar Imagem Online Grátis — Mudar Tamanho em Pixels ou %",
        "meta": "Redimensione imagens online grátis. Mude a largura e a altura de JPG, PNG e WebP em pixels ou porcentagem, mantenha a proporção, em lote. Sem cadastro, sem upload.",
        "h1": "Redimensionar imagens grátis",
        "sub": "Defina um tamanho exato em pixels ou escale por porcentagem. Redimensione várias imagens de uma vez para redes sociais, sites e formulários.",
        "action": "Redimensionar",
        "accepts": "JPG · PNG · WebP · HEIC",
        "faq": [
          {
            "q": "Como redimensionar sem distorcer?",
            "a": "Deixe \"Manter proporção\" ligado e digite só a largura ou a altura — o outro lado é calculado para você."
          },
          {
            "q": "Posso redimensionar várias imagens de uma vez?",
            "a": "Sim. Adicione quantas quiser; todas recebem as mesmas configurações e você baixa tudo em um ZIP."
          }
        ]
      },
      "heicToJpg": {
        "name": "HEIC para JPG",
        "desc": "Converta fotos HEIC do iPhone em JPG que abre em qualquer lugar.",
        "title": "Converter HEIC para JPG Grátis — Fotos do iPhone Online",
        "meta": "Converta HEIC para JPG online grátis. Transforme fotos HEIC e HEIF do iPhone em JPG que abre no Windows, Android e em qualquer site. Em lote, sem upload.",
        "h1": "Converter HEIC para JPG grátis",
        "sub": "Fotos HEIC do iPhone não abrem em todo lugar. Converta para JPG em segundos — várias de uma vez, no seu dispositivo.",
        "action": "Converter para JPG",
        "accepts": "HEIC · HEIF",
        "faq": [
          {
            "q": "O que é um arquivo HEIC?",
            "a": "HEIC é o formato de foto padrão do iPhone. Ocupa menos espaço, mas muitos PCs com Windows, celulares Android e sites não abrem — JPG funciona em todo lugar."
          },
          {
            "q": "Perco qualidade convertendo HEIC para JPG?",
            "a": "Com qualidade 90 ou mais a diferença é invisível. Você pode usar qualidade 100 para o melhor resultado."
          }
        ]
      },
      "pngToJpg": {
        "name": "PNG para JPG",
        "desc": "Converta imagens PNG em arquivos JPG menores.",
        "title": "Converter PNG para JPG Grátis — PNG para JPEG Online",
        "meta": "Converta PNG para JPG online grátis. Deixe imagens PNG menores como JPEG, escolha a qualidade e a cor de fundo. Em lote, sem cadastro, sem upload.",
        "h1": "Converter PNG para JPG grátis",
        "sub": "Para fotos, JPG é bem menor que PNG. Escolha a qualidade e a cor de fundo das áreas transparentes.",
        "action": "Converter para JPG",
        "accepts": "PNG",
        "faq": [
          {
            "q": "O que acontece com as áreas transparentes?",
            "a": "JPG não aceita transparência, então essas áreas recebem a cor de fundo que você escolher (branco por padrão)."
          },
          {
            "q": "Por que converter PNG para JPG?",
            "a": "Para fotos, um JPG costuma ser 5 a 10 vezes menor que um PNG, então é mais rápido de enviar, compartilhar e carregar em sites."
          }
        ]
      },
      "webpToJpg": {
        "name": "WebP para JPG",
        "desc": "Converta imagens WebP em JPG que abre em qualquer app.",
        "title": "Converter WebP para JPG Grátis — Imagens WebP Online",
        "meta": "Converta WebP para JPG online grátis. Transforme imagens WebP salvas de sites em JPG que abre em qualquer app. Em lote, sem cadastro, sem upload.",
        "h1": "Converter WebP para JPG grátis",
        "sub": "Salvou uma imagem de um site e ela é WebP? Converta para JPG para abrir em qualquer app ou editor.",
        "action": "Converter para JPG",
        "accepts": "WebP",
        "faq": [
          {
            "q": "Por que imagens de sites são salvas como WebP?",
            "a": "Muitos sites usam WebP porque carrega rápido. Mas alguns apps, impressoras e programas antigos não abrem, então JPG é mais seguro para compartilhar."
          },
          {
            "q": "Posso converter vários WebP de uma vez?",
            "a": "Sim. Adicione todas as imagens WebP e baixe os JPG um por um ou juntos em um ZIP."
          }
        ]
      },
      "jpgToPng": {
        "name": "JPG para PNG",
        "desc": "Converta fotos JPG em imagens PNG sem perdas.",
        "title": "Converter JPG para PNG Grátis — JPEG para PNG Online",
        "meta": "Converta JPG para PNG online grátis. Transforme fotos JPEG em imagens PNG sem perdas em segundos. Em lote, sem cadastro, sem upload, sem marca d'água.",
        "h1": "Converter JPG para PNG grátis",
        "sub": "Transforme fotos JPEG em PNG sem perdas — ideal para edição, ferramentas de design e envios que pedem PNG.",
        "action": "Converter para PNG",
        "accepts": "JPG · JPEG",
        "faq": [
          {
            "q": "O PNG terá fundo transparente?",
            "a": "Não — um JPG não tem transparência, então o PNG mantém o mesmo fundo. Só o formato do arquivo muda."
          },
          {
            "q": "Por que o PNG ficou maior que o JPG?",
            "a": "PNG não tem perdas e guarda cada pixel exatamente. É ótimo para edição, mas os arquivos são maiores que JPG."
          }
        ]
      },
      "jpgToWebp": {
        "name": "Converter para WebP",
        "desc": "Converta JPG e PNG em arquivos WebP leves para sites.",
        "title": "Converter JPG para WebP Grátis — Imagens para WebP Online",
        "meta": "Converta JPG e PNG para WebP online grátis. Imagens até 30% menores para sites mais rápidos e melhor SEO. Em lote, sem cadastro, sem upload.",
        "h1": "Converter imagens para WebP grátis",
        "sub": "Imagens WebP são menores que JPG e PNG com a mesma qualidade — perfeitas para sites e lojas online rápidos.",
        "action": "Converter para WebP",
        "accepts": "JPG · PNG · HEIC",
        "faq": [
          {
            "q": "Por que usar WebP no meu site?",
            "a": "Arquivos WebP costumam ser 25 a 35% menores que JPG com a mesma qualidade, então as páginas carregam mais rápido — bom para visitantes e para o Google."
          },
          {
            "q": "WebP mantém a transparência?",
            "a": "Sim. Imagens PNG transparentes continuam transparentes ao converter para WebP."
          }
        ]
      },
      "jpgToPdf": {
        "name": "JPG para PDF",
        "desc": "Transforme fotos e digitalizações em um único PDF.",
        "title": "Converter JPG para PDF Grátis — Imagens para PDF Online",
        "meta": "Converta imagens JPG, PNG e HEIC para PDF online grátis. Junte várias fotos em um PDF, escolha A4 ou Carta e margens. Sem cadastro, sem upload, sem marca d'água.",
        "h1": "Converter JPG para PDF grátis",
        "sub": "Junte fotos, digitalizações e prints em um único PDF. Mude a ordem, escolha o tamanho da página e baixe na hora.",
        "action": "Criar PDF",
        "accepts": "JPG · PNG · WebP · HEIC",
        "faq": [
          {
            "q": "Posso colocar várias imagens em um PDF?",
            "a": "Sim. Adicione todas as imagens, use as setas para mudar a ordem e cada imagem vira uma página do PDF."
          },
          {
            "q": "Qual tamanho de página escolher?",
            "a": "A4 é o padrão no Brasil e na maioria dos países; Carta (Letter) nos EUA e Canadá. \"Ajustar à imagem\" deixa cada página do tamanho exato da foto."
          }
        ]
      },
      "mergePdf": {
        "name": "Juntar PDF",
        "desc": "Combine vários PDFs em um só, na ordem que quiser.",
        "title": "Juntar PDF Grátis — Combinar Arquivos PDF Online em Segundos",
        "meta": "Junte arquivos PDF online grátis. Combine vários PDFs em um só documento na ordem que quiser. Sem cadastro, sem upload, sem marca d'água e sem limite.",
        "h1": "Juntar arquivos PDF grátis",
        "sub": "Combine contratos, notas fiscais e documentos em um único PDF. Adicione os arquivos, defina a ordem e baixe.",
        "action": "Juntar PDF",
        "accepts": "PDF",
        "faq": [
          {
            "q": "Como mudo a ordem dos PDFs?",
            "a": "Use as setas para cima e para baixo ao lado de cada arquivo. As páginas são juntadas de cima para baixo."
          },
          {
            "q": "Existe limite de arquivos?",
            "a": "Não há limite fixo. Arquivos muito grandes dependem da memória do seu dispositivo, mas dezenas de PDFs normais funcionam bem."
          }
        ]
      },
      "pdfToJpg": {
        "name": "PDF para JPG",
        "desc": "Transforme cada página do PDF em uma imagem de alta qualidade.",
        "title": "Converter PDF para JPG Grátis — Páginas de PDF em Imagens Online",
        "meta": "Converta PDF para JPG ou PNG online grátis. Cada página vira uma imagem de alta qualidade, escolha páginas e resolução, baixe em ZIP. Sem cadastro, sem upload.",
        "h1": "Converter PDF para JPG grátis",
        "sub": "Salve páginas do PDF como imagens JPG ou PNG — todas ou só as que você escolher, em alta resolução.",
        "action": "Converter em imagens",
        "accepts": "PDF",
        "faq": [
          {
            "q": "Posso converter só algumas páginas?",
            "a": "Sim. Digite as páginas que quiser, por exemplo 1-3, 5. Deixe vazio para converter todas."
          },
          {
            "q": "Qual qualidade escolher?",
            "a": "\"Alta\" é nítida o bastante para quase tudo. Escolha \"Muito alta\" para impressão ou textos pequenos; os arquivos ficam maiores."
          }
        ]
      },
      "splitPdf": {
        "name": "Dividir PDF",
        "desc": "Extraia páginas ou divida um PDF em arquivos separados.",
        "title": "Dividir PDF Grátis — Extrair Páginas de PDF Online",
        "meta": "Divida PDF online grátis. Extraia as páginas que precisa em um novo PDF ou separe cada página em um arquivo. Sem cadastro, sem upload, sem marca d'água.",
        "h1": "Dividir PDF grátis",
        "sub": "Tire as páginas que você precisa ou divida um PDF em um arquivo por página. Rápido, grátis e privado.",
        "action": "Dividir PDF",
        "accepts": "PDF",
        "faq": [
          {
            "q": "Como extraio páginas específicas?",
            "a": "Escolha \"Escolher páginas\" e digite as que quiser, como 1-3, 5. Elas são salvas em um novo PDF nessa ordem."
          },
          {
            "q": "Dividir muda a qualidade?",
            "a": "Não. As páginas são copiadas exatamente como estão — textos, imagens e links continuam iguais."
          }
        ]
      }
    }
  },
  footer: { tagline: "Ferramentas online grátis que respeitam sua privacidade.", privacy: "Privacidade", terms: "Termos", rights: "Todos os direitos reservados.", madeFree: "Grátis para sempre. Sem cadastro." },
};

export default pt;
