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

// import Map from "../Map/Map";

const Info = () => {
  return (
    <section className="infoSection">
      <div className="iconsDiv">
        <div className="d-flex align-items-center">
          <p className="iconsArea iconShop ">
            {" "}
            <FontAwesomeIcon
              id="iconShop"
              className="icon"
              color="white"
              icon={faShoppingBag}
            ></FontAwesomeIcon>
          </p>
          <p className="textAreaResName">SR Bistro</p>
        </div>
        <div className="d-flex  align-items-center">
          <p className="iconsArea iconPhone">
            <FontAwesomeIcon
              className="icon"
              color="white"
              icon={faPhoneAlt}
            ></FontAwesomeIcon>
          </p>
          <p className="textAreaPhone"> +60182698144</p>
        </div>
        <div className="d-flex align-items-center ">
          <p className="iconsArea iconHistory">
            <FontAwesomeIcon
              className="icon"
              color="white"
              icon={faHistory}
            ></FontAwesomeIcon>
          </p>
          <p className="textAreaOpen">
            <strong>Operating Time :</strong>
            8:00 AM ~ 10:00 PM
          </p>
        </div>
        <div className="d-flex align-items-center">
          <p className="iconsArea iconL">
            <FontAwesomeIcon
              className="icon"
              color="white"
              icon={faMapMarkerAlt}
            />
          </p>
          <p className="textAreaLocation">
            No.58, Blok G, Jalan 17/1A, Seksyen17, 46400 Petaling Jaya, Selangor
          </p>
        </div>
      </div>
      <div className="mapsDiv text-center">
        <h5>here will be our map</h5>{" "}
      </div>
      <div className="footerLinks d-flex justify-content-center">
        <a href="https://wa.me/+60182698144">
          <img src={whatsappLogo} alt="whatsapp loogo" />
        </a>
        <a href="https://www.facebook.com/srbistro17">
          {" "}
          <img src={faceBookLogo} alt="fb logo" />
        </a>
        <a href="https://www.instagram.com/srbistro17">
          {" "}
          <img src={instragramLogo} alt="instragram logo" />
        </a>
      </div>
    </section>
  );
};

export default Info;
