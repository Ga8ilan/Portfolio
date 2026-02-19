import mailIcon from "../assets/mail-icon.png";
import linkedinIcon from "../assets/linkedin-symbol.png";
import githubIcon from "../assets/github-icon.png";

function Contact() {
    return (
        <section className="contact">
            <h1>Contact Me</h1>
            <div className="contact-links">
                <a
                    href="https://www.linkedin.com/in/edgar-castaneda-jr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-links"
                    aria-label="LinkedIn"
                >
                    <img src={linkedinIcon} alt="LinkedIn" />
                </a>
                <a
                    href="https://github.com/Ga8ilan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-links"
                    aria-label="Github"
                >
                    <img src={githubIcon} alt="Github" />
                </a>
                <a
                    href="mailto:castaneda.e@northeastern.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-links"
                    aria-label="Mail"
                >
                    <img src={mailIcon} alt="Mail" />
                </a>
            </div>
        </section>
    );
}

export default Contact


// oops