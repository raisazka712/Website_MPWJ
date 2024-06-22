import React from "react";
import { Container } from "react-bootstrap";
import Backdrop from "../assets/BACKDROP/BACKDROP2.png";
 
const Sejarah = () => {
  return (
    <div className="sejarah">

        <div className="judulSejarah">
            Sejarah Malam Penghargaan Wibu Jogja 
        </div>
        <img src={Backdrop} alt="Backdrop" className="Backdrop" />
        <div className="textSejarah">
        Malam Penghargaan Wibu Jogja adalah sebuah acara yang dimulai pada tahun 2023 di Yogyakarta yang bertujuan untuk merayakan dan menghargai budaya pop Jepang (anime, manga, dan budaya populer Jepang lainnya) serta komunitas penggemarnya, yang dikenal sebagai "wibu". Acara ini merupakan inisiatif dari orang-orang pecinta budaya pop Jepang di Yogyakarta sebagai wujud apresiasi terhadap kontribusi dan keberadaan komunitas wibu dalam mengembangkan minat dan apresiasi terhadap budaya Jepang di wilayah tersebut.
        <br /> <br />
        Seiring berjalannya waktu, Malam Penghargaan Wibu Jogja telah menjadi salah satu acara yang dinantikan setiap tahunnya oleh para penggemar budaya pop Jepang di Yogyakarta dan sekitarnya, menjadi momentum penting untuk memperkuat jaringan komunitas, mengapresiasi karya-karya kreatif dalam dunia anime dan manga, serta merayakan keberagaman dan keunikan budaya Jepang.
        </div>

    </div>
  )
}

export default Sejarah;
