import mailIcon from "../assets/mail-icon.png";
import linkedinIcon from "../assets/linkedin-symbol.png";
import githubIcon from "../assets/github-icon.png";
import instagramIcon from "../assets/instagram-icon.png";
import ContactForm from "./contactform";

function Contact() {
    return (
        <section id="contact" className="contact">
            <h1>Contact Me</h1>
            <div className="contact-container">
                {/* Left side - Form */}
                <div className="contact-form-wrapper">
                    <ContactForm />
                </div>

                {/* Right side - Get in touch */}
                <div className="get-in-touch">
                    <h2>Get in Touch</h2>
                    <div className="contact-methods">
                        <a
                            href="https://www.linkedin.com/in/edgar-castaneda-jr/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-method"
                            aria-label="LinkedIn"
                        >
                            <img src={linkedinIcon} alt="LinkedIn" />
                            <span>Edgar Castaneda</span>
                        </a>

                        <a
                            href="https://github.com/Ga8ilan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-method"
                            aria-label="Github"
                        >
                            <img src={githubIcon} alt="Github" />
                            <span>Ga8ilan</span>
                        </a>

                        <a
                            href="mailto:castaneda.e@northeastern.edu"
                            className="contact-method"
                            aria-label="Mail"
                        >
                            <img src={mailIcon} alt="Mail" />
                            <span>castaneda.e@northeastern.edu</span>
                        </a>

                        <a
                            href="https://www.instagram.com/edgorrsh/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-method"
                            aria-label="Instagram"
                        >
                            <img src={instagramIcon} alt="Instagram" />
                            <span>@edgorrsh</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact

