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
                <div className='About_inner'>
                    <div className='Masthead'>
                        <div className='Masthead_content'>
                            <div className='Masthead_title'>
                                <span>김효진</span>
                                <br/>
                                웹 개발자 포트폴리오
                            </div>
                            <div className='Masthead_divider'></div>
                            <div className='Masthead_description'>
                                안녕하세요
                                <br/>
                                프론트엔드 개발을 사랑하는
                                <br/>
                                풀스택이 목표인 개발자입니다.
                            </div>
                        </div>
                    </div>
                    <article className='AboutMe'>
                        <div className='AboutMe_content'>
                            <div className='AboutMe_basic_infos'>
                                <div className='AboutMe_basic_info'>
                                    <div className='AboutMe_basic_info_li'>
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
                                <div className='AboutMe_basic_info'>
                                    <div className='AboutMe_basic_info_li'>
                                        <div className='AboutMe_icon_img'>
                                            <img className='AboutMe_icon_img2' src="/images/calendar-fill.svg" alt=''/>
                                        </div>
                                        <div className='AboutMe_field'>
                                            <div className='AboutMe_field_label'>
                                                생년월일
                                            </div>
                                            <div className='AboutMe_field_value'>
                                                98.01.15
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='AboutMe_basic_info'>
                                    <div className='AboutMe_basic_info_li'>
                                        <div className='AboutMe_icon_img'>
                                            <img className='AboutMe_icon_img2' src="/images/geo-alt-fill.svg" alt=''/>
                                        </div>
                                        <div className='AboutMe_field'>
                                            <div className='AboutMe_field_label'>
                                                주소지
                                            </div>
                                            <div className='AboutMe_field_value'>
                                                서울특별시 영등포구
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='AboutMe_basic_info'>
                                    <div className='AboutMe_basic_info_li'>
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
                                <div className='AboutMe_basic_info'>
                                    <div className='AboutMe_basic_info_li'>
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
                                <div className='AboutMe_basic_info'>
                                    <div className='AboutMe_basic_info_li'>
                                        <div className='AboutMe_icon_img'>
                                            <img className='AboutMe_icon_img2' src="/images/pencil-fill.svg" alt=''/>
                                        </div>
                                        <div className='AboutMe_field'>
                                            <div className='AboutMe_field_label'>
                                                학력
                                            </div>
                                            <div className='AboutMe_field_value'>
                                                영남대학교
                                                <br/>
                                                (정보통신공학과)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='cer'>
                                <h1>- 보유 자격증 목록</h1>
                                <ul>
                                    <li>정보통신기사</li>
                                    <li>정보처리기사</li>
                                    <li>SQLD</li>
                                    <li>컴퓨터활용능력 1급</li>
                                    <li>한국사능력검정시험 1급</li>
                                    <li>KBS한국어능력시험 3+급</li>
                                    <li>웹디자인기능사 - 필기합격</li>
                                    <li>컴퓨터그래픽운용기능사 - 필기합격</li>
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