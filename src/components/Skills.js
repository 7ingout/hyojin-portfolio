import React from 'react';
import './css/Skills.css';
import useFadeIn from '../hooks/useFadeIn';

const Skills = () => {
    const eyebrowRef = useFadeIn();
    const titleRef = useFadeIn({ delay: 60 });
    const leadRef = useFadeIn({ delay: 120 });
    const rowsRef = useFadeIn({ delay: 180 });

    return (
        <section id='skills'>
            <div className='eyebrow reveal' ref={eyebrowRef}>Skills</div>
            <h2 className='title reveal' ref={titleRef}>기술 스택</h2>
            <p className='lead reveal' ref={leadRef}>프론트부터 백엔드·DB·데이터·AI까지, 실무에서 직접 다뤄온 도구들.</p>
            <div className='reveal' ref={rowsRef}>
                <div className='skill-row'>
                    <div className='cat'>Frontend</div>
                    <div className='pills'>
                        <span className='pill'>HTML5</span>
                        <span className='pill'>CSS3</span>
                        <span className='pill'>JavaScript</span>
                        <span className='pill'>React</span>
                        <span className='pill'>JSP</span>
                        <span className='pill'>반응형 웹</span>
                        <span className='pill'>UI/UX</span>
                    </div>
                </div>
                <div className='skill-row'>
                    <div className='cat'>Backend</div>
                    <div className='pills'>
                        <span className='pill'>Java</span>
                        <span className='pill'>Node.js</span>
                        <span className='pill'>MyBatis</span>
                        <span className='pill'>REST API</span>
                        <span className='pill'>서버 개발</span>
                    </div>
                </div>
                <div className='skill-row'>
                    <div className='cat'>Database</div>
                    <div className='pills'>
                        <span className='pill'>Oracle</span>
                        <span className='pill'>MySQL</span>
                        <span className='pill'>SQL</span>
                    </div>
                </div>
                <div className='skill-row'>
                    <div className='cat'>Data · AI</div>
                    <div className='pills'>
                        <span className='pill'>Python</span>
                        <span className='pill'>Claude</span>
                        <span className='pill'>Cursor AI</span>
                        <span className='pill'>Ollama</span>
                        <span className='pill'>Google Analytics</span>
                        <span className='pill'>Looker Studio</span>
                    </div>
                </div>
                <div className='skill-row'>
                    <div className='cat'>Domain · ETC</div>
                    <div className='pills'>
                        <span className='pill'>ERP</span>
                        <span className='pill'>서비스 기획</span>
                        <span className='pill'>Git</span>
                        <span className='pill'>프로토타이핑</span>
                        <span className='pill'>문서 작성</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
