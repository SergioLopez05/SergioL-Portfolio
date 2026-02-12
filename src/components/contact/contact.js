import * as React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import {
    contact,
    container,
    sectionTitle,
    description,
    highlights,
    card,
    form,
    a
} from "./contact.module.css";

export default function Contact() {
    return (
        <section className={contact} id="contact">
            <h2 className={sectionTitle}>Contact Me</h2>
            <p className={description}>
                Feel free to reach out to me through the form below or write me an email at sergiolopezvenegas05@gmail.com
            </p>
            <div className={container}>

                {/* FORMULARIO */}
                <form
                    className={form}
                    name="contact"
                    netlify
                >
                    <input type="hidden" name="form-name" value="contact" />

                    <input type="text" name="name" placeholder="Your Name" required />

                    <input type="email" name="email" placeholder="Your Email" required />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="4"
                        required
                    />

                    <button type="submit">Send Message</button>
                </form>

                <div className={highlights}>
                    <div className={card}>
                        <a className={a} href="/SergioLopezVenegasResume.pdf" target="_blank" rel="noreferrer">
                            View CV
                        </a>
                    </div>
                </div>

                <div className={highlights} >
                    <div className={card}>
                        <a className={a} href="https://github.com/SergioLopez05" target="_blank" rel="noreferrer">Look at my Github profile</a>
                    </div>
                </div>
            </div>
        </section>

    );
}
