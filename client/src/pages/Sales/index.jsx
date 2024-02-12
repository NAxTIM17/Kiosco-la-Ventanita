import "./Sales.css";
import SearchInput from "../../Components/Search";
import { Modals } from "../../Components/Modal/index";
import { Alert } from "../../Components/Alert";
import { useCookies } from "react-cookie";
import {
  Divider,
  Card,
  CardBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import ProductItem from "../../Components/Sales-Item";
import { useEffect, useState } from "react";
import CardAutoComplete from "../../Components/Card-autoComplete";
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
    key: "precio",
    label: "PRECIO",
  },
  {
    key: "Eliminar",
    label: "ELIMINAR",
  },
];
function Sales() {
  //cookies
  const [cookies, setCookie] = useCookies();
  const [item, setItem] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [table, setTable] = useState([]);
  const [cantidades, setCantidad] = useState([]);
  const [limiteCantidad, setLimimteCantidad] = useState(0);
  const [date, setDate] = useState("");
  const [saleState, setSaleState] = useState(false);
  //Search
  const [filterText, setFilterText] = useState("");
  const [productos, setProductos] = useState([]);
  //modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  //Alert
  const [titleAlert, setTitleAlert] = useState("");
  const [typeAlert, setTypeAlert] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      //productos get
      const { data } = await axios.get("http://localhost:8000/productos");
      setProductos(data);
    };
    getProducts();
  }, []);
  const AgregarCarrito = () => {
    if (carrito.length === 0) {
      if (item === null) {
        setSaleState(true)
        setTypeAlert(false)
        setTitleAlert("SELECCIONE un producto para añadirlo")
      } else {
        let newItem = item;
        //aqui le agrego a item el campo cantidad y le doy el valor de 0.
        newItem = { ...newItem, cantidad: 0 };
        setCarrito([...carrito, newItem]);
        setLimimteCantidad(item.cantidad);
      }
    } else {
      setSaleState(true)
      setTypeAlert(false)
      setTitleAlert("No se puede agregar otro producto!!")
    }
  };
  const AgregarTable = () => {
    if (carrito.length > 0) {
      //logica de agregado a la tabla y las cantidades.
      //esta logica la tengo que cambiar pq no está clara y puede prestar a errores.
      carrito.forEach((elemento) => {
        //como el valor de mi campo cantidad es 0 hago este if para modificar su valor (mirar AgarrrarCarrito()).
        if (elemento.cantidad === 0) {
          elemento.cantidad = cantidades;
        }
      });

      setTable([...table, ...carrito]);
      EliminarProducto(0);
      //test
    } else {
      //todo: validacion visual
      setSaleState(true)
      setTypeAlert(false)
      setTitleAlert("Debe AÑADIR un producto Primero")
    }
  };
  const EliminarProducto = () => {
    setCarrito([]); //Actualizo el array de carrito.
  };
  const SumarNumeros = (array) => {
    let contador = 0;
    if (array.length > 0) {
      array.forEach((element) => {
        contador += element.precio * element.cantidad;
      });
    } else {
      return "Total";
    }

    return contador;
  };
  const LimpiarTodaLaTable = () => {
    setTable([]);
  };
  const handleSales = async () => {
    if(table.length > 0){
      table.forEach(async (venta) => {
        try {
          const { Token } = cookies;
          const response = await axios.post(
            "http://localhost:8000/sales/sale",
            {
              idProducto: venta.id,
              idUsuario: null,
              cantidad: venta.cantidad,
              total: venta.cantidad * venta.precio,
              fecha: date.replace(/-/g, "/"),
            },
            {
              headers: {
                Authorization: `Bearer ${Token}`,
                "Content-Type": "application/json",
              },
            }
          );
          if (response.data.message === "the sale was successfully registered") {
            setSaleState(true);
            setTitleAlert(response.data.message);
            setTypeAlert(true);
            LimpiarTodaLaTable();
          } else {
            setSaleState(true);
            setTitleAlert(response.data.message);
            setTypeAlert(false);
          }
        } catch (error) {
          console.log(error);
        }
      });
    }else{
        setSaleState(true)
        setTitleAlert("Debe agregar al menos un producto para venderlo!")
        setTypeAlert(false)
    }
  };

  return (
    <>
      <Alert
        type={`${typeAlert ? "success" : "danger"}`}
        title={titleAlert}
        showState={saleState}
        setSaleState={setSaleState}
      />
      <div className="Sales-Title">
        <h1>VENTAS</h1>
      </div>
      <div className="Sales">
        <div className="Sales-container">
          <div className="Sales-items">
            <div className="SearchBar-container">
              <div className="SearchBar">
                <SearchInput
                  filterText={filterText}
                  onFilterTextChange={setFilterText}
                />
              </div>
              <div className="DatePicker-container">
                <input
                  className="DatePicker"
                  type="date"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
            <CardAutoComplete
              setItem={setItem}
              item={item}
              products={productos}
              filterText={filterText}
            />
            <Button
              color="primary"
              onClick={() => {
                AgregarCarrito();
              }}
            >
              Añadir
            </Button>
            <Divider />
            <div className="Sales-item-card">
              {carrito.map((producto, index) => (
                <ProductItem
                  key={index}
                  ProductName={`Nombre: ${producto.nombre}`}
                  Price={`Precio: $${producto.precio}`}
                  limiteCantidad={limiteCantidad}
                  setCantidad={setCantidad}
                />
              ))}
            </div>
            <div className="Sales-button">
              <Button
                color="danger"
                onClick={() => {
                  EliminarProducto();
                }}
              >
                Eliminar
              </Button>
              <Button
                color="primary"
                className=""
                onClick={() => {
                  AgregarTable();
                }}
              >
                Agregar
              </Button>
            </div>
          </div>
          <div className="Sales-amount">
            <div className="SalesProducts">
              <div className="Table">
                <TableProducts
                  Items={table}
                  Columns={columns}
                  setTable={setTable}
                />
              </div>
            </div>
           
            <div className="SalesDivider">
              <Divider />
            </div>
            <div className="CardPrice">
              <Card>
                <CardBody>
                  <h1>${SumarNumeros(table)}</h1>
                </CardBody>
              </Card>
            </div>
            <div className="Sell-button-container">
              <Button
                color="success"
                onClick={onOpen}
                className="sell-button"
              >
                Vender
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Modals
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        modalHeader={"¿Quiere realizar esta venta?"}
        buttonAction={"Aceptar"}
        buttonActionColor={"success"}
        buttonClose={"Cancelar"}
        Action={handleSales}
        size={"sm"}
      />
    </>
  );
}

export default Sales;
