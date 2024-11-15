"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importa express
const express = require("express");
//importar body-parser
const bodyParser = require("body-parser");
//importar o controoler
const mensagem_controller_1 = require("./mensagem.controller");
// cria uma instancia do servidor Express
const servidor = express();
// servidor suportando body-parser
servidor.use(bodyParser.json());
servidor.use(bodyParser.urlencoded({ extended: false }));
// vamos montar a rota
servidor.use('/mensagem', mensagem_controller_1.MensagemController);
// SOBRE O SERVIDOR
servidor.listen(3000, () => {
    console.log('Ouvindo na porta 3000');
});
