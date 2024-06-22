import React from "react";
import { Container, Row} from "react-bootstrap";
import { Navigation, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; 

import JJF from "../assets/NOMINASI/EVENT/JJF.png";
import JJW from "../assets/NOMINASI/EVENT/JJW.png";
import MOERU from "../assets/NOMINASI/EVENT/MOERU.png";
import NIPPONNATION from "../assets/NOMINASI/EVENT/NIPPON_NATIONS.png";
import PARIPICO from "../assets/NOMINASI/EVENT/PARIPICO.png";
import SHIAWASE from "../assets/NOMINASI/EVENT/SHIAWASE.png";


function NominasiEvent23() {
    return (
        <div className="nominasi-container">
            <Container>
            <Row>
                <div className="judul">
                    <div className="text-wrapper">
                        <div className="text">
                            NOMINASI EVENT OF THE YEAR 2023
                        </div>
                    </div>
                </div>
            </Row>
            <Row>
                <div className="carousel-nominasi-container">
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
                            <div className='carousel-nominasi-isi'>
                                <div className="carousel-nominasi-box">
                                    <div className="nom1">
                                        <div className="img-container">
                                            <img src={JJF} alt="JJF" className="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='carousel-nominasi-isi'>
                                <div className="carousel-nominasi-box">
                                    <div className="nom1">
                                        <div className="img-container">
                                            <img src={JJW} alt="JJW" className="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='carousel-nominasi-isi'>
                                <div className="carousel-nominasi-box">
                                    <div className="nom1">
                                        <div className="img-container">
                                            <img src={MOERU} alt="MOERU" className="img" />
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='carousel-nominasi-isi'>
                                <div className="carousel-nominasi-box">
                                    <div className="nom1">
                                        <div className="img-container">
                                            <img src={NIPPONNATION} alt="NIPPONNATION" className="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='carousel-nominasi-isi'>
                                <div className="carousel-nominasi-box">
                                    <div className="nom1">
                                        <div className="img-container">
                                            <img src={PARIPICO} alt="PARIPICO" className="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='carousel-nominasi-isi'>
                                <div className="carousel-nominasi-box">
                                    <div className="nom1">
                                        <div className="img-container">
                                            <img src={SHIAWASE} alt="SHIAWASE" className="img" />
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

export default NominasiEvent23;