export default function Features() {
    return(
        <>
        <div className="bg-primary/[0.9] px-32 py-28 flex flex-row">

        <div className="flex flex-col gap-12 tracking-tight font-primary text-light">
            <div className="font-medium text-6xl">
                Industries we serve
            </div>
            <div className="text-2xl pr-36 text-stone-300">
                these are the industries that we currently have under our eye
            </div>
        </div>

        <div className="grid grid-cols-2 gap-12 items-center">

            <div className="flex flex-col gap-4 font-primary   text-left tracking-tight text-light bg-[#1B65AF] rounded-lg px-8 py-12">
                <div className="font-medium text-8xl text-left">
                    01.
                </div>
                <div className="text-3xl ">
                    Information Technology
                </div>
            </div>

            <div className="flex flex-col gap-12 font-primary tracking-tight text-light bg-[#1B65AF] rounded-lg px-8 py-12">
                <div className="font-medium text-8xl">
                    02.
                </div>
                <div className="text-3xl ">
                    Health Care
                </div>
            </div>

            <div className="flex flex-col gap-4 font-primary tracking-tight text-light bg-[#1B65AF] rounded-lg px-8 py-12">
                <div className="font-medium text-8xl">
                    03.
                </div>
                <div className="text-3xl ">
                    Engineering & Manufacturing
                </div>
            </div>

            <div className="flex flex-col gap-4 font-primary tracking-tight text-light bg-[#1B65AF] rounded-lg px-8 py-12">
                <div className="font-medium text-8xl">
                    04.
                </div>
                <div className="text-3xl ">
                    Project Management
                </div>
            </div>
            

        </div>

        </div>
        </>
    )
}