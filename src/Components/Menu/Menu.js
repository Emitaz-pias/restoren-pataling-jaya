import React, { useState, useEffect, useRef } from "react";
import Category from "./Category/Category";
import "./Menu.css";
import Slider from "./Slider/Slider";
import Beverage from "../Menu/Category/Beverage/Beverage";
import Biriyani from "../Menu/Category/Biriyani/Biriyani";
import Burger from "../Menu/Category/Burger/Burger";
import Juice from "../Menu/Category/Juice/Juice";
import Pasta from "../Menu/Category/Pasta/Pasta";
import Pizza from "../Menu/Category/Pizza/Pizza";
import Rice from "../Menu/Category/Rice/Rice";

const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = (ele) => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const Menu = () => {
  // const changeBackgroundColor = () => {
  //   // console.log("scrollded is", window.scrollY);
  //   if (window.scrollY < 738 && window.scrollY > 0) {
  //     setActive("active burger");
  //   }
  //   if (window.scrollY < 1476 && window.scrollY > 739) {
  //     setActive("active pizza");
  //   }
  //   if (window.scrollY < 2214 && window.scrollY > 1442) {
  //     setActive("active biriyani");
  //   }
  //   if (window.scrollY < 2952 && window.scrollY > 2140) {
  //     setActive("active pasta");
  //   }
  //   if (window.scrollY < 3690 && window.scrollY > 2828) {
  //     setActive("active rice");
  //   }
  //   if (window.scrollY < 4428 && window.scrollY > 3519) {
  //     setActive("active beverage");
  //   }
  //   if (window.scrollY < 5166 && window.scrollY > 4429) {
  //     setActive("active juice");
  //   }
  // };

  // console.log("from state", active);

  const [visibleSection, setVisibleSection] = useState();

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
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);
  return (
    <section>
      <Slider></Slider>
      <div>
        {/* <Burger />
        <Pizza />
        <Biriyani />
        <Pasta />
        <Rice />
        <Beverage />
        <Juice /> */}
        <div className="top-spacer" />

        <div className="content">
          <Category
            visibleSection={visibleSection}
            headerRef={headerRef}
            burgerRef={burgerRef}
            pizzaRef={pizzaRef}
            pastaRef={pastaRef}
            riceRef={riceRef}
            juiceRef={juiceRef}
            biriyani={biriyaniRef}
            scrollTo={scrollTo}
          />
          <div className="section" id="burger" ref={burgerRef}>
            burger
          </div>
          <div className="section" id="pizza" ref={pizzaRef}>
            pizza
          </div>
          <div className="section" id="pasta" ref={pastaRef}>
            pasta
          </div>
          <div className="section" id="biriyani" ref={biriyaniRef}>
            biriyani
          </div>
          <div className="section" id="juice" ref={juiceRef}>
            juice
          </div>
          <div className="section" id="rice" ref={riceRef}>
            rice
          </div>
        </div>

        <div className="bottom-spacer" />
      </div>
    </section>
  );
};

export default Menu;
