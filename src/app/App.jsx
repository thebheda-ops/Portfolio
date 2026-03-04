import { useEffect, useState } from "preact/hooks";
import { pageContent, siteConfig } from "./content";

const sectionIds = ["home", "about", "skills", "experience", "education", "projects", "contact"];

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function TimelineList({ items }) {
  if (!Array.isArray(items) || !items.length) return null;

  return (
    <div className='timeline-list'>
      {items.map((item) => (
        <article key={`${item.title}-${item.period}`} className='timeline-item'>
          <p className='timeline-period'>{item.period}</p>
          <h3>{item.title}</h3>
          <p className='timeline-org'>{item.org}</p>
          <p>{item.detail}</p>
        </article>
      ))}
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [navOpen, setNavOpen] = useState(false);

  const {
    brand,
    hero,
    about,
    skillGroups,
    experience,
    education,
    projects,
    testimonials,
    contact,
  } = pageContent;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id) {
              setActiveSection(id);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -55% 0px",
        threshold: 0.3,
      },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const contactLinks = [
    contact?.email
      ? {
          label: "Email",
          value: contact.email,
          href: `mailto:${contact.email}`,
        }
      : null,
    contact?.linkedinUrl
      ? {
          label: "LinkedIn",
          value: "View profile",
          href: contact.linkedinUrl,
        }
      : null,
    contact?.githubUrl
      ? {
          label: "GitHub",
          value: "View repositories",
          href: contact.githubUrl,
        }
      : null,
    contact?.whatsappUrl
      ? {
          label: "WhatsApp",
          value: "Chat directly",
          href: contact.whatsappUrl,
        }
      : null,
    contact?.portfolioUrl
      ? {
          label: "Portfolio",
          value: "Live URL",
          href: contact.portfolioUrl,
        }
      : null,
  ].filter(Boolean);

  return (
    <div className='portfolio-shell'>
      <div className='bg-glow bg-glow-left' aria-hidden='true' />
      <div className='bg-glow bg-glow-right' aria-hidden='true' />

      <header className={`top-nav${navOpen ? " is-open" : ""}`}>
        <a href='#home' className='brand-mark'>
          {brand}
        </a>
        <button
          type='button'
          className='nav-toggle'
          aria-label={navOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={navOpen}
          onClick={() => setNavOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav className='nav-links' aria-label='Primary'>
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.href}
                href={item.href}
                className={isActive ? "is-active" : undefined}
                onClick={() => setNavOpen(false)}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        <a className='nav-cta' href='#contact'>
          Let&apos;s Talk
        </a>
      </header>

      <main className='content-wrap'>
        <section id='home' className='hero-card'>
          <p className='hero-pill'>{hero?.pill || "Available for freelance work"}</p>
          <h1>{hero?.headline}</h1>
          <p className='hero-role'>{hero?.role}</p>
          <p className='hero-location'>{hero?.availability}</p>
          <p className='hero-copy'>{hero?.subtext}</p>
          <div className='hero-actions'>
            <a href='#projects' className='btn-primary'>
              See Projects
            </a>
            <a
              href={siteConfig.social.whatsapp}
              className='btn-secondary'
              target='_blank'
              rel='noreferrer'
            >
              WhatsApp Me
            </a>
          </div>
        </section>

        <section id='about' className='section-card'>
          <h2>About Me</h2>
          <p>{about?.description}</p>
        </section>

        <section id='skills' className='section-card'>
          <h2>Core Skills</h2>
          <div className='skills-grid'>
            {(skillGroups ?? []).map((group) => (
              <article key={group.title} className='skill-card'>
                <h3>{group.title}</h3>
                <ul>
                  {(group.items ?? []).map((item) => (
                    <li key={item.name}>
                      <strong>{item.name}</strong>
                      <span>{item.note}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <div className='two-col'>
          <section id='experience' className='section-card'>
            <h2>Experience</h2>
            <TimelineList items={experience} />
          </section>

          <section id='education' className='section-card'>
            <h2>Education</h2>
            <TimelineList items={education} />
          </section>
        </div>

        <section id='projects' className='section-card'>
          <h2>Selected Projects</h2>
          <div className='projects-grid'>
            {(projects ?? []).map((project) => {
              const hasLive = Boolean(project.liveUrl && project.liveUrl !== "#");
              const hasGitHub = Boolean(project.githubUrl && project.githubUrl !== "#");

              return (
                <article key={project.title} className='project-card'>
                  <h3>{project.title}</h3>
                  <p className='project-summary'>{project.summary}</p>
                  <p className='project-stack'>{project.stack}</p>
                  <div className='project-links'>
                    {hasGitHub ? (
                      <a href={project.githubUrl} target='_blank' rel='noreferrer'>
                        GitHub
                      </a>
                    ) : (
                      <span className='chip-muted'>Private Repo</span>
                    )}
                    {hasLive ? (
                      <a href={project.liveUrl} target='_blank' rel='noreferrer'>
                        Live Demo
                      </a>
                    ) : (
                      <span className='chip-muted'>Demo Soon</span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {Array.isArray(testimonials) && testimonials.length > 0 ? (
          <section className='section-card'>
            <h2>Testimonials</h2>
            <div className='testimonials-grid'>
              {testimonials.map((item) => (
                <blockquote key={item.by} className='testimonial-card'>
                  <p>&quot;{item.quote}&quot;</p>
                  <footer>{item.by}</footer>
                </blockquote>
              ))}
            </div>
          </section>
        ) : null}

        <section id='contact' className='section-card'>
          <h2>Contact</h2>
          <p className='contact-intro'>{contact?.intro}</p>
          <ul className='contact-links'>
            {contactLinks.map((link) => (
              <li key={link.label}>
                <span>{link.label}</span>
                <a href={link.href} target='_blank' rel='noreferrer'>
                  {link.value}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className='site-foot'>
        <p>
          {brand} • {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
