import { Briefcase, Users, GraduationCap, Headset, Handshake } from "lucide-react";

export const cardsData = [
  {
    icon: Briefcase,
    title: "Job Requirement Sourcing",
    description: "We find the perfect jobs for you and help you connect with them",
    colSpan: "md:col-span-1",
    layout: "flex-col",
  },
  {
    icon: Users,
    title: "Candidate Screening & Matching",
    description: "we check you profile through screening process conducted by our team. After that we match you with your perfect job.",
    colSpan: "md:col-span-1",
    layout: "flex-col",
  },
  {
    icon: GraduationCap,
    title: "Placement & Onboarding Support",
    description: "we are with you till the end. we help you with your onboarding on the job, contact us anytime, anywhere.",
    colSpan: "md:col-span-2",
    layout: "flex-row justify-between",
    image: "/card.svg", 
  },
  {
    icon: Headset,
    title: "Consulting & Career Support",
    description: "our team is available 24/7 for you. contact us anytime for any support",
    colSpan: "md:col-span-1",
    layout: "flex-col",
  },
  {
    icon: Handshake,
    title: "Client Relationship Management",
    description: "we manage most professional yet very friendly behaviour with our clients.",
    colSpan: "md:col-span-1",
    layout: "flex-col",
  },
];
