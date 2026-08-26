import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './components/css/Main.css';

const Main = () => {
    return (
        <div>
            <Header />
            <section className='Hero'>
                <div className='Hero_inner container-wide'>
                    <p className='section-label'>Web Developer</p>
                    <h1 className='display-heading Hero_name'>Hyojin Kim</h1>
                    <div className='Hero_intro'>
                        <p>안녕하세요, Web 개발자 <span className='Hero_accent'>김효진입니다.</span></p>
                        <p>본 Portfolio는 React로 제작하였습니다.</p>
                    </div>
                    <nav className='Hero_links'>
                        <Link to='/About'>ABOUT ME</Link>
                        <Link to='/Project'>PROJECTS</Link>
                        <a href='https://github.com/7ingout' target='_blank' rel='noreferrer'>GitHub</a>
                    </nav>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Main;
