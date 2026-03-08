import './About.css'

const About = () => {
    const skills = [
        { category: "Languages", items: ["Python", "Java", "JavaScript", "HTML", "CSS"] },
        { category: "Frameworks & Databases", items: ["React", "React Native", "MySQL", "SQLite"] },
        { category: "Design & Tools", items: ["Figma", "UI/UX Design", "Git", "OOP", "Virtual Reality", "3D VISTA"] },
    ];

    return (
        <section id="about" className="about section container">
            <h2 className="section-title reveal">About Me</h2>

            <div className="about-content">
                <div className="about-text reveal">
                    <p>
                        I'm Brian Joshua Marcera, a Computer Engineering graduate and passionate Software Engineer dedicated to building efficient, user-focused applications. My expertise spans from front-end development to system design, with a strong focus on creating scalable solutions that enhance workflows and improve user experience.
                    </p>
                    <p>
                        I have professional experience as a UI Designer and Front-End Developer intern, where I successfully engineered an employee information management system and improved website performance through optimized React components.
                    </p>
                    <p>
                        Beyond technical skills, I am a lifelong learner who enjoys exploring emerging technologies and applying problem-solving skills to real-world challenges. Whether it's developing mobile apps, web platforms, or complex systems, I strive for excellence in every line of code I write.
                    </p>
                </div>

                <div className="about-skills reveal">
                    <h3>Technical Toolkit</h3>
                    <div className="skills-grid">
                        {skills.map((skillGroup, index) => (
                            <div key={index} className="skill-category glass">
                                <h4>{skillGroup.category}</h4>
                                <ul>
                                    {skillGroup.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
