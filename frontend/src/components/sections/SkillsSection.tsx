type SkillsSectionProps = {
  groups: {
    title: string;
    items: string[];
  }[];
};

export function SkillsSection({ groups }: SkillsSectionProps) {
  return (
    <section id='skills' className='section'>
      <p className='section-label'>Skills</p>
      <h2>
        Technical <span className='accent'>Skills</span>
      </h2>
      <div className='skills-grid'>
        {groups.map((group) => (
          <article key={group.title} className='panel'>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
