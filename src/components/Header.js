import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css'

const Header = () => {
    return (
        <header className='Header'>
            <div className='Header_inner container-wide'>
                <Link to='/' className='Header_logo'>Hyojin's Portfolio</Link>
                <nav>
                    <ul>
                        <li><Link to='/About'>ABOUT ME</Link></li>
                        <li><Link to='/Skill'>SKILLS</Link></li>
                        <li><Link to='/Archiving'>ARCHIVING</Link></li>
                        <li><Link to='/Project'>PROJECTS</Link></li>
                        <li><Link to='/Career'>CAREER</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;