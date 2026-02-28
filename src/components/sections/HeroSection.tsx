import type { HeroContent } from "../../app/types";

type HeroSectionProps = {
  hero: HeroContent;
};

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className='section hero' id='home'>
      <p className='section-label'>{hero.role}</p>
      <p className='hero-badge'>{hero.availability}</p>
      <p className='hero-text'>{hero.headline}</p>
      <p className='hero-subtext'>{hero.subtext}</p>
      <div className='hero-actions'>
        <a className='btn btn-primary' href='#contact'>
          Start Project
        </a>
        <a className='btn btn-secondary' href='#projects'>
          View Work
        </a>
      </div>
    </section>
  );
}
