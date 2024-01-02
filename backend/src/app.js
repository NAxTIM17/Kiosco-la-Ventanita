import express ,{ json } from 'express'
import cors from 'cors'
import { createProductoRouter } from './Api/routes/ProductoRoute.js'
import { createUserRoute } from './Api/routes/UserRoute.js'
import { loginRouter } from './Api/routes/LoginRoutes.js'
import dotenv from 'dotenv/config.js'

export const createApp = ({productoModel, userModel }) =>{

    const app = express()
    app.disable('x-powered-by')
    app.use(json())
    app.use(cors())
    
    const PORT = process.env.PORT ?? 1234
    console.log(process.env.SALT)
    app.use('/productos', createProductoRouter({ productoModel }))
    app.use('/usuarios', createUserRoute({ userModel }))
    app.use('/login', loginRouter({ userModel }))
    
    
    app.listen(PORT, ()=>{
        console.log(`server listening on port http://localhost:${PORT}`)
    })
    
}