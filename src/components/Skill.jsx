import React from 'react'
import '../styles/Skill.css'

const skillGroups = [
  {
    title: 'Frontend Technologies',
    icon: '⚛',
    items: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Redux', 'Context API', 'Responsive Design'],
  },
  {
    title: 'Backend Technologies',
    icon: '◫',
    items: ['Node.js', 'Express.js', 'RESTful APIs', 'Authentication & Authorization (JWT, OAuth)'],
  },
  {
    title: 'Database',
    icon: '◔',
    items: ['MongoDB', 'Mongoose', 'NoSQL Database Design'],
  },
  {
    title: 'DevOps & Cloud',
    icon: '☁',
    items: ['AWS (EC2, S3)', 'Docker', 'CI/CD Pipelines', 'Git', 'GitHub', 'Cloudinary', 'Razorpay Integration'],
  },
  {
    title: 'Tools & Soft Skills',
    icon: '▣',
    items: ['VS Code', 'Postman', 'npm', 'Webpack', 'Babel','GSAP', 'Technical Documentation'],
  },
]

const Skill = () => {
  return (
    <section className="skill" id="skill">
      <div className="skill__wrapper">
        <div className="skill__header">
          <p className="skill__eyebrow">Technical Skills</p>
        </div>

        <div className="skill__grid" aria-label="Technical skills">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill__card">
              <div className="skill__card-header">
                <span className="skill__card-icon" aria-hidden="true">
                  {group.icon}
                </span>
                <h3 className="skill__card-title">{group.title}</h3>
              </div>

              <div className="skill__chips">
                {group.items.map((item) => (
                  <span key={item} className="skill__chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skill
