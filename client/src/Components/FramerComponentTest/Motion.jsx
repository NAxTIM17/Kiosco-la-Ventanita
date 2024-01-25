import { motion } from 'framer-motion'
import './Box.css'
export function FramerTest ({doit}) {
    return(
        <>
            {
                doit ?
                 <motion.div 
                    className='box'
                    animate={{
                        scale: [1, 2, 2, 1],
                        rotate: [0, 180, 270, 0],
                        borderRadius: ["100%","50%", "20%", "100%"]}}
                    transition={{ duration: 1 }}

            />
            :
                ""
            }
            <motion.div className='box'
                whileHover={{
                    scale: 1.1,
                    backgroundColor: "#2b2b2b",
                    borderRadius: "10px"
                }}
                whileTap={{scale: .9}}
            />
            
        </>
    )
}