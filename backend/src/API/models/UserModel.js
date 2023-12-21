import connection from "../../db.js";
import { PasswordEncrypt } from "./bcryptModel.js";

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
            const newPassword = await PasswordEncrypt(contraseña)
            await connection.query('INSERT INTO usuario(usuario, contraseña) VALUES (?,?);', [usuario, newPassword])
        } catch (error) {
            console.error('Error al insertar un usuario:', error);
          throw error;
        }
    }

    static async getByName({ name }) {
        try {
            const [user] = await connection.query('SELECT * FROM usuario WHERE usuario = ?;', [name])
            console.log(user)
            return user
        } catch (error) {
            console.error('Error al obtener  un usuario:', error);
            throw error
        }
    }

}