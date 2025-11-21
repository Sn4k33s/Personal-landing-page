import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="contact section">
            <h2>Contact</h2>
            <div className="contact-info">
                <p><strong>Location:</strong> São Paulo, SP — Brazil</p>
                <p><strong>Phone:</strong> +55 11 93373-9822</p>
                <p><strong>Email:</strong> <a href="mailto:luanalvesdasilva278@gmail.com">luanalvesdasilva278@gmail.com</a></p>
            </div>

            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit" className="button">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;