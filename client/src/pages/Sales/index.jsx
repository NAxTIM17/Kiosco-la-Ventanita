import "./Sales.css"
import SearchInput from "../../Components/Search"
import { Divider, Card, CardBody, Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react"
import { useState } from "react"
import ProductItem from "../../Components/Sales-Item"

function Sales (){

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
                    <ProductItem ProductName="hola"/>
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