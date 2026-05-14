// ===================================================
// GERADOR DE MENSAGENS DE ATIVIDADES PENDENTES
// ===================================================
// Gera mensagens de lembrança para alunos que ainda
// possuem atividades não realizadas (permite múltiplas seleções)

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
// Exibe todas as aulas em formato de grid com checkboxes
// Permite seleção múltipla (máximo 2 atividades)
function carregarAulas() {
  const moduloSelecionado = DOM.obter("modulo").value;
  const container = DOM.obter("aulas-container");

  // Limpa container anterior
  container.innerHTML = "";
  aulasAtuais = [];

  // Se nenhum módulo foi selecionado, mostra mensagem
  if (!moduloSelecionado) {
    container.innerHTML =
      '<p style="grid-column: 1 / -1; text-align: center; color: #888; margin: 20px;">Escolha um módulo acima!</p>';
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
  // Cada aula é exibida como um item clicável com checkbox
  aulasAtuais.forEach((aula, index) => {
    const aulaDiv = document.createElement("div");
    aulaDiv.className = "aula-item";

    // Cria checkbox para permitir múltiplas seleções
    const input = document.createElement("input");
    input.type = "checkbox"; // Alterado para checkbox (permite múltiplas seleções)
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
    // Permite clicar em qualquer parte do item para selecionar/desselecionar
    // Implementa limite de 2 seleções simultâneas
    aulaDiv.addEventListener("click", function () {
      // Conta quantos checkboxes estão marcados
      const checkboxesMarcados = document.querySelectorAll(
        'input[name="aulaSelecionada"]:checked'
      ).length;

      // Se o checkbox atual não estiver marcado e já houver 2 marcados, impede a seleção
      if (!input.checked && checkboxesMarcados >= 2) {
        Utils.mostrarNotificacao(
          "Você pode selecionar no máximo 2 atividades.",
          "warning"
        );
        return;
      }

      input.checked = !input.checked; // Alterna estado do checkbox
      aulaDiv.classList.toggle("selected", input.checked); // Adiciona/remove seleção visual
    });

    // Manter seleção visual se o checkbox estiver inicialmente marcado
    input.addEventListener("change", function () {
      aulaDiv.classList.toggle("selected", this.checked);
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

// ===== Gerar Mensagem de Atividades Pendentes =====
// Cria a mensagem com base nas aulas selecionadas (múltiplas)
function gerarMensagem() {
  // Obtém todas as aulas selecionadas (via checkboxes)
  const selecionadas = document.querySelectorAll(
    'input[name="aulaSelecionada"]:checked'
  ); // Alterado para querySelectorAll
  const mensagemDiv = DOM.obter("mensagem");
  const botoesDiv = DOM.obter("botoes");
  const moduloSelect = DOM.obter("modulo");

  // Valida se alguma aula foi selecionada
  if (selecionadas.length === 0) {
    // Alterado para verificar o comprimento
    DOM.definirConteudo("mensagem", "Por favor, selecione ao menos uma aula.");
    DOM.mostrar("botoes", false);
    Utils.mostrarNotificacao(
      "Por favor, selecione ao menos uma aula.",
      "warning"
    );
    return;
  }

  // Obtém nome do módulo
  const moduloNome = moduloSelect.selectedOptions[0].textContent;

  // ===== Construir Mensagem =====
  let mensagem = "Poxa você ainda está com pendência nas atividades! 😔 \n";
  mensagem += "Vamos colocar tudo em dias?! 🤩\n\n";
  mensagem += `Módulo de *${moduloNome}*\n`;
  mensagem +=
    "Acesse o aplicativo *EAD IDEAR* para realizar as seguintes atividades:\n\n";

  // ===== Iterar sobre as aulas selecionadas =====
  // Adiciona informações de cada atividade pendente à mensagem
  selecionadas.forEach((selecionada) => {
    // Itera sobre as aulas selecionadas
    const aula = aulasAtuais[selecionada.value];
    // Verifica se há múltiplas atividades separadas por ";"
    const multiplasAtividades = aula.atividade.includes(";");

    mensagem += `📱 _*AULA ${String(aula.numero).padStart(2, "0")}:* ${
      aula.titulo
    }_\n`;
    
    // Se há múltiplas atividades, as formata separadamente
    if (multiplasAtividades) {
      const atividades = aula.atividade
        .split(";")
        .map((atividade, index) => {
          return `✏️ *ATIVIDADE ${String(aula.numero).padStart(
            2,
            "0"
          )} (PARTE ${index + 1}):* ${atividade.trim()}`;
        })
        .join("\n");
      mensagem += atividades + "\n\n";
    } else {
      // Caso contrário, mostra apenas uma atividade
      mensagem += `✏️ *ATIVIDADE ${String(aula.numero).padStart(2, "0")}:* ${
        aula.atividade
      }\n\n`;
    }
  });

  // Adiciona mensagem de encorajamento
  mensagem += "Acredito em você 💚";

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
