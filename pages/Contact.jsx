import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [showTooltip, setShowTooltip] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 4000)
    }
  }

  const charCount = formData.message.length
  const maxChars = 300

  return (
    <section className="section-container page-section">
      <div className="section-header">
        <div className="accent-line"></div>
        <h2>Get In Touch</h2>
        <p>Let's connect and build something great together</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="info-card">
            <h4>Email</h4>
            <a href="mailto:virajshah149@gmail.com">virajshah149@gmail.com</a>
          </div>
          <div className="info-card">
            <h4>Phone</h4>
            <a href="tel:+917990589563">+91 7990589563</a>
          </div>
          <div className="info-card">
            <h4>Location</h4>
            <p>Vadodara, Gujarat, India</p>
          </div>
          <div className="info-card">
            <h4>Connect</h4>
            <div className="social-row">
              <a href="https://linkedin.com/in/viraj-shah-v1492006" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="form-group">
            <div className="label-row">
              <label htmlFor="message">
                Message
                <span
                  className="info-icon"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  ⓘ
                  {showTooltip && (
                    <span className="tooltip">Keep it under {maxChars} characters</span>
                  )}
                </span>
              </label>
              <span className={`char-count ${charCount > maxChars ? 'over' : ''}`}>
                {charCount}/{maxChars}
              </span>
            </div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project or opportunity..."
              rows="6"
              maxLength={maxChars}
              required
            ></textarea>
          </div>

          <button type="submit" className="cta primary full-width">
            {submitted ? '✓ Message Sent!' : 'Send Message'}
          </button>

          {submitted && (
            <p className="success-message">
              Thanks for reaching out! I'll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact