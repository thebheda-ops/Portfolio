import type { SkillGroup } from "../../app/types";
import type { IconType } from "react-icons";
import {
  FaCode,
  FaGithub,
  FaNodeJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa6";
import { SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si";

type SkillsSectionProps = {
  groups: SkillGroup[];
};

const skillIcons: Record<string, IconType> = {
  React: FaReact,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  WordPress: FaWordpress,
  "Web Development": FaCode,
  Graphics: FaCode,
  "Node.js + Express": FaNodeJs,
  MongoDB: SiMongodb,
  "Git & Deployment": FaGithub,
};

export function SkillsSection({ groups }: SkillsSectionProps) {
  const allSkills = groups.flatMap((group) => group.items);

  return (
    <section id='skills' className='section'>
      <p className='section-label'>Skills</p>
      <h2>
        Technical <span className='accent'>Skills</span>
      </h2>
      <div className='skills-overview panel'>
        <p>
          Core capability across <strong>{allSkills.length}</strong> practical
          skills used in real projects.
        </p>
      </div>
      <div className='skills-grid'>
        {groups.map((group) => (
          <article key={group.title} className='panel skills-panel'>
            <h3>{group.title}</h3>
            <ul className='skills-list'>
              {group.items.map((item) => {
                const SkillIcon = skillIcons[item.name] ?? FaCode;
                return (
                  <li key={item.name} className='skill-row'>
                    <div className='skill-head skill-head-icon'>
                      <span className='skill-icon-wrap' aria-hidden='true'>
                        <SkillIcon className='skill-icon' />
                      </span>
                      <span>{item.name}</span>
                    </div>
                    {item.note ? <p className='skill-note'>{item.note}</p> : null}
                  </li>
                );
              })}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
