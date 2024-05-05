import React from 'react'
import props from 'prop-types'
import './projects.css'

const Projects = (props) => {
    return (
        <>
            <div className="project-title">
                <h1>Projects</h1>
            </div>
            <div className="project-card">
                <p>
                    <b className='cat-name'>Name:</b> {props.name}</p>
                <p>
                    <b className='cat-name'>Description:</b> {props.description}</p>
                <p>
                    <b className='cat-name'>Link:</b> {props.link}</p>
            </div>
        </>
    )
}

Projects.propTypes = {
    name: props.string,
    description: props.string,
    link: props.string
}

Projects.defaultProps = {
    name: "Project Name",
    description: "Project Description",
    link: "Link"
}

export default Projects