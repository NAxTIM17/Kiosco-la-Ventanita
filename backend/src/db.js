import mysql from 'mysql2/promise'

//Datos de la base de datos
const DEFAULT_CONFIG = {
    host : 'localhost',
    user : 'root',
    port :  3306,
    password : '55964',
    database : 'kioscolaventanitadb'
}

const connection = await mysql.createConnection(DEFAULT_CONFIG)

export default connection