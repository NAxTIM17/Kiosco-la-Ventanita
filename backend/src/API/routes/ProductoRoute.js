import { Router } from "express";
import { ProductoController } from "../../controllers/ProductoController.js";

export const createProductoRouter = ({ productoModel }) => {

    const productoRouter = Router()

    const productoController = new ProductoController({productoModel})

    //rutas
    productoRouter.get('/', productoController.getAll)


    return productoRouter

}