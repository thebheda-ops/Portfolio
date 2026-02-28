import { siteConfig } from "../constants/site";
import type { PageContent } from "./types";

export const pageContent: PageContent = {
  brand: siteConfig.brand,
  hero: {
    role: "MERN Stack Developer | Problem Solver | Tech Enthusiast",
    availability: siteConfig.location,
    headline: "I build things for the web.",
    subtext:
      "My focus is on creating clean, responsive, and user-centric digital experiences while solving real problems with practical code.",
  },
  about: {
    title: "About",
    highlight: "Me",
    description:
      "I do not just write code; I enjoy the challenge of solving complex problems and the constant journey of learning how to build better software. Driven by curiosity and a love for the craft, I am looking for opportunities to contribute to innovative projects and grow alongside a talented team.",
    photoLabel: "BK",
  },
  skillGroups: [
    {
      title: "Top Skills",
      items: ["WordPress", "Web Development", "Graphics"],
    },
  ],
  experience: [
    {
      period: "March 2023 - Present (3 years)",
      title: "Freelance Web Developer",
      org: "Freelancer",
      detail:
        "Built websites for local businesses including tattoo studios and travel brands.",
    },
    {
      period: "March 2023 - August 2024 (1 year 6 months)",
      title: "Freelance Web Developer",
      org: "Gizmo Store",
      detail: "Delivered client websites and improved user-facing web experiences.",
    },
  ],
  education: [
    {
      period: "December 2025 - December 2029",
      title: "Bachelor of Computer Application (BCA)",
      org: "Divya Gyan College of Technology and Management",
      detail:
        "Computer Information Technology Administration and Management.",
    },
    {
      period: "2023 - 2025",
      title: "+2, Computer Science",
      org: "Trinity Int'l SS/College",
      detail: "Higher secondary studies in computer science.",
    },
  ],
  projects: [
    {
      title: "Global Study Hub",
      summary:
        "Platform concept for students to explore programs, compare options, and track applications in one place.",
      stack: "React + Tailwind + JavaScript",
      demoUrl: "#",
    },
    {
      title: "Nepal Travels",
      summary:
        "Responsive travel agency website with itinerary search flows, curated destination pages, and polished UX.",
      stack: "React + Tailwind + Vite",
      demoUrl: "#",
    },
    {
      title: "Everest Guest House",
      summary:
        "Booking-focused hospitality interface designed to increase inquiries and simplify reservation flow.",
      stack: "MERN + Booking Workflow",
      demoUrl: "#",
    },
  ],
  testimonials: [
    {
      quote:
        "Fast turnaround, clean implementation, and communication that made the project move smoothly.",
      by: "Freelance Client",
    },
    {
      quote:
        "Strong understanding of both design and development. The final output felt production-ready.",
      by: "Startup Collaborator",
    },
  ],
  contact: {
    title: "Get In",
    highlight: "Touch",
    intro:
      "Explore my work and connect for freelance opportunities and collaboration.",
    email: siteConfig.email,
    linkedinUrl: siteConfig.social.linkedin,
    githubUrl: siteConfig.social.github,
    portfolioUrl: siteConfig.social.portfolio,
  },
};
