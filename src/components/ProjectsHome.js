import React from 'react';
import { Link } from 'react-router-dom';
import './css/ProjectsHome.css';
import useFadeIn from '../hooks/useFadeIn';

const ProjectsHome = () => {
    const eyebrowRef = useFadeIn();
    const titleRef = useFadeIn({ delay: 60 });
    const leadRef = useFadeIn({ delay: 120 });
    const bentoLabelRef = useFadeIn();
    const bentoRef = useFadeIn({ delay: 60 });
    const miniLabelRef = useFadeIn({ delay: 120 });
    const miniRef = useFadeIn({ delay: 180 });

    return (
        <section id='projects'>
            <div className='eyebrow reveal' ref={eyebrowRef}>Projects</div>
            <h2 className='title reveal' ref={titleRef}>대표 프로젝트</h2>
            <p className='lead reveal' ref={leadRef}>현업 업무 흐름을 분석해 설계·구축한 실무 프로젝트 중심으로.</p>

            <div className='sub-eyebrow reveal' ref={bentoLabelRef}>실무 프로젝트 · 한국물가협회</div>
            <div className='bento reveal' ref={bentoRef}>
                <Link className='card c-tall feat' to='/Project#erp-mis'>
                    <div className='k'>ERP · 기준정보/권한</div>
                    <h3>통합 ERP 권한·기준정보 관리</h3>
                    <p>부서별 관리자 권한과 코드·기준정보를 단일 시스템에서 통합 관리. RBAC 기반 접근제어 설계.</p>
                    <div className='tags'>
                        <span className='tag'>Java</span>
                        <span className='tag'>Oracle</span>
                        <span className='tag'>JavaScript</span>
                    </div>
                    <span className='metric'>접근제어 · 기준정보 통합</span>
                </Link>
                <Link className='card c-wide' to='/Project#erp-price'>
                    <div className='k'>ERP · 데이터 정합성</div>
                    <h3>물가조사 데이터 관리 ERP</h3>
                    <p>입력·마감·상품/카테고리 관리 + 진행현황 대시보드. 중복 검증·유효성 로직으로 데이터 정합성 확보.</p>
                    <span className='metric'>입력 오류 구조적 차단</span>
                </Link>
                <div className='card c-sq'>
                    <div className='k'>Automation</div>
                    <h3>Python 업무 자동화</h3>
                    <span className='metric'>월 20h+ 절감</span>
                </div>
                <div className='card c-sq'>
                    <div className='k'>Gen AI</div>
                    <h3>AI 개발 생산성</h3>
                    <span className='metric'>개발 2주 → 1일</span>
                </div>
                <Link className='card c-mid' to='/Project#food-service'>
                    <div className='k'>Web · 반응형</div>
                    <h3>대외 웹 서비스 개발</h3>
                    <p>공표·Local Contents·인재채용 페이지. 모바일 반응형 UI, GA4·Looker Studio 연동.</p>
                    <div className='tags'>
                        <span className='tag'>JSP</span>
                        <span className='tag'>CSS</span>
                        <span className='tag'>AOS</span>
                    </div>
                </Link>
                <Link className='card c-mid' to='/Project#erp-living'>
                    <div className='k'>ERP · 현업 특화</div>
                    <h3>생활물가 기획조사 ERP</h3>
                    <p>현업 요구사항 분석 기반 전용 인터페이스·관리자 기능 설계.</p>
                </Link>
            </div>

            <div className='sub-eyebrow reveal' ref={miniLabelRef}>개인 · 팀 프로젝트</div>
            <div className='mini-grid reveal' ref={miniRef}>
                <Link className='mini' to='/Project#wannasee'>
                    <div className='k'>Team · 예매</div>
                    <h4>WANNASEE</h4>
                    <p>콘서트 예매 · React, Redux</p>
                </Link>
                <Link className='mini' to='/Project#walking-on-a-planet'>
                    <div className='k'>Personal · 여행</div>
                    <h4>Walking On a Planet</h4>
                    <p>여행 기록 · React, Swiper</p>
                </Link>
                <Link className='mini' to='/Project#jooda'>
                    <div className='k'>Team · 커머스</div>
                    <h4>JOODA</h4>
                    <p>기프트샵</p>
                </Link>
                <Link className='mini' to='/Project#baseball-game'>
                    <div className='k'>Personal · Game</div>
                    <h4>야구게임</h4>
                    <p>숫자야구 웹게임</p>
                </Link>
                <Link className='mini' to='/Project'>
                    <div className='k'>더 보기</div>
                    <h4>View all →</h4>
                    <p>전체 프로젝트</p>
                </Link>
            </div>
        </section>
    );
};

export default ProjectsHome;
