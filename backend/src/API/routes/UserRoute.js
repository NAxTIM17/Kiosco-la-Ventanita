import { Router } from "express";
import { userController } from "../../controllers/UserController.js";

export const createUserRoute = ({userModel}) =>{

    const userRoute = Router()

    const UserController = new userController({userModel})

    userRoute.get('/', UserController.getAll)
    userRoute.post('/', UserController.create)
    userRoute.get('/:name' , UserController.getByName)

    return userRoute

}