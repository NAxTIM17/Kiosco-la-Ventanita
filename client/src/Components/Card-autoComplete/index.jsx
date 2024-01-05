import { useState } from "react";
import {Card, CardBody} from "@nextui-org/react";
import "./CardAutoComplete.css"

function CardAutoComplete({products, func, filterText}){

    const [select, setSelected] = useState(null)


    const filter = products.filter(product => product.nombre.toLowerCase().includes(filterText.toLowerCase()))
  
  
  let objs = filter
  //aqui paso de info al padre desde el hijo
  func(objs[select])
  

    return(
        <>
        <Card className="Search-Card">
            <CardBody>
            <ul className="Search-Card-items">
                {filter.map((producto, index) => (
                    <li
                    key = {index} 
                    onClick={() => setSelected(index)} 
                    className={select === index ? "Search-Card-items-focus" : ""}
                    >
                    <span>{producto.nombre}</span>
                </li>
                ))}
            </ul>
            </CardBody>
        </Card>
    </>
    )
}

export default CardAutoComplete
