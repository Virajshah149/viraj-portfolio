import { useEffect, useRef, useState } from "react";

function Experience() {
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
    <section ref={ref} className={`section-container reveal ${visible ? "visible" : ""}`} id="experience">
      <div className="section-header">
        <div className="accent-line"></div>
        <h2>Experience</h2>
        <p>Internships, hackathons, and featured work</p>
      </div>
      <ul className="experience-list">
        <li className="exp-item">
          <div className="company">9Series | Internship</div>
          <div className="title">AI-Powered Urban Mobility Optimizer</div>
          <div className="description">
            Built hybrid LSTM + XGBoost system with spatial clustering (K-Means/DBSCAN). Designed Streamlit backend + React frontend dashboard for real-time urban mobility insights.
          
          </div>
        </li>
        <li className="exp-item">
          <div className="company">Personal | Ongoing</div>
          <div className="title">MarketMind — Financial Intelligence Platform</div>
          <div className="description">
            AI-powered platform leveraging ML for real-time market analytics, sentiment analysis, and predictive insights. Full-stack React + Python/ML.
          </div>
        </li>
        <li className="exp-item">
          <div className="company">Hackathon | 1st Round Finalist</div>
          <div className="title">Smart India Hackathon 2025</div>
          <div className="description">
            Successfully completed University Level Round. Developed innovative solutions for real-world problems.
          </div>
        </li>
        <li className="exp-item">
          <div className="company">Project | Full Stack</div>
          <div className="title">Avanta Airline Management System</div>
          <div className="description">
            Scalable airline booking app using React, Node.js, Express.js backend with JWT authentication and planned MongoDB integration.

          </div>
        </li>
      </ul>
    </section>
  );
}

export default Experience;