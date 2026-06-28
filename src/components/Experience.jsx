import '../styles/Experience.css'

const experiences = [
  {
    role: "Mobile Application Developer Intern",
    company: "Ardent Computech Pvt. Ltd.",
    period: "June 2026 – Present",
    desc: [
      "Developing cross-platform mobile applications using React Native.",
      "Integrating REST APIs and implementing responsive mobile user interfaces.",
      "Collaborating with the development team to build scalable and maintainable applications.",
      "Debugging, testing, and optimizing app performance for Android and iOS."
    ]
  },
  {
    role: "Full Stack Engineer Intern",
    company: "Geeta Technical Hub",
    period: "June 2025 – Present",
    desc: [
      "Developing full-stack web applications using the MERN stack.",
      "Building responsive frontend interfaces with React.js and modern JavaScript.",
      "Creating REST APIs using Node.js and Express.js with MongoDB integration.",
      "Using Git and GitHub for version control and collaborative development."
    ]
  },
  {
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code",
    period: "August 2025 – June 2026",
    desc: [
      "Contributed to open-source projects by fixing bugs and implementing new features.",
      "Collaborated with mentors and maintainers through GitHub pull requests.",
      "Improved code quality by following open-source development standards.",
      "Worked in a collaborative environment using Git workflows."
    ]
  },
  {
    role: "Open Source Contributor",
    company: "DigitalOcean",
    period: "October 2025 – November 2025",
    desc: [
      "Participated in the Hacktoberfest'25 open-source contribution program.",
      "Resolved issues and contributed documentation and code improvements.",
      "Collaborated with developers through GitHub and code reviews."
    ]
  },
  {
    role: "Bachelor of Technology (Computer Science)",
    company: "Geeta University, India",
    period: "2024 – 2028",
    desc: [
      "Pursuing B.Tech in Computer Science and Engineering.",
      "Focused on Web Development, Mobile App Development, and Data Structures & Algorithms.",
      "Actively building full-stack and mobile application projects."
    ]
  }
];


export default function Experience() {
	return (
		<section className="experience" id="experience">
			<div className="experience__container">
				<h2 className="experience__heading">Experience & Education</h2>

				<div className="experience__timeline">
					{experiences.map((experience, index) => (
						<article key={`${experience.role}-${index}`} className="experience__item">
							<span className="experience__dot" aria-hidden="true" />
							<span className="experience__period">{experience.period}</span>
							<h3 className="experience__role">{experience.role}</h3>
							<div className="experience__company">{experience.company}</div>

							<div className="experience__description">
								<ul>
									{experience.desc.map((detail, detailIndex) => (
										<li key={detailIndex}>{detail}</li>
									))}
								</ul>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
