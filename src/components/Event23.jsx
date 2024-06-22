import React from "react";
import PosterMPWJ2023 from "../assets/PERFORMER/posterMPWJ2023.png";

const Event23 = () => { 
  return (
    <div className="Event23"> 
        <div className="judulEvent23">
            Malam Penghargaan Wibu Jogja 2023 
        </div> 
        <div className="textMpwj2023">
            Pada tahun 2023, Malam Penghargaan Wibu Jogja diselenggarakan di Tamtani Cafe pada Juma'at 1 Desember 2023.
        </div>
        <img src={PosterMPWJ2023} alt="PosterMPWJ2023" className="PosterMPWJ2023" />
    </div> 
  )
}

export default Event23;
