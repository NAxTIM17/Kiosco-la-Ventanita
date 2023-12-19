import { createApp } from "./src/app.js";
import { ProductoModel } from "./src/API/models/ProductoModel.js";
import { UserModel } from "./src/API/models/UserModel.js";

createApp({productoModel : ProductoModel, userModel : UserModel})