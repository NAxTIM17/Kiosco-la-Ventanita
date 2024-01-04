import connection from "../../db.js";

export class SalesModel {

    static async getAll(){
        try {
            const [ sales ] = await connection.execute('SELECT * FROM venta')
            return sales
        } catch (error) {
            console.log(error)
        }
    }
    static async create({body}){
        try {
            const {idProducto, idUsuario, cantidad, total, fecha } = body
            const result = connection.execute('INSERT INTO venta(id_producto, id_usuario, cantidad, total, fecha) VALUES(?,?,?,?,?)', [idProducto, idUsuario, cantidad, total, fecha])
            return result
        } catch (error) {
            console.log(error)
        }
    }

}