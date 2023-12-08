import './inventory.css'
import React from 'react';
import SearchInput from '../../Components/Search';

function Inventory(){
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

        </div>
      </div>
    </div>
    </>
  )
   
}

export default Inventory