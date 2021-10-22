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
  beverageRef,
  headerRef,
  scrollTo,
}) => {
  return (
    <nav id="navBar" className="navigationBar">
      <div className="d-flex" ref={headerRef}>
        <button
          className={`header_link ${
            visibleSection === "burger" ? "selected" : "categoryBtn"
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
            visibleSection === "pizza" ? "selected" : "categoryBtn"
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
            visibleSection === "biriyani" ? "selected" : "categoryBtn"
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
            visibleSection === "rice" ? "selected" : "categoryBtn"
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
            visibleSection === "pasta" ? "selected" : "categoryBtn"
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
            visibleSection === "juice" ? "selected" : "categoryBtn"
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
            visibleSection === "beverage" ? "selected" : "categoryBtn"
          }`}
          onClick={() => {
            scrollTo(beverageRef.current);
          }}
        >
          Beverage
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
