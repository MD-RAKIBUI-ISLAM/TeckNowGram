import React from 'react';

import withSectionData from '../hocs/withSectionData';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            company: '',
            subject: '',
            message: '',
            sent: false
        };
    }

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleSubmit = (e) => {
        e.preventDefault();
        // For demo just set sent=true. Connect to API here.
        console.log('form payload:', this.state);
        this.setState({ sent: true });
    };

    render() {
        const { sent } = this.state;
        const { section } = this.props;
        const contact = section?.company || {};
        return (
            <section id="contact" className="py-12 bg-slate-50">
                <div className="container mx-auto px-6 md:flex gap-8">
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                        <p className="text-gray-600 mb-4">{contact.address}</p>
                        <div className="text-sm">
                            <strong>Phone:</strong> {contact.phone}
                        </div>
                        <div className="text-sm mb-4">
                            <strong>Email:</strong> {contact.email}
                        </div>
                        {sent ? (
                            <div className="mt-4 p-4 bg-green-100 rounded">
                                Message sent — we will contact you soon.
                            </div>
                        ) : null}
                    </div>
                    <form
                        onSubmit={this.handleSubmit}
                        className="md:w-1/2 bg-white p-6 rounded shadow"
                    >
                        <div className="grid grid-cols-1 gap-3">
                            <input
                                name="name"
                                onChange={this.handleChange}
                                required
                                placeholder="Full Name"
                                className="border p-2 rounded"
                            />
                            <input
                                name="email"
                                onChange={this.handleChange}
                                required
                                placeholder="Email"
                                className="border p-2 rounded"
                            />
                            <input
                                name="phone"
                                onChange={this.handleChange}
                                placeholder="Phone"
                                className="border p-2 rounded"
                            />
                            <input
                                name="company"
                                onChange={this.handleChange}
                                placeholder="Company"
                                className="border p-2 rounded"
                            />
                            <input
                                name="subject"
                                onChange={this.handleChange}
                                placeholder="Subject"
                                className="border p-2 rounded"
                            />
                            <textarea
                                name="message"
                                onChange={this.handleChange}
                                placeholder="Message"
                                className="border p-2 rounded"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-sky-600 text-white rounded"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default withSectionData('company')(ContactForm);
