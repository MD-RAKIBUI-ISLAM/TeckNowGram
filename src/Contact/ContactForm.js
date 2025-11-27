/* eslint-disable react/no-array-index-key */

import React from 'react';

import withSectionData from '../hocs/withSectionData';

class ContactForm extends React.Component {
    renderOfficeCard = (office) => (
        <div
            key={office.id}
            className="p-5 bg-white rounded-xl shadow-md border border-gray-100 mb-4 transition duration-300 hover:shadow-lg"
        >
            <div className="flex items-center mb-3">
                <img
                    src={office.flag}
                    alt={`${office.name} Flag`}
                    className="w-6 h-6 mr-3 flex-shrink-0 object-cover"
                />{' '}
                <h4 className="text-xl font-bold text-gray-900">{office.name}</h4>
            </div>

            <div className="flex items-start mb-1">
                <span className="text-xl text-blue-600 mr-3 mt-1">📍</span>
                <address className="text-gray-700 not-italic text-sm leading-relaxed whitespace-pre-line">
                    {office.address.split(',').map((line, index) => (
                        <span key={index} className="block leading-snug">
                            {line.trim()}
                        </span>
                    ))}
                </address>
            </div>

            <div className="flex items-center mt-3 mb-1">
                <span className="text-xl text-blue-600 mr-3">📞</span>
                <a
                    href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-sm font-medium text-blue-600 hover:underline"
                >
                    {office.phone}
                </a>
            </div>

            <div className="flex items-center">
                <span className="text-xl text-blue-600 mr-3">📧</span>
                <a
                    href={`mailto:${office.email}`}
                    className="text-sm text-blue-600 hover:underline"
                >
                    {office.email}
                </a>
            </div>
        </div>
    );

    renderFormGroup = (label, id, type = 'text', cols = 'col-span-full', required = true) => {
        const isTextArea = type === 'textarea';

        return (
            <div className={`flex flex-col ${cols}`}>
                <label htmlFor={id} className="text-base font-medium text-gray-900 mb-1">
                    {label}
                </label>

                {isTextArea ? (
                    <textarea
                        id={id}
                        name={id}
                        rows="14"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                        required={required}
                    />
                ) : (
                    <input
                        id={id}
                        name={id}
                        type={type}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                        required={required}
                    />
                )}
            </div>
        );
    };

    render() {
        const { section: officeData } = this.props;
        const offices = officeData && officeData.offices ? officeData.offices : [];

        return (
            <div className="grid grid-cols-1 md:grid-cols-12 w-full gap-12">
                <div className="md:col-span-7 h-full">
                    {' '}
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 max-w-xl mx-auto">
                        Send us a Message
                    </h2>
                    <form className="space-y-4 max-w-xl mx-auto">
                        {this.renderFormGroup('Full Name', 'fullName')}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {this.renderFormGroup('Email', 'email', 'email', 'col-span-1')}
                            {this.renderFormGroup('Phone', 'phone', 'tel', 'col-span-1', false)}
                        </div>

                        {this.renderFormGroup('Company', 'company', 'text', 'col-span-full', false)}
                        {this.renderFormGroup('Subject', 'subject')}

                        {this.renderFormGroup('Message', 'message', 'textarea')}

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-200 shadow-md mt-6"
                        >
                            Sent Message
                        </button>
                    </form>
                </div>

                <div className="md:col-span-5 h-full">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Offices</h2>

                    <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                        {offices.map(this.renderOfficeCard)}
                    </div>
                </div>
            </div>
        );
    }
}

export default withSectionData('officeData')(ContactForm);
