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
      <div className='experience-list timeline-list'>
        {items.map((item, index) => (
          <article
            key={`${item.title}-${item.period}`}
            className='panel experience-card timeline-card'
          >
            <span className='timeline-step' aria-hidden='true'>
              {String(index + 1).padStart(2, "0")}
            </span>
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
