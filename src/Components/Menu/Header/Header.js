import React, { useEffect, useState } from "react";
import Category from "../Category/Category";
import "./Header.css";
const Header = ({
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
  const [showHeader, setShowHeader] = useState(false);
  useEffect(() => {
    if (window.scrollY > 370) {
      setShowHeader(true);
    }
    if (window.scrollY < 360) {
      setShowHeader(false);
    }
  }, [window.scrollY]);
  console.log(showHeader);
  return (
    <div className={`${showHeader ? "fixedHeader" : "hideHeader"}`}>
      <div className="d-flex align-items-center">
        <input placeholder="search" />
        <h2>SR Bistro</h2>
      </div>
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
    </div>
  );
};

export default Header;
