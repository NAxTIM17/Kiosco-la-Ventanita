import './Modal.css'
import { useState } from 'react'


export function MyModal ({OpenModal, setOpenModal, children, btnCloseText, btnAccionText, Accion}) {

    const handleClose = () =>{
        setOpenModal(!OpenModal )
    }
    const handleAccion = () => {
        Accion()
        setOpenModal(!OpenModal)
    }

    return(
        <>
            {
                OpenModal ? 
                <div className='modal-container'>
                    <div className='modal'>
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