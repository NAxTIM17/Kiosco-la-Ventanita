import express ,{ json } from 'express'
import cors from 'cors'
import { createProductoRouter } from './API/routes/ProductoRoute.js'


export const createApp = ({productoModel}) =>{

    const app = express()
    app.use(json())
    app.use(cors())
    app.disable('x-powered-by')
    
    const PORT = 1234
    
    app.use('/productos', createProductoRouter({ productoModel }))
    
    app.listen(PORT, ()=>{
        console.log(`server listening on port http://localhost:${PORT}`)
    })
    
}