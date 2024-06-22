import React from "react";
import { Container, Row} from "react-bootstrap";
import { Navigation, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; 

import EXTALIA_TOYS from "../assets/NOMINASI/SPOT/EXTALIA_TOYS.png";
import HIKARI_STUDIO from "../assets/NOMINASI/SPOT/HIKARI_STUDIO.png";
import KGYK from "../assets/NOMINASI/SPOT/KGYK.png";
import SCH from "../assets/NOMINASI/SPOT/SCH.png";
import SEVENSKY from "../assets/NOMINASI/SPOT/SEVENSKY.png";
import TEASAURUS from "../assets/NOMINASI/SPOT/TEASAURUS.png";


function NominasiSpotPalingWibu24() {
    return (
        <div className="nominasi-container">
            <Container>
            <Row>
                <div className="judul">
                    <div className="text-wrapper">
                        <div className="text">
                            NOMINASI SPOT PALING WIBU 2024
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
                                            <img src={EXTALIA_TOYS} alt="EXTALIA_TOYS" className="img" />
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
                                            <img src={HIKARI_STUDIO} alt="HIKARI_STUDIO" className="img" />
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
                                            <img src={KGYK} alt="KGYK" className="img" />
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
                                            <img src={SCH} alt="SCH" className="img" />
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
                                            <img src={SEVENSKY} alt="SEVENSKY" className="img" />
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
                                            <img src={TEASAURUS} alt="TEASAURUS" className="img" />
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

export default NominasiSpotPalingWibu24;