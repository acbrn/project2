import React from 'react'
import './about.css';

const fact1 = 'USAF Veteran, served 8 years as an Air Traffic Controller';
const fact2 = 'I have a passion for learning new things and meeting new people. I am always looking for new projects to work on and new people to meet. If you have a project you would like to discuss, please feel free to contact me.';

const About = () => {
    return (
        <div>
            <h2 className="about-title">About</h2>
            <p className='about-content'>
                My name is Andrew Coburn and I am a web developer.
                I have been developing websites for over 1 year.
                I am proficient in HTML, CSS, JavaScript, and React.
                I am also skilled in backend development using Node.js and Express, as well as MongoDB.
            </p>
            <ul className='random-fact'>
                <ul className='random-fact-title'>Random Facts</ul>
                <ul>{fact1}</ul>
                <ul>{fact2}</ul>
            </ul>
        </div>
    );
}

export default About;