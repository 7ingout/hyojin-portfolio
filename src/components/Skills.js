import React from 'react';
import Header from './Header';
import './css/Skills.css'
import Footer from './Footer';
import useFadeIn from '../hooks/useFadeIn';

const Skills = () => {
    const listRef = useFadeIn();

    return (
        <div>
            <Header />
            <div className='Skill container-wide'>
                <h2>SKILLS</h2>
                <article className='Skills_Skills'>
                    <div className='Skills_content fade-up' ref={listRef}>
                        <div className='Skills_tech_stacks_container'>
                            <div className='Skills_tech_stacks'>
                                <div className='Skills_title'>Frontend</div>
                                <img className='Skills_img' src='images/frontendimg.png' alt=''/>
                            </div>
                            <div className='Skills_tech_stacks'>
                                <div className='Skills_title'>Backend</div>
                                <img className='Skills_img' src='images/backendimg.png' alt=''/>
                            </div>
                            <div className='Skills_tech_stacks'>
                                <div className='Skills_title'>Database</div>
                                <img className='Skills_img' src='images/database.png' alt=''/>
                            </div>
                            <div className='Skills_tech_stacks'>
                                <div className='Skills_title'>Deployment</div>
                                <img className='Skills_img' src='images/deploymentimg.png' alt=''/>
                            </div>
                            <div className='Skills_tech_stacks'>
                                <div className='Skills_title'>Version Control</div>
                                <img className='Skills_img' src='images/version-controlimg.png' alt=''/>
                            </div>
                            <div className='Skills_tech_stacks'>
                                <div className='Skills_title'>ETC</div>
                                <img className='Skills_img' src='images/etc.png' alt=''/>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            <Footer />
        </div>
    );
};

export default Skills;