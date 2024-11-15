// importa express
import { Request, Response } from 'express'
// import o Pool
import {pool} from '../database'
import {QueryResult} from 'pg'

// funcao para retornar todos os pacientes
const getPacientes = async(req: Request, res: Response): Promise<Response> => {
    try{ // tratando exceção
        const resposta: QueryResult = await pool.query('select * from paciente')
        return res.status(200).json(resposta.rows)
    }
    catch(error){
        console.log(error)
        return res.status(500).json(`Erro interno do servidor`)
    }
}

// função para inserção de um paciente
const addPaciente = async(req:Request, res:Response): Promise<Response> => {
    try{
        let {nome, rg, peso, idade, altura} = req.body
        let resposta: QueryResult = await pool.query('insert into paciente (nome, rg, peso, idade, altura) vaalues ($1, $2, $3, $4, $5',
        [nome, rg, peso, idade, altura])
        return res.json({
            'mensagem': 'Paciente inserido com sucesso',
        })

    }
    catch(error){
        console.log(error)
        return res.status(500).json(`Erro interno do servidor`)
    }
}

// função para remover paciente
const removePaciente = async(req:Request, res: Response): Promise<Response> => {
    try{
        //recupera o id informado pelo usuário
        let rg = parseInt(req.params.rg)
        await pool.query('delete from paciente where id = $1', [rg])
        return res.json('Paciente removido com sucesso')
    }
    catch(error){
        console.log(error)
        return res.status(500).json(`Erro interno do servido`)
    }
}

// função para atualizar paciente
const atualizaPaciente = async(req:Request, res: Response): Promise<Response> => {
    try{
        // atualiza pelo rg
        let rg = parseInt(req.params.rg)
        // informação para atualizar
        let {nome, peso, idade, altura} = req.body
        await pool.query('update paciente set nome = $1, peso = $2, idade= $3, altura = $4 where tg = $5',
        [nome, peso, idade, altura, rg])
        return res.json('Paciente atualizado com sucesso')
    }
    catch(error){
        console.log(error)
        return res.status(500).json(`Erro interno do servido`)
    }
}
export {getPacientes, addPaciente, removePaciente, atualizaPaciente}