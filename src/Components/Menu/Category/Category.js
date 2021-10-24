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
  showHeader,
}) => {
  return (
    <nav
      id="navBar"
      className={`${showHeader ? "navigationBarTop" : " navigationBar"}`}
    >
      <div className="d-flex" ref={headerRef}>
        <button
          className={`header_link ${
            visibleSection === "burger"
              ? "selected"
              : "" && showHeader
              ? "categoryBtn"
              : "categoryBtnTop"
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
            visibleSection === "pizza"
              ? "selected"
              : "" && showHeader
              ? "categoryBtn"
              : " categoryBtnTop"
          }`}
          onClick={() => {
            scrollTo(pizzaRef.current);
          }}
        >
          Pizza
        </button>
        <button
          type="button"
          className={`header_link  ${
            visibleSection === "biriyani"
              ? "selected"
              : "" && showHeader
              ? " categoryBtn"
              : "categoryBtnTop"
          }`}
          onClick={() => {
            scrollTo(biriyaniRef.current);
          }}
        >
          Biriyani
        </button>
        <button
          type="button"
          className={`header_link  ${
            visibleSection === "rice"
              ? "selected"
              : "" && showHeader
              ? " categoryBtn"
              : "categoryBtnTop"
          }`}
          onClick={() => {
            scrollTo(riceRef.current);
          }}
        >
          Rice
        </button>
        <button
          type="button"
          className={`header_link  ${
            visibleSection === "pasta"
              ? "selected"
              : "" && showHeader
              ? " categoryBtn"
              : "categoryBtnTop"
          }`}
          onClick={() => {
            scrollTo(pastaRef.current);
          }}
        >
          Pasta
        </button>
        <button
          type="button"
          className={`header_link  ${
            visibleSection === "juice"
              ? "selected"
              : "" && showHeader
              ? " categoryBtn"
              : "categoryBtnTop"
          }`}
          onClick={() => {
            scrollTo(juiceRef.current);
          }}
        >
          Juice
        </button>
        <button
          type="button"
          className={`header_link  ${
            visibleSection === "beverage"
              ? "selected"
              : "" && showHeader
              ? " categoryBtn"
              : "categoryBtnTop"
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
