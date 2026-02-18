import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("xbdakaza");
    if (state.succeeded) {
        return <p>I'll get back to you soon</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Your Name" required
            />
            <input
                id="email"
                name="email"
                placeholder="Your Email" required
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <input
                id="message"
                name="message"
                placeholder="Your Message" required
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
                Send Message
            </button>
        </form>
    );
}

export default ContactForm;