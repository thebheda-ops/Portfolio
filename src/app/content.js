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
    pill: "Available for freelance projects in Nepal",
    headline: "MERN stack developer for local Nepali businesses.",
    role: "Freelance MERN Stack Developer · Web Apps · Business Websites",
    availability: siteConfig.location,
    subtext:
      "I help small businesses, agencies, and growing brands in Nepal get fast, modern web experiences built with the MERN stack. From simple business sites to custom web apps, I focus on clean implementation, realistic timelines, and clear communication (often right over WhatsApp).",
  },

  about: {
    // photoLabel is the fallback avatar text shown if you don't have a profile photo
    photoLabel: "BK",
    description:
      "I'm a MERN stack developer and freelancer from Kathmandu who enjoys turning vague ideas into working products. Most of my work is with local clients — shop owners, travel businesses, and small teams — where I handle everything from planning and wireframes to deployment and small iterations after launch. I care about clear communication, predictable delivery, and building something that actually helps your business, not just look good on a portfolio.",
  },

  skillGroups: [
    {
      title: "Frontend",
      items: [
        {
          name: "React",
          note: "Fast, responsive interfaces that feel smooth on both desktop and mobile.",
        },
        {
          name: "TypeScript",
          note: "Safer, more maintainable frontend code for complex features.",
        },
        {
          name: "Tailwind CSS",
          note: "Clean, consistent styling so sites look professional on every screen size.",
        },
      ],
    },
    {
      title: "Web Delivery",
      items: [
        {
          name: "WordPress",
          note: "Practical business websites, content setup, and theme customization.",
        },
        {
          name: "Web Development",
          note: "End-to-end implementation from UI to deployment for local and online clients.",
        },
        {
          name: "Graphics",
          note: "Basic visual assets so your site matches your brand and feels cohesive.",
        },
      ],
    },
    {
      title: "Backend & Tools",
      items: [
        {
          name: "Node.js + Express",
          note: "REST APIs and server logic for dashboards, bookings, and dynamic content.",
        },
        {
          name: "MongoDB",
          note: "Data models and queries for MERN applications.",
        },
        {
          name: "Git & Deployment",
          note: "GitHub workflows and deployment pipelines (Vercel and similar platforms).",
        },
      ],
    },
  ],

  experience: [
    {
      period: "March 2023 – Present",
      title: "Freelance Web Developer",
      org: "Independent · Kathmandu, Nepal",
      detail:
        "Design and build websites and small web apps for local businesses in Nepal, including tattoo studios and travel brands. Typical work includes planning the site structure, implementing the UI, connecting forms and basic integrations, and deploying to production with follow-up tweaks based on client feedback.",
    },
    {
      period: "March 2023 – August 2024",
      title: "Web Developer",
      org: "Gizmo Store",
      detail:
        "Worked on client-facing websites and internal tools, focusing on better user experience, cleaner layouts, and more stable deployments.",
    },
  ],

  education: [
    {
      period: "Dec 2025 – Dec 2029",
      title: "Bachelor of Computer Application (BCA)",
      org: "Divya Gyan College of Technology and Management",
      detail: "Computer Information Technology administration and management.",
    },
    {
      period: "2023 – 2025",
      title: "+2 · Computer Science",
      org: "Trinity Int'l SS/College",
      detail: "Higher secondary studies with a focus on computer science.",
    },
  ],

  // Add imageUrl, githubUrl / liveUrl per project. Set to null if not available — button won't render.
  projects: [
    {
      title: "Global Study Hub",
      summary:
        "Concept project for students to explore programs, compare options, and track applications in one place — designed for education consultancies and agencies.",
      stack: "React · Tailwind CSS · JavaScript",
      imageUrl:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: null,
    },
    {
      title: "Nepal Travels",
      summary:
        "Responsive travel agency website concept with itinerary highlights, destination pages, and clear calls-to-action to contact the agency.",
      stack: "React · Tailwind CSS · Vite",
      imageUrl:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: null,
    },
    {
      title: "Everest Guest House",
      summary:
        "Booking-focused hospitality interface designed to increase inquiries and simplify the reservation flow for a local guest house.",
      stack: "MERN · Booking workflow",
      imageUrl:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: null,
    },
  ],

  testimonials: [
    {
      quote:
        "Clear communication, fast turnaround, and a website that matched exactly what we discussed on calls.",
      by: "Freelance Client · Kathmandu",
    },
    {
      quote:
        "Good balance between design and development. The site felt production-ready, not like a rough demo.",
      by: "Startup Collaborator",
    },
  ],

  contact: {
    intro:
      "If you are a local business, agency, or team in Nepal and need a website or a web app, feel free to reach out. The fastest way to contact me is usually WhatsApp, but you can also email or connect on LinkedIn.",
    email: siteConfig.email,
    whatsappUrl: siteConfig.social.whatsapp,
    linkedinUrl: siteConfig.social.linkedin,
    githubUrl: siteConfig.social.github,
    portfolioUrl: siteConfig.social.portfolio,
  },
};
