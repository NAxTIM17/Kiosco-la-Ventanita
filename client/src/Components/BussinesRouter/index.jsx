import { Routes, Route } from "react-router-dom";
import { useCookies } from "react-cookie";
//Componentes de las rutas
import Home from "../../pages/Home";
import Sales from "../../pages/Sales";
import Inventory from "../../pages/Inventory";
//import Purchases from "../../pages/Purchases";
import Login from "../../pages/Login";
import Stock  from "../../pages/Stock";
import Dashboard from "../../Dashboard";
import { ProtectedRoute } from "../ProtectedRoute";

function BusinessRouter() {
  const [cookies, setCokkie, removeCookie] = useCookies();
  const isLogged = sessionStorage.getItem('isLogged')


  return cookies.userInfo && isLogged ? (
    <Dashboard>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sales" element={<Sales />} />
        <Route
          path="/stock"
          element={
            <ProtectedRoute user={cookies.rol}>
              <Stock />
            </ProtectedRoute>
          }
        />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/stock" element={<Stock/>} />
      </Routes>
    </Dashboard>
  ) : (
    <Login />
  );
}

export default BusinessRouter;
