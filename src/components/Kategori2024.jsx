import React from "react";
import {Row,} from "react-bootstrap";

import CosplayPrince from "../assets/KATEGORI/COSPLAY_PRINCE.png"
import WibuPanutan from "../assets/KATEGORI/PANUTAN.png"
import CosplayPrincess from "../assets/KATEGORI/COSPLAY_PRINCESS.png"

import EventOfTheYear from "../assets/KATEGORI/EVENT.png"
import BestEO from "../assets/KATEGORI/BEST_EO.png"
import WibuPalingEvent from "../assets/KATEGORI/WIBU.png"

import BestIdol from "../assets/KATEGORI/BEST_IDOL.png"
import OriginalSong from "../assets/KATEGORI/ORIGINAL_SONG.png"
import IdolTergumush from "../assets/KATEGORI/IDOL.png"

import MC from "../assets/KATEGORI/MC.png"
import Band from "../assets/KATEGORI/BAND.png"
import SpotPalingWibu from "../assets/KATEGORI/SPOT.png"

import GS from "../assets/KATEGORI/GUEST.png"
import Gorengan from "../assets/KATEGORI/GORENGAN.png"
import CommunityAwards from "../assets/KATEGORI/KOMUNITAS.png" 


const Kategori2024 = () => { 
  return (
    <div className="Kategori2024"> 
      <div>
        <div className="judulKategoriHome">
            Kategori Malam Penghargaan Wibu Jogja 2024
        </div> 
        <div className="textKategoriHome">
            Kategori tahun ini sedikit berbeda dengan kategori tahun sebelumnya, dikarenakan ada beberapa kategori tambahan yang akan membuat wibu terguncang akan pilihannya!!
        </div>
        <div className="textKategoriHome">
            Kamu juga bisa berkontrubsi pada MPWJ tahun ini dengan memberi masukan atau usulan kategori apa yang ingin ditambahkan, bisa  di isi pada link berikut : <br />
            <a href="https://forms.gle/ZCDWkSXwEFijUTBM9" target="_blank" className="nominasii">https://forms.gle/ZCDWkSXwEFijUTBM9 </a>
        </div>
      </div>
      {/* <div className="kategoriPost">
        <div className="image-container">
            <img src={CosplayPrince} alt="CosplayPrince" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={WibuPanutan} alt="CosplayPrince" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={CosplayPrincess} alt="CosplayPrincess" className="card-image" /> 
        </div>


        <div className="image-container">
            <img src={EventOfTheYear} alt="CosplayPrince" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={BestEO} alt="CosplayPrince" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={WibuPalingEvent} alt="CosplayPrincess" className="card-image" /> 
        </div>


        <div className="image-container">
            <img src={BestIdol} alt="CosplayPrince" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={OriginalSong} alt="CosplayPrince" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={IdolTergumush} alt="CosplayPrincess" className="card-image" /> 
        </div>


        <div className="image-container">
            <img src={MC} alt="CosplayPrince" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={Band} alt="CosplayPrince" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={SpotPalingWibu} alt="CosplayPrincess" className="card-image" /> 
        </div>


        <div className="image-container">
            <img src={GS} alt="CosplayPrince" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={Gorengan} alt="CosplayPrince" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={CommunityAwards} alt="CosplayPrincess" className="card-image" /> 
        </div>
      </div> */}
    </div> 
  )
}

export default Kategori2024;
