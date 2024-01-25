import './Card.css'
import { useState } from 'react'
import {motion} from 'framer-motion'

export function Card({text, itemId, onClick}){

    return(
        <>
        <motion.div className='overlay'>
            <motion.div layoutId={itemId} className="card" onClick={onClick} >
                <motion.div className='card-photo'>

                </motion.div>
                <motion.div className='card-content'>
                    <motion.p>
                        {text}
                    </motion.p>
                </motion.div>
            </motion.div>
        </motion.div>
        </>
    )
}