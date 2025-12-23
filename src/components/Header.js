import React from 'react';
import { Link } from 'react-router-dom';

import LogoImage from '../assets/logo.png';
import withSectionData from '../hocs/withSectionData';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false // 👈 always closed initially
        };
    }

    toggleMenu = () => {
        this.setState((prev) => ({ open: !prev.open }));
    };

    closeMenu = () => {
        this.setState({ open: false });
    };

    renderMenu(isMobile = false) {
        const pageLinks = ['Home', 'About', 'Partners', 'Contact'];

        const menuItems = [
            'Home',
            'About',
            'Partners',
            'Services',
            'Products',
            'Testimonials',
            'Contact'
        ];

        return menuItems.map((item) => {
            let destination;

            if (item === 'Home') {
                destination = '/';
            } else if (pageLinks.includes(item)) {
                destination = `/${item.toLowerCase()}`;
            } else {
                destination = `/#${item.toLowerCase()}`;
            }

            return (
                <Link
                    key={item}
                    to={destination}
                    onClick={isMobile ? this.closeMenu : undefined}
                    className="
                        block md:inline
                        px-4 py-2
                        text-base lg:text-lg
                        font-medium
                        text-black
                        hover:text-sky-600
                        no-underline
                    "
                >
                    {item}
                </Link>
            );
        });
    }

    render() {
        const { open } = this.state;

        return (
            <header className="fixed top-0 w-full z-50 bg-white shadow">
                <div
                    className="
                        max-w-[1300px]
                        mx-auto
                        px-4 sm:px-6 lg:px-8
                        h-16 sm:h-18
                        flex
                        items-center
                        justify-between
                    "
                >
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 no-underline">
                        <img src={LogoImage} alt="logo" className="h-8 sm:h-9 lg:h-10" />
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-2 lg:gap-4">
                        {this.renderMenu(false)}
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        type="button"
                        className="
                            md:hidden
                            text-2xl
                            focus:outline-none
                        "
                        onClick={this.toggleMenu}
                        aria-label="Toggle menu"
                    >
                        ☰
                    </button>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="md:hidden bg-white shadow px-4 pb-4">
                        <nav className="flex flex-col gap-1">{this.renderMenu(true)}</nav>
                    </div>
                )}
            </header>
        );
    }
}

export default withSectionData('company')(Header);
