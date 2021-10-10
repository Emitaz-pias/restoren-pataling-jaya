import React from "react";
import "./Slider.css";
import slide1 from "../../../images/pic1.jpg";
import slide2 from "../../../images/pic2.jpg";
import slide3 from "../../../images/pic3.jpg";

const OurSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h4 className="hotDealTitile">Hot deals </h4>
      <div className="">
        <div className="sliderSection">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators bg-danger">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div
              style={{
                marginLeft: "2.9%",
                marginRight: "2%",
                width: "92%",
              }}
              class="carousel-inner"
            >
              <div class="carousel-item active">
                <div
                  className="d-block"
                  style={{ backgroundColor: "white", height: "20rem" }}
                >
                  <img
                    style={{ borderRadius: "10px" }}
                    className="sliderSectionImg w-100"
                    src={slide1}
                    alt="First slide"
                  />
                  <div
                    className="d-flex justify-content-between"
                    style={{
                      color: "black",
                      marginTop: "0.625rem",
                      lineHeight: "19.2px",
                    }}
                  >
                    <p>Nasi Kukus Ayam Berempah</p>
                    <small className="text-secondary">RM5.00</small>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div
                  className="d-block"
                  style={{ backgroundColor: "white", height: "20rem" }}
                >
                  <img
                    style={{ borderRadius: "10px" }}
                    className="sliderSectionImg w-100"
                    src={slide2}
                    alt="First slide"
                  />
                  <div
                    className="d-flex  justify-content-between "
                    style={{ color: "black", marginTop: "0.625rem" }}
                  >
                    <p style={{ lineHeight: "19.2px", fontSize: "15px" }}>
                      Nasi Kukus Ayam Goreng Kunyit
                    </p>
                    <small className="text-secondary">RM6.00</small>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div
                  className="d-block"
                  style={{
                    backgroundColor: "white",
                    height: "20rem",
                  }}
                >
                  <img
                    style={{ borderRadius: "10px" }}
                    className="sliderSectionImg w-100"
                    src={slide3}
                    alt="First slide"
                  />
                  <div
                    className="d-flex  justify-content-between"
                    style={{ color: "black", marginTop: "0.625rem" }}
                  >
                    <p style={{ lineHeight: "19.2px", fontSize: "15px" }}>
                      Mee Goreng Mamak
                    </p>
                    <small className="text-secondary">RM6.00</small>
                  </div>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
              style={{ position: "absolute", top: "-8.5rem" }}
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
              style={{ position: "absolute", top: "-8.5rem" }}
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSlider;
