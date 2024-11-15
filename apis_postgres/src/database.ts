// importa a classe Pool do pg
import {Pool} from 'pg'

export const pool = new Pool({
    user:'postgres',
    host: 'localhost',
    password: '123',
    database: 'paciente',
    port: 5432
})