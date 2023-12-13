import './Login.css'
import { Input, Button} from '@nextui-org/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons';



function Login({setLogged}){

    const navigate = useNavigate()
    const [isActive, setIsActive] = useState(false)

    //user and password
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')


    //logica de autentificacion
    const HandleSubmit = (e) =>{
        setLogged(true)
        navigate('/kiosco/home')
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
                        <Button color ='secondary' onClick={HandleSubmit}> Log in </Button>
                    </div>
                </div>
            </div>
        </form>
        </>
    )
}

export default Login