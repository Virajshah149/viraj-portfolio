import { useState, useEffect } from 'react'

function Projects() {
  const [filter, setFilter] = useState('all')
  const [visible, setVisible] = useState(false)

  useEffect(() => { setVisible(true) }, [])

  const projects = [
    { title: "MarketMind", desc: "AI-powered financial intelligence platform leveraging ML for real-time market analytics, sentiment analysis, and predictive insights.", tags: ["React", "Python", "TensorFlow", "MongoDB"], category: "ai", icon: "🧠" },
    { title: "Eco-Transit Pulse", desc: "Hybrid LSTM + XGBoost urban mobility optimizer with spatial clustering (K-Means/DBSCAN). Built during my 9Series summer internship.", tags: ["LSTM", "XGBoost", "Streamlit", "React"], category: "ai", icon: "🚦" },
    { title: "CampusConnect", desc: "Full-stack college event & club management system with role-based access and real-time notifications.", tags: ["Node.js", "MongoDB", "React", "Express"], category: "fullstack", icon: "🎓" },
    { title: "Weather Data Analysis Dashboard", desc: "Interactive dashboard using Python, Pandas, NumPy, Matplotlib, Seaborn with EDA and trend analysis.", tags: ["Python", "Pandas", "Data Analysis"], category: "data", icon: "📊" },
    { title: "Avanta Airline System", desc: "Scalable airline booking web app using React.js frontend with Node.js/Express.js backend and secure authentication.", tags: ["React", "Node.js", "Express", "MongoDB"], category: "fullstack", icon: "✈️" },
    { title: "E-commerce Order Processing System", desc: "Console-based OOP application in C++ with role-based access, inheritance, polymorphism, and file handling.", tags: ["C++", "OOP", "System Design"], category: "data", icon: "🛒" },
  ]

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'ai', label: 'AI / ML' },
    { key: 'data', label: 'Data' },
  ]

  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section className={`section-container page-section reveal ${visible ? 'visible' : ''}`}>
      <div className="section-header">
        <div className="accent-line"></div>
        <h2>My Recent <span className="accent">Works</span></h2>
        <p>Full-stack, AI, and data projects showcasing what I've built</p>
      </div>

      <div className="filter-buttons">
        {filters.map((f) => (
          <button key={f.key} className={filter === f.key ? 'active' : ''} onClick={() => setFilter(f.key)}>
            {f.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((p) => (
          <div key={p.title} className="project-card">
            <div className={`project-thumb thumb-${p.category}`}>{p.icon}</div>
            <div className="header">
              <h4>{p.title}</h4>
              <p className="desc">{p.desc}</p>
            </div>
            <div className="tags">
              {p.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && <p className="empty-state">No projects in this category yet.</p>}
    </section>
  )
}

export default Projects