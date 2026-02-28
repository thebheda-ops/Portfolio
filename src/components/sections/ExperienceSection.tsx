import type { ExperienceItem } from "../../app/types";

type ExperienceSectionProps = {
  items: ExperienceItem[];
};

export function ExperienceSection({ items }: ExperienceSectionProps) {
  return (
    <section id='experience' className='section'>
      <p className='section-label'>Experience</p>
      <h2>
        Experience & <span className='accent'>Learning</span>
      </h2>
      <div className='experience-list'>
        {items.map((item) => (
          <article key={item.title} className='panel experience-card'>
            <div className='experience-head'>
              <div>
                <h3>{item.title}</h3>
                <p className='experience-org'>{item.org}</p>
              </div>
              <p className='meta'>{item.period}</p>
            </div>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

