import React from 'react';
import './css/About.css'
import Footer from './Footer';
import Header from './Header';

const About = () => {
    return (
        <div>           
            <Header /> 
            <div className='About'>
                <h2>ABOUT ME</h2>
                <div className='AboutInner'>
                    <div className='Masthead'>
                        <img src="/images/profile.png" alt=''/>
                        <div className='MastheadTitle'>
                            <span>김효진(Hyojin Kim)</span>
                            <div>Web 개발자 포트폴리오</div>
                        </div>
                        <div className='MastheadDivider'></div>
                        <div className='MastheadDescription'>심플함과 효율성으로 차별화된 웹 경험을 창조합니다.</div>
                    </div>
                    <article className='AboutMe'>
                        <div className='AboutMeContent'>
                            <div className='AboutMeInfos'>
                                <div className='AboutMeInfo'>
                                    <div className='AboutMeInfoLi'>
                                        <div className='AboutMe_icon_img'>
                                            <img className='AboutMe_icon_img2' src="/images/person-fill.svg" alt=''/>
                                        </div>
                                        <div className='AboutMe_field'>
                                            <div className='AboutMe_field_label'>
                                                이름
                                            </div>
                                            <div className='AboutMe_field_value'>
                                                김효진
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='AboutMeInfo'>
                                    <div className='AboutMeInfoLi'>
                                        <div className='AboutMe_icon_img'>
                                            <img className='AboutMe_icon_img2' src="/images/calendar-fill.svg" alt=''/>
                                        </div>
                                        <div className='AboutMe_field'>
                                            <div className='AboutMe_field_label'>
                                                생년월일
                                            </div>
                                            <div className='AboutMe_field_value'>
                                                1998.01.15
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='AboutMeInfo'>
                                    <div className='AboutMeInfoLi'>
                                        <div className='AboutMe_icon_img'>
                                            <img className='AboutMe_icon_img2' src="/images/geo-alt-fill.svg" alt=''/>
                                        </div>
                                        <div className='AboutMe_field'>
                                            <div className='AboutMe_field_label'>
                                                주소지
                                            </div>
                                            <div className='AboutMe_field_value'>
                                                대한민국 서울특별시 금천구
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='AboutMeInfo'>
                                    <div className='AboutMeInfoLi'>
                                        <div className='AboutMe_icon_img'>
                                            <img className='AboutMe_icon_img2' src="/images/telephone-fill.svg" alt=''/>
                                        </div>
                                        <div className='AboutMe_field'>
                                            <div className='AboutMe_field_label'>
                                                연락처
                                            </div>
                                            <div className='AboutMe_field_value'>
                                                010-9660-8854
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='AboutMeInfo'>
                                    <div className='AboutMeInfoLi'>
                                        <div className='AboutMe_icon_img'>
                                            <img className='AboutMe_icon_img2' src="/images/envelope-fill.svg" alt=''/>
                                        </div>
                                        <div className='AboutMe_field'>
                                            <div className='AboutMe_field_label'>
                                                이메일
                                            </div>
                                            <div className='AboutMe_field_value'>
                                                hadvjin@naver.com
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='AboutMeInfo'>
                                    <div className='AboutMeInfoLi'>
                                        <div className='AboutMe_icon_img'>
                                            <img className='AboutMe_icon_img2' src="/images/pencil-fill.svg" alt=''/>
                                        </div>
                                        <div className='AboutMe_field'>
                                            <div className='AboutMe_field_label'>
                                                학력
                                            </div>
                                            <div className='AboutMe_field_value'>
                                                영남대학교 정보통신공학과
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='cer'>
                                <h1>- 보유 자격증 목록 -</h1>
                                <ul>
                                    <li>정보통신기사</li>
                                    <li>정보처리기사</li>
                                    <li>SQLD</li>
                                    <li>컴퓨터활용능력 1급</li>
                                    <li>한국사능력검정시험 1급</li>
                                    <li>KBS한국어능력시험 3+급</li>
                                </ul>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;