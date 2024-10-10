Sistema de Relatórios QA
Este é um sistema simples de geração de relatórios de User Stories e Bugs. O objetivo deste projeto é facilitar o acompanhamento e a documentação dos processos de QA (Quality Assurance) em projetos de desenvolvimento de software.

Funcionalidades
Relatório de User Stories: Permite a inserção de informações sobre as histórias de usuário, incluindo descrição, ID, responsável, status e comentários.
Relatório de Bugs: Permite o registro de bugs com detalhes como título, descrição, projeto, prioridade, ID da User Story relacionada, sprint, e ambiente.
Geração de um relatório final consolidando as informações de User Stories e Bugs.
Tecnologias Utilizadas
HTML5: Estrutura do sistema de relatórios.
CSS3: Estilização do layout.
JavaScript: Interatividade, como a alternância entre as abas e validação dos campos.
Como Usar
Clone o repositório para sua máquina local:
bash
Copiar código
git clone https://github.com/seu-usuario/relatorioqa.git
Abra o arquivo index.html em seu navegador.
Preencha as abas de Relatório de User Stories e Relatório de Bugs conforme necessário.
Clique em "Gerar Relatório Final" para consolidar e exibir o relatório final.
Estrutura do Projeto
index.html: Página principal contendo a interface de criação de relatórios.
style.css: Arquivo de estilo que define a aparência do sistema.
app.js: Lógica para alternar entre abas e coletar dados dos formulários.
Melhorias Futuras
Adicionar funcionalidade para exportar os relatórios gerados em formato PDF.
Integrar com um backend para persistir os relatórios em um banco de dados.
Adicionar filtros avançados para busca de User Stories e Bugs.
Contribuição
Contribuições são bem-vindas! Se você quiser melhorar o projeto, siga os passos abaixo:

Faça um fork do projeto.
Crie uma branch para sua feature (git checkout -b minha-feature).
Commit suas mudanças (git commit -m 'Adicionando minha feature').
Faça o push para a branch (git push origin minha-feature).
Abra um Pull Request.