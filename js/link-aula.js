// JavaScript para Link da Aula

// New: Instructor and Module Data
const INSTRUCTOR_DATA = [
  {
    "nome": "Amanda Soares",
    "modulos": [
      { "nome": "Ensino das Tecnologias Digitais", "link": "https://meet.google.com/uyc-xcbz-gwh" },
      { "nome": "Ensino das Tecnologias Digitais - Avançado", "link": "https://meet.google.com/uyc-xcbz-gwh" },
      { "nome": "Desenvolvimento Cognitivo", "link": "https://meet.google.com/uyc-xcbz-gwh" },
      { "nome": "Desenvolvimento Cognitivo - Avançado", "link": "https://meet.google.com/uyc-xcbz-gwh" },
      { "nome": "Redes Sociais", "link": "https://meet.google.com/uyc-xcbz-gwh" },
    ]
  },
  {
    "nome": "Attali Correia",
    "modulos": [
      { "nome": "Ensino das Tecnologias Digitais", "link": "https://meet.google.com/nes-mbfi-uoy " },
      { "nome": "Ensino das Tecnologias Digitais - Avançado", "link": "https://meet.google.com/nes-mbfi-uoy " },
      { "nome": "Desenvolvimento Cognitivo", "link": "https://meet.google.com/nes-mbfi-uoy " },
      { "nome": "Desenvolvimento Cognitivo - Avançado", "link": "https://meet.google.com/nes-mbfi-uoy " },
    ]
  },
  {
    "nome": "Cintia Santiago",
    "modulos": [
      { "nome": "Ensino das Tecnologias Digitais", "link": "https://meet.google.com/chp-mjfd-yfy" },
{ "nome": "Ensino das Tecnologias Digitais - Avançado", "link": "https://meet.google.com/chp-mjfd-yfy" },
      { "nome": "Desenvolvimento Cognitivo", "link": "https://meet.google.com/chp-mjfd-yfy" },
{ "nome": "Desenvolvimento Cognitivo - Avançado", "link": "https://meet.google.com/chp-mjfd-yfy" },
    ]
  },
  {
    "nome": "Cristina Paulino",
    "modulos": [
      { "nome": "Desenvolvimento Cognitivo", "link": "https://meet.google.com/onw-wbyt-jjz" },
{ "nome": "Desenvolvimento Cognitivo - Avançado", "link": "https://meet.google.com/onw-wbyt-jjz" },
      { "nome": "Redes Sociais", "link": "https://meet.google.com/tcx-nbvb-nxt" },
    ]
  },
  {
    "nome": "Cristiano Lima",
    "modulos": [
      { "nome": "Ensino das Tecnologias Digitais", "link": "https://meet.google.com/oss-pjmt-imn" },
      { "nome": "Ensino das Tecnologias Digitais - Avançado", "link": "https://meet.google.com/oss-pjmt-imn" },
      { "nome": "Fotografia Digital", "link": "https://meet.google.com/ssb-qpuw-zvx" },
    ]
  },
  
  {
    "nome": "Daiana Fernandes",
    "modulos": [
      { "nome": "Crochê", "link": "https://meet.google.com/tqz-ngvb-hmp" },
    ]
  },
  {
    "nome": "Jully Ribeiro",
    "modulos": [
      { "nome": "Ensino das Tecnologias Digitais", "link": "https://meet.google.com/zcp-srct-yeb" },
{ "nome": "Ensino das Tecnologias Digitais - Avançado ", "link": "https://meet.google.com/zcp-srct-yeb" },
      { "nome": "Desenvolvimento Cognitivo", "link": "https://meet.google.com/zcp-srct-yeb" },
{ "nome": "Desenvolvimento Cognitivo - Avançado", "link": "https://meet.google.com/zcp-srct-yeb" },
      { "nome": "Redes Sociais", "link": "https://meet.google.com/zcp-srct-yeb" },
      { "nome": "Educação Financeira", "link": "https://meet.google.com/zcp-srct-yeb" },
    ]
  },
  {
    "nome": "Karinny Ferreira",
    "modulos": [
      { "nome": "Ensino das Tecnologias Digitais", "link": "https://meet.google.com/sii-edgk-gsh" },
{ "nome": "Ensino das Tecnologias Digitais - Avançado", "link": "https://meet.google.com/sii-edgk-gsh" },
      { "nome": "Nutrição", "link": "https://meet.google.com/sii-edgk-gsh" },
      { "nome": "Culinária", "link": "https://meet.google.com/sii-edgk-gsh" },
    ]
  },
  {
    "nome": "Layane Ramos",
    "modulos": [
      { "nome": "Ensino das Tecnologias Digitais", "link": "https://meet.google.com/cqm-jwgq-mck" },
    { "nome": "Ensino das Tecnologias Digitais - Avançado", "link": "https://meet.google.com/cqm-jwgq-mck" },
      { "nome": "Ginástica", "link": "https://meet.google.com/zmn-czch-tdz" },
      { "nome": "Dança", "link": "https://meet.google.com/zmn-czch-tdz" },
    ]
  },
  {
    "nome": "Ligia Lima",
    "modulos": [
      { "nome": "Turismo Digital", "link": "https://meet.google.com/kaj-pffe-ufo" },
      { "nome": "Ensino das Tecnologias Digitais", "link": "https://meet.google.com/qcs-tgjw-obg"},
{ "nome": "Ensino das Tecnologias Digitais - Avançado", "link": "https://meet.google.com/qcs-tgjw-obg"},
    ]
  },
  {
    "nome": "Mariana Brasil",
    "modulos": [
      { "nome": "Ensino das Tecnologias Digitais", "link": "https://meet.google.com/gtq-rjpx-rpd" },
  { "nome": "Ensino das Tecnologias Digitais - Avançado", "link": "https://meet.google.com/gtq-rjpx-rpd" },
      { "nome": "Cultivo de Plantas", "link": "https://meet.google.com/snf-owtz-yax" },
    ]
  },
  {
    "nome": "Saionara Silva",
    "modulos": [
      { "nome": "Desenho e Pintura", "link": "https://meet.google.com/nuu-dtgs-weo" },
      { "nome": "Ensino das Tecnologias Digitais", "link": "https://meet.google.com/arv-ojyi-fdu" },
{ "nome": "Ensino das Tecnologias Digitais - Avançado", "link": "https://meet.google.com/arv-ojyi-fdu" }
    ],
  }
];


