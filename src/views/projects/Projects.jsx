import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './projects.css'


const Projects = (props) => {
    useEffect(() => {
        const handleScroll = () => {
            const cards = document.querySelectorAll('.project-card');
            const scrollPosition = window.scrollY;

            cards.forEach(card => {
                const cardTop = card.getBoundingClientRect().top + window.scrollY;
                // const cardBottom = cardTop + card.clientHeight;

                if (cardTop > scrollPosition + window.innerHeight) {
                    card.classList.add('blur');
                } else {
                    card.classList.remove('blur');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
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