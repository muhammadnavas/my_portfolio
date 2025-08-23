import React from "react";
import './App.css';
import ProfilePic from './assets/profile.jpg';

function App(){
  return(
    <div className="app">
      <header>
        <img src={ProfilePic} alt="Profile" className="profile-pic"/>
        <h1>Muhammad Navas</h1>
        <p>AI | ML | MERN | Python</p>
      </header>
      <section id="about">
        <h2>About Me</h2>
        <p>I am a passionate developer who loves building web applications...</p>
      </section>c
      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li><a href="#">Project 1</a></li>
          <li><a href="#">Project 2</a></li>
        </ul>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>Email : navasns0409@gmail.com</p>
        <p>LinkedIn : <a href="#">linkedin.com/in/muhammadnavas</a></p>
      </section>
      <footer>
        <p>2025 Muhammad Navas</p>
      </footer>
    </div>
  )
}

export default App;