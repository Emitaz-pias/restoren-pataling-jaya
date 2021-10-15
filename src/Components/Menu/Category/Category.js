import React from "react";
import "./Category.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Category = ({ detect }) => {
  console.log("from category", detect);
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
        <li
          className={`${
            detect === "active burger" && "activeNavItem"
          }   categoryItem`}
          to="/all"
        >
          Burger
        </li>
        <li
          className={`${
            detect === "active pizza" && "activeNavItem"
          }   categoryItem`}
          to="/pizza"
        >
          Pizza
        </li>
        <li
          className={`${
            detect === "active biriyani" && "activeNavItem"
          }   categoryItem`}
          to="/burger"
        >
          Briyani
        </li>
        <li
          className={`${
            detect === "active pasta" && "activeNavItem"
          }   categoryItem`}
          to="/veg"
        >
          Pasta
        </li>
        <li
          className={`${
            detect === "active rice" && "activeNavItem"
          }   categoryItem`}
          to="/sandwitch"
        >
          Rice
        </li>
        <li
          className={`${
            detect === "active rice " && "activeNavItem"
          }   categoryItem`}
          to="/pizza"
        >
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
