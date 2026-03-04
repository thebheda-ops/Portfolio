// content.js
// ─────────────────────────────────────────────────────────────────────────────
// All site-wide text and data lives here.
// Two exports:
//   1. siteConfig  — identity info reused across pages (name, links, etc.)
//   2. pageContent — everything the portfolio site renders
//
// Why keep them separate?
//   siteConfig is for things you'd reuse in a navbar, footer, or <meta> tags.
//   pageContent is specific to the portfolio page layout.
// ─────────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  brand: "BTM",
  location: "📍 Kathmandu, Bagmati, Nepal",
  email: "balkrishnathapamagar2005@gmail.com",
  social: {
    github: "https://github.com/theBheda-ops",
    whatsapp: "https://wa.me/9779705086562",
    linkedin: "https://www.linkedin.com/in/bal-krishna-thapa-magar-02603a346/",
    portfolio: "https://balkrishna-thapamagar.vercel.app/",
  },
};

export const pageContent = {
  brand: siteConfig.brand,

  hero: {
    headline: "I build things for the web.",
    role: "MERN Stack Developer · Problem Solver · Tech Enthusiast",
    availability: siteConfig.location,
    subtext:
      "My focus is on creating clean, responsive, and user-centric digital experiences while solving real problems with practical code.",
  },

  about: {
    // photoLabel is the fallback avatar text shown if you don't have a profile photo
    photoLabel: "BK",
    description:
      "I don't just write code — I enjoy the challenge of solving complex problems and the constant journey of learning how to build better software. Driven by curiosity and a love for the craft, I'm looking for opportunities to contribute to innovative projects and grow alongside a talented team.",
  },

  skillGroups: [
    {
      title: "Frontend",
      items: [
        {
          name: "React",
          note: "Component-driven interfaces and reusable UI patterns.",
        },
        {
          name: "TypeScript",
          note: "Strict typing for safer, more maintainable code.",
        },
        {
          name: "Tailwind CSS",
          note: "Rapid, consistent styling for responsive layouts.",
        },
      ],
    },
    {
      title: "Web Delivery",
      items: [
        {
          name: "WordPress",
          note: "Business websites, content setup, and customization.",
        },
        {
          name: "Web Development",
          note: "End-to-end implementation from UI to deployment.",
        },
        {
          name: "Graphics",
          note: "Basic visual assets and branding-friendly design work.",
        },
      ],
    },
    {
      title: "Backend & Tools",
      items: [
        {
          name: "Node.js + Express",
          note: "REST APIs and structured backend service patterns.",
        },
        {
          name: "MongoDB",
          note: "Schema design, querying, and app data integration.",
        },
        {
          name: "Git & Deployment",
          note: "GitHub workflows, Vercel deployment, and CI basics.",
        },
      ],
    },
  ],

  experience: [
    {
      period: "March 2023 – Present",
      title: "Freelance Web Developer",
      org: "Independent",
      detail:
        "Built websites for local businesses including tattoo studios and travel brands. Handled client communication, design feedback, and deployment.",
    },
    {
      period: "March 2023 – August 2024",
      title: "Web Developer",
      org: "Gizmo Store",
      detail:
        "Delivered client-facing websites and improved user experience across web properties.",
    },
  ],

  education: [
    {
      period: "Dec 2025 – Dec 2029",
      title: "Bachelor of Computer Application (BCA)",
      org: "Divya Gyan College of Technology and Management",
      detail: "Computer Information Technology Administration and Management.",
    },
    {
      period: "2023 – 2025",
      title: "+2 · Computer Science",
      org: "Trinity Int'l SS/College",
      detail: "Higher secondary studies with a focus on computer science.",
    },
  ],

  // Add githubUrl / liveUrl per project. Set to null if not available — button won't render.
  projects: [
    {
      title: "Global Study Hub",
      summary:
        "Platform for students to explore programs, compare options, and track applications in one place.",
      stack: "React · Tailwind · JavaScript",
      liveUrl: "#",
      githubUrl: null,
    },
    {
      title: "Nepal Travels",
      summary:
        "Responsive travel agency website with itinerary search flows, curated destination pages, and polished UX.",
      stack: "React · Tailwind · Vite",
      liveUrl: "#",
      githubUrl: null,
    },
    {
      title: "Everest Guest House",
      summary:
        "Booking-focused hospitality interface designed to increase inquiries and simplify the reservation flow.",
      stack: "MERN · Booking Workflow",
      liveUrl: "#",
      githubUrl: null,
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
    intro:
      "Explore my work and reach out for freelance opportunities or collaboration.",
    email: siteConfig.email,
    whatsappUrl: siteConfig.social.whatsapp,
    linkedinUrl: siteConfig.social.linkedin,
    githubUrl: siteConfig.social.github,
    portfolioUrl: siteConfig.social.portfolio,
  },
};
