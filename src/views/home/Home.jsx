import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import ice from '../../assets/IceIce1.png';
import './home.css';

const Home = () => {

    const [scrolling, setScrolling] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            // Check if the user has scrolled down
            if (window.scrollY > 300) {
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
                <div className='home-social'>
                    <a href='https://www.facebook.com/PhenyxShadow/' className='social-link'>
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href='https://github.com/acbrn' className='social-link'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href='https://www.linkedin.com/in/andrew-coburn8' className='social-link'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href='mailto: coburn188@gmail.com' className='social-link'>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </div>
                <div className='home-image'>
                    <img src={ice} alt='Ice' />
                </div>
            </div>
        </div>
    );
}

export default Home;
