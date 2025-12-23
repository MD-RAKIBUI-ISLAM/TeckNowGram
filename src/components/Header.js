import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import LogoImage from '../assets/logo.png';

const MENU_ITEMS = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Partners', to: '/partners' },
    { label: 'Services', to: '/#services' },
    { label: 'Products', to: '/#products' },
    { label: 'Testimonials', to: '/#testimonials' },
    { label: 'Contact', to: '/contact' }
];

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 bg-white shadow-sm">
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-18 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 no-underline">
                        <img src={LogoImage} alt="Logo" className="h-9 sm:h-10" />
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-8">
                        {MENU_ITEMS.map((item) => (
                            <NavLink
                                key={item.label}
                                to={item.to}
                                className={({ isActive }) =>
                                    `
                                    relative
                                    text-base lg:text-lg
                                    font-medium
                                    text-gray-800
                                    no-underline
                                    transition
                                    hover:text-sky-600
                                    ${
                                        isActive
                                            ? 'after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-sky-600'
                                            : ''
                                    }
                                `
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        type="button"
                        onClick={() => setOpen((p) => !p)}
                        className="md:hidden text-3xl"
                        aria-label="Toggle menu"
                    >
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white shadow-md">
                    <nav className="flex flex-col px-4 py-4 gap-3">
                        {MENU_ITEMS.map((item) => (
                            <NavLink
                                key={item.label}
                                to={item.to}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `
                                    text-lg
                                    font-medium
                                    text-gray-800
                                    no-underline
                                    transition
                                    hover:text-sky-600
                                    ${isActive ? 'text-sky-600' : ''}
                                `
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
