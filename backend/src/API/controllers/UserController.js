

export class userController{

    constructor({userModel}){
        this.userModel = userModel
    }

    getAll = async (req, res) =>{
        const usuarios = await this.userModel.getAll()
        res.json(usuarios)
    }
    create = async (req, res) =>{
        const body = req.body
        console.log(body)
        const newUser = await this.userModel.create({body})
        if(newUser){
            res.status(200).json({message : "User Created"})
        }else{
            res.status(400).json({message : "Bad Request"})
        }
    }
    updatePassword = async (req, res) =>{
        const body = req.body
        const newPassword = await this.userModel.updatePassword({body})
        if(newPassword){
            res.status(200).json({message : "User Updated"})
        }else{
            res.status(400).json({message : "Bad Request"})
        }
    }
}

