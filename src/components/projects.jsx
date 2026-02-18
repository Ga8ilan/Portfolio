// projects section of website

function Projects() {
    /* array for all projects */
    const projects = [
        {
            id: 1,
            title: "Thelma's cleaning services",
            description: "A website for Thelma's cleaning services, a cleaning company that provides cleaning services to the community.",
            dateCreated: "July 2025",
            image: "./src/assets/thelmacleanpng",
            techStack: ["React", "Formspree"],
        },
        {
            id: 2,
            title: "Stetson Social",
            description: "A website for Stetson Social, a social media platform for the Stetson East and West communities. This was the project of the SteastHackathon.",
            dateCreated: "March 2025",
            image: "./src/assets/StetsonSocial.png",
            techStack: ["React", "Tailwind CSS", "Next.js", "Firebase"],
        },
        {
            id: 3,
            title: "StudiGotchi",
            description: "A game studying web application to make studying more fun and engaging by having to care for a Tomagotchi.",
            dateCreated: "Febuary 2026",
            image: "./src/assets/gatchi.png",
            techStack: ["React", "Python", "Snowflake", "FastAPI"],
        },
        {
            id: 4,
            title: "ZuckBuck",
            description: "Website for the selling and buying of the ZuckBuck cryptocurrency.",
            dateCreated: "Ongoing (Paused Indefinitely)",
            image: "./src/assets/zuckbuck.png",
            techStack: ["Next.js", "React", "Python", "Supabase", "Tailwind CSS", "Ethers 6", "Coinbase Wallet SDK"],
        },

    ];
    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="projects-content">
                {projects.map((project) => (
                    <article key={project.id} className="project-card">
                        <div className="project-card-image">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="project-card-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <p>{project.techStack.join(", ")}</p>
                            <span className="project-date">Date Created: {project.dateCreated}</span>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Projects