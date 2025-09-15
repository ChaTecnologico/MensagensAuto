// JavaScript para Atividades Pendentes

let aulasAtuais = [];

// Inicialização
document.addEventListener("DOMContentLoaded", function () {
  const moduloSelect = DOM.obter("modulo");

  if (moduloSelect) {
    moduloSelect.addEventListener("change", carregarAulas);
  }
});

// Carregar aulas do módulo selecionado
function carregarAulas() {
  const moduloSelecionado = DOM.obter("modulo").value;
  const container = DOM.obter("aulas-container");

  // Limpar container
  container.innerHTML = "";
  aulasAtuais = [];

  if (!moduloSelecionado) {
    container.innerHTML =
      '<p style="grid-column: 1 / -1; text-align: center; color: #888; margin: 20px;">Escolha um módulo acima!</p>';
    return;
  }

  // Obter dados do módulo
  const moduloData = MODULOS_DATA[moduloSelecionado];
  if (!moduloData) {
    container.innerHTML =
      '<p style="grid-column: 1 / -1; text-align: center; color: #f44336; margin: 20px;">Módulo não encontrado!</p>';
    return;
  }

  aulasAtuais = moduloData.aulas;

  // Criar elementos para cada aula
  aulasAtuais.forEach((aula, index) => {
    const aulaDiv = document.createElement("div");
    aulaDiv.className = "aula-item";

    const input = document.createElement("input");
    input.type = "checkbox"; // Alterado para checkbox
    input.name = "aulaSelecionada";
    input.id = `aula${index}`;
    input.value = index;

    const label = document.createElement("label");
    label.htmlFor = `aula${index}`;
    label.textContent = `AULA ${String(aula.numero).padStart(2, "0")} - ${
      aula.titulo
    }`;

    // Adicionar evento de clique no div inteiro
    aulaDiv.addEventListener("click", function () {
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

      input.checked = !input.checked; // Alternar estado do checkbox
      aulaDiv.classList.toggle("selected", input.checked); // Adicionar/remover seleção visual
    });

    // Manter seleção visual se o checkbox estiver inicialmente marcado (útil em alguns cenários)
    input.addEventListener("change", function () {
      aulaDiv.classList.toggle("selected", this.checked);
    });

    aulaDiv.appendChild(input);
    aulaDiv.appendChild(label);
    container.appendChild(aulaDiv);
  });

  // Limpar mensagem anterior
  DOM.definirConteudo("mensagem", "");
  DOM.mostrar("botoes", false);
}

// Gerar mensagem
function gerarMensagem() {
  const selecionadas = document.querySelectorAll(
    'input[name="aulaSelecionada"]:checked'
  ); // Alterado para querySelectorAll
  const mensagemDiv = DOM.obter("mensagem");
  const botoesDiv = DOM.obter("botoes");
  const moduloSelect = DOM.obter("modulo");

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

  const moduloNome = moduloSelect.selectedOptions[0].textContent;

  // Construir mensagem
  let mensagem = "Poxa você ainda está com pendência nas atividades! 😔 \n";
  mensagem += "Vamos colocar tudo em dias?! 🤩\n\n";
  mensagem += `Módulo de *${moduloNome}*\n`;
  mensagem +=
    "Acesse o aplicativo *EAD IDEAR* para realizar as seguintes atividades:\n\n";

  selecionadas.forEach((selecionada) => {
    // Iterar sobre as aulas selecionadas
    const aula = aulasAtuais[selecionada.value];
    const multiplasAtividades = aula.atividade.includes(";");

    mensagem += `📱 _*AULA ${String(aula.numero).padStart(2, "0")}:* ${
      aula.titulo
    }_\n`;
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
      mensagem += `✏️ *ATIVIDADE ${String(aula.numero).padStart(2, "0")}:* ${
        aula.atividade
      }\n\n`;
    }
  });

  mensagem += "Acredito em você 💚";

  DOM.definirConteudo("mensagem", mensagem);
  DOM.mostrar("botoes", true);

  Utils.mostrarNotificacao("Mensagem gerada com sucesso!", "success");
}

// Copiar mensagem
async function copiarMensagem() {
  const texto = DOM.obter("mensagem").textContent;

  if (!texto || texto.trim() === "") {
    Utils.mostrarNotificacao("Não há mensagem para copiar!", "warning");
    return;
  }

  await Clipboard.copiar(texto);
}

// Limpar mensagem
function limparMensagem() {
  DOM.obter("modulo").value = "";
  DOM.definirHTML(
    "aulas-container",
    `
    <p style="grid-column: 1 / -1; text-align: center; color: #888; margin: 20px;">
      Escolha um módulo acima!
    </p>
  `
  );
  DOM.definirConteudo("mensagem", "");
  Utils.mostrarNotificacao("Mensagem limpa com sucesso!", "info");
}
