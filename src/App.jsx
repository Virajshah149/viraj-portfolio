import { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Header from "../component/Header";
import About from "../component/About";
import Skills from "../component/Skills";
import Experience from "../component/Experience";
import Projects from "../component/Projects";
import Footer from "../component/Footer";
import "./App.css";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app">
      <div className="bg-shapes">
        <div className="diagonal diagonal-1"></div>
        <div className="diagonal diagonal-2"></div>
      </div>
      <Navbar 
        sections={sections} 
        activeSection={activeSection} 
        onNavigate={handleNavigate} 
      />
      <Header />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;