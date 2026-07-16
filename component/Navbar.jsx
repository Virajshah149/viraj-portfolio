function Navbar({ sections, activeSection, onNavigate }) {
  return (
    <nav className="navbar">
      <div className="logo">Welcome to My Portfolio Website</div>
      <ul className="nav-links">
        {sections.map((s) => (
          <li key={s.id}>
            <button
              className={activeSection === s.id ? "active" : ""}
              onClick={() => onNavigate(s.id)}
            >
              {s.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;