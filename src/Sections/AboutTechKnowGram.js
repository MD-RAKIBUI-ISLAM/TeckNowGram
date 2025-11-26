/* eslint-disable react/no-array-index-key */

import React from 'react';

import withSectionData from '../hocs/withSectionData';

class AboutTechKnowGram extends React.Component {
    render() {
        const { section: data = {} } = this.props;

        const whoWeAre = data.whoWeAre || {};
        const statsData = data.stats || [];

        return (
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12 bg-indigo-50 h-72 flex flex-col items-center justify-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                            {data.mainTitle}
                        </h1>
                        <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                            {data.tagline}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                        <div className="lg:col-span-7">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                {whoWeAre.title}
                            </h2>
                            {(whoWeAre.paragraphs || []).map((p, index) => (
                                <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                                    {p}
                                </p>
                            ))}

                            <ul className="space-y-3 text-gray-700 text-lg font-medium mt-8">
                                {(whoWeAre.bulletPoints || []).map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-sky-600 mr-2 text-2xl leading-none">
                                            →
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="lg:col-span-5 flex items-center justify-center">
                            <div className="grid grid-cols-2 gap-8 w-full max-w-md mx-auto">
                                {statsData.map((stat, index) => (
                                    <div
                                        key={index}
                                        className="text-center p-6 bg-gray-50 rounded-lg shadow-md border border-gray-100"
                                    >
                                        <h3 className="text-4xl font-extrabold text-sky-600 mb-2">
                                            {stat.number}
                                        </h3>
                                        <p className="text-base text-gray-700 font-medium">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withSectionData('about')(AboutTechKnowGram);
