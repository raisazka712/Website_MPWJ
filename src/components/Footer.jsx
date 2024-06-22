import React from "react"
import Instagram from "../assets/LOGO/ig.png"
import Whatsapp from "../assets/LOGO/wa.png"
import logoSrawung from "../assets/LOGO/baruy.png"
 

const Footer = () => {
  return (
  <div className="footer"> 
      <div className="text1">
        This site is powered by : <br />
        <img src={logoSrawung} alt="logoSrawung" className="logoSrawung"/> <br />
        Copyright © 2024 Malam Penghargaan Wibu Jogja . All rights reserved.
        Designed by <span className="atiya">Azka Raisa</span>
      </div>
      <div className="cp">Contact Person :</div>
      <div className="cp2">
        <img src={Instagram} className="insta"/> <a href="https://www.instagram.com/srawungnomatsuri?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="ig-srawung"> srawungnomatsuri</a> 
      </div>
      <div className="cp2">
        <img src={Whatsapp} className="wa"/> <a href="https://wa.me/6287787574182" target="_blank" className="yodha"> 08577- 8757 - 4182 </a> (Yodha)
      </div>

  </div>
  )
}

export default Footer;
