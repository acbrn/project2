import React, { useEffect, useState } from "react";

import './home.css';

const Home = () => {

    const [scrolling, setScrolling] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            // Check if the user has scrolled down
            if (window.scrollY > 350) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className='home-main' >
            <div className={`home-title ${scrolling ? 'fade-out' : ''}`}>Home</div>
            <div className={`home-content ${scrolling ? 'fade-out' : ''}`}>
                <p>
                    Welcome to my portfolio! I'm a full stack developer with a passion for
                    creating beautiful, clean, and functional web applications.
                </p>
                <p>
                    I am a USAF veteran with a background in air traffic control and a passion for technology.
                    I have experience with a variety of programming languages and frameworks, including
                    JavaScript, React, Node.js, Express, and MongoDB.
                    I am always eager to learn new technologies and expand my skill set.
                </p>
            </div>
        </div>
    );
}

export default Home;
