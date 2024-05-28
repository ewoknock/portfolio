import { Link } from 'react-scroll'
import resume from '../images/Resume.pdf'
import '../styles/Navbar.css'

function Navbar() {
    return (
        <>
            <nav className ='navbar sticky-top'>
                <div className='container-fluid'>
                    <Link to='hero-section' className='navbar-brand'>Enoch Hsu</Link>
                    <div className="nav">
                        <ul className='navbar-actions'>
                            <li className='nav-item'>
                                <Link to='skills-section' className='nav-link'>Skills</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='projects-section' className='nav-link'>Projects</Link>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href="https://github.com/ewoknock" target='_blank' rel='noopener noreferrer'>GitHub</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href="https://www.linkedin.com/in/enoch-hsu" target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href={resume} download>Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar