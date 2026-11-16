import type { Dict } from "./en";

const pt: Dict = {
  nav: { generator: "Gerador QR", scanner: "Leitor QR", bulk: "QR em massa", barcode: "Código de barras", types: "Tipos de QR", language: "Idioma", theme: "Tema" },
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
  footer: { tagline: "Ferramentas online grátis que respeitam sua privacidade.", privacy: "Privacidade", terms: "Termos", rights: "Todos os direitos reservados.", madeFree: "Grátis para sempre. Sem cadastro." },
};

export default pt;
