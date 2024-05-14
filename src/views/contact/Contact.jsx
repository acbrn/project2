import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import ice from '../../assets/IceIce1.png';
import './contact.css'
const Contact = () => {
    return (

        <>
            <div>
                <div className="contact-title"> Contact</div>
                <div className='contact-card-text'>
                    <p>🚀 Tech Professional with a Vision 🌐</p>
                    I specialize in frontend development, backend development, and UI/UX design,
                    striving to evolve into a seasoned software engineer. Currently focusing on
                    mastering React as well as Azure - explore my ongoing projects on GitHub
                    Please also reach out to me at any of the following:
                </div>
                <div className='contact-card-social'>
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
            </div>
        </>
    )
}

export default Contact