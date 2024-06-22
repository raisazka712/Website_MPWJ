import React from "react";
import { Container, Row} from "react-bootstrap";
import { Navigation, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; 

import FINA from "../assets/NOMINASI/MC/FINA.png";
import GABE from "../assets/NOMINASI/MC/GABE.png";
import ICHAK from "../assets/NOMINASI/MC/ICHAK.png";
import IYAN from "../assets/NOMINASI/MC/IYAN.png";
import NANA from "../assets/NOMINASI/MC/NANA.png";
import YODHA from "../assets/NOMINASI/MC/YODHA.png";


function NominasiMC24() {
    return (
        <div className="nominasi-container">
            <Container>
            <Row>
                <div className="judul">
                    <div className="text-wrapper">
                        <div className="text">
                            NOMINASI MC AWARDS 2024
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
                                            <img src={FINA} alt="FINA" className="img" />
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
                                            <img src={GABE} alt="GABE" className="img" />
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
                                            <img src={ICHAK} alt="ICHAK" className="img" />
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
                                            <img src={IYAN} alt="IYAN" className="img" />
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
                                            <img src={NANA} alt="NANA" className="img" />
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
                                            <img src={YODHA} alt="YODHA" className="img" />
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

export default NominasiMC24;