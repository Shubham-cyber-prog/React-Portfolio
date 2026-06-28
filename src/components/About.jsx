import React from 'react'
import '../styles/About.css'

const stats = [
  { number: '800+', label: 'Students Mentored' },
  { number: '50+', label: 'Corporate Sessions' },
  { number: '40%', label: 'Performance Boost' },
  { number: '3+', label: 'Years Experience' },
]

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__wrapper">
        <div className="about__content">
          <h2 className="about__heading">About Me</h2>
          <p className="about__text">
            Senior MERN Stack Developer and Corporate Trainer with proven expertise in building scalable, high-performance web applications and mentoring 800+ aspiring developers. Specialized in MongoDB, Express.js, React.js, and Node.js with hands-on experience in AWS deployment, CI/CD pipelines, and Docker containerization. Reduced application load times by 40% through performance optimization.
          </p>
        </div>

        <div className="about__stats" aria-label="Key achievements">
          {stats.map((stat) => (
            <article key={stat.label} className="about__stat-card">
              <span className="about__stat-number">{stat.number}</span>
              <span className="about__stat-label">{stat.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
