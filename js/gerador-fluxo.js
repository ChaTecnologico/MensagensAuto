/**
 * LÓGICA FINAL ATUALIZADA - GERADOR DE MENSAGENS 2026
 * Correção de Siglas: CD -> DC (Desenvolvimento Cognitivo)
 * Estrutura: CODIGO TURMA - DATA - AULA
 */

const CONFIG_SISTEMA = {
    anoRef: "25", // Ano de referência para o código da turma (ex: 2025 -> "25") - trocar para "26" na virada do projeto
    siglas: {
        "bordado": "BOR",
        "coral": "CAN",
        "croche": "CRO",
        "culinaria": "CUL",
        "cultivoPlantas": "PLA",
        "danca": "DAN",
        "desenhoPintura": "DES",
        "desenvolvimentoCognitivo": "DCN",       // Alterado de CDN para DCN
        "desenvolvimentoCognitivoAvancado": "DCV", // Alterado de CDV para DCV
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
 * Exibe notificações visuais (Popup) utilizando o styles.css
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

function proximoPasso(n) {
    const passos = ['passo1', 'passo2', 'passo3', 'passo4'];
    const el = document.getElementById(passos[n - 1]);
    if (el) el.classList.add('passo-ativo');
}

function carregarTurmasEAulas() {
    const moduloChave = document.getElementById('modulo').value;
    const tipoVersao = document.getElementById('tipoTurma').value;
    
    if (!moduloChave || !tipoVersao) return;

    // 1. Popular Select de Turmas
    const selectTurma = document.getElementById('turmaSel');
    selectTurma.innerHTML = '<option value="">-- Selecione --</option>';
    
    const chaveBusca = moduloChave.toLowerCase();
    const eEspecial = chaveBusca.includes("tecnologia") || chaveBusca.includes("cognitivo");
    const limite = eEspecial ? 40 : 10;

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

function gerarMensagemFormatada() {
    const versao = document.getElementById('tipoTurma').value; 
    const moduloChave = document.getElementById('modulo').value;
    const numTurma = document.getElementById('turmaSel').value;
    const aulaRaw = document.getElementById('aulaSel').value;

    if (!versao || !moduloChave || !numTurma || !aulaRaw) {
        avisar("Por favor, preencha todos os campos antes de gerar!", "warning");
        return;
    }

    // 1. Montar Código da Turma (Ex: CIDCN26.01)
    const sigla = CONFIG_SISTEMA.siglas[moduloChave] || "ERRO";
    const prefixo = versao === 'municipal' ? 'CM' : 'CI';
    const codigoTurma = `${prefixo}${sigla}${CONFIG_SISTEMA.anoRef}.${numTurma}`;
    
    // 2. Obter Data (AAAAMMDD)
    const hoje = new Date();
    const dataStr = `${hoje.getFullYear()}${String(hoje.getMonth() + 1).padStart(2, '0')}${String(hoje.getDate()).padStart(2, '0')}`;

    // 3. Extrair Aula
    const [nAula, tAula] = aulaRaw.split('|');
    const aulaFormatada = `Aula ${nAula}: ${tAula}`;

    // Resultado: TURMA - DATA - AULA
    const resultado = `${codigoTurma} - ${dataStr} - ${aulaFormatada}`;
    
    document.getElementById('mensagem').value = resultado;
    avisar("Mensagem gerada com sucesso!", "success");
}

function limparTudo() {
    avisar("Campos limpos!", "info");
    setTimeout(() => location.reload(), 500);
}

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

window.onload = function() {
    const selectMod = document.getElementById('modulo');
    if (selectMod && typeof MODULOS_DATA !== 'undefined') {
        selectMod.innerHTML = '<option value=\"\">-- Escolha um módulo --</option>';
        Object.keys(MODULOS_DATA).forEach(key => {
            const opt = document.createElement('option');
            opt.value = key;
            opt.textContent = MODULOS_DATA[key].nome;
            selectMod.appendChild(opt);
        });
    }
};