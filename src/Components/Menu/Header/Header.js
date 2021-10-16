import { faChevronLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
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
        style={{ height: "4rem" }}
        className="d-flex align-items-center  w-100"
      >
        {openSearch ? (
          <div className="d-flex justify-content-around align-items-center w-100">
            <FontAwesomeIcon
              style={{ fontSize: "1.5rem", cursor: "pointer" }}
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
              style={{ fontSize: "1.5rem", cursor: "pointer" }}
              className="me-3"
              onClick={handleSubmit(onSubmit)}
              icon={faSearch}
            />
          </div>
        ) : (
          <div
            style={{ height: "4rem" }}
            className=" d-flex align-items-center justify-content-around w-100"
          >
            {/* style={{ position: "relative", left: "40%" }} */}
            <FontAwesomeIcon
              style={{ fontSize: "1.5rem", cursor: "pointer" }}
              onClick={handleToggleSearch}
              icon={faSearch}
            />
            <p style={{ fontSize: "1.5rem", marginTop: "0.6rem" }}>SR Bistro</p>
            <button
              style={{
                height: "1.8rem",
                width: "5rem",
                borderRadius: "7px",
                border: "none",
                color: "white",
                paddingBottom: "0.5rem",
              }}
              className="bg-dark"
            >
              LogIn
            </button>
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
        biriyani={biriyaniRef}
        scrollTo={scrollTo}
      />
    </div>
  );
};

export default Header;
