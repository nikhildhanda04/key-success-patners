'use client'
import { motion } from 'framer-motion'


export default function Navbar() {

          const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

  return(
    <>
    <motion.div 
              initial={{y:-20, opacity: 0, filter: "blur(10px)"}}
          whileInView={{y:0, opacity:1, filter: "blur(0px)"}}
          transition={{duration: 0.7}}
    className="bg-[#FFFFFF]/[0.4] dark:bg-[#3F3D3D]/[0.4] backdrop-blur-2xl fixed w-full z-99 flex flex-row px-28 py-9 items-center justify-between">

      <div className="font-primary font-semibold text-dark dark:text-light text-3xl">
        Key Success Patners
      </div>

      <div className="flex flex-row font-Primary text-dark dark:text-light text-2xl">

        <ul className="font-primary flex flex-row gap-7 text-xl">
          <a
          href="#home"
          onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("home");
                }}
                className=' hover:text-primary/[0.8] transition-all duration-200'
          >
            Home
          </a>
          <a
          href="#services"
          onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("services");
                }}
                className=' hover:text-primary/[0.8] transition-all duration-200'
          >
          
            Services
          </a>
          <a
          href="#features"
          onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("features");
                }}
                className=' hover:text-primary/[0.8] transition-all duration-200'
          >
            Jobs
          </a>
          <a
          href="#contact"
          onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                }}
                className=' hover:text-primary/[0.8] transition-all duration-200'
          >
            Contact Us
          </a>
        </ul>

      </div>

    </motion.div>
    </>
  )
}