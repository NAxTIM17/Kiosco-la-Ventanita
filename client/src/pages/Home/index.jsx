import "./Home.css"
import { useCookies } from 'react-cookie'

function Home(){
    const [cookies, useCookie, removeCookie] = useCookies()
    const {rol} = cookies
    console.log(cookies.rol)
    return(
        <>
            <div className="Container-Home">
                <div className="Container-Home-01">
                        <div className="Container-Home-sub01">
                            <h2>{`BIENVENIDO ${cookies.userInfo}`}</h2>
                            <h1>KIOSCO LA VENTANITA</h1>
                        </div>
                        <div className="Container-Home-sub02">

                        </div>
                </div>
                <div className="Container-Home-02">

                </div>
            </div>
        </>
    )
}

export default Home