import { createApp } from "./src/app.js";
import {ProductoModel} from './src/Api/models/ProductoModel.js'
import {UserModel} from './src/Api/models/UserModel.js'

createApp({productoModel : ProductoModel, userModel : UserModel})