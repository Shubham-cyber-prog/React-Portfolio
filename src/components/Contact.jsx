import React from 'react'
import '../styles/Contact.css'

const Contact = () => {
  const currentYear = new Date().getFullYear()

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="content">
          <h2 className="heading">Let's Connect</h2>
          <p className="text">
            Looking for a  MERN Stack Developer or want to discuss a project? Feel free to reach out to me via email or phone. I'm always open to new opportunities and collaborations.
          </p>

          <div className="contactInfo">
            <a href="mailto:sn343555@gmail.com" className="item">
              <span className="icon" aria-hidden="true">@</span>
              sn343555@gmail.com
            </a>
            <a href="tel:+919034294744" className="item">
              <span className="icon" aria-hidden="true">#</span>
              +91-9034294744
            </a>
          </div>

          <div className="socials" aria-label="Social links">
            <a
              href="https://linkedin.com/in/rd82"
              target="_blank"
              rel="noopener noreferrer"
              className="socialIcon"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              href="https://github.com/shubham-cyber-prog"
              target="_blank"
              rel="noopener noreferrer"
              className="socialIcon"
              aria-label="GitHub"
            >
              GH
            </a>
          </div>

          <div className="footer">
            © {currentYear} Subham Nayak. All rights reserved. • Built with React & Vanilla CSS
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
