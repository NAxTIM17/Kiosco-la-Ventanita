import Productos from "../../Providers/Products";
import {Input, Card, CardBody, Button} from "@nextui-org/react";
import { useState, useEffect } from "react";
import './Search.css'


//icono de la barra de busqueda
export const SearchIcon = (props) => (

    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
  

export default function SearchInput(props) {

  

  const [busqueda, setBusqueda] = useState('')
  const [select, setSelected] = useState(null)

  console.log(select)
  
  
  const handleFocus = (index) =>{
    setSelected(index)
  }
  
  const handleBusquedaChange = (event) => {
    setBusqueda(event.target.value)
    
    
  }
  const filtrarElemento = () => {
    return Productos.filter((productos) =>
    productos.nombre.toLowerCase().includes(busqueda.toLowerCase()))
  }
  let objs = filtrarElemento()
  //console.log(objs[select])
  props.func(objs[select])
  
  const agarrarProducto = (event) =>{
    console.log(event.target.value)
  }
  return (
      <>
    <div className="w-[340px] h-[240px] px-8 rounded-2xl flex justify-center items-center bg-gradient-to-tr from-pink-500 to-yellow-500 text-white container-Search">
      <Input
        label="Search"
        isClearable
        radius="lg"
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        placeholder="Type to search..."
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-black/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
        onChange = {handleBusquedaChange}
        value={busqueda}
        />


      <Card className="Search-Card">
        <CardBody>
        <ul className="Search-Card-items">
            {filtrarElemento().map((producto, index) => (
              <li
              key = {index} 
              onClick={(e) => handleFocus(index)} 
              className={select === index ? "Search-Card-items-focus" : ""}
              >
                <span>{producto.nombre}</span>
              </li>
              
            ))}
         </ul>
        </CardBody>
      </Card>
         
          
    </div>
    </>
  );
}

