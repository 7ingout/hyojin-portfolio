import React from 'react';
import useFadeIn from '../hooks/useFadeIn';
import './css/Hero.css';

const Hero = () => {
    const eyebrowRef = useFadeIn();
    const titleRef = useFadeIn({ delay: 60 });
    const subRef = useFadeIn({ delay: 120 });
    const ctaRef = useFadeIn({ delay: 180 });

    return (
        <header className='hero'>
            <div className='eyebrow reveal' ref={eyebrowRef}>All-round Developer</div>
            <h1 className='reveal' ref={titleRef}>Hyojin Kim</h1>
            <p className='sub reveal' ref={subRef}>
                <b>기획부터 개발·운영까지 직접 해내는 AI 활용 올라운드 실무자.</b><br />
                4년 6개월간 ERP 구축·운영을 중심으로 웹 개발, 데이터 자동화, 인프라 운영까지 폭넓게 경험했습니다.
            </p>
            <div className='cta reveal' ref={ctaRef}>
                <a href='#projects' className='btn primary'>실무 프로젝트 보기 →</a>
                <a href='#career' className='btn ghost'>경력 보기</a>
            </div>
        </header>
    );
};

export default Hero;
