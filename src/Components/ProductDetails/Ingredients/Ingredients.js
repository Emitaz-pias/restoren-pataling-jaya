import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ProductsContext } from "../../../App";
import "./Ingredients.css";

const Ingredients = ({ ingredients }) => {
  const { cart, selectIngredients } = useContext(ProductsContext);
  const [cartData, setCartData] = cart;
  const [indgredients, setIndgredients] = selectIngredients;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // const newCart = [...cartData, (cartData.ingredients = data)];
    setIndgredients(data);
    // setCartData(newCart);
    // post to our order object the data
  };
  // console.log(indgredients, "iscartData");
  return (
    <div className="ingredientsContainer">
      <form onSubmit={handleSubmit(onSubmit)}>
        {ingredients.map((ingredient, index) => (
          <div>
            <div className="d-flex justify-content-between" key={index}>
              <div>
                <input
                  {...register("IngredientsOptions", { required: true })}
                  type="radio"
                  onChange={(e) => handleSubmit(onSubmit(e.target.value))}
                  value={ingredient}
                  id={ingredient}
                  className="form-check-input customRadioStyles"
                />
                <label className="form-check-label" for={ingredient}>
                  {ingredient}
                </label>
              </div>
              <p className="">
                <span className="ms-5 ">+RM.00/each</span>
              </p>
            </div>
            <hr className="hrline" />
          </div>
        ))}
      </form>
    </div>
  );
};

export default Ingredients;
