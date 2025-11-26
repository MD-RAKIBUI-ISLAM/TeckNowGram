import React from 'react';

import About from './components/About';
import Footer from './components/Footer';
import GovtPartners from './components/govtPartners';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

class App extends React.Component {
    render() {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                    <Hero />
                    <GovtPartners />
                    <About />
                    <Services />
                    <Products />
                    <Testimonials />
                    {/* <ContactForm /> */}
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;
