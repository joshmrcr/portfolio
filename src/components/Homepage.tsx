import { useState, useEffect } from "react";
import "./Homepage.css";
import portraitImg from "../assets/portrait.png";
import homeImg from "../assets/home.jpg";
import bsunavImg from "../assets/bsunav.png";
import empForm from "../assets/emp_form.png";

// Font Awesome Imports
import { faPhone } from "@fortawesome/free-solid-svg-icons";
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
  // Modal state & handlers
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (imgSrc: string) => {
    setModalImage(imgSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage("");
  };

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
            href="/BrianJoshuaMarcera_ComputerEngineer.pdf"
            download="Brian_Joshua_Marcera_Resume.pdf"
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
              <div className="project-image">
                <img
                  src={homeImg}
                  alt="Task Pomodoro Screenshot"
                  onClick={() => openModal(homeImg)}
                  style={{ cursor: "pointer" }}
                />
              </div>

              <div className="project-content">
                <a
                  href="https://github.com/joshmrcr/Task_Pomodoro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="project-title">Task Pomodoro</h3>
                </a>
                <p className="project-description">
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

            <div className="project-card">
              <div className="project-image">
                <img
                  src={empForm}
                  alt="Employee Data Entry Form"
                  onClick={() => openModal(empForm)}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="project-content">
                <a
                  href="https://github.com/joshmrcr/EmployeeDataEntry"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="project-title">
                    SCC Employee Management System
                  </h3>
                </a>
                <p className="project-description">
                  A web-based employee data management system built with Google
                  Apps Script and HTML/CSS. This system allows HR to easily add,
                  update, and manage employee details, including photo uploads
                  and government ID tracking.
                </p>
                <div className="project-tags">
                  <span className="tag">Google Apps Script</span>
                  <span className="tag">HTML</span>
                  <span className="tag">CSS</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag">Google Sheets</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img
                  src={bsunavImg}
                  alt="BSU NAV Screenshot"
                  onClick={() => openModal(bsunavImg)}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="project-content">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <h3 className="project-title">BSU NAV</h3>
                </a>
                <p className="project-description">
                  BSU NAV is a 360-degree panoramic navigation app designed
                  specifically for Batangas State University Alangilan Campus.
                  It offers immersive navigation features such as panoramic
                  views, animated path visualization, interactive directory
                  board, and intuitive navigational buttons.
                </p>
                <div className="project-tags">
                  <span className="tag">UI Design</span>
                  <span className="tag">UX Design</span>
                  <span className="tag">Virtual Reality</span>
                  <span className="tag">3D VISTA</span>
                </div>
              </div>
            </div>
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
          <div className="footer-container">
            <div className="footer-contacts">
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} className="footer-icon" />
                <span>0970 495 8740</span>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
                <a href="mailto:cpebrianmarcera@gmail.com">
                  cpebrianmarcera@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
                <a
                  href="https://linkedin.com/in/brian-joshua-marcera"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/brian-joshua-marcera
                </a>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faGithub} className="footer-icon" />
                <a
                  href="https://github.com/joshmrcr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/joshmrcr
                </a>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faBehance} className="footer-icon" />
                <a
                  href="https://behance.net/joshmrcr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  behance.net/joshmrcr
                </a>
              </div>
            </div>
            <div className="footer-bottom">
              © 2025 Brian Joshua Marcera. All rights reserved.
            </div>
          </div>
        </footer>

        {modalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={modalImage} alt="Modal" />
              <button className="modal-close" onClick={closeModal}>
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
