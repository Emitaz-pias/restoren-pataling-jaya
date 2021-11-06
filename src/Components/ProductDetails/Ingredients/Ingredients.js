import React from "react";
import "./Ingredients.css";
import { useForm } from "react-hook-form";

const Ingredients = ({ ingredients }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // post to our order object the data
  };
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
                  class="form-check-input customRadioStyles"
                />
                <label class="form-check-label" for={ingredient}>
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
