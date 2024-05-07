import React, { useState, useEffect } from 'react';
import './footer.css';

const Footer = () => {
    const [randomQuote, setRandomQuote] = useState('');

    useEffect(() => {
        fetchRandomQuote();
    }, []);

    const fetchRandomQuote = async () => {
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            setRandomQuote(data.content);
        } catch (error) {
            console.error('Error fetching random quote:', error);
        }
    };

    return (
        <footer className="footer">
            <div className="footer-box">
                <h3 className="footer-box-title">Privacy</h3>
                <p>ACBRN Development Project</p>
            </div>
            <div className="footer-box">
                <h3 className="footer-box-title">Thank You</h3>
                <p>"console.log('Hello world')" From here we can do anything</p>
            </div>
            <div className="footer-box">
                <h3 className="footer-box-title">Random Quote</h3>
                <p>{randomQuote}</p>
            </div>
        </footer>
    );
}

export default Footer;
