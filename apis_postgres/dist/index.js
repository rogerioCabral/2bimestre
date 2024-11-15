"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importa todas as classe da dependencia express
const express = require("express");
// importa as rotas
const index_1 = require("./routes/index");
// cria uma instancia do express
const servidor = express();
// configura o servidor com middleware par transformar em JSON
servidor.use(express.json());
servidor.use(express.urlencoded({ extended: false }));
// configura servidor com as rotas
servidor.use(index_1.default);
servidor.listen(3003, () => {
    console.log(`Servidor rodando na porta `);
});
