import React from "react";
 
import TwoNtwo from "../assets/PERFORMER/2N2.png"
import GiftDragon from "../assets/PERFORMER/GIFT_DRAGON.png"
import Goofies from "../assets/PERFORMER/GOOFIES.png"

import Jankenpo from "../assets/PERFORMER/JANKENPO.png"
import JNK from "../assets/PERFORMER/JIYUU.png"
import PMG from "../assets/PERFORMER/PMG.png"

import WAGMI from "../assets/PERFORMER/WAGMI.png"
import RANRAN from "../assets/PERFORMER/RANRAN.png"
 

import {useNavigate} from 'react-router-dom';

const PerformerHome = () => { 
  let navigate = useNavigate();
  return (
    <div className="PerformerHome"> 
      <div>
        <div className="judulPerformerHome">
            Performer Malam Penghargaan Wibu Jogja 2024
        </div> 
        <div className="textPerformerHome">
            Berikut list Performer yang akan memeriahkan Malam Penghargaan Wibu Jogja 2024
        </div>
      </div>
      <div className="kategoriPost">
        {/* <div className="image-container">
            <img src={TwoNtwo} alt="TwoNtwo" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={GiftDragon} alt="GiftDragon" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={Goofies} alt="Goofies" className="card-image" /> 
        </div> */}
      

        {/* <div className="image-container">
            <img src={Jankenpo} alt="Jankenpo" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={JNK} alt="JNK" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={PMG} alt="PMG" className="card-image" /> 
        </div> */}


        {/* <div className="image-container">
            <img src={WAGMI} alt="WAGMI" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={RANRAN} alt="RANRAN" className="card-image" /> 
        </div> */}
      </div>
        {/* <div className="announ-btn">
            <button className={`btn btn-success btn-lg rounded-2 mt-5 mb-5`} onClick={() => navigate("/Event2024")}> Lihat Selengkapnya 
            </button>
        </div> */}
    </div> 
  )
}

export default PerformerHome;
