import React from 'react';

import withSectionData from '../hocs/withSectionData';

class govtPartners extends React.Component {
    render() {
        const { section: Service = [] } = this.props;
        return (
            <section id="service" className="py-12" style={{ backgroundColor: '#F7F4FF' }}>
                <div className="container mx-auto px-6">
                    <h3 className="text-2xl font-semibold mb-6 text-center">
                        TRUSTED BY LEADING ORGANIZATIONS
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                        {Service.map((s) => (
                            <div key={s.id} className="p-5 bg-white rounded shadow">
                                <img
                                    className="w-full h-20 object-contain mb-4"
                                    src={s.image}
                                    alt="img"
                                />
                                <h4 className="font-semibold mb-2 text-center">{s.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default withSectionData('govtPartners')(govtPartners);
