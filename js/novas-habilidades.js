// JavaScript para Lembretes de Novas Habilidades

//Variáveis globais
let mensagensGeradas = [];
let indiceMensagemAtual = 0;

// Mapeamento de emojis para cada curso
const EMOJIS = {
  "Redes Sociais": "📱",
  "Educação Financeira": "💰",
  "Culinária": "🍒",
  "Dança": "💃",
  "Nutrição": "🍊",
  "Crochê": "🧶",
  "Desenho e Pintura": "🎨",
  "Cultivo de Plantas": "🪴",
  "Fotografia Digital": "📸",
  "Ginástica": "🏃",
  "Ginástica - Avançado": "🏃",
  "Coral": "🎤",
  "Turismo Digital": "🌎",
};

// Objeto de dados de todos os módulos
const MODULOS_DATA = {
  "danca": {
    nome: "Dança",
    turmas: [
      { numero: "01", data: "20 de Agosto de 2025", horario: "10:30", dia: "QUARTA-FEIRA" }],
  },
  "nutricao": {
    nome: "Nutrição",
    turmas: [
      { numero: "05", data: "20 de Agosto de 2025", horario: "15:30", dia: "QUARTA-FEIRA" }],
  },
  "desenho-e-pintura": {
    nome: "Desenho e Pintura",
    turmas: [
      { numero: "06", data: "20 de Agosto de 2025", horario: "13:30", dia: "QUARTA-FEIRA" }],
  },
  "cultivo-de-plantas": {
    nome: "Cultivo de Plantas",
    turmas: [
      { numero: "06", data: "20 de Agosto de 2025", horario: "08:30", dia: "QUARTA-FEIRA" }],
  },
  "fotografia-digital": {
    nome: "Fotografia Digital",
    turmas: [
      { numero: "06", data: "20 de Agosto de 2025", horario: "10:30", dia: 'QUARTA-FEIRA' }],
  },
  "redes-sociais": {
    nome: "Redes Sociais",
    turmas: [],
  },
  "culinária": {
    nome: "Culinária",
    turmas: [],
  },
  "canto-e-coral": {
    nome: "Canto e Coral",
    turmas: [],
  },
  "crochê": {
    nome: "Crochê",
    turmas: [],
  },
  "dança-e-movimento ": {
    nome: "Dança e Movimento",
    turmas: [],
  },
  "ginástica-módulo-I": {
    nome: "Ginástica Módulo I",
    turmas: [],
  },
  "ginástica-módulo-II": {
    nome: "Ginástica Módulo II",
    turmas: [],
  },
  "turismo-digital": {
    nome: "Turismo Digital",
    turmas: [],
  },
  "teatro": {
    nome: "Teatro",
    turmas: [],
  },
  "bordado": {
    nome: "Bordado",
    turmas: [],
  },
};

// Funções utilitárias e DOM (assumidas como existentes em common.js)
const Utils = {
  mostrarNotificacao: (msg, type) =>
    console.log(`Notificação (${type}): ${msg}`),
  formatarData: (date) => date,
  obterDataAtual: () => new Date().toISOString().split("T")[0],
};

const DOM = {
  obter: (id) => document.getElementById(id),
  definirConteudo: (id, content) => {
    const element = document.getElementById(id);
    if (element) {
      element.value = content;
    }
  },
};

const Clipboard = {
  copiar: (text) => navigator.clipboard.writeText(text),
};

// Inicialização
document.addEventListener("DOMContentLoaded", function () {
  const cursoSelect = DOM.obter("curso");
  const turmaSelect = DOM.obter("turma");

  carregarCursos(cursoSelect);

  cursoSelect.addEventListener("change", (event) => {
    carregarTurmas(event.target.value);
  });
});

function carregarTurmas(cursoKey) {
  const turmaSelect = DOM.obter("turma");
  turmaSelect.innerHTML = '<option value="">-- Escolha a turma --</option>'; // Limpa e adiciona a opção padrão
  console.log(MODULOS_DATA[cursoKey].turmas)
  if (MODULOS_DATA[cursoKey].turmas.length > 0){
    if (cursoKey && MODULOS_DATA[cursoKey] && MODULOS_DATA[cursoKey].turmas) {
      MODULOS_DATA[cursoKey].turmas.forEach((turma) => {
        const option = document.createElement("option");
        option.value = turma.numero;
        option.textContent = `Turma ${turma.numero}`;
        turmaSelect.appendChild(option);
      });
      turmaSelect.disabled = false; // Habilita o campo de turma
    } else {
      turmaSelect.disabled = true; // Desabilita se nenhum curso válido for selecionado
    }
  }else{
    turmaSelect.innerHTML = '<option value="">-- Sem turmas cadastradas --</option>';
  }
}

