// ===================================================
// GERADOR DE MENSAGENS DE BOM DIA / SAUDAÇÃO
// ===================================================
// Responsável por gerar mensagens personalizadas de saudação
// para o início das aulas com suporte a diferentes módulos

// ===== Inicialização =====
// Executa quando o DOM está totalmente carregado
document.addEventListener("DOMContentLoaded", function () {
  // Obtém referência do select de módulo
  const moduloSelect = DOM.obter("modulo");
  // Ajuste aqui: aulaSelect não é mais um select fixo no HTML, mas será gerado dinamicamente.
  // Vamos carregar as aulas iniciais para garantir o estado correto ao carregar a página.
  if (moduloSelect) {
    // Adiciona listener para quando módulo mudar
    moduloSelect.addEventListener("change", carregarAulas);
    // Chama carregarAulas uma vez para configurar o campo de aula inicialmente
    carregarAulas();
  }
});

// ===== Carregar Aulas do Módulo Selecionado =====
// Dinamicamente cria inputs de aula baseado no módulo escolhido
// Para "Tecnologias Digitais" cria um select com opções específicas
// Para outros módulos cria um input fixo (somente leitura)
function carregarAulas() {
  const moduloSelecionado = DOM.obter("modulo").value;
  const aulaInputContainer = DOM.obter("aula-input-container"); // Novo contêiner
  aulaInputContainer.innerHTML = ""; // Limpa o conteúdo atual do contêiner

  let aulaElement; // Variável para armazenar o elemento de aula (select ou input)

  // Se nenhum módulo foi selecionado, cria um select desabilitado
  if (!moduloSelecionado) {
    aulaElement = document.createElement("select");
    aulaElement.id = "aula";
    aulaElement.disabled = true;
    aulaElement.innerHTML = '<option value="">-- Escolha uma aula --</option>';
    aulaInputContainer.appendChild(aulaElement);
    DOM.definirConteudo("mensagem", "");
    return;
  }

  // ===== Lógica Específica para "Ensino das Tecnologias Digitais" =====
  // Este módulo tem 3 tipos diferentes de aulas com mensagens personalizadas
  if (moduloSelecionado === "tecnologias") {
    aulaElement = document.createElement("select");
    aulaElement.id = "aula"; // O ID continua sendo 'aula'
    aulaElement.innerHTML = '<option value="">-- Escolha uma aula --</option>'; // Opção padrão para tecnologias
    aulaElement.disabled = false; // Habilita o select

    // Define as três opções de aula disponíveis
    const aulasTecnologias = [
      { value: "aula_01", text: "Aula 01" },
      { value: "aula_02_10", text: "Aula 02 a 10" },
      { value: "aula_11_adiante", text: "Aula 11 em diante" },
    ];

    // Popula o select com as opções
    aulasTecnologias.forEach((aula) => {
      const option = document.createElement("option");
      option.value = aula.value;
      option.textContent = aula.text;
      aulaElement.appendChild(option);
    });
  } else {
    // ===== Lógica para outros módulos (campo fixo/somente leitura) =====
    // Outros módulos não precisam de seleção de aula específica
    aulaElement = document.createElement("input");
    aulaElement.id = "aula"; // O ID continua sendo 'aula'
    aulaElement.type = "text";
    aulaElement.value = "Escolha o horário da aula"; // Texto fixo
    aulaElement.readOnly = true; // Torna o campo somente leitura
    // Opcional: adicionar uma classe para estilizar este campo fixo, se necessário
    aulaElement.classList.add("fixed-aula-input");
  }

  aulaInputContainer.appendChild(aulaElement); // Adiciona o elemento criado ao contêiner
  DOM.definirConteudo("mensagem", ""); // Limpa a mensagem ao carregar novas aulas
}

