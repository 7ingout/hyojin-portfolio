import React from 'react';
import './css/Career.css';
import useFadeIn from '../hooks/useFadeIn';

const Career = () => {
    const eyebrowRef = useFadeIn();
    const titleRef = useFadeIn({ delay: 60 });
    const tlRef = useFadeIn({ delay: 120 });
    const eduLabelRef = useFadeIn();
    const eduRef = useFadeIn({ delay: 60 });

    return (
        <section id='career'>
            <div className='eyebrow reveal' ref={eyebrowRef}>Career</div>
            <h2 className='title reveal' ref={titleRef}>경력 · 총 4년 6개월</h2>
            <div className='tl reveal' ref={tlRef}>
                <div className='tl-item'>
                    <div className='when'>2022.11 — 재직중</div>
                    <h3>(사)한국물가협회 · 웹개발 대리</h3>
                    <div className='role'>통합 ERP 설계·구축 · 웹 개발·운영 · Python 자동화 · 인프라/보안</div>
                    <p className='desc'>업무 흐름 분석 기반 차세대 통합 ERP 구조 설계·구축, 대표 홈페이지·신규 서비스 개발, 데이터 수집 자동화 및 서버 점검 자동화, Oracle 쿼리 최적화·비정상 접근 로그 분석까지 폭넓게 수행.</p>
                </div>
                <div className='tl-item'>
                    <div className='when'>2021.05 — 2021.12</div>
                    <h3>한국표준과학연구원 · 데이터 라벨링</h3>
                    <div className='role'>연구 데이터 수집·정리 · 머신러닝 예측 분석</div>
                    <p className='desc'>학술논문 개요와 소재 조성·온도별 강도 등 연구 데이터를 수집·정리하고, ASCENDS 머신러닝 프로그램으로 데이터 예측·분석 수행.</p>
                </div>
            </div>

            <div className='sub-eyebrow reveal' ref={eduLabelRef}>Education & Training</div>
            <div className='edu reveal' ref={eduRef}>
                <div className='edu-item'>
                    <div className='when'>2016.03 — 2021.02</div>
                    <h4>영남대학교 · 정보통신공학과</h4>
                    <p>4년제 졸업</p>
                </div>
                <div className='edu-item'>
                    <div className='when'>2022.03 — 2022.09</div>
                    <h4>그린컴퓨터 아카데미</h4>
                    <p>PWA 프론트엔드 개발 과정 (React·Node.js·MySQL 풀스택)</p>
                </div>
            </div>
        </section>
    );
};

export default Career;
