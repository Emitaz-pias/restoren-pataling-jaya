import React, { useContext, useState } from "react";
import "./HomePage.css";
import srLogo from "../../images/244087189_592638525096104_656116708744791639_n (1).jpg";
import homeBanner from "../../images/homeBanner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faInfoCircle,
  faShareAlt,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Menu from "../Menu/Menu";
import Info from "../Info/Info";
import Review from "../Review/Review";

const HomePage = () => {
  const [selected, setSelected] = useState(false);
  const [selectedDiv, setSelectedDiv] = useState("menuDiv");
  const handleSelect = (name) => {
    setSelected(!selected);
    setSelectedDiv(name);
  };
  return (
    <div className="fullPage">
      <div className="homeBg">
        <img className="bannerImg" src={homeBanner} alt="" />
      </div>
      {/* white big div section */}
      <section className="whiteDiv">
        {/* logo div */}
        <div className="logoDiv ms-3">
          <img src={srLogo} alt="sr logo" />
        </div>
        {/* our app body */}

        <div className="whiteBgMainDiv">
          {/* // top setion */}
          <div className="topSection">
            <div className="d-flex">
              <h2 className="text-secondary restoran">
                SR Bistro - Petaling Jaya
              </h2>
              <p className="shareBtn">
                <FontAwesomeIcon size="2x" icon={faShareAlt}></FontAwesomeIcon>
              </p>
            </div>
            <h4 className="halalText">
              Halal{" "}
              <span className="iconBox">
                <FontAwesomeIcon icon={faStar} color="gold"></FontAwesomeIcon>
              </span>{" "}
              <span style={{ marginLeft: "0.42rem" }}> 5.0</span>
            </h4>
          </div>

          {/* menu review and info div */}
          <div className="d-flex">
            {/* menuDiv */}
            <div
              onClick={() => handleSelect("menuDiv")}
              className={`${
                selectedDiv === "menuDiv" && "active"
              } box d-flex justify-content-around align-items-center`}
            >
              <span>
                {" "}
                <FontAwesomeIcon
                  className="customIconMenu "
                  icon={faBars}
                ></FontAwesomeIcon>
              </span>
              <h6 style={{ marginLeft: "0.62rem" }} className="mt-2">
                Menu
              </h6>
            </div>
            {/* reviewdiv */}
            <div
              onClick={() => handleSelect("reviewDiv")}
              className={`${
                selectedDiv === "reviewDiv" && "active"
              } box d-flex justify-content-around align-items-center`}
            >
              <span>
                {" "}
                <FontAwesomeIcon
                  className="customIconR"
                  color="primary "
                  icon={faStar}
                ></FontAwesomeIcon>
              </span>
              <h6
                style={{ marginTop: "0.52rem", marginLeft: "0.62rem" }}
                className=""
              >
                Review
              </h6>
            </div>

            {/* infoDiv */}
            <div
              onClick={() => handleSelect("infoDiv")}
              className={`${
                selectedDiv === "infoDiv" && "active"
              } infoDiv box d-flex  align-items-center`}
            >
              <FontAwesomeIcon
                className="customIconI"
                icon={faInfoCircle}
              ></FontAwesomeIcon>
              <h5
                style={{ marginLeft: "0.62rem", fontSize: "1.1rem" }}
                className="mt-1"
              >
                Info
              </h5>
            </div>
          </div>

          {selectedDiv === "menuDiv" && <Menu />}
          {selectedDiv === "reviewDiv" && <Review />}
          {selectedDiv === "infoDiv" && <Info />}
        </div>
      </section>

      <sction></sction>
    </div>
  );
};

export default HomePage;
