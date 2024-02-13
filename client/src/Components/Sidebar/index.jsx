import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import "./SideBar.css";
import { useCookies } from "react-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShop,
  faHouse,
  faCartShopping,
  faBoxOpen,
  faArrowRightFromBracket,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { MyButton } from "../MyButton/Index";
import { Modals } from "../Modal";
import { useDisclosure } from "@nextui-org/react";
import { useContext } from "react";
import { LoginContext } from "../loginContext";

function SideBar() {
  const navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {logged, setLogged} = useContext(LoginContext)

  const handleLogOut = () => {
    setLogged(false)
    removeCookie("userInfo");
    removeCookie("Token");
    removeCookie("rol");
  };

  return (
    <>
      <div className="navBar">
        <div className="navBar-buttons">
          <div className="navBar-Title">
            <FontAwesomeIcon icon={faShop} className="nav-bar-icon" />
            <h1>Kiosco la Ventanita</h1>
          </div>
          <div className="navBar-buttons-pages">
            <MyButton
              name={"Inicio"}
              onClick={() => {
                navigate("/");
              }}
            ></MyButton>

            {cookies.rol === "administrador" ? (
              <>
                <MyButton
                  name={"Ventas"}
                  onClick={() => {
                    navigate("/sales");
                  }}
                ></MyButton>
                <MyButton
                  name={"Compras"}
                  onClick={() => {
                    navigate("/purchases");
                  }}
                ></MyButton>
                <MyButton
                  name={"Inventario"}
                  onClick={() => {
                    navigate("/inventory");
                  }}
                ></MyButton>
              </>
            ) : (
              ""
            )}
            {cookies.rol === "vendedor" ? (
              <>
                <MyButton
                  name={"Ventas"}
                  onClick={() => {
                    navigate("/sales");
                  }}
                ></MyButton>
                <MyButton
                  name={"Inventario"}
                  onClick={() => {
                    navigate("/inventory");
                  }}
                ></MyButton>
              </>
            ) : (
              ""
            )}
          </div>
          <div className="navBar-Button-logout">
            <Button className="navBar-button" color="danger" onClick={onOpen}>
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              Log Out
            </Button>
          </div>
        </div>
      </div>
      <Modals
        size={"sm"}
        isOpen={isOpen}
        Action={handleLogOut}
        onOpenChange={onOpenChange}
        modalHeader={"Log out"}
        buttonAction={"logout"}
        buttonActionColor={"danger"}
        buttonClose={"close"}
      />
    </>
  );
}

export default SideBar;
