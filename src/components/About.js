import React from 'react';
import './css/About.css';
import useFadeIn from '../hooks/useFadeIn';

const About = () => {
    const eyebrowRef = useFadeIn();
    const titleRef = useFadeIn({ delay: 60 });
    const bodyRef = useFadeIn({ delay: 120 });

    return (
        <section id='about'>
            <div className='eyebrow reveal' ref={eyebrowRef}>About</div>
            <h2 className='title reveal' ref={titleRef}>기획부터 운영까지, 스스로 해내는 개발자</h2>
            <div className='about-body reveal' ref={bodyRef}>
                <p>4년 6개월간 ERP 구축·운영을 중심으로 웹 서비스 개발, 데이터 자동화, 인프라 운영까지 폭넓게 경험하며, 기획부터 개발·운영까지 직접 해내는 <b>올라운드 개발자</b>로 성장해왔습니다.</p>
                <p>현업의 업무 흐름을 분석해 물가조사·기준정보·권한 관리를 아우르는 ERP를 설계·구축하였고, 데이터 정합성 체계와 업무 프로세스 재정립을 통해 오류를 구조적으로 줄이는 데 강점이 있습니다. Java·SQL·Oracle DB 기반 개발과 함께, 대표 홈페이지·신규 서비스 개발 및 모바일 반응형 UI 개선 등 웹 전반도 직접 수행해왔습니다.</p>
                <p>또한 Python 기반 업무 자동화와 서버 운영 점검 자동화로 반복 업무를 제거하고, 생성형 AI를 개발 전 과정에 적극 활용해 개발 생산성을 높여왔습니다. 새로운 기술과 도구를 빠르게 익혀 실무에 적용하며, 어떤 환경에서도 필요한 역할을 스스로 찾아 해내는 개발자입니다.</p>
                <div className='chips'>
                    <span className='chip'>정보통신기사</span>
                    <span className='chip'>정보처리기사</span>
                    <span className='chip'>SQLD</span>
                    <span className='chip'>컴활 1급</span>
                    <span className='chip'>한국사 1급</span>
                    <span className='chip'>TOEIC Speaking IH</span>
                </div>
            </div>
        </section>
    );
};

export default About;
