import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProjectsHome from './components/ProjectsHome';
import Career from './components/Career';
import Contact from './components/Contact';

const Main = () => {
    return (
        <>
            <Nav variant='full' />
            <div className='wrap'>
                <Hero />
                <About />
                <Skills />
                <ProjectsHome />
                <Career />
            </div>
            <Contact />
        </>
    );
};

export default Main;
