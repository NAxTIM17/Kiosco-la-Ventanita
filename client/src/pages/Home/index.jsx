import "./Home.css"
import { useCookies } from 'react-cookie'
import { FramerTest } from "../../Components/FramerComponentTest/Motion"
import { useState } from "react"

function Home(){
    const [cookies, useCookie, removeCookie] = useCookies()
    const [ doit, setDoit ] = useState(null)
    return(
        <>
            <div className="Container-Home">
                <div className="Container-Home-01">
                        <div className="Container-Home-sub01">
                            <h2>{`BIENVENIDO ${cookies.userInfo}`}</h2>
                            <h1>KIOSCO LA VENTANITA</h1>
                        </div>
                        <div className="Container-Home-sub02">
                            <button onClick={() => setDoit(!doit)} >Animar</button>
                            <FramerTest doit={doit}/>
                        </div>
                </div>
                <div className="Container-Home-02">

                </div>
            </div>
        </>
    )
}

export default Home