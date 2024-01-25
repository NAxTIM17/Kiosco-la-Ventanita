import './Button.css'
import { motion } from 'framer-motion'
export function MyButton ({name, onClick}) {
    return(
        <>
           <motion.div
            className='button'
            whileHover={{
                scale: 1.1,
                backgroundColor: "#1b1b1b",
                borderRadius: "10px"
            }}
            whileTap={{scale: .9}}
            onClick={onClick}
           >
            {name}
           </motion.div>
            
        </>
    )
}