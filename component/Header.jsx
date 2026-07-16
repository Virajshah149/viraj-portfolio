function Header() {
  return (
    <section id="home" className="hero">
      <div className="content">
        <h1>
          <span className="accent">Viraj Shah</span><br />Problem Solver
        </h1>
        <p className="tagline">
          Building elegant solutions with React, Node.js, and AI. Currently crafting MarketMind — an AI-powered financial intelligence platform. SIH 2025 Finalist.
        </p>
        <div className="cta-group">
          <a href="#contact" className="cta primary">Get In Touch</a>
          <a href="#projects" className="cta secondary">View My Work</a>
        </div>
      </div>
    </section>
  );
}

export default Header;