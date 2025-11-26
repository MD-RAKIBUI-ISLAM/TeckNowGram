// src/components/Footer.js

import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
// Font Awesome ইমপোর্ট
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Heroicons থেকে প্রয়োজনীয় আইকন ইমপোর্ট (যেমন Address, Phone, Email)
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import React from 'react';

import withSectionData from '../hocs/withSectionData';

class Footer extends React.Component {
    render() {
        // HOC থেকে আসা section এ এখন footerData থাকবে
        const { section: footerData = {} } = this.props;

        // footerData থেকে company এবং companyLocations ডিস্ট্রাকচার করা হলো
        const companyData = footerData.company || {};
        const companyLocations = footerData.companyLocations || [];

        return (
            <footer
                className="bg-white py-12 md:py-16 text-gray-700"
                style={{ backgroundColor: 'var(--Grays-White, #FFFFFF)' }}
            >
                <div className="container mx-auto px-6">
                    {/* টপ ফুটার সেকশন: লোগো + লোকেশন */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-2 border-b pb-8 border-gray-500">
                        {/* ১. লোগো এবং ট্যাগলাইন - স্ক্রিনশট অনুযায়ী ডিজাইন */}
                        <div className="flex flex-col items-center lg:col-span-1 text-center">
                            {' '}
                            {/* ✅ items-center এবং text-center যোগ করা হলো */}
                            <img
                                src={companyData.logoImage}
                                alt="TechKnowGram Logo"
                                className="h-16 mb-4 mx-auto" // ✅ mx-auto যোগ করা হলো সেন্টারের জন্য
                            />
                            <p className="text-gray-600 text-base leading-relaxed">
                                {' '}
                                {/* ✅ leading-relaxed যোগ করা হলো লাইন হাইটের জন্য */}
                                {companyData.description ||
                                    'A leading technology company providing AI, IoT and software solutions.'}
                            </p>
                        </div>
                        {/* (পরিবর্তিত অংশ শেষ) */}

                        {/* ২, ৩, ৪. কোম্পানির বিভিন্ন লোকেশন */}
                        {companyLocations.map((location) => (
                            <div
                                key={location.id}
                                className="flex flex-col items-start text-left lg:col-span-1"
                            >
                                {/* ফ্লাগ এবং নাম */}
                                <div className="flex items-center mb-3">
                                    <img
                                        src={location.flag}
                                        alt={`${location.name} Flag`}
                                        className="w-6 h-auto mr-2"
                                    />
                                    <h4 className="text-lg font-bold text-gray-900 leading-tight">
                                        {location.name}
                                    </h4>
                                </div>

                                {/* অ্যাড্রেস */}
                                <div className="flex items-start mb-2">
                                    <MapPinIcon className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
                                    <p className="text-sm">{location.address}</p>
                                </div>

                                {/* ফোন */}
                                <div className="flex items-center mb-2">
                                    <PhoneIcon className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
                                    <a
                                        href={`tel:${location.phone}`}
                                        className="text-sm hover:underline no-underline text-gray-700"
                                    >
                                        {location.phone}
                                    </a>
                                </div>

                                {/* ইমেইল */}
                                <div className="flex items-center">
                                    <EnvelopeIcon className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
                                    <a
                                        href={`mailto:${location.email}`}
                                        className="text-sm hover:underline no-underline text-gray-700"
                                    >
                                        {location.email}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* বটম ফুটার সেকশন: কপিরাইট + সোশ্যাল মিডিয়া */}
                    <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 pt-4">
                        <p>
                            &copy; {new Date().getFullYear()} TechKnowGram Limited. All rights
                            reserved.
                        </p>
                        <div className="flex space-x-4 mt-4 sm:mt-0">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                            >
                                <FontAwesomeIcon icon={faFacebookF} className="h-6 w-6" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                            >
                                <FontAwesomeIcon icon={faLinkedinIn} className="h-6 w-6" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-blue-400 transition-colors duration-200"
                            >
                                <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default withSectionData('footerData')(Footer);
