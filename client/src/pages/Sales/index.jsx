import "./Sales.css"
import SearchInput from "../../Components/Search"
import { Divider, Card, CardBody, Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react"
import { useState } from "react"

function Sales (){

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
        <div className="Sales-Title">
            <h1>SALES</h1>
        </div>
        <div className="Sales">
            <div className="Sales-container">
                <div className="Sales-items">
                    <SearchInput/>
                    <Divider/>
                <div className="Sales-item-card">
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
                                    <h3>ProductoProductoProductoProductoProductoProducto</h3>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
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
                                    <h3>ProductoProductoProductoProductoProductoProducto</h3>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
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
                                    <h3>ProductoProductoProductoProductoProductoProducto</h3>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
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
                                    <h3>ProductoProductoProductoProductoProductoProducto</h3>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
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
                                    <h3>ProductoProductoProductoProductoProductoProducto</h3>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
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
                                    <h3>ProductoProductoProductoProductoProductoProducto</h3>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                    
                    
                    
                </div>
                    
                </div>
                <div className="Sales-amount">
                    <div className="SalesProducts">
                        <div className="Table">
                            <Table
                            isHeaderSticky
                            className="Table-table"
                            >
                                <TableHeader>
                                    <TableColumn>Producto</TableColumn>
                                    <TableColumn>Cantidad</TableColumn>
                                    <TableColumn>Precio</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    <TableRow key="1">
                                        <TableCell>Gaseosa</TableCell>
                                        <TableCell>20</TableCell>
                                        <TableCell>$5000</TableCell>
                                    </TableRow>

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
                                    <h1>$100</h1>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}

export default Sales