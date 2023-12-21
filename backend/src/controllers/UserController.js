

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
        const newUser = await this.userModel.create({input : result})
            res.status(200).json(newUser)
    }
    getByName = async (req, res) =>{
        const { name } = (req.params)
        const nameUser = await this.userModel.getByName({ name })        
        if(nameUser){
            res.json(nameUser)
        }else{
            res.status(404).json({message : "User Not Found"})
        }
            
    }
}

