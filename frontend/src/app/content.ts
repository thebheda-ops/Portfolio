import { siteConfig } from "../constants/site";
import type { PageContent } from "./types";

export const pageContent: PageContent = {
  brand: siteConfig.brand,
  hero: {
    role: "Freelance MERN Developer",
    availability: "Available for new projects",
    headline: "I build clean, scalable web products for businesses that need reliable delivery.",
    subtext:
      "From landing pages to full-stack platforms, I deliver practical MERN solutions with clear architecture, clean code, and measurable outcomes.",
  },
  about: {
    title: "About",
    highlight: "Me",
    description:
      "I am a developer focused on building practical web solutions with strong UX and maintainable code. I enjoy solving real business problems with the MERN stack and continuously improving my development standards.",
    photoLabel: "BK",
  },
  skillGroups: [
    {
      title: "Frontend",
      items: ["React", "Vite", "Tailwind CSS", "TypeScript"],
    },
    {
      title: "Backend & DB",
      items: ["Node.js", "Express", "MongoDB", "REST APIs"],
    },
    {
      title: "Tools & CI/CD",
      items: ["Git & GitHub", "Vercel", "Netlify", "Postman"],
    },
  ],
  experience: [
    {
      period: "2024 - Present",
      title: "Frontend Developer (Self-Directed Learning)",
      org: "Personal Projects & Practice",
      detail:
        "Building responsive web applications while strengthening frontend architecture, reusable components, and API integration patterns.",
    },
    {
      period: "2023 - 2025",
      title: "+2 (Management)",
      org: "Trinity International SS & College",
      detail:
        "Completed coursework in core software concepts and practical web development foundations.",
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
      "I am available for freelance projects and collaborations that need modern, reliable MERN development.",
    email: siteConfig.email,
    linkedinUrl: siteConfig.social.linkedin,
    githubUrl: siteConfig.social.github,
  },
};

