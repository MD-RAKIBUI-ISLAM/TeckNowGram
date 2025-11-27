// src/pages/Contact.js

import ContactForm from '../Contact/ContactForm';
import ContactInfo from '../Contact/ContactInfo';

function Contact() {
    return (
        <main>
            <ContactInfo />

            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-6 max-w-[1271px]">
                    <ContactForm />
                </div>
            </section>
        </main>
    );
}

export default Contact;
