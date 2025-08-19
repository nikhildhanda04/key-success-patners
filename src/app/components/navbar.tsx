'use client'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
            setIsOpen(false) 
        }
    }

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'services', label: 'Services' },
        { id: 'features', label: 'Jobs' },
        { id: 'queries', label: 'Queries' },
        { id: 'contact', label: 'Contact Us' }
    ]

    const menuVariants: Variants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: 'easeOut'
            }
        },
        closed: {
            y: -20,
            opacity: 0,
            transition: {
                duration: 0.2,
                ease: 'easeIn'
            }
        }
    }

    const itemVariants: Variants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: 'easeOut'
            }
        },
        closed: {
            y: 10,
            opacity: 0,
            transition: {
                duration: 0.2,
                ease: 'easeIn'
            }
        }
    }

    return (
        <motion.div 
            initial={{ y: -20, opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.7 }}
            className="bg-[#FFFFFF]/[0.4] dark:bg-[#3F3D3D]/[0.4] backdrop-blur-2xl fixed w-full z-50 flex flex-row px-4 sm:px-8 md:px-28 py-6 md:py-9 items-center justify-between"
        >
            <div className="font-primary font-semibold text-dark dark:text-light text-2xl md:text-3xl">
                Key Success Partners
            </div>

            <button 
                className="md:hidden text-dark dark:text-light text-2xl focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                {isOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </button>

            <div className="hidden md:flex flex-row font-primary text-dark dark:text-light text-xl">
                <ul className="flex flex-row gap-7">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection(item.id)
                                }}
                                className="hover:text-primary/[0.8] transition-all duration-200"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="md:hidden absolute top-full left-0 w-full bg-[#FFFFFF]/[0.9] dark:bg-[#3F3D3D]/[0.9] backdrop-blur-2xl flex-col items-center font-primary text-dark dark:text-light text-xl py-4"
                    >
                        <ul className="flex flex-col items-center gap-4 w-full">
                            {navItems.map((item, index) => (
                                <motion.li 
                                    key={item.id}
                                    variants={itemVariants}
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    transition={{ delay: index * 0.05 }}
                                    className="w-full text-center"
                                >
                                    <a
                                        href={`#${item.id}`}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            scrollToSection(item.id)
                                        }}
                                        className="block py-2 hover:text-primary/[0.8] transition-all duration-200"
                                    >
                                        {item.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}