import React from "react";
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
        <li className="categoryItem" to="/all">
          Burger
        </li>
        <li className="categoryItem" to="/fastfood">
          Pizza
        </li>
        <li className="categoryItem" to="/burger">
          Briyani
        </li>
        <li className="categoryItem" to="/veg">
          Pasta
        </li>
        <li className="categoryItem" to="/sandwitch">
          Rice
        </li>
        <li className="categoryItem" to="/pizza">
          IceBlended
        </li>
        <li className="categoryItem" to="/pastry">
          Juice
        </li>
        <li className="categoryItem" to="/browny">
          Beverage
        </li>

        <li className="categoryItem" href="/anything">
          GhorarDim
        </li>
      </Carousel>
    </nav>
  );
};

export default Category;
