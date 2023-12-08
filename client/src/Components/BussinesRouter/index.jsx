import {Routes, Route} from 'react-router-dom'
//Routes
import Home from '../../pages/Home'
import Sales from '../../pages/Sales'
import Inventory from '../../pages/Inventory'
import Purchases from '../../pages/Purchases'
import Login from '../../pages/Login'
function BusinessRouter(){

    return(
        <Routes>
            <Route path='login' element = {<Login />}/>
            <Route path='/' element = {<Home />}/>
            <Route path='sales' element = {<Sales />}/>
            <Route path='purchases' element = {<Purchases />}/>
            <Route path='inventory' element = {<Inventory />}/>
        </Routes>
    )
}

export default BusinessRouter