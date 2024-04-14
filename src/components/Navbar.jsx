import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
    return (
        <>
            <nav className ='navbar navbar-expand-lg'>
                <div className='container-fluid'>
                    <Link to='/' className='navbar-brand'>Enoch Hsu</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <a className='nav-link' href="https://github.com/ewoknock" target='_blank' rel='noopener noreferrer'>GitHub</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href="https://www.linkedin.com/in/enoch-hsu" target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar