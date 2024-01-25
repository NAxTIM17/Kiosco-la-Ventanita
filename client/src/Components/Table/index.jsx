import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react"


function TableProducts ({Columns, Items, className}){
    return(
        <Table
        isHeaderSticky
        className={className ? className : ""}
        aria-label="Example table with client side sorting"
        >
            <TableHeader columns={Columns}>
                {(columns) => <TableColumn key={columns.key}>{columns.label}</TableColumn>}
            </TableHeader>
            <TableBody items={Items}>
                {(item)=>(
                    <TableRow key={item.id} >
                        {(columnskey)=> <TableCell>{getKeyValue(item, columnskey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}

export default TableProducts