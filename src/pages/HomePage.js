import GovtPartners from '../Sections/govtPartners';
import Hero from '../Sections/Hero';
import HomeAbout from '../Sections/HomeAbout';
import Products from '../Sections/Products';
import Services from '../Sections/Services';
import Testimonials from '../Sections/Testimonials';

function HomePage() {
    return (
        <main className="pt-20">
            {' '}
            <Hero />
            <GovtPartners />
            <HomeAbout />
            <Services />
            <Products />
            <Testimonials />
        </main>
    );
}

export default HomePage;
