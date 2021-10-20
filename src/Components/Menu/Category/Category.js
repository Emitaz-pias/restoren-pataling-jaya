import React from "react";
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
}) => {
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
