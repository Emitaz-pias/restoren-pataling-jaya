import React, { useState, useEffect, useRef, useContext } from "react";
import "./Menu.css";
import Slider from "./Slider/Slider";
import Beverage from "../Menu/Category/Beverage/Beverage";
import Biriyani from "../Menu/Category/Biriyani/Biriyani";
import Burger from "../Menu/Category/Burger/Burger";
import Juice from "../Menu/Category/Juice/Juice";
import Pasta from "../Menu/Category/Pasta/Pasta";
import Pizza from "../Menu/Category/Pizza/Pizza";
import Rice from "../Menu/Category/Rice/Rice";
import Category from "./Category/Category";
import Header from "./Header/Header";
import Cart from "./Footer/Cart/Cart";
import { ProductsContext } from "../../App";
import ProductDetails from "../ProductDetails/ProductDetail/ProductDetails";
import CartPage from "../CartPage/CartPage";

const getDimensions = (ele) => {
  if (ele !== null || ele !== undefined) {
    const { height } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;

    return {
      height,
      offsetTop,
      offsetBottom,
    };
  } else {
    return;
  }
};
const scrollTo = (ele) => {
  if (ele !== null || ele !== undefined) {
    ele.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const Menu = () => {
  const [visibleSection, setVisibleSection] = useState();
  const { productSelection, detailsPage, showCheckoutPage } =
    useContext(ProductsContext);
  const [showDetails, setShowDetails] = detailsPage;
  // console.log("show details from menu pae", showDetails);

  const headerRef = useRef(null);
  const burgerRef = useRef(null);
  const pizzaRef = useRef(null);
  const pastaRef = useRef(null);
  const biriyaniRef = useRef(null);
  const juiceRef = useRef(null);
  const beverageRef = useRef(null);
  const riceRef = useRef(null);

  const sectionRefs = [
    { section: "burger", ref: burgerRef },
    { section: "pizza", ref: pizzaRef },
    { section: "pasta", ref: pastaRef },
    { section: "biriyani", ref: biriyaniRef },
    { section: "juice", ref: juiceRef },
    { section: "beverage", ref: beverageRef },
    { section: "rice", ref: riceRef },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;

        if (ele !== null) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }

      let oldScrollY;
      if (oldScrollY > window.scrollY) {
        if (visibleSection === "pizza") {
          const doc = document.getElementById("navBar");
          doc.scrollLeft -= 10;
        }

        if (visibleSection === "biriyani") {
          const doc = document.getElementById("navBar");
          doc.scrollLeft -= 40;
        }

        if (visibleSection === "pasta") {
          const doc = document.getElementById("navBar");
          doc.scrollLeft -= 70;
        }
      }
      oldScrollY = window.scrollY;
    };

    // header category scroll
    if (visibleSection === "pizza") {
      const doc = document.getElementById("navBar");
      doc.scrollLeft += 10;
    }

    if (visibleSection === "biriyani") {
      const doc = document.getElementById("navBar");
      doc.scrollLeft += 20;
    }

    if (visibleSection === "pasta") {
      const doc = document.getElementById("navBar");
      doc.scrollLeft += 90;
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);
  return (
    <>
      {showDetails ? (
        <ProductDetails />
      ) : (
        <main>
          {" "}
          <Slider></Slider>
          <div>
            <div className="content">
              {window.scrollY > 360 ? (
                <Header
                  visibleSection={visibleSection}
                  headerRef={headerRef}
                  burgerRef={burgerRef}
                  pizzaRef={pizzaRef}
                  pastaRef={pastaRef}
                  riceRef={riceRef}
                  juiceRef={juiceRef}
                  biriyaniRef={biriyaniRef}
                  beverageRef={beverageRef}
                  scrollTo={scrollTo}
                />
              ) : (
                <div>
                  <Category
                    visibleSection={visibleSection}
                    headerRef={headerRef}
                    burgerRef={burgerRef}
                    pizzaRef={pizzaRef}
                    pastaRef={pastaRef}
                    riceRef={riceRef}
                    juiceRef={juiceRef}
                    biriyaniRef={biriyaniRef}
                    beverageRef={beverageRef}
                    scrollTo={scrollTo}
                  />
                </div>
              )}

              <div className="section text-center" id="burger" ref={burgerRef}>
                <Burger />
              </div>
              <div className="section text-center" id="pizza" ref={pizzaRef}>
                <Pizza />
              </div>
              <div
                className="section text-center"
                id="biriyani"
                ref={biriyaniRef}
              >
                <Biriyani />
              </div>
              <div className="section text-center" id="rice" ref={riceRef}>
                <Rice />
              </div>
              <div className="section text-center" id="pasta" ref={pastaRef}>
                <Pasta />
              </div>

              <div className="section text" id="juice" ref={juiceRef}>
                <Juice />
              </div>
              <div className="section text" id="beverage" ref={beverageRef}>
                <Beverage />
              </div>
            </div>
            <div className="bottom-spacer" />
          </div>
          {window.scrollY > 370 && <Cart cartBtn={"Cart"} />}
        </main>
      )}
    </>
  );
};

export default Menu;
