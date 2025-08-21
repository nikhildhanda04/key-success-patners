'use client'

import Qna from "./qna";
import { motion, easeIn } from "framer-motion";

export default function Queries() {

    const queries = [
    {
        question: "What is your company all about?",
        answer: "Our company is a dynamic consulting and staffing firm dedicated to connecting skilled professionals with top-tier opportunities across various industries. We streamline the hiring process by understanding client job requirements and sourcing qualified candidates who are ready to deliver exceptional results."
    },
    {
        question: "What services do you provide?",
        answer: "We offer a comprehensive range of services, including:\n- Job Requirement Sourcing: Collaborating with clients to identify their specific hiring needs.\n- Candidate Screening & Matching: Evaluating and matching candidates to roles based on skills and qualifications.\n- Placement & Onboarding Support: Assisting with seamless candidate placement and onboarding processes.\n- Consulting & Career Support: Providing career guidance and consulting to help professionals succeed.\n- Client Relationship Management: Building strong partnerships with clients to ensure long-term success."
    },
    {
        question: "Which industries do you serve?",
        answer: "We serve a diverse range of industries, including:\n- Information Technology (IT)\n- Healthcare\n- Engineering & Manufacturing\n- Project Management"
    },
    {
        question: "How do you ensure the right candidate fit for clients?",
        answer: "We combine in-depth job requirement analysis with rigorous candidate screening and matching processes. By understanding the specific needs of our clients and evaluating candidates’ skills, experience, and cultural fit, we ensure that only the most qualified professionals are placed in roles where they can thrive."
    }
]
    return(
  <>
        <div className="flex flex-col gap-14 px-16 md:px-52 py-32 w-full">

            <motion.div 
            initial={{y:-20, opacity: 0, filter: "blur(10px)"}}
          whileInView={{y:0, opacity:1, filter: "blur(0px)"}}
          transition={{duration: 0.5, ease: easeIn}}
            className="font-primary text-5xl text-dark dark:text-light ">
                Queries
            </motion.div>

            <motion.div 
            initial={{y:-20, opacity: 0, filter: "blur(10px)"}}
          whileInView={{y:0, opacity:1, filter: "blur(0px)"}}
          transition={{duration: 0.7, ease: easeIn}} 
            className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12 justify-between">
                {queries.map((query, index) => (
                    <Qna key={index} question={query.question} answer={query.answer} />
                ))}
            </motion.div>

            </div>

        </>
    )}