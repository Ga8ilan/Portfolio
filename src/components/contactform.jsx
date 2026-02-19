import { useForm, ValidationError } from '@formspree/react';
import '../styles/contactform.css';

function ContactForm() {
    const [state, handleSubmit] = useForm("xbdakaza");
    if (state.succeeded) {
        return <p>I'll get back to you soon</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        required
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    required
                ></textarea>
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </div>

            <button type="submit" disabled={state.submitting}>
                Send Message
            </button>
        </form>
    );
}

export default ContactForm;