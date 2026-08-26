import React from 'react';
import './css/Contact.css';
import useFadeIn from '../hooks/useFadeIn';

const Contact = () => {
    const ref = useFadeIn();

    return (
        <div className='contact wrap' id='contact'>
            <div className='reveal' ref={ref}>
                <h2>Let's connect</h2>
                <div className='links'>
                    <a className='link-card' href='mailto:hadvjin@naver.com'>Email<small>hadvjin@naver.com</small></a>
                    <a className='link-card' href='https://7ingout.tistory.com/' target='_blank' rel='noreferrer'>Blog<small>7ingout.tistory.com</small></a>
                    <a className='link-card' href='https://github.com/7ingout' target='_blank' rel='noreferrer'>GitHub<small>github.com/7ingout</small></a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
