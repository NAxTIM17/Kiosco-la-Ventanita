import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
//Componentes de las rutas
import Home from '../../pages/Home'
import Sales from '../../pages/Sales'
import Inventory from '../../pages/Inventory'
import Purchases from '../../pages/Purchases'
import Login from '../../pages/Login'
import Dashboard from '../../Dashboard'

function BusinessRouter(){
    
    const [logged, setLogged] = useState(false)

    return(
        logged ? (
            <Dashboard>
                <Routes>
                    //rutas protegidas
                    <Route path='/kiosco'>
                        <Route path='home' element = {<Home />}/>
                        <Route path='sales' element = {<Sales />}/>
                        <Route path='purchases' element = {<Purchases />}/>
                        <Route path='inventory' element = {<Inventory />}/>
                    </Route>
                </Routes>
            </Dashboard>
        )
        : 
        (
            <Login setLogged = {setLogged}/>
        )
    )
}

export default BusinessRouter