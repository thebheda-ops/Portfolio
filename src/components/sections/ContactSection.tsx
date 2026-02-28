import type { ContactContent } from "../../app/types";
import { FaEnvelope, FaGithub, FaGlobe, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

type ContactSectionProps = {
  contact: ContactContent;
};

export function ContactSection({ contact }: ContactSectionProps) {
  const links = [
    {
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: FaEnvelope,
    },
    {
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      href: contact.whatsappUrl,
      icon: FaWhatsapp,
    },
    {
      label: "LinkedIn",
      value: "LinkedIn Profile",
      href: contact.linkedinUrl,
      icon: FaLinkedin,
    },
    {
      label: "GitHub",
      value: "GitHub Profile",
      href: contact.githubUrl,
      icon: FaGithub,
    },
    {
      label: "Portfolio",
      value: "Live Portfolio",
      href: contact.portfolioUrl,
      icon: FaGlobe,
    },
  ];

  return (
    <section id='contact' className='section'>
      <p className='section-label'>Contact</p>
      <h2>
        {contact.title} <span className='accent'>{contact.highlight}</span>
      </h2>
      <div className='contact-grid'>
        <article className='panel contact-primary'>
          <h3>Let&apos;s Connect</h3>
          <p>{contact.intro}</p>
          <ul className='contact-list contact-link-list'>
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.label === "Email" ? undefined : "_blank"}
                    rel={link.label === "Email" ? undefined : "noreferrer"}
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
        </article>

        <aside className='panel contact-secondary'>
          <h3>Fast Response</h3>
          <p>
            Best way to reach me is email or WhatsApp. I usually respond within
            24 hours.
          </p>
          <div className='contact-actions'>
            <a className='btn btn-primary' href={`mailto:${contact.email}`}>
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
