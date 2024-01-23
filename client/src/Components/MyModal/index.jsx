import './Modal.css'
import { useEffect, useState } from 'react'


export function MyModal ({OpenModal, setOpenModal, children, btnCloseText, btnAccionText, Accion}) {

    const [stateAux, setStateAux] = useState(false)

    //console.log(`soy el Open Modal ${OpenModal}`)
    
    useEffect(()=>{
        setStateAux(OpenModal)
    },[OpenModal])
    
    //console.log(`soy el auxiliar ${stateAux}`)
    const handleClose = () =>{
        setStateAux(!OpenModal)
        setTimeout(()=>{
            setOpenModal(!OpenModal )
        },300)
    }
    const handleAccion = () => {
        Accion()
        setStateAux(!OpenModal)
        setTimeout(()=>{
            setOpenModal(!OpenModal )
        },300)
    }


    return(
        <>
            {
                OpenModal ? 
                <div className='modal-container'>
                    <div className={stateAux ? "modal" : "modal-close"}>
                        <div className='modal-content'>
                            {children}
                        </div>
                        <div className='modal-buttons' >
                            <div className='btn-accion' onClick={handleAccion}>
                                <h2>{btnAccionText}</h2>
                            </div>
                            <div className='btn-close' onClick={handleClose}>
                                <h2>{btnCloseText}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                :
                ""
            }
        </>
    )
}