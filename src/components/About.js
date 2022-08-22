import React from 'react';
import './css/About.css'
import Header from './Header';

const About = () => {
    return (
        <div>           
            <Header /> 
            <div className='About'>
                <h2>ABOUT ME</h2>
                <div className='About_inner'>
                    <ul>
                
                    </ul>
                    <ul>
                        <li>개발이 재미있는 개발자</li>
                        <li>김효진입니다.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;