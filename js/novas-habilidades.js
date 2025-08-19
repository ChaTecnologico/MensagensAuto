// JavaScript para Lembretes de Novas Habilidades

// Mapeamento de emojis para cada curso
const EMOJIS = {
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
  'Turismo Digital': '🌎',
};

// Objeto de dados de todos os módulos
const MODULOS_DATA = {
  "danca": { nome: "Dança" },
  "nutricao": { nome: "Nutrição" },
  "desenho-e-pintura": { nome: "Desenho e Pintura" },
  "cultivo-de-plantas": { nome: "Cultivo de Plantas" },
  "fotografia-digital": { nome: "Fotografia Digital" },
 };

// Objeto de dados dos cursos com seus detalhes específicos, conforme você informou
const CURSOS_DETALHES = {
  'cultivo-de-plantas': { nome: 'Cultivo de Plantas', turma: '06', horario: '08:30', dia: 'QUARTA-FEIRA', data: '20 de agosto' },
  'danca': { nome: 'Dança', turma: '01', horario: '10:30', dia: 'QUARTA-FEIRA', data: '20 de agosto' },
  'fotografia-digital': { nome: 'Fotografia Digital', turma: '06', horario: '10:30', dia: 'QUARTA-FEIRA', data: '20 de agosto' },
  'desenho-e-pintura': { nome: 'Desenho e Pintura', turma: '06', horario: '13:30', dia: 'QUARTA-FEIRA', data: '20 de agosto' },
  'nutricao': { nome: 'Nutrição', turma: '05', horario: '15:30', dia: 'QUARTA-FEIRA', data: '20 de agosto' },
};

// Funções utilitárias e DOM (assumidas como existentes em common.js)
const Utils = {
  mostrarNotificacao: (msg, type) => console.log(`Notificação (${type}): ${msg}`),
  formatarData: (date) => date,
  obterDataAtual: () => new Date().toISOString().split('T')[0]
};

const DOM = {
  obter: (id) => document.getElementById(id),
  definirConteudo: (id, content) => {
    const element = document.getElementById(id);
    if (element) {
      element.value = content;
    }
  }
};

const Clipboard = {
  copiar: (text) => navigator.clipboard.writeText(text)
};

// Inicialização
document.addEventListener('DOMContentLoaded', function () {
  const cursoSelect = DOM.obter('curso');
  carregarCursos(cursoSelect);
});

function carregarCursos(selectElement) {
  const cursosExcluidos = [
    'Ensino das Tecnologias Digitais',
    'Ensino das Tecnologias Digitais - Avançado',
    'Desenvolvimento Cognitivo',
    'Desenvolvimento Cognitivo - Avançado'
  ];

  // Carrega todos os cursos disponíveis
  for (const key in MODULOS_DATA) {
    if (Object.prototype.hasOwnProperty.call(MODULOS_DATA, key)) {
      const cursoNome = MODULOS_DATA[key].nome;
      if (!cursosExcluidos.includes(cursoNome)) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = cursoNome;
        selectElement.appendChild(option);
      }
    }
  }
}

// Gerar mensagem
function gerarMensagem() {
  const cursoKey = DOM.obter('curso').value;
  const anoAtual = 2025;

  if (!cursoKey) {
    Utils.mostrarNotificacao('Por favor, selecione um curso.', 'warning');
    return;
  }

  // Verifica se o curso selecionado tem dados específicos
  const detalhes = CURSOS_DETALHES[cursoKey];

  if (!detalhes) {
    Utils.mostrarNotificacao('Não há informações de data e horário para este curso. Por favor, selecione um curso da lista fornecida.', 'warning');
    return;
  }
  
  const cursoNome = detalhes.nome;
  const cursoEmoji = EMOJIS[cursoNome] || '✨';

  const mensagem = `
Olá, (NOME DO ALUNO) 👋🏼

Chegamos a etapa dos cursos das Novas Habilidades! Estou passando aqui para confirmar o horário das aulas do curso escolhido e informar a data da primeira aula!

▶ Curso: *${cursoNome} - ${detalhes.turma} ${cursoEmoji}*
🗓 Dia: *${detalhes.dia}*
⏰ Horário: *${detalhes.horario}*

📝 Lembretes importantes:
1. As aulas têm início no dia *${detalhes.data} de ${anoAtual}*!
2. Você será adicionado a um novo grupo aqui no WhatsApp com o nome do curso escolhido.
3. O link será enviado no grupo da turma de *${cursoNome}*, fique atento(a)!

Até lá 😉
  `;

  DOM.definirConteudo('mensagem', mensagem.trim());
  Utils.mostrarNotificacao('Mensagem gerada com sucesso!', 'success');
}

// Copiar mensagem
async function copiarMensagem() {
  const texto = DOM.obter('mensagem').value;

  if (!texto || texto.trim() === '') {
    Utils.mostrarNotificacao('Não há mensagem para copiar!', 'warning');
    return;
  }

  await Clipboard.copiar(texto);
  Utils.mostrarNotificacao('Mensagem copiada para a área de transferência!', 'success');
}

// Limpar campos
function limparCampos() {
  DOM.obter('curso').value = '';
  DOM.definirConteudo('mensagem', '');
  Utils.mostrarNotificacao('Campos limpos com sucesso!', 'success');
}