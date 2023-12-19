import connection from "../../db.js";

export class UserModel{

    static async getAll(){
        try {
            const [user] = await connection.query('SELECT * FROM usuario;')
            return user
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
          throw error;
        }
    }

    static async create({input}){
        try {
            const {
                usuario,
                contraseña
            } = input 
            await connection.query('INSERT INTO usuario(usuario, contraseña) VALUES (?,?);', [usuario, contraseña])
        } catch (error) {
            console.error('Error al insertar un usuario:', error);
          throw error;
        }
    }

}