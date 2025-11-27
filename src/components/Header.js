import React from 'react';
import { Link } from 'react-router-dom';

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
            const isRouterLink = pageLinks.includes(item);
            const Component = isRouterLink ? Link : 'a';

            let destination;

            if (item === 'Home') {
                destination = '/';
            } else if (isRouterLink) {
                destination = `/${item.toLowerCase()}`;
            } else {
                destination = `#${item.toLowerCase()}`;
            }

            return (
                <Component
                    key={item}
                    {...(isRouterLink ? { to: destination } : { href: destination })}
                    onClick={this.toggleMenu}
                    className="px-4 py-2 hover:text-sky-600 font-medium block md:inline no-underline text-black"
                >
                    {item}
                </Component>
            );
        });
    }

    render() {
        const { open } = this.state;

        return (
            <header className="bg-white shadow fixed w-full top-0 z-50 text-2xl">
                <div className="max-w-[1300px] mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link to="/" className="no-underline">
                            <img src={LogoImage} alt="logo" className="h-10" />
                        </Link>
                    </div>

                    <nav className="hidden md:flex items-center gap-4">{this.renderMenu()}</nav>

                    <button
                        type="button"
                        className="md:hidden text-2xl rounded"
                        onClick={this.toggleMenu}
                    >
                        ☰
                    </button>
                </div>

                {open && (
                    <div className="md:hidden bg-white px-6 pb-4 shadow">{this.renderMenu()}</div>
                )}
            </header>
        );
    }
}

export default withSectionData('company')(Header);
