import React from 'react';
import './css/Footer.css'

const Footer = () => {
    return (
<footer className='Footer_Footer'>
                    <div className='Footer_icons'>
                        <a href='https://github.com/7ingout' target='_blank' rel='noreferrer'>
                        <div className='Footer_icon_wrapper hhh'>
                            <img className='Footer_icon_img' src="/images/git-hub-icon.png" alt=''/>
                        </div>
                        </a>
                        <a href='https://7ingout.tistory.com/' target='_blank' rel='noreferrer'>
                        <div className='Footer_icon_wrapper jjj'>
                            <img className='Footer_icon_img' src="/images/tistory-icon.png" alt=''/>
                        </div>
                        </a>
                    </div>
                    <div className='Footer_copyright'>
                    © 2022. Hyojin Kim. All rights reserved.
                    </div>
                </footer>
    );
};

export default Footer;