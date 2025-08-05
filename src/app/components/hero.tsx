import { Moon } from 'lucide-react';
import Image from 'next/image'

export default function Hero() {
  return(
    <>
    <div className="flex flex-row items-center font-primary px-32 py-28 justify-between gap-12 tracking-tight">

        <div className="flex flex-col gap-12" >

          <div className="flex flex-row gap-4">
            <div className="bg-primary px-7 py-3 rounded-full text-white font-medium ">
              we value you
            </div>
            <div className="bg-stone-500 dark:bg-neutral-300 p-3 rounded-full">
              <Moon/>
            </div>
          </div>

          <div className="flex flex-col gap-4">
          <div className="text-dark tracking-normal leading-20 dark:text-light text-7xl font-semibold">
            Helping you reach right opportunities
          </div>

          <div className="text-[#666666] text-2xl pr-48 text-left">
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