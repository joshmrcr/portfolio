import './Hero.css'

const Hero = () => {
    return (
        <section id="home" className="hero section container">
            <div className="hero-content">
                <p className="hero-greeting reveal">Hello! I am</p>
                <h1 className="hero-name reveal">Brian Joshua Marcera.</h1>
                <h2 className="hero-title reveal glow-text">Computer Engineer and Software Engineer.</h2>
                <p className="hero-description reveal">
                    Dedicated to building efficient, user-focused applications. My expertise spans from front-end development to system design, with a strong focus on creating scalable solutions that enhance workflows and improve user experience.
                </p>
                <div className="hero-cta reveal">
                    <a href="/BrianJoshuaMarcera_ComputerEngineer.pdf" target="_blank" rel="noreferrer" className="btn btn-primary glow-box">Download Resume</a>
                    <a href="#projects" className="btn btn-outline">Check out my work!</a>
                </div>
            </div>
        </section>
    )
}

export default Hero
