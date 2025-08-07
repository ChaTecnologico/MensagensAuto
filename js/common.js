// Dados e funções comuns para o gerador de mensagens

// Dados dos módulos e aulas
const MODULOS_DATA = {
  culinaria: {
    nome: 'Culinária',
    aulas: [
      { numero: 1, titulo: 'Apresentação', atividade: 'Sem Atividade' },
      { numero: 2, titulo: 'Uso dos temperos naturais', atividade: 'Desvendando os temperos' },
      { numero: 3, titulo: 'Evitando temperos industrializados', atividade: 'Jogo de associação - Utensílios da cozinha' },
      { numero: 4, titulo: 'Conservação de legumes e verduras (frescos e congelados)', atividade: 'Complete a receita' },
      { numero: 5, titulo: 'Técnica de selagem', atividade: 'Selando a carne corretamente' },
      { numero: 6, titulo: 'Alimentos que fortalecem: conhecendo as proteínas', atividade: 'Encontre os ingrediente' },
      { numero: 7, titulo: 'Uso correto de medidores', atividade: 'Descubra o ingrediente misterioso' },
      { numero: 8, titulo: 'Sobremesas: substituições inteligentes', atividade: 'Preparando a mousse de maracujá' }
    ]
  },
  cultivoPlantas: {
    nome: 'Cultivo de Plantas',
    aulas: [
      { numero: 1, titulo: 'Apresentação', atividade: 'Compartilhando nossas experiências com plantas' },
      { numero: 2, titulo: 'Tipos de Plantas', atividade: 'Tipos de plantas' },
      { numero: 3, titulo: 'Escolhendo a planta certa', atividade: 'Escolhendo a planta certa' },
      { numero: 4, titulo: 'Preparando solos e vasos', atividade: 'Como preparar solos e vasos' },
      { numero: 5, titulo: 'Adubação e nutrientes essenciais', atividade: 'Nutrientes essenciais para as plantas' },
      { numero: 6, titulo: 'Controle de pragas e doenças', atividade: 'Pragas e doenças nas plantas' },
      { numero: 7, titulo: 'Podas e Multiplicação de Plantas', atividade: 'Podas e multiplicação de plantas' },
      { numero: 8, titulo: 'Cultivo Sustentável', atividade: 'Cultivo sustentável' }
    ]
  },
  danca: {
    nome: 'Dança',
    aulas: [
      { numero: 1, titulo: 'Apresentação', atividade: 'Apresentar o curso, e como vão funcionar o formato das aulas, horários, combinados. Fazer a apresentação da instrutora e da turma.' },
      { numero: 2, titulo: 'Domínio sobre o corpo', atividade: '' },
      { numero: 3, titulo: 'Autoestima e dança', atividade: '' },
      { numero: 4, titulo: 'Agilidade e equilíbrio', atividade: '' },
      { numero: 5, titulo: 'Geração Jovem Guarda', atividade: '' },
      { numero: 6, titulo: 'Ritmos Nordestinos', atividade: '' },
      { numero: 7, titulo: 'Puxa o fole sanfoneiro', atividade: '' },
      { numero: 8, titulo: 'Consciência corporal', atividade: '' },
      { numero: 9, titulo: 'Dança como expressão', atividade: '' }
    ]
  },
  desenhoPintura: {
    nome: 'Desenho e Pintura',
    aulas: [
      { numero: 1, titulo: 'Apresentação', atividade: 'Sem atividade' },
      { numero: 2, titulo: 'Formas Geométricas', atividade: 'Formas Geométricas' },
      { numero: 3, titulo: 'Desenhando Rostos', atividade: 'Encontrando rostos' },
      { numero: 4, titulo: 'Paisagem', atividade: 'Treinando o olhar' },
      { numero: 5, titulo: 'Iniciação à Pintura', atividade: 'Arte para a vida' },
      { numero: 6, titulo: 'Pintura em Tela', atividade: 'Cores e Formas' },
      { numero: 7, titulo: 'Pintura em Telha', atividade: 'Jogo da memória' },
      { numero: 8, titulo: 'Pintura com Café', atividade: 'Encontre a imagem diferente' }
    ]
  },
  desenvolvimentoCognitivo: {
    nome: 'Desenvolvimento Cognitivo',
    aulas: [
      { numero: 1, titulo: 'Apresentação', atividade: 'Sem Atividade' },
      { numero: 2, titulo: 'Mantendo a Mente Ativa', atividade: 'Jogo da memória' },
      { numero: 3, titulo: 'Sensação e Percepção', atividade: 'Figura e fundo' },
      { numero: 4, titulo: 'A importância da atenção', atividade: 'Países repetidos; Letras perdidas' },
      { numero: 5, titulo: 'Entendendo a memória', atividade: 'Questionário memórias' },
      { numero: 6, titulo: 'Memórias Afetivas', atividade: 'Lembranças afetivas' },
      { numero: 7, titulo: 'Linguagem e Comunicação', atividade: 'Complete a frase' },
      { numero: 8, titulo: 'Emoções', atividade: 'Identificando emoções' },
      { numero: 9, titulo: 'Motivação', atividade: 'Motivação' },
      { numero: 10, titulo: 'Raciocínio Lógico', atividade: 'Que horas são?' },
      { numero: 11, titulo: 'Exercitando Raciocínio', atividade: 'Exercitando o raciocínio' }
    ]
  },
  desenvolvimentoCognitivoAvancado: {
    nome: 'Desenvolvimento Cognitivo - Avançado',
    aulas: [
      { numero: 1, titulo: 'Autoconhecimento', atividade: 'Aprendendo a se conhecer melhor' },
      { numero: 2, titulo: 'Autoestima', atividade: 'Identificando frases' },
      { numero: 3, titulo: 'Como elevar a autoestima', atividade: 'Elevando a autoestima' },
      { numero: 4, titulo: 'Autoconfiança', atividade: 'Tire um tempo pra você' },
      { numero: 5, titulo: 'Estratégias de memorização por categorização', atividade: 'Identificando categorias' },
      { numero: 6, titulo: 'Outras estratégias de memorização', atividade: 'Jogo da memória por associação' },
      { numero: 7, titulo: 'Percepção Espacial', atividade: 'Complete as figuras' },
      { numero: 8, titulo: 'Relações interpessoais', atividade: 'Verdadeiro ou falso - relações interpessoais' },
      { numero: 9, titulo: 'Inteligência Emocional', atividade: 'Identificando emoções' },
      { numero: 10, titulo: 'Aula Final', atividade: 'Organizando os temas das aulas' }
    ]
  },
  educacaoFinanceira: {
    nome: 'Educação Financeira',
    aulas: [
      { numero: 1, titulo: 'Apresentação', atividade: 'Sem Atividade' },
      { numero: 2, titulo: 'O que é educação financeira?', atividade: 'Verdadeiro ou falso - educação financeira' },
      { numero: 3, titulo: 'Poder de Compra e Hábitos de Consumo', atividade: 'Atividade por associação; Lista de Compras' },
      { numero: 4, titulo: 'Uso do cartão de crédito', atividade: 'Perguntas sobre cartão de crédito' },
      { numero: 5, titulo: 'Matemática e Finanças Pessoais', atividade: 'Inflação e compras' },
      { numero: 6, titulo: 'Inflação e Compras', atividade: 'Calculando valor com desconto; Calculando juros' },
      { numero: 7, titulo: 'Como diminuir as dívidas', atividade: 'Como diminuir dívidas' },
      { numero: 8, titulo: 'Aprendendo a poupar', atividade: 'Sem Atividade' }
    ]
  },
  fotografia: {
    nome: 'Fotografia Digital',
    aulas: [
      { numero: 1, titulo: 'Apresentação', atividade: 'Apresentação do curso' },
      { numero: 2, titulo: 'Introdução à Fotografia', atividade: 'Quiz - Introdução à Fotografia' },
      { numero: 3, titulo: 'Desenvolvendo o olhar fotográfico', atividade: 'Desenvolvendo o Olhar Fotográfico' },
      { numero: 4, titulo: 'Regra dos Terços', atividade: 'Regra dos terços (Quiz) - parte 01; Regra dos terços - parte 02' },
      { numero: 5, titulo: 'Iluminação na fotografia com celular', atividade: 'Arrasta e solta sobre tipos de iluminação na fotografia' },
      { numero: 6, titulo: 'Fotografia de retrato', atividade: 'Arrasta e solta sobre nomes de expressões e poses' },
      { numero: 7, titulo: 'Fotografia de Paisagem', atividade: 'Jogo da Memória - Paisagens Cearenses' },
      { numero: 8, titulo: 'Fotografia no dia a dia', atividade: 'Quiz sobre selfies' }
    ]
  },
  ginastica: {
    nome: 'Ginástica',
    aulas: [
      { numero: 1, titulo: 'Apresentação', atividade: 'Sem atividade' },
      { numero: 2, titulo: 'Questionário PAR-Q', atividade: 'Teste PAR-Q' },
      { numero: 3, titulo: 'Comportamento Sedentário', atividade: 'Marque o comportamento correto' },
      { numero: 4, titulo: 'Alimentação Saudável', atividade: 'Alimentação Saudável' },
      { numero: 5, titulo: 'Diabetes', atividade: 'Questionário sobre diabetes' },
      { numero: 6, titulo: 'Pressão Arterial', atividade: 'Exercício e hipertensão' },
      { numero: 7, titulo: 'Saúde dos ossos e músculos', atividade: 'Conhecendo o corpo humano' },
      { numero: 8, titulo: 'Envelhecimento Saudável', atividade: 'Fórum - O que te motiva?' }
    ]
  },
  ginasticaAvancado: {
    nome: 'Ginástica - Avançado',
    aulas: [
      { numero: 1, titulo: 'Apresentação', atividade: 'Sem atividade' },
      { numero: 2, titulo: 'Composição Corporal', atividade: 'Identificando fatores de risco' },
      { numero: 3, titulo: 'Exercícios Aeróbicos', atividade: 'Complete as frases' },
      { numero: 4, titulo: 'Exercícios Anaeróbicos', atividade: 'Fortalecendo seus músculos' },
      { numero: 5, titulo: 'Exercícios de coordenação e equilíbrio', atividade: 'Eu nunca' },
      { numero: 6, titulo: 'Exercícios de flexibilidade', atividade: '' },
      { numero: 7, titulo: 'Alterações posturais', atividade: 'Alinhando sua postura' },
      { numero: 8, titulo: 'Envelhecimento Saudável', atividade: 'Fórum - O que te motiva?' }
    ]
  },
  nutricao: {
    nome: 'Nutrição',
    aulas: [
      { numero: 1, titulo: 'Apresentação', atividade: 'Sem atividade' },
      { numero: 2, titulo: 'A importância da alimentação saudável', atividade: 'Escolhendo os alimentos' },
      { numero: 3, titulo: 'Comportamento alimentar', atividade: 'Escolhas conscientes' },
      { numero: 4, titulo: 'Temperos industrializados e naturais', atividade: 'Lendo os rótulos' },
      { numero: 5, titulo: 'Diabetes', atividade: 'Mito ou verdade?' },
      { numero: 6, titulo: 'Hipertensão', atividade: 'Sintomas da hipertensão' },
      { numero: 7, titulo: 'Doença celíaca e intolerância à lactose', atividade: 'Encontre os alimentos' },
      { numero: 8, titulo: 'Alimentação e saúde mental', atividade: 'Sabores e benefícios' }
    ]
  },
  tecnologias: {
    nome: 'Ensino das Tecnologias Digitais',
    aulas: [
      { numero: 1, titulo: 'Google Meet', atividade: 'Não possui' },
      { numero: 2, titulo: 'Introdução aos Conteúdos e Regras de Convivência', atividade: 'Não possui' },
      { numero: 3, titulo: 'Conhecendo o Whatsapp', atividade: 'Não possui' },
      { numero: 4, titulo: 'Ambiente Virtual de Aprendizagem', atividade: 'Não possui' },
      { numero: 5, titulo: 'Tela Inicial dos Aplicativos', atividade: 'Explorando a tela inicial' },
      { numero: 6, titulo: 'Aprendendo Conectar à Internet', atividade: 'Conectando Wi-fi' },
      { numero: 7, titulo: 'Calculadora, Relógio e SMS', atividade: 'Ativando um alarme' },
      { numero: 8, titulo: 'Contatos e Ligações', atividade: 'Salvando um contato' },
      { numero: 9, titulo: 'Câmera e Galeria', atividade: 'Jogo da memória' },
      { numero: 10, titulo: 'Pesquisas na Internet', atividade: 'Pesquisas por texto' },
      { numero: 11, titulo: 'YouTube - Funções básicas', atividade: 'Pesquisas no Youtube' },
      { numero: 12, titulo: 'YouTube - Funções Avançadas', atividade: 'Compartilhando vídeo' },
      { numero: 13, titulo: 'WhatsApp: Ligações e configurações', atividade: 'Salvando um contato' },
      { numero: 14, titulo: 'WhatsApp: Apagar mensagens, limpar conversa e bloquear contato', atividade: 'WhatsApp - Limpar conversa (parte 1); Apagando uma mensagem (parte 2)' },
      { numero: 15, titulo: 'WhatsApp - Enviando contatos', atividade: 'WhatsApp: Enviando um contato' },
      { numero: 16, titulo: 'Instalação e desinstalação de aplicativos', atividade: 'Instalando aplicativos' },
      { numero: 17, titulo: 'A importância do e-mail', atividade: 'Criando uma conta de e-mail' },
      { numero: 18, titulo: 'Práticas de uso do e-mail', atividade: 'Recebendo e-mail' },
      { numero: 19, titulo: 'Transportes por aplicativos', atividade: 'Solicitando uma corrida' },
      { numero: 20, titulo: 'QR Code', atividade: 'QR CODE' },
      { numero: 21, titulo: 'Segurança digital', atividade: 'Identificando golpes' },
      { numero: 22, titulo: 'Aplicativos de bancos', atividade: 'Funções dos aplicativos bancários' },
      { numero: 23, titulo: 'Aplicativos de bancos - uso do pix', atividade: 'Enviando um pix' },
      { numero: 24, titulo: 'Portal Gov.Br', atividade: 'Perguntas sobre o Gov.br' },
      { numero: 25, titulo: 'Lazer digital e compras online', atividade: 'Jogo da memória' },
      { numero: 26, titulo: 'Uso consciente do celular', atividade: 'Perguntas sobre o uso consciente do celular' },
      { numero: 27, titulo: 'Inteligência Artificial', atividade: 'Verdade ou criado por Inteligência Artificial' }
    ]
  },
  tecnologiasAvancado: {
    nome: 'Ensino das Tecnologias Digitais - Avançado',
    aulas: [
      { numero: 1, titulo: 'Apresentação', atividade: 'Acesse o Ambiente Virtual de Aprendizagem e realize a atividade de hoje!' },
      { numero: 2, titulo: 'Ambiente virtual de aprendizagem', atividade: 'Formulário de sondagem' },
      { numero: 3, titulo: 'Tela inicial dos dispositivos móveis', atividade: 'Pesquisando um aplicativo' },
      { numero: 4, titulo: 'Câmera e galeria', atividade: 'Ligando a flash' },
      { numero: 5, titulo: 'Explorando o WhatsApp', atividade: 'Enviando uma figurinha' },
      { numero: 6, titulo: 'Ferramentas do WhatsApp', atividade: 'Comunidades do WhatsApp (VÍDEO)' },
      { numero: 7, titulo: 'Pesquisas na internet', atividade: 'Fechando abas do Google Chrome' },
      { numero: 8, titulo: 'Google Lens', atividade: 'O que é o Google Lens?' },
      { numero: 9, titulo: 'Google Maps', atividade: 'O que é o Google Maps?' },
      { numero: 10, titulo: 'YouTube', atividade: 'Compartilhando um vídeo no YouTube' },
      { numero: 11, titulo: 'YouTube - botões essenciais', atividade: 'Pesquisas no YouTube' },
      { numero: 12, titulo: 'Instalação e Desinstalação de aplicativos', atividade: 'Instalando aplicativos' },
      { numero: 13, titulo: 'Aplicativo de Serviços', atividade: 'Aplicativos de Serviços.' },
      { numero: 14, titulo: 'Portal Gov.br', atividade: 'Criando um conta GOV(VÍDEO)' },
      { numero: 15, titulo: 'Transportes por aplicativos', atividade: 'Solicitando uma corrida' },
      { numero: 16, titulo: 'Segurança Digital', atividade: 'Identificando golpes' },
      { numero: 17, titulo: 'Aplicativos de Bancos', atividade: 'Enviando um pix' },
      { numero: 18, titulo: 'Lazer digital e Compras online', atividade: 'Lazer digital e Compras online' },
      { numero: 19, titulo: 'Inteligência Artificial', atividade: 'Verdade ou criado por inteligência artificial' },
      { numero: 20, titulo: 'Uso consciente do celular', atividade: 'Perguntas sobre o uso consciente do celular' }
    ]
  },
  turismoDigital: {
    nome: 'Turismo Digital',
    aulas: [
      { numero: 1, titulo: 'Apresentação', atividade: 'Quais lugares você gostaria de visitar?' },
      { numero: 2, titulo: 'Exposições e museus virtuais', atividade: 'Exposições no Google Chrome' },
      { numero: 3, titulo: 'Museus pelo mundo', atividade: 'Jogo da Memória: Obras de Arte' },
      { numero: 4, titulo: 'Explorando o mundo com o Street View', atividade: 'Viajando com o Street View' },
      { numero: 5, titulo: 'Maravilhas do mundo', atividade: 'Descobrindo as maravilhas' },
      { numero: 6, titulo: 'Explorando o mundo com Google Arts & Culture', atividade: 'Turistando' },
      { numero: 7, titulo: 'Museus brasileiros', atividade: 'Turistando' },
      { numero: 8, titulo: 'Explorando a cultura Indígena', atividade: 'Jogo da Memória: Cultura Indigena' }
    ]
  },
  redesSociais: {
    nome: 'Redes Sociais',
    aulas: [
      { numero: 1, titulo: 'Apresentação', atividade: 'Sem atividade' },
      { numero: 2, titulo: 'Grupos do Whatsapp', atividade: 'Grupos do WhatsApp' },
      { numero: 3, titulo: 'Conhecendo o Facebook', atividade: 'Alterando foto de perfil do Facebook' },
      { numero: 4, titulo: 'Postagens e botões do Facebook', atividade: 'Interações com botões do Facebook' },
      { numero: 5, titulo: 'Conhecendo o Instagram', atividade: 'Identificando os botões do Instagram' },
      { numero: 6, titulo: 'Stories e interações no Instagram', atividade: 'Postando um story no Instagram' },
      { numero: 7, titulo: 'Conhecendo o TikTok', atividade: 'Verdadeiro ou faso - TikTok' },
      { numero: 8, titulo: 'Pinterest', atividade: 'Pesquisando no Pinterest' }
    ]
  },
  croche: {
    nome: 'CROCHÊ',
    aulas: [
      { numero: 1, titulo: 'Apresentação', atividade: '' },
      { numero: 2, titulo: 'Pontos Básicos', atividade: '' },
      { numero: 3, titulo: 'Brinco Flor', atividade: '' },
      { numero: 4, titulo: 'Phone Strap', atividade: '' },
      { numero: 5, titulo: 'Porta celular', atividade: '' },
      { numero: 6, titulo: 'Porta garrafa de água', atividade: '' },
      { numero: 7, titulo: 'Porta pano de prato', atividade: '' },
      { numero: 8, titulo: 'Chaveiro de rosa', atividade: '' }
    ]
  },
  coral: {
    nome: 'Coral',
    aulas: []
  }
};

