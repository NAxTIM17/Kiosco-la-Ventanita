import { DecryptPassword } from "../../middlewares/bcryptHandle.js"
import jwt from 'jsonwebtoken'
import "dotenv/config"

export class loginController{
    constructor({userModel}){
        this.userModel = userModel
    }


    getByName = async (req, res) =>{
        const { userName, userPassword } = req.body
        const [ user ] = await this.userModel.getByName({ userName })
        //por si no me trae nada
        if(user){
            const comparePassword = await DecryptPassword(userPassword, user.contraseña)

            if(comparePassword){
                //payload del token
                const payloadToken = {
                    id: user.id,
                    name: user.name,
                }
                //genero el token 
                const token = jwt.sign(
                    payloadToken, process.env.SECRET_TOKEN_SIGN
                )
                //separo el id y el nombre de usuario para no devolver la contraseña
                const { usuario, rol } = user
                    
                res.send({
                    userName: usuario, 
                    rol: rol,
                    token: token
                })
            }else{
                res.status(400).json({message : "Bad Request"})
            }

        }else{
            res.status(404).json({message : "User Not Found"})
        }
            
    }


}