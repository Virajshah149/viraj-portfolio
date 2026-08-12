import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer id="footer">
      <nav className="footer-nav">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="footer-socials">
        <a href="https://linkedin.com/in/viraj-shah-v1492006" target="_blank" rel="noreferrer" title="LinkedIn">in</a>
        <a href="https://github.com/" target="_blank" rel="noreferrer" title="GitHub">GH</a>
        <a href="mailto:virajshah149@gmail.com" title="Email">@</a>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Viraj Jayant Shah · Built with React</p>
      </div>
    </footer>
  )
}

export default Footer