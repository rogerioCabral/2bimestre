"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importa classe Router do express
const express_1 = require("express");
const PacienteController_1 = require("../controllers/PacienteController");
// cria um objeto da classe Rotuter
const router = (0, express_1.Router)();
router.get("/paciente", PacienteController_1.getPacientes);
exports.default = router;
