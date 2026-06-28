import '../styles/Project.css'

const projects = [
  {
    title: 'MERN - Expense Tracker',
    desc: "A full-stack expense tracking application built with the MERN stack, allowing users to manage their finances by adding, editing, and deleting expenses. The app features a responsive design and secure user authentication.",
    tags: ['React.js', 'Frontend', 'Backend', 'MongoDB'],
    github: 'https://github.com/Shubham-cyber-prog',
    demo: 'https://www.fyntl.com/',
    image: '',
  },
  {
    title: 'Nexus-INDIAN-BANK-',
    desc: 'A comprehensive banking application designed for Indian financial institutions, offering a wide range of services from account management to loan processing.',
    tags: ['React.js', 'Tailwind CSS', 'Netlify', 'Frontend'],
    github: 'https://github.com/Shubham-cyber-prog',
    demo: '',
    image: '',
  },
  {
    title: 'Melodify - Music Streaming App',
    desc: 'A modern music streaming application built with the MERN stack, featuring a responsive UI and seamless integration with MongoDB for scalable data management.',
    tags: ['Next.js', 'MongoDB', 'Frontend', 'Docker'],
    github: 'https://github.com/Shubham-cyber-prog',
    demo: '',
    image: '',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects section-spacing">
      <div className="projects__wrapper">
        <h2 className="projects__heading">Featured Projects</h2>
        <div className="projects__grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-card__media">
                <img
                  className="project-card__image"
                  src={project.image}
                  alt={project.title}
                  onError={(event) => {
                    event.currentTarget.style.display = 'none'
                  }}
                />
              </div>

              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__text">{project.desc}</p>

                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-card__tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-card__actions">
                  {project.github !== '#' && (
                    <a href={project.github} target="_blank" >
                      Code
                    </a>
                  )}
                  {project.demo ? (
                    <a href={project.demo} target="_blank">
                      Live Demo
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
