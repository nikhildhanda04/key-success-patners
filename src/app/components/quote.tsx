'use client'

import { motion, easeIn } from 'framer-motion'

export default function Quote() {
    return(
        <>
        <motion.div 
                  initial={{y:-20, opacity: 0, filter: "blur(10px)"}}
          whileInView={{y:0, opacity:1, filter: "blur(0px)"}}
          transition={{duration: 0.5, ease: easeIn}}
        className="px-52 py-68 text-5xl tracking-tight font-primary text-center text-dark dark:text-light">
            Test your potential and be where you deserve to be.
        </motion.div>
        </>
    )
}