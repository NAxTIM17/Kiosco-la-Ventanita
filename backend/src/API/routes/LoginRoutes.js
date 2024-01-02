import { Router } from "express";
import { loginController } from "../controllers/LoginController.js";


export const loginRouter = ({userModel}) => {

    const loginRouter = Router()

    const LoginController = new loginController({userModel})

    loginRouter.post('/', LoginController.getByName)

    return loginRouter
}