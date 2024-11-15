// vamos explorar o MongoDB
import {Document} from "mongoose"

// vamos criar uma classe interface que representa o paciente no documento mongodb
export interface IPaciente extends Document {
    // variaveis da interface 
    nome:string
    rg: string
    idade: number
    peso: number
    altura: number
} 