Gerador de Mensagens Educacionais

Este sistema automatiza a geração de mensagens padronizadas para diversas atividades educacionais, facilitando a comunicação com alunos e instrutores.

📋 Funcionalidades
O Gerador de Mensagens oferece quatro funcionalidades principais, cada uma projetada para otimizar a comunicação em diferentes cenários:

1. Lembretes de Atividades Pendentes
Gere lembretes personalizados para alunos que ainda não concluíram suas atividades.

Seleção Flexível: Escolha o módulo e aulas específicas com atividades pendentes.

Mensagens Detalhadas: A mensagem inclui o nome do módulo, título da aula e a atividade correspondente, direcionando o aluno a acessar o aplicativo EAD IDEAR para realizar as tarefas.

2. Mensagens de Saudação
Crie mensagens de bom dia para o início das aulas.

Detalhes da Aula: Inclua o módulo, número da aula, título, data e hora.

Instruções Específicas: 
Para o módulo "Ensino das Tecnologias Digitais", na aula 01, a mensagem é específica convidando o aluno a participar da "Aula Treino".

Para o módulo "Ensino das Tecnologias Digitais", aulas até a 10, a mensagem oferece um lembrete para consultar a apostila nas páginas 13 e 14 para o passo a passo de como entrar na aula.

Personalização: A mensagem se adapta ao tipo de módulo e aula.

3. Links de Aula
Gere mensagens com o link direto para a aula online no Google Meet.

Seleção por Instrutor e Módulo: Escolha o instrutor e o módulo da aula para obter o link correto.

Data Automática: A data da aula é preenchida automaticamente.

4. Atividades de Casa
Prepare mensagens para atividades que os alunos devem realizar em casa.

Seleção de Módulo e Aula: Permite selecionar o módulo e a aula específica.

Informações Completas: A mensagem inclui o nome do módulo, o número e título da aula, e a descrição da atividade, incentivando o acesso ao Ambiente Virtual de Aprendizagem.

🚀 Como Usar
Instalação
Baixe todos os arquivos do projeto.

Mantenha a estrutura de pastas intacta.

Abra o arquivo index.html em qualquer navegador moderno para começar a usar.

Navegação
Página Principal: Acesse index.html.

Seleção de Função: Clique no cartão da funcionalidade desejada (Lembretes de Atividades Pendentes, Mensagens de Bom Dia, Links de Aula, Atividades de Casa).

Preenchimento: Complete os campos necessários na interface da funcionalidade selecionada.

Geração: Clique em "📝 Gerar Mensagem" para visualizar o texto.

Cópia: Use o botão "📋 Copiar Mensagem" para copiar o texto gerado para a área de transferência.

Limpeza: Clique em "🧹 Limpar Mensagem" (ou "🧹 Limpar Campos" em algumas páginas) para redefinir os campos.

📁 Estrutura do Projeto

```
automatic-messenger/
├── index.html                 # Página principal
├── README.md                  # Esta documentação
├── css/
│   └── style.css             # Estilos unificados
├── js/
│   ├── common.js             # Funções e dados compartilhados
│   ├── atividades-pendentes.js
│   ├── bom-dia.js
│   ├── link-aula.js
│   └── atividades-casa.js
└── pages/                    # Páginas HTML de cada módulo gerador de mensagens
    ├── atividades-pendentes.html
    ├── bom-dia.html
    ├── link-aula.html
    └── atividades-casa.html
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

Atualize os dropdowns de seleção de módulo nos arquivos HTML relevantes (ex: atividades-casa.html, atividades-pendentes.html, bom-dia.html, link-aula.html).

Adicionando Novos Instrutores ou Links de Aula
Edite o arquivo js/link-aula.js.

No array INSTRUCTOR_DATA, adicione um novo objeto para o instrutor com seu nome e os módulos que ele leciona, juntamente com os links do Google Meet.

Garanta que o dropdown de seleção de instrutores em link-aula.html reflita a nova adição, embora o link-aula.js já tenha lógica para popular este campo dinamicamente.

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


