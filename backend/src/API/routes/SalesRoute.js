import { Router } from "express";
import { salesController } from "../controllers/SalesController.js";
import jwtHandler from "../../middlewares/JwtHandler.js";

export const salesRouter = ({salesModel}) => {

    const salesRouter = Router()
    const SalesController = new salesController({salesModel})

    salesRouter.get('/', SalesController.getAll)
    salesRouter.post('/sale', jwtHandler, SalesController.create)

    return salesRouter

}