import { useState } from "react";
import {Card, CardBody} from "@nextui-org/react";
import "./CardAutoComplete.css"

function CardAutoComplete({products, setItem, item,  filterText}){
    const filter = products.filter(product => product.nombre.toLowerCase().includes(filterText.toLowerCase()))


    

    return(
        <>
        <Card className="Search-Card">
            <CardBody>
            <ul className="Search-Card-items">
                {filter.map((producto, index) => (
                    <li
                    key = {index} 
                    onClick={() => setItem(producto)} 
                    className={item?.nombre === producto.nombre ? "Search-Card-items-focus" : ""}
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