// Funções utilitárias
const Utils = {
  // Formatar data para exibição
  formatarData(dataStr) {
    if (!dataStr) return "";
    const meses = [
      "janeiro", "fevereiro", "março", "abril", "maio", "junho",
      "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];
    const data = new Date(dataStr + "T00:00:00");
    const dia = data.getDate();
    const mes = meses[data.getMonth()];
    return `${dia} de ${mes}`;
  },

  // Capitalizar primeira letra
  capitalizar(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  // Obter data atual no formato YYYY-MM-DD
  obterDataAtual() {
    const hoje = new Date();
    const yyyy = hoje.getFullYear();
    const mm = String(hoje.getMonth() + 1).padStart(2, '0');
    const dd = String(hoje.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  },

  // Obter dia da semana formatado
  obterDiaSemana(dataStr) {
    const data = new Date(dataStr + "T00:00:00");
    return this.capitalizar(data.toLocaleDateString('pt-BR', { weekday: 'long' }));
  },

  // Validar campos obrigatórios
  validarCampos(campos) {
    const camposVazios = [];

    for (const [nome, valor] of Object.entries(campos)) {
      if (valor === undefined || valor === null || String(valor).trim() === '') {

        camposVazios.push(nome);
      }
    }

    return {
      valido: camposVazios.length === 0,
      camposVazios
    };
  },

  // Mostrar notificação
  mostrarNotificacao(mensagem, tipo = 'info') {
    // Criar elemento de notificação
    const notificacao = document.createElement('div');
    notificacao.className = `notificacao notificacao-${tipo}`;
    notificacao.textContent = mensagem;

    // Estilos inline para a notificação
    Object.assign(notificacao.style, {
      position: 'fixed',
      top: '20px',
      right: '20px',
      padding: '15px 20px',
      borderRadius: '6px',
      color: 'white',
      fontWeight: '600',
      zIndex: '9999',
      transform: 'translateX(100%)',
      transition: 'transform 0.3s ease',
      maxWidth: '300px',
      wordWrap: 'break-word'
    });

    // Cores baseadas no tipo
    const cores = {
      success: '#2e7d32',
      error: '#d32f2f',
      warning: '#f57c00',
      info: '#1976d2'
    };

    notificacao.style.backgroundColor = cores[tipo] || cores.info;

    // Adicionar ao DOM
    document.body.appendChild(notificacao);

    // Animar entrada
    setTimeout(() => {
      notificacao.style.transform = 'translateX(0)';
    }, 100);

    // Remover após 3 segundos
    setTimeout(() => {
      notificacao.style.transform = 'translateX(100%)';
      setTimeout(() => {
        if (notificacao.parentNode) {
          notificacao.parentNode.removeChild(notificacao);
        }
      }, 300);
    }, 3000);
  }
};

// Funções para manipulação de elementos
const DOM = {
  // Obter elemento por ID
  obter(id) {
    return document.getElementById(id);
  },

  // Obter elementos por seletor
  obterTodos(seletor) {
    return document.querySelectorAll(seletor);
  },

  // Definir conteúdo de elemento
  definirConteudo(elemento, conteudo) {
    if (typeof elemento === 'string') {
      elemento = this.obter(elemento);
    }
    if (elemento) {
      elemento.textContent = conteudo;
    }
  },

  // Definir HTML de elemento
  definirHTML(elemento, html) {
    if (typeof elemento === 'string') {
      elemento = this.obter(elemento);
    }
    if (elemento) {
      elemento.innerHTML = html;
    }
  },

  // Mostrar/ocultar elemento
  mostrar(elemento, mostrar = true) {
    if (typeof elemento === 'string') {
      elemento = this.obter(elemento);
    }
    if (elemento) {
      elemento.style.display = mostrar ? 'block' : 'none';
    }
  },

  // Adicionar classe
  adicionarClasse(elemento, classe) {
    if (typeof elemento === 'string') {
      elemento = this.obter(elemento);
    }
    if (elemento) {
      elemento.classList.add(classe);
    }
  },

  // Remover classe
  removerClasse(elemento, classe) {
    if (typeof elemento === 'string') {
      elemento = this.obter(elemento);
    }
    if (elemento) {
      elemento.classList.remove(classe);
    }
  }
};

// Funções para clipboard
const Clipboard = {
  // Copiar texto para clipboard
  async copiar(texto) {
    try {
      await navigator.clipboard.writeText(texto);
      Utils.mostrarNotificacao('Mensagem copiada com sucesso!', 'success');
      return true;
    } catch (err) {
      // Fallback para navegadores mais antigos
      try {
        const textArea = document.createElement('textarea');
        textArea.value = texto;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
        Utils.mostrarNotificacao('Mensagem copiada com sucesso!', 'success');
        return true;
      } catch (fallbackErr) {
        Utils.mostrarNotificacao('Erro ao copiar mensagem. Tente selecionar e copiar manualmente.', 'error');
        return false;
      }
    }
  }
};

// Inicialização comum
document.addEventListener('DOMContentLoaded', function () {
  // Definir data atual em campos de data
  const camposData = document.querySelectorAll('input[type="date"]');
  camposData.forEach(campo => {
    if (!campo.value) {
      campo.value = Utils.obterDataAtual();
    }
  });

  // Adicionar eventos de hover para melhor UX
  const botoes = document.querySelectorAll('button, .btn');
  botoes.forEach(botao => {
    botao.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-2px)';
    });

    botao.addEventListener('mouseleave', function () {
      if (!this.disabled) {
        this.style.transform = '';
      }
    });
  });
});
// Alternância de Tema Claro/Escuro
document.addEventListener('DOMContentLoaded', () => {
  const botaoTema = document.getElementById('btn-tema');
  const temaAtual = localStorage.getItem('tema');

  if (temaAtual === 'escuro') {
    document.body.classList.add('modo-escuro');
  }

  if (botaoTema) {
    botaoTema.addEventListener('click', () => {
      document.body.classList.toggle('modo-escuro');
      const novoTema = document.body.classList.contains('modo-escuro') ? 'escuro' : 'claro';
      localStorage.setItem('tema', novoTema);
    });
  }
});