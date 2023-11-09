import {Routes, Route} from 'react-router-dom'

function BusinessRouter(){

    return(
        <Routes>
            <Route path='/login' element = {<h3>Where Login shoud GO</h3>}/>
            <Route path='/' element = {<h3>Where Home shoud GO</h3>}/>
            <Route path='/sales' element = {<h3>Where Sales shoud GO</h3>}/>
            <Route path='/purchases' element = {<h3>Where Home Supplier Purchases GO</h3>}/>
        </Routes>
    )
}

export default BusinessRouter