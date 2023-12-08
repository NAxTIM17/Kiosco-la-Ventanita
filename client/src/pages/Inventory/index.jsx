import './inventory.css'
import React, { useState } from 'react';
import SearchInput from '../../Components/Search';
import TableProducts from '../../Components/Table';

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

  const [item, setItem] = useState([])
  
  return(
    <>
    <div className="inventory-container">
      <div className="inventory-title">
        <h1>INVETARIO</h1>
      </div>
      <div className="inventory-container-table">
        <div className="container-table-search">
            <SearchInput/>
        </div>
        <div className="container-table">
            <TableProducts Columns={columns} Items={item}/>
        </div>
      </div>
    </div>
    </>
  )
   
}

export default Inventory