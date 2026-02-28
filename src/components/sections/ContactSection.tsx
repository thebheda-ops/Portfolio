import type { ContactContent } from "../../app/types";
import { FaEnvelope, FaGithub, FaGlobe, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

type ContactSectionProps = {
  contact: ContactContent;
};

export function ContactSection({ contact }: ContactSectionProps) {
  const directLinks = [
    {
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: FaEnvelope,
      external: false,
    },
    {
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      href: contact.whatsappUrl,
      icon: FaWhatsapp,
      external: true,
    },
  ];

  const profileLinks = [
    {
      label: "LinkedIn",
      value: "LinkedIn Profile",
      href: contact.linkedinUrl,
      icon: FaLinkedin,
      external: true,
    },
    {
      label: "GitHub",
      value: "GitHub Profile",
      href: contact.githubUrl,
      icon: FaGithub,
      external: true,
    },
    {
      label: "Portfolio",
      value: "Live Portfolio",
      href: contact.portfolioUrl,
      icon: FaGlobe,
      external: true,
    },
  ];

  const emailCtaHref = `mailto:${contact.email}?subject=Project%20Inquiry&body=Hi%20Bal%2C%0A%0AI%20want%20to%20discuss%20a%20project.%0A%0AThanks.`;

  return (
    <section id='contact' className='section'>
      <p className='section-label'>Contact</p>
      <h2>
        {contact.title} <span className='accent'>{contact.highlight}</span>
      </h2>
      <div className='contact-grid'>
        <article className='panel contact-primary'>
          <h3>Let&apos;s Connect</h3>
          <p className='contact-intro'>{contact.intro}</p>
          <div className='contact-columns'>
            <div>
              <p className='contact-subtitle'>Direct</p>
              <ul className='contact-list contact-link-list'>
                {directLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noreferrer" : undefined}
                      >
                        <span className='contact-link-icon' aria-hidden='true'>
                          <Icon />
                        </span>
                        <span className='contact-link-copy'>
                          <strong>{link.label}</strong>
                          <small>{link.value}</small>
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <p className='contact-subtitle'>Profiles</p>
              <ul className='contact-list contact-link-list'>
                {profileLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.label}>
                      <a href={link.href} target='_blank' rel='noreferrer'>
                        <span className='contact-link-icon' aria-hidden='true'>
                          <Icon />
                        </span>
                        <span className='contact-link-copy'>
                          <strong>{link.label}</strong>
                          <small>{link.value}</small>
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </article>

        <aside className='panel contact-secondary'>
          <h3>Fast Response</h3>
          <p>
            Best way to reach me is email or WhatsApp. I usually respond within
            24 hours.
          </p>
          <div className='contact-pills' aria-label='Contact availability'>
            <span className='contact-pill'>Open to freelance</span>
            <span className='contact-pill'>Remote friendly</span>
            <span className='contact-pill'>Quick turnaround</span>
          </div>
          <div className='contact-actions'>
            <a className='btn btn-primary' href={emailCtaHref}>
              Email Me
            </a>
            <a
              className='btn btn-secondary'
              href={contact.whatsappUrl}
              target='_blank'
              rel='noreferrer'
            >
              WhatsApp
            </a>
          </div>
          <ul className='contact-checklist'>
            <li>Freelance projects</li>
            <li>Frontend and MERN work</li>
            <li>Short and long-term collaboration</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
