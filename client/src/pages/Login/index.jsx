import './Login.css'
import { Input, Button} from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons';

import axios from 'axios'




function Login (){

    const [isActive, setIsActive] = useState(false)
    const navigate = useNavigate()
    const [cookies, setCookie] = useCookies()

    //user and password
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

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
            }else{
                console.log("user not found")
            }
        }).catch((err) =>{
            console.log(err)
        })

    }

    const ChangePassword = (e) =>{
        e.preventDefault()
        setIsActive(!isActive)
    }
  
   
    return(
        <>
        <form>
            <div className="container-login">
                <div className="login">
                    <h1>LOGIN</h1>
                    <div className="login-inputs">
                        <Input type='text' label = 'Usuario' onChange={e => setUser(e.target.value)}  value={user}/>
                        <Input type={isActive ? 'text' : 'password'} label = 'Constraseña' onChange={e => setPassword(e.target.value)} value={password}
                            endContent = {
                            <button onClick={ChangePassword} className='flex justify-end self-center'>
                                {
                                    isActive ? <FontAwesomeIcon icon={faEye} />
                                    : <FontAwesomeIcon icon={faEyeSlash} />
                                }
                            </button>

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