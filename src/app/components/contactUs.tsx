import { Phone, MapPin, Mail} from 'lucide-react'

export default function ContactUs() {
    return (
        <>
        <div className="flex flex-col gap-24 px-32 py-28">

            <div className="font-primary text-primary text-5xl font-medium">
                Contact Us
            </div>

            <div className='flex flex-row'>



            <form className='flex flex-col justify-between gap-8 bg-stone-100 dark:bg-stone-800 border border-neutral-300 shadow-[0px_7px_12px_rgba(0,0,0,0.1)] px-12 pb-36 py-12 rounded-3xl mr-36'>

                <div className='flex flex-row gap-6 w-full'>
                    <input 
                    placeholder='your name'
                    className='px-7 py-3 bg-white rounded-xl'
                    />
                    <input 
                    placeholder='your email'
                    className='px-7 py-3 bg-white rounded-xl'
                    />
                </div>

                <textarea 
                placeholder='your message'
                className='px-7 py-10 bg-white rounded-xl'
                />

                <div>
                <button className='bg-primary text-white font-primary items-start px-12 py-3 rounded-3xl'>
                    Send
                </button>
                </div>

            </form>

            <div className="flex flex-col gap-12">

                <div className="flex flex-col font-primary px-9 py-7 text-zinc-800 dark:text-zinc-300 gap-8 border border-stone-400 rounded-2xl shadow-[0px_7px_10px_rgba(0,0,0,0.2)]">
                    <div className="flex flex-row gap-6 text-2xl font-medium">
                        <Phone size="32"/> +123456-789
                    </div>
                    <div>
                        contact us on our helpline number
                    </div>
                </div>

                <div className="flex flex-col font-primary px-9 py-7 text-zinc-800 dark:text-zinc-300 gap-8 border border-stone-400 rounded-2xl shadow-[0px_7px_10px_rgba(0,0,0,0.2)]">
                    <div className="flex flex-row gap-6 text-2xl font-medium">
                        <Mail size="32"/> abc@gmail.com
                    </div>
                    <div>
                        contact us on our helpline number
                    </div>
                </div>

                <div className="flex flex-col font-primary px-9 py-7 text-zinc-800 dark:text-zinc-300 gap-8 border border-stone-400 rounded-2xl shadow-[0px_7px_10px_rgba(0,0,0,0.2)]">
                    <div className="flex flex-row gap-6 text-2xl font-medium">
                        <MapPin size="32"/> Mumbai, India
                    </div>
                    <div>
                        contact us on our helpline number
                    </div>
                </div>

            </div>
                        </div>

        </div>
        </>
    )
}