import type { AboutContent } from "../../app/types";

type AboutSectionProps = {
  about: AboutContent;
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section id='about' className='section'>
      <p className='section-label'>About</p>
      <div className='about-grid'>
        <article className='about-copy'>
          <h2>
            {about.title} <span className='accent'>{about.highlight}</span>
          </h2>
          <p>{about.description}</p>
        </article>
        <div className='about-photo' aria-hidden='true'>
          <span>{about.photoLabel}</span>
        </div>
      </div>
    </section>
  );
}

