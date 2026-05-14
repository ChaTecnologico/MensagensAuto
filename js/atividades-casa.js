// ===================================================
// GERADOR DE MENSAGENS DE ATIVIDADES DE CASA
// ===================================================
// Gera mensagens para indicar atividades que devem
// ser realizadas em casa pelos alunos

// Variável global para armazenar as aulas do módulo selecionado
let aulasAtuais = [];

// ===== Inicialização =====
// Executa quando o DOM está totalmente carregado
document.addEventListener("DOMContentLoaded", function () {
  // Obtém referência do select de módulo
  const moduloSelect = DOM.obter("modulo");

  if (moduloSelect) {
    // Adiciona listener para quando o módulo mudar
    moduloSelect.addEventListener("change", carregarAulas);
  }
});

// ===== Carregar Aulas do Módulo Selecionado =====
// Exibe todas as aulas do módulo em formato de grid com radio buttons
function carregarAulas() {
  const moduloSelecionado = DOM.obter("modulo").value;
  const container = DOM.obter("aulas-container");

  // Limpar container anterior
  container.innerHTML = "";
  aulasAtuais = [];

  // Se nenhum módulo foi selecionado, mostra mensagem
  if (!moduloSelecionado) {
    container.innerHTML =
      '<p style="grid-column: 1 / -1; text-align: center; color: #888; margin: 20px;">Escolha um módulo acima!</p>';
    DOM.definirConteudo("mensagem", "");
    DOM.mostrar("botoes", false);
    return;
  }

  // Obtém dados do módulo selecionado
  const moduloData = MODULOS_DATA[moduloSelecionado];
  if (!moduloData) {
    container.innerHTML =
      '<p style="grid-column: 1 / -1; text-align: center; color: #f44336; margin: 20px;">Módulo não encontrado!</p>';
    return;
  }

  // Armazena as aulas para uso posterior
  aulasAtuais = moduloData.aulas;

  // ===== Criar Elementos para Cada Aula =====
  // Cada aula é exibida como um item clicável com radio button
  aulasAtuais.forEach((aula, index) => {
    const aulaDiv = document.createElement("div");
    aulaDiv.className = "aula-item";

    // Cria radio button para seleção de aula única
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "aulaSelecionada";
    input.id = `aula${index}`;
    input.value = index;

    // Cria label com número e título da aula
    const label = document.createElement("label");
    label.htmlFor = `aula${index}`;
    label.textContent = `AULA ${String(aula.numero).padStart(2, "0")} - ${
      aula.titulo
    }`;

    // ===== Evento de Clique no Div =====
    // Permite clicar em qualquer parte do item para selecionar
    aulaDiv.addEventListener("click", function () {
      input.checked = true;
      // Remove seleção visual de outros itens
      document.querySelectorAll(".aula-item").forEach((item) => {
        item.classList.remove("selected");
      });
      // Adiciona seleção visual ao item atual
      aulaDiv.classList.add("selected");
    });

    // Monta estrutura do elemento
    aulaDiv.appendChild(input);
    aulaDiv.appendChild(label);
    container.appendChild(aulaDiv);
  });

  // Limpa mensagem anterior
  DOM.definirConteudo("mensagem", "");
  DOM.mostrar("botoes", false);
}

// ===== Gerar Mensagem de Atividade de Casa =====
// Cria a mensagem com base na aula selecionada
function gerarMensagem() {
  // Obtém a aula selecionada (apenas uma, via radio button)
  const selecionada = document.querySelector(
    'input[name="aulaSelecionada"]:checked'
  );
  const mensagemDiv = DOM.obter("mensagem");
  const botoesDiv = DOM.obter("botoes");
  const moduloSelect = DOM.obter("modulo");

  // Valida se alguma aula foi selecionada
  if (!selecionada) {
    DOM.definirConteudo("mensagem", "Por favor, selecione uma aula.");
    DOM.mostrar("botoes", false);
    Utils.mostrarNotificacao("Por favor, selecione uma aula.", "warning");
    return;
  }

  // Obtém informações do módulo e aula
  const moduloNome = moduloSelect.selectedOptions[0].textContent;
  const aula = aulasAtuais[selecionada.value];
  // Verifica se há múltiplas atividades separadas por ";"
  const multiplasAtividades = aula.atividade.includes(";");

  // ===== Construir Mensagem =====
  let mensagem = "*ATIVIDADE DE CASA* 🏡📝\n\n";
  mensagem += `*${moduloNome}*\n`;
  mensagem +=
    "Acesse o Ambiente Virtual de Aprendizagem e realize a atividade de hoje!\n\n";
  mensagem += `📱 _*AULA ${String(aula.numero).padStart(2, "0")}:* ${
    aula.titulo
  }_\n`;
  
  // Se há múltiplas atividades, as formata separadamente
  if (multiplasAtividades) {
    const atividades = aula.atividade
      .split(";")
      .map((atividade, index) => {
        return `✏️ *ATIVIDADE ${String(aula.numero).padStart(2, "0")} (PARTE ${
          index + 1
        }):* ${atividade.trim()}`;
      })
      .join("\n");
    mensagem += atividades + "\n\n";
  } else {
    // Caso contrário, mostra apenas uma atividade
    mensagem += `✏️ *ATIVIDADE ${String(aula.numero).padStart(2, "0")}:* ${
      aula.atividade
    }\n\n`;
  }

  // Exibe a mensagem e mostra botões
  DOM.definirConteudo("mensagem", mensagem);
  DOM.mostrar("botoes", true);

  // Mostra notificação de sucesso
  Utils.mostrarNotificacao("Mensagem gerada com sucesso!", "success");
}

// ===== Copiar Mensagem =====
// Copia o texto da mensagem para a área de transferência
async function copiarMensagem() {
  const texto = DOM.obter("mensagem").textContent;

  // Valida se há conteúdo para copiar
  if (!texto || texto.trim() === "") {
    Utils.mostrarNotificacao("Não há mensagem para copiar!", "warning");
    return;
  }

  // Usa a classe Clipboard para copiar
  await Clipboard.copiar(texto);
}

// ===== Limpar Mensagem =====
// Reseta todos os campos e volta ao estado inicial
function limparMensagem() {
  // Limpa seleção de módulo
  DOM.obter("modulo").value = "";
  // Reseta container de aulas
  DOM.definirHTML(
    "aulas-container",
    `
    <p style="grid-column: 1 / -1; text-align: center; color: #888; margin: 20px;">
      Escolha um módulo acima!
    </p>
  `
  );
  // Limpa mensagem gerada
  DOM.definirConteudo("mensagem", "");
  // Mostra notificação de conclusão
  Utils.mostrarNotificacao("Mensagem limpa com sucesso!", "info");
}
