import '../styles/hero.css'

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__container">
        <div className="home__content">
          <p className="home__eyebrow">Portfolio</p>
          <h1 className="home__title">Subham Nayak </h1>
          <p className="home__subtitle"> Full Stack Developer</p>
          <p className="home__text">
            I build scalable web applications and mobile application using the MERN stack. I have a strong passion for coding and problem-solving, and I enjoy working on challenging projects that allow me to learn and grow as a developer.
          </p>

          <div className="home__actions">
            <a className="home__button home__button--primary" href="#projects">
              View Projects
            </a>
            <a className="home__button home__button--secondary" href="#contact">
              Contact Me
            </a>
            <a className="home__button home__button--tertiary" href="https://drive.google.com/file/d/10z6IuzA_HlwAT1u0s8h18Jpwe80EemhV/view" download>
              Download Resume
            </a>
          </div>
        </div>

        <div className="home__photoWrap" aria-hidden="true">
          <img
            className="home__photo"
            src="https://media.licdn.com/dms/image/v2/D5603AQGL9Fu-NbvaFQ/profile-displayphoto-crop_800_800/B56ZtvlrS3HgAM-/0/1767103707908?e=1784160000&v=beta&t=dEOooRmdE30ZDYY8LzwodIJ_bmmpWTgwPHBsqf2yRrI"
            alt="Subham Nayak"
          />
        </div>
      </div>
    </section>
  )
}

export default Home
