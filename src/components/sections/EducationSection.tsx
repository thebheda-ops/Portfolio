import type { EducationItem } from "../../app/types";

type EducationSectionProps = {
  items: EducationItem[];
};

export function EducationSection({ items }: EducationSectionProps) {
  return (
    <section id='education' className='section'>
      <p className='section-label'>Education</p>
      <h2>
        Academic <span className='accent'>Background</span>
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
