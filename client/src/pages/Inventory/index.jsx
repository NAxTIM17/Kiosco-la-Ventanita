import "./inventory.css";
import { useEffect, useState } from "react";
import SearchInput from "../../Components/Search";
import TableProducts from "../../Components/Table";
import axios from "axios";

const columns = [
  {
    key: "nombre",
    label: "PRODUCTO",
  },

  {
    key: "cantidad",
    label: "CANTIDAD",
  },
  {
    key: "descripcion",
    label: "DESCRIPCION",
  },
  {
    key: "precio",
    label: "PRECIO",
  },
];
function Inventory() {
  const [filterText, setFilterText] = useState("");
  const [productos, setProductos] = useState([]);
  const [outStock, setOutStock] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get("http://localhost:8000/productos");
      setProductos(data.filter(product => product.cantidad !== 0));
      setOutStock(data.filter(product => product.cantidad === 0));
    };
    getProducts();
  }, []);

  //creo un array dependiendo de lo que se busque y se lo paso a la table
  const filter = productos.filter((product) =>
    product.nombre.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <>
      <div className="inventory-container">
        <div className="inventory-container-table">
          <div className="container-table-search">
            <SearchInput
              filterText={filterText}
              onFilterTextChange={setFilterText}
            />
          </div>
          <div className="container-table">
            <div className="stock-container">
              <h1>STOCK</h1>
              <div className="stock">
                <TableProducts className="table" Columns={columns} Items={filter} />
              </div>
            </div>
            <div>
              <h1>SIN STOCK</h1>
              <div className="stock">
                <TableProducts className="table-outStock" Columns={columns} Items={outStock} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Inventory;
