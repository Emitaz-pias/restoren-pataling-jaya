import React, { useRef, useState } from "react";
import "./Category.css";
import "react-multi-carousel/lib/styles.css";
const Category = ({
  visibleSection,
  pizzaRef,
  burgerRef,
  biriyaniRef,
  juiceRef,
  riceRef,
  pastaRef,
  headerRef,
  scrollTo,
  burgerMenuRef,
  pizzaMenuRef,
  biriyaniMenuRef,
  riceMenuRef,
  pastaMenuRef,
  juiceMenuRef,
  shakesMenuRef,
}) => {
  const [scrollingUp, setScrollingUp] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [stoppedScrolling, setStoppedScrolling] = useState(0);
  // console.log("stoppedScrolling", stoppedScrolling);
  let oldScrollY;
  const detectScrollDirection = () => {
    if (oldScrollY > window.scrollY) {
      if (visibleSection === "pizza") {
        const doc = document.getElementById("navBar");
        doc.scrollLeft -= 10;
      }

      if (visibleSection === "biriyani") {
        const doc = document.getElementById("navBar");
        doc.scrollLeft -= 20;
      }

      if (visibleSection === "pasta") {
        const doc = document.getElementById("navBar");
        doc.scrollLeft -= 20;
      }
    }
    oldScrollY = window.scrollY;
  };

  window.addEventListener("scroll", detectScrollDirection);
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
    doc.scrollLeft += 40;
  }
  return (
    <nav id="navBar" className="navigationBar">
      <div className="d-flex" ref={headerRef}>
        <button
          ref={burgerMenuRef}
          type="button"
          className={`header_link ${
            visibleSection === "burger" ? "selected" : ""
          }`}
          onClick={() => {
            scrollTo(burgerRef.current);
          }}
        >
          Burger
        </button>
        <button
          ref={pizzaMenuRef}
          type="button"
          id="piasGi"
          className={`header_link ${
            visibleSection === "pizza" ? "selected" : ""
          }`}
          onClick={() => {
            scrollTo(pizzaRef.current);
          }}
        >
          Pizza
        </button>
        <button
          ref={biriyaniMenuRef}
          type="button"
          className={`header_link ${
            visibleSection === "biriyani" ? "selected" : ""
          }`}
          onClick={() => {
            scrollTo(biriyaniRef.current);
          }}
        >
          Biriyani
        </button>
        <button
          ref={riceMenuRef}
          type="button"
          className={`header_link ${
            visibleSection === "rice" ? "selected" : ""
          }`}
          onClick={() => {
            scrollTo(riceRef.current);
          }}
        >
          Rice
        </button>
        <button
          ref={pastaMenuRef}
          type="button"
          className={`header_link ${
            visibleSection === "pasta" ? "selected" : ""
          }`}
          onClick={() => {
            scrollTo(pastaRef.current);
          }}
        >
          Pasta
        </button>
        <button
          ref={juiceMenuRef}
          type="button"
          className={`header_link ${
            visibleSection === "juice" ? "selected" : ""
          }`}
          onClick={() => {
            scrollTo(juiceRef.current);
          }}
        >
          Juice
        </button>
        <button
          ref={shakesMenuRef}
          type="button"
          className={`header_link ${
            visibleSection === "juice" ? "selected" : ""
          }`}
          onClick={() => {
            scrollTo(juiceRef.current);
          }}
        >
          Shakes
        </button>
        {/* <button
          type="button"
          className={`header_link ${
            visibleSection === "juice" ? "selected" : ""
          }`}
          onClick={() => {
            scrollTo(juiceRef.current);
          }}
        >
          Juice
        </button>
        <button
          type="button"
          className={`header_link ${
            visibleSection === "juice" ? "selected" : ""
          }`}
          onClick={() => {
            scrollTo(juiceRef.current);
          }}
        >
          Juice
        </button>
        <button
          type="button"
          className={`header_link ${
            visibleSection === "juice" ? "selected" : ""
          }`}
          onClick={() => {
            scrollTo(juiceRef.current);
          }}
        >
          Juice
        </button>
        <button
          type="button"
          className={`header_link ${
            visibleSection === "juice" ? "selected" : ""
          }`}
          onClick={() => {
            scrollTo(juiceRef.current);
          }}
        >
          Juice
        </button>
        <button
          type="button"
          className={`header_link ${
            visibleSection === "juice" ? "selected" : ""
          }`}
          onClick={() => {
            scrollTo(juiceRef.current);
          }}
        >
          Juice
        </button> */}
        {/* <button
          type="button"
          className={`header_link ${
            visibleSection === "juice" ? "selected" : ""
          }`}
          onClick={() => {
            scrollTo(juiceRef.current);
          }}
        >
          Juice
        </button>
        <button
          type="button"
          className={`header_link ${
            visibleSection === "juice" ? "selected" : ""
          }`}
          onClick={() => {
            scrollTo(juiceRef.current);
          }}
        >
          Juice
        </button>
        <button
          type="button"
          className={`header_link ${
            visibleSection === "juice" ? "selected" : ""
          }`}
          onClick={() => {
            scrollTo(juiceRef.current);
          }}
        >
          Juice
        </button> */}
      </div>
    </nav>
  );
};

export default Category;
