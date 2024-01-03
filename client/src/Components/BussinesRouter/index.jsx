import { Routes, Route } from 'react-router-dom'
import { useCookies } from 'react-cookie'
//Componentes de las rutas
import Home from '../../pages/Home'
import Sales from '../../pages/Sales'
import Inventory from '../../pages/Inventory'
import Purchases from '../../pages/Purchases'
import Login from '../../pages/Login'
import Dashboard from '../../Dashboard'

function BusinessRouter(){
    
    const [cookies, setCokkie, removeCookie] = useCookies()
    console.log("cookies pero de el business router",cookies)
    return(
        cookies.userInfo ? (
            <Dashboard>
                <Routes>
                    <Route path='/' element = {<Home />}/>
                    <Route path='/sales' element = {<Sales />}/>
                    <Route path='/purchases' element = {<Purchases />}/>
                    <Route path='/inventory' element = {<Inventory />}/>
                </Routes>
            </Dashboard>
        )
        : 
        (
            <Login/>
        )
    )
}

export default BusinessRouter