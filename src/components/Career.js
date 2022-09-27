import React from 'react';
import Header from './Header';
import './css/Career.css'
import Footer from './Footer';

const Career = () => {
    function go_up() {
        window.scrollTo(0,0);
    }
    return (
        <div>
            <Header />
            <div className='Career'>
                <h2>CAREER</h2> 
                <article className='Career_Career'>
                    <div className='Career_content'>
                        {/* <div className='SectionTitle'>
                            <div className='SectionTitle_text' Style="color:#000000;border-bottom-color:#000000">CAREER</div>
                            <div className='SectionTitle_link'>
                                <img className='SectionTitle_link_img' src="/images/black-link.png" alt=''/>
                            </div>
                        </div> */}
                        <div className='Career_companies'>
                            <div className='Career_company'>
                                <div className='Career_logo_container'>
                                    <div className='Career_logo_wrapper'>
                                        <img className='Career_logo_img' src='images/greenlogo.png' alt=''/>
                                    </div>
                                </div>
                                <div className='Career_info'>
                                    <div className='Career_title'>그린컴퓨터 아카데미</div>
                                    <div className='Career_period'>2022.03 - 2022.09</div>
                                    <div className='Career_description'>[스마트웹&콘텐츠개발] PWA 제작 프론트엔드 개발 디지털인재 양성과정</div>
                                    <ul className='Career_works'>
                                        <h4 className='Career_works_title'>화면 설계 / 구현</h4>
                                        <li>html5와 css를 이용하여 웹사이트 화면의 틀과 UI를 설계 및 구현하는 능력을 향상</li>
                                        <li>이용자의 기기에 따라 (PC / 모바일 / 태블릿 등) 화면의 구조를 변경할 수 있는 반응형 웹을 구현할 수 있는 능력을 터득</li>
                                        <li>스켈레톤 / 스피너 기능을 활용할 수 있음</li>
                                        <li>SCSS를 이용하여 UI 설계를 용이하게 할 수 있음</li>
                                    </ul>
                                    <ul className='Career_works'>
                                        <h4 className='Career_works_title'>javascript</h4>
                                        <li>배열과 객체의 값을 구조 분해 할당 후 활용 할 수 있음</li>
                                        <li>정규표현식을 사용하여 회원가입시 아이디와 전화번호 등을 기입하는 것을 최적화함</li>
                                        <li>캔버스를 활용한 게임 구현</li>
                                        <li>비동기적 처리(Asynchronous)를 활용하여 파라미터를 전달받아 실행하는 콜백함수와 또 다른 비동기적 처리 방법인 프로미스를 사용할 수 있는 능력을 함양</li>
                                        <li>typescript를 활용하여 todolist 구현</li>
                                    </ul>
                                    <ul className='Career_works'>
                                        <h4 className='Career_works_title'>react</h4>
                                        <li>리액트 라우터를 활용하여 요청한 url에 따라 페이지 이동을 할 수 있음</li>
                                        <li>useParams를 사용하여 파라미터 값을 가지고 있는 객체를 반환할 수 있음</li>
                                        <li>useState, useReducer, useEffect로 상태관리를 할 수 있는 능력 함양</li>
                                        <li>axios 라이브러리를 사용하여 get, post, put, delete 등의 메소드로 API를 요청할 수 있음</li>
                                        <li>이미지를 업로드하여 관리하는 스토리지 서버인 multer를 활용할 수 있음</li>
                                        <li>쿠키와 세션 두 방법을 사용하여 로그인, 회원가입을 구현함</li>
                                    </ul>
                                    <ul className='Career_works'>
                                        <h4 className='Career_works_title'>node.js</h4>
                                        <li>bcrypt 해시 함수를 이용하여 웹페이지 사용자 비밀번호를 암호화해서 저장</li>
                                        <li>AWS MySQL과 Express(NodeJS 웹 애플리케이션 프레임워크) 연동 후 데이터 관리</li>
                                        <li>미들웨어 Cors를 통해 Cors 이슈를 해결</li>
                                    </ul>
                                    <ul className='Career_works'>
                                        <h4 className='Career_works_title'>react-redux</h4>
                                        <li>thunk 미들웨어를 사용하여 액션생성함수, 액션타입, 리듀서가 작성된 파일들을 하나로 관리할 수 있음</li>
                                    </ul>
                                    <ul className='Career_works'>
                                        <h4 className='Career_works_title'>php</h4>
                                        <li>세션을 사용하여 사용자 로그인 기능 구현</li>
                                        <li>include 기능을 활용하여 코드 최적화</li>
                                        <li>apach 서버와 php / MySQL 연동</li>
                                        <li>MySQL 연결 후 데이터 관리</li>
                                    </ul>
                                    <ul className='Career_works'>
                                        <h4 className='Career_works_title'>MySQL</h4>
                                        <li>데이터베이스를 설계하고 구현하며 SQL을 통해 데이터를 정의(DDL) / 조작(DML) / 제어(DCL)하는 방법을 익힘</li>
                                        <li>해당 데이터를 웹과 연동하여 이를 활용하며 웹의 구조 및 과정을 이해함</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            {/* <div id="Arrimg" onClick={go_up}><img src='/images/arrow.png' alt="arrow_pic" /></div> */}
            <Footer />
        </div>
    );
};

export default Career;