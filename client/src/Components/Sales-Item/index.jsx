import './Sales-Item.css'
import { Divider, Card, CardBody, Button} from "@nextui-org/react"
import { useEffect, useState } from 'react'

function ProductItem({ProductName, Price, setCantidad, limiteCantidad}){
    const[add, setAdd] = useState(1)

    const handleClickAdd = () =>{
        if(limiteCantidad > add){
            setAdd(add + 1)
        }else{
            console.log("no se pueden agregar más")
        }
    }
    const handleClickSub = () =>{
        if(add > 1){
            setAdd(add - 1)
        }
    }

    //paso info para el padre y con el useEffect evito un rerender.
    useEffect(()=>{
        setCantidad(add)
    },[setCantidad, add])

    return(
        <Card className="Sales-Card">
            <CardBody>
                <div className="CardBody">
                  <div className="CardButtons">
                        <Button color="default" onClick={handleClickAdd}>
                            +
                        </Button>
                        <div className="CardNumber">
                            {add}
                        </div>
                        <Button color="default" onClick={handleClickSub}>
                            -
                        </Button>
                 </div>
                        <div className="CardDivider">
                         <Divider orientation="vertical" />
                        </div>
                <div className="Card-Info">
                        <div className="CardProduct">
                           <h3>{ProductName}</h3>
                           <h3>Cantidad</h3>
                           <h3>{Price}</h3>
                        </div>
                </div>
               </div>
            </CardBody>
        </Card>
    )
}

export default ProductItem