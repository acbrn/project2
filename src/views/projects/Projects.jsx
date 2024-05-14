import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Interstellar from '../../assets/Interstellar.png'
import Stewart from '../../assets/Stewart.png'
import './projects.css'


const Projects = (props) => {
    useEffect(() => {
        const handleScroll = () => {
            const cards = document.querySelectorAll('.project-card');
            const scrollPosition = window.scrollY;

            cards.forEach(card => {
                const cardTop = card.getBoundingClientRect().top + window.scrollY;
                const cardBottom = cardTop + card.clientHeight; // Use clientHeight to determine the bottom of the card

                // Check if the card is in or out of view
                if (cardTop > scrollPosition + window.innerHeight || cardBottom < scrollPosition) {
                    card.classList.add('blur');
                } else {
                    card.classList.remove('blur');
                }
            });
        };

        // Attach scroll event listener when component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove scroll event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="project-title">
                Projects
            </div>
            <div className='project-grid'>
                <div className="project-card">
                    {/* Need a thumbnail of the site */}

                    <a className='cat-name-img' href='https://interstellar-voyages.netlify.app/' target='_blank' rel='noopener noreferrer'>
                        <img src={Interstellar} alt='Interstellar Voyages' />
                    </a>
                    <p className='cat-name-name'> Interstellar  Voyages </p>
                    <p className='cat-name-descrip'> Description:   My first SPA!
                        I did this as a project for my Savvy Coders boot camp!
                        I built the front and backend of the site, which learning
                        APIs provide an opportunity to challenge myself with something new.
                    </p>
                    <p className='cat-name-link'>
                        <a className='link-site' href='https://interstellar-voyages.netlify.app/'>
                            Interstellar Voyages
                        </a>
                        <p>

                            <a className='link-github' href='https://github.com/acbrn/Capstone'>
                                < FontAwesomeIcon icon={faGithub} />
                                Github Repo
                            </a>
                        </p>
                    </p>
                    <p>
                        Using Netlify for hosting, great service and it is free!
                    </p>
                </div>
                <div className="project-card">
                    <a className='cat-name-img' href="https://stewartstaxservices.netlify.app/ " target='_blank' rel='noopener noreferrer'>
                        <img src={Stewart} alt="Stewart's Tax" />
                    </a>
                    <p className='cat-name-name'> Stewart's Tax Service </p>
                    <p className='cat-name-descrip'> Description: Small business friend, wanted to have a mock-up of what I could provide.
                        I create the page based on their colors, images and information they supplied.
                        From there I would update them with what I have and ask if they had any feedback or ideas.
                    </p>
                    <p className='cat-name-link'>
                        <a className='link-site' href='https://stewartstaxservices.netlify.app/'>
                            Stewart's Tax Service
                        </a>
                        <p>
                            <a className='link-github' href='https://github.com/acbrn/Project1/tree/main/my-new-pro'>
                                < FontAwesomeIcon icon={faGithub} />Github Repo
                            </a>
                        </p>
                    </p>
                    <p>
                        Using Netlify for hosting, great service and it is free!
                    </p>
                </div>

            </div>
        </>
    )
}


export default Projects