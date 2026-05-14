Gerador de Mensagens Educacionais

Este sistema automatiza a geração de mensagens padronizadas para diversas atividades educacionais, facilitando a comunicação com alunos e instrutores.

📋 Funcionalidades
O Gerador de Mensagens oferece seis funcionalidades principais, cada uma projetada para otimizar a comunicação em diferentes cenários:

1. Mensagem de Saudação (Bom Dia)
Crie mensagens de bom dia para o início das aulas.

Detalhes da Aula: Inclua o módulo, número da aula, título, data e hora.

Instruções Específicas: A mensagem se adapta ao tipo de módulo e aula.

Personalização: Mensagens customizadas conforme o curso selecionado.

2. Links de Aula
Gere mensagens com o link direto para a aula online no Google Meet.

Seleção por Instrutor e Módulo: Escolha o instrutor e o módulo da aula para obter o link correto.

Data Automática: A data da aula é preenchida automaticamente.

3. Atividades de Casa
Prepare mensagens para atividades que os alunos devem realizar em casa.

Seleção de Módulo e Aula: Permite selecionar o módulo e a aula específica.

Informações Completas: A mensagem inclui o nome do módulo, número e título da aula, e descrição da atividade.

4. Atividades Pendentes
Gere lembretes personalizados para alunos que ainda não concluíram suas atividades.

Seleção Flexível: Escolha o módulo e aulas específicas com atividades pendentes.

Mensagens Detalhadas: A mensagem inclui nome do módulo, título da aula e atividade correspondente.

5. Novas Habilidades
Gere lembretes para indicar as novas habilidades adquiridas pelos alunos.

Emojis Personalizados: Cada curso tem um emoji específico para melhor visualização.

Seleção por Projeto e Turma: Personalize mensagens baseadas em projeto e turma.

6. Nome de Aula - YouTube
Gere nomes formatados para as aulas no canal do YouTube.

Código de Turma Automático: Gera automaticamente códigos de turma com ano de referência e siglas.

Padronização: Garante nomenclatura consistente para todas as aulas.

🚀 Como Usar
Instalação
Baixe todos os arquivos do projeto.

Mantenha a estrutura de pastas intacta.

Abra o arquivo index.html em qualquer navegador moderno para começar a usar.

Navegação
Página Principal: Acesse index.html.

Seleção de Função: Clique no cartão da funcionalidade desejada:
  - Mensagem de Saudação (Bom Dia)
  - Links de Aula
  - Atividades de Casa
  - Atividades Pendentes
  - Novas Habilidades
  - Nome de Aula - YouTube

Preenchimento: Complete os campos necessários na interface da funcionalidade selecionada.

Geração: Clique em "📝 Gerar Mensagem" para visualizar o texto.

Cópia: Use o botão "📋 Copiar Mensagem" para copiar o texto gerado para a área de transferência.

Limpeza: Clique em "🧹 Limpar Mensagem" (ou "🧹 Limpar Campos" em algumas páginas) para redefinir os campos.

📁 Estrutura do Projeto

```
MensagensAuto/
├── index.html                      # Página principal com cards das 6 funcionalidades
├── README.md                       # Esta documentação
├── css/
│   └── style.css                  # Estilos unificados
├── js/
│   ├── common.js                  # Funções e dados compartilhados (CONFIG_SISTEMA, avisar, proximoPasso)
│   ├── atividades-pendentes.js    # Gerador de lembretes de atividades pendentes
│   ├── atividades-casa.js         # Gerador de mensagens de atividades de casa
│   ├── bom-dia.js                 # Gerador de mensagens de saudação
│   ├── link-aula.js               # Gerador de mensagens com links de aula (Google Meet)
│   ├── novas-habilidades.js       # Gerador de lembretes de novas habilidades
│   └── aulas-canal.js             # Gerador de nomes para aulas do YouTube
└── pages/                         # Páginas HTML de cada funcionalidade
    ├── atividades-pendentes.html
    ├── atividades-casa.html
    ├── bom-dia.html
    ├── link-aula.html
    ├── novas-habilidades.html
    └── aulas-canal.html
```

🎨 Características Visuais

Paleta de Cores
Verde Principal: #2e7d32 (botões e elementos principais)
Verde Hover: #1b5e20 (estados de hover)
Verde Claro: #e8f5e9 (fundo das mensagens)
Fundo: #f0f2f5 (fundo da página)
Texto: #333333 (texto principal)

Tipografia
Fonte: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
Tamanhos: Hierarquia bem definida para títulos e textos

Responsividade
Layout adaptativo para desktop, tablet e mobile
Grid flexível que se ajusta ao tamanho da tela
Botões e campos otimizados para touch

🔧 Funcionalidades Técnicas
Validação
Verificação de campos obrigatórios.

Mensagens de erro claras para módulos não encontrados ou seleções ausentes.

Notificações
Feedback visual para ações do usuário (sucesso, erro, aviso) utilizando a função Utils.mostrarNotificacao.

Acessibilidade
Layout adaptativo para diferentes tamanhos de tela.

Botões e campos otimizados para interação touch.

Alternância de tema (claro/escuro).

🛠️ Manutenção
Adicionando Novas Aulas
Edite o arquivo js/common.js.

Localize o objeto MODULOS_DATA.

Adicione a nova aula ao array aulas correspondente ao módulo desejado.

Adicionando Novos Módulos
Adicione o novo módulo e suas aulas ao objeto MODULOS_DATA em js/common.js.

Atualize os dropdowns de seleção de módulo nos arquivos HTML relevantes (atividades-casa.html, atividades-pendentes.html, bom-dia.html, link-aula.html).

Adicionando Novos Cursos (Novas Habilidades)
Edite o arquivo js/novas-habilidades.js.

Adicione o novo curso ao mapeamento EMOJIS para definir um emoji personalizado.

Atualize a lógica de filtro de cursos conforme necessário em carregarCursos().

Adicionando Novos Instrutores ou Links de Aula
Edite o arquivo js/link-aula.js.

No array INSTRUCTOR_DATA, adicione um novo objeto para o instrutor com seu nome e os módulos que ele leciona, juntamente com os links do Google Meet.

Garanta que o dropdown de seleção de instrutores em link-aula.html reflita a nova adição.

Adicionando Novos Padrões de Nomenclatura (YouTube)
Edite o arquivo js/aulas-canal.js.

Atualize a configuração CONFIG_SISTEMA em js/common.js para adicionar novas siglas de módulos conforme necessário.

Modificando Estilos
Edite o arquivo css/style.css.

Utilize as variáveis CSS definidas para manter a consistência visual.

Teste as alterações em diferentes tamanhos de tela.

📱 Compatibilidade
Navegadores Suportados
Chrome 70+

Firefox 65+

Safari 12+

Edge 79+

Dispositivos
Desktop (Windows, Mac, Linux)

Tablets (iOS, Android)

Smartphones (iOS, Android)

📞 Suporte
Para dúvidas ou problemas, verifique se todos os arquivos estão na estrutura correta do projeto.

© 2025 - Todos os direitos reservados


