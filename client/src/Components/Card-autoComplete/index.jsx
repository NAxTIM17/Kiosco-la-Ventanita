import { useState } from "react";
import {Card, CardBody} from "@nextui-org/react";
import "./CardAutoComplete.css"

function CardAutoComplete({products, func, filterText}){

    const [select, setSelected] = useState(null)

  const filtrarElemento = () => {
    return products.filter((productos) =>
    productos.nombre.toLowerCase().includes(filterText.toLowerCase()))
  }
  
  let objs = filtrarElemento()
  //aqui paso de info al padre desde el hijo
  func(objs[select])
  

    return(
        <>
        <Card className="Search-Card">
            <CardBody>
            <ul className="Search-Card-items">
                {filtrarElemento().map((producto, index) => (
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
