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
            visibleSection === "burger" ? "selected" : "categoryBtn"
          } ${showHeader ? "categoryBtnTop" : "categoryBtn"}`}
          onClick={() => {
            scrollTo(burgerRef.current);
          }}
        >
          Burger
        </button>

        <button
          type="button"
          className={`header_link ${
            visibleSection === "pizza" ? "selected" : "categoryBtn"
          } ${showHeader ? "categoryBtnTop" : "categoryBtn"}`}
          onClick={() => {
            scrollTo(pizzaRef.current);
          }}
        >
          Pizza
        </button>
        <button
          type="button"
          className={`header_link  ${
            visibleSection === "biriyani" ? "selected" : " categoryBtn"
          } ${showHeader ? "categoryBtnTop" : "categoryBtn"}`}
          onClick={() => {
            scrollTo(biriyaniRef.current);
          }}
        >
          Biriyani
        </button>
        <button
          type="button"
          className={`header_link  ${
            visibleSection === "rice" ? "selected" : " categoryBtn"
          } ${showHeader ? "categoryBtnTop" : "categoryBtn"}`}
          onClick={() => {
            scrollTo(riceRef.current);
          }}
        >
          Rice
        </button>
        <button
          type="button"
          className={`header_link  ${
            visibleSection === "pasta" ? "selected" : " categoryBtn"
          } ${showHeader ? "categoryBtnTop" : "categoryBtn"}`}
          onClick={() => {
            scrollTo(pastaRef.current);
          }}
        >
          Pasta
        </button>
        <button
          type="button"
          className={`header_link  ${
            visibleSection === "juice" ? "selected" : "categoryBtn"
          } ${showHeader ? "categoryBtnTop" : "categoryBtn"}`}
          onClick={() => {
            scrollTo(juiceRef.current);
          }}
        >
          Juice
        </button>
        <button
          type="button"
          className={`header_link  ${
            visibleSection === "beverage" ? "selected" : "categoryBtn"
          } ${showHeader ? "categoryBtnTop" : "categoryBtn"}`}
          onClick={() => {
            scrollTo(beverageRef.current);
          }}
        >
          Beverage
        </button>
      </div>
    </nav>
  );
};

export default Category;
