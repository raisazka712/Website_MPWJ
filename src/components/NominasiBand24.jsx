import React from "react";
import { Container, Row} from "react-bootstrap";
import { Navigation, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; 

import BRING_BACK_THE_SANITY from "../assets/NOMINASI/BAND/BRING_BACK_THE_SANITY.png";
import CROSSXOVER from "../assets/NOMINASI/BAND/CROSSXOVER.png";
import DEWOXDEATH from "../assets/NOMINASI/BAND/DEWOXDEATH.png";
import DWD from "../assets/NOMINASI/BAND/DWD.png";
import FUNMERI from "../assets/NOMINASI/BAND/FUNMERI.png";
import HEAVY_MACHINE_GUN from "../assets/NOMINASI/BAND/HEAVY_MACHINE_GUN.png";
import KEMONO_FURENZU from "../assets/NOMINASI/BAND/KEMONO_FURENZU.png";
import SHITAGI_UMA from "../assets/NOMINASI/BAND/SHITAGI_UMA.png";
import TwoN2 from "../assets/NOMINASI/BAND/TwoN2.png";


function NominasiBand24() {
    return (
        <div className="nominasi-container">
            <Container>
            <Row>
                <div className="judul">
                    <div className="text-wrapper">
                        <div className="text">
                            NOMINASI BAND 2024
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
                                            <img src={BRING_BACK_THE_SANITY} alt="BRING_BACK_THE_SANITY" className="img" />
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
                                            <img src={CROSSXOVER} alt="CROSSXOVER" className="img" />
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
                                            <img src={DEWOXDEATH} alt="DEWOXDEATH" className="img" />
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
                                            <img src={DWD} alt="DWD" className="img" />
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
                                            <img src={FUNMERI} alt="FUNMERI" className="img" />
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
                                            <img src={HEAVY_MACHINE_GUN} alt="HEAVY_MACHINE_GUN" className="img" />
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
                                            <img src={KEMONO_FURENZU} alt="KEMONO_FURENZU" className="img" />
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
                                            <img src={SHITAGI_UMA} alt="SHITAGI_UMA" className="img" />
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
                                            <img src={TwoN2} alt="TwoN2" className="img" />
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

export default NominasiBand24;