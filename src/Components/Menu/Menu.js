import React, { useState, useEffect, useRef } from "react";
import "./Menu.css";
import Slider from "./Slider/Slider";
// import Beverage from "../Menu/Category/Beverage/Beverage";
// import Biriyani from "../Menu/Category/Biriyani/Biriyani";
// import Burger from "../Menu/Category/Burger/Burger";
// import Juice from "../Menu/Category/Juice/Juice";
// import Pasta from "../Menu/Category/Pasta/Pasta";
// import Pizza from "../Menu/Category/Pizza/Pizza";
// import Rice from "../Menu/Category/Rice/Rice";
import Header from "./Header/Header";

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
  const [visibleSection, setVisibleSection] = useState();
  const [triggeredScroll, setTriggeredScroll] = useState(false);
  // console.log(triggeredScroll);
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
        const em = document.getElementById("rice");
        if (window.scrollY > 370) {
          if (em === ele) {
            setTriggeredScroll(true);
          } else {
            setTriggeredScroll(false);
          }
        }

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
          <Header
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

          <div className="section text-center" id="burger" ref={burgerRef}>
            burger
          </div>
          <div className="section text-center" id="pizza" ref={pizzaRef}>
            pizza
          </div>
          <div className="section text-center" id="biriyani" ref={biriyaniRef}>
            biriyani
          </div>
          <div className="section text-center" id="rice" ref={riceRef}>
            <div className="text-danger"> rice</div>
          </div>
          <div className="section text-center" id="pasta" ref={pastaRef}>
            pasta
          </div>

          <div className="section text" id="juice" ref={juiceRef}>
            juice
          </div>
        </div>

        <div className="bottom-spacer" />
      </div>
    </section>
  );
};

export default Menu;
