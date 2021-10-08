import React, { useState } from "react";
import "./HomePage.css";
import srLogo from "../images/244087189_592638525096104_656116708744791639_n (1).jpg";
import bannerPic from "../images/243989833_907718653499314_1268376659528686661_n.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faInfoCircle,
  faShareAlt,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu/Menu";
import Info from "./Info/Info";
const HomePage = () => {
  const [selected, setSelected] = useState(false);
  const [selectedDiv, setSelectedDiv] = useState("menuDiv");
  const handleSelect = (name) => {
    setSelected(!selected);
    setSelectedDiv(name);
  };
  console.log("slected", selectedDiv);
  return (
    <div className="fullPage">
      <div className="homeBg  ">
        <img className="bannerImg" src={bannerPic} alt="" />
      </div>
      {/* white big div section */}
      <section className="whiteDiv">
        {/* logo div */}
        <div className="logoDiv ms-3">
          <img src={srLogo} alt="sr logo" />
        </div>
        <div className="whiteBgMainDiv">
          {/* // top setion */}
          <div className="topSection mt-5">
            <div className="d-flex justify-content-between">
              <h2 className="text-secondary restoran">
                SR Bistro - Petaling Jaya
              </h2>
              <p className="shareBtn">
                <FontAwesomeIcon icon={faShareAlt}></FontAwesomeIcon>
              </p>
            </div>
            <h4 className="halalText">
              Halal{" "}
              <span className="iconBox">
                <FontAwesomeIcon icon={faStar} color="gold"></FontAwesomeIcon>
              </span>{" "}
              <span className="ms-3"> 5.0</span>
            </h4>
          </div>

          {/* menu and info div */}
          <div className="d-flex justify-content-around align-items-center mt-5">
            <div
              onClick={() => handleSelect("menuDiv")}
              className={`${
                selectedDiv === "menuDiv" && "active"
              } box d-flex justify-content-around align-items-center`}
            >
              <span>
                {" "}
                <FontAwesomeIcon size="2x" icon={faBars}></FontAwesomeIcon>
              </span>
              <h5 className="mt-2">Menu</h5>
            </div>
            <div
              onClick={() => handleSelect("infoDiv")}
              className={`${
                selectedDiv === "infoDiv" && "active"
              } infoDiv box d-flex justify-content-around align-items-center`}
            >
              <FontAwesomeIcon size="2x" icon={faInfoCircle}></FontAwesomeIcon>
              <h5 className="mt-1">info</h5>
            </div>
          </div>
          {selectedDiv === "menuDiv" ? <Menu /> : <Info />}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
