import { useEffect, useRef, useState } from "react";

function Projects() {
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

  const projects = [
    {
        title: "Eco-Transit-Pulse",
        desc: "Data Science and Machine Learning based Project to analyze Public transport Data and predict Future Passenger demand.",
        tags: ["LSTM Model,     \t Random-Forest Model, K-Clustering  Model"]
    },
    {
      title: "Weather Data Analysis Dashboard",
      desc: "Interactive dashboard using Python, Pandas, NumPy, Matplotlib, Seaborn with EDA and trend analysis.",
      tags: ["Python", "Data Analysis", "Visualization"]
    },
    {
      title: "E-commerce Order Processing System",
      desc: "Console-based OOP in C++ with role-based access (customer/seller/admin), inheritance, polymorphism.",
      tags: ["C++", "OOP", "System Design"]
    },
    {
      title: "CampusConnect",
      desc: "Full-stack college event management with Node.js, Express, MongoDB, React. Role-based access and notifications.",
      tags: ["React", "Node.js", "MongoDB"]
    }
    
  ];

  return (
    <section ref={ref} className={`section-container reveal ${visible ? "visible" : ""}`} id="projects">
      <div className="section-header">
        <div className="accent-line"></div>
        <h2>Featured Projects</h2>
        <p>Full-stack work showcasing capabilities</p>
      </div>
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.title} className="project-card">
            <div className="header">
              <h4>{p.title}</h4>
              <p className="desc">{p.desc}</p>
            </div>
            <div className="tags">
              {p.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;