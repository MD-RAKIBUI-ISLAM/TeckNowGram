import React from 'react';

import siteData from '../data/siteData';

function withSectionData(sectionKey) {
    return function SectionDataHOC(WrappedComponent) {
        return class SectionDataWrapper extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    section: siteData[sectionKey] || null
                };
            }

            componentDidMount() {
                // If needed, fetch dynamic data here
                // Example:
                // fetch(`/api/section/${sectionKey}`)
                //   .then(res => res.json())
                //   .then(data => this.setState({ section: data }));
            }

            render() {
                const { section } = this.state;
                return <WrappedComponent {...this.props} section={section} />;
            }
        };
    };
}

export default withSectionData;
