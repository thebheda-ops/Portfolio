import { useEffect, useState } from "preact/hooks";
import { pageContent, siteConfig } from "./content";

const sectionIds = [
  "home",
  "about",
  "services",
  "skills",
  "experience",
  "education",
  "projects",
  "testimonials",
  "availability",
  "contact",
];

const navItems = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

const MapPinIcon = () => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
    <circle cx='12' cy='10' r='3'></circle>
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <line x1='5' y1='12' x2='19' y2='12'></line>
    <polyline points='12 5 19 12 12 19'></polyline>
  </svg>
);

const CodeIcon = () => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <polyline points='16 18 22 12 16 6'></polyline>
    <polyline points='8 6 2 12 8 18'></polyline>
  </svg>
);

const PaletteIcon = () => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <circle cx='13.5' cy='6.5' r='0.5' fill='currentColor'></circle>
    <circle cx='17.5' cy='10.5' r='0.5' fill='currentColor'></circle>
    <circle cx='8.5' cy='7.5' r='0.5' fill='currentColor'></circle>
    <circle cx='6.5' cy='12.5' r='0.5' fill='currentColor'></circle>
    <path d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z'></path>
  </svg>
);

const ServerIcon = () => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect x='2' y='2' width='20' height='8' rx='2' ry='2'></rect>
    <rect x='2' y='14' width='20' height='8' rx='2' ry='2'></rect>
    <line x1='6' y1='6' x2='6.01' y2='6'></line>
    <line x1='6' y1='18' x2='6.01' y2='18'></line>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    width='14'
    height='14'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
    <polyline points='15 3 21 3 21 9'></polyline>
    <line x1='10' y1='14' x2='21' y2='3'></line>
  </svg>
);

const GithubIcon = () => (
  <svg width='14' height='14' viewBox='0 0 24 24' fill='currentColor'>
    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
  </svg>
);

const MailIcon = () => (
  <svg
    width='18'
    height='18'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
    <polyline points='22,6 12,13 2,6'></polyline>
  </svg>
);

const LinkedinIcon = () => (
  <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor'>
    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor'>
    <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
  </svg>
);

