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
                        <div className='Career_companies'>
                            <div className='Career_company'>
                                <div className='Career_logo_container'>
                                    <div className='Career_logo_wrapper'>
                                        <img className='Career_logo_img' src='images/kprc.png' alt=''/>
                                    </div>
                                </div>
                                <div className='Career_info'>
                                    <div className='Career_title'>(사)한국물가협회</div>
                                    <div className='Career_period'>2022.11.14 - 재직중</div>
                                    <div className='Career_description'>전산사업부 사원</div>
                                    <h4 className='Career_works_title'>2024년          </h4>

                                  

                                    <ul className='Career_works'>
                                        <h4 className='Career_works_title'>Python 개발</h4>
                                        <li>크롤링(스크래핑) 자동화 프로그램 개발</li>
                                        <li>전 부서 대상 파이썬 크롤링 교육 진행</li>
                                        <li>축산물 가격정보 수집 자동화 제안서 작성</li>
                                        <li>적산자료 예약 메일 프로시저 생성 및 실행(총 49,826건)</li>
                                    </ul>

                                    <ul className='Career_works'>
                                        <h4 className='Career_works_title'>웹 디자인</h4>
                                        <li>책자/팝업창/공지사항/배너 등 각종 이미지 제작 총 42건</li>
                                        <li>각 업체 아이덴티티에 맞는 배너 광고 디자인 및 이미지 해상도 개선</li>
                                    </ul>

                                    <ul className='Career_works'>
                                        <h4 className='Career_works_title'>데이터 관리 및 자동화</h4>
                                        <li>PDF 업로드 및 공지사항 등록, 관심품목 메일 서비스 자동 발송(261건)</li>
                                        <li>DB 공급 PDF 목차 생성, 우수업체 탐방 이미지 갱신 등 후속작업 수행</li>
                                        <li>주소록 엑셀 업로드(102건), 시가 및 원가 프로그램 데이터 수정</li>
                                    </ul>

                                    <ul className='Career_works'>
                                        <h4 className='Career_works_title'>회원 프로그램 관리</h4>
                                        <li>회원 프로그램 개발 및 수정 31건</li>
                                        <li>데이터 입력/수정/검토 등 요청사항 처리 총 224건</li>
                                        <li>지회 회원 프로그램 관련 수정 및 데이터 처리 총 45건</li>
                                    </ul>

                                    <ul className='Career_works'>
                                        <h4 className='Career_works_title'>전산/서버 관리</h4>
                                        <li>서버 점검 및 일지 작성</li>
                                        <li>전산소모품 재고 조사 및 분출 관리</li>
                                        <li>사내 전산지원 요청 처리 16건</li>
                                        <li>세미나 및 교육 참가 13건</li>
                                        <li>휴대폰 본인인증 사용현황 및 회원 수치 문서 작성</li>
                                        <li>타부서 PDF 교체 요청 처리</li>
                                    </ul>

                                    <ul className='Career_works'>
                                        <h4 className='Career_works_title'>e프라이버시 클린서비스</h4>
                                        <li>회원탈퇴 민원 처리 72건</li>
                                    </ul>

                                    <ul className='Career_works'>
                                        <h4 className='Career_works_title'>인터넷 회원 문의 응대</h4>
                                        <li>총 74건 전화 응대 및 처리</li>
                                    </ul>
                                    
                                    <ul className='Career_works'>
                                        <h4 className='Career_works_title'>2023년</h4>
                                        <li>웹사이트 개발 및 수정 83건</li>
                                        <li>신규 페이지 개발 6건 (2023, 2024 친환경건설자재 / 임금명세서 / 인재채용 / 납품대금 연동제 / 지회 웹페이지)</li>
                                        <li>요소 삽입/삭제/수정 19건</li>
                                        <li>데이터 갱신 관련 코드 수정 16건</li>
                                        <li>페이지 오류 수정 15건</li>
                                        <li>페이지 최적화 코드 개발 22건</li>
                                        <li>모바일 반응형 코드 개발 5건</li>
                                        <li>쿼리 수정: 메인페이지 / Price store / 협회소개 / 물가자료 게시판 / 관리자 페이지 / 상단 메뉴 / 검색창 / 결제 프로세스 / 마이페이지 등</li>
                                    </ul>

                                    <ul className='Career_works'>
                                        <h4 className='Career_works_title'>프론트엔드</h4>
                                        <li>웹 페이지 UI 개선 및 반응형 설계</li>
                                        <li>CSS 수정 및 사용자 경험(UX) 개선</li>
                                        <li>HTML5, CSS3, SCSS를 통한 레이아웃 구성</li>
                                        <li>메인배너 및 각종 배너/이미지 제작</li>
                                        <li>웹 디자인: 시각적 매력을 고려한 배너 광고 디자인 및 이미지 퀄리티 향상</li>
                                    </ul>

                                    <ul className='Career_works'>
                                        <h4 className='Career_works_title'>백엔드</h4>
                                        <li>Oracle 쿼리 작성 및 최적화</li>
                                        <li>회원 및 지회 프로그램 수정 154건 (회원: 141건, 지회: 13건)</li>
                                        <li>갱신 메일링 프로시저 개발</li>
                                        <li>서버 점검 및 로그 관리, 오류 분석</li>
                                    </ul>

                                    <ul className='Career_works'>
                                        <h4 className='Career_works_title'>데이터 자동화 / 크롤링</h4>
                                        <li>Python을 활용한 가격정보 자동 크롤링 프로그램 개발 2건</li>
                                        <li>화학공업약품 및 원자재 가격 데이터 추출</li>
                                        <li>대표 웹페이지 데이터 크롤링 샘플 가이드 작성</li>
                                    </ul>

                                    <ul className='Career_works'>
                                        <h4 className='Career_works_title'>이미지 및 시각자료 제작</h4>
                                        <li>이미지 제작 총 65건 (책자, 팝업창, 공지사항, 배너, 신규페이지 등)</li>
                                        <li>PDF 목차 생성 7건</li>
                                        <li>우수업체 탐방 이미지 갱신</li>
                                    </ul>

                                    <ul className='Career_works'>
                                        <h4 className='Career_works_title'>고객 대응 및 사이트 운영</h4>
                                        <li>고객의 소리 민원 처리 39건 (전산문의/타부서 전달/게시물 삭제)</li>
                                        <li>회원 문의전화 대응 35건</li>
                                        <li>e프라이버시 클린서비스 회원탈퇴 민원 48건</li>
                                        <li>사이트 권한 부여 요청 처리</li>
                                        <li>광고 게재 및 팝업창 관리</li>
                                    </ul>

                                    <ul className='Career_works'>
                                        <h4 className='Career_works_title'>운영 및 내부지원</h4>
                                        <li>전산지원 60건 (프린터, 인증서, 하이웍스 등)</li>
                                        <li>서버 점검, FTP 재부팅, 오류 전달</li>
                                        <li>전산 소모품 관리 및 재고 조사</li>
                                        <li>IP 할당 작업 15건</li>
                                        <li>문서 작성 11건, 회의 참석 3건, 전산 세미나 참석 3건</li>
                                        <li>부서 문서 취합 및 서무 업무</li>
                                        <li>세금계산서 청구 및 수금사항 등록</li>
                                    </ul>

                                    <ul className='Career_works'>
                                        <h4 className='Career_works_title'>데이터 관리 및 공공사업</h4>
                                        <li>물가자료 PDF 업로드 및 공지사항 등록</li>
                                        <li>관심품목 메일 서비스 172건</li>
                                        <li>디지털 물가자료 계약 문서 작성 및 보험/인지세 처리</li>
                                        <li>데이터바우처 사업: 홍보물 메일링 프로시저 작업</li>
                                        <li>한국부동산원 SQL 쿼리 수정 및 데이터 변환</li>
                                    </ul>

                                    <ul className='Career_works'>
                                        <h4 className='Career_works_title'>부서 파견 근무</h4>
                                        <li>타부서 파견 (2023.06.01~2023.08.31)</li>
                                        <li>조사부 업무 교육 및 물가DB 입력</li>
                                        <li>기획조사부: 신규업체 등록, 광고 등록, 수금현황 정리</li>
                                        <li>정책변경에 따른 프로그램 일괄 수정 및 사용자 의견 반영</li>
                                    </ul>
                                    </div>
                            </div>
                            <div className='Career_company secondCompany'>
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
                                        <li>HTML5와 CSS를 이용하여 웹사이트 화면의 틀과 UI를 설계 및 구현하는 능력을 향상</li>
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
                                        <h4 className='Career_works_title'>react-redux</h4>
                                        <li>thunk 미들웨어를 사용하여 액션생성함수, 액션타입, 리듀서가 작성된 파일들을 하나로 관리할 수 있음</li>
                                    </ul>
                                    <ul className='Career_works'>
                                        <h4 className='Career_works_title'>node.js</h4>
                                        <li>bcrypt 해시 함수를 이용하여 웹페이지 사용자 비밀번호를 암호화해서 저장</li>
                                        <li>AWS MySQL과 Express(NodeJS 웹 애플리케이션 프레임워크) 연동 후 데이터 관리</li>
                                        <li>미들웨어 Cors를 통해 Cors 이슈를 해결</li>
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
             <div id="Arrimg" onClick={go_up}><img src='/images/arrow.png' alt="arrow_pic" /></div> 
            <Footer />
        </div>
    );
};

export default Career;