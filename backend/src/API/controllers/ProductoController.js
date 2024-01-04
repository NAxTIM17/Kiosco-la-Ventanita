import { schemasProduct } from "../../middlewares/Schemas.js"

export class ProductoController {

    constructor ({ productoModel }){
        this.productoModel = productoModel
    }

    getAll = async (req ,res) => {
        const productos = await this.productoModel.getAll()
        res.json(productos)
    }
    create = async (req, res) => {

        const body = req.body
        const {error} = schemasProduct.validate(body)

        if(error){
            res.json({message: error.message})
        }else{
            const product = await this.productoModel.create({body})
            console.log(product)
            res.json({message: "product crated successfully"})
        }
    }

}