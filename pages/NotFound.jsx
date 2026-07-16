import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found-content">
        <h1>404</h1>
        <p>This page doesn't exist — maybe it wandered off during a merge conflict.</p>
        <Link to="/" className="cta primary">Back to Home</Link>
      </div>
    </section>
  )
}

export default NotFound