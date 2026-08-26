import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';

const Main = () => {
    return (
        <>
            <Nav variant='full' />
            <div className='wrap'>
                <Hero />
            </div>
        </>
    );
};

export default Main;
