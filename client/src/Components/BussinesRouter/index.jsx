import {Routes, Route} from 'react-router-dom'
//Routes
import Home from '../../pages/Home'
import Sales from '../../pages/Sales'
import Inventory from '../../pages/Inventory'

function BusinessRouter(){

    return(
        <Routes>
            <Route path='login' element = {<h3>Where Login should GO</h3>}/>
            <Route path='/' element = {<Home />}/>
            <Route path='sales' element = {<Sales />}/>
            <Route path='purchases' element = {<h3>Where Supplier Purchases GO</h3>}/>
            <Route path='inventory' element = {<Inventory />}/>
        </Routes>
    )
}

export default BusinessRouter