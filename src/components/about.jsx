import edgar from "../assets/newedgar1.png"
/* About section of my website*/
function About() {
    const technicalSkills = ["React & Next.js", "Javascript & Typescript", "HTML", "Java", "Docker", "SQL"]

    return (
        <section id="about" className="about" >
            <img src={edgar} alt="Edgar image" className="edgar" />
            {/* simple about */}
            <div className="about-content">
                <h1>Edgar Castaneda</h1>
                <p>
                    Hi! I'm Edgar Castaneda. I study computer science at <strong>Northeastern Univeristy</strong> and
                    I'm concentrating in Software! I'm passionate about the things I build and I truly
                    enjoy spending time working on my work. I'm always excited to learn new things
                    and <strong>bring my very best to whatever I do</strong>.
                </p>
                <p>
                    I love connecting and talking to new people so please don't hesitate to contact me.
                    I'm open to building new things and helping out on projects, and I'm always down for
                    just a simple chat.
                </p>
                <p>
                    I've been programming for the past two years and I've learned so much. I've recently
                    become a fellow at <strong>ColorStack</strong> and I'm excited to join and experience even more new things.
                </p>
                <h2>Technical Skills:</h2>
                <div className="technical-skills">
                    {technicalSkills.map((skill) =>
                        <span
                            key={skill} className="skill">{skill}
                        </span>
                    )}
                </div>
            </div>
        </section >
    );
}

export default About