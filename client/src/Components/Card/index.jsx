import './Card.css'
import { useState } from 'react'
import {motion} from 'framer-motion'

export function Card({text, itemId, onClick, price}){

    return(
        <>
        <motion.div className='overlay'>
            <motion.div layoutId={itemId} className="card" onClick={onClick} >
                <motion.div className='card-photo'>
                    <img className='photo' src="https://purina.com.pe/sites/default/files/styles/webp/public/2022-10/Que_debes_saber_antes_de_adoptar_un_gatito.jpg.webp?itok=N2sS0lfp" alt="" />
                </motion.div>
                <motion.div className='card-content'>
                    <motion.h1 className='title'>
                        {text}
                    </motion.h1>
                    <motion.p className='details'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    </motion.p>
                    <motion.h2 className='price'>
                        {price}
                    </motion.h2>
                </motion.div>
            </motion.div>
        </motion.div>
        </>
    )
}