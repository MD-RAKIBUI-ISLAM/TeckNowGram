import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import GovtInstitutionalPartners from './pages/Partners';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/partners" element={<GovtInstitutionalPartners />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
