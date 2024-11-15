// importa as classe do express
import {Router, Request, Response} from 'express'
//criar um objeto chamado router
const router: Router = Router()

//cria uma rota de get
router.get('/',(req: Request, res: Response) => {
    // responder o usuario uma mensagem
    res.send('Seja bem-vindo a nossa aplicação de teste')
})

// cria uma rota de get com um nome
router.get('/:nome', (req: Request, res: Response) => {
    // obtem o valor passado na URL
    let {nome} = req.params // valor passado do parametro
    //responder o usuario
    res.send(`Seja bem-vindo ${nome} a nossa aplicação de teste`)
})

// exportar o objeto router
export const MensagemController: Router = router