import {
  faChevronLeft,
  faSearch,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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
  beverageRef,
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
  // console.log(showHeader);
  const [openSearch, setOpenSearch] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setOpenSearch(false);
  };

  //
  const handleToggleSearch = () => {
    setOpenSearch(!openSearch);
  };

  return (
    <div className={`${showHeader ? "fixedHeader" : "hideHeader"} bg-white`}>
      <div
        style={{ height: "2rem", padding: "0.5rem 0 0.4rem 0" }}
        className="d-flex align-items-center  w-100"
      >
        {openSearch ? (
          <div className="w-100">
            <div className="d-flex justify-content-around align-items-center">
              <FontAwesomeIcon
                style={{
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  marginLeft: "-3%",
                }}
                onClick={handleToggleSearch}
                icon={faChevronLeft}
              />
              <form className="mb-2" onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="form-control-md "
                  type="text"
                  placeholder="Search"
                  style={{
                    outline: "none",
                    border: "none",
                    borderBottom: "1px solid black",
                  }}
                  {...register("search", { required: true, maxLength: 80 })}
                />
              </form>
              <FontAwesomeIcon
                style={{
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  position: "relative",
                  left: "7%",
                }}
                className="me-3"
                onClick={handleSubmit(onSubmit)}
                icon={faSearch}
              />
            </div>
          </div>
        ) : (
          <div className=" d-flex align-items-center justify-content-around w-100">
            {/* style={{ position: "relative", left: "40%" }} */}
            <FontAwesomeIcon
              style={{
                fontSize: "1.5rem",
                cursor: "pointer",
                marginLeft: "-12%",
              }}
              onClick={handleToggleSearch}
              icon={faSearch}
            />
            <h2
              className="text-secondary"
              style={{
                fontSize: "19px",
                lineHeight: "23px",
                marginTop: "0.6rem",
                fontFamily: "Cormorant Garamond",
              }}
            >
              SR Bistro
            </h2>
            <FontAwesomeIcon
              style={{
                fontSize: "1.5rem",
                cursor: "pointer",
                marginRight: "-11%",
              }}
              icon={faSignInAlt}
            />
          </div>
        )}
      </div>
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
        showHeader={showHeader}
      />
    </div>
  );
};

export default Header;
