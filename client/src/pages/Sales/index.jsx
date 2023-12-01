import "./Sales.css"
import SearchInput from "../../Components/Search"
import { Divider, Card, CardBody, Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react"
import ProductItem from "../../Components/Sales-Item"
import { DeleteIcon } from "../../Components/DeleteIcon/DeleteIcon"
import { useEffect, useState } from "react"

const columns = [
    {
        key: 'producto',
        label: 'PRODUCTO'
    },
    
    {
        key: 'cantidad',
        label: 'CANTIDAD'
    },
    
    {
        key: 'precio',
        label: 'PRECIO'
    }
]
function Sales (){


    const [item, setitem] = useState({})
    const [carrito, setCarrito] = useState([])
    const [table, setTable] = useState([])

    //me causaba el error de no poder renderizar un componente por encima de otro
    const AgarrarProducto = (productos) =>{
        useEffect(()=>{
            setitem(productos)
        },[productos])
    }
    
    const AgregarCarrito = () =>{
        setCarrito([...carrito, item])
    }

    const AgregarTable = () =>{

    }

    const EliminarProducto = (index) =>{
        carrito.splice(index,1)
        setCarrito([...carrito])//Actualizo el array de carrito
    }

    //quiero que al darle click al icono de eliminar obtenga el index del array

    return(
        <>
        <div className="Sales-Title">
            <h1>VENTAS</h1>
        </div>
        <div className="Sales">
            <div className="Sales-container">
                <div className="Sales-items">
                    <SearchInput func = {AgarrarProducto} />
                    <Button color="primary" onClick = {(e)=>{AgregarCarrito()}}>Añadir</Button>
                    <Divider/>
                <div className="Sales-item-card">
                    {
                        carrito.map((producto, index)=>(
                            <ProductItem key={index} ProductName={`Nombre: ${producto.nombre}`} Price={`Precio: $${producto.precio}`}/>
                        ))
                    }
                </div>
                <div className="Sales-button">
                    <Button color="danger" variant="shadow" onClick={(e) => {EliminarProducto()}}>Eliminar</Button>
                </div>
                </div>
                <div className="Sales-amount">
                    <div className="SalesProducts">
                        <div className="Table">
                            <Table
                            isHeaderSticky
                            className="Table-table"
                            aria-label="Example table with client side sorting"
                            >
                                <TableHeader columns={columns}>
                                    {(columns) => <TableColumn key={columns.key}>{columns.label}</TableColumn>}
                                </TableHeader>
                                <TableBody items={table}>
                                    {(item)=>(
                                        <TableRow key={item.key} >
                                            {(columnskey)=> <TableCell>{getKeyValue(item, columnskey)}</TableCell>}
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                    <div className="SalesDivider">
                        <Divider/>
                    </div>
                    <div className="CardPrice">
                        <Card>
                            <CardBody>
                                    <h2>Total</h2>
                                    {
                                        table.forEach(element => {
                                          let price =+ element.precio
                                          {<h1>{price}</h1>}
                                        })
                                    }
                            </CardBody>
                        </Card>
                    </div>
                    <div className="Sell-button-container">
                        <Button color="success" variant="shadow" className="sell-button">Vender</Button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}

export default Sales