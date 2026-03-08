import './Projects.css'

const Projects = () => {
    const projectList = [
        {
            title: "Task Pomodoro",
            description: "A productivity app combining task management with a Pomodoro timer. Helps users stay focused and track their tasks efficiently.",
            techStack: ["React Native", "Expo"],
            github: "#",
            demo: "https://github.com/joshmrcr/Task_Pomodoro"
        },
        {
            title: "BSU NAV",
            description: "A 360-degree panoramic navigation app designed specifically for Batangas State University Alangilan Campus. It offers immersive navigation features such as panoramic views, animated path visualization, interactive directory board, and intuitive navigational buttons.",
            techStack: ["UI Design", "UX Design", "Virtual Reality", "3D VISTA"],
            github: "#",
            demo: "#"
        },
        {
            title: "Flat Africa Hub",
            description: "A service-focused website designed to showcase the company's sourcing, inspection, and shipping solutions for businesses across Africa. Built using Wix, it highlights the brand's services through a clean layout, intuitive navigation, and user-centered UX/UI design.",
            techStack: ["Wix", "UX Design", "UI Design"],
            github: "#",
            demo: "https://www.flatafricahub.com/"
        }
    ];

    return (
        <section id="projects" className="projects section container">
            <h2 className="section-title reveal">Featured Projects</h2>

            <div className="projects-grid">
                {projectList.map((project, index) => (
                    <div key={index} className="project-card glass reveal">
                        <div className="project-content">
                            <div className="project-header">
                                <div className="project-folder">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <div className="project-links">
                                    {project.github && project.github !== "#" && (
                                        <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub Link">
                                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                        </a>
                                    )}
                                    {project.demo && project.demo !== "#" && (
                                        <a href={project.demo} target="_blank" rel="noreferrer" aria-label="External Link">
                                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="project-title">
                                {project.demo && project.demo !== "#" ? (
                                    <a href={project.demo} target="_blank" rel="noreferrer">{project.title}</a>
                                ) : (
                                    <span>{project.title}</span>
                                )}
                            </h3>

                            <div className="project-description">
                                <p>{project.description}</p>
                            </div>
                        </div>

                        <ul className="project-tech-list">
                            {project.techStack.map((tech, i) => (
                                <li key={i}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects
