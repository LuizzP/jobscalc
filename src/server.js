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

const express = require("express")
const server = express()

server.use(express.static("public"))


server.get('/', (req, res) => {
    return res.sendFile(__dirname + '/views/index.html')
})

server.listen(3000, ()=> console.log('SERVER IS RUNNING'))