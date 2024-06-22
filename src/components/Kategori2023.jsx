import React from "react";

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

import {useNavigate} from 'react-router-dom';

const Kategori2023 = () => { 
  let navigate = useNavigate();
  return ( 
    <div className="Kategori2023">
      <div>
        <div className="judulKategoriHome">
            Kategori Malam Penghargaan Wibu Jogja 2023
        </div> 
        <div className="textKategoriHome">
            Pada Malam Penghargaan Wibu Jogja tahun 2023 terdapat 15 Kategori Penghargaan
        </div>
      </div>
      <div className="kategoriPost">
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
      </div>
    </div> 
  )
}

export default Kategori2023;
