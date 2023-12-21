import express ,{ json } from 'express'
import cors from 'cors'
import { createProductoRouter } from './API/routes/ProductoRoute.js'
import { createUserRoute } from './API/routes/UserRoute.js'
import dotenv from 'dotenv/config.js'

export const createApp = ({productoModel, userModel }) =>{

    const app = express()
    app.disable('x-powered-by')
    app.use(json())
    app.use(cors())
    
    const PORT = process.env.PORT ?? 1234
    console.log(process.env.SALT)
    app.use('/productos', createProductoRouter({ productoModel }))
    app.use('/usuarios', createUserRoute({userModel}))
    
    
    app.listen(PORT, ()=>{
        console.log(`server listening on port http://localhost:${PORT}`)
    })
    
}