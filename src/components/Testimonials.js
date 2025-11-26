import React from 'react';

import withSectionData from '../hocs/withSectionData'; // আপনার HOC পাথ ঠিক করে দেবেন

class TestimonialsSection extends React.Component {
    render() {
        const { section: testimonials = [] } = this.props;

        return (
            <section
                id="testimonials"
                className="py-16 md:py-24 bg-white"
                style={{ backgroundColor: '#F7F4FF' }}
            >
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
                        Testimonials
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center 
                                           border border-gray-200 hover:border-blue-500 transition duration-300"
                            >
                                <div className="flex items-center mb-6 text-left">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.person}
                                        className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-gray-100" // ইমেজ স্টাইল
                                    />
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 leading-tight mb-0">
                                            {testimonial.person}
                                        </h3>
                                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>

                                {/* টেক্সট বডি */}
                                <p className="text-gray-700 text-left flex-grow">
                                    {testimonial.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

// HOC ব্যবহার করে 'testimonials' ডেটা লোড করা হলো
export default withSectionData('testimonials')(TestimonialsSection);
