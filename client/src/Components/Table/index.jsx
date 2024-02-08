import "./table.css";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function TableProducts({ Columns, Items, className, setTable }) {
  return (
    <Table
      isHeaderSticky
      className={className ? className : ""}
      aria-label="Example table with client side sorting"
    >
      <TableHeader columns={Columns}>
        {(columns) => (
          <TableColumn key={columns.key}>
            {columns.label === "ELIMINAR" ? (
              <FontAwesomeIcon icon={faTrash} />
            ) : (
              columns.label
            )}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody>
        {Items.map((item, rowIndex) => (
          <TableRow key={rowIndex}>
            {Columns.map((col, colIndex) => (
              <TableCell key={`${rowIndex}-${colIndex}`}>
                {col.key === "Eliminar" ? (
                  <FontAwesomeIcon
                   className="table-row"
                    icon={faTrash}
                    onClick={() => {
                      setTable(Items.filter(a => a.id !== item.id))
                    }}
                  />
                ) : (
                  item[col.key]
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default TableProducts;
