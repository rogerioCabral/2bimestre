// importa classe Router do express
import {Router} from 'express'

import {getPacientes, addPaciente, removePaciente, atualizaPaciente} from '../controllers/PacienteController'

// cria um objeto da classe Rotuter
const router: Router = Router()

router.get("/paciente", getPacientes)
router.post("/paciente", addPaciente)
router.delete("/paciente/:rg", removePaciente)
router.put("/paciente/:rg", atualizaPaciente)

export default router