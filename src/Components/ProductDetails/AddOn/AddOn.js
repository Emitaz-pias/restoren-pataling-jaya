import React from "react";
import "./AddOn.css";

const AddOn = () => {
  return (
    <div className="addOnContainer">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          {/* <p>please choose </p> */}
          <p className="text-secondary">Select up to 4 Add on</p>
        </div>
        <p className="text-secondary">(optional)</p>
      </div>
      <div className="addon mt-3">
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
              Nasi Putih
            </label>
          </div>
          <p className="ms-5 ps-5">
            <span className="ms-5 ">+RM2.50/each</span>
          </p>
        </div>
        <hr className="hrline" />
      </div>
      <div className="addon">
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
              Telur Mata
            </label>
          </div>
          <p className="ms-5 ps-5">
            <span className="ms-5">+RM2.00/each</span>
          </p>
        </div>
        <hr className="hrline" />
      </div>
      <div className="addon">
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
              Telur Dadar
            </label>
          </div>
          <p className="ms-5 ps-5">
            <span className="ms-5 ">+RM2.10/each</span>
          </p>
        </div>
        <hr className="hrline" />
      </div>
      <div className="addon">
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
              Ayam Goreng
            </label>
          </div>
          <p className="ms-5 ">
            <span className="ms-5">+RM10.00/each</span>
          </p>
        </div>
        <hr className="hrline" />
      </div>
    </div>
  );
};

export default AddOn;
