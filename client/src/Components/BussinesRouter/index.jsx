import {Routes, Route} from 'react-router-dom'
//Routes
import Home from '../../pages/Home'

function BusinessRouter(){

    return(
        <Routes>
            <Route path='login' element = {<h3>Where Login should GO</h3>}/>
            <Route path='/' element = {<Home />}/>
            <Route path='sales' element = {<h3>Where Sales should GO</h3>}/>
            <Route path='purchases' element = {<h3>Where Supplier Purchases GO</h3>}/>
            <Route path='inventory' element = {<h3>Where Supplier Inventory should GO</h3>}/>
        </Routes>
    )
}

export default BusinessRouter