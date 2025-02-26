Backend de um site de notícias

Este é o backend de um site de notícias, desenvolvido utilizando Node.js, Express, MongoDB e Mongoose. Ele oferece endpoints para gerenciar notícias, incluindo a criação, leitura, atualização e exclusão (CRUD).

Funcionalidades

Listar todas as notícias: Retorna todas as notícias ordenadas pela data de publicação (mais recentes primeiro).
GET /noticias

Listar notícia por ID: Retorna uma notícia específica através do seu ID.
GET /noticias/:id

Criar uma nova notícia: Permite a criação de uma nova notícia com os campos: título, autor, descrição, data de publicação e URL da mídia.
POST /noticias

Atualizar notícia: Atualiza uma notícia existente com os dados fornecidos.
PUT /noticias/:id

Excluir notícia: Exclui uma notícia existente pelo seu ID.
DELETE /noticias/:id

Tecnologias

Node.js: Ambiente de execução para JavaScript no servidor.
Express: Framework para construção de APIs RESTful.
MongoDB: Banco de dados NoSQL utilizado para armazenar as notícias.
Mongoose: ORM para interação com o MongoDB.
dotenv: Carrega variáveis de ambiente do arquivo .env.


Dependências

express: Framework para construção de APIs.
cors: Para permitir requisições de diferentes origens.
mongoose: Para interagir com o MongoDB.
dotenv: Para carregar variáveis de ambiente.
