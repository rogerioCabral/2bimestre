"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
// importa a classe Pool do pg
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    password: '123',
    database: 'paciente',
    port: 5432
});
