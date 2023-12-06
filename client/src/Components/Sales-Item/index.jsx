import './Sales-Item.css'
import { Divider, Card, CardBody, Button} from "@nextui-org/react"
import { useState } from 'react'
import { DeleteIcon } from '../DeleteIcon/DeleteIcon'

function ProductItem({ProductName, Price, Func}){
    const[add, setAdd] = useState(1)

    const handleClickAdd = () =>{
            setAdd(add + 1)
    }
    const handleClickSub = () =>{
        if(add > 1){
            setAdd(add - 1)
        }
    }

    //paso info para el padre
    Func(add)
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
                           <h3>{Price}</h3>
                        </div>
                        <div className="CardDeleteIcon">
                            <span className="text-lg text-danger active:opacity-50">
                                <DeleteIcon className = " cursor-pointer " onClick = {(e) => console.log(e)}/>
                            </span>
                        </div>
                </div>
               </div>
            </CardBody>
        </Card>
    )
}

export default ProductItem