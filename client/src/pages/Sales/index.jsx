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
import { useCallback, useEffect, useState } from "react";
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
  const [item, setitem] = useState({});
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
  //itemId

  //con este codigo evito que sales se re-renderice miles de veces.
  useEffect(() => {
    const getProducts = async () => {
      //productos get
      const { data } = await axios.get("http://localhost:8000/productos");
      setProductos(data);
    };
    getProducts();
  }, []);

  //me causaba el error de no poder renderizar un componente por encima de otro.
  const AgarrarProducto = (productos) => {
    useEffect(() => {
      //handleProduct()
      setitem(productos);
    }, [productos]);
  };
  //Funciona / faltaria insertarle el key: numero dependiendo de la cantidad de elementos que tenga el carrito.
  const AgregarCarrito = () => {
    if (carrito.length === 0) {
      if (item === undefined) {
        //todo: validacion visual
        console.log("seleccione un producto primero");
      } else {
        let newItem = item;
        //aqui le agrego a item el campo cantidad y le doy el valor de 0.
        newItem = { ...newItem, cantidad: 0 };
        setCarrito([...carrito, newItem]);
        setLimimteCantidad(item.cantidad);
      }
    } else {
      //todo: validacion visual
      console.log("No se puede Agregar otro producto");
    }
  };
  //Muestra cada vez que table se actualiza
  useEffect(() => {
    console.log("table actualizado");
  }, [setTable, table]);
  //Funciona
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
      //console.log(carrito)
      EliminarProducto(0);
      //test
    } else {
      //todo: validacion visual
      console.log("Nada para mostrar");
    }
  };

  const EliminarProducto = (index) => {
    carrito.splice(index, 1);
    setCarrito([...carrito]); //Actualizo el array de carrito.
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
    setTable([""]);
  };
  const handleSales = async () => {
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
              func={AgarrarProducto}
              products={productos}
              filterText={filterText}
            />
            <Button
              color="primary"
              variant="shadow"
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
                variant="shadow"
                onClick={() => {
                  EliminarProducto();
                }}
              >
                Eliminar
              </Button>
              <Button
                color="primary"
                variant="shadow"
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
                variant="shadow"
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
