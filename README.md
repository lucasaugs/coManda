# coManda

### Repositório criado para o desenvolvimento do MVP do app _coManda_, proposto na disciplina de Prática em Desenvolvimento de Software

O app tem a proposta de facilitar o pedido e divisão de despesas, contando com features como lista de restaurantes, cardápio e carrinho de compras.

### Integrantes
- Lucas Gonçalves - lucasaugusto83.la@gmail.com - Frontend
- Henrique Rotsen - henriquerotsensf@gmail.com - Frontend
- Caio Teles - caiotelescunha2001@gmail.com - Backend
- Kenji - victorkenji11@gmail.com - Backend

### Backlog do produto
- Como usuário, eu gostaria de poder me logar na plataforma.
- Como usuário dono de restaurante, eu gostaria de poder cadastrar meu estabelecimento no aplicativo.
- Como usuário dono de restaurante, eu gostaria de poder cadastrar o cardápio do meu restaurante no aplicativo.
- Como usuário dono do restaurante, eu gostaria de cadastrar garçons para que eles possam atender pedidos.
- Como usuário eu gostaria de gerar uma comanda.
- Como usuário eu gostaria de poder dividir o preço do produto que está sendo pedido por um dos integrantes da minha comanda.
- Como usuário eu gostaria de poder visualizar os produtos que já estão na comanda bem como o total que eu terei que pagar até o momento.
- Como usuário eu gostaria de poder fazer pedidos ao restaurante pelo meu programa.
- Como garçom eu gostaria de poder confirmar que eu entreguei o pedido a mesa.
- Como garçom eu gostaria de receber os pedidos da mesa que eu estou atendendo.
- Como usuário gostaria de receber uma confirmação de que meu pedido foi recebido por um garçom.
- Como dono do restaurante eu gostaria de poder designar um garçom a uma mesa.
- Como usuário gostaria de poder re-dividir um produto já adicionado.
- Como usuário eu gostaria de adicionar pessoas à comanda.
- Como dono do restaurante gostaria de editar o cardápio do meu restaurante.

### Backlog da Sprint

1 - Como usuário, eu gostaria de poder me logar na plataforma
  * Criar endpoint para cadastro de usuários
    + Definir e declarar tabelas, criar endpoints para inserir novos usuários
  * Criar endpoint de login de usuários
    + Definir funções de autenticação do usuário
  * Criar telas de cadastro e login de usuário, conforme protótipo do figma

2 - Como usuário dono de restaurante, eu gostaria de poder cadastrar meu estabelecimento no aplicativo.
  * Criar endpoint para cadastro de restaurantes
    + Definir e declarar tabelas, criar endpoints para inserir novos restaurantes
  * Criar telas de cadastro e login de estabelecimentos, conforme protótipo do figma

3 - Como usuário dono de restaurante, eu gostaria de poder cadastrar o cardápio do meu restaurante no aplicativo.
  * Criar endpoint para cadastro de itens
    + Definir e declarar tabelas, criar endpoints para inserir novos itens
  * Adicionar telas e navegação para inserção de itens

4 - Como usuário eu gostaria de gerar uma comanda.
  * Criar endpoint para geração de comandas
    + Definir e declarar tabelas, criar endpoints para inserir novas comandas
  * Criar a navegação no frontend

5 - Como usuário eu gostaria de adicionar pessoas à comanda.
  * Criar endpoint para adição de pessoas
    + Definir os tabelas e referências para os dados dos usuários a serem adicionados, criar endpoints para inserir novas pessoas a uma mesma comanda
  * Criar telas para cadastro de novas pessoas na comanda.

6 - Como usuário da plataforma, gostaria de visualizar os restaurantes disponíveis.
  * Criar comunicação para receber informações dos restaurantes
    + Definir referências para as tabelas que contém dados dos estabelecimentos cadastrados
  * Criar a navegação no frontend

7 - Como usuário eu gostaria de poder dividir o preço do produto que está sendo pedido por um dos integrantes da minha comanda
  * Criar comunicação para gerenciamento de itens
    + Definir referências à tabelas dos grupos e itens na comanda de cada e criar endpoints para selecionar uma outra pessoa e dividir um item com ela.
  * Criar telas para navegação no front e confirmação

8 - Como usuário eu gostaria de poder visualizar os produtos que já estão na comanda bem como o total que eu terei que pagar até o momento.
  * Criar comunicação à lista/tabela de itens
    + Definir referências para as tabelas de itens de cada usuário e retornar a soma dos valores
  * Criar tela no frontend, para cada usuário e sua comanda, e do grupo.
