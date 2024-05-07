import React from 'react'
import './projects.css'

const Projects = (props) => {
    return (
        <>
            <div className="project-title">
                <h1>Projects</h1>
            </div>
            <div className="project-card1">
                <p className='cat-name-name'> Name: Interstellar  Voyages </p>
                <p className='cat-name-descrip'> Description:My first SPA!
                    I did this as a project for my Savvy Coders boot camp!
                    I built the front and backend of the site, which learning
                    APIs provide an opportunity to challenge myself with something new.
                </p>
                <p className='cat-name-link'> Link: <a className='link-site' href='https://interstellar-voyages.netlify.app/'>
                    Interstellar Voyages
                </a>
                    <p>
                        <a className='link-github' href='https://github.com/acbrn/Capstone'>Github Repo</a>
                    </p>
                </p>
            </div>
            <div className="project-card2">
                <p className='cat-name-name'> Name: Stewart's Tax Service </p>
                <p className='cat-name-descrip'> Description: Small business friend, wanted to have a mock-up of what I could provide.
                    I create the page based on their colors, images and information they supplied.
                    From there I would update them with what I have and ask if they had any feedback or ideas.
                </p>
                <p className='cat-name-link'> Link: <a href='https://stewartstaxservices.netlify.app/'>
                    Stewart's Tax Service
                </a>
                    <p>
                        <a className='link-github' href='https://github.com/acbrn/Project1/tree/main/my-new-pro'>Github Repo</a>
                    </p>
                </p>
                <p>
                    Using Netlify for hosting, great service and it is free!
                </p>
            </div>
            <div className="project-card3">
                <p className='cat-name-name'> Name:

                </p>
                <p className='cat-name-descrip'>Description:

                </p>
                <p className='cat-name-link'> Link:

                </p>
            </div>
        </>
    )
}


export default Projects