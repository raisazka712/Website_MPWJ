import React from "react";
import Sponsorr from "../assets/PERFORMER/sponsorr.png";


const Sponsor = () => {
  return (
    <div className="Sponsor">  
        <div className="judulSponsor">
            Sponsor Malam Penghargaan Wibu Jogja 2023
        </div>
        <div className="textSponsor">
          Kami mengucapkan terima kasih kepada sponsor yang telah mendukung acara MPWJ 2023
        </div>
        <img src={Sponsorr} alt="Sponsorr" className="Sponsorr" />
    </div> 
  )
}

export default Sponsor;
