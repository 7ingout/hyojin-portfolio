import React from 'react';
import Header from './Header';
import './css/Skills.css'
import Footer from './Footer';

const Skills = () => {
    return (
        <div> 
            <Header />
            <div className='Skill'>
                <h2>SKILLS</h2>
                <article className='Skills_Skills'>
                    <div className='Skills_content'>
                        {/* <div className='SectionTitle'>
                            <div className='SectionTitle_text' Style='color:#000000; border-bottom-color:#000000'>SKILLS</div>
                            <div className='SectionTitle_link'>
                                <img className='SectionTitle_link_img' src="/images/black-link.png" alt=''/>
                            </div>
                        </div> */}
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
                            {/* <div className='Skills_tech_stacks'>
                                <div className='Skills_title'>Certificate</div>
                                <img className='Skills_img' src='images/certificateimg.png' alt=''/>
                            </div> */}
                        </div>
                    </div>
                </article>
            </div>
            <Footer />
        </div>
    );
};

export default Skills;