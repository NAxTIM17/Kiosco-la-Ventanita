import connection from "../../db.js";


export class ProductoModel{

    static async getAll() {
        try {
          const [productos] = await connection.execute('SELECT * FROM producto;');
          return productos;
        } catch (error) {
          console.error('Error al obtener productos:', error);
          throw error; // Puedes manejar el error de otra manera según tus necesidades
        }
      }
      static async create({body}){
        try{
          const { nombre, descripcion, cantidad, precio } = body
          const [product] = await connection.execute('INSERT INTO producto(nombre, descripcion, cantidad, precio) VALUES (?,?,?,?)', [nombre, descripcion, cantidad, precio])
          return product
        }catch(err){
          console.log(err)
        }
      }
}