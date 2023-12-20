# React Clone GPT

Apenas um projeto escrito para estudar a API de integração com o GPT, criando um clone simples dele e aprender o básico de ReactJs.

O projeto possui duas aplicações, uma servidora em `/server/` e uma aplicação web em `/front/`. O "server" foi escrito em NodeJs e o "front" escrito em ReactJs.

Não tive a mínima intenção de criar algo especial, apenas o simples para servir de material de estudo. Estou pensando em remover esse repositório e não pretendo usá-lo como portfolio de projetos.

## Instalação

1. Clone o repositório: `git clone https://github.com/ipomeno/react-chatgpt-clone.git`
2. Navegue até o diretório `cd react-chatgpt-clone/server/src/`
3. Crie um arquivo chamado `.env` segundo o modelo `.env-exemplo`
4. Navegue para `cd ../`, instale as dependência com `npm install` e use `npm start` para iniciar o servidor.
5. Navege até o diretório `cd ../front/`
6. Instale as dependências com `npm install` e `npm run dev` para rodar a aplicação web.

Se tudo correr como esperado, você terá um servidor conforme configurado em `.env` e uma aplicação web rodando em `http://localhost:5173`.

## Uso

Para usar a aplicação, basta digitar um texto que será enviado ao GPT e será exibido o resultado na tela, de forma semelhante ao Chat GPT.