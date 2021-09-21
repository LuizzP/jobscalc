/**
 * MONTAR UM SERVER NODE COM EXPRESS
 * > npm init -y 
 * > npm i express 
 * 
 * Criar estrutura de pasta: src/server.js
 * 
 * 
 */

// const express = require("express")
// const server = express()



// server.get('/', (req, res) => {
//     // return res.send('SERVIDOR INICIADO')
//     return res.sendFile(__dirname + '/views/index.html')
// })

// server.listen(3000, ()=> console.log('SERVER IS RUNNING'))

/**
 * Rodar servidor com comando abaixo e acessar url: localhost:3000 no browser
 *  > node src/server.js
 * CTRL + C para o servidor
 */

/**
 * # Instalar e Configurar Nodemon
 * - Nodemon automatiza o reinicio do servidor a cada alteracao.
 * > npm i nodemon -D  
 * -D significa que vai instalar somente em ambiente de Desenvolvimento;
 * 
 * # Configurar package.json
   "main": "src/server.js",
  "scripts": {
    "dev": "nodemon ."  // . roda o arquivo indicado no main
  },
 * 
 * ## Rodar Server via Nodemon pelo comando abaixo  
 * > npm run dev 
 */

  /**
   * Habilitar arquivos Static(Public) como image, scripts, styles, etc.
   *  server.use(express.static("public"))
   */

/**
 * Criando rotas
 * - criar src/routes.js
 */

/**
 * Configurando Template Engine EJS
 * > npm i ejs
 * 
 * habilitando no sever.js
 * - server.set('view engine', 'ejs')
 */

const express = require("express")
const server = express()
const routes = require("./routes")

// Habilitar EJS- Template Engine
server.set('view engine', 'ejs')

// Habilitar arquivos Static(Public) como image, scripts, styles, etc.
server.use(express.static("public"))


//Routes
server.use(routes)

server.listen(3000, ()=> console.log('SERVER IS RUNNING'))