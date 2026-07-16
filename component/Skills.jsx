import { useEffect, useRef, useState } from "react";

function Skills() {
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

  const skills = [
    {
      category: "Languages",
      items: ["C++", "JavaScript", "Python"]
    },
    {
      category: "Frontend",
      items: ["React.js", "HTML/CSS", "Responsive Design"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "RESTful APIs"]
    },
    {
      category: "Database",
      items: ["MongoDB", "MySQL", "DBMS"]
    },
    {
      category: "AI/ML",
      items: ["LSTM", "XGBoost", "Data Analysis"]
    },
    {
      category: "Tools",
      items: ["Git/GitHub", "VS Code", "Google Colab"]
    }
  ];

  return (
    <section ref={ref} className={`section-container reveal ${visible ? "visible" : ""}`} id="skills">
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
              {skill.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;