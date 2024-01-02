import { DecryptPassword } from "../../middlewares/bcryptHandle.js"

export class loginController{
    constructor({userModel}){
        this.userModel = userModel
    }


    getByName = async (req, res) =>{
        const { userName, userPassword } = req.body
        const [ user ] = await this.userModel.getByName({ userName })
        console.log(user)
        //por si no me trae nada
        if(user){
            const comparePassword = await DecryptPassword(userPassword, user.contraseña)

            console.log(comparePassword)        

            if(comparePassword){
                res.json( user )
            }else{
                res.status(400).json({message : "Bad Request"})
            }
        }else{
            res.status(404).json({message : "User Not Found"})
        }
            
    }


}