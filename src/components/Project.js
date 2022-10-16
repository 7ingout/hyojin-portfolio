import React from 'react';
import './css/Project.css'
import Header from './Header';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper";
import Footer from './Footer';

const Project = () => {
    function go_up() {
        window.scrollTo(0,0);
    }
    const red = {
        color: "red",
        fontSize:"12px",
        fontWeight:"bold"
    }
    return (
        <div>
            <Header />
            <div className='Project_box'>
                <h2>PROJECTS</h2> 
                <article className='Profects_Projects'>
                    <div className='Projects_content'>
                        {/* <div className='SectionTitle'>
                            <div className='SectionTitle_text' Style="color:#ffffff;border-bottom-color:#cccccc">PROJECTS</div>
                            <div className='SectionTitle_link'>
                                <img className='SectionTitle_link_img' src="/images/white-link.png" alt=''/>
                            </div>
                        </div> */}
                        <div className='Projects'>
                            <div className='Project'>
                                <div className='Projects_title'>Walking On a Planet</div>
                                <div className='Projects_period'>2022.07.25 - 2022.08.12 (개인 프로젝트)</div>
                                <div className='Projects_info'>
                                    <div className='Projects_img'>
                                        <div className='Projects_imgs'>
                                        <Swiper
                                            slidesPerView={1}
                                            spaceBetween={30}
                                            slidesPerGroup={1}
                                            loop={true}
                                            loopFillGroupWithBlank={true}
                                            pagination={{
                                            clickable: true,
                                            }}
                                            navigation={true}
                                            modules={[Pagination, Navigation, Autoplay]}
                                            className="mySwiper"
                                            autoplay={{delay: 5000}}>
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/walking1.png' alt='' />
                                                </SwiperSlide>    
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/walking2.png' alt='' />
                                                </SwiperSlide>  
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/walking3.png' alt='' />
                                                </SwiperSlide>  
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/walking4.png' alt='' />
                                                </SwiperSlide>  
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/walking5.png' alt='' />
                                                </SwiperSlide>  
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/walking6.png' alt='' />
                                                </SwiperSlide>  
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/walking7.png' alt='' />
                                                </SwiperSlide>   
                                        </Swiper>
                                        </div>
                                    </div>
                                    <div className='Projects_descriptions'>
                                        <div className='Projects_main_description'>
                                            <ul>
                                                <li>여행지 추천, 여행 물품 중고거래, 여행 사진 공모전 등 다양한 콘텐츠를 담고있는 여행사이트 구현</li>
                                                <li>min-width:320px/ max-width:479px 모바일 기기에 맞춘 반응형 구현</li>
                                                <li>[클라이언트]</li>
                                                <li>- vercel 호스팅 사이트를 이용하여 사이트 배포</li>
                                                <li>- 여행지 목록 게시판</li>
                                                <li>- 여행사진 공모전 게시판</li>
                                                <li>- 중고물품 거래 게시판</li>
                                                <li>- 장바구니 / 내가 쓴 글 확인 기능</li>
                                                <li>- 로그인 / 회원가입 및 관리자모드 구현</li>
                                                <li>- 세계지도 API</li>
                                                <li>- Swiper 라이브러리로 메인화면에 사진 슬라이더 구현</li>
                                                <li>- aos 라이브러리를 통하여 부드럽게 올라오는 이미지 구현</li>
                                                <li>[서버]</li>
                                                <li>- heroku의 PaaS 클라우드 서비스를 이용하여 서버 배포</li>
                                                <li>- AWS MySQL과 Express(NodeJS 웹 애플리케이션 프레임워크) 연동 후 데이터 관리</li>
                                                <li>- 미들웨어 Cors를 통해 Cors 이슈를 해결</li>
                                                <li>[라이브러리]</li>
                                                <li>aos: 이미지 애니메이션</li>
                                                <li>axios: 비동기 통신 기능</li>
                                                <li>react-cookie: 로그인 기능</li>
                                                <li>redux: 상태관리</li>
                                                <li>react-daum-postcode: 다음 주소 API(회원가입)</li>
                                                <li>react-simple-maps: 세계지도</li>
                                                <li>swiper: 이미지 슬라이더</li>
                                            </ul>
                                            {/* <div className='Projects_show_btn'>자세히 보기 ▶ READ ME</div> */}
                                        </div>
                                        <div className='Projects_description'>
                                            <div className='Projects_label'>URL</div>
                                            <div className='Projects_value'>
                                                <a href='https://walking-on-a-planet-client.vercel.app/' target='_blank' rel='noreferrer'>
                                                    <div className='value_url'>walking-on-a-planet-client.vercel.app/</div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='Projects_description'>
                                            <div className='Projects_label'>GitHub</div>
                                            <div className='Projects_value'>
                                                <a href='https://github.com/7ingout/walking-on-a-planet-client' target='_blank' rel='noreferrer'>
                                                    <div className='value_url'>github.com/7ingout/walking-on-a-planet-client</div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='Projects_description'>
                                            <div className='Projects_label'>Tech Stack</div>
                                            <div className='Projects_value'>React / NodeJS / JavaScript / SQL / CSS</div>
                                        </div>
                                        <div className='Projects_description'>
                                            <div className='Projects_label'>Database</div>
                                            <div className='Projects_value'>MySQL</div>
                                        </div>
                                        <div className='Projects_description'>
                                            <div className='Projects_label'>Deployment</div>
                                            <div className='Projects_value'>Vercel / Heroku / AWS</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='Project'>
                                <div className='Projects_title'>WANNASEE</div>
                                <div className='Projects_period'>2022.07.04 - 2022.07.15 (2인 팀프로젝트)</div>
                                <div className='Projects_info'>
                                    <div className='Projects_img'>
                                    <div className='Projects_imgs'>
                                        <Swiper
                                            slidesPerView={1}
                                            spaceBetween={30}
                                            slidesPerGroup={1}
                                            loop={true}
                                            loopFillGroupWithBlank={true}
                                            pagination={{
                                            clickable: true,
                                            }}
                                            navigation={true}
                                            modules={[Pagination, Navigation, Autoplay]}
                                            className="mySwiper"
                                            autoplay={{delay: 5000}}>
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/wannasee1.png' alt='' />
                                                </SwiperSlide>    
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/wannasee2.png' alt='' />
                                                </SwiperSlide>  
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/wannasee3.png' alt='' />
                                                </SwiperSlide>  
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/wannasee4.png' alt='' />
                                                </SwiperSlide>  
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/wannasee5.png' alt='' />
                                                </SwiperSlide>  
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/wannasee6.png' alt='' />
                                                </SwiperSlide>  
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/wannasee7.png' alt='' />
                                                </SwiperSlide>  
                                        </Swiper>
                                        </div>
                                    </div>
                                    <div className='Projects_descriptions'>
                                        <div className='Projects_main_description'>
                                            <ul>
                                                <li>콘서트 정보 안내 및 티켓 예매를 할 수 있는 웹사이트(WANNASEE) 구현</li>
                                                <li>min-width:320px/ max-width:479px 모바일 기기에 맞춘 반응형 구현</li>
                                                <li>[클라이언트]</li>
                                                <li>- vercel 호스팅 사이트를 이용하여 사이트 배포</li>
                                                <li>- 콘서트 예매 수량 관리</li>
                                                <li>- 콘서트 상세보기</li>
                                                <li>- 콘서트 등록 및 수정</li>
                                                <li>- 로그인 / 회원가입 및 관리자모드 구현</li>
                                                <li>- 티켓 예매내역</li>
                                                <li>[서버]</li>
                                                <li>- heroku라는 PaaS 클라우드 서비스를 이용하여 서버 배포</li>
                                                <li>- AWS MySQL과 Express(NodeJS 웹 애플리케이션 프레임워크) 연동 후 데이터 관리</li>
                                                <li>- 미들웨어 Cors를 통해 Cors 이슈를 해결</li>
                                                <li>[라이브러리]</li>
                                                <li>aos: 이미지 애니메이션</li>
                                                <li>axios: 비동기 통신 기능</li>
                                                <li>react-cookie: 로그인 기능</li>
                                                <li>redux: 상태관리</li>
                                                <li>react-daum-postcode: 다음 주소 API(회원가입)</li>
                                                <li>react-fast-marquee: 글자 애니메이션</li>
                                            </ul>
                                            {/* <div className='Projects_show_btn'>자세히 보기 ▶ READ ME</div> */}
                                        </div>
                                        <div style={red}>* AWS DB 삭제 관계로 콘서트 정보가 뜨지 않습니다 *</div>
                                        <div className='Projects_description'>
                                            <div className='Projects_label'>URL</div>
                                            <div className='Projects_value'>
                                                <a href='https://wannasee-project-client.vercel.app/' target='_blank' rel='noreferrer'>
                                                    <div className='value_url'>wannasee-project-client.vercel.app/</div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='Projects_description'>
                                            <div className='Projects_label'>GitHub</div>
                                            <div className='Projects_value'>
                                                <a href='https://github.com/7ingout/wannasee-project-client' target='_blank' rel='noreferrer'>
                                                    <div className='value_url'>github.com/7ingout/wannasee-project-client</div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='Projects_description'>
                                            <div className='Projects_label'>Tech Stack</div>
                                            <div className='Projects_value'>React / NodeJS / JavaScript / SQL / CSS</div>
                                        </div>
                                        <div className='Projects_description'>
                                            <div className='Projects_label'>Database</div>
                                            <div className='Projects_value'>MySQL</div>
                                        </div>
                                        <div className='Projects_description'>
                                            <div className='Projects_label'>Deployment</div>
                                            <div className='Projects_value'>Vercel / Heroku / AWS</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='Project'>
                                <div className='Projects_title'>Pump!</div>
                                <div className='Projects_period'>2022.06.21 - 2022.06.24 (개인 프로젝트)</div>
                                <div className='Projects_info'>
                                    <div className='Projects_img'>
                                        <div className='Projects_imgs'>
                                        <Swiper
                                            slidesPerView={1}
                                            spaceBetween={30}
                                            slidesPerGroup={1}
                                            loop={true}
                                            loopFillGroupWithBlank={true}
                                            pagination={{
                                            clickable: true,
                                            }}
                                            navigation={true}
                                            modules={[Pagination, Navigation, Autoplay]}
                                            className="mySwiper"
                                            autoplay={{delay: 5000}}>
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/pump1.png' alt='' />
                                                </SwiperSlide>    
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/pump2.png' alt='' />
                                                </SwiperSlide>  
                                        </Swiper>
                                        </div>
                                    </div>
                                    <div className='Projects_descriptions'>
                                        <div className='Projects_main_description'>
                                            <ul>
                                                <li>canvas를 활용한 손가락 DDR 게임 구현</li>
                                                <li>timer 변수를 선언하여 normal / hard / extreme 세가지 난이도로 구현</li>
                                                <li>랜덤함수를 이용하여 무작위로 올라오는 화살표 구현</li>
                                                <li>PHP를 활용하여 홈 화면 / 난이도에 따른 3가지 게임 화면으로 세분화</li>
                                            </ul>
                                            {/* <div className='Projects_show_btn'>자세히 보기 ▶ READ ME</div> */}
                                        </div>
                                        <div className='Projects_description'>
                                            <div className='Projects_label'>GitHub</div>
                                            <div className='Projects_value'>
                                                <a href='https://github.com/7ingout/pump' target='_blank' rel='noreferrer'>
                                                    <div className='value_url'>github.com/7ingout/pump</div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='Projects_description'>
                                            <div className='Projects_label'>Tech Stack</div>
                                            <div className='Projects_value'>JavaScript / HTML / PHP / CSS</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='Project'>
                                <div className='Projects_title'>JOODA</div>
                                <div className='Projects_period'>2022.06.07 - 2022.06.14 (2인 팀프로젝트)</div>
                                <div className='Projects_info'>
                                    <div className='Projects_img'>
                                        <div className='Projects_imgs'>
                                        <Swiper
                                            slidesPerView={1}
                                            spaceBetween={30}
                                            slidesPerGroup={1}
                                            loop={true}
                                            loopFillGroupWithBlank={true}
                                            pagination={{
                                            clickable: true,
                                            }}
                                            navigation={true}
                                            modules={[Pagination, Navigation, Autoplay]}
                                            className="mySwiper"
                                            autoplay={{delay: 5000}}>
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/JOODA1.png' alt='' />
                                                </SwiperSlide>    
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/JOODA2.png' alt='' />
                                                </SwiperSlide>  
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/JOODA3.png' alt='' />
                                                </SwiperSlide>  
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/JOODA4.png' alt='' />
                                                </SwiperSlide>  
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/JOODA5.png' alt='' />
                                                </SwiperSlide>  
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/JOODA6.png' alt='' />
                                                </SwiperSlide>  
                                        </Swiper>
                                        </div>
                                    </div>
                                    <div className='Projects_descriptions'>
                                        <div className='Projects_main_description'>
                                            <ul>
                                                <li>기프트샵 웹사이트(JOODA) 구현</li>
                                                <li>로그인 / 회원가입 및 관리자 모드 구현</li>
                                                <li>기프트 상품 상세보기</li>
                                                <li>기프트 상품 등록 및 수정, 삭제</li>
                                                <li>리뷰, 댓글 작성 및 삭제</li>
                                                <li>MySQL과 연결하여 데이터 관리</li>
                                                <li>php를 이용한 웹 페이지 구상</li>
                                            </ul>
                                            {/* <div className='Projects_show_btn'>자세히 보기 ▶ READ ME</div> */}
                                        </div>
                                        <div className='Projects_description'>
                                            <div className='Projects_label'>URL</div>
                                            <div className='Projects_value'>
                                                <a href='http://hyodev2.dothome.co.kr/jooda/index.php' target='_blank' rel='noreferrer'>
                                                    <div className='value_url'>hyodev2.dothome.co.kr/jooda/index.php</div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='Projects_description'>
                                            <div className='Projects_label'>GitHub</div>
                                            <div className='Projects_value'>
                                                <a href='https://github.com/7ingout/JOODA' target='_blank' rel='noreferrer'>
                                                    <div className='value_url'>github.com/7ingout/JOODA</div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='Projects_description'>
                                            <div className='Projects_label'>Tech Stack</div>
                                            <div className='Projects_value'>PHP / JavaScript / HTML / CSS / SQL</div>
                                        </div>
                                        <div className='Projects_description'>
                                            <div className='Projects_label'>Database</div>
                                            <div className='Projects_value'>MySQL</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='Project'>
                                <div className='Projects_title'>BaseballGame</div>
                                <div className='Projects_period'>2022.05.16 - 2022.05.20 (3인 팀프로젝트)</div>
                                <div className='Projects_info'>
                                    <div className='Projects_img'>
                                        <div className='Projects_imgs'>
                                        <Swiper
                                            slidesPerView={1}
                                            spaceBetween={30}
                                            slidesPerGroup={1}
                                            loop={true}
                                            loopFillGroupWithBlank={true}
                                            pagination={{
                                            clickable: true,
                                            }}
                                            navigation={true}
                                            modules={[Pagination, Navigation, Autoplay]}
                                            className="mySwiper"
                                            autoplay={{delay: 5000}}>
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/baseball1.png' alt='' />
                                                </SwiperSlide>    
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/baseball2.png' alt='' />
                                                </SwiperSlide>  
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/baseball3.png' alt='' />
                                                </SwiperSlide>  
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/baseball4.png' alt='' />
                                                </SwiperSlide>  
                                        </Swiper>
                                        </div>
                                    </div>
                                    <div className='Projects_descriptions'>
                                        <div className='Projects_main_description'>
                                            <ul>
                                                <li>바닐라 스크립트로 게임 구현</li>
                                                <li>랜덤함수를 이용하여 확률에 따라 다른 안타 / 홈런 / 아웃 등의 비율을 실제 경기처럼 구현</li>
                                            </ul>
                                            {/* <div className='Projects_show_btn'>자세히 보기 ▶ READ ME</div> */}
                                        </div>
                                        <div className='Projects_description'>
                                            <div className='Projects_label'>URL</div>
                                            <div className='Projects_value'>
                                                <a href='http://hyodev2.dothome.co.kr/baseballGame/' target='_blank' rel='noreferrer'>
                                                    <div className='value_url'>http://hyodev2.dothome.co.kr/baseballGame/</div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='Projects_description'>
                                            <div className='Projects_label'>GitHub</div>
                                            <div className='Projects_value'>
                                                <a href='https://github.com/7ingout/baseball-game' target='_blank' rel='noreferrer'>
                                                    <div className='value_url'>github.com/7ingout/baseball-game</div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='Projects_description'>
                                            <div className='Projects_label'>Tech Stack</div>
                                            <div className='Projects_value'>JavaScript / HTML / CSS</div>
                                        </div>
                                    </div>
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

export default Project;