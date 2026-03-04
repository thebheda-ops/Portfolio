import { pageContent } from "./content";

const singleSheetStyles = `
.single-sheet-page {
  min-height: 100vh;
  padding: 1.25rem;
  display: flex;
  justify-content: center;
  color: var(--text);
  font-family: "Segoe UI", Arial, sans-serif;
  line-height: 1.55;
}

.single-sheet-card {
  width: min(980px, 100%);
  border: 1px solid var(--line);
  border-radius: 22px;
  background: var(--panel);
  padding: 1.4rem;
  display: grid;
  gap: 1.2rem;
}

.single-sheet-page *,
.single-sheet-page *::before,
.single-sheet-page *::after {
  box-sizing: border-box;
}

.single-sheet-card h1,
.single-sheet-card h2,
.single-sheet-card h3,
.single-sheet-card p {
  margin: 0;
}

.ss-head {
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 1rem;
  background: linear-gradient(140deg, rgba(0, 217, 165, 0.16), rgba(15, 27, 61, 0.92));
}

.ss-brand {
  margin-bottom: 0.5rem;
  width: fit-content;
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 0.18rem 0.5rem;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.ss-head h1 {
  margin-bottom: 0.5rem;
  font-size: clamp(1.8rem, 4vw, 2.6rem);
}

.ss-role,
.ss-location {
  color: var(--panel-text-strong);
}

.ss-role {
  margin-bottom: 0.2rem;
}

.ss-section {
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 1rem;
  background: var(--panel-soft-fill);
}

.ss-section h2 {
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.ss-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
}

.ss-skills {
  display: grid;
  gap: 0.8rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.ss-skill-group {
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 0.8rem;
  background: var(--panel);
}

.ss-skill-group h3 {
  margin-bottom: 0.55rem;
  font-size: 0.95rem;
}

.ss-skill-group ul,
.ss-contact ul {
  margin: 0;
  padding-left: 1rem;
  display: grid;
  gap: 0.45rem;
}

.ss-section p,
.ss-skill-group li,
.ss-timeline-item p,
.ss-project p {
  color: var(--panel-text);
}

.ss-skill-group strong {
  color: var(--text-strong);
}

.ss-timeline {
  display: grid;
  gap: 0.75rem;
}

.ss-timeline-item {
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 0.8rem;
  background: var(--panel);
}

.ss-timeline-item h3 {
  margin-bottom: 0.25rem;
  font-size: 1rem;
}

.ss-timeline-period {
  color: var(--muted);
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.3rem;
}

.ss-timeline-org {
  color: var(--panel-text-strong);
  margin-bottom: 0.4rem;
  font-size: 0.9rem;
}

.ss-projects {
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.ss-project {
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 0.8rem;
  background: var(--panel);
}

.ss-project h3 {
  margin-bottom: 0.4rem;
}

.ss-stack {
  margin-top: 0.55rem;
  color: var(--muted);
  font-size: 0.84rem;
}

.ss-contact a {
  color: var(--accent);
  text-underline-offset: 2px;
}

.ss-contact li {
  overflow-wrap: anywhere;
}

@media (max-width: 1024px) {
  .ss-skills,
  .ss-projects {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 980px) {
  .ss-grid,
  .ss-skills,
  .ss-projects {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .single-sheet-page {
    padding: 0.85rem;
  }

  .single-sheet-card {
    padding: 1rem;
  }
}
`;

function renderRange(item, index) {
  return (
    <article className='ss-timeline-item' key={`${item.title}-${index}`}>
      <p className='ss-timeline-period'>{item.period}</p>
      <h3>{item.title}</h3>
      <p className='ss-timeline-org'>{item.org}</p>
      <p>{item.detail}</p>
    </article>
  );
}

export default function SingleSheetPortfolio() {
  const {
    brand,
    hero,
    about,
    skillGroups,
    experience,
    education,
    projects,
    contact,
  } = pageContent;

  return (
    <>
      <style>{singleSheetStyles}</style>
      <main className='single-sheet-page'>
        <article className='single-sheet-card'>
          <header className='ss-head'>
            <p className='ss-brand'>{brand}</p>
            <h1>{hero.headline}</h1>
            <p className='ss-role'>{hero.role}</p>
            <p className='ss-location'>{hero.availability}</p>
          </header>

          <section className='ss-section'>
            <h2>Summary</h2>
            <p>{about.description}</p>
          </section>

          <section className='ss-section'>
            <h2>Core Skills</h2>
            <div className='ss-skills'>
              {skillGroups.map((group) => (
                <div className='ss-skill-group' key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item.name}>
                        <strong>{item.name}:</strong> {item.note}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className='ss-grid'>
            <div className='ss-section'>
              <h2>Experience</h2>
              <div className='ss-timeline'>{experience.map(renderRange)}</div>
            </div>

            <div className='ss-section'>
              <h2>Education</h2>
              <div className='ss-timeline'>{education.map(renderRange)}</div>
            </div>
          </section>

          <section className='ss-section'>
            <h2>Selected Projects</h2>
            <div className='ss-projects'>
              {projects.map((project) => (
                <article className='ss-project' key={project.title}>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <p className='ss-stack'>{project.stack}</p>
                </article>
              ))}
            </div>
          </section>

          <section className='ss-section ss-contact'>
            <h2>Contact</h2>
            <p>{contact.intro}</p>
            <ul>
              <li>
                Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                LinkedIn: <a href={contact.linkedinUrl}>{contact.linkedinUrl}</a>
              </li>
              <li>
                GitHub: <a href={contact.githubUrl}>{contact.githubUrl}</a>
              </li>
              <li>
                WhatsApp: <a href={contact.whatsappUrl}>{contact.whatsappUrl}</a>
              </li>
            </ul>
          </section>
        </article>
      </main>
    </>
  );
}
