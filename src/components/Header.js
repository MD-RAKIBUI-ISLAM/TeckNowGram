import React from 'react';

import LogoImage from '../assets/logo.png';
import withSectionData from '../hocs/withSectionData';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    toggleMenu = () => {
        const { open } = this.state;
        this.setState({ open: !open });
    };

    renderMenu() {
        return ['About', 'Partners', 'Services', 'Products', 'Testimonials', 'Contact'].map(
            (item) => (
                <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="px-4 py-2 hover:text-sky-600 font-medium block md:inline no-underline text-black"
                >
                    {item}
                </a>
            )
        );
    }

    render() {
        const { open } = this.state;

        return (
            <header className="bg-white shadow fixed w-full top-0 z-50 text-2xl">
                <div className="max-w-[1300px] mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img src={LogoImage} alt="logo" className="h-10" />
                    </div>

                    {/* Desktop menu */}
                    <nav className="hidden md:flex items-center gap-4">{this.renderMenu()}</nav>

                    {/* Mobile hamburger */}
                    <button
                        type="button"
                        className="md:hidden text-2xl rounded"
                        onClick={this.toggleMenu}
                    >
                        ☰
                    </button>
                </div>

                {/* Mobile dropdown */}
                {open && (
                    <div className="md:hidden bg-white px-6 pb-4 shadow">{this.renderMenu()}</div>
                )}
            </header>
        );
    }
}

export default withSectionData('company')(Header);
