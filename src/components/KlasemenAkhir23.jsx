import React from "react";
import { Container, Row} from "react-bootstrap";
import { Navigation, Pagination} from 'swiper/modules'; 
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation'; 
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';  

import KLASEMEN_FINALZ_band from "../assets/KLASEMEN/KLASEMEN_FINALZ_band.png";
import KLASEMEN_FINALZ_bestidol from "../assets/KLASEMEN/KLASEMEN_FINALZ_bestidol.png";
import KLASEMEN_FINALZ_bestsong from "../assets/KLASEMEN/KLASEMEN_FINALZ_bestsong.png";
import KLASEMEN_FINALZ_community from "../assets/KLASEMEN/KLASEMEN_FINALZ_community.png";
import KLASEMEN_FINALZ_eo from "../assets/KLASEMEN/KLASEMEN_FINALZ_eo.png";
import KLASEMEN_FINALZ_event from "../assets/KLASEMEN/KLASEMEN_FINALZ_event.png";
import KLASEMEN_FINALZ_guest from "../assets/KLASEMEN/KLASEMEN_FINALZ_guest.png";
import KLASEMEN_FINALZ_idolgemez from "../assets/KLASEMEN/KLASEMEN_FINALZ_idolgemez.png";
import KLASEMEN_FINALZ_mc from "../assets/KLASEMEN/KLASEMEN_FINALZ_mc.png";
import KLASEMEN_FINALZ_panutan from "../assets/KLASEMEN/KLASEMEN_FINALZ_panutan.png";
import KLASEMEN_FINALZ_prince from "../assets/KLASEMEN/KLASEMEN_FINALZ_prince.png";
import KLASEMEN_FINALZ_princess from "../assets/KLASEMEN/KLASEMEN_FINALZ_princess.png";
import KLASEMEN_FINALZ_spot from "../assets/KLASEMEN/KLASEMEN_FINALZ_spot.png";
import KLASEMEN_FINALZ_wibuevent from "../assets/KLASEMEN/KLASEMEN_FINALZ_wibuevent.png";
 
function KlasemenAkhir23() {
    return (
        <div className="klasemen-container"> 
            <Container>
            <Row> 
                <div className="judul">
                    <div className="text-wrapper">
                        <div className="text">
                            Klasemen Akhir Malam Penghargaan Wibu Jogja 2023
                        </div>
                    </div>
                </div>
            </Row>
            <Row>
                <div className="carousel-klasemen-container">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    // scrollbar={{ draggable: true }}
                    >
                        <SwiperSlide>
                            <div className='carousel-klasemen-isi'>
                                <div className="carousel-klasemen-box">
                                    <div className="nom1">
                                        <div className="img-container">
                                            <img src={KLASEMEN_FINALZ_prince} alt="KLASEMEN_FINALZ_prince" className="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='carousel-klasemen-isi'>
                                <div className="carousel-klasemen-box">
                                    <div className="nom1">
                                        <div className="img-container">
                                            <img src={KLASEMEN_FINALZ_panutan} alt="KLASEMEN_FINALZ_panutan" className="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='carousel-klasemen-isi'>
                                <div className="carousel-klasemen-box">
                                    <div className="nom1">
                                        <div className="img-container">
                                            <img src={KLASEMEN_FINALZ_princess} alt="KLASEMEN_FINALZ_princess" className="img" />
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='carousel-klasemen-isi'>
                                <div className="carousel-klasemen-box">
                                    <div className="nom1">
                                        <div className="img-container">
                                            <img src={KLASEMEN_FINALZ_event} alt="KLASEMEN_FINALZ_event" className="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='carousel-klasemen-isi'>
                                <div className="carousel-klasemen-box">
                                    <div className="nom1">
                                        <div className="img-container">
                                            <img src={KLASEMEN_FINALZ_eo} alt="KLASEMEN_FINALZ_eo" className="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='carousel-klasemen-isi'>
                                <div className="carousel-klasemen-box">
                                    <div className="nom1">
                                        <div className="img-container">
                                            <img src={KLASEMEN_FINALZ_wibuevent} alt="KLASEMEN_FINALZ_wibuevent" className="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='carousel-klasemen-isi'>
                                <div className="carousel-klasemen-box">
                                    <div className="nom1">
                                        <div className="img-container">
                                            <img src={KLASEMEN_FINALZ_spot} alt="KLASEMEN_FINALZ_spot" className="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='carousel-klasemen-isi'>
                                <div className="carousel-klasemen-box">
                                    <div className="nom1">
                                        <div className="img-container">
                                            <img src={KLASEMEN_FINALZ_guest} alt="KLASEMEN_FINALZ_guest" className="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='carousel-klasemen-isi'>
                                <div className="carousel-klasemen-box">
                                    <div className="nom1">
                                        <div className="img-container">
                                            <img src={KLASEMEN_FINALZ_bestidol} alt="KLASEMEN_FINALZ_bestidol" className="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='carousel-klasemen-isi'>
                                <div className="carousel-klasemen-box">
                                    <div className="nom1">
                                        <div className="img-container">
                                            <img src={KLASEMEN_FINALZ_idolgemez} alt="KLASEMEN_FINALZ_idolgemez" className="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='carousel-klasemen-isi'>
                                <div className="carousel-klasemen-box">
                                    <div className="nom1">
                                        <div className="img-container">
                                            <img src={KLASEMEN_FINALZ_band} alt="KLASEMEN_FINALZ_band" className="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='carousel-klasemen-isi'>
                                <div className="carousel-klasemen-box">
                                    <div className="nom1">
                                        <div className="img-container">
                                            <img src={KLASEMEN_FINALZ_bestsong} alt="KLASEMEN_FINALZ_bestsong" className="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='carousel-klasemen-isi'>
                                <div className="carousel-klasemen-box">
                                    <div className="nom1">
                                        <div className="img-container">
                                            <img src={KLASEMEN_FINALZ_mc} alt="KLASEMEN_FINALZ_mc" className="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='carousel-klasemen-isi'>
                                <div className="carousel-klasemen-box">
                                    <div className="nom1">
                                        <div className="img-container">
                                            <img src={KLASEMEN_FINALZ_community} alt="KLASEMEN_FINALZ_community" className="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Row>
            </Container>
        </div>
    )
}

export default KlasemenAkhir23;