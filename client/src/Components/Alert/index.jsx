import './Alert.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

export function Alert({title, type, showState, setSaleState}){

    const [showAlert, setShowAlert ] = useState(null)

    useEffect(()=>{
        setShowAlert(showState)
    },[showState, setShowAlert])

    useEffect(()=>{
        setTimeout(()=>{
                if(showAlert === true){
                    setShowAlert(false)
                    setSaleState(false)
                }
            },2000)
    },[setShowAlert, showAlert])

    return(
        <>
            <div className={`Alert-container-${type === 'success' ? "success" : ""}${type === 'danger' ? "danger" : ""}${showAlert ? "-show" : "-hidden"}`}>
                <div className='icon-Alert'>
                    {
                        type === 'danger' ? <FontAwesomeIcon icon={faTriangleExclamation}/> : ""
                    }
                    {
                        type === 'success' ? <FontAwesomeIcon icon={faCheck} /> : ""
                    }
                </div>
                <div>
                    <h1>
                        {title}
                    </h1>
                </div>
            </div>
        </>
    )
}