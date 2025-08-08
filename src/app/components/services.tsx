
import { cardsData } from './cardData'
import Image from 'next/image'

export default function Services() {
  return(
    <>
    <div className="flex flex-col  gap-24  px-32 py-28 ">

      <div className="flex flex-row font-primary text-primary text-5xl font-medium">
        Our Services <span></span>
      </div>

      <div className="flex flex-col gap-28 items-center justify-center">
          
          <div className="flex flex-row justify-between gap-52">

            <div className="font-primary text-2xl text-black dark:text-white">
              we offer a wide range of services
            </div>
            <div className="font-primary text-xl px-20 text-zinc-400">
              we are ready to meet your requirements using our cutting edge tech
            </div>

          </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {cardsData.map((card, index) => {
        const Icon = card.icon;
        return (
          <div
            key={index}
            className={`flex flex-col ${card.layout} ${card.colSpan} bg-gradient-to-b from-[#B6DBFF]/[0.5] to-[#EAEAEA]/[0.5] dark:from-[#A7D4FF]/[0.2] dark:to-[#08070E] border-stone-300 dark:border-stone-600 px-12 py-12 items-start rounded-lg shadow-[0px_7px_20px_rgba(0,0,0,0.19)] dark:shadow-[0px_10px_45px_rgba(255,255,255,0.3)] hover:shadow-[0px_10px_20px_rgba(0,0,0,0.2)] dark:hover:shadow-[0px_10px_50px_rgba(255,255,255,0.3)] transition-all duration-200 easeInOut`}
          >
            <div>
              <div className="p-4 w-fit mt-8 rounded-lg bg-primary border">
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
          </div>
        );
      })}
    </div>

    </div>

    </div>
    </>
  )
}
