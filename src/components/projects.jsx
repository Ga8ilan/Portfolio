import thelmaImg from "../assets/thelmaclean.png";
import stetsonImg from "../assets/StetsonSocial.png";
import gatchiImg from "../assets/gatchi.png";
import zuckbuckImg from "../assets/zuckbuck.png";

// projects section of website
function Projects() {
    /*  Array for projects (makes it easy to add future projects) */
    const projects = [
        {
            id: 1,
            title: "Thelma's cleaning services",
            description: "This is a website for my moms small cleaning business that provides cleaning services to the community. I built this simple website to get her more clients and succesfully help her get more customers.",
            dateCreated: "July 2025",
            image: thelmaImg,
            techStack: ["React", "Formspree"],
        },
        {
            id: 2,
            title: "Stetson Social",
            description: "This website was made during a Steast Hackathon. We made it using React and Node. This website let users create events that other users could join and partiicpate in. It's a great webste for planning.",
            dateCreated: "March 2025",
            image: stetsonImg,
            techStack: ["React", "Tailwind CSS", "Next.js", "Firebase"],
        },
        {
            id: 3,
            title: "StudiGotchi",
            description: "This is a game studying web application to make studying more fun and engaging by having to care for a Tomagotchi. You upload a file and it generates questions based off that file.",
            dateCreated: "Febuary 2026",
            image: gatchiImg,
            techStack: ["React", "Python", "Snowflake", "FastAPI"],
        },
        {
            id: 4,
            title: "ZuckBuck",
            description: "Website for the selling and buying of the ZuckBuck cryptocurrency. It let users connect either their Phantom or Coinbase wallets but this project is paused for not because both me and my co-partner Zach are busy with school",
            dateCreated: "Ongoing (Paused Indefinitely)",
            image: zuckbuckImg,
            techStack: ["Next.js", "React", "Python", "Supabase", "Tailwind CSS", "Ethers 6", "Coinbase Wallet SDK"],
        },

    ];
    return (
        <section id="projects" className="projects">
            {/* Mapping each project in the array onto the website with html elements */}
            <h2>Projects</h2>
            <div className="projects-content">
                {projects.map((project) => (
                    <article key={project.id} className="project-card">
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
            <button class="see-more">
                See More
            </button>
        </section>
    )
}

export default Projects