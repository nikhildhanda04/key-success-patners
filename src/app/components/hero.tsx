'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { easeIn, motion } from 'framer-motion'; 
import { Moon, Sun } from 'lucide-react';

export default function Hero() {

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setIsDark(document.documentElement.classList.contains("dark"));
    }, []);

    const toggleTheme = () => {
        const html = document.documentElement;
        html.classList.add("transition-colors", "duration-200");
        if (html.classList.contains("dark")) {
            html.classList.remove("dark");
            setIsDark(false);
        } else {
            html.classList.add("dark");
            setIsDark(true);
        }
        setTimeout(() => {
            html.classList.remove("transition-colors", "duration-200", "ease-In");
        }, 200);
    };

  return(
    <>


{/* old hero */}

{/* <div className="min-h-screen w-full relative">

<div
  className="absolute inset-0 z-0 transition-colors duration-200"
  style={{
    background: isDark
      ? "radial-gradient(125% 125% at 50% 10%, #000000 40%, #010133 100%)"
      : "radial-gradient(125% 125% at 50% 10%, rgba(255, 255, 255, 0.6) 40%, rgba(99, 102, 241, 0.6) 100%)",
  }}
/>

    <div className="flex flex-row items-center font-primary px-32 py-38 justify-between gap-12 tracking-tight">

        <div className="flex flex-col gap-12" >

          <motion.div 
          initial={{y:-20, opacity: 0, filter: "blur(10px)"}}
          animate={{y:0, opacity:1, filter: "blur(0px)"}}
          transition={{duration: 0.5, ease: easeIn}}
          className="flex flex-row gap-1">
            <div className="bg-primary px-7 py-3 rounded-full text-white  text-lg font-medium ">
              we value you
            </div>
                <button
                    className="bg-stone-200 dark:bg-stone-800 rounded-full px-4 py-3 ml-4 flex items-center justify-center transition-colors duration-200"
                    onClick={toggleTheme}
                    aria-label="Toggle dark mode"
                    type="button"
                >
                    {isDark ? (
                        <Sun className="inline" size={20} color="#FAF9F6" />
                    ) : (
                        <Moon className="inline" size={20} color="#09090B" />
                    )}
                </button>
          </motion.div>

          <div className="flex flex-col gap-8">
          <motion.div 
          initial={{y:-20, opacity: 0, filter: "blur(10px)"}}
          animate={{y:0, opacity:1, filter: "blur(0px)"}}
          transition={{duration: 0.6, ease: easeIn}}
          className="text-dark tracking-wide leading-20 dark:text-light text-7xl font-semibold">
            Helping you reach right opportunities
          </motion.div>

          <motion.div 
          initial={{y:-20, opacity: 0, filter: "blur(10px)"}}
          animate={{y:0, opacity:1, filter: "blur(0px)"}}
          transition={{duration: 0.8, ease: easeIn}}
          className="text-[#666666] tracking-tight text-xl pr-40 text-left">
            with our expertise you get the placement that is best suited for you.
          </motion.div>
          </div>

        </div>

        <motion.div 
                  initial={{y:-20, opacity: 0, filter: "blur(10px)"}}
          animate={{y:0, opacity:1, filter: "blur(0px)"}}
          transition={{duration: 0.5, ease: easeIn}}
        className="relative w-[100vw] h-[40vw]">
          <Image
          src="/hero.svg"
          alt=""
          fill
          className="object-cover"
          />
        </motion.div>
    </div>


</div> */}

{/* new hero */}

<div
  className="flex flex-col items-center text-center md:text-left md:items-start px-4 md:px-32 py-48 md:py-68 min-h-screen gap-8 md:gap-18 relative"
  style={{ position: "relative" }}
>
  <div
    className="absolute inset-0 bg-cover bg-center md:bg-[length:100%_100%]"
    style={{
      backgroundImage: "url(/hero2.jpg)",
      WebkitMaskImage: "linear-gradient(to right, transparent, white)",
      maskImage: "linear-gradient(to right, transparent, white)",
    }}
  ></div>

      <motion.div 
          initial={{y:-20, opacity: 0, filter: "blur(10px)"}}
          animate={{y:0, opacity:1, filter: "blur(0px)"}}
          transition={{duration: 0.5, ease: easeIn}}
          className="flex flex-row gap-1">
            <div className="bg-primary px-7 py-3 rounded-full text-white text-4  md:text-lg font-medium ">
              we value you
            </div>
                <button
                    className="bg-stone-200 dark:bg-stone-800 rounded-full px-4 py-3 ml-4 flex items-center justify-center transition-colors duration-200"
                    onClick={toggleTheme}
                    aria-label="Toggle dark mode"
                    type="button"
                >
                    {isDark ? (
                        <Sun className="inline" size={20} color="#FAF9F6" />
                    ) : (
                        <Moon className="inline" size={20} color="#09090B" />
                    )}
                </button>
          </motion.div>

                    <div className="flex flex-col gap-8">
          <motion.div 
          initial={{y:-20, opacity: 0, filter: "blur(10px)"}}
          animate={{y:0, opacity:1, filter: "blur(0px)"}}
          transition={{duration: 0.6, ease: easeIn}}
          className="text-dark tracking-tight dark:text-light md:leading-20 text-4xl md:text-7xl font-semibold">
            Helping you reach <br /> right opportunities
          </motion.div>

          <motion.div 
          initial={{y:-20, opacity: 0, filter: "blur(10px)"}}
          animate={{y:0, opacity:1, filter: "blur(0px)"}}
          transition={{duration: 0.8, ease: easeIn}}
          className="text-stone-500 dark:text-stone-300 tracking-tight md:text-xl md:pr-40 text-center md:text-left">
            with our expertise you get the placement <br/> that is best suited for you.
          </motion.div>
          </div>



    </div>
    </>
  )
}