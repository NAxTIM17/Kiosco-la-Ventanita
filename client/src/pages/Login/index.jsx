import './Login.css'
import { Input, Button} from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons';
import { LoginContext } from '../../Components/loginContext'
import { useContext } from 'react'
import axios from 'axios'


function Login (){
    //state para el ojo de login
    const [ cookies, setCookie ] = useCookies()
    const [ isActive, setIsActive ] = useState(false)
    const [ invalid, setInvalid ] = useState(false)

    //user and password
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    
    const navigate = useNavigate()

    //logica de autentificacion
    const HandleLogin = async () => {
        try {
          const response = await axios.post('http://localhost:8000/login', {
            userName: user,
            userPassword: password,
          });
      
          if (response.data) {
            const { token, rol, userName } = response.data
            sessionStorage.setItem('isLogged', true)
            setCookie('userInfo', userName);
            setCookie('Token', token)
            setCookie('rol', rol)
            navigate('/');
          }
        } catch (error) {
            setInvalid(true);
            console.log(error);
            console.log('no se encontró');
        }
      };
   
    return(
        <>
            <div className="container-login">
                <div className="login">
                    <h1>LOGIN</h1>
                    <div className="login-inputs">
                        <Input isInvalid = {invalid} errorMessage = { invalid ? "Ingrese correctamente las credenciales" : ""} type='text' label = 'Usuario' onChange={(e) => {
                            //esto se debe cambiar
                            if(e.target.value === "") setInvalid(false)
                            setUser(e.target.value)
                        }}  value={user}/>
                        <Input isInvalid = {invalid} errorMessage = { invalid ? "Ingrese correctamente las credenciales" : ""} type={isActive ? 'text' : 'password'} label = 'Constraseña' onChange={(e) => {
                            if(e.target.value === "") setInvalid(false)
                            setPassword(e.target.value)
                        }} value={password}
                            endContent = {
                            <span onClick={() => setIsActive(!isActive)} className='flex justify-end self-center cursor-pointer'>
                                {
                                    isActive ? <FontAwesomeIcon icon={faEye} />
                                    : <FontAwesomeIcon icon={faEyeSlash} />
                                }
                            </span>

                        } />
                    </div>
                    <div className="login-button">
                        <Button color ='secondary' onClick={HandleLogin}> Log in </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login