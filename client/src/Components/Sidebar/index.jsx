import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import { Link } from "react-router-dom";
import './SideBar.css'
import UserIcon from "../iconUser";

function SideBar(){

  const AcmeLogo = () => (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
    return(
        <>
            <div className="navBar">
              <div className="navBar-Title">
                <h1>Side Bar</h1>
              </div>
              <div className="navBar-buttons">  
                <div className="navBar-buttons-pages">
                  <Button className="navBar-button" color="primary" variant="shadow"><Link to = "/">Home</Link></Button>
                  <Button className="navBar-button" color="primary" variant="shadow"><Link to = "/sales">Go to sales</Link></Button>
                  <Button className="navBar-button" color="primary" variant="shadow" ><Link to = "/purchases">Go to purchases</Link></Button>
                  <Button className="navBar-button" color="primary" variant="shadow" ><Link to = "/inventory">Inventory</Link></Button>
                </div>
                  <Button className="navBar-button" color="danger" variant="shadow" startContent = {<UserIcon/>} >Log Out</Button>
              </div>
            </div>
        </>
    )
}

export default SideBar