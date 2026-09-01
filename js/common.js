// Dados e funções comuns para o gerador de mensagens

// Dados dos módulos e aulas
const MODULOS_DATA = {
  
  bordado: {
    nome: "Bordado",
    aulas: [
      { 
        numero: 1, 
        titulo: "Introdução ao Bordado", 
        atividade: "" },
      {
        numero: 2,
        titulo: "Ponto Atrás\nPonto Corrente",
        atividade: "",
      },
      {
        numero: 3,
        titulo: "Ponto Aresta\nPonto Escama",
        atividade: "",
      },
      {
        numero: 4,
        titulo: "Ponto Margarida\nPonto Cadeado)",
        atividade: "Complete a receita",
      },
      {
        numero: 5,
        titulo: "Desenho com Referência\nDesenho Livre",
        atividade: "",
      },
      {
        numero: 6,
        titulo: "",
        atividade: "",
      },
      {
        numero: 7,
        titulo: "Finalizando o Bordado",
        atividade: "",
      },
      {
        numero: 8,
        titulo: "Apresentação dos Projetos",
        atividade: "",
      },
    ],
    turmas: [
      {
        tipo: "itinerante",
        numero: "02",
        data: "31 de Março de 2026",
        horario: "15:30",
        dia: "TERÇA-FEIRA",
      },],
  },
  coral: {
    nome: "Coral",
    aulas: [],
    turmas: [
      {
        tipo: "itinerante",
        numero: "01",
        data: "02 de Fevereiro de 2026",
        horario: "13:30",
        dia: "TERÇA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "02",
        data: "07 de Abril de 2026",
        horario: "15:30",
        dia: "TERÇA-FEIRA",
      },],
  },
  croche: {
    nome: "Crochê",
    aulas: [
      { 
        numero: 1, 
        titulo: "Apresentação", 
        atividade: "" 
      },
      { 
        numero: 2, 
        titulo: "Pontos Básicos", 
        atividade: "" 
      },
      { 
        numero: 3, 
        titulo: "Brinco Flor", 
        atividade: "" 
      },
      { 
        numero: 4, 
        titulo: "Phone Strap", 
        atividade: "" 
      },
      { 
        numero: 5, 
        titulo: "Porta celular", 
        atividade: "" 
      },
      { 
        numero: 6, 
        titulo: "Porta garrafa de água", 
        atividade: "" 
      },
      { 
        numero: 7, 
        titulo: "Porta pano de prato", 
        atividade: "" 
      },
      { 
        numero: 8, 
        titulo: "Chaveiro de rosa", 
        atividade: "" 
      },
    ],
    turmas: [
      {
        tipo: "municipal",
        numero: "04",
        data: "18 de Setembro de 2025",
        horario: "10:30",
        dia: "QUINTA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "01",
        data: "06 de Novembro de 2025",
        horario: "08:30",
        dia: "QUINTA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "04",
        data: "02 de Fevereiro de 2026",
        horario: "08:30",
        dia: "TERÇA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "05",
        data: "17 de Março de 2026",
        horario: "10:30",
        dia: "TERÇA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "06",
        data: "02 de Abril de 2026",
        horario: "08:30",
        dia: "QUINTA-FEIRA",
      },
    ],
  },
  culinaria: {
    nome: "Culinária",
    aulas: [
      { 
        numero: 1, 
        titulo: "Apresentação", 
        atividade: "Sem Atividade" },
      {
        numero: 2,
        titulo: "Uso dos temperos naturais",
        atividade: "Desvendando os temperos",
      },
      {
        numero: 3,
        titulo: "Evitando temperos industrializados",
        atividade: "Jogo de associação - Utensílios da cozinha",
      },
      {
        numero: 4,
        titulo: "Conservação de legumes e verduras (frescos e congelados)",
        atividade: "Complete a receita",
      },
      {
        numero: 5,
        titulo: "Técnica de selagem",
        atividade: "Selando a carne corretamente",
      },
      {
        numero: 6,
        titulo: "Alimentos que fortalecem: conhecendo as proteínas",
        atividade: "Encontre os ingrediente",
      },
      {
        numero: 7,
        titulo: "Uso correto de medidores",
        atividade: "Descubra o ingrediente misterioso",
      },
      {
        numero: 8,
        titulo: "Sobremesas: substituições inteligentes",
        atividade: "Preparando a mousse de maracujá",
      },
    ],
    turmas: [
      {
        tipo: "itinerante",
        numero: "01",
        data: "06 de Novembro de 2025",
        horario: "10:30",
        dia: "QUINTA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "03",
        data: "11 de Dezembro de 2025",
        horario: "15:30",
        dia: "QUINTA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "05",
        data: "02 de Fevereiro de 2026",
        horario: "15:30",
        dia: "TERÇA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "06",
        data: "02 de Abril de 2026",
        horario: "08:30",
        dia: "QUINTA-FEIRA",
      },],
  },
  cultivoPlantas: {
    nome: "Cultivo de Plantas",
    aulas: [
      {
        numero: 1,
        titulo: "Apresentação",
        atividade: "Compartilhando nossas experiências com plantas",
      },
      { 
        numero: 2, 
        titulo: "Tipos de Plantas", 
        atividade: "Tipos de plantas" },
      {
        numero: 3,
        titulo: "Escolhendo a planta certa",
        atividade: "Escolhendo a planta certa",
      },
      {
        numero: 4,
        titulo: "Preparando solos e vasos",
        atividade: "Como preparar solos e vasos",
      },
      {
        numero: 5,
        titulo: "Adubação e nutrientes essenciais",
        atividade: "Nutrientes essenciais para as plantas",
      },
      {
        numero: 6,
        titulo: "Controle de pragas e doenças",
        atividade: "Pragas e doenças nas plantas",
      },
      {
        numero: 7,
        titulo: "Podas e Multiplicação de Plantas",
        atividade: "Podas e multiplicação de plantas",
      },
      {
        numero: 8,
        titulo: "Cultivo Sustentável",
        atividade: "Cultivo sustentável",
      },
    ],
    turmas: [
      {
        tipo: "municipal",
        numero: "06",
        data: "20 de Agosto de 2025",
        horario: "08:30",
        dia: "QUARTA-FEIRA",
      },
      {
        tipo: "municipal",
        numero: "07",
        data: "18 de Setembro de 2025",
        horario: "10:30",
        dia: "QUINTA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "01",
        data: "06 de Novembro de 2025",
        horario: "13:30",
        dia: "QUINTA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "04",
        data: "02 de Fevereiro de 2026",
        horario: "10:30",
        dia: "TERÇA-FEIRA",
      },{
        tipo: "itinerante",
        numero: "05",
        data: "17 de Março de 2026",
        horario: "13:30",
        dia: "TERÇA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "06",
        data: "02 de Abril de 2026",
        horario: "13:30",
        dia: "QUINTA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "07",
        data: "31 de Março de 2026",
        horario: "08:30",
        dia: "TERÇA-FEIRA",
      },
    ],
  },
  danca: {
    nome: "Dança",
    aulas: [
      {
        numero: 1,
        titulo: "Apresentação",
        atividade:
          "Apresentar o curso, e como vão funcionar o formato das aulas, horários, combinados. Fazer a apresentação da instrutora e da turma.",
      },
      { 
        numero: 2, 
        titulo: "Domínio sobre o corpo", 
        atividade: "Conhecimento sobre o corpo" 
      },
      { 
        numero: 3, 
        titulo: "Autoestima e dança", 
        atividade: "Dançar e recuperar a autoestima" 
      },
      { 
        numero: 4, 
        titulo: "Agilidade e equilíbrio", 
        atividade: "Verdadeiro ou Falso sobre seu corpo" 
      },
      { 
        numero: 5, 
        titulo: "Geração Jovem Guarda", 
        atividade: "Movimento cultural da Jovem Guarda" 
      },
      { 
        numero: 6, 
        titulo: "Ritmos Nordestinos", 
        atividade: "Quebra Cabeça - Cultura Nordestina" 
      },
      { 
        numero: 7, 
        titulo: "Puxa o fole sanfoneiro", 
        atividade: "Puxa o fole sanfoneiro" 
      },
      { 
        numero: 8, 
        titulo: "Consciência corporal", 
        atividade: "Construindo a Consciência Corporal" 
      },
    ],
    turmas: [
      {
        tipo: "municipal",
        numero: "01",
        data: "20 de Agosto de 2025",
        horario: "10:30",
        dia: "QUARTA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "02",
        data: "02 de Abril de 2026",
        horario: "13:30",
        dia: "QUINTA-FEIRA",
      },
    ],
  },
  desenhoPintura: {
    nome: "Desenho e Pintura",
    aulas: [
      { 
        numero: 1, 
        titulo: "Apresentação", 
        atividade: "Sem atividade" },
      {
        numero: 2,
        titulo: "Formas Geométricas",
        atividade: "Formas Geométricas",
      },
      {
        numero: 3,
        titulo: "Desenhando Rostos",
        atividade: "Encontrando rostos",
      },
      { 
        numero: 4, 
        titulo: "Paisagem", 
        atividade: "Treinando o olhar" },
      {
        numero: 5,
        titulo: "Iniciação à Pintura",
        atividade: "Arte para a vida",
      },
      { 
        numero: 6, 
        titulo: "Pintura em Tela", 
        atividade: "Cores e Formas" },
      { 
        numero: 7, 
        titulo: "Pintura em Telha", 
        atividade: "Jogo da memória" },
      {
        numero: 8,
        titulo: "Pintura com Café",
        atividade: "Encontre a imagem diferente",
      },
    ],
    turmas: [
      {
        tipo: "municipal",
        numero: "06",
        data: "20 de Agosto de 2025",
        horario: "13:30",
        dia: "QUARTA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "01",
        data: "06 de Novembro de 2025",
        horario: "13:30",
        dia: "QUINTA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "03",
        data: "11 de Dezembro de 2025",
        horario: "08:30",
        dia: "QUINTA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "05",
        data: "02 de Fevereiro de 2026",
        horario: "10:30",
        dia: "TERÇA-FEIRA",
      },{
        tipo: "itinerante",
        numero: "06",
        data: "17 de Março de 2026",
        horario: "08:30",
        dia: "TERÇA-FEIRA",
      },
    ],
  },
  desenvolvimentoCognitivo: {
    nome: "Desenvolvimento Cognitivo",
    aulas: [
      { 
        numero: 1, 
        titulo: "Apresentação", 
        atividade: "---"
      },
      {
        numero: 2,
        titulo: "Mantendo a Mente Ativa",
        atividade: "---"
      },
      {
        numero: 3,
        titulo: "Foco e concentração",
        atividade: "---"
      },
      {
        numero: 4,
        titulo: "Vamos recordar",
        atividade: "---"
      },
      {
        numero: 5,
        titulo: "Memórias Afetivas",
        atividade: "---"
      },
      {
        numero: 6,
        titulo: "Sensação e Percepção",
        atividade: "---"
      },
      {
        numero: 7,
        titulo: "Além das Palavras",
        atividade: "---"
      },
      { 
        numero: 8, 
        titulo: "Sentir faz parte da Vida", 
        atividade: "---"
      },
      { 
        numero: 9, 
        titulo: "Consciência Espacial", 
        atividade: "---"
      },
      { 
        numero: 10, 
        titulo: "Raciocínio Lógico", 
        atividade: "---"
      },
      {
        numero: 11,
        titulo: "Exercitando o raciocínio",
        atividade: "---"
      },
      {
        numero: 12,
        titulo: "Criatividade",
        atividade: "---"
      },
    ],
  },
  desenvolvimentoCognitivoAvancado: {
    nome: "Desenvolvimento Cognitivo - Avançado",
    aulas: [
      {
        numero: 1,
        titulo: "Apresentação + Mantendo a Mente Ativa",
        atividade: "O que é o que é?",
      },
      { 
        numero: 2, 
        titulo: "De Olho nos Detalhes", 
        atividade: "Vamos viajar!" },
      {
        numero: 3,
        titulo: "Desafios da Mente",
        atividade: "Desafiando a mente",
      },
      {
        numero: 4,
        titulo: "Detetives dos Detalhes",
        atividade: "Descobrindo os detalhes",
      },
      {
        numero: 5,
        titulo: "Fazendo as Contas",
        atividade: "Almoço de domingo",
      },
      {
        numero: 6,
        titulo: "Na ponta da língua",
        atividade: "Na ponta da lingua",
      },
      {
        numero: 7,
        titulo: "Recordar é Viver",
        atividade: "Memorizando",
      },
      {
        numero: 8,
        titulo: "Palavras em Movimento",
        atividade: "Shiritori",
      },
      {
        numero: 9,
        titulo: "Tudo no seu lugar",
        atividade: "Cores e Formas",
      },
      {
        numero: 10,
        titulo: "Mente Investigadora",
        atividade: "Investigando as formas",
      },
      {
        numero: 11,
        titulo: "Fábrica de Artes",
        atividade: "Transformando com o Trangram",
      },
      {
        numero: 12,
        titulo: "Pesquisa de Satisfação",
        atividade: "---",
      },
    ],
  },
  educacaoFinanceira: {
    nome: "Educação Financeira",
    aulas: [
      { 
        numero: 1, 
        titulo: "Apresentação", 
        atividade: "Sem Atividade" },
      {
        numero: 2,
        titulo: "O que é educação financeira?",
        atividade: "Verdadeiro ou falso - educação financeira",
      },
      {
        numero: 3,
        titulo: "Poder de Compra e Hábitos de Consumo",
        atividade: "Atividade por associação; Lista de Compras",
      },
      {
        numero: 4,
        titulo: "Uso do cartão de crédito",
        atividade: "Perguntas sobre cartão de crédito",
      },
      {
        numero: 5,
        titulo: "Inflação e Compras",
        atividade: "Inflação e compras",
      },
      {
        numero: 6,
        titulo: "Matemática e Finanças Pessoais",
        atividade: "Calculando valor com desconto; Calculando juros",
      },
      {
        numero: 7,
        titulo: "Como diminuir as dívidas",
        atividade: "Perguntas - Como diminuir dívidas",
      },
      {
        numero: 8,
        titulo: "Aprendendo a poupar",
        atividade: "Quiz - Aprendendo a poupar",
      },
    ],
    turmas: [
      {
        tipo: "municipal",
        numero: "04",
        data: "18 de Setembro de 2025",
        horario: "10:30",
        dia: "QUINTA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "01",
        data: "06 de Novembro de 2025",
        horario: "13:30",
        dia: "QUINTA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "03",
        data: "11 de Dezembro de 2025",
        horario: "10:30",
        dia: "QUINTA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "05",
        data: "02 de Fevereiro de 2026",
        horario: "10:30",
        dia: "TERÇA-FEIRA",
      },{
        tipo: "itinerante",
        numero: "06",
        data: "17 de Março de 2026",
        horario: "15:30",
        dia: "TERÇA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "08",
        data: "02 de Abril de 2026",
        horario: "13:30",
        dia: "QUINTA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "09",
        data: "31 de Março de 2026",
        horario: "13:30",
        dia: "TERÇA-FEIRA",
      },
    ],
  },
  fotografia: {
    nome: "Fotografia Digital",
    aulas: [
      { 
        numero: 1, 
        titulo: "Apresentação", 
        atividade: "Apresentação do curso" },
      {
        numero: 2,
        titulo: "Introdução à Fotografia",
        atividade:
          "Quiz - Introdução à Fotografia; Pática - Minha Primeira Foto! \n🤔 *O que fazer na prática:* Cada aluno vai escolher um objeto e tirar uma foto simples e compartilhar no meu individual, ao final do nosso módulo, iremos repetir essa foto, onde poderemos ter um parâmetro para analisar a evolução de cada um.",
      },
      {
        numero: 3,
        titulo: "Desenvolvendo o olhar fotográfico",
        atividade:
          "Desenvolvendo o Olhar Fotográfico; Pática - Observando a Hora Dourada \n🤔 *O que fazer na prática:* Tirar uma foto da frente da sua casa de manhã até as 07h da manhã e uma foto da frente da sua casa depois das 17h e antes das 18h. \nDica: Tirem as duas fotos da mesma posição com a mesma vista.\nEssa foto será enviada no meu individual (privado).",
      },
      {
        numero: 4,
        titulo: "Regra dos Terços",
        atividade:
          "Regra dos terços (Quiz); Regra dos terços; Pática - Desafio Fotográfico de Observação \n🤔 *O que fazer na prática:* Cada aluno tira uma foto de algo em seu ambiente, procurando destacar um dos elementos visuais (linhas, cores, padrões).\nPode ser uma janela, um jardim, um pet, uma árvore.\nVocê compartilha a imagem no grupo e explica o que buscou capturar na fotografia.",
      },
      {
        numero: 5,
        titulo: "Iluminação na fotografia com celular",
        atividade:
          "Quiz sobre tipos de iluminação na fotografia; Pática - Desafio Fotográfico: Iluminação Natural x Artificial \n🤔 *O que fazer na prática:* Vocês irão tirar duas fotos, do mesmo assunto, uma usando luz natural e outra com luz artificial, observando os efeitos de cada tipo de luz.\nEssas fotos serão enviadas no meu individual (privado).",
      },
      {
        numero: 6,
        titulo: "Fotografia de retrato",
        atividade:
          "Arrasta e solta sobre nomes de expressões e poses; Pática - Desafio Fotográfico: Prática de Retratos \n🤔 *O que fazer na prática:* Posicione o modelo próximo a uma janela ou em ambiente bem iluminado, praticando diferentes ângulos e ajustes de luz.\nExplore expressões variadas e poses naturais ou criativas para capturar diferentes emoções.\nEssas fotos serão enviadas no meu individual(privado).",
      },
      {
        numero: 7,
        titulo: "Fotografia de Paisagem",
        atividade:
          "Jogo da Memória - Paisagens Cearenses; Pática - Desafio Fotográfico I \n🤔 *O que fazer na prática:* Fotografar uma paisagem urbana e, em seguida, uma natural. Observe as dicas e técnicas, fotografar na hora dourada, usar a regra dos terços e capturar o movimento em um ambiente urbano e em um cenário natural, como árvores balançando ao vento ou ondas quebrando.\nDica: você pode aproveitar viagens ou passeios para fazer essa atividade e também explorar sua cidade, locais com paisagens naturais. \nEssa foto será enviada no individual(privado) do instrutor.",
      },
      {
        numero: 8,
        titulo: "Fotografia no dia a dia",
        atividade:
          "Quiz sobre selfies; Pática - Desafio Fotográfico II \n🤔 *O que fazer na prática:* Observe as dicas e técnicas e faça uma selfie do jeito que você se sentir melhor, buscando aumentar sua autoconfiança e expressão pessoal.\nEssa foto será enviada no meu individual (privado).",
      },
    ],
    turmas: [
      {
        tipo: "municipal",
        numero: "06",
        data: "20 de Agosto de 2025",
        horario: "10:30",
        dia: "QUARTA-FEIRA",
      },
      {
        tipo: "municipal",
        numero: "07",
        data: "18 de Setembro de 2025",
        horario: "13:30",
        dia: "QUINTA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "01",
        data: "06 de Novembro de 2025",
        horario: "10:30",
        dia: "QUINTA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "04",
        data: "02 de Fevereiro de 2026",
        horario: "13:30",
        dia: "TERÇA-FEIRA",
      },{
        tipo: "itinerante",
        numero: "05",
        data: "17 de Março de 2026",
        horario: "10:30",
        dia: "TERÇA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "06",
        data: "02 de Abril de 2026",
        horario: "10:30",
        dia: "QUINTA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "07",
        data: "02 de Abril de 2026",
        horario: "15:30",
        dia: "TERÇA-FEIRA",
      },
    ],
  },
  ginastica: {
    nome: "Ginástica",
    aulas: [
      { 
        numero: 1, 
        titulo: "Apresentação", 
        atividade: "Sem atividade" },
      { 
        numero: 2, 
        titulo: "Questionário PAR-Q", 
        atividade: "Teste PAR-Q" },
      {
        numero: 3,
        titulo: "Comportamento Sedentário",
        atividade: "Marque o comportamento correto",
      },
      {
        numero: 4,
        titulo: "Alimentação Saudável",
        atividade: "Alimentação Saudável",
      },
      {
        numero: 5,
        titulo: "Diabetes",
        atividade: "Questionário sobre diabetes",
      },
      {
        numero: 6,
        titulo: "Pressão Arterial",
        atividade: "Exercício e hipertensão",
      },
      {
        numero: 7,
        titulo: "Saúde dos ossos e músculos",
        atividade: "Conhecendo o corpo humano",
      },
      {
        numero: 8,
        titulo: "Envelhecimento Saudável",
        atividade: "Fórum - O que te motiva?",
      },
    ],
    turmas: [
      {
        tipo: "municipal",
        numero: "04",
        data: "18 de Setembro de 2025",
        horario: "13:30",
        dia: "QUINTA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "01",
        data: "06 de Novembro de 2025",
        horario: "13:30",
        dia: "QUINTA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "03",
        data: "11 de Dezembro de 2025",
        horario: "15:30",
        dia: "QUINTA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "04",
        data: "02 de Fevereiro de 2026",
        horario: "13:30",
        dia: "TERÇA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "05",
        data: "17 de Março de 2026",
        horario: "10:30",
        dia: "TERÇA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "06",
        data: "02 de Abril de 2026",
        horario: "10:30",
        dia: "QUINTA-FEIRA",
      },
    ],
  },
  ginasticaAvancado: {
    nome: "Ginástica - Avançado",
    aulas: [
      { 
        numero: 1, 
        titulo: "Apresentação", 
        atividade: "Sem atividade" },
      {
        numero: 2,
        titulo: "Composição Corporal",
        atividade: "Identificando fatores de risco",
      },
      {
        numero: 3,
        titulo: "Exercícios Aeróbicos",
        atividade: "Complete as frases",
      },
      {
        numero: 4,
        titulo: "Exercícios Anaeróbicos",
        atividade: "Fortalecendo seus músculos",
      },
      {
        numero: 5,
        titulo: "Exercícios de coordenação e equilíbrio",
        atividade: "Eu nunca",
      },
      { 
        numero: 6, 
        titulo: "Exercícios de flexibilidade", 
        atividade: "" },
      {
        numero: 7,
        titulo: "Alterações posturais",
        atividade: "Alinhando sua postura",
      },
      {
        numero: 8,
        titulo: "Envelhecimento Saudável",
        atividade: "Fórum - O que te motiva?",
      },
    ],
    turmas: [],
  },
  nutricao: {
    nome: "Nutrição",
    aulas: [
      { 
        numero: 1, 
        titulo: "Apresentação", 
        atividade: "Sem atividade" },
      {
        numero: 2,
        titulo: "A importância da alimentação saudável",
        atividade: "Escolhendo os alimentos",
      },
      {
        numero: 3,
        titulo: "Comportamento alimentar",
        atividade: "Escolhas conscientes",
      },
      {
        numero: 4,
        titulo: "Temperos industrializados e naturais",
        atividade: "Lendo os rótulos",
      },
      { 
        numero: 5, 
        titulo: "Diabetes", 
        atividade: "Mito ou verdade?" },
      {
        numero: 6,
        titulo: "Hipertensão",
        atividade: "Sintomas da hipertensão",
      },
      {
        numero: 7,
        titulo: "Doença celíaca e intolerância à lactose",
        atividade: "Encontre os alimentos",
      },
      {
        numero: 8,
        titulo: "Alimentação e saúde mental",
        atividade: "Sabores e benefícios",
      },
    ],
    turmas: [
      {
        tipo: "municipal",
        numero: "05",
        data: "20 de Agosto de 2025",
        horario: "15:30",
        dia: "QUARTA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "02",
        data: "02 de Fevereiro de 2026",
        horario: "13:30",
        dia: "TERÇA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "03",
        data: "02 de Fevereiro de 2026",
        horario: "10:30",
        dia: "TERÇA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "04",
        data: "17 de Março de 2026",
        horario: "08:30",
        dia: "TERÇA-FEIRA",
      },
    ],
  },
  redesSociais: {
    nome: "Redes Sociais",
    aulas: [
      { 
        numero: 1, 
        titulo: "Apresentação", 
        atividade: "Sem atividade" },
      {
        numero: 2,
        titulo: "Grupos do Whatsapp",
        atividade: "Grupos do WhatsApp",
      },
      {
        numero: 3,
        titulo: "Conhecendo o Facebook",
        atividade: "Alterando foto de perfil do Facebook",
      },
      {
        numero: 4,
        titulo: "Postagens e botões do Facebook",
        atividade: "Interações com botões do Facebook",
      },
      {
        numero: 5,
        titulo: "Conhecendo o Instagram",
        atividade: "Identificando os botões do Instagram",
      },
      {
        numero: 6,
        titulo: "Stories e interações no Instagram",
        atividade: "Postando um story no Instagram",
      },
      {
        numero: 7,
        titulo: "Conhecendo o TikTok",
        atividade: "Verdadeiro ou faso - TikTok",
      },
      { 
        numero: 8, 
        titulo: "Pinterest", 
        atividade: "Pesquisando no Pinterest" },
    ],
    turmas: [
      {
        tipo: "municipal",
        numero: "07",
        data: "18 de Setembro de 2025",
        horario: "13:30",
        dia: "QUINTA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "01",
        data: "06 de Novembro de 2025",
        horario: "15:30",
        dia: "QUINTA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "03",
        data: "11 de Dezembro de 2025",
        horario: "13:30",
        dia: "QUINTA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "05",
        data: "02 de Fevereiro de 2026",
        horario: "10:30",
        dia: "TERÇA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "06",
        data: "17 de Março de 2026",
        horario: "10:30",
        dia: "TERÇA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "07",
        data: "17 de Março de 2026",
        horario: "13:30",
        dia: "TERÇA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "09",
        data: "02 de Abril de 2026",
        horario: "10:30",
        dia: "QUINTA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "10",
        data: "02 de Abril de 2026",
        horario: "13:30",
        dia: "QUINTA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "11",
        data: "31 de Março de 2026",
        horario: "13:30",
        dia: "TERÇA-FEIRA",
      },
    ],
  },
  teatro: {
    nome: "Teatro",
    aulas: [],
    turmas: [],
  },
  tecnologias: {
    nome: "Ensino das Tecnologias",
    aulas: [
      { 
        numero: 1, 
        titulo: "Aula treino - Google Meet", 
        atividade: "Não possui"
      },
      {
        numero: 2,
        titulo: "Apresentação e introdução aos conteúdos",
        atividade: "Não possui",
      },
      { 
        numero: 3, 
        titulo: "Aplicativos de Conversa: WhatsApp", 
        atividade: "Não possui"
      },
      {
        numero: 4,
        titulo: "Ambiente Virtual de Aprendizagem",
        atividade: "Não possui"
      },
      {
        numero: 5,
        titulo: "Tela Inicial dos Dispositivos Móveis",
        atividade: "---",
      },
      {
        numero: 6,
        titulo: "Aprendendo Conectar à Internet",
        atividade: "---",
      },
      {
        numero: 7,
        titulo: "Contatos e Ligações",
        atividade: "---",
      },
      {
        numero: 8,
        titulo: "Câmera e Galeria",
        atividade: "---",
      },
      { 
        numero: 9, 
        titulo: "WhatsApp: Ligações e Configuração de Perfil", 
        atividade: "---",
      },
      {
        numero: 10,
        titulo: "WhatsApp: Salvar e bloquear contatos, apagar mensagens e limpar conversas",
        atividade: "---",
      },
      {
        numero: 11,
        titulo: "WhatsApp: Anexando Arquivos",
        atividade: "---",
      },
      {
        numero: 12,
        titulo: "Telegram",
        atividade: "---",
      },
      {
        numero: 13,
        titulo: "Inteligência Artificial",
        atividade: "---",
      },
      {
        numero: 14,
        titulo:
          "ChatGPT",
        atividade: "---",
      },
      {
        numero: 15,
        titulo: "Pesquisas na Internet",
        atividade: "---",
      },
      {
        numero: 16,
        titulo: "YouTube",
        atividade: "---",
      },
      {
        numero: 17,
        titulo: "Instalação e Desinstalação de Aplicativos",
        atividade: "---",
      },
      {
        numero: 18,
        titulo: "Aplicativos Utilitários",
        atividade: "---",
      },
      {
        numero: 19,
        titulo: "Mensagens de SMS",
        atividade: "---",
      },
      { 
        numero: 20, 
        titulo: "Uso do E-mail", 
        atividade: "QR CODE" 
      },
      {
        numero: 21,
        titulo: "Transportes por Aplicativos",
        atividade: "---",
      },
      {
        numero: 22,
        titulo: "Segurança digital e golpes",
        atividade: "---",
      },
      {
        numero: 23,
        titulo: "Dicas de Segurança Digital",
        atividade: "---",
      },
      {
        numero: 24,
        titulo: "Aplicativos de Bancos",
        atividade: "---",
      },
      {
        numero: 25,
        titulo: "Aplicativos de Bancos: Uso do Pix",
        atividade: "---",
      },
      {
        numero: 26,
        titulo: "Portal Gov.br",
        atividade: "---",
      },
      {
        numero: 27,
        titulo: "Uso Consciente do Celular",
        atividade: "---",
      },
      {
        numero: 28,
        titulo: "Preenchimento de formulários digitais",
        atividade: "---",
      },
      {
        numero: 29,
        titulo: "Pesquisa de Satisfação",
        atividade: "---",
      },
    ],
  },
  tecnologiasAvancado: {
    nome: "Ensino das Tecnologias - Avançado",
    aulas: [
      {
        numero: 1,
        titulo: "Revisando para Avançar: Preparando-se para novos aprendizados",
        atividade:
          "Simulando o Chat do Google Meet",
      },
      {
        numero: 2,
        titulo: "Tela inicial: Revisando e Praticando Novos Recursos",
        atividade: "Limpando notificações e aplicativos em uso",
      },
      {
        numero: 3,
        titulo: "Funções e personalização da Tela Inicial",
        atividade: "Alterando o papel de parede",
      },
      { 
        numero: 4, 
        titulo: "Aplicativos de Conversa: WhatsApp", 
        atividade: "Editando uma mensagem no WhastApp" },
      {
        numero: 5,
        titulo: "Ferramentas do WhatsApp",
        atividade: "Enviando uma figurinha",
      },
      {
        numero: 6,
        titulo: "Aplicativos de Conversa: Telegram",
        atividade: "Aplicativos de Conversa - Telegram",
      },
      {
        numero: 7,
        titulo: "Câmera e Galeria",
        atividade: "Como fazer boas fotos",
      },
      { 
        numero: 8, 
        titulo: "Inteligência Artificial", 
        atividade: "Verdadeiro ou Falso sobre IA" },
      { 
        numero: 9, 
        titulo: "ChatGPT", 
        atividade: "Perguntas sobre o Chat GPT" },
      {
        numero: 10,
        titulo: "Pesquisas na Internet",
        atividade: "Pesquisando na internet",
      },
      {
        numero: 11,
        titulo: "Google Lens",
        atividade: "Traduzindo com o Google Lens",
      },
      {
        numero: 12,
        titulo: "Google Maps",
        atividade: "Reconhecendo transportes",
      },
      {
        numero: 13,
        titulo: "Youtube",
        atividade: "---",
      },
      {
        numero: 14,
        titulo: "Instalação e desinstalação de aplicativos",
        atividade: "---",
      },
      {
        numero: 15,
        titulo: "Aplicativos de Serviços",
        atividade: "---",
      },
      {
        numero: 16,
        titulo: "Portal Gov.br",
        atividade: "---",
      },
      {
        numero: 17,
        titulo: "Transportes por aplicativos",
        atividade: "---",
      },
      {
        numero: 18,
        titulo: "Segurança digital e golpes",
        atividade: "---",
      },
      {
        numero: 19,
        titulo: "Dicas de Segurança Digital",
        atividade: "---",
      },
      {
        numero: 20,
        titulo: "Aplicativos de Banco",
        atividade: "---",
      },
      {
        numero: 21,
        titulo: "Uso consciente do celular",
        atividade: "---",
      },
      {
        numero: 22,
        titulo: "Preenchimento de formulários digitais",
        atividade: "---",
      },
      {
        numero: 23,
        titulo: "Pesquisa de Satisfação",
        atividade: "---",
      },
    ],
  },
  turismoDigital: {
    nome: "Turismo Digital",
    aulas: [
      {
        numero: 1,
        titulo: "Apresentação",
        atividade: "Quais lugares você gostaria de visitar?",
      },
      {
        numero: 2,
        titulo: "Exposições e museus virtuais",
        atividade: "Exposições no Google Chrome",
      },
      {
        numero: 3,
        titulo: "Museus pelo mundo",
        atividade: "Jogo da Memória: Obras de Arte",
      },
      {
        numero: 4,
        titulo: "Explorando o mundo com o Street View",
        atividade: "Viajando com o Street View",
      },
      {
        numero: 5,
        titulo: "Maravilhas do mundo",
        atividade: "Descobrindo as maravilhas",
      },
      {
        numero: 6,
        titulo: "Explorando o mundo com Google Arts & Culture",
        atividade: "Turistando",
      },
      { 
        numero: 7, 
        titulo: "Museus brasileiros", 
        atividade: "Turistando" },
      {
        numero: 8,
        titulo: "Explorando a cultura Indígena",
        atividade: "Jogo da Memória: Cultura Indigena",
      },
    ],
    turmas: [
      {
        tipo: "itinerante",
        numero: "01",
        data: "02 de Fevereiro de 2026",
        horario: "15:30",
        dia: "TERÇA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "02",
        data: "17 de Março de 2026",
        horario: "08:30",
        dia: "TERÇA-FEIRA",
      },
      {
        tipo: "itinerante",
        numero: "03",
        data: "02 de Abril de 2026",
        horario: "13:30",
        dia: "QUINTA-FEIRA",
      },
    ],
  },
};

