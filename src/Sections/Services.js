import React from 'react';

import withSectionData from '../hocs/withSectionData'; // আপনার HOC পাথ ঠিক করে দেবেন

class ServicesSection extends React.Component {
    render() {
        const { section: services = [] } = this.props;

        return (
            <section
                id="services"
                className="py-16 md:py-24 bg-white"
                style={{ backgroundColor: '#F7F4FF' }}
            >
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Best Services for You
                    </h2>
                    <p className="text-gray-700 text-lg mb-12">
                        Comprehensive AI and IoT solutions tailored to transform your business
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center 
                                           border border-gray-200 hover:border-blue-500 transition duration-300"
                            >
                                <div className="w-full h-40 bg-gray-100 rounded-xl mb-6 flex items-center justify-center border border-gray-200">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 mb-4 flex-grow">
                                    {service.description}
                                </p>

                                <a
                                    href={service.link}
                                    className="text-blue-600 font-semibold flex items-center group no-underline"
                                >
                                    See More
                                    <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">
                                        &rarr;
                                    </span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default withSectionData('productServices')(ServicesSection);
