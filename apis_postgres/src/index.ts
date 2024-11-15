// importa todas as classe da dependencia express
import * as express from 'express'

// importa as rotas
import rotas from './routes/index'

// cria uma instancia do express
const servidor: express.Application = express()

// configura o servidor com middleware par transformar em JSON
servidor.use(express.json())
servidor.use(express.urlencoded({extended: false}))

// configura servidor com as rotas
servidor.use(rotas)

servidor.listen(3003, () => {
    console.log(`Servidor rodando na porta `)
})
