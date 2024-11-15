"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPacientes = void 0;
// import o Pool
const database_1 = require("../database");
// funcao para retornar todos os pacientes
const getPacientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try { // tratando exceção
        const resposta = yield database_1.pool.query('select * from paciente');
        return res.status(200).json(resposta.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(`Erro interno do servidor`);
    }
});
exports.getPacientes = getPacientes;
