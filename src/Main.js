import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    const innerHeight = window.innerHeight;
    const goDown = () => window.scrollTo({top: innerHeight, left:0, behavior:'smooth'});
    return (
        <div className='Main'>
            <div className='bg'></div>
            <div className='inner'>
                <div>안녕하세요, Web 개발자 <span>김효진입니다.</span></div>
                <div>본 Portfolio는 React로 제작하였습니다.</div>
            </div>
            <div className='more' onClick={goDown}>
                <Link to = '/About' className='moreLink'> 
                    클릭하여 더 알아보기
                </Link>
            </div>
        </div>
    );
};

export default Main;