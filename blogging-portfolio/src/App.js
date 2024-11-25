import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import ContactsPage from './pages/ContactsPage'; // Import ContactsPage
import './App.css';

function App() {
    const [backgroundClass, setBackgroundClass] = useState('');

    useEffect(() => {
        const updateBackground = () => {
            const hour = new Date().getHours();
            if (hour >= 6 && hour < 12) {
                setBackgroundClass('morning');
            } else if (hour >= 12 && hour < 18) {
                setBackgroundClass('afternoon');
            } else if (hour >= 18 && hour < 21) {
                setBackgroundClass('evening');
            } else {
                setBackgroundClass('night');
            }
        };

        updateBackground();
        const interval = setInterval(updateBackground, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);

    return (
        <Router>
            <div className={`App ${backgroundClass}`}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/contacts" element={<ContactsPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
