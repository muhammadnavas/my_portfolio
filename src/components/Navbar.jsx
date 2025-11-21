import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">Portfolio</div>
    <ul className="navbar-links">
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#achievements">Achievements</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
