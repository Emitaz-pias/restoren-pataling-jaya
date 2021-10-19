import React, { useRef } from "react";
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
  return (
    <nav
      style={{ scrollMarginLeft: window.scrollY > 300 ? 600 : 100 }}
      className="navigationBar"
    >
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
          Briyani
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
          Juice
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
