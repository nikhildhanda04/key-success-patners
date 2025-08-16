'use client'
import { cardsData } from './cardData'
import { motion } from 'framer-motion';
import Image from 'next/image'

export default function Services() {
  return(
    <>
    <div className="flex flex-col  gap-24  px-32 py-28 ">

      <motion.div 
          initial={{y:-20, opacity: 0, filter: "blur(10px)"}}
          whileInView={{y:0, opacity:1, filter: "blur(0px)"}}
          transition={{duration: 0.5}}
      className="flex flex-row font-primary text-primary text-5xl font-medium">
        Our Services <span></span>
      </motion.div>

      <div className="flex flex-col gap-28 items-center justify-center">
          
          <motion.div 
                    initial={{y:-20, opacity: 0, filter: "blur(10px)"}}
          whileInView={{y:0, opacity:1, filter: "blur(0px)"}}
          transition={{duration: 0.6}}
          className="flex flex-row justify-between px-12 gap-52">

            <div className="font-primary text-2xl text-black dark:text-white">
              we offer a wide range of services
            </div>
            <div className="font-primary text-xl px-20 text-zinc-400">
              we are ready to meet your requirements using our cutting edge tech
            </div>

          </motion.div>

    <motion.div 
              initial={{y:-20, opacity: 0, filter: "blur(10px)"}}
          whileInView={{y:0, opacity:1, filter: "blur(0px)"}}
          transition={{duration: 0.7}}
    className="grid grid-cols-1 md:grid-cols-2 px-12 gap-12">
      {cardsData.map((card, index) => {
        const Icon = card.icon;
        return (
          <motion.div

            key={index}
            className={`flex flex-col ${card.layout} ${card.colSpan} bg-gradient-to-b from-[#B6DBFF]/[0.5] to-[#EAEAEA]/[0.5] dark:from-[#A7D4FF]/[0.2] dark:to-[#08070E] border-stone-300 dark:border-stone-600 px-12 py-12 items-start rounded-lg shadow-[3px_4px_10px_rgba(0,0,0,0.19)] dark:shadow-[0px_7px_20px_rgba(255,255,255,0.2)] hover:shadow-[0px_7px_20px_rgba(0,0,0,0.2)] dark:hover:shadow-[0px_10px_20px_rgba(255,255,255,0.2)] transition-all duration-200 easeInOut`}
          >
            <div>
              <div className="p-4 w-fit mt-8 rounded-lg bg-primary shadow-[0px_3px_10px_rgba(0,0,0,0.3)]">
                <Icon color="white" size="28" />
              </div>
              <div className="font-primary mt-4 text-dark dark:text-light font-medium text-xl">
                {card.title}
              </div>
              <div className="font-primary mt-4 text-stone-400 text-md">
                {card.description}
              </div>
            </div>
      {card.layout.includes("flex-row") && card.image && (
        <div className="ml-auto w-64 h-64 hiddden md:block relative">
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-contain rounded-lg"
          />
  </div>
      )}
          </motion.div>
        );
      })}
    </motion.div>

    </div>

    </div>
    </>
  )
}
