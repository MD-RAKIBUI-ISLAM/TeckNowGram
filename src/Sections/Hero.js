// eslint-disable-next-line import/no-extraneous-dependencies
import {
    CpuChipIcon,
    CubeTransparentIcon,
    GlobeAltIcon,
    WifiIcon
} from '@heroicons/react/24/solid';
import React from 'react';

import withSectionData from '../hocs/withSectionData';

class Hero extends React.Component {
    render() {
        const { section } = this.props;
        const hero = section || {};
        return (
            <section id="home" className="pt-32 pb-20 over" style={{ backgroundColor: '#F7F4FF' }}>
                <div className="max-w-[1300px] mx-auto px-6 grid md:grid-cols-2 gap-14 items-center justify-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            AI & IoT <br /> Solutions <br /> for Enterprise
                        </h1>
                        <p className="text-black-600 mb-6">{hero.subtitle}</p>
                        {/* BUTTONS */}
                        <div className="flex gap-4 mt-8">
                            <a
                                href="#Explore"
                                className="bg-sky-600 text-white px-6 py-3 no-underline rounded-lg shadow font-medium cursor-pointer"
                            >
                                Explore Solutions →
                            </a>
                            <a
                                href="#Explore"
                                className="bg-white border px-6 py-3 no-underline rounded-lg shadow font-medium cursor-pointer text-black"
                            >
                                Download Brochure
                            </a>
                        </div>
                        <div className="flex gap-12 mt-12 w-1 bg-indigo-600 h-10 pb-4">
                            <div className="pl-2">
                                <div className="text-3xl font-bold">100+</div>
                                <div className="text-gray-500 text-sm">Clients</div>
                            </div>

                            <div>
                                <div className="text-3xl font-bold">120+</div>
                                <div className="text-gray-500 text-sm">Projects</div>
                            </div>

                            <div>
                                <div className="text-3xl font-bold">55+</div>
                                <div className="text-gray-500 text-sm">Team</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md m-auto">
                        <ul className="space-y-4 list-none">
                            <li className="p-4 bg-[#E8E0FF] rounded-lg font-semibold flex items-center">
                                <CpuChipIcon className="h-6 w-6 text-black-600 mr-2" />
                                Generative AI Systems
                            </li>
                            <li className="p-4 bg-[#DCD4FF] rounded-lg font-semibold flex items-center">
                                <WifiIcon className="h-6 w-6 text-black-600 mr-2" />
                                IoT Platforms
                            </li>
                            <li className="p-4 bg-[#CDC3FF] rounded-lg font-semibold flex items-center">
                                <CubeTransparentIcon className="h-6 w-6 text-black-600 mr-2" />
                                ML & Data Analytic
                            </li>
                            <li className="p-4 bg-[#C0BAFF] rounded-lg font-semibold flex items-center">
                                <GlobeAltIcon className="h-6 w-6 text-black-600 mr-2" />
                                AR/VR Solutions
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default withSectionData('hero')(Hero);
