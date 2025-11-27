import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import Contact from './pages/ContactPage';
import HomePage from './pages/HomePage';
import GovtInstitutionalPartners from './pages/Partners';

function FooterChecker() {
    const location = useLocation();

    const shouldHideFooter = location.pathname === '/contact';

    return !shouldHideFooter ? <Footer /> : null;
}

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/partners" element={<GovtInstitutionalPartners />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <FooterChecker />
        </Router>
    );
}

export default App;