// ===== Gerar Mensagem =====
// Cria a mensagem de saudação com base nos valores selecionados
// Valida campos obrigatórios antes de gerar
function gerarMensagem() {
  // Obtém valores dos campos do formulário
  const modulo = DOM.obter("modulo").value;
  const aulaElement = DOM.obter("aula"); // Obter o elemento dinâmico (select ou input)
  const aulaSelecionada = aulaElement ? aulaElement.value : ""; // Obter o valor do elemento
  const data = DOM.obter("data").value;
  const hora = DOM.obter("hora").value;

  // ===== Validação de Campos =====
  let camposParaValidar = {
    Módulo: modulo,
    Data: data,
    Hora: hora,
  };

  // A aula só é obrigatória se o módulo for "Ensino das Tecnologias Digitais"
  if (modulo === "tecnologias") {
    // Para o módulo de tecnologias, precisamos que uma aula seja de fato selecionada
    if (
      aulaSelecionada === "-- Escolha uma aula --" ||
      aulaSelecionada === ""
    ) {
      camposParaValidar["Aula"] = ""; // Força a validação como vazia se a opção padrão for selecionada
    } else {
      camposParaValidar["Aula"] = aulaSelecionada;
    }
  }

  // Valida todos os campos
  const validacao = Utils.validarCampos(camposParaValidar);

  if (!validacao.valido) {
    DOM.definirConteudo(
      "mensagem",
      "Por favor, preencha todos os campos obrigatórios."
    );
    Utils.mostrarNotificacao(
      "Por favor, preencha todos os campos obrigatórios.",
      "warning"
    );
    return;
  }

  // Obtém nome e informações do módulo
  const moduloData = MODULOS_DATA[modulo];
  const moduloNome = moduloData.nome;
  // Formata a data com o dia da semana
  const diaSemana = Utils.obterDiaSemana(data);
  const dataFormatada = Utils.formatarData(data);

  let mensagem;

  // ===== Lógica de Mensagens para "Ensino das Tecnologias Digitais" =====
  // Cada tipo de aula tem uma mensagem específica
  if (modulo === "tecnologias") {
    if (aulaSelecionada === "aula_01") {
      // Mensagem especial para aula treino (primeira aula)
      mensagem = `Sejam bem vindos ao projeto Chá Tecnológico e Social! 👴🏼👵🏻\n\n`;
      mensagem += `Hoje teremos a *AULA TREINO*, o nosso primeiro encontro online! Fique atento ao horário da aula:\n\n`;
      mensagem += `🗓 ${diaSemana} - ${dataFormatada}\n`;
      mensagem += `⏰ Hora: ${hora}\n`;
      mensagem += `O link será enviado aqui no grupo!\n\n`;
      mensagem += `📝Para relembrar o passo a passo de *como entrar na aula*, abra a sua *APOSTILA* e acompanhe a partir da página *12*.`;
    } else if (aulaSelecionada === "aula_02_10") {
      // Mensagem para aulas 02 a 10 (inclui referência à apostila)
      mensagem = `🌤️ Bom dia turma, passando para informar que hoje temos mais uma aula de *${moduloNome}*!\n\n`;
      mensagem += `🗓 ${diaSemana} - ${dataFormatada}\n`;
      mensagem += `⏰ Hora: ${hora}\n`;
      mensagem += `\n📒 Para relembrar o *passo a passo de como entrar na aula*, abra a sua APOSTILA e acompanhe nas páginas 13 e 14.\n`;
      mensagem += `\nConto com a presença de todos 💚`;
    } else if (aulaSelecionada === "aula_11_adiante") {
      // Mensagem para aulas 11 em diante (simplificada)
      mensagem = `🌤️ Bom dia turma, passando para informar que hoje temos mais uma aula de *${moduloNome}*!\n\n`;
      mensagem += `🗓 ${diaSemana} - ${dataFormatada}\n`;
      mensagem += `⏰ Hora: ${hora}\n`;
      mensagem += `\nConto com a presença de todos 💚`;
    } else {
      mensagem =
        "Por favor, selecione uma aula válida para o módulo de Tecnologias Digitais.";
      Utils.mostrarNotificacao(mensagem, "warning");
      return;
    }
  } else {
    // ===== Mensagem Padrão para Outros Módulos =====
    mensagem = `🌤️ Bom dia turma, passando para informar que hoje temos mais uma aula de *${moduloNome}*!\n\n`;
    mensagem += `🗓 ${diaSemana} - ${dataFormatada}\n`;
    mensagem += `⏰ Hora: ${hora}\n`;
    mensagem += `\nConto com a presença de todos 💚`;
  }

  // Exibe a mensagem gerada no elemento de mensagem
  DOM.definirConteudo("mensagem", mensagem);
  // Mostra notificação de sucesso
  Utils.mostrarNotificacao("Mensagem gerada com sucesso!", "success");
}

// ===== Copiar Mensagem =====
// Copia o conteúdo da mensagem para a área de transferência
async function copiarMensagem() {
  const texto = DOM.obter("mensagem").textContent;

  // Valida se há conteúdo para copiar
  if (!texto || texto.trim() === "") {
    Utils.mostrarNotificacao("Não há mensagem para copiar!", "warning");
    return;
  }

  // Usa a classe Clipboard para copiar o texto
  await Clipboard.copiar(texto);
}

// ===== Limpar Campos =====
// Reseta todos os campos do formulário para seus estados iniciais
function limparCampos() {
  // Limpa seleção de módulo
  DOM.obter("modulo").value = "";
  // Reimpõe o contêiner de aula ao estado inicial (select desabilitado)
  const aulaInputContainer = DOM.obter("aula-input-container");
  aulaInputContainer.innerHTML = `
    <select id="aula" disabled>
      <option value="">-- Escolha uma aula --</option>
    </select>
  `; // Reinicia o contêiner para o select desabilitado padrão
  // Define data atual
  DOM.obter("data").value = Utils.obterDataAtual();
  // Limpa hora
  DOM.obter("hora").value = "";
  // Limpa mensagem gerada
  DOM.definirConteudo("mensagem", "");

  // Mostra notificação de conclusão
  Utils.mostrarNotificacao("Campos limpos!", "info");
}
