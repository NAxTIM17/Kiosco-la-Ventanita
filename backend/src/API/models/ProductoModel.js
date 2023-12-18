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
}