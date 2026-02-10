import * as React from 'react';

import {
    contact,
    container,
    sectionTitle,
    description,
    highlights,
    card,
    form
} from "./contact.module.css";

export default function Contact() {
    return (
        <section className={contact} id="contact">
            <h2 className={sectionTitle}>Contact Me</h2>
            <div className={container}>

                {/* FORMULARIO */}
                <form
                    className={form}
                    name="contact"
                    method="POST"
                    data-netlify="true"
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
                        <h3 >Descarga mi CV</h3>
                        <p>Descarga mi CV en formato PDF</p>
                    </div>
                </div>

                <div className={highlights}>
                    <div className={card}>
                        <h3 >Github</h3>
                        <p>Mira mi repositorio en Github</p>
                    </div>
                </div>
            </div>
        </section>

    );
}