// Gerar mensagem
function gerarMensagem() {
  const dataInput = DOM.obter('dataAula').value;
  const instrutorSelect = DOM.obter('instrutor').value; // Get selected instructor
  const moduloSelect = DOM.obter('modulo').value;
  const linkInput = DOM.obter('linkMeet').value.trim(); // Get link from hidden input

  // Validar campos
  const validacao = Utils.validarCampos({
    'Data da aula': dataInput,
    'Instrutor(a)': instrutorSelect, // Validate instructor
    'Módulo': moduloSelect,
    'Link do Meet': linkInput // Validate the actual link
  });

  if (!validacao.valido) {
    DOM.definirConteudo('mensagem', 'Por favor, preencha todos os campos.');
    Utils.mostrarNotificacao('Por favor, preencha todos os campos.', 'warning');
    return;
  }

  // Validar se o link parece ser um URL válido
  if (!isValidURL(linkInput)) {
    DOM.definirConteudo('mensagem', 'O link gerado não parece ser um URL válido.');
    Utils.mostrarNotificacao('O link gerado não parece ser um URL válido.', 'warning');
    return;
  }

  const dataFormatada = Utils.formatarData(dataInput);

  // Emojis mapping
  const emojis = {
    'Ensino das Tecnologias Digitais': '📱',
    'Desenvolvimento Cognitivo': '🧠',
    'Redes Sociais': '📱',
    'Educação Financeira': '💰',
    'Culinária': '🍒',
    'Dança': '💃',
    'Nutrição': '🍊',
    'Crochê': '🧶',
    'Desenho e Pintura': '🎨',
    'Cultivo de Plantas': '🪴',
    'Fotografia Digital': '📸',
    'Ginástica': '🏃',
    'Ginástica - Avançado': '🏃',
    'Coral': '🎤',
    'Ensino das Tecnologias Digitais - Avançado': '📱',
    'Desenvolvimento Cognitivo - Avançado': '🧠',
    'Turismo Digital': '🌎',
  };

  const emojiModulo = emojis[moduloSelect] || ''; // Get emoji, default to empty string if not found

  // Changed to use actual newline characters and set the value of the textarea
  const mensagem = `Chegou a hora da aula! - ${dataFormatada}\n\n*${moduloSelect}* ${emojiModulo}\n\nLink da aula de hoje - Toque aqui 👇🏼\n*${linkInput}*`;

  // Corrected line: Use .value for textarea
  DOM.obter('mensagem').value = mensagem;
  Utils.mostrarNotificacao('Mensagem gerada com sucesso!', 'success');
}

