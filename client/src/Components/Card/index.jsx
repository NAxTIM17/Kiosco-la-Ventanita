import './Card.css'
import { useState } from 'react'


export function Card({setOpenModal, openModal}){

    const handleOpen = () =>{
        setOpenModal(!openModal)
    }


    return(
        <>
            <div className='card' onClick={handleOpen} >
                <div className='card-photo'>

                </div>
                <div className='card-content'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
            </div>
        </>
    )
}