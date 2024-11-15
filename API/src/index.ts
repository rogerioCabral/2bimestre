// importa express
import * as express from 'express'
//importar body-parser
import * as bodyParser from 'body-parser'
//importar o controoler
import {MensagemController} from './mensagem.controller'
// cria uma instancia do servidor Express
const servidor: express.Application = express()
// servidor suportando body-parser
servidor.use(bodyParser.json())
servidor.use(bodyParser.urlencoded({extended: false}))

// vamos montar a rota
servidor.use('/mensagem', MensagemController)

// SOBRE O SERVIDOR
servidor.listen(3000, () => {
    console.log('Ouvindo na porta 3000')
})