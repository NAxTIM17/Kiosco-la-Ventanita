import './Login.css'
import { Input, Button} from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons';

import axios from 'axios'




function Login (){
    //state para el ojo de login
    const [isActive, setIsActive] = useState(false)
    const [invalid, setInvalid] = useState(false)
    const [cookies, setCookie] = useCookies()
    
    //user and password
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    
    const navigate = useNavigate()

    useEffect(()=>{
        console.log(cookies)
    },[cookies])


    //logica de autentificacion
    const HandleLogin = () =>{
        axios.post('http://localhost:8000/login',{

            userName: user,
            userPassword: password

        }).then((response) =>{
            if(response.data){
                console.log(response)
                navigate('/kiosco/home')
                setCookie('userInfo', user)
            }
        }).catch((err) =>{
            console.log(err)
            console.log("no se encontró")
            setInvalid(true)
        })

    }

   
    return(
        <>
        <form>
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
        </form>
        </>
    )
}

export default Login