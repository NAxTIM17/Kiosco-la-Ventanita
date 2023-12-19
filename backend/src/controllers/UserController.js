export class userController{

    constructor({userModel}){
        this.userModel = userModel
    }

    getAll = async (req, res) =>{
        const usuarios = await this.userModel.getAll()
        res.json(usuarios)
    }
    create = async (req, res) =>{
        const result = (req.body)
        console.log(result)
        const newUser = await this.userModel.create({input : result})
            res.status(200).json(newUser)
    }
}

