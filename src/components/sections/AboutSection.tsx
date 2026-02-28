import type { AboutContent } from "../../app/types";
import { FaCode, FaHandshake, FaLightbulb } from "react-icons/fa6";

type AboutSectionProps = {
  about: AboutContent;
};

export function AboutSection({ about }: AboutSectionProps) {
  const highlights = [
    {
      title: "Problem Solving",
      description: "Build practical solutions for real business challenges.",
      icon: FaLightbulb,
    },
    {
      title: "Clean Implementation",
      description: "Maintainable code with clear structure and reusable parts.",
      icon: FaCode,
    },
    {
      title: "Client Collaboration",
      description: "Clear communication from planning to final delivery.",
      icon: FaHandshake,
    },
  ];

  return (
    <section id='about' className='section'>
      <p className='section-label'>About</p>
      <div className='about-grid'>
        <article className='about-copy panel'>
          <h2>
            {about.title} <span className='accent'>{about.highlight}</span>
          </h2>
          <p>{about.description}</p>
          <div className='about-highlights'>
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className='about-highlight-item'>
                  <span className='about-highlight-icon' aria-hidden='true'>
                    <Icon />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </article>
        <div className='about-photo' aria-hidden='true'>
          <span>{about.photoLabel}</span>
        </div>
      </div>
    </section>
  );
}
