import { faSearch } from "@fortawesome/free-solid-svg-icons";
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
    setOpenSearch(true);
  };

  return (
    <div className={`${showHeader ? "fixedHeader" : "hideHeader"} bg-white`}>
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
      <div className="d-flex align-items-center  w-100">
        {openSearch ? (
          <form
            style={{ position: "relative", left: "20%" }}
            className="mb-2"
            onSubmit={handleSubmit(onSubmit)}
          >
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

            {/* <FontAwesomeIcon
              className="me-3"
              onClick={handleSubmit(onSubmit)}
              icon={faSearch}
            /> */}
          </form>
        ) : (
          <div style={{ position: "relative", left: "40%" }}>
            <FontAwesomeIcon
              size="2x"
              onClick={handleToggleSearch}
              icon={faSearch}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
