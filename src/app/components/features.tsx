'use client'

import { motion } from 'framer-motion'

export default function Features() {
    return(
        <>
        <div className="bg-primary/[0.9] px-32 py-36 flex flex-row">

        <div className="flex flex-col gap-12 tracking-tight font-primary text-light">
            <motion.div 
        initial={{y:-20, opacity: 0, filter: "blur(10px)"}}
          whileInView={{y:0, opacity:1, filter: "blur(0px)"}}
          transition={{duration: 0.5}}
            className="font-medium text-6xl">
                Industries we serve
            </motion.div>
            <motion.div 
                      initial={{y:-20, opacity: 0, filter: "blur(10px)"}}
          whileInView={{y:0, opacity:1, filter: "blur(0px)"}}
          transition={{duration: 0.6}}
            className="text-2xl pr-36 text-stone-300">
                these are the industries that we currently have under our eye
            </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-12 items-center">

            <motion.div 
          initial={{y:-20, opacity: 0, filter: "blur(10px)"}}
          whileInView={{y:0, opacity:1, filter: "blur(0px)"}}
          transition={{duration: 0.7}}
            className="flex flex-col gap-4 font-primary   text-left tracking-tight text-light bg-[#1B65AF] rounded-lg px-8 py-12">
                <div className="font-medium text-8xl text-left">
                    01.
                </div>
                <div className="text-3xl ">
                    Information Technology
                </div>
            </motion.div>

            <motion.div 
                      initial={{y:-20, opacity: 0, filter: "blur(10px)"}}
          whileInView={{y:0, opacity:1, filter: "blur(0px)"}}
          transition={{duration: 0.8}}
            className="flex flex-col gap-12 font-primary tracking-tight text-light bg-[#1B65AF] rounded-lg px-8 py-12">
                <div className="font-medium text-8xl">
                    02.
                </div>
                <div className="text-3xl ">
                    Health Care
                </div>
            </motion.div>

            <motion.div 
                      initial={{y:-20, opacity: 0, filter: "blur(10px)"}}
          whileInView={{y:0, opacity:1, filter: "blur(0px)"}}
          transition={{duration: 0.9}}
            className="flex flex-col gap-4 font-primary tracking-tight text-light bg-[#1B65AF] rounded-lg px-8 py-12">
                <div className="font-medium text-8xl">
                    03.
                </div>
                <div className="text-3xl ">
                    Engineering & Manufacturing
                </div>
            </motion.div>

            <motion.div 
                      initial={{y:-20, opacity: 0, filter: "blur(10px)"}}
          whileInView={{y:0, opacity:1, filter: "blur(0px)"}}
          transition={{duration: 1}}
            className="flex flex-col gap-4 font-primary tracking-tight text-light bg-[#1B65AF] rounded-lg px-8 py-12">
                <div className="font-medium text-8xl">
                    04.
                </div>
                <div className="text-3xl ">
                    Project Management
                </div>
            </motion.div>
            

        </div>

        </div>
        </>
    )
}