import React from 'react'
import Tweeter from '../images/boneless-short-rib.png'
import '../styles/Projects.css'

const ProjsData = [
    { key: 201, name: 'Tweeter', img: Tweeter, alt: '', desc: 'Tweeter clone', github: '', live: '' },
    { key: 202, name: 'Weather App', img: Tweeter, alt: 'Weather App', desc: 'A simple web app that utilizes API calls to get weather info and display it on the page.', github: 'https://github.com/ewoknock/odin-javascript-projects/tree/main/weather-app', live: 'https://ewoknock.github.io/odin-javascript-projects/weather-app/dist/index.html' },
    { key: 203, name: 'To Do List', img: Tweeter, alt: 'To Do List', desc: 'A simple task and project organizer created with Javascript DOM manipulation.', github: 'https://github.com/ewoknock/odin-javascript-projects/tree/main/to-do-list', live: 'https://ewoknock.github.io/odin-javascript-projects/to-do-list/dist/index.html' },
    { key: 204, name: 'Restaurant Page', img: Tweeter, alt: 'Restaurant Page', desc: 'A restaurant mockup page written primarily with Javascript DOM manipulation.', github: 'https://github.com/ewoknock/odin-javascript-projects/tree/main/restaurant-page', live: 'https://ewoknock.github.io/odin-javascript-projects/restaurant-page/dist/index.html' },
    { key: 205, name: 'Book Tracker', img: Tweeter, alt: 'Book Tracker', desc: 'A simple website that acts as a reading list. Built using Javascript, HTML, and CSS.', github: 'https://github.com/ewoknock/odin-javascript-projects/tree/main/library', live: 'https://ewoknock.github.io/odin-javascript-projects/library/index.html' },

  ];

function Projects() {
    return (
        <>
        <section className='contain projects-section'>
            <h1 className='projects-name'>Projects</h1>
            <div className='projects-wrapper'>
                { ProjsData.map((item, key) => 
                    <div className='project-card' key={key}>
                        <a href={item.live} target='_blank' title="Visit Project's live demo"><img src={item.img} alt={item.alt} className="project-preview"/></a>
                        <div className='project-header'>
                            <a href={item.live} target='_blank' title="Visit Project's live demo" className='project-name'>{item.name}</a>
                            <a href={item.github} target='_blank' title="Github repository"><i className="devicon-github-original colored"></i></a>
                        </div>
                        <p className='project-description'>
                            {item.desc}
                        </p>
                    </div>
                )}
            </div>
        </section>
            
        </>
    )
}

export default Projects