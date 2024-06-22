import React from "react";
 
import JURI_MUSIK1 from "../assets/JUDGES/JURI_MUSIK1.png"
import JURI_MUSIK2 from "../assets/JUDGES/JURI_MUSIK2.png"
import JURI_MUSIK3 from "../assets/JUDGES/JURI_MUSIK3.png"

import Judges_Event from "../assets/JUDGES/Judges_Event.png"
import redCarpetJudges from "../assets/JUDGES/redCarpetJudges.png"
 

const Judges23 = () => { 
  return (
    <div className="Performer23">  
      <div>
        <div className="judulPerformer23">
            Judges Malam Penghargaan Wibu Jogja 2023
        </div> 
      </div>
      <div className="kategoriPost">
        <div className="image-container">
            <img src={JURI_MUSIK1} alt="JURI_MUSIK1" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={JURI_MUSIK2} alt="JURI_MUSIK2" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={JURI_MUSIK3} alt="JURI_MUSIK3" className="card-image" /> 
        </div>
      

        <div className="image-container">
            <img src={Judges_Event} alt="Judges_Event" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={redCarpetJudges} alt="redCarpetJudges" className="card-image" /> 
        </div>
      </div>
    </div> 
  )
}

export default Judges23;
