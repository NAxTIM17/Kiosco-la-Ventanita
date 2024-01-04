import { createApp } from "./src/app.js";
import { ProductoModel } from './src/Api/models/ProductoModel.js'
import { UserModel } from './src/Api/models/UserModel.js'
import { SalesModel } from "./src/Api/models/SalesModel.js";

createApp({productoModel : ProductoModel, userModel : UserModel, salesModel : SalesModel})