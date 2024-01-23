import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import './SideBar.css'
import { useCookies } from 'react-cookie'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShop, faHouse, faCartShopping, faBasketShopping, faBoxOpen, faArrowRightFromBracket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Modals } from "../Modal";
import {useDisclosure} from "@nextui-org/react";

function SideBar(){

  const navigate = useNavigate()

  const [cookies, setCookie, removeCookie] = useCookies()
  const {isOpen, onOpen, onOpenChange} = useDisclosure();


  const handleLogOut = () => {
    removeCookie("userInfo");
  };

    return(
        <>
            <div className="navBar">
              <div className="navBar-Title">
                <FontAwesomeIcon icon={faShop} className="nav-bar-icon" />
                <h1>Kiosco la Ventanita</h1>
              </div>
              <div className="navBar-buttons">  
                <div className="navBar-buttons-pages">


                  <Button className="navBar-button" color="primary" onClick={()=>{
                      navigate("/")
                    }}>
                      <FontAwesomeIcon icon={faHouse} />
                      Inicio
                  </Button>

                    {cookies.rol === "administrador" ? (
                      <>
                        <Button className="navBar-button" color="primary" onClick={()=>{
                          navigate("/sales")
                        }}>
                          <FontAwesomeIcon icon={faCartShopping} />
                          Ventas
                        </Button>

                        <Button className="navBar-button" color="primary"  onClick={()=>{
                          navigate("/purchases")
                        }}>
                          <FontAwesomeIcon icon={faStore} />
                          Compras
                        </Button>
                        <Button className="navBar-button" color="primary" onClick={()=>{
                          navigate("/inventory")
                        }}>
                          <FontAwesomeIcon icon={faBoxOpen} />
                          Inventario
                        </Button>
                      </>
                    ) : ""}
                    {
                      cookies.rol === "vendedor" ? (
                        <>
                        <Button className="navBar-button" color="primary" onClick={()=>{
                          navigate("/sales")
                        }}>
                          <FontAwesomeIcon icon={faCartShopping} />
                          Ventas
                        </Button>

                        <Button className="navBar-button" color="primary" onClick={()=>{
                        navigate("/inventory")
                      }}>
                        <FontAwesomeIcon icon={faBoxOpen} />
                        Inventario
                      </Button>
                        </>
                      ):
                      (
                        ""
                      )
                    }
                  
                  

                </div>
                <div className="navBar-Button-logout">
                  <Button className="navBar-button" color="danger" onClick={onOpen}>
                    <FontAwesomeIcon icon={faArrowRightFromBracket}/>
                    Log Out
                  </Button>

                </div>
              </div>
            </div>
            <Modals size={"sm"} isOpen={isOpen} Action={handleLogOut} onOpenChange={onOpenChange} modalHeader={"Log out"} buttonAction={"logout"} buttonActionColor={"danger"} buttonClose={"close"}/>
        </>
    )
}

export default SideBar