function TimelineList({ items }) {
  if (!Array.isArray(items) || !items.length) return null;

  return (
    <div className='timeline-list'>
      {items.map((item, index) => (
        <article
          key={`${item.title}-${item.period}-${index}`}
          className='timeline-item'
          data-reveal
          style={{ transitionDelay: `${index * 0.08}s` }}
        >
          <p className='timeline-period'>{item.period}</p>
          <h3>{item.title}</h3>
          <p className='timeline-org'>{item.org}</p>
          <p className='timeline-detail'>{item.detail}</p>
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
    services,
    skillGroups,
    experience,
    education,
    featuredProject,
    projects,
    testimonials,
    availability,
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
      { root: null, rootMargin: "-25% 0px -60% 0px", threshold: 0.1 },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;

    document.body.style.overflow = navOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!elements.length) return undefined;

    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    elements.forEach((el) => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, []);

  const contactLinks = [
    contact?.email
      ? {
          label: "Email",
          value: contact.email,
          href: `mailto:${contact.email}`,
          icon: <MailIcon />,
          className: "",
        }
      : null,
    contact?.linkedinUrl
      ? {
          label: "LinkedIn",
          value: "Connect with me",
          href: contact.linkedinUrl,
          icon: <LinkedinIcon />,
          className: "linkedin",
        }
      : null,
    contact?.githubUrl
      ? {
          label: "GitHub",
          value: "View repositories",
          href: contact.githubUrl,
          icon: <GithubIcon />,
          className: "github",
        }
      : null,
    contact?.whatsappUrl
      ? {
          label: "WhatsApp",
          value: "Chat directly",
          href: contact.whatsappUrl,
          icon: <WhatsAppIcon />,
          className: "whatsapp",
        }
      : null,
    contact?.resumeUrl
      ? {
          label: "Resume",
          value: "Download PDF",
          href: contact.resumeUrl,
          icon: <ExternalLinkIcon />,
          className: "",
        }
      : null,
  ].filter(Boolean);

  const renderProjectLinks = (project) => {
    const hasLive = Boolean(project.liveUrl && project.liveUrl !== "#");
    const hasGitHub = Boolean(project.githubUrl && project.githubUrl !== "#");

    return (
      <div className='project-links'>
        {hasGitHub ? (
          <a
            href={project.githubUrl}
            className='project-link secondary'
            target='_blank'
            rel='noreferrer'
          >
            <GithubIcon /> Code
          </a>
        ) : (
          <span className='chip-muted'>Private Repo</span>
        )}
        {hasLive ? (
          <a
            href={project.liveUrl}
            className='project-link primary'
            target='_blank'
            rel='noreferrer'
          >
            Live Demo <ExternalLinkIcon />
          </a>
        ) : (
          <span className='chip-muted'>Coming Soon</span>
        )}
      </div>
    );
  };

  return (
    <div className='portfolio-shell'>
      <div className='bg-decoration bg-decoration-1' aria-hidden='true' />
      <div className='bg-decoration bg-decoration-2' aria-hidden='true' />
      <div className='bg-decoration bg-decoration-3' aria-hidden='true' />

      <div className='floating-shapes' aria-hidden='true'>
        <div className='floating-shape floating-shape-1' />
        <div className='floating-shape floating-shape-2' />
        <div className='floating-shape floating-shape-3' />
      </div>

      <header className={`top-nav ${navOpen ? "is-open" : ""}`}>
        <a href='#home' className='brand-mark'>
          {brand}
        </a>
        <button
          type='button'
          className='nav-toggle'
          aria-label={
            navOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={navOpen}
          onClick={() => setNavOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav className='nav-links' aria-label='Primary'>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={isActive ? "is-active" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                  setNavOpen(false);
                }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        <a
          className='nav-cta'
          href='#contact'
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
        >
          Let's Talk
        </a>
      </header>

      <div
        className={`mobile-nav ${navOpen ? "is-open" : ""}`}
        aria-hidden={!navOpen}
      >
        <button
          type='button'
          className='mobile-nav-backdrop'
          aria-label='Close navigation menu'
          onClick={() => setNavOpen(false)}
        />
        <div className='mobile-nav-panel' role='dialog' aria-label='Mobile menu'>
          <div className='mobile-nav-header'>
            <span className='mobile-nav-brand'>{brand}</span>
            <button
              type='button'
              className='mobile-nav-close'
              aria-label='Close navigation menu'
              onClick={() => setNavOpen(false)}
            >
              <span />
              <span />
            </button>
          </div>
          <nav className='mobile-nav-links' aria-label='Mobile primary'>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                  setNavOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className='mobile-nav-actions'>
            <a
              href='#contact'
              className='btn-primary'
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
                setNavOpen(false);
              }}
            >
              Let's Talk
            </a>
            <a
              href={contact?.whatsappUrl || siteConfig.social.whatsapp}
              className='btn-secondary'
              target='_blank'
              rel='noreferrer'
              onClick={() => setNavOpen(false)}
            >
              <WhatsAppIcon /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <main className='content-wrap'>
        <section id='home' className='hero-section' data-reveal>
          <div className='hero-content'>
            <span className='hero-pill'>
              {hero?.pill || "Available for frontend roles"}
            </span>
            <h1 className='hero-title'>
              Hi, I'm <span className='highlight'>{hero?.name || siteConfig.name}</span>
            </h1>
            <p className='hero-role'>{hero?.role}</p>
            <p className='hero-headline'>{hero?.headline}</p>
            <p className='hero-location'>
              <MapPinIcon />
              {hero?.availability}
            </p>
            <p className='hero-description'>{hero?.subtext}</p>
            {Array.isArray(hero?.badges) && hero.badges.length > 0 && (
              <div className='hero-badges'>
                {hero.badges.map((item) => (
                  <span key={item} className='badge'>
                    {item}
                  </span>
                ))}
              </div>
            )}
            <div className='hero-actions'>
              <a
                href='#projects'
                className='btn-primary'
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
              >
                View Work <ArrowRightIcon />
              </a>
              <a
                href='#contact'
                className='btn-secondary'
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                Contact Me
              </a>
              {siteConfig.social.resume ? (
                <a
                  href={siteConfig.social.resume}
                  className='btn-ghost'
                  target='_blank'
                  rel='noreferrer'
                >
                  Download Resume
                </a>
              ) : null}
            </div>
          </div>
          <div className='hero-image'>
            <div className='hero-avatar'>
              <img
                src={siteConfig.photoUrl}
                alt={hero?.name}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextSibling.style.display = "flex";
                }}
              />
              <div className='hero-avatar-fallback' style={{ display: "none" }}>
                {about?.photoLabel || "BK"}
              </div>
            </div>
          </div>
        </section>

        <section id='about' className='section-card' data-reveal>
          <div className='section-header'>
            <span className='section-number'>01</span>
            <h2 className='section-title'>About Me</h2>
          </div>
          <div className='about-content'>
            <p className='about-text'>{about?.description}</p>
            {Array.isArray(about?.highlights) && (
              <ul className='about-list'>
                {about.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <section id='services' className='section-card' data-reveal>
          <div className='section-header'>
            <span className='section-number'>02</span>
            <h2 className='section-title'>Services</h2>
          </div>
          {services?.intro && (
            <p className='section-description'>{services.intro}</p>
          )}
          <div className='services-grid'>
            {(services?.items ?? []).map((service, index) => (
              <article
                key={service.title}
                className='service-card'
                data-reveal
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {(service.bullets ?? []).map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id='skills' className='section-card' data-reveal>
          <div className='section-header'>
            <span className='section-number'>03</span>
            <h2 className='section-title'>Skills & Expertise</h2>
          </div>
          <div className='skills-grid'>
            {(skillGroups ?? []).map((group, index) => (
              <article
                key={group.title}
                className='skill-card'
                data-reveal
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <div className='skill-card-header'>
                  <div className={`skill-icon ${index === 1 ? "teal" : ""}`}>
                    {index === 0 ? (
                      <CodeIcon />
                    ) : index === 1 ? (
                      <PaletteIcon />
                    ) : (
                      <ServerIcon />
                    )}
                  </div>
                  <h3>{group.title}</h3>
                </div>
                <ul className='skill-list'>
                  {(group.items ?? []).map((item) => (
                    <li key={item.name}>
                      <span>
                        <strong>{item.name}</strong> - {item.note}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <div className='two-col'>
          <section id='experience' className='section-card' data-reveal>
            <div className='section-header'>
              <span className='section-number'>04</span>
              <h2 className='section-title'>Experience</h2>
            </div>
            <TimelineList items={experience} />
          </section>

          <section id='education' className='section-card' data-reveal>
            <div className='section-header'>
              <span className='section-number'>05</span>
              <h2 className='section-title'>Education</h2>
            </div>
            <TimelineList items={education} />
          </section>
        </div>

        <section id='projects' className='section-card'>
          <div className='section-header' data-reveal>
            <span className='section-number'>06</span>
            <h2 className='section-title'>Featured Work</h2>
          </div>
          {featuredProject ? (
            <article className='featured-card' data-reveal>
              <div className='featured-body'>
                {featuredProject.badge && (
                  <span className='featured-badge'>{featuredProject.badge}</span>
                )}
                <h3>{featuredProject.title}</h3>
                <p>{featuredProject.summary}</p>
                {Array.isArray(featuredProject.highlights) && (
                  <ul>
                    {featuredProject.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                <div className='project-stack'>
                  {(featuredProject.stack ?? []).map((tag) => (
                    <span key={tag} className='tech-tag'>
                      {tag}
                    </span>
                  ))}
                </div>
                {renderProjectLinks(featuredProject)}
              </div>
              <div className='featured-media'>
                {featuredProject.imageUrl ? (
                  <img
                    src={featuredProject.imageUrl}
                    alt={featuredProject.title}
                    loading='lazy'
                  />
                ) : (
                  <div className='featured-placeholder' />
                )}
              </div>
            </article>
          ) : null}

          <div className='section-subheader' data-reveal>
            <h3>More Projects</h3>
            <p>Additional concept builds focused on real business needs.</p>
          </div>

          <div className='projects-grid'>
            {(projects ?? []).map((project, index) => {
              const stackTags = Array.isArray(project.stack)
                ? project.stack
                : project.stack
                  ? project.stack.split("|").map((s) => s.trim())
                  : [];

              return (
                <article
                  key={project.title}
                  className='project-card'
                  data-reveal
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  {project.imageUrl && (
                    <div className='project-image'>
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        loading='lazy'
                      />
                    </div>
                  )}
                  <div className='project-content'>
                    <h3>{project.title}</h3>
                    <p className='project-summary'>{project.summary}</p>
                    {Array.isArray(project.highlights) &&
                      project.highlights.length > 0 && (
                        <ul className='project-highlights'>
                          {project.highlights.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )}
                    <div className='project-stack'>
                      {stackTags.map((tag, i) => (
                        <span key={i} className='tech-tag'>
                          {tag}
                        </span>
                      ))}
                    </div>
                    {renderProjectLinks(project)}
                  </div>
                </article>
              );
            })}
          </div>
          <p className='projects-hint'>Swipe to explore more -&gt;</p>
        </section>

        {Array.isArray(testimonials) && testimonials.length > 0 && (
          <section id='testimonials' className='section-card' data-reveal>
            <div className='section-header'>
              <span className='section-number'>07</span>
              <h2 className='section-title'>Client Notes</h2>
            </div>
            <div className='testimonials-grid'>
              {testimonials.map((testimonial, index) => (
                <figure
                  key={`${testimonial.by}-${index}`}
                  className='testimonial-card'
                  data-reveal
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  <blockquote className='testimonial-quote'>
                    {testimonial.quote}
                  </blockquote>
                  <figcaption className='testimonial-by'>
                    {testimonial.by}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {availability && (
          <section id='availability' className='section-card' data-reveal>
            <div className='section-header'>
              <span className='section-number'>08</span>
              <h2 className='section-title'>{availability.title}</h2>
            </div>
            <p className='section-description'>{availability.subtitle}</p>
            <div className='availability-grid'>
              {(availability.roles ?? []).map((role) => (
                <div key={role} className='availability-card'>
                  {role}
                </div>
              ))}
            </div>
          </section>
        )}

        <section id='contact' className='section-card' data-reveal>
          <div className='section-header'>
            <span className='section-number'>09</span>
            <h2 className='section-title'>Get In Touch</h2>
          </div>
          <div className='contact-layout'>
            <div className='contact-copy'>
              <p className='contact-intro'>{contact?.intro}</p>
              {Array.isArray(contact?.notes) && (
                <ul className='contact-notes'>
                  {contact.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className='contact-grid'>
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className='contact-card'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className={`contact-icon ${link.className}`}>
                    {link.icon}
                  </div>
                  <div className='contact-info'>
                    <span className='contact-label'>{link.label}</span>
                    <span className='contact-value'>{link.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className='site-foot'>
        <p>
          <span className='brand'>{brand}</span> - {new Date().getFullYear()} -
          Built with passion
        </p>
      </footer>

      <a
        className='contact-pill'
        href='#contact'
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("contact");
        }}
      >
        Contact Me
      </a>

      <div className='mobile-hirebar' aria-label='Quick contact'>
        <a
          className='hirebar-btn primary'
          href={contact?.whatsappUrl || siteConfig.social.whatsapp}
          target='_blank'
          rel='noreferrer'
        >
          <WhatsAppIcon /> WhatsApp
        </a>
        <a
          className='hirebar-btn'
          href={`mailto:${contact?.email || siteConfig.email}`}
        >
          <MailIcon /> Email
        </a>
      </div>
    </div>
  );
}
