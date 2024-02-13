import { Routes, Route } from "react-router-dom";
import { useCookies } from "react-cookie";
//Componentes de las rutas
import Home from "../../pages/Home";
import Sales from "../../pages/Sales";
import Inventory from "../../pages/Inventory";
import Purchases from "../../pages/Purchases";
import Login from "../../pages/Login";
import Dashboard from "../../Dashboard";
import { ProtectedRoute } from "../ProtectedRoute";
import { useContext } from "react";
import { LoginContextProvider } from "../loginContext";
import { LoginContext } from "../loginContext";

function BusinessRouter() {
  const [cookies, setCokkie, removeCookie] = useCookies();
  const { logged, setLogged } = useContext(LoginContext);

  console.log(logged);

  return cookies.userInfo && logged ? (
    <Dashboard>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sales" element={<Sales />} />
        <Route
          path="/purchases"
          element={
            <ProtectedRoute user={cookies.rol}>
              <Purchases />
            </ProtectedRoute>
          }
        />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </Dashboard>
  ) : (
    <Login />
  );
}

export default BusinessRouter;
