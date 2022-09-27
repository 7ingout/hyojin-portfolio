import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css'

const Header = () => {
    return (
        <div className='Header'>
            <h1><Link to='/'>Hyojin's Portfolio</Link></h1>
            <ul>
                <li><Link to='/About'>ABOUT ME</Link></li>
                <li><Link to='/Skill'>SKILLS</Link></li>
                <li><Link to='/Archiving'>ARCHIVING</Link></li>
                <li><Link to='/Project'>PROJECTS</Link></li>
                <li><Link to='/Career'>CAREER</Link></li>
            </ul>
        </div>
    );
};

export default Header;