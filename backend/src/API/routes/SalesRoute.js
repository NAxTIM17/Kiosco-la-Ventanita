import { Router } from "express";
import { salesController } from "../controllers/SalesController.js";

export const salesRouter = ({salesModel}) => {

    const salesRouter = Router()
    const SalesController = new salesController({salesModel})

    salesRouter.get('/',SalesController.getAll)
    salesRouter.post('/sale', SalesController.create)

    return salesRouter

}