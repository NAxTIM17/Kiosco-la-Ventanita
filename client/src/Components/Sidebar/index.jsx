import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import {Link, useNavigate} from "react-router-dom";
import './SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShop, faHouse, faCartShopping, faBasketShopping, faBoxOpen,faUser } from '@fortawesome/free-solid-svg-icons';

function SideBar(){

  const navigate = useNavigate()

  

    return(
        <>
            <div className="navBar">
              <div className="navBar-Title">
                <FontAwesomeIcon icon={faShop} className="nav-bar-icon" />
                <h1>Kiosco la Ventanita</h1>
              </div>
              <div className="navBar-buttons">  
                <div className="navBar-buttons-pages">
                <Button className="navBar-button" color="primary" variant="shadow" onClick={()=>{
                    navigate("/kiosco/home")
                  }}>
                    <FontAwesomeIcon icon={faHouse} />
                    Inicio
                </Button>
                  <Button className="navBar-button" color="primary" variant="shadow" onClick={()=>{
                    navigate("/kiosco/sales")
                  }}>
                    <FontAwesomeIcon icon={faCartShopping} />
                    Ventas
                  </Button>
                  <Button className="navBar-button" color="primary" variant="shadow"  onClick={()=>{
                    navigate("/kiosco/purchases")
                  }}>
                    <FontAwesomeIcon icon={faBasketShopping} />
                    Compras
                  </Button>
                  <Button className="navBar-button" color="primary" variant="shadow" onClick={()=>{
                    navigate("/kiosco/inventory")
                  }}>
                    <FontAwesomeIcon icon={faBoxOpen} />
                    Inventario
                  </Button>
                </div>
                <div className="navBar-Button-logout">
                  <Button className="navBar-button" color="danger" variant="shadow"onClick={()=>{
                    navigate("/login")
                  }}>
                    <FontAwesomeIcon icon={faUser} />
                    Log Out
                  </Button>
                </div>
              </div>
            </div>
        </>
    )
}

export default SideBar