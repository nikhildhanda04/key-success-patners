'use client'

import { Phone, MapPin, Mail} from 'lucide-react'
import { useState } from 'react';
import {motion } from 'framer-motion'
 
export default function ContactUs() {

    const [message, setMessage] = useState("");


    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const email = "";
    const subject = encodeURIComponent("Let's Connect");
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };


    return (
        <>
        <div className="flex flex-col md:items-start items-center gap-24 px-4 md:px-32 py-36">

            <motion.div 
                          initial={{y:-20, opacity: 0, filter: "blur(10px)"}}
          whileInView={{y:0, opacity:1, filter: "blur(0px)"}}
          transition={{duration: 0.5}}
            className="font-primary text-primary text-5xl font-medium">
                Contact Us
            </motion.div>

            <div className='flex flex-col md:flex-row items-center'>



            <motion.form 
            onSubmit={handleSubmit}
                          initial={{y:-20, opacity: 0, filter: "blur(10px)"}}
          whileInView={{y:0, opacity:1, filter: "blur(0px)"}}
          transition={{duration: 0.7}}
            className='flex flex-col justify-between gap-8 bg-stone-100 dark:bg-neutral-800 border border-neutral-300 shadow-[0px_7px_12px_rgba(0,0,0,0.1)] px-4 md:px-12 pb-36 py-12 rounded-3xl md:mr-36'>

                <div className='flex flex-col md:flex-row gap-6 w-full'>
                    <input 
                    placeholder='your name'
                    className='px-7 py-3 bg-white rounded-xl'
                    required
                    />
                    <input 
                    placeholder='your email'
                    className='px-7 py-3 bg-white rounded-xl'
                    required
                    />
                </div>

                <textarea 
                placeholder='your message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className='px-7 py-10 bg-white rounded-xl'
                required
                />

                <div>
                <button 
                type='submit'
                className='bg-primary text-white font-primary items-start px-12 py-3 rounded-3xl'>
                    Send
                </button>
                </div>

            </motion.form>

            <div className="flex flex-col gap-12 mt-12 md:mt-0">

                <div className="flex flex-col font-primary px-9 py-8 text-zinc-700 dark:text-zinc-300 gap-8  rounded-2xl backdrop-blur-3xl shadow-[0px_3px_16px_rgba(4,4,4,0.17)]">
                    <div className="flex flex-row gap-6 text-2xl font-medium">
                        <Phone size="32"/> +123456-789
                    </div>
                </div>

                <div className="flex flex-col font-primary px-9 py-8 text-zinc-700 dark:text-zinc-300 gap-8  rounded-2xl backdrop-blur-3xl shadow-[0px_3px_16px_rgba(4,4,4,0.17)]">
                    <div className="flex flex-row gap-6 text-2xl font-medium">
                        <Mail size="32"/> abc@gmail.com
                    </div>
                </div>

                <div className="flex flex-col font-primary px-9 py-8 text-zinc-700 dark:text-zinc-300 gap-8  rounded-2xl backdrop-blur-3xl shadow-[0px_3px_16px_rgba(4,4,4,0.17)]">
                    <div className="flex flex-row gap-6 text-2xl font-medium">
                        <MapPin size="32"/> Mumbai, India
                    </div>
                </div>

            </div>
                        </div>

        </div>
        </>
    )
}