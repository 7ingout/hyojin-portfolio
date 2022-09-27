import React from 'react';
import Header from './Header';
import './css/Archiving.css'
import Footer from './Footer';

const Archiving = () => {
    return (
        <div>
            <Header />
            <div className='Archiving'>
                <h2>ARCHIVING</h2> 
                <article className='Archiving_Archiving'>
                    <div className='Archiving_content'>
                        {/* <div className='SectionTitle'>
                            <div className='SectionTitle_text' Style="color:#ffffff;border-bottom-color:#6c757d">ARCHIVING</div>
                            <div className='SectionTitle_link'>
                                <img className='SectionTitle_link_img' src="/images/white-link.png" alt=''/>
                            </div>
                        </div> */}
                        <div className='Archiving_container'>
                            <a href='https://github.com/7ingout' target='_blank' rel='noreferrer'>
                            <div className='Archiving_git-hub'>
                                <div className='Archiving_img_wrapper'>
                                    <img className='Archiving_img' src="/images/git-hub.png" alt=''/>
                                </div>
                                <div className='Archiving_url'>github.com/7ingout</div>
                                <div className='Archiving_description'>
                                    <p>
                                        <b>소스 코드 저장소</b>
                                        입니다.
                                    </p>
                                    <ul>
                                        <li>리액트 개인 프로젝트 소스 코드</li>
                                        <li>리액트 팀 프로젝트 소스 코드</li>
                                        <li>리액트 연습을 위해 공부했던 소스 코드</li>
                                    </ul>
                                </div>
                            </div>
                            </a>
                            <a href='https://7ingout.tistory.com/' target='_blank' rel='noreferrer'>
                            <div className='Archiving_tistory'>
                                <div className='Archiving_img_wrapper'>
                                    <img className='Archiving_img' src="/images/tistory.png" alt=''/>
                                </div>
                                <div className='Archiving_url'>7ingout.tistory.com</div>
                                <div className='Archiving_description'>
                                    <p>
                                        <b>공부 및 지식 공유 목적의 블로그</b>
                                        입니다.
                                    </p>
                                    <ul>
                                        <li>공부한 것들을 나의 것으로 만들기 위한 기록</li>
                                        <li>웹 개발 관련 지식 정리</li>
                                        <li>배운 내용들을 복습 겸 정리</li>
                                    </ul>
                                </div>
                            </div>
                            </a>
                        </div>
                    </div>
                </article>
            </div>
            <Footer />
        </div>
    );
};

export default Archiving;