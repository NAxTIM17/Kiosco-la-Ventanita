import './Card.css'
import { useState } from 'react'


export function Card({setOpenModal, openModal, text}){

    const [ change, setChange ] = useState(false)



    const handleOpen = () =>{
        setOpenModal(!openModal)
    }
    const handleHola = () =>{
        console.log("hola")
        setChange(!change)
    }

    return(
        <>
        <div className='overlay'>
            <div className={`card-${change ? 'active' : ''}`} onClick={handleHola} >
                <div className='card-photo'>

                </div>
                <div className='card-content'>
                    <p>
                        {text}
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}