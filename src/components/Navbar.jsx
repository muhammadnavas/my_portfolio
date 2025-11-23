import { useEffect } from 'react';
import './Navbar.css';

const THEMES = ['theme-pink','theme-blue','theme-dark','theme-soft'];

function setTheme(theme) {
  if (!theme) return;
  document.body.classList.remove(...THEMES);
  document.body.classList.add(theme);
  try { localStorage.setItem('siteTheme', theme); } catch {}
}

const Navbar = () => {
  useEffect(() => {
    try {
      const saved = localStorage.getItem('siteTheme');
      if (saved) setTheme(saved);
    } catch(e){}
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Portfolio</div>
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#achievements">Achievements</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="navbar-themes">
        <button className="theme-btn" data-theme="theme-pink" onClick={() => setTheme('theme-pink')} aria-label="Pink theme" />
        <button className="theme-btn" data-theme="theme-blue" onClick={() => setTheme('theme-blue')} aria-label="Blue theme" />
        <button className="theme-btn" data-theme="theme-dark" onClick={() => setTheme('theme-dark')} aria-label="Dark theme" />
        <button className="theme-btn" data-theme="theme-soft" onClick={() => setTheme('theme-soft')} aria-label="Soft theme" />
      </div>
    </nav>
  );
};

export default Navbar;
