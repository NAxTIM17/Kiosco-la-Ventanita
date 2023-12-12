import {Routes, Route} from 'react-router-dom'
//Componentes de las rutas
import Home from '../../pages/Home'
import Sales from '../../pages/Sales'
import Inventory from '../../pages/Inventory'
import Purchases from '../../pages/Purchases'
import Login from '../../pages/Login'


function BusinessRouter(){
    return(
        <Routes>
            //ruta aislada que depende si esta logeado o no
            <Route path='login' element = {<Login />}/>
            //rutas protegidas
            <Route path='/kiosco'>
                <Route path='home' element = {<Home />}/>
                <Route path='sales' element = {<Sales />}/>
                <Route path='purchases' element = {<Purchases />}/>
                <Route path='inventory' element = {<Inventory />}/>
            </Route>
        </Routes>
    )
}

export default BusinessRouter