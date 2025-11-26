import React from 'react';

import withSectionData from '../hocs/withSectionData';

class ProductsSection extends React.Component {
    render() {
        const { section: products = [] } = this.props;

        return (
            <section
                id="products"
                className="py-16 md:py-24 bg-white"
                style={{ backgroundColor: '#F7F4FF' }}
            >
                <div className="container mx-auto px-6 text-center">
                    <p className="text-blue-600 text-2xl font-semibold mb-2 uppercase tracking-wider">
                        PRODUCTS
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
                        Our Product for You
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center 
                                           border border-gray-200 hover:border-blue-500 transition duration-300"
                            >
                                <div className="w-full h-40 bg-gray-100 rounded-xl mb-6 overflow-hidden flex items-center justify-center border border-gray-200">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-contain p-4" // object-contain ব্যবহার করা হলো যাতে লোগো বা ছবির পুরোটা দেখা যায়
                                    />
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    {product.title}
                                </h3>

                                <p className="text-gray-600 mb-4 flex-grow">
                                    {product.description}
                                </p>

                                <a
                                    href={product.link || '#product'} // যদি link না থাকে তবে #product
                                    className="text-blue-600 font-semibold flex items-center group no-underline"
                                >
                                    See More &gt;
                                    <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12">
                        <button
                            type="button"
                            className="px-8 py-3 text-lg font-semibold text-gray-800 bg-white border-2 border-gray-400 rounded-lg shadow hover:bg-gray-100 transition duration-300"
                        >
                            Browse all Products &rarr;
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}

export default withSectionData('products')(ProductsSection);
