import React from "react";
import {
  faHistory,
  faMapMarkerAlt,
  faPhoneAlt,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Info.css";
import faceBookLogo from "../../images/facebook.png";
import instragramLogo from "../../images/instagram.png";
import whatsappLogo from "../../images/whatsapp.png";
import Map from "../Map/Map";

const Info = () => {
  return (
    <section className="infoSection">
      <div className="iconsDiv mt-5">
        <div className="d-flex align-items-center">
          <p className="iconsArea">
            {" "}
            <FontAwesomeIcon
              className="icon"
              color="white"
              icon={faShoppingBag}
            ></FontAwesomeIcon>
          </p>
          <p className="textAreaResName">SR Bistro -Petaling Jaya</p>
        </div>
        <div className="d-flex  align-items-center">
          <p className="iconsArea">
            <FontAwesomeIcon
              className="icon"
              color="white"
              icon={faPhoneAlt}
            ></FontAwesomeIcon>
          </p>
          <p className="textAreaPhone"> +6016-677 5401</p>
        </div>
        <div className="d-flex align-items-center ">
          <p className="iconsArea">
            <FontAwesomeIcon
              className="icon"
              color="white"
              icon={faHistory}
            ></FontAwesomeIcon>
          </p>
          <p className="textAreaOpen">
            <strong>Operating Time :</strong>
            11:00 AM ~ 11:00 PM
          </p>
        </div>
        <div className="d-flex align-items-center">
          <p className="iconsArea">
            <FontAwesomeIcon
              className="icon"
              color="white"
              icon={faMapMarkerAlt}
            />
          </p>
          <p className="textAreaLocation">
            No. 01-33A, Glomac Centro, Jalan <br /> Teratai PJU 6A, Mukim Pekan
            Kayu Ara,
            <br /> 47400 Petaling Jaya, Selangor
          </p>
        </div>
      </div>
      <div className="mapsDiv"> </div>
      <div className="footerLinks d-flex">
        <a href="/">
          <img src={whatsappLogo} alt="whatsapp loogo" />
        </a>
        <a href="/">
          {" "}
          <img src={faceBookLogo} alt="fb logo" />
        </a>
        <a href="/">
          {" "}
          <img src={instragramLogo} alt="instragram logo" />
        </a>
      </div>
    </section>
  );
};

export default Info;
