// importa express
import { Request, Response } from 'express'
// importa o tipo de dado Ipaciente
import { IPaciente } from '../types/IPaciente'
//importa o modelo Paciente
import Paciente from '../models/Paciente'

// funcao para retornar todos os pacientes
const getPacientes = async(req: Request, res: Response): Promise<void> => {
    try{ // tratando exceção
        // recupera os pacientes
        const pacientes: IPaciente[] = await Paciente.find()
        res.status(200).json({pacientes}) // retorna o pacientes recuperados em formato json
    }
    catch(error){
        console.log(error)
        throw error // lançar a exceção
    }
}

// funcao para adicionar um paciente
const addPaciente = async(req: Request, res: Response): Promise<void> => {
    try{ // tratando exceção
    }
    catch(error){
        console.log(error)
        throw error // lançar a exceção
    }
}

// funcao para remover um paciente
const removePaciente = async(req: Request, res: Response): Promise<void> => {
    try{ // tratando exceção
        const pacienteRemovido = await Paciente.findByIdAndDelete(req.params.id)
        res.status(200).json ({
            pacienteRemovido
        })
    }
    catch(error){
        console.log(error)
        throw error // lançar a exceção
    }
}

const updatePacientes = async(req: Request, res: Response): Promise<void> => {
    try{ // tratando exceção
        // recebe os parametros da atualização: 1 id do paciente e 2 novos dados do paciente
        const{
            params: {id},
            body,
        } = req
        // efetiva a atualização
        const pacienteAtualizado: IPaciente | null = await Paciente.findByIdAndUpdate({_id: id}, body, {new: true})
        // retorna o resultado
        res.status(200).json({
            pacienteAtualizado
        })
    }
    catch(error){
        console.log(error)
        throw error // lançar a exceção
    }
}

// exporta os métodos criados
export {getPacientes, addPaciente, updatePacientes, removePaciente}