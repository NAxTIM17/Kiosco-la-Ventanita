import './inventory.css'
import React, { useState } from 'react';
import SearchInput from '../../Components/Search';
import TableProducts from '../../Components/Table';
import Productos from '../../Providers/Products';

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

  const [filterText, setFilterText] = useState('')

  const filtrarElemento = () => {
    return Productos.filter((productos) =>
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
        </div>
      </div>
    </div>
    </>
  )
   
}

export default Inventory