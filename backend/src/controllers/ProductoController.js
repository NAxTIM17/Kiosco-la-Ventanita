import { ProductoModel } from "../API/models/ProductoModel.js"


export class ProductoController {

    constructor ({ productoModel }){
        this.productoModel = productoModel
    }

    getAll = async (req ,res) => {
        const productos = await this.productoModel.getAll()
        res.json(productos)
    }

}