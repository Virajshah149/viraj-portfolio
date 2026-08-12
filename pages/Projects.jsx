import { useState, useEffect, useRef } from 'react'

function Spinner() {
  return (
    <div className="spinner-wrapper">
      <div className="spinner"></div>
      <p>Loading repositories...</p>
    </div>
  )
}

function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-box">
      <p className="error-text">⚠ Failed to load repositories: {message}</p>
      <button className="retry-btn" onClick={onRetry}>Retry</button>
    </div>
  )
}

function Projects() {
  const [filter, setFilter] = useState('all')
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  // --- GitHub API state (Practical 3) ---
  const [repos, setRepos] = useState([])
  const [repoLoading, setRepoLoading] = useState(true)
  const [repoError, setRepoError] = useState(null)
  const [repoSearch, setRepoSearch] = useState('')

  const GITHUB_USERNAME = "Virajshah149" // replace with your actual GitHub username

  const fetchRepos = () => {
    setRepoLoading(true)
    setRepoError(null)
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
      .then((res) => {
        if (!res.ok) throw new Error(`Status ${res.status}`)
        return res.json()
      })
      .then((data) => setRepos(data))
      .catch((err) => setRepoError(err.message))
      .finally(() => setRepoLoading(false))
  }

  useEffect(() => {
    setVisible(true)
    fetchRepos()
  }, [])

  const projects = [
    {
      title: "MarketMind",
      desc: "AI-powered financial intelligence platform leveraging ML for real-time market analytics, sentiment analysis, and predictive insights.",
      tags: ["React", "Python", "TensorFlow", "MongoDB"],
      category: "ai"
    },
    {
      title: "Eco-Transit Pulse",
      desc: "Hybrid LSTM + XGBoost urban mobility optimizer with spatial clustering (K-Means/DBSCAN) and an interactive dashboard for traffic prediction. Built during 9Series internship.",
      tags: ["LSTM", "XGBoost", "Streamlit", "React"],
      category: "ai"
    },
    {
      title: "CampusConnect",
      desc: "Full-stack college event & club management system with role-based access, real-time notifications, and analytics dashboard.",
      tags: ["Node.js", "MongoDB", "React", "Express"],
      category: "fullstack"
    },
    {
      title: "Weather Data Analysis Dashboard",
      desc: "Interactive dashboard using Python, Pandas, NumPy, Matplotlib, Seaborn with EDA, trend analysis, and clear visual summaries.",
      tags: ["Python", "Pandas", "Data Analysis"],
      category: "data"
    },
    {
      title: "Avanta Airline System",
      desc: "Scalable airline booking web app using React.js frontend with Node.js/Express.js backend, secure authentication, and modular architecture.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      category: "fullstack"
    },
    {
      title: "E-commerce Order Processing System",
      desc: "Console-based OOP application in C++ with role-based access (customer/seller/admin), inheritance, polymorphism, and file handling.",
      tags: ["C++", "OOP", "System Design"],
      category: "data"
    },
  ]

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'ai', label: 'AI / ML' },
    { key: 'data', label: 'Data' },
  ]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((p) => p.category === filter)

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(repoSearch.toLowerCase())
  )

  return (
    <section ref={ref} className={`section-container page-section reveal ${visible ? 'visible' : ''}`}>
      <div className="section-header">
        <div className="accent-line"></div>
        <h2>Featured Projects</h2>
        <p>Full-stack, AI, and data work showcasing what I've built</p>
      </div>

      <div className="filter-buttons">
        {filters.map((f) => (
          <button
            key={f.key}
            className={filter === f.key ? 'active' : ''}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((p) => (
          <div key={p.title} className="project-card">
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

      {filteredProjects.length === 0 && (
        <p className="empty-state">No projects in this category yet.</p>
      )}

      {/* --- Practical 3: Live GitHub Repositories --- */}
      <div className="section-header repo-section-header">
        <div className="accent-line"></div>
        <h2>GitHub Repositories</h2>
        <p>Live data pulled directly from the GitHub API</p>
      </div>

      {repoLoading && <Spinner />}
      {!repoLoading && repoError && (
        <ErrorMessage message={repoError} onRetry={fetchRepos} />
      )}

      {!repoLoading && !repoError && (
        <>
          <input
            type="text"
            className="repo-search"
            placeholder="Search repositories..."
            value={repoSearch}
            onChange={(e) => setRepoSearch(e.target.value)}
          />

          <div className="repo-grid">
            {filteredRepos.length === 0 && <p className="empty-state">No repositories found.</p>}
            {filteredRepos.map((repo) => (
              <div className="repo-card" key={repo.id}>
                <h4>{repo.name}</h4>
                <p className="desc">{repo.description || "No description provided."}</p>
                <div className="repo-meta">
                  <span className="repo-stars">⭐ {repo.stargazers_count}</span>
                  <a href={repo.html_url} target="_blank" rel="noreferrer" className="repo-link">
                    View Repo →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  )
}

export default Projects