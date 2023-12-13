import './App.css'
import SideBar from './Components/Sidebar';


function Dashboard ({children}){
    return(
        <>
            <div className="containerDiv">
                <div className="SideBar-container">
                    <SideBar/>
                </div>
                <div className="Container-BusinessRouter">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Dashboard