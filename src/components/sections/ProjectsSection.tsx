import type { Project } from "../../app/types";

type ProjectsSectionProps = {
  projects: Project[];
  githubUrl: string;
};

export function ProjectsSection({ projects, githubUrl }: ProjectsSectionProps) {
  return (
    <section id='projects' className='section'>
      <p className='section-label'>Projects</p>
      <h2>
        Featured <span className='accent'>Projects</span>
      </h2>
      <div className='projects-grid'>
        {projects.map((project, index) => {
          const hasDemo = Boolean(project.demoUrl && project.demoUrl !== "#");
          return (
            <article key={project.title} className='project-card'>
              <div className='project-top'>
                <p className='project-index'>
                  Project {String(index + 1).padStart(2, "0")}
                </p>
              </div>
            <div className='project-image' aria-hidden='true' />
            <div className='project-body'>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <p className='meta'>Tech: {project.stack}</p>
              <div className='project-actions'>
                <a
                  className='btn btn-ghost'
                  href={githubUrl}
                  target='_blank'
                  rel='noreferrer'
                >
                  Code
                </a>
                <a
                  className={`btn btn-primary ${hasDemo ? "" : "btn-disabled"}`}
                  href={hasDemo ? project.demoUrl : "#"}
                  aria-disabled={!hasDemo}
                  tabIndex={hasDemo ? 0 : -1}
                >
                  Demo
                </a>
              </div>
            </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
