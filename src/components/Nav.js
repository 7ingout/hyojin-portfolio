import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Nav.css';

const Nav = ({ variant = 'full' }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        onScroll();
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav id='nav' className={scrolled ? 'scrolled' : ''}>
            <div className='nav-in'>
                <Link to='/' className='logo'>Portfolio<span>.</span></Link>
                {variant === 'full' && (
                    <div className='menu'>
                        <a href='#about'>About</a>
                        <a href='#skills'>Skills</a>
                        <a href='#projects'>Projects</a>
                        <a href='#career'>Career</a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Nav;
