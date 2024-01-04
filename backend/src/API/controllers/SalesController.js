import { schemaSales } from "../../middlewares/Schemas.js"

export class salesController {
        constructor({salesModel}){
            this.salesModel = salesModel
        }

        getAll = async (req, res) => {
            const sales = await this.salesModel.getAll()
            res.json(sales)
        }


        create = async (req, res) => {
            const body = req.body
            const {error} =  schemaSales.validate(body)
            if(error){
                res.json({message: error.message})
            }else{
                const sale = await this.salesModel.create({body})
                console.log(sale)
                res.json({message: "the sale was successfully registered"})
            }

        }
}