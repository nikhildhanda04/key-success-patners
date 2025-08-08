'use client';

import { useEffect, useState } from "react";
import { Moon, Sun } from 'lucide-react';
import Image from 'next/image'

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
    <div className="flex flex-row items-center font-primary px-32 py-28 justify-between gap-12 tracking-tight">

        <div className="flex flex-col gap-12" >

          <div className="flex flex-row gap-4">
            <div className="bg-primary px-7 py-3 rounded-full text-white font-medium ">
              we value you
            </div>
                <button
                    className="bg-stone-200 dark:bg-stone-800 rounded-full p-3 ml-4 flex items-center justify-center transition-colors duration-200"
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
          </div>

          <div className="flex flex-col gap-8">
          <div className="text-dark tracking-normal leading-20 dark:text-light text-7xl font-semibold">
            Helping you reach right opportunities
          </div>

          <div className="text-[#666666] text-xl pr-40 text-left">
            with our expertise you get the placement that is bets suited for you.
          </div>
          </div>

        </div>

        <div className="relative w-[100vw] h-[40vw]">
          <Image
          src="/hero.svg"
          alt=""
          fill
          className="object-cover"
          />
        </div>
    </div>
    </>
  )
}