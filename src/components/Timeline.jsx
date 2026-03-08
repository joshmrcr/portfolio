import './Timeline.css';

const Timeline = () => {
    const experiences = [
        {
            year: "August 2025 - Present",
            category: "Freelance",
            title: "Independent Developer",
            role: "Software Designer & Developer",
            description: "Building responsive web applications, designing user interfaces, and delivering custom software solutions to diverse clients.",
            icon: "monitor"
        },
        {
            year: "March 2025 - August 2025",
            category: "Job Experience",
            title: "Data Entry & System Developer",
            role: "Professional Role",
            description: "Managed data integrity and developed internal system optimizations to improve workflow efficiency and system reliability.",
            icon: "database"
        },
        {
            year: "February 2023 - April 2023",
            category: "On-The-Job Experience",
            title: "UI Designer & Front-end Developer Intern",
            role: "Internship",
            description: "Engineered an employee information management system and improved website performance through optimized React components and UI/UX best practices.",
            icon: "briefcase"
        },
        {
            year: "2021",
            category: "Certificates",
            title: "Continuous Learning",
            role: "Certifications",
            description: "Obtained certifications in 'Introduction to JAVA' and 'Full Stack: Web Development Guide For an Absolute Beginner'.",
            icon: "award"
        },
        {
            year: "August 2019 - August 2024",
            category: "Education",
            title: "Batangas State University",
            role: "Computer Engineering Graduate",
            description: "Completed comprehensive coursework focusing on full-stack web development, systems programming, hardware/software integration, and software engineering principles.",
            icon: "graduation-cap"
        }
    ];

    const getIcon = (type) => {
        switch (type) {
            case 'monitor':
                return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>;
            case 'graduation-cap':
                return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>;
            case 'briefcase':
                return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-briefcase"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>;
            case 'database':
                return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-database"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>;
            case 'award':
                return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-award"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>;
            default:
                return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>;
        }
    };

    return (
        <section id="experience" className="timeline section container">
            <h2 className="section-title reveal">My Journey</h2>

            <div className="timeline-container">
                <div className="timeline-line"></div>

                {experiences.map((exp, index) => (
                    <div key={index} className={`timeline-item reveal ${index % 2 === 0 ? 'left' : 'right'}`}>
                        <div className="timeline-dot">
                            {getIcon(exp.icon)}
                        </div>
                        <div className="timeline-content glass">
                            <span className="timeline-year">{exp.year}</span>
                            <span className="timeline-category">{exp.category}</span>
                            <h3 className="timeline-title">{exp.title}</h3>
                            <h4 className="timeline-role glow-text">{exp.role}</h4>
                            <p className="timeline-description">
                                {exp.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Timeline;
