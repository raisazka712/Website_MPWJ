import React from "react";
 
import FREE_PHOTOBOOTH from "../assets/INFO/FREE_PHOTOBOOTH.png"
import KING_QUEEN from "../assets/INFO/KING_QUEEN.png"
import RULES from "../assets/INFO/RULES.png"

import RUNDOWN from "../assets/INFO/RUNDOWN.png"
import TIKETING from "../assets/INFO/TIKETING.png"
 

const MoreInfo23 = () => { 
  return (
    <div className="Performer23">  
      <div>
        <div className="judulPerformer23">
            More Information About Malam Penghargaan Wibu Jogja 2023
        </div> 
      </div>
      <div className="kategoriPost">
        <div className="image-container">
            <img src={FREE_PHOTOBOOTH} alt="FREE_PHOTOBOOTH" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={KING_QUEEN} alt="KING_QUEEN" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={RULES} alt="RULES" className="card-image" /> 
        </div>
      

        <div className="image-container">
            <img src={RUNDOWN} alt="RUNDOWN" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={TIKETING} alt="TIKETING" className="card-image" /> 
        </div>
      </div>
    </div> 
  )
}

export default MoreInfo23;
