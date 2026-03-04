import { useEffect, useState } from "preact/hooks";
import {
  FaSun,
  FaMoon,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaExternalLinkAlt,
  FaQuoteLeft,
  FaMapMarkerAlt,
  FaCode,
  FaServer,
  FaTools,
  FaBriefcase,
  FaGraduationCap,
  FaProjectDiagram,
  FaUser,
  FaPaperPlane,
} from "react-icons/fa6";
import { pageContent } from "./content";

// ============================================
// Header Component
// ============================================
function SiteHeader({ brand }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleChange = (e) => {
      if (e.matches) setIsMenuOpen(false);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
      setTheme(saved);
    } else {
      setTheme(
        window.matchMedia("(prefers-color-scheme: light)").matches
          ? "light"
          : "dark",
      );
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  const navItems = [
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-300 ${scrolled ? "border-b border-line bg-topbar" : "bg-transparent"}`}
    >
      <div className='max-w-shell mx-auto px-4 md:px-6 flex items-center justify-between h-16'>
        <a
          href='#home'
          className='text-2xl font-display font-bold text-accent tracking-wider'
        >
          {brand.toUpperCase()}
        </a>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center gap-6'>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className='text-sm uppercase tracking-wider text-nav-link hover:text-accent transition-colors'
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className='flex items-center gap-2'>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className='w-10 h-9 flex items-center justify-center rounded-lg border border-line bg-menu-toggle-bg text-text hover:border-accent hover:text-accent transition-all'
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <FaSun className='w-4 h-4' />
            ) : (
              <FaMoon className='w-4 h-4' />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className='md:hidden w-10 h-9 flex flex-col justify-center items-center gap-1.5 rounded-lg border border-line bg-menu-toggle-bg p-2'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle menu'
          >
            <span className='w-5 h-0.5 bg-menu-toggle-line rounded-full transition-transform' />
            <span className='w-5 h-0.5 bg-menu-toggle-line rounded-full transition-transform' />
            <span className='w-5 h-0.5 bg-menu-toggle-line rounded-full transition-transform' />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden absolute top-full left-4 right-4 mt-2 p-4 bg-panel border border-line rounded-xl shadow-menu'>
          <nav className='flex flex-col gap-2'>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className='px-4 py-2 text-sm uppercase tracking-wider text-nav-link hover:text-accent hover:bg-panel-soft rounded-lg transition-all'
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

// ============================================
// Hero Section
// ============================================
function HeroSection({ hero, brand }) {
  const badge = brand ?? "Portfolio";
  const headline = hero?.headline ?? "I build things for the web.";
  const role = hero?.role ?? "MERN Stack Developer";
  const location = hero?.availability ?? "Open to remote work";
  const subtext = hero?.subtext ?? "";

  return (
    <section id='home' className='min-h-screen flex items-center pt-16'>
      <div className='max-w-shell mx-auto px-4 md:px-6 w-full'>
        <div className='max-w-4xl'>
          <div className='inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-xs font-medium uppercase tracking-widest rounded-full border border-success/30 text-success bg-success/10'>
            <span className='w-2 h-2 rounded-full bg-success animate-pulse' />
            Available for work
          </div>

          <h1 className='text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-text-strong leading-tight mb-4'>
            {headline}
          </h1>

          <p className='text-lg md:text-xl text-accent font-medium mb-2'>
            {role}
          </p>

          <div className='flex items-center gap-2 text-muted mb-6'>
            <FaMapMarkerAlt className='w-4 h-4' />
            <span>{location}</span>
          </div>

          {subtext && (
            <p className='text-lg text-muted max-w-2xl leading-relaxed mb-8'>
              {subtext}
            </p>
          )}

          <div className='flex flex-wrap gap-4'>
            <a href='#projects' className='btn btn-primary'>
              View Projects
            </a>
            <a href='#contact' className='btn'>
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// About Section
// ============================================
function AboutSection({ about }) {
  if (!about) return null;

  const description = about?.description ?? "";
  const photoLabel = about?.photoLabel ?? "BK";

  return (
    <section id='about' className='section'>
      <div className='max-w-shell mx-auto px-4 md:px-6'>
        <p className='section-label'>About Me</p>
        <h2 className='section-title'>
          Building digital experiences that matter
        </h2>

        <div className='grid md:grid-cols-2 gap-8 items-start'>
          <div className='order-2 md:order-1'>
            <p className='text-muted leading-relaxed text-lg'>{description}</p>

            <div className='mt-8 grid sm:grid-cols-2 gap-4'>
              <div className='card flex items-center gap-3'>
                <div className='w-12 h-12 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent'>
                  <FaCode className='w-5 h-5' />
                </div>
                <div>
                  <h3 className='font-semibold text-text-strong'>Clean Code</h3>
                  <p className='text-sm text-muted'>Maintainable & scalable</p>
                </div>
              </div>

              <div className='card flex items-center gap-3'>
                <div className='w-12 h-12 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent'>
                  <FaTools className='w-5 h-5' />
                </div>
                <div>
                  <h3 className='font-semibold text-text-strong'>
                    Modern Stack
                  </h3>
                  <p className='text-sm text-muted'>MERN & more</p>
                </div>
              </div>
            </div>
          </div>

          <div className='order-1 md:order-2'>
            <div className='aspect-square max-w-sm mx-auto rounded-panel bg-gradient-to-br from-accent/20 to-panel-soft border border-line overflow-hidden flex items-center justify-center'>
              <span className='text-6xl font-display font-bold text-accent'>
                {photoLabel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// Skills Section
// ============================================
function SkillsSection({ groups }) {
  const skillGroups = Array.isArray(groups) ? groups : [];
  if (!skillGroups.length) return null;

  const getIcon = (title) => {
    switch (title) {
      case "Frontend":
        return FaCode;
      case "Backend & Tools":
        return FaServer;
      case "Web Delivery":
        return FaProjectDiagram;
      default:
        return FaTools;
    }
  };

  return (
    <section id='skills' className='section bg-panel/30'>
      <div className='max-w-shell mx-auto px-4 md:px-6'>
        <p className='section-label'>Core Skills</p>
        <h2 className='section-title'>What I work with</h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {skillGroups.map((group) => {
            const Icon = getIcon(group.title);
            return (
              <div key={group.title} className='card'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent'>
                    <Icon className='w-5 h-5' />
                  </div>
                  <h3 className='text-lg font-display font-semibold text-text-strong'>
                    {group.title}
                  </h3>
                </div>

                <ul className='space-y-3'>
                  {(group.items ?? []).map((item) => (
                    <li key={item.name} className='text-muted'>
                      <span className='font-semibold text-text'>
                        {item.name}
                      </span>
                      {item.note && (
                        <span className='text-sm'> — {item.note}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================
// Experience Section
// ============================================
function ExperienceSection({ items }) {
  const experienceItems = Array.isArray(items) ? items : [];
  if (!experienceItems.length) return null;

  return (
    <section id='experience' className='section'>
      <div className='max-w-shell mx-auto px-4 md:px-6'>
        <p className='section-label'>Work History</p>
        <h2 className='section-title'>Experience</h2>

        <div className='space-y-4'>
          {experienceItems.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className='card flex flex-col sm:flex-row sm:items-start gap-4'
            >
              <div className='sm:w-40 flex-shrink-0'>
                <span className='text-xs uppercase tracking-wider text-accent font-medium'>
                  {item.period}
                </span>
              </div>
              <div className='flex-1'>
                <h3 className='text-lg font-semibold text-text-strong'>
                  {item.title}
                </h3>
                <p className='text-muted mb-2'>{item.org}</p>
                <p className='text-muted text-sm leading-relaxed'>
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// Education Section
// ============================================
function EducationSection({ items }) {
  const educationItems = Array.isArray(items) ? items : [];
  if (!educationItems.length) return null;

  return (
    <section id='education' className='section'>
      <div className='max-w-shell mx-auto px-4 md:px-6'>
        <p className='section-label'>Learning</p>
        <h2 className='section-title'>Education</h2>

        <div className='space-y-4'>
          {educationItems.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className='card flex flex-col sm:flex-row sm:items-start gap-4'
            >
              <div className='sm:w-40 flex-shrink-0'>
                <span className='text-xs uppercase tracking-wider text-accent font-medium'>
                  {item.period}
                </span>
              </div>
              <div className='flex-1'>
                <h3 className='text-lg font-semibold text-text-strong'>
                  {item.title}
                </h3>
                <p className='text-muted mb-1'>{item.org}</p>
                <p className='text-muted text-sm'>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// Projects Section
// ============================================
function ProjectsSection({ projects }) {
  const projectList = Array.isArray(projects) ? projects : [];
  if (!projectList.length) return null;

  return (
    <section id='projects' className='section bg-panel/30'>
      <div className='max-w-shell mx-auto px-4 md:px-6'>
        <p className='section-label'>Portfolio</p>
        <h2 className='section-title'>Selected Projects</h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projectList.map((project, index) => {
            const hasLive = Boolean(project.liveUrl && project.liveUrl !== "#");
            const hasGithub = Boolean(
              project.githubUrl && project.githubUrl !== "#",
            );

            return (
              <article key={`${project.title}-${index}`} className='card group'>
                <div className='flex items-start justify-between mb-3'>
                  <h3 className='text-lg font-semibold text-text-strong group-hover:text-accent transition-colors'>
                    {project.title}
                  </h3>
                  <span className='text-xs text-muted'>#{index + 1}</span>
                </div>

                <p className='text-muted text-sm mb-4 leading-relaxed'>
                  {project.summary}
                </p>

                <p className='text-xs text-accent font-medium mb-4'>
                  {project.stack}
                </p>

                <div className='flex flex-wrap gap-2'>
                  {hasLive && (
                    <a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted hover:text-accent border border-line hover:border-accent px-3 py-1.5 rounded-full transition-all'
                    >
                      Live Demo <FaExternalLinkAlt className='w-3 h-3' />
                    </a>
                  )}
                  {hasGithub && (
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted hover:text-accent border border-line hover:border-accent px-3 py-1.5 rounded-full transition-all'
                    >
                      GitHub <FaGithub className='w-3 h-3' />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================
// Testimonials Section
// ============================================
function TestimonialsSection({ items }) {
  const testimonials = Array.isArray(items) ? items : [];
  if (!testimonials.length) return null;

  return (
    <section id='testimonials' className='section'>
      <div className='max-w-shell mx-auto px-4 md:px-6'>
        <p className='section-label'>Feedback</p>
        <h2 className='section-title'>What People Say</h2>

        <div className='grid md:grid-cols-2 gap-6'>
          {testimonials.map((item, index) => (
            <article key={index} className='panel'>
              <FaQuoteLeft className='w-8 h-8 text-accent/50 mb-4' />
              <p className='text-lg text-panel-text mb-4 italic'>
                "{item.quote}"
              </p>
              <p className='text-sm font-medium text-accent'>— {item.by}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// Contact Section
// ============================================
function ContactSection({ contact }) {
  if (!contact) return null;

  const links = [
    {
      label: "Email",
      href: `mailto:${contact.email}`,
      icon: FaEnvelope,
      show: contact.email,
    },
    {
      label: "LinkedIn",
      href: contact.linkedinUrl,
      icon: FaLinkedin,
      show: contact.linkedinUrl,
    },
    {
      label: "GitHub",
      href: contact.githubUrl,
      icon: FaGithub,
      show: contact.githubUrl,
    },
    {
      label: "WhatsApp",
      href: contact.whatsappUrl,
      icon: FaWhatsapp,
      show: contact.whatsappUrl,
    },
    {
      label: "Portfolio",
      href: contact.portfolioUrl,
      icon: FaExternalLinkAlt,
      show: contact.portfolioUrl,
    },
  ].filter((link) => link.show);

  if (!links.length) return null;

  return (
    <section id='contact' className='section bg-panel/30'>
      <div className='max-w-shell mx-auto px-4 md:px-6'>
        <p className='section-label'>Get in Touch</p>
        <h2 className='section-title'>Let's work together</h2>

        <p className='text-muted text-lg mb-8 max-w-2xl'>
          {contact.intro ??
            "Feel free to reach out for collaborations, opportunities, or just to say hello."}
        </p>

        <div className='grid sm:grid-cols-2 gap-4 max-w-3xl'>
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className='card flex items-center gap-4 group'
              >
                <div className='w-12 h-12 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all'>
                  <Icon className='w-5 h-5' />
                </div>
                <div>
                  <span className='text-xs uppercase tracking-wider text-muted block'>
                    {link.label}
                  </span>
                  <span className='text-text group-hover:text-accent transition-colors truncate'>
                    {link.label === "Email"
                      ? contact.email
                      : link.href.replace(/^https?:\/\//, "")}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================
// Footer Component
// ============================================
function SiteFooter({ brand }) {
  const year = new Date().getFullYear();

  return (
    <footer className='border-t border-line py-8'>
      <div className='max-w-shell mx-auto px-4 md:px-6 text-center'>
        <p className='text-muted'>
          {brand.toUpperCase()} © {year} — Built with passion
        </p>
      </div>
    </footer>
  );
}

// ============================================
// Main App Component
// ============================================
export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className='min-h-screen bg-bg'>
      <SiteHeader brand={pageContent.brand} />

      <main>
        <HeroSection hero={pageContent.hero} brand={pageContent.brand} />

        <div className='reveal'>
          <AboutSection about={pageContent.about} />
        </div>

        <div className='reveal'>
          <SkillsSection groups={pageContent.skillGroups} />
        </div>

        <div className='reveal grid md:grid-cols-2 gap-8 max-w-shell mx-auto px-4 md:px-6'>
          <ExperienceSection items={pageContent.experience} />
          <EducationSection items={pageContent.education} />
        </div>

        <div className='reveal'>
          <ProjectsSection projects={pageContent.projects} />
        </div>

        <div className='reveal'>
          <TestimonialsSection items={pageContent.testimonials} />
        </div>

        <div className='reveal'>
          <ContactSection contact={pageContent.contact} />
        </div>
      </main>

      <SiteFooter brand={pageContent.brand} />
    </div>
  );
}
