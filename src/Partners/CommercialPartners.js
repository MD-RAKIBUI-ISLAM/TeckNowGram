import React from 'react';

import withSectionData from '../hocs/withSectionData';

class CommercialPartners extends React.Component {
    renderPartnerCard = (partner) => (
        <div
            key={partner.id}
            className="
                p-6 flex flex-col items-center justify-center 
                bg-white rounded-xl shadow-lg border border-gray-100 
                transform transition duration-300 hover:scale-[1.02] 
                h-[200px] text-center
            "
        >
            <div className="flex-grow flex items-center justify-center h-[120px] w-full mb-2">
                <img
                    src={partner.image}
                    alt={partner.title}
                    className="max-h-full max-w-full object-contain transition-all duration-500"
                />
            </div>
            <p className="text-base font-semibold text-gray-700 mt-2">{partner.title}</p>
        </div>
    );

    render() {
        const { section: partners } = this.props;

        if (!partners) {
            return null;
        }

        return (
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="container mx-auto px-6 max-w-[1271px]">
                    <div className="flex items-center justify-center md:justify-start mb-12">
                        <div className="mr-4 w-10 h-10 flex items-center justify-center text-green-600">
                            <span className="text-3xl">💰</span>
                        </div>

                        <h2 className="text-4xl font-bold text-gray-900 text-center md:text-left">
                            Commercial Partners
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
                        {partners.map(this.renderPartnerCard)}
                    </div>
                </div>
            </section>
        );
    }
}

export default withSectionData('commercialPartner')(CommercialPartners);
