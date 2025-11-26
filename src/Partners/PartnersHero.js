// src/Partners/PartnersHero.js

import React from 'react';

import withSectionData from '../hocs/withSectionData';

class PartnersHero extends React.Component {
    render() {
        const { section: partnersPageData } = this.props;

        if (!partnersPageData) {
            return null;
        }

        const heroData = partnersPageData.hero || { title: '', subtitle: '' };
        const { title, subtitle } = heroData;

        return (
            <section className="pt-32 md:pt-40 pb-16 bg-white relative">
                <div className="container mx-auto px-6 text-center max-w-[1271px]">
                    <div className="w-full h-full py-10">
                        <h1 className="text-6xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
                            {title}
                        </h1>
                        <p className="text-base text-gray-600 max-w-4xl mx-auto px-40">
                            {subtitle}
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default withSectionData('partnerPageData')(PartnersHero);
