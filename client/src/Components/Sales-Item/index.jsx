import './Sales-Item.css'
import { Divider, Card, CardBody, Button} from "@nextui-org/react"
import { useState } from 'react'

function ProductItem({ProductName}){
    const[add, setAdd] = useState(0)

    const handleClickAdd = () =>{
            setAdd(add + 1)
    }
    const handleClickSub = () =>{
        if(add > 0){
            setAdd(add - 1)
        }
        
    }
    return(
        <>
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
                        <div className="CardProduct">
                           <h3>{ProductName}</h3>
                        </div>
               </div>
            </CardBody>
        </Card>
        </>
    )
}

export default ProductItem