import React, { useRef } from "react";
import "./Category.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Category = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 100,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 30,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 10,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5,
      slidesToSlide: 3, // optional, default to 1.
    },
  };
  return (
    <nav>
      <Carousel responsive={responsive} swipeable={true}>
        <a className="categoryItem" href="/all">
          All
        </a>
        <a className="categoryItem" href="/fastfood">
          FastFood
        </a>
        <a className="categoryItem" href="/burger">
          Burger
        </a>
        <a className="categoryItem" href="/veg">
          Veg.
        </a>
        <a className="categoryItem" href="/sandwitch">
          Sandwitch
        </a>
        <a className="categoryItem" href="/pizza">
          Pizza
        </a>
        <a className="categoryItem" href="/pastry">
          Pastry
        </a>
        <a className="categoryItem" href="/browny">
          Browny
        </a>
        <a className="categoryItem" href="/nasilemaks">
          NasiLemaks
        </a>
        <a className="categoryItem" href="/anything">
          Ghorar Dim
        </a>
      </Carousel>
      ;
    </nav>
  );
};

export default Category;
