import './App.css'
import BusinessRouter from './Components/BussinesRouter';
import SideBar from './Components/Sidebar';


const App = () => {
  return(
    <> <div className="containerDiv">
      <SideBar/>
      <div className="Container-BusinessRouter">
        <BusinessRouter/>
      </div>
    </div>
    </>
  )
 

  
}
export default App;