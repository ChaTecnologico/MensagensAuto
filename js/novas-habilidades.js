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
  "Teatro": "🎭",
  "Bordado": "🧵",
};

// Inicialização
document.addEventListener("DOMContentLoaded", function () {
  const cursoSelect = DOM.obter("curso");
  const turmaSelect = DOM.obter("turma");
  const projetoSelect = DOM.obter("projeto");

  carregarCursos(cursoSelect);

  cursoSelect.addEventListener("change", (event) => {
    carregarTurmas(event.target.value);
  });
});

// Quando o projeto é escolhido → carregar cursos válidos
DOM.obter("projeto").addEventListener("change", carregarCursos);

// Quando o curso é escolhido → carregar turmas compatíveis
DOM.obter("curso").addEventListener("change", carregarTurmas);


/* ================================
    CARREGAR CURSOS
================================ */
function carregarCursos() {
  const cursosExcluidos = [
    "tecnologias",
    "tecnologiasAvancado",
    "desenvolvimentoCognitivo",
    "desenvolvimentoCognitivoAvancado",
    "coral",
  ];

  const projeto = document.getElementById("projeto").value;
  const selectCurso = document.getElementById("curso");
  const selectTurma = document.getElementById("turma");

  // Limpa selects
  selectCurso.innerHTML = `<option value="">-- Escolha um curso --</option>`;
  selectTurma.innerHTML = `<option value="">-- Escolha a turma --</option>`;
  selectTurma.disabled = true;

  // Se não escolher projeto → desabilita curso
  if (!projeto) {
    selectCurso.disabled = true;
    return;
  }

  // Carrega apenas cursos que contenham turmas compatíveis
  for (const curso in MODULOS_DATA) {
    const turmas = MODULOS_DATA[curso].turmas || [];
    const possuiCompatível = turmas.some(t => t.tipo === projeto);
    console.log(curso)

    if (turmas && !cursosExcluidos.includes(curso)/*possuiCompatível*/) {
      const opt = document.createElement("option");
      opt.value = curso;
      opt.textContent = MODULOS_DATA[curso].nome;
      selectCurso.appendChild(opt);
    }
  }

  selectCurso.disabled = false;
}


/* ================================
    CARREGAR TURMAS
================================ */
function carregarTurmas() {
  const projeto = document.getElementById("projeto").value;
  const curso = document.getElementById("curso").value;
  const selectTurma = document.getElementById("turma");

  selectTurma.innerHTML = `<option value="">-- Escolha a turma --</option>`;

  if (!curso || !MODULOS_DATA[curso]) {
    selectTurma.disabled = true;
    return;
  }

  const turmas = MODULOS_DATA[curso].turmas || [];

  const turmasFiltradas = turmas.filter(t => t.tipo === projeto);
  console.log(turmasFiltradas);

  turmasFiltradas.forEach(t => {
    const opt = document.createElement("option");
    opt.value = t.numero;
    opt.textContent = t.numero;
    selectTurma.appendChild(opt);
  });

  selectTurma.disabled = turmasFiltradas.length === 0;
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

  const nomesCompletos = DOM.obter("nome-aluno")
    .value.split("\n")
    .filter((nome) => nome.trim() !== "");

  if (!cursoKey) {
    Utils.mostrarNotificacao("Por favor, selecione um curso.", "warning");
    return;
  }

  if (!turma) {
    Utils.mostrarNotificacao("Por favor, selecione uma turma.", "warning");
    return;
  }

  if (nomesCompletos.length === 0) {
    nomesCompletos.push("Aluno(a)"); 
    //return;
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
  nomesCompletos.forEach((nomeCompleto) => {
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

  Utils.mostrarNotificacao(
    "Mensagens geradas com sucesso! Use as setas para navegar.",
    "success"
  );
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
  DOM.obter("projeto").value = "";
  

  // Reseta o estado da navegação
  mensagensGeradas = [];
  indiceMensagemAtual = 0;
  const navButtonsContainer = DOM.obter("navigation-buttons");
  navButtonsContainer.style.display = "none";

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
    navButtonsContainer.style.display = "flex";
  } else {
    navButtonsContainer.style.display = "none";
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
