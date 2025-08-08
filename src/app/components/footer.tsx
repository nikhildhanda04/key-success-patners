export default function Footer() {
    return(
        <>
        <div className="flex flex-col bg-primary/[0.9] mask-b-from-80% overflow-hidden">

        <div className="flex flex-row font-primary justify-between text-light px-36 py-20">
            <div className="text-3xl  font-medium">
                Bringing opportunities <br /> to you
            </div>
            <div className="flex flex-row gap-12">
                <div className="flex flex-col gap-8">
                    <div className="text-2xl font-medium">
                        Navigation
                    </div>
                    <div className="text-xl ">
                        <div className="mt-2 hover:underline transistion-all duration-200 ease-easeIn ">Home</div>
                        <div className="mt-2 hover:underline transistion-all duration-200 ease-easeIn ">Services</div>
                        <div className="mt-2 hover:underline transistion-all duration-200 ease-easeIn ">Partnership</div>
                        <div className="mt-2 hover:underline transistion-all duration-200 ease-easeIn ">About Us</div>
                        <div className="mt-2 hover:underline transistion-all duration-200 ease-easeIn ">Contact Us</div>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="text-2xl font-medium">
                        Socials
                    </div>
                    <div className="text-xl">
                    <div className="mt-2 hover:underline transistion-all duration-200 ease-easeIn ">Instagram</div>
                    <div className="mt-2 hover:underline transistion-all duration-200 ease-easeIn ">X</div>
                    <div className="mt-2 hover:underline transistion-all duration-200 ease-easeIn ">LinkedIn</div>
                    </div>
                </div>

            </div>

        </div>

        <div className="text-center font-primary text-light font-bold text-[8vw] -mb-[5vw]">
            KEY SUCCESS PARTNERS
        </div>

        </div>
        </>
    )
}