function carregarCursos(selectElement) {
  const cursosExcluidos = [
    "Ensino das Tecnologias Digitais",
    "Ensino das Tecnologias Digitais - Avançado",
    "Desenvolvimento Cognitivo",
    "Desenvolvimento Cognitivo - Avançado",
  ];

  // Carrega todos os cursos disponíveis
  for (const key in MODULOS_DATA) {
    if (Object.prototype.hasOwnProperty.call(MODULOS_DATA, key)) {
      const cursoNome = MODULOS_DATA[key].nome;
      if (!cursosExcluidos.includes(cursoNome)) {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = cursoNome;
        selectElement.appendChild(option);
      }
    }
  }
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function trataNome(nomeCompleto) {
  // Quebra o nome completo em partes
  
  const nomes = nomeCompleto.toLowerCase().split(" ");

  let nomeAlunoFormatado = capitalizeFirstLetter(nomes[0]); // Inicia com o primeiro nome

  // Adiciona as partes do nome, incluindo preposições, até o segundo nome válido
  if (nomes.length > 1) {
    if (
      nomes[1].toLowerCase() === "de" ||
      nomes[1].toLowerCase() === "da" ||
      nomes[1].toLowerCase() === "do" ||
      nomes[1].toLowerCase() === "dos" ||
      nomes[1].toLowerCase() === "das"
    ) {
      if (nomes.length > 2) {
        nomeAlunoFormatado +=
          " " + nomes[1].toLowerCase() + " " + capitalizeFirstLetter(nomes[2]);
      } else {
        nomeAlunoFormatado += " " + nomes[1].toLowerCase();
      }
    } else {
      nomeAlunoFormatado += " " + capitalizeFirstLetter(nomes[1]);
    }
  }
  return nomeAlunoFormatado;
}

// Gerar mensagem
function gerarMensagem() {
  const cursoKey = DOM.obter("curso").value;
  const turma = DOM.obter("turma").value;
  
  const nomesCompletos = DOM.obter("nome-aluno").value.split('\n').filter(nome => nome.trim() !== '');

  if (!cursoKey) {
    Utils.mostrarNotificacao("Por favor, selecione um curso.", "warning");
    return;
  }
  
  if (!turma) {
    Utils.mostrarNotificacao("Por favor, selecione uma turma.", "warning");
    return;
  }

  if (nomesCompletos.length === 0) {
    Utils.mostrarNotificacao("Por favor, digite os nomes dos alunos.", "warning");
    return;
  }

  const detalhes = MODULOS_DATA[cursoKey];

  if (!detalhes) {
    Utils.mostrarNotificacao(
      "Não há informações de data e horário para este curso. Por favor, selecione um curso da lista fornecida.",
      "warning"
    );
    return;
  }

  const cursoNome = detalhes.nome;
  const turmaDetalhes = detalhes.turmas.find((t) => t.numero === turma);
  const cursoEmoji = EMOJIS[cursoNome] || "✨";
  
  // Limpa o array e o índice para uma nova geração
  mensagensGeradas = [];
  indiceMensagemAtual = 0;

  // Loop para gerar e armazenar uma mensagem para cada nome
  nomesCompletos.forEach(nomeCompleto => {
    const nomeAlunoFormatado = trataNome(nomeCompleto);
      
    const mensagem = `Olá, ${nomeAlunoFormatado} 👋🏼

Chegamos a etapa dos cursos das Novas Habilidades! Estou passando aqui para confirmar o horário das aulas do curso escolhido e informar a data da primeira aula!
    
▶ Curso: *${cursoNome} - ${turmaDetalhes.numero} ${cursoEmoji}*
🗓 Dia: *${turmaDetalhes.dia}*
⏰ Horário: *${turmaDetalhes.horario}*
    
📝 Lembretes importantes:
1. As aulas têm início no dia *${turmaDetalhes.data}*!
2. Você será adicionado a um novo grupo aqui no WhatsApp com o nome do curso escolhido.
3. O link será enviado no grupo da turma de *${cursoNome}*, fique atento(a)!
    
Até lá 😉`;

    mensagensGeradas.push(mensagem.trim());
  });

  // Exibe a primeira mensagem gerada
  mostrarMensagem(0);

  Utils.mostrarNotificacao("Mensagens geradas com sucesso! Use as setas para navegar.", "success");
}

// Copiar mensagem
async function copiarMensagem() {
  const texto = DOM.obter("mensagem-display").value; // Alterado o ID

  if (!texto || texto.trim() === "") {
    Utils.mostrarNotificacao("Não há mensagem para copiar!", "warning");
    return;
  }

  await Clipboard.copiar(texto);
  Utils.mostrarNotificacao(
    "Mensagem copiada para a área de transferência!",
    "success"
  );
}

// Limpar campos
function limparCampos() {
  DOM.obter("curso").value = "";
  DOM.obter("turma").value = "";
  DOM.obter("nome-aluno").value = "";
  DOM.obter("mensagem-display").value = "";
  
  // Reseta o estado da navegação
  mensagensGeradas = [];
  indiceMensagemAtual = 0;
  const navButtonsContainer = DOM.obter("navigation-buttons");
  navButtonsContainer.style.display = 'none';

  Utils.mostrarNotificacao("Campos limpos com sucesso!", "success");
}

function atualizarNavegacao() {
  const btnAnterior = DOM.obter("btn-anterior");
  const btnProximo = DOM.obter("btn-proximo");
  
  btnAnterior.disabled = indiceMensagemAtual === 0;
  btnProximo.disabled = indiceMensagemAtual === mensagensGeradas.length - 1;

  // Mostra os botões de navegação apenas se houver mais de uma mensagem
  const navButtonsContainer = DOM.obter("navigation-buttons");
  if (mensagensGeradas.length > 1) {
    navButtonsContainer.style.display = 'flex';
  } else {
    navButtonsContainer.style.display = 'none';
  }
}

function mostrarMensagem(indice) {
  const mensagemDisplay = DOM.obter("mensagem-display");
  if (mensagensGeradas.length > 0) {
    mensagemDisplay.value = mensagensGeradas[indice];
  }
  atualizarNavegacao();
}

function mostrarProximaMensagem() {
  if (indiceMensagemAtual < mensagensGeradas.length - 1) {
    indiceMensagemAtual++;
    mostrarMensagem(indiceMensagemAtual);
  }
}

function mostrarMensagemAnterior() {
  if (indiceMensagemAtual > 0) {
    indiceMensagemAtual--;
    mostrarMensagem(indiceMensagemAtual);
  }
}