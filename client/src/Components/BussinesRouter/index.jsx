import { Routes, Route } from 'react-router-dom'
import { useCookies } from 'react-cookie'
//Componentes de las rutas
import Home from '../../pages/Home'
import Sales from '../../pages/Sales'
import Inventory from '../../pages/Inventory'
import Purchases from '../../pages/Purchases'
import Login from '../../pages/Login'
import Dashboard from '../../Dashboard'
import { useState } from 'react'

function BusinessRouter(){
    
    const [cookies, setCokkie, removeCookie] = useCookies()

    return(
        cookies.userInfo ? (
            <Dashboard>
                <Routes>
                    {
                        cookies.rol === 'administrador' ? (
                            <>
                                <Route path='/' element = {<Home />}/>
                                <Route path='/sales' element = {<Sales />}/>
                                <Route path='/purchases' element = {<Purchases />}/>
                                <Route path='/inventory' element = {<Inventory />}/>
                            </>
                        )
                        : (
                            <Route path='/' element = {<Home />}/>
                        )
                        
                    }
                    {
                        cookies.rol === "vendedor" ? 
                        (
                            <>
                                <Route path='/sales' element = {<Sales />}/>
                                <Route path='/inventory' element = {<Inventory />}/>

                            </>
                        ):
                        (
                            <Route path='/' element = {<Home />}/>

                        )
                    }

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