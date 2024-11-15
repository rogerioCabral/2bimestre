"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MensagemController = void 0;
// importa as classe do express
const express_1 = require("express");
//criar um objeto chamado router
const router = (0, express_1.Router)();
//cria uma rota de get
router.get('/', (req, res) => {
    // responder o usuario uma mensagem
    res.send('Seja bem-vindo a nossa aplicação de teste');
});
// cria uma rota de get com um nome
router.get('/:nome', (req, res) => {
    // obtem o valor passado na URL
    let { nome } = req.params; // valor passado do parametro
    //responder o usuario
    res.send(`Seja bem-vindo ${nome} a nossa aplicação de teste`);
});
// exportar o objeto router
exports.MensagemController = router;
