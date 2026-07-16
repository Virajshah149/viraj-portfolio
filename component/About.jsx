import { useEffect, useRef, useState } from "react";

function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={`section-container reveal ${visible ? "visible" : ""}`} id="about">
      <div className="section-header">
        <div className="accent-line"></div>
        <h2>About Me</h2>
        <p>CSE Student | Developer | AI/ML Enthusiast</p>
      </div>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm a <strong>Computer Science student at CHARUSAT University</strong> (DEPSTAR), currently in my 5th semester with a GPA of 7.90.
          </p>
          <p>
            Recently completed a <strong>45-day internship at 9Series</strong>, building AI-powered urban mobility systems using <strong>LSTM + XGBoost</strong> and spatial clustering.
          </p>
          <p>
            Currently leading development on <strong>MarketMind</strong> — an AI financial intelligence platform. Finalist in Smart India Hackathon 2025.
          </p>
        </div>
        <div className="stats-grid">
          <div className="stat">
            <div className="number">5th</div>
            <div className="label">Semester</div>
          </div>
          <div className="stat">
            <div className="number">7.90</div>
            <div className="label">GPA</div>
          </div>
          <div className="stat">
            <div className="number">45</div>
            <div className="label">Days Internship</div>
          </div>
          <div className="stat">
            <div className="number">8+</div>
            <div className="label">Tech Stacks</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;