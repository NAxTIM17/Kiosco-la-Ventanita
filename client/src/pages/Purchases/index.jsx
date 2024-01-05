import "../Sales/Sales.css"
import SearchInput from "../../Components/Search"
import { Divider, Card, CardBody, Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react"
import ProductItem from "../../Components/Sales-Item"
import { useEffect, useState } from "react"
import CardAutoComplete from "../../Components/Card-autoComplete"
//productos get
import Productos from "../../Providers/Products";

const columns = [
    {
        key: 'nombre',
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
function Purchases (){

    console.log("rendering purchases...")
    const [item, setitem] = useState({})
    const [carrito, setCarrito] = useState([])
    const [table, setTable] = useState([])
    const [cantidades, setCantidad] = useState([])
    //Search
    const [filterText, setFilterText] = useState('')


    //me causaba el error de no poder renderizar un componente por encima de otro
    const AgarrarProducto = (productos) =>{
        useEffect(()=>{
            setitem(productos)
        },[productos])
    }
    //Funciona / faltaria insertarle el key: numero dependiendo de la cantidad de elementos que tenga el carrito
    const AgregarCarrito = () =>{
        console.log(item)
        if(carrito.length === 0){
            if(item === undefined ){
                console.log("seleccione un producto primero")
            }else{
                let newItem = item
                //aqui le agrego a item el campo cantidad y le doy el valor de 0.
                newItem = {...newItem, cantidad: 0}
                setCarrito([...carrito, newItem])
            }
        }else{
            console.log("No se puede Agregar otro producto")
        }
    }
    //Muestra cada vez que table se actualiza
    useEffect(()=>{
        console.log("table actualizado")
        console.log(table)
    },[setTable, table])
    //Funciona
    const AgregarTable = () =>{
        if(carrito.length > 0){
            //logica de agregado a la tabla y las cantidades
            carrito.forEach((elemento)=>{if(elemento.cantidad === 0){
                elemento.cantidad = cantidades[0]
                console.log("if")
            }else{
                console.log("fuera del if")   
            }})


            setTable([...table, ...carrito])
            console.log(carrito)
            EliminarProducto(0)
        }else{
            console.log("Nada para mostrar")
        }
    }
    //missing the index product
    const EliminarProducto = (index) =>{
        carrito.splice(index,1)
        setCarrito([...carrito])//Actualizo el array de carrit
    }
    //Done
    const AgarrarCantidad = (cantidad) =>{
        useEffect(()=>{
            let contador = 0
            contador += cantidad
            setCantidad([contador])
        },[cantidad])
    }
    //funciona xd
    const SumarNumeros = (array) =>{
         let contador = 0
        if(array.length > 0){
            array.forEach(element => {
                contador += element.precio * element.cantidad
            });
        }else{
            return("Total")
        }

        return contador
    }

    const LimpiarTable = () =>{
        table.splice(0,1)
        setTable([...table])
    }

    //quiero que al darle click al icono de eliminar obtenga el index del array
    return(
        <>
        <div className="Sales-Title">
            <h1>COMPRAS</h1>
        </div>
        <div className="Sales">
            <div className="Sales-container">
                <div className="Sales-items">
                    <SearchInput func = {AgarrarProducto} filterText = {filterText} onFilterTextChange = {setFilterText} products={Productos} />
                    <CardAutoComplete func = {AgarrarProducto} products = {Productos} filterText = {filterText}/>
                    <Button color="primary" onClick = {()=>{AgregarCarrito()}}>Añadir</Button>
                    <Divider/>
                <div className="Sales-item-card">
                    {
                        carrito.map((producto, index)=>(
                            <ProductItem key={index} ProductName={`Nombre: ${producto.nombre}`} Price={`Precio: $${producto.precio}`} Func={AgarrarCantidad}/>
                        ))
                    }
                </div>
                <div className="Sales-button">
                    <Button color="primary" variant="shadow" className="" onClick={() => {AgregarTable()}}>Agregar</Button>
                    <Button color = "danger" onClick={()=> {EliminarProducto()}} >Eliminar</Button>

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
                                        <TableRow key={item.id} >
                                            {(columnskey)=> <TableCell>{getKeyValue(item, columnskey)}</TableCell>}
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                    <Button color="danger" variant="shadow" onClick={()=> {LimpiarTable()}}>
                        Limpiar Tabla
                    </Button>
                    <div className="SalesDivider">
                        <Divider/>
                    </div>
                    <div className="CardPrice">
                        <Card>
                            <CardBody>
                                   <h1>
                                    $
                                    {SumarNumeros(table)}
                                    </h1>
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

export default Purchases