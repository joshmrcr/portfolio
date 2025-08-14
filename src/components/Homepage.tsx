import { useState, useEffect } from "react";
import "./Homepage.css";
import portraitImg from "../assets/portrait.png";
import welcomeImg from "../assets/welcome.jpg";
import homeImg from "../assets/home.jpg";
import pomodoroImg from "../assets/pomodoro.jpg";

// Font Awesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function TypingText() {
  const texts = [
    "Web Developer",
    "Mobile Developer",
    "UI Designer",
    "UX Designer",
  ];
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseDuration = 1000;

  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: number;

    if (!isDeleting && displayText === texts[textIndex]) {
      timer = window.setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    } else {
      timer = window.setTimeout(
        () => {
          setDisplayText((prev) =>
            isDeleting
              ? prev.slice(0, -1)
              : texts[textIndex].slice(0, prev.length + 1)
          );
        },
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  return (
    <span className="typing-text">
      {displayText}
      <span className="cursor">|</span>
    </span>
  );
}

export default function Homepage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <ul className="nav-menu">
            <li>
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link">
                About Me
              </a>
            </li>
          </ul>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary cta-btn"
          >
            Download Resume
          </a>
        </div>
      </nav>

      <div className="page-container" id="home">
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <p>Hello! I am</p>
              <h1>Brian Joshua Marcera</h1>
              <p className="sub-text">
                a <TypingText />
              </p>

              {/* Social Links using FontAwesomeIcon */}
              <div className="social-links">
                <a
                  href="mailto:cpebrianmarcera@gmail.com"
                  className="social-icon"
                  aria-label="Email"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a
                  href="https://www.linkedin.com/in/brian-joshua-marcera-46901a21b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://github.com/joshmrcr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="https://www.behance.net/joshmrcr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Behance"
                >
                  <FontAwesomeIcon icon={faBehance} />
                </a>
              </div>
            </div>

            <div className="hero-image-wrapper">
              <img
                src={portraitImg}
                alt="Portrait of Brian Joshua Marcera"
                className="hero-image"
              />
            </div>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <h2 className="section-title">Projects</h2>
          <div className="projects">
            <div className="project-card">
              <div className="project-carousel">
                <img src={welcomeImg} alt="Welcome Screen" />
                <img src={homeImg} alt="Home Screen" />
                <img src={pomodoroImg} alt="Pomodoro Timer Screen" />
              </div>
              <div className="project-content">
                {/* Only the "Task Pomodoro" title is clickable */}
                <a
                  href="https://github.com/joshmrcr/Task_Pomodoro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>Task Pomodoro</h3>
                </a>
                <p>
                  Task Pomodoro is a minimalist productivity app built with
                  React Native and Expo to help users manage tasks (daily &
                  weekly) while staying focused using the Pomodoro technique.
                </p>
                <div className="project-tags">
                  <span className="tag">TypeScript</span>
                  <span className="tag">React Native</span>
                  <span className="tag">Expo</span>
                  <span className="tag">EAS Build</span>
                  <span className="tag">AsyncStorage</span>
                </div>
              </div>
            </div>

            {/* You can add other projects here */}
          </div>
        </section>

        <section className="about-section" id="about">
          <h3>About Me</h3>
          <div className="about-content">
            <div className="about-text">
              <p>
                I’m <strong>Brian Joshua Marcera</strong>, a Computer
                Engineering graduate and passionate
                <strong> Software Engineer</strong> dedicated to building
                efficient, user-focused applications. My expertise spans from
                front-end development to system design, with a strong focus on
                creating scalable solutions that enhance workflows and improve
                user experience.
              </p>
              <p>
                I have professional experience as a <strong>UI Designer</strong>{" "}
                and <strong>Front-End Developer</strong>
                intern, crafting intuitive interfaces with modern frameworks. As
                a<strong> Data Entry/System Developer</strong>, I engineered an
                employee information management system that streamlined data
                handling by integrating Google Sheets with JavaScript
                automation—significantly reducing manual workload and increasing
                accuracy.
              </p>
              <p>
                My technical skill set includes{" "}
                <strong>Python, Java, C++, React, React Native, SQLite</strong>,
                and full-stack web development. I approach every project with a
                problem-solving mindset, ensuring each solution is both
                maintainable and impactful.
              </p>
            </div>

            <div className="about-tech-stack">
              <h4>Tech Stack:</h4>
              <span className="tag">Python</span>
              <span className="tag">Java</span>
              <span className="tag">OOP</span>
              <span className="tag">MySQL</span>
              <span className="tag">HTML</span>
              <span className="tag">CSS</span>
              <span className="tag">JavaScript</span>
              <span className="tag">React</span>
              <span className="tag">React Native</span>
              <span className="tag">SQLite</span>
              <span className="tag">Figma</span>
              <span className="tag">UI/UX Design</span>
              <span className="tag">Git</span>
            </div>
          </div>
        </section>

        <footer className="footer">
          © 2025 Brian Joshua Marcera. All rights reserved.
        </footer>
      </div>
    </>
  );
}
