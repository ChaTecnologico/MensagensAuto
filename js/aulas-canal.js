// ===== Configuração do Sistema =====
// Define constantes e configurações globais para o gerador de fluxo
const CONFIG_SISTEMA = {
    anoRef: "25", // Ano de referência para código de turma (ex: 2025 -> "25") - trocar para "26" na virada
    siglas: {
        // Mapeia chave de módulo para sigla de 3 letras para código de turma
        "bordado": "BOR",
        "coral": "CAN",
        "croche": "CRO",
        "culinaria": "CUL",
        "cultivoPlantas": "PLA",
        "danca": "DAN",
        "desenhoPintura": "DES",
        "desenvolvimentoCognitivo": "DCN",
        "desenvolvimentoCognitivoAvancado": "DCV",
        "educacaoFinanceira": "FIN",
        "fotografia": "FOT",
        "ginastica": "GIN",
        "ginasticaAvancado": "GINV",
        "nutricao": "NUT",
        "redesSociais": "RED",
        "tecnologias": "TECN",
        "tecnologiasAvancado": "TECV",
        "turismoDigital": "TUR"
    }
};

/**
 * Exibe notificações visuais (Popup) utilizando os estilos CSS
 * @param {string} mensagem - Texto da notificação
 * @param {string} tipo - Tipo de notificação: "info", "warning", "error", "success"
 */
function avisar(mensagem, tipo = "info") {
    // Força o laranja (warning) para erros e avisos
    const tomAlerta = tipo === "error" ? "warning" : tipo;
    if (typeof Utils !== 'undefined' && Utils.mostrarNotificacao) {
        Utils.mostrarNotificacao(mensagem, tomAlerta);
    } else {
        alert(mensagem);
    }
}

/**
 * Marca um passo como ativo no fluxo visual
 * @param {number} n - Número do passo (1, 2, 3, 4)
 */
function proximoPasso(n) {
    const passos = ['passo1', 'passo2', 'passo3', 'passo4'];
    const el = document.getElementById(passos[n - 1]);
    if (el) el.classList.add('passo-ativo');
}

/**
 * ===== Carrega Turmas e Aulas =====
 * Popula os selects de turma e aula baseado no módulo selecionado
 * Limita número de turmas (40 para módulos especiais, 10 para outros)
 */
function carregarTurmasEAulas() {
    const moduloChave = document.getElementById('modulo').value;
    const tipoVersao = document.getElementById('tipoTurma').value;
    
    if (!moduloChave || !tipoVersao) return;

    // 1. Popular Select de Turmas
    const selectTurma = document.getElementById('turmaSel');
    selectTurma.innerHTML = '<option value="">-- Selecione --</option>';
    
    const chaveBusca = moduloChave.toLowerCase();
    // Verifica se é um módulo especial (tecnologia ou cognitivo)
    const eEspecial = chaveBusca.includes("tecnologia") || chaveBusca.includes("cognitivo");
    const limite = eEspecial ? 40 : 10;

    // Cria opções de turma numeradas
    for (let i = 1; i <= limite; i++) {
        const num = String(i).padStart(2, '0');
        const opt = document.createElement('option');
        opt.value = num;
        opt.textContent = `Turma ${num}`;
        selectTurma.appendChild(opt);
    }

    // 2. Popular Select de Aulas
    const selectAula = document.getElementById('aulaSel');
    selectAula.innerHTML = '<option value="">-- Selecione --</option>';
    
    // Obtém dados do módulo e popula com suas aulas
    const dadosModulo = MODULOS_DATA[moduloChave];
    if (dadosModulo && dadosModulo.aulas) {
        dadosModulo.aulas.forEach(a => {
            const numA = String(a.numero).padStart(2, '0');
            const tituloA = (a.titulo || "Aula Prática").replace(/\n/g, ' ');
            const opt = document.createElement('option');
            opt.value = `${numA}|${tituloA}`;
            opt.textContent = `Aula ${numA}: ${tituloA}`;
            selectAula.appendChild(opt);
        });
    }
    proximoPasso(3);
}

/**
 * ===== Gerar Mensagem Formatada =====
 * Cria código de turma e formata como: CIDCN26.01 - YYYYMMDD - Aula NN: Título
 * Formato: [Prefixo][Sigla][AnoRef].[Turma] - [Data] - [Aula Formatada]
 */
function gerarMensagemFormatada() {
    const versao = document.getElementById('tipoTurma').value; 
    const moduloChave = document.getElementById('modulo').value;
    const numTurma = document.getElementById('turmaSel').value;
    const aulaRaw = document.getElementById('aulaSel').value;

    // Valida se todos os campos foram preenchidos
    if (!versao || !moduloChave || !numTurma || !aulaRaw) {
        avisar("Por favor, preencha todos os campos antes de gerar!", "warning");
        return;
    }

    // 1. Montar Código da Turma (Ex: CIDCN26.01)
    // Prefixo: CI (Instituto) ou CM (Municipal)
    // Sigla: obtém do objeto CONFIG_SISTEMA.siglas
    // AnoRef: "25" ou "26" conforme configurado
    const sigla = CONFIG_SISTEMA.siglas[moduloChave] || "ERRO";
    const prefixo = versao === 'municipal' ? 'CM' : 'CI';
    const codigoTurma = `${prefixo}${sigla}${CONFIG_SISTEMA.anoRef}.${numTurma}`;
    
    // 2. Obter Data Atual (AAAAMMDD)
    const hoje = new Date();
    const dataStr = `${hoje.getFullYear()}${String(hoje.getMonth() + 1).padStart(2, '0')}${String(hoje.getDate()).padStart(2, '0')}`;

    // 3. Extrair Número e Título da Aula
    const [nAula, tAula] = aulaRaw.split('|');
    const aulaFormatada = `Aula ${nAula}: ${tAula}`;

    // Resultado: TURMA - DATA - AULA
    const resultado = `${codigoTurma} - ${dataStr} - ${aulaFormatada}`;
    
    document.getElementById('mensagem').value = resultado;
    avisar("Mensagem gerada com sucesso!", "success");
}

/**
 * Limpa todos os campos e recarrega a página
 */
function limparTudo() {
    avisar("Campos limpos!", "info");
    setTimeout(() => location.reload(), 500);
}

/**
 * Copia o conteúdo da mensagem para a área de transferência
 */
function copiarMensagem() {
    const area = document.getElementById('mensagem');
    if (!area.value) {
        avisar("Não há nada para copiar!", "warning");
        return;
    }
    area.select();
    try {
        document.execCommand('copy');
        avisar("Copiado com sucesso!", "success");
    } catch (err) {
        avisar("Erro ao copiar.", "warning");
    }
}

/**
 * Inicialização ao carregar a página
 * Popula o select de módulos com os dados disponíveis
 */
window.onload = function() {
    const selectMod = document.getElementById('modulo');
    if (selectMod && typeof MODULOS_DATA !== 'undefined') {
        selectMod.innerHTML = '<option value=\"\">-- Escolha um módulo --</option>';
        // Itera sobre todos os módulos disponíveis em MODULOS_DATA
        Object.keys(MODULOS_DATA).forEach(key => {
            const opt = document.createElement('option');
            opt.value = key;
            opt.textContent = MODULOS_DATA[key].nome;
            selectMod.appendChild(opt);
        });
    }
};