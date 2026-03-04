import { pageContent } from "./content";

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

      <header className='top-nav'>
        <a href='#home' className='brand-mark'>
          {brand}
        </a>
        <nav className='nav-links' aria-label='Primary'>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className='nav-cta' href='#contact'>
          Let&apos;s Work
        </a>
      </header>

      <main className='content-wrap'>
        <section id='home' className='hero-card'>
          <p className='hero-pill'>Open to Work</p>
          <h1>{hero?.headline}</h1>
          <p className='hero-role'>{hero?.role}</p>
          <p className='hero-location'>{hero?.availability}</p>
          <p className='hero-copy'>{hero?.subtext}</p>
          <div className='hero-actions'>
            <a href='#projects' className='btn-primary'>
              See Projects
            </a>
            <a href='#contact' className='btn-secondary'>
              Contact Me
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
