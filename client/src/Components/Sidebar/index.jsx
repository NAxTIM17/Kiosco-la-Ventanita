import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import {Link, useNavigate} from "react-router-dom";
import './SideBar.css'
import UserIcon from "../iconUser";

function SideBar(){

  const navigate = useNavigate()

  

    return(
        <>
            <div className="navBar">
              <div className="navBar-Title">
                <h1>Side Bar</h1>
              </div>
              <div className="navBar-buttons">  
                <div className="navBar-buttons-pages">
                <Button className="navBar-button" color="primary" variant="shadow" onClick={()=>{
                    navigate("/")
                  }}>Home</Button>
                  <Button className="navBar-button" color="primary" variant="shadow" onClick={()=>{
                    navigate("/sales")
                  }}>Sales</Button>
                  <Button className="navBar-button" color="primary" variant="shadow"  onClick={()=>{
                    navigate("/purchases")
                  }}>Purchase</Button>
                  <Button className="navBar-button" color="primary" variant="shadow" onClick={()=>{
                    navigate("/inventory")
                  }}>Inventory</Button>
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