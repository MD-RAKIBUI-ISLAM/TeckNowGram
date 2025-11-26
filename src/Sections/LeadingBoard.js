import React from 'react';

import withSectionData from '../hocs/withSectionData';

class LeadingBoard extends React.Component {
    renderMemberCard = (member, isFeatured = false) => {
        if (!member) {
            return null;
        }

        const defaultImage = 'https://via.placeholder.com/150';
        const imgSrc = member.image || defaultImage;

        if (isFeatured) {
            return (
                <div
                    key={member.name}
                    className="w-full max-w-6xl mx-auto p-8 md:p-12 bg-white rounded-xl shadow-lg flex flex-col items-center text-center gap-6"
                >
                    <div className="w-48 h-48 mb-2">
                        <img
                            src={imgSrc}
                            alt={member.name}
                            className="w-full h-full object-cover rounded-full shadow-lg border-4 border-sky-400"
                        />
                    </div>

                    <h3 className="text-3xl font-bold text-black-700">{member.name}</h3>

                    <p className="text-2xl font-semibold text-blue-600 mb-4">
                        {member.designation}
                    </p>

                    <div className="text-left w-full">
                        <p className="text-gray-600 leading-relaxed text-justify px-28">
                            {member.bio}
                        </p>
                    </div>
                </div>
            );
        }

        return (
            <div
                key={member.name}
                className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-100 transition duration-300 hover:shadow-xl"
            >
                <img
                    src={imgSrc}
                    alt={member.name}
                    className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-2 border-sky-300"
                />
                <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-sm text-sky-600 font-medium">{member.designation}</p>
            </div>
        );
    };

    render() {
        const { section: data = {} } = this.props;

        const allMembers = data.members || [];
        const advisors = data.advisors || [];

        const featuredMember = allMembers.find((m) => m.isFeatured);
        const otherMembers = allMembers.filter((m) => !m.isFeatured);

        return (
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16">
                        {data.title}
                    </h2>

                    <div className="grid grid-cols-12 gap-6 mb-16">
                        <div className="col-span-12">
                            {featuredMember && this.renderMemberCard(featuredMember, true)}
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 border-b pb-3 mb-8">
                        Board Members
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 mb-16">
                        {otherMembers.map((member) => this.renderMemberCard(member))}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 border-b pb-3 mb-8">
                        Advisors
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                        {advisors.map((advisor) => this.renderMemberCard(advisor))}
                    </div>
                </div>
            </section>
        );
    }
}

export default withSectionData('leadingboardData')(LeadingBoard);
