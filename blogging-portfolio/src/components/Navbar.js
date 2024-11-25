import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [viewers, setViewers] = useState(0);

    useEffect(() => {
        const updateViewers = () => {
            // Simulate a dynamic viewer count with random numbers
            const randomViewers = Math.floor(Math.random() * 30) + 1;
            setViewers(randomViewers);
        };

        updateViewers(); // Update initially
        const interval = setInterval(updateViewers, 5000); // Update every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <nav>
            <ul>
                <li className="viewers-count">👁 {viewers} viewers</li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/contacts">Contacts</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
