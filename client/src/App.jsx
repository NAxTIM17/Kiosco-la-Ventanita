import './App.css'
import BusinessRouter from './Components/BussinesRouter';
import { LoginContextProvider } from './Components/loginContext';


function App () {
  return(
    <>
    <LoginContextProvider>
      <BusinessRouter/>
    </LoginContextProvider>
    </>
  )
}

export default App;