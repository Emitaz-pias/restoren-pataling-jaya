import React from "react";
import "./Ingredients.css";

const Ingredients = () => {
  return (
    <div className="ingredientsContainer">
      <div className="d-flex justify-content-between align-items-center">
        <p>please choose </p>
        <p className="text-danger">*(required)</p>
      </div>
      <div className="ingredients">
        <div className="d-flex justify-content-between">
          <div class="form-check">
            <input
              class="form-check-input customRadioStyles"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              onChange={(e) => {}}
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Ayam
            </label>
          </div>
          <p className="ms-5 ps-5">
            <span className="ms-5 ps-5">+RM0.00</span>
          </p>
        </div>
        <hr className="hrline" />
      </div>
      <div className="ingredients">
        <div className="d-flex justify-content-between">
          <div class="form-check">
            <input
              class="form-check-input customRadioStyles"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              onChange={(e) => {}}
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Daging
            </label>
          </div>
          <p className="ms-5 ps-5">
            <span className="ms-5 ps-5">+RM0.00</span>
          </p>
        </div>
        <hr className="hrline" />
      </div>
      <div className="ingredients">
        <div className="d-flex justify-content-between">
          <div class="form-check">
            <input
              class="form-check-input customRadioStyles"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              onChange={(e) => {}}
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Udang
            </label>
          </div>
          <p className="ms-5 ps-5">
            <span className="ms-5 ps-5">+RM0.00</span>
          </p>
        </div>
        <hr className="hrline" />
      </div>
      <div className="ingredients">
        <div className="d-flex justify-content-between">
          <div class="form-check">
            <input
              class="form-check-input customRadioStyles"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              onChange={(e) => {}}
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Sotong
            </label>
          </div>
          <p className="ms-5 ps-5">
            <span className="ms-5 ps-5">+RM0.00</span>
          </p>
        </div>
        <hr className="hrline" />
      </div>
    </div>
  );
};

export default Ingredients;
