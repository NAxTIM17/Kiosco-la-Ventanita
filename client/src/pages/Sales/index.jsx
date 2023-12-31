import "./Sales.css"
import SearchInput from "../../Components/Search"
import { Modals } from '../../Components/Modal/index'
import { Divider, Card, CardBody, Button, useDisclosure} from "@nextui-org/react"
import ProductItem from "../../Components/Sales-Item"
import { useEffect, useState } from "react"
import CardAutoComplete from "../../Components/Card-autoComplete"
import TableProducts from "../../Components/Table"
import axios from 'axios'


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
function Sales (){
    
    const [item, setitem] = useState({})
    const [carrito, setCarrito] = useState([])
    const [table, setTable] = useState([])
    const [cantidades, setCantidad] = useState([])
    //Search
    const [filterText, setFilterText] = useState('')
    const [productos, setProductos] = useState([])
    //modal
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

        //con este codigo evito que sales se re-renderice miles de veces.
        useEffect(()=>{
            const getProducts = async () => {
                //productos get
                const { data } = await axios.get('http://localhost:8000/productos')
                   setProductos( data )
            }
            getProducts()
        },[])


    //me causaba el error de no poder renderizar un componente por encima de otro.
    const AgarrarProducto = (productos) =>{
        useEffect(()=>{
            //handleProduct()
            setitem(productos)
        },[productos])
    }
    //Funciona / faltaria insertarle el key: numero dependiendo de la cantidad de elementos que tenga el carrito.
    const AgregarCarrito = () =>{
        console.log(item)
        if(carrito.length === 0){
            if(item === undefined ){
                //todo: validacion visual
                console.log("seleccione un producto primero")
            }else{
                let newItem = item
                //aqui le agrego a item el campo cantidad y le doy el valor de 0.
                newItem = {...newItem, cantidad: 0}
                setCarrito([...carrito, newItem])
            }
        }else{
            //todo: validacion visual
            console.log("No se puede Agregar otro producto")
        }
    }
    //Muestra cada vez que table se actualiza
    useEffect(()=>{
        console.log("table actualizado")
    },[setTable, table])
    //Funciona
    const AgregarTable = () =>{
        if(carrito.length > 0){
            //logica de agregado a la tabla y las cantidades.
            //esta logica la tengo que cambiar pq no está clara y puede prestar a errores.

            carrito.forEach((elemento)=>{
                //como el valor de mi campo cantidad es 0 hago este if para modificar su valor (mirar AgarrrarCarrito()).
            if(elemento.cantidad === 0){
                elemento.cantidad = cantidades[0]
            }})


            setTable([...table, ...carrito])
            //console.log(carrito)
            EliminarProducto(0)
        }else{
            //todo: validacion visual
            console.log("Nada para mostrar")
        }
    }

    const EliminarProducto = (index) =>{
        carrito.splice(index,1)
        setCarrito([...carrito])//Actualizo el array de carrito.
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

    const handleSales = () =>{
        console.log("venta...")
    }

    return(
        <>
        <div className="Sales-Title">
            <h1>VENTAS</h1>
        </div>
        <div className="Sales">
            <div className="Sales-container">
                <div className="Sales-items">
                    <SearchInput filterText = {filterText} onFilterTextChange = {setFilterText}  />
                    <CardAutoComplete func = {AgarrarProducto} products = {productos} filterText = {filterText}/>
                    <Button color="primary" variant="shadow" onClick = {()=>{AgregarCarrito()}}>Añadir</Button>
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
                    <Button color="danger" variant="shadow" onClick={()=> {EliminarProducto()}} >Eliminar</Button>
                </div>
                </div>
                <div className="Sales-amount">
                    <div className="SalesProducts">
                        <div className="Table">
                           <TableProducts Items={table} Columns={columns}/>
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
                        <Button color="success" variant="shadow" onClick={onOpen} className="sell-button">Vender</Button>
                    </div>
                </div>
            </div>
        </div>
        <Modals isOpen={isOpen} onOpenChange={onOpenChange} modalHeader={"¿Quiere realizar esta venta?"} buttonAction={"Aceptar"} buttonActionColor={"success"} buttonClose={"Cancelar"} Action={handleSales} size={"sm"}/>
        </>
    )

}

export default Sales