import connection from "../../db.js";
import { PasswordEncrypt } from "../../middlewares/bcryptHandle.js";

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

    static async create({body}){
        try {
            const {
                usuario,
                contraseña,
                rol
            } = body
            const newPassword = await PasswordEncrypt(contraseña)
            const result = await connection.query('INSERT INTO usuario(usuario, contraseña, rol) VALUES (?,?,?);', [usuario, newPassword, rol])
            return result
        } catch (error) {
            console.error('Error al insertar un usuario:', error);
          throw error;
        }
    }

    static async getByName({ userName }) {
        try {
            const [ user ] = await connection.query('SELECT * FROM usuario WHERE usuario = ?;', [userName])
            return user
        } catch (error) {
            console.error('Error al obtener  un usuario:', error);
            throw error
        }
    }

    static async updatePassword({body}){
        try{
            console.log(body)
            const { password, userName } = body
            const hashedPassword = await PasswordEncrypt(password)
            const response = await connection.execute('UPDATE usuario SET contraseña = ? WHERE usuario = ?',[hashedPassword, userName])
            console.log(response)
            return response
        }catch(err){
            console.log(err)
        }

    }

}