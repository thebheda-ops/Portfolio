export const siteConfig = {
  brand: "BTM",
  name: "Bal Krishna Thapa Magar",
  location: "Kathmandu, Bagmati, Nepal",
  email: "balkrishnathapamagar2005@gmail.com",
  photoUrl:
    "https://media.licdn.com/dms/image/v2/D5603AQEz_GyDtpoqqA/profile-displayphoto-scale_400_400/B56Zy4ZKGwHAAk-/0/1772620131415?e=1774483200&v=beta&t=ICvDEztEBCOzEYxWS0aaSeux9yxsHUIYjnpehPflMsc",
  social: {
    github: "https://github.com/theBheda-ops",
    whatsapp: "https://wa.me/9779705086562",
    linkedin: "https://www.linkedin.com/in/bal-krishna-thapa-magar-02603a346/",
    portfolio: "https://balkrishna-thapamagar.vercel.app/",
    resume: "",
  },
};

export const pageContent = {
  brand: siteConfig.brand,

  hero: {
    pill: "Open to junior frontend roles",
    name: siteConfig.name,
    role: "Frontend Developer (React / Next.js)",
    headline: "I build fast, modern web experiences for real businesses.",
    availability: `${siteConfig.location} - Remote friendly`,
    subtext:
      "I help local businesses and small teams launch clean, responsive websites and web apps. My focus is clear UI, reliable performance, and easy-to-maintain code that keeps projects simple for clients and teams.",
    badges: ["React", "Next.js", "Tailwind CSS", "Responsive UI"],
  },

  about: {
    photoLabel: "BK",
    description:
      "I am a frontend developer from Kathmandu who enjoys turning ideas into real-world products. I focus on clean interfaces, practical UX, and smooth performance. I am looking for a junior role where I can learn from a team and contribute to real projects from day one.",
    highlights: [
      "Strong with React and modern UI patterns",
      "Builds mobile-first, responsive layouts",
      "Comfortable collaborating and iterating quickly",
    ],
  },

  services: {
    intro: "The kind of work I can deliver for teams and clients.",
    items: [
      {
        title: "Business Websites",
        description:
          "Fast, clean websites that explain your business clearly and convert visitors into leads.",
        bullets: [
          "Custom sections tailored to your brand",
          "Clear CTAs to drive inquiries",
          "Mobile-first and optimized",
        ],
      },
      {
        title: "Frontend UI Builds",
        description:
          "React and Next.js interfaces that feel modern, responsive, and reliable.",
        bullets: [
          "Reusable components and clean structure",
          "UI aligned to product goals",
          "Stable layout across devices",
        ],
      },
      {
        title: "Fixes and Improvements",
        description:
          "Ongoing help to improve UI, performance, and polish after launch.",
        bullets: [
          "Bug fixes and UI refinement",
          "Performance and layout cleanup",
          "Quick iteration support",
        ],
      },
    ],
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
          name: "Next.js",
          note: "Structured routing and performance-friendly apps.",
        },
        {
          name: "Tailwind CSS",
          note: "Consistent UI styling with speed and clarity.",
        },
      ],
    },
    {
      title: "Core Skills",
      items: [
        {
          name: "JavaScript (ES6+)",
          note: "Clean, readable logic for UI and API integration.",
        },
        {
          name: "Responsive Design",
          note: "Layouts that feel solid across phones, tablets, and desktop.",
        },
        {
          name: "UI/UX Focus",
          note: "Design decisions guided by clarity and usability.",
        },
      ],
    },
    {
      title: "Tools",
      items: [
        {
          name: "Git + GitHub",
          note: "Version control and collaboration workflows.",
        },
        {
          name: "Vercel",
          note: "Fast deployments and modern hosting.",
        },
        {
          name: "Figma",
          note: "Interpreting and implementing design systems.",
        },
      ],
    },
  ],

  experience: [
    {
      period: "March 2023 - Present",
      title: "Freelance Frontend Developer",
      org: "Independent - Kathmandu, Nepal",
      detail:
        "Design and build websites and small web apps for local businesses, focusing on clean UI, responsive layouts, and clear communication during delivery.",
    },
    {
      period: "March 2023 - August 2024",
      title: "Web Developer",
      org: "Gizmo Store",
      detail:
        "Worked on client-facing websites and internal tools, improving UI consistency and deployment stability.",
    },
  ],

  education: [
    {
      period: "Dec 2025 - Dec 2029",
      title: "Bachelor of Computer Application (BCA)",
      org: "Divya Gyan College of Technology and Management",
      detail: "Computer Information Technology administration and management.",
    },
    {
      period: "2023 - 2025",
      title: "+2 - Computer Science",
      org: "Trinity Int'l SS/College",
      detail: "Higher secondary studies with a focus on computer science.",
    },
  ],

  featuredProject: {
    title: "Tattoo Studio Website",
    badge: "Featured Project",
    summary:
      "A dark, premium portfolio site concept designed to showcase tattoo work and drive bookings through WhatsApp.",
    stack: ["Next.js", "Tailwind CSS", "Responsive UI"],
    highlights: [
      "Gallery-first layout to highlight artwork",
      "WhatsApp booking flow for quick inquiries",
      "Mobile-first layout for clients on the go",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1545239351-ef35f43d514b?w=900&h=640&fit=crop",
    liveUrl: "#",
    githubUrl: null,
  },

  projects: [
    {
      title: "Global Study Hub",
      summary:
        "Concept project for students to explore programs, compare options, and track applications in one place.",
      stack: ["React", "Tailwind CSS", "JavaScript"],
      highlights: [
        "Program comparison and search",
        "Student application tracking",
        "Clean, friendly UI",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: null,
    },
    {
      title: "Nepal Travels",
      summary:
        "Responsive travel agency website with itinerary highlights, destination pages, and clear contact flows.",
      stack: ["React", "Tailwind CSS", "Vite"],
      highlights: [
        "Destination-led layout",
        "CTA-focused hero and packages",
        "Mobile-ready booking flow",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: null,
    },
    {
      title: "Everest Guest House",
      summary:
        "Booking-focused hospitality interface designed to simplify the reservation flow.",
      stack: ["MERN", "Booking Workflow"],
      highlights: [
        "Inquiry-first booking funnel",
        "Room and pricing cards",
        "Simple contact capture",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: null,
    },
  ],

  testimonials: [
    {
      quote:
        "Clear communication, fast turnaround, and a website that matched exactly what we discussed.",
      by: "Client feedback - Kathmandu",
    },
    {
      quote:
        "Good balance between design and development. The site felt production-ready.",
      by: "Peer feedback",
    },
  ],

  availability: {
    title: "Available for work",
    subtitle:
      "Open to junior frontend roles and freelance projects with a focus on clean UI and responsive delivery.",
    roles: [
      "Junior Frontend Developer",
      "Frontend UI Projects",
      "Business Website Builds",
    ],
  },

  contact: {
    intro:
      "If you are hiring a junior frontend developer or need help with a website, feel free to reach out. The fastest way to contact me is usually WhatsApp.",
    notes: [
      "Based in Kathmandu and available for remote work.",
      "Open to junior frontend roles and freelance projects.",
      "Fastest response is usually on WhatsApp during daytime (NPT).",
    ],
    email: siteConfig.email,
    whatsappUrl: siteConfig.social.whatsapp,
    linkedinUrl: siteConfig.social.linkedin,
    githubUrl: siteConfig.social.github,
    portfolioUrl: siteConfig.social.portfolio,
    resumeUrl: siteConfig.social.resume,
  },
};
