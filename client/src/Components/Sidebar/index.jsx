import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import {Link, useNavigate} from "react-router-dom";
import './SideBar.css'
import UserIcon from "../iconUser";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShop } from '@fortawesome/free-solid-svg-icons';

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
                    navigate("/")
                  }}>Inicio</Button>
                  <Button className="navBar-button" color="primary" variant="shadow" onClick={()=>{
                    navigate("/sales")
                  }}>Ventas</Button>
                  <Button className="navBar-button" color="primary" variant="shadow"  onClick={()=>{
                    navigate("/purchases")
                  }}>Compras</Button>
                  <Button className="navBar-button" color="primary" variant="shadow" onClick={()=>{
                    navigate("/inventory")
                  }}>Inventario</Button>
                </div>
                <div className="navBar-Button-logout">
                  <Button className="navBar-button" color="danger" variant="shadow" startContent = {<UserIcon/>} >Log Out</Button>
                </div>
              </div>
            </div>
        </>
    )
}

export default SideBar