// JavaScript para Atividades de Casa

let aulasAtuais = [];

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
  const moduloSelect = DOM.obter('modulo');
  
  if (moduloSelect) {
    moduloSelect.addEventListener('change', carregarAulas);
  }
});

// Carregar aulas do módulo selecionado
function carregarAulas() {
  const moduloSelecionado = DOM.obter('modulo').value;
  const container = DOM.obter('aulas-container');
  
  // Limpar container
  container.innerHTML = '';
  aulasAtuais = [];

  if (!moduloSelecionado) {
    container.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: #888; margin: 20px;">Escolha um módulo acima!</p>';
    DOM.definirConteudo('mensagem', '');
    DOM.mostrar('botoes', false);
    return;
  }

  // Obter dados do módulo
  const moduloData = MODULOS_DATA[moduloSelecionado];
  if (!moduloData) {
    container.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: #f44336; margin: 20px;">Módulo não encontrado!</p>';
    return;
  }

  aulasAtuais = moduloData.aulas;

  // Criar elementos para cada aula
  aulasAtuais.forEach((aula, index) => {
    const aulaDiv = document.createElement('div');
    aulaDiv.className = 'aula-item';

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'aulaSelecionada';
    input.id = `aula${index}`;
    input.value = index;

    const label = document.createElement('label');
    label.htmlFor = `aula${index}`;
    label.textContent = `AULA ${String(aula.numero).padStart(2, '0')} - ${aula.titulo}`;

    // Adicionar evento de clique no div inteiro
    aulaDiv.addEventListener('click', function() {
      input.checked = true;
      // Remover seleção visual de outros itens
      document.querySelectorAll('.aula-item').forEach(item => {
        item.classList.remove('selected');
      });
      // Adicionar seleção visual ao item atual
      aulaDiv.classList.add('selected');
    });

    aulaDiv.appendChild(input);
    aulaDiv.appendChild(label);
    container.appendChild(aulaDiv);
  });

  // Limpar mensagem anterior
  DOM.definirConteudo('mensagem', '');
  DOM.mostrar('botoes', false);
}

// Gerar mensagem
function gerarMensagem() {
  const selecionada = document.querySelector('input[name="aulaSelecionada"]:checked');
  const mensagemDiv = DOM.obter('mensagem');
  const botoesDiv = DOM.obter('botoes');
  const moduloSelect = DOM.obter('modulo');

  if (!selecionada) {
    DOM.definirConteudo('mensagem', 'Por favor, selecione uma aula.');
    DOM.mostrar('botoes', false);
    Utils.mostrarNotificacao('Por favor, selecione uma aula.', 'warning');
    return;
  }

  const moduloNome = moduloSelect.selectedOptions[0].textContent;
  const aula = aulasAtuais[selecionada.value];

  // Construir mensagem
  let mensagem = '*ATIVIDADE DE CASA* 🏡📝\n\n';
  mensagem += `*${moduloNome}*\n`;
  mensagem += 'Acesse o Ambiente Virtual de Aprendizagem e realize a atividade de hoje!\n\n';
  mensagem += `📱 _*AULA ${String(aula.numero).padStart(2, '0')}:* ${aula.titulo}_\n`;
  mensagem += `✏️ *ATIVIDADE ${String(aula.numero).padStart(2, '0')}:* ${aula.atividade}\n\n`;

  DOM.definirConteudo('mensagem', mensagem);
  DOM.mostrar('botoes', true);
  
  Utils.mostrarNotificacao('Mensagem gerada com sucesso!', 'success');
}

// Copiar mensagem
async function copiarMensagem() {
  const texto = DOM.obter('mensagem').textContent;
  
  if (!texto || texto.trim() === '') {
    Utils.mostrarNotificacao('Não há mensagem para copiar!', 'warning');
    return;
  }
  
  await Clipboard.copiar(texto);
}

// Limpar mensagem
function limparMensagem() {
  DOM.obter('modulo').value = '';
  DOM.definirHTML('aulas-container', `
    <p style="grid-column: 1 / -1; text-align: center; color: #888; margin: 20px;">
      Escolha um módulo acima!
    </p>
  `);
  DOM.definirConteudo('mensagem', '');
  Utils.mostrarNotificacao('Mensagem limpa com sucesso!', 'info');
}


