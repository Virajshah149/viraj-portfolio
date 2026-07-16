import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

function Home() {
  const [visible, setVisible] = useState(false)
  const aboutRef = useRef(null)
  const [aboutVisible, setAboutVisible] = useState(false)
  const skillsRef = useRef(null)
  const [skillsVisible, setSkillsVisible] = useState(false)
  const expRef = useRef(null)
  const [expVisible, setExpVisible] = useState(false)

  useEffect(() => {
    setVisible(true)

    const makeObserver = (setter) =>
      new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setter(true),
        { threshold: 0.2 }
      )

    const aboutObs = makeObserver(setAboutVisible)
    const skillsObs = makeObserver(setSkillsVisible)
    const expObs = makeObserver(setExpVisible)

    if (aboutRef.current) aboutObs.observe(aboutRef.current)
    if (skillsRef.current) skillsObs.observe(skillsRef.current)
    if (expRef.current) expObs.observe(expRef.current)

    return () => {
      aboutObs.disconnect()
      skillsObs.disconnect()
      expObs.disconnect()
    }
  }, [])

  const skills = [
    { category: "Languages", items: ["C++", "JavaScript", "Python"] },
    { category: "Frontend", items: ["React.js", "HTML/CSS", "Responsive Design"] },
    { category: "Backend", items: ["Node.js", "Express.js", "RESTful APIs"] },
    { category: "Database", items: ["MongoDB", "MySQL", "DBMS"] },
    { category: "AI/ML", items: ["LSTM", "XGBoost", "Data Analysis"] },
    { category: "Tools", items: ["Git/GitHub", "VS Code", "Google Colab"] },
  ]

  return (
    <>
      <section id="home" className="hero">
        <div className={`content ${visible ? 'visible' : ''}`}>
          <span className="eyebrow">Hey, I'm Viraj 👋</span>
          <h1>
            <span className="accent">Creative</span> Developer<br />& Problem Solver
          </h1>
          <p className="tagline">
            Building elegant solutions with React, Node.js, and AI. Currently crafting
            MarketMind — an AI-powered financial intelligence platform. SIH 2025 Finalist.
          </p>
          <div className="cta-group">
            <Link to="/contact" className="cta primary">Get In Touch</Link>
            <Link to="/projects" className="cta secondary">View My Work</Link>
          </div>
        </div>
      </section>

      <section
        ref={aboutRef}
        id="about"
        className={`section-container reveal ${aboutVisible ? 'visible' : ''}`}
      >
        <div className="section-header">
          <div className="accent-line"></div>
          <h2>About Me</h2>
          <p>CS Student | Developer | AI/ML Enthusiast</p>
        </div>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a <strong>Computer Science student at CHARUSAT University</strong> (DEPSTAR),
              currently in my 5th semester with a GPA of 7.90.
            </p>
            <p>
              Recently completed a <strong>45-day internship at 9Series</strong>, building
              AI-powered urban mobility systems using <strong>LSTM + XGBoost</strong> and
              spatial clustering.
            </p>
            <p>
              Currently leading development on <strong>MarketMind</strong> — an AI financial
              intelligence platform. Finalist in Smart India Hackathon 2025.
            </p>
          </div>
          <div className="stats-grid">
            <div className="stat"><div className="number">5th</div><div className="label">Semester</div></div>
            <div className="stat"><div className="number">7.90</div><div className="label">GPA</div></div>
            <div className="stat"><div className="number">45</div><div className="label">Days Internship</div></div>
            <div className="stat"><div className="number">8+</div><div className="label">Tech Stacks</div></div>
          </div>
        </div>
      </section>

      <section
        ref={expRef}
        id="experience"
        className={`section-container reveal ${expVisible ? 'visible' : ''}`}
      >
        <div className="section-header">
          <div className="accent-line"></div>
          <h2>Experience</h2>
          <p>Internships, hackathons, and featured work</p>
        </div>
        <ul className="experience-list">
          <li className="exp-item">
            <div className="company">9Series | Summer Internship</div>
            <div className="title">AI-Powered Urban Mobility Optimizer</div>
            <div className="description">
              Built hybrid LSTM + XGBoost system with spatial clustering (K-Means/DBSCAN).
              Designed a Streamlit backend + React frontend dashboard for real-time
              urban mobility insights and traffic prediction, delivered across Day 15/30/45 milestones.
            </div>
          </li>
          <li className="exp-item">
            <div className="company">Personal | Ongoing</div>
            <div className="title">MarketMind — Financial Intelligence Platform</div>
            <div className="description">
              AI-powered platform leveraging ML for real-time market analytics, sentiment
              analysis, and predictive insights. Full-stack React + Python/ML.
            </div>
          </li>
          <li className="exp-item">
            <div className="company">Hackathon | 1st Round Finalist</div>
            <div className="title">Smart India Hackathon 2025</div>
            <div className="description">
              Advanced to final round at national level. Developed innovative solutions
              for real-world problems under time pressure.
            </div>
          </li>
        </ul>
      </section>

      <section
        ref={skillsRef}
        id="skills"
        className={`section-container reveal ${skillsVisible ? 'visible' : ''}`}
      >
        <div className="section-header">
          <div className="accent-line"></div>
          <h2>Technical Skills</h2>
          <p>Languages, frameworks, and tools I work with</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.category} className="skill-category">
              <h4>{skill.category}</h4>
              <ul>
                {skill.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home