// Validar URL
function isValidURL(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    // Verificar se pelo menos parece com um link
    const urlPattern = /^(https?:\/\/)[\da-z\.-]+\.([a-z\.]{2,6})([\/\\\w \.-]*)*\/?$/i; // Added i flag for case-insensitivity
    return urlPattern.test(string);
  }
}

// Copiar mensagem
async function copiarMensagem() {
  // Corrected line: Use .value for textarea
  const texto = DOM.obter('mensagem').value;

  if (!texto || texto.trim() === '') {
    Utils.mostrarNotificacao('Não há mensagem para copiar!', 'warning');
    return;
  }

  await Clipboard.copiar(texto);
}

// Limpar mensagem
function limparMensagem() {
  DOM.obter('dataAula').value = Utils.obterDataAtual();
  DOM.obter('instrutor').value = ''; // Clear instructor select
  DOM.obter('modulo').innerHTML = '<option value="" disabled selected>Selecione o módulo</option>'; // Reset module options
  DOM.obter('modulo').value = '';
  DOM.obter('linkMeet').value = ''; // Clear hidden link input
  // Corrected line: Use .value for textarea
  DOM.obter('mensagem').value = '';
  Utils.mostrarNotificacao('Campos limpos!', 'info');
}


// Populate instructor dropdown and handle module/link selection
document.addEventListener('DOMContentLoaded', function () {
  const instrutorSelect = DOM.obter('instrutor');
  const moduloSelect = DOM.obter('modulo');
  const linkMeetInput = DOM.obter('linkMeet');

  // Populate instructor dropdown in alphabetical order
  const uniqueInstructors = [...new Set(INSTRUCTOR_DATA.map(i => i.nome))].sort(); // Sort instructors alphabetically
  uniqueInstructors.forEach(instrutor => {
    const option = document.createElement('option');
    option.value = instrutor;
    option.textContent = instrutor;
    instrutorSelect.appendChild(option);
  });

  // Event listener for instructor selection
  instrutorSelect.addEventListener('change', function () {
    const selectedInstructorName = this.value;
    moduloSelect.innerHTML = '<option value="" disabled selected>Selecione o módulo</option>'; // Reset module options
    moduloSelect.value = ''; // Clear selected module
    linkMeetInput.value = ''; // Clear the link

    if (selectedInstructorName) {
      const instructorData = INSTRUCTOR_DATA.find(i => i.nome === selectedInstructorName); // Find instructor data
      if (instructorData) {
        // Sort modules alphabetically by name before populating
        const sortedModules = instructorData.modulos.slice().sort((a, b) => a.nome.localeCompare(b.nome));
        sortedModules.forEach(mod => {
          const option = document.createElement('option');
          option.value = mod.nome;
          option.textContent = mod.nome;
          moduloSelect.appendChild(option);
        });
      }
    }
  });

  // Event listener for module selection
  moduloSelect.addEventListener('change', function () {
    const selectedInstructorName = instrutorSelect.value;
    const selectedModuleName = this.value;
    linkMeetInput.value = ''; // Clear the link

    if (selectedInstructorName && selectedModuleName) {
      const instructorData = INSTRUCTOR_DATA.find(i => i.nome === selectedInstructorName); // Find instructor data
      if (instructorData) {
        const module = instructorData.modulos.find(mod => mod.nome === selectedModuleName); // Find module and its link
        if (module) {
          linkMeetInput.value = module.link;
        } else {
          Utils.mostrarNotificacao('Link do Meet não encontrado para o módulo selecionado.', 'warning');
        }
      }
    }
  });

  // Initialize date field on load
  const camposData = document.querySelectorAll('input[type="date"]');
  camposData.forEach(campo => {
    if (!campo.value) {
      campo.value = Utils.obterDataAtual();
    }
  });

  // Add hover events for better UX
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

  // Dark/Light Theme Toggle
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