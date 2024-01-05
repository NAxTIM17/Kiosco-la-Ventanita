import "./Home.css"
import { useCookies } from 'react-cookie'

function Home(){
    console.log("rendering home....")
    const [cookies, useCookie, removeCookie] = useCookies()
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