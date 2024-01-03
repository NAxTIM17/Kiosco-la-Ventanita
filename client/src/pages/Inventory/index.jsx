import './inventory.css'
import { useState } from 'react';
import SearchInput from '../../Components/Search';
import TableProducts from '../../Components/Table';
import axios from 'axios'
import { Button } from '@nextui-org/react';
import { useCookies } from 'react-cookie';

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
      key: 'descripcion',
      label: 'DESCRIPCION'
  },
  {
      key: 'precio',
      label: 'PRECIO'
  }
]
function Inventory(){


  const [cookies, setCookie, removeCookie] = useCookies()
  const [filterText, setFilterText] = useState('')
  const [productos, setProductos] = useState([])

  //axios
  axios.get('http://localhost:8000/productos')
  .then((res)=>{
    setProductos(res.data)
  })

  const remove = () => {
    removeCookie('userInfo')
  }

  const filtrarElemento = () => {
    return productos.filter((productos) =>
    productos.nombre.toLowerCase().includes(filterText.toLowerCase()))
  }

  
  
  return(
    <>
    <div className="inventory-container">
      <div className="inventory-title">
        <h1>INVETARIO</h1>
      </div>
      <div className="inventory-container-table">
        <div className="container-table-search">
            <SearchInput filterText={filterText} onFilterTextChange={setFilterText}/>
        </div>
        <div className="container-table">
            <TableProducts Columns={columns} Items={filtrarElemento()} />
            <Button onPress={remove} >logout</Button>
        </div>
      </div>
    </div>
    </>
  )
   
}

export default Inventory