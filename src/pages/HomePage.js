import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import GovtPartners from '../Sections/govtPartners';
import Hero from '../Sections/Hero';
import HomeAbout from '../Sections/HomeAbout';
import Products from '../Sections/Products';
import Services from '../Sections/Services';
import Testimonials from '../Sections/Testimonials';

function HomePage() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));

            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <main className="pt-20">
            <Hero />
            <GovtPartners />
            <HomeAbout />
            <Services id="services" />
            <Products id="products" />
            <Testimonials id="testimonials" />
        </main>
    );
}

export default HomePage;
