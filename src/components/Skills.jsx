import React from 'react'
import '../styles/Skills.css'

const SkillData = [
    { key: 101, name: 'HTML', img: 'devicon-html5-plain colored' },
    { key: 102, name: 'CSS', img: 'devicon-css3-plain colored' },
    { key: 103, name: 'JavaScript', img: 'devicon-javascript-plain colored' },
    { key: 104, name: 'Jest', img: 'devicon-jest-plain colored' },
    { key: 105, name: 'Bootstrap', img: 'devicon-bootstrap-plain colored' },
    { key: 106, name: 'React', img: 'devicon-react-original colored' },
    { key: 107, name: 'Ruby', img: 'devicon-ruby-plain colored' },
    { key: 108, name: 'Rails 7', img: 'devicon-rails-plain colored' },
    { key: 109, name: 'Java', img: 'devicon-java-plain colored' },
  ];

function Skills() {
    return (
        <>
        <section className='skills-section' id='skills-section'>
            <h1 className='section-name'>Skillset</h1>
            <div className='skills-wrapper'>
                {SkillData.map((item, key) =>
                    <div className='tile-wrapper' key={key}>
                        <i className={item.img}/>
                        <p className='item-label' >{item.name}</p>
                    </div>
                )}
            </div>
        </section>
            
        </>
    )
}

export default Skills