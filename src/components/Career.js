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
                                    <div className='Career_description'>전산사업부 대리</div>
                                   

                                  {/* 1. ERP 및 사내 시스템 고도화 */}
<ul className='Career_works'>
    <h4 className='Career_works_title'>시스템 개발 및 고도화</h4>
    <h4 className='Career_works_title'>차세대 통합 ERP 구축 및 사내 시스템(MIS) 운영</h4>
    <li>기존 사내 MIS를 업무 흐름 중심으로 재설계하여 차세대 통합 ERP 구조 구축 및 전사 시스템 구조 표준화 기반 마련</li>
    <li>물가자료 ERP 업무 프로세스 기준 주요 화면 구조 설계·구현 및 사용자 편의성 제고</li>
    <li>코드 관리, 권한 관리 등 기준정보를 체계적으로 관리하는 통합 ERP 주요 화면 개발 및 전사 데이터 관리 효율성 향상</li>
    <li>감사 대응을 위한 표준 감사 산출물(조사처대장, 조사상품기본조사표 등) 페이지 개발 및 레포트 출력 기능 구축</li>
    <li>생활물가 기획조사 업무 특성을 반영한 ERP 기능 설계 및 개발로 기존 관리 방식의 비효율 개선</li>
    <li>사내 MIS 관련 데이터 조회·수정·보완 지원 및 유지보수</li>
    <li>물가자료 ERP 전반에 대한 이해를 돕기 위한 안내 리플렛 제작 및 전 직원 대상 배포·공유</li>
</ul>

{/* 2. 웹사이트 개발 및 UI/UX 개선 */}
<ul className='Career_works'>
    <h4 className='Career_works_title'>웹 서비스 개발</h4>
    <h4 className='Career_works_title'>웹사이트 신규 개발, 유지보수 및 UI/UX 고도화</h4>
    <li>대표 홈페이지(kprc.or.kr) 운영, 지회 웹사이트, 생활물가 기획조사, 단체급식 식재료 시장조사 등 웹사이트 신규 개발</li>
    <li>친환경건설자재, 임금명세서, 인재채용, 납품대금 연동제 등 비즈니스 요구에 맞춘 신규 서비스 페이지 기획 및 구현</li>
    <li>대표 홈페이지 요소/오류/최적화 관련 코드 개발 및 쿼리 수정</li>
    <li>HTML5, CSS3, SCSS를 활용하여 기획과 디자인에 맞춘 모바일 반응형 UI 구성 및 웹 페이지 구조 개선</li>
    <li>GA4(구글 애널리틱스4) 연동 및 Looker Studio 기반 데이터 시각화 리포트 체계 구축을 통한 의사결정 지원</li>
    <li>결제모듈 전환 등에 대비한 로컬 환경 사전 적용 및 기능 검증 테스트 수행으로 운영 리스크 선제적 점검</li>
    <li>추천업체 섹션 신규 기능 구축을 통한 홈페이지 콘텐츠 개선</li>
    <li>책자, 팝업창, 공지사항, 배너 등 시각적 매력을 고려한 각종 이미지 디자인 제작 및 광고 게재 관리</li>
</ul>

{/* 3. Python 기반 데이터 자동화 */}
<ul className='Career_works'>
    <h4 className='Career_works_title'>데이터 자동화</h4>
    <h4 className='Career_works_title'>Python 기반 웹 크롤링 자동화 시스템 구축 및 배치 프로세스 구현</h4>
    <li>Python 기반 웹 크롤링 자동화 프로그램을 개발하여 기존 수작업 데이터 수집 업무 자동화 및 소요 시간 단축</li>
    <li>중고차 연식별 시세 정보 자동 수집 기능 개발 및 활용 편의성을 위한 인터페이스 구현</li>
    <li>쇼핑몰 상품 정보(가격·할인·판매 상태 판별 로직) 자동 수집 및 데이터 정리·검토 업무 자동화 프로세스 구축</li>
    <li>화학공업약품 및 원자재 가격 데이터 추출 프로그램 개발</li>
    <li>전 부서 대상 파이썬 크롤링 교육 진행 및 대표 웹페이지 크롤링 샘플 가이드 작성으로 사내 전산 역량 강화</li>
    <li>관심품목 메일 서비스 자동 발송 및 PDF 업로드/공지사항 연동 프로세스 자동화</li>
</ul>

{/* 4. DB 및 인프라 운영 보안 */}
<ul className='Career_works'>
    <h4 className='Career_works_title'>인프라 및 보안</h4>
    <h4 className='Career_works_title'>데이터베이스 관리, 시스템 인프라 운영 및 웹 보안 강화</h4>
    <li>Oracle 쿼리 작성 및 최적화</li>
    <li>전사 데이터 정합성 유지</li>
    <li>비정상 접근 시도(SQL Injection 등) 로그 분석을 통한 보안 위협 점검 및 메인 페이지 리다이렉트 호출 구조 정비</li>
    <li>검색엔진 설정 및 접근 제어 관리(robots.txt 수정 등)를 통해 검색 노출 정책 관리 및 시스템 운영 안정성 확보</li>
    <li>정기적인 서버 점검, 로그 관리, FTP 재부팅 수행 및 사내 IP 할당 작업 처리</li>
    <li>물가자료 마감 선·후속 작업 프로세스 체계적 관리를 통해 정기 발간 업무의 안정성 및 업무 연속성 확보</li>
</ul>

{/* 5. IT 지원 및 행정 관리 */}
<ul className='Career_works'>
    <h4 className='Career_works_title'>IT 지원 및 행정</h4>
    <h4 className='Career_works_title'>사내 IT 기술 지원, 대외 민원 대응 및 부서 행정 지원</h4>
    <li>e프라이버시 클린서비스 처리 및 홈페이지 이용 관련 회원 문의 대응 </li>
    <li>프린터, 인증서, 하이웍스 등 사내 전산지원 요청사항 신속 처리</li>
    <li>사내 전산 소모품 운영 관리 및 재고 조사를 통한 안정적인 전산 환경 구축 지원</li>
    <li>세금계산서 청구 및 수금사항 등록 등 부서 내 서무 및 일반 행정 업무 지원</li>
    <li>현업 부서 파견 근무를 통해 물가 DB 입력, 신규 업체/광고 등록 등 현업 도메인 비즈니스 프로세스 반영</li>
    <li>직무 전문성 강화를 위해 외부 교육 및 IT 전문 세미나 지속 참석</li>
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