// Funções utilitárias
const Utils = {
  // Formatar data para exibição
  formatarData(dataStr) {
    if (!dataStr) return "";
    const meses = [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro",
    ];
    const data = new Date(dataStr + "T00:00:00");
    const dia = data.getDate();
    const mes = meses[data.getMonth()];
    return `${dia} de ${mes}`;
  },

  // Capitalizar primeira letra
  capitalizar(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  // Obter data atual no formato YYYY-MM-DD
  obterDataAtual() {
    const hoje = new Date();
    const yyyy = hoje.getFullYear();
    const mm = String(hoje.getMonth() + 1).padStart(2, "0");
    const dd = String(hoje.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  },

  // Obter dia da semana formatado
  obterDiaSemana(dataStr) {
    const data = new Date(dataStr + "T00:00:00");
    return this.capitalizar(
      data.toLocaleDateString("pt-BR", { weekday: "long" })
    );
  },

  // Validar campos obrigatórios
  validarCampos(campos) {
    const camposVazios = [];

    for (const [nome, valor] of Object.entries(campos)) {
      if (
        valor === undefined ||
        valor === null ||
        String(valor).trim() === ""
      ) {
        camposVazios.push(nome);
      }
    }

    return {
      valido: camposVazios.length === 0,
      camposVazios,
    };
  },

  // Mostrar notificação
  mostrarNotificacao(mensagem, tipo = "info") {
    // Criar elemento de notificação
    const notificacao = document.createElement("div");
    notificacao.className = `notificacao notificacao-${tipo}`;
    notificacao.textContent = mensagem;

    // Estilos inline para a notificação
    Object.assign(notificacao.style, {
      position: "fixed",
      top: "20px",
      right: "20px",
      padding: "15px 20px",
      borderRadius: "6px",
      color: "white",
      fontWeight: "600",
      zIndex: "9999",
      transform: "translateX(100%)",
      transition: "transform 0.3s ease",
      maxWidth: "300px",
      wordWrap: "break-word",
    });

    // Cores baseadas no tipo
    const cores = {
      success: "#2e7d32",
      error: "#d32f2f",
      warning: "#f57c00",
      info: "#1976d2",
    };

    notificacao.style.backgroundColor = cores[tipo] || cores.info;

    // Adicionar ao DOM
    document.body.appendChild(notificacao);

    // Animar entrada
    setTimeout(() => {
      notificacao.style.transform = "translateX(0)";
    }, 100);

    // Remover após 3 segundos
    setTimeout(() => {
      notificacao.style.transform = "translateX(100%)";
      setTimeout(() => {
        if (notificacao.parentNode) {
          notificacao.parentNode.removeChild(notificacao);
        }
      }, 300);
    }, 3000);
  },
};

// Funções para manipulação de elementos
const DOM = {
  // Obter elemento por ID
  obter(id) {
    return document.getElementById(id);
  },

  // Obter elementos por seletor
  obterTodos(seletor) {
    return document.querySelectorAll(seletor);
  },

  // Definir conteúdo de elemento
  definirConteudo(elemento, conteudo) {
    if (typeof elemento === "string") {
      elemento = this.obter(elemento);
    }
    if (elemento) {
      elemento.textContent = conteudo;
    }
  },

  // Definir HTML de elemento
  definirHTML(elemento, html) {
    if (typeof elemento === "string") {
      elemento = this.obter(elemento);
    }
    if (elemento) {
      elemento.innerHTML = html;
    }
  },

  // Mostrar/ocultar elemento
  mostrar(elemento, mostrar = true) {
    if (typeof elemento === "string") {
      elemento = this.obter(elemento);
    }
    if (elemento) {
      elemento.style.display = mostrar ? "block" : "none";
    }
  },

  // Adicionar classe
  adicionarClasse(elemento, classe) {
    if (typeof elemento === "string") {
      elemento = this.obter(elemento);
    }
    if (elemento) {
      elemento.classList.add(classe);
    }
  },

  // Remover classe
  removerClasse(elemento, classe) {
    if (typeof elemento === "string") {
      elemento = this.obter(elemento);
    }
    if (elemento) {
      elemento.classList.remove(classe);
    }
  },
};

// Funções para clipboard
const Clipboard = {
  // Copiar texto para clipboard
  async copiar(texto) {
    try {
      await navigator.clipboard.writeText(texto);
      Utils.mostrarNotificacao("Mensagem copiada com sucesso!", "success");
      return true;
    } catch (err) {
      // Fallback para navegadores mais antigos
      try {
        const textArea = document.createElement("textarea");
        textArea.value = texto;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
        Utils.mostrarNotificacao("Mensagem copiada com sucesso!", "success");
        return true;
      } catch (fallbackErr) {
        Utils.mostrarNotificacao(
          "Erro ao copiar mensagem. Tente selecionar e copiar manualmente.",
          "error"
        );
        return false;
      }
    }
  },
};

// Inicialização comum
document.addEventListener("DOMContentLoaded", function () {

   preencherSelectModulos();
  
  // Definir data atual em campos de data
  const camposData = document.querySelectorAll('input[type="date"]');
  camposData.forEach((campo) => {
    if (!campo.value) {
      campo.value = Utils.obterDataAtual();
    }
  });

  // Adicionar eventos de hover para melhor UX
  const botoes = document.querySelectorAll("button, .btn");
  botoes.forEach((botao) => {
    botao.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)";
    });

    botao.addEventListener("mouseleave", function () {
      if (!this.disabled) {
        this.style.transform = "";
      }
    });
  });
});
// Alternância de Tema Claro/Escuro
document.addEventListener("DOMContentLoaded", () => {
  const botaoTema = document.getElementById("btn-tema");
  const temaAtual = localStorage.getItem("tema");

  if (temaAtual === "escuro") {
    document.body.classList.add("modo-escuro");
  }

  if (botaoTema) {
    botaoTema.addEventListener("click", () => {
      document.body.classList.toggle("modo-escuro");
      const novoTema = document.body.classList.contains("modo-escuro")
        ? "escuro"
        : "claro";
      localStorage.setItem("tema", novoTema);
    });
  }
});

// Preencher automaticamente o select de módulos
function preencherSelectModulos() {
  const select = document.getElementById("modulo");
  if (!select) return;

  const primeiroOption = select.querySelector("option");
  select.innerHTML = "";
  select.appendChild(primeiroOption);

  Object.entries(MODULOS_DATA).forEach(([key, modulo]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = modulo.nome;
    select.appendChild(option);
  });
}