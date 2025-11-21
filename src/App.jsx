import './App.css';
import ProfilePic from './assets/profile.jpg';
import Achievement from './components/Achievement';
import Navbar from './components/Navbar';
import TextType from './components/TextType';

function App(){
  return(
    <div className="app">
      <Navbar />
      <header>
        <img src={ProfilePic} alt="Profile" className="profile-pic"/>
        <h1>
          <TextType 
            text={["Muhammad Navas", "AI & ML Developer", "Full-Stack Engineer"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            loop={true}
          />
        </h1>
        <p>AI | ML | MERN | Python</p>
      </header>
      <section id="about">
        <h2>About Me</h2>
          <p>I am a passionate developer who loves building web applications...</p>
        </section>
      <Achievement />
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