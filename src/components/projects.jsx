import thelmaImg from "../assets/thelmaclean.png";
import stetsonImg from "../assets/StetsonSocial.png";
import gatchiImg from "../assets/gatchi.png";
import zuckbuckImg from "../assets/zuckbuck.png";
import { useState } from "react";

// projects section of website
function Projects() {
    /*  Array for projects (makes it easy to add future projects) */
    const [showAll, setShowAll] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "Thelma's cleaning services",
            description: "This is a website for my mom's small cleaning business that provides cleaning services to the community. I built this simple website to get her more clients and succesfully help her get more customers.",
            dateCreated: "July 2025",
            image: thelmaImg,
            techStack: ["React", "Formspree"],
            github: "",
            liveLink: ""
        },
        {
            id: 2,
            title: "Stetson Social",
            description: "This website was made during a Steast Hackathon. We made it using React and Node. This website let users create events that other users could join and particpate in. It's a great website for planning.",
            dateCreated: "March 2025",
            image: stetsonImg,
            techStack: ["React", "Tailwind CSS", "Next.js", "Firebase"],
            github: "",
            liveLink: ""
        },
        {
            id: 3,
            title: "StudiGotchi",
            description: "This is a game studying web application to make studying more fun and engaging by having to care for a Tamagotchi. You upload a file and it generates questions based off that file.",
            dateCreated: "Febuary 2026",
            image: gatchiImg,
            techStack: ["React", "Python", "Snowflake", "FastAPI"],
            github: "",
            liveLink: ""
        },
        {
            id: 4,
            title: "ZuckBuck",
            description: "Website for the selling and buying of the ZuckBuck cryptocurrency. It let users connect either their Phantom or Coinbase wallets but this project is paused for not because both me and my co-partner Zach are busy with school",
            dateCreated: "Ongoing (Paused Indefinitely)",
            image: zuckbuckImg,
            techStack: ["Next.js", "React", "Python", "Supabase", "Tailwind CSS", "Ethers 6", "Coinbase Wallet SDK"],
            github: "",
            liveLink: ""
        },
    ];
    const projectsToShow = showAll ? projects : projects.slice(0, 3);

    return (
        <section id="projects" className="projects">
            {/* Mapping each project in the array onto the website with html elements */}
            <h2>Projects</h2>
            <div className="projects-content">
                {projectsToShow.map((project) => (
                    <article
                        key={project.id}
                        className="project-card"
                        onClick={() => setSelectedProject(project)}
                    >
                        <h3 className="project-card-title">{project.title}</h3>
                        <div className="project-card-image">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="project-card-info">
                            <p>{project.description}</p>
                            <p>{project.techStack.join(", ")}</p>
                            <span className="project-date">Date Created: {project.dateCreated}</span>
                        </div>
                    </article>
                ))}
            </div>
            {projects.length > 3 && (
                <button type="button" className="see-more" onClick={() => setShowAll(!showAll)}>
                    {showAll ? "see Less" : "See More"}
                </button>
            )}

            {/* Project Detail Modal */}
            {selectedProject && (
                <div className="project-modal" onClick={() => setSelectedProject(null)}>
                    <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="project-modal-header">
                            <button
                                className="project-modal-close"
                                onClick={() => setSelectedProject(null)}
                            >
                                ×
                            </button>
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="project-modal-image"
                            />
                        </div>
                        <div className="project-modal-body">
                            <h2 className="project-modal-title">{selectedProject.title}</h2>

                            <div className="project-modal-section">
                                <h3>Description:</h3>
                                <p className="project-modal-description">{selectedProject.description}</p>
                            </div>

                            <div className="project-modal-section">
                                <h3>Technologies:</h3>
                                <div className="project-modal-tech">
                                    {selectedProject.techStack.map((tech) => (
                                        <span key={tech}>{tech}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="project-modal-section">
                                <h3>Links:</h3>
                                <div className="project-modal-links">
                                    {selectedProject.github && (
                                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                            {selectedProject.github}
                                        </a>
                                    )}
                                    {selectedProject.liveLink && (
                                        <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                            {selectedProject.liveLink}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Projects