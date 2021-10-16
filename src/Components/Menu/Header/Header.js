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
  const onSubmit = (data) => console.log(data);

  //
  const handleToggleSearch = () => {
    setOpenSearch(!openSearch);
  };
  // handleSearch
  const handleSearch = () => {};
  return (
    <div className={`${showHeader ? "fixedHeader" : "hideHeader"} bg-white`}>
      <div className="d-flex align-items-center">
        {openSearch ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Search"
              {...register("search", { required: true, maxLength: 80 })}
            />

            <FontAwesomeIcon onClick={handleSubmit(onSubmit)} icon={faSearch} />
          </form>
        ) : (
          <FontAwesomeIcon onClick={handleToggleSearch} icon={faSearch} />
        )}
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
