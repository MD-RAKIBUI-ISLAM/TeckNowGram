/* eslint-disable react/no-array-index-key */

import React from 'react';

import withSectionData from '../hocs/withSectionData';

class ContactHeroCards extends React.Component {
    renderDetails = (title, details) => {
        const isPhone = title === 'Phone';
        const isEmail = title === 'Email';

        return (
            <div className="flex flex-col space-y-1 mt-auto">
                {details.map((detail, index) => {
                    let linkHref = '#';
                    const displayDetail = detail;

                    if (isPhone) {
                        const phoneNumber = detail.split(' ')[0];
                        linkHref = `tel:${phoneNumber.replace(/[^0-9+]/g, '')}`;
                    } else if (isEmail) {
                        linkHref = `mailto:${detail}`;
                    }

                    return (
                        <p key={index} className="font-medium">
                            <a
                                href={linkHref}
                                className={`transition duration-150 ${isEmail || isPhone ? 'text-blue-600 hover:text-blue-800' : 'text-gray-700'}`}
                            >
                                {displayDetail}
                            </a>
                        </p>
                    );
                })}
            </div>
        );
    };

    renderContactCard = (icon, title, subHeading, details) => (
        <div className="flex flex-col items-start p-8 bg-white rounded-3xl border border-blue-300 transition duration-300 hover:border-blue-500 h-full">
            <div className="p-4 mb-4 rounded-full bg-blue-50 border border-blue-200">
                <span className="text-3xl text-blue-600">{icon}</span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
            <p className="text-sm text-gray-500 mb-4">{subHeading}</p>

            {this.renderDetails(title, details)}
        </div>
    );

    render() {
        const { section: data } = this.props;
        if (!data) return null;

        const { header, phone, email, hours } = data;

        const phoneDetails = phone.numbers.map(
            (p) => `${p.number} ${p.country ? `(${p.country})` : ''}`
        );
        const emailDetails = email.addresses;
        const hoursDetails = hours.schedule;

        const phoneSub = 'Call us during business hours';
        const emailSub = 'Reach out via email anytime';
        const hoursSub = "We're here to help.";

        return (
            <section className="bg-gray-50 pb-20 pt-24">
                <div className="container mx-auto px-6 max-w-[1271px]">
                    <div className="bg-indigo-50 py-24">
                        <div className="container mx-auto px-6 max-w-[1271px]">
                            <header className="text-center max-w-4xl mx-auto">
                                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
                                    {header.title}
                                </h1>
                                <p className="text-lg text-gray-700 font-normal px-4">
                                    {header.subtitle}
                                </p>
                            </header>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        {this.renderContactCard('📞', phone.title, phoneSub, phoneDetails)}
                        {this.renderContactCard('📧', email.title, emailSub, emailDetails)}
                        {this.renderContactCard('⏰', hours.title, hoursSub, hoursDetails)}
                    </div>
                </div>
            </section>
        );
    }
}

export default withSectionData('contactInfoData')(ContactHeroCards);
