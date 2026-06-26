import '../styles/Project.css'

const projects = [
  {
    title: 'Fyntl AI',
    desc: "Built interactive and responsive user interfaces using React.js for Fyntl AI's Business OS. Optimized frontend performance by 40%, resulting in improved user experience and faster load times.",
    tags: ['React.js', 'Frontend', 'Performance Optimization'],
    github: 'https://www.github.com/shubham-cyber-prog.com',
    demo: 'https://www.fyntl.com/',
    image: 'https://personal-dashboard-ram.vercel.app/fyntl.png',
  },
  {
    title: 'AlumniConnect WebApp',
    desc: 'A professional networking platform for graduates to connect with alumni, explore job opportunities, and access mentorship. Built with React and Tailwind CSS for a modern, responsive user experience.',
    tags: ['React.js', 'Tailwind CSS', 'Netlify', 'Networking'],
    github: 'https://www.github.com/shubham-cyber-prog.com',
    demo: 'https://alumniconnectwebapp.netlify.app/',
    image: 'https://personal-dashboard-ram.vercel.app/alumni.png',
  },
  {
    title: 'EdTech Scalable Platform',
    desc: 'Architected a comprehensive platform for student management and course delivery (LMS). Features include batch tracking, assignment submission, and automated notifications.',
    tags: ['MERN Stack', 'MongoDB', 'Scalability', 'Docker'],
    github: 'https://www.github.com/shubham-cyber-prog.com',
    demo: 'https://koduerpfrontend.onrender.com/',
    image: 'https://personal-dashboard-ram.vercel.app/edtech.png',
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
