/* eslint-disable react/no-array-index-key */
import React from 'react';

import withSectionData from '../hocs/withSectionData';

const getButtonClass = (type) => {
    switch (type) {
        case 'primary':
            return 'px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-2xl hover:bg-blue-700 transition duration-300 border-0';
        case 'secondary':
            return 'px-8 py-3 text-lg font-semibold text-indigo-700 bg-indigo-50 rounded-2xl hover:bg-indigo-100 transition duration-300 border-0';
        default:
            return 'px-8 py-3 text-lg font-semibold bg-gray-200 rounded-2xl border-0';
    }
};

class About extends React.Component {
    render() {
        const { section } = this.props;

        if (!section) return null;

        const { title, p1, p2, stats = [], buttons = [] } = section;

        return (
            <section
                id="About"
                className="py-16 md:py-24 bg-white flex items-center justify-center"
            >
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-10">
                        <div className="lg:col-span-7">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                {title}
                            </h2>

                            <p className="text-gray-700 mb-4 leading-relaxed">{p1}</p>
                            <p className="text-gray-700 mb-8 leading-relaxed">{p2}</p>

                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                {buttons.map((button, index) => (
                                    <button
                                        type="button"
                                        key={index}
                                        className={getButtonClass(button.type)} // Helper ফাংশন ব্যবহার
                                    >
                                        {button.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="bg-indigo-50 p-8 rounded-2xl h-auto lg:h-auto">
                                {stats.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`mb-1 ${index === 0 ? 'mt-0' : ''}`}
                                    >
                                        <div
                                            className="pl-4"
                                            style={{ borderLeft: '4px solid #4338CA' }}
                                        >
                                            <p className="text-gray-900 font-bold text-base mb-1">
                                                {item.title}
                                            </p>
                                            <p className="text-gray-700 text-sm">{item.value}</p>
                                        </div>
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

export default withSectionData('aboutSection')(About);
