import React from 'react'
import Tweeter from '../images/tweeter-splash.png'
import Resume from '../images/resume.png'
import Weather from '../images/weather-app.png'
import ToDo from '../images/todo.png'
import Restaurant from '../images/restaurant.png'
import Booktracker from '../images/booktracker.png'
import Battleship from '../images/Battleship.png'
import '../styles/Projects.css'

const ProjsData = [
    { key: 201, name: 'Tweeter', img: Tweeter, alt: 'Twitter Clone', desc: 'A twitter clone built using Ruby on Rails', github: 'https://github.com/ewoknock/tweeter', live: 'https://tweeter-twitterclone.fly.dev/' },
    { key: 202, name: 'Resume Generator', img: Resume, alt: 'Resume Generator', desc: 'A resume generator built using React', github: 'https://github.com/ewoknock/cv-generator', live: 'https://ewoknock.github.io/cv-generator' },
    { key: 301, name: 'Battleship', img: Battleship, alt: 'Battleship', desc: 'A simple web version of the classic battleship game that pits the user against a computer.', github: 'https://github.com/ewoknock/odin-javascript-projects/tree/main/battleship', live: 'https://ewoknock.github.io/odin-javascript-projects/battleship/dist/index.html' },
    { key: 302, name: 'To Do List', img: ToDo, alt: 'To Do List', desc: 'A simple task and project organizer created with Javascript DOM manipulation.', github: 'https://github.com/ewoknock/odin-javascript-projects/tree/main/to-do-list', live: 'https://ewoknock.github.io/odin-javascript-projects/to-do-list/dist/index.html' },
    { key: 303, name: 'Weather App', img: Weather, alt: 'Weather App', desc: 'A simple web app that utilizes API calls to get weather info and display it on the page.', github: 'https://github.com/ewoknock/odin-javascript-projects/tree/main/weather-app', live: 'https://ewoknock.github.io/odin-javascript-projects/weather-app/dist/index.html' },
    { key: 304, name: 'Book Tracker', img: Booktracker, alt: 'Book Tracker', desc: 'A simple website that acts as a reading list. Built using Javascript, HTML, and CSS.', github: 'https://github.com/ewoknock/odin-javascript-projects/tree/main/library', live: 'https://ewoknock.github.io/odin-javascript-projects/library/index.html' },
    { key: 305, name: 'Restaurant Page', img: Restaurant, alt: 'Restaurant Page', desc: 'A restaurant mockup page written primarily with Javascript DOM manipulation.', github: 'https://github.com/ewoknock/odin-javascript-projects/tree/main/restaurant-page', live: 'https://ewoknock.github.io/odin-javascript-projects/restaurant-page/dist/index.html' },
  ];

function Projects() {
    return (
        <>
        <section className='projects-section' id='projects-section'>
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