import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddOn.css";

const AddOn = ({ addOns }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [addOnsArray, setAddOnsArray] = useState([]);
  const [addonsOptions, setAddonsOptions] = useState([]);

  const onSubmit = (data) => {
    const addNewOptions = [...addOnsArray, data];
    setAddOnsArray(addNewOptions);
    const index = addOnsArray.indexOf(data);
    if (index > -1) {
    } else {
      const previousAddons = [...addonsOptions, data];
      setAddonsOptions(previousAddons);
    }
  };
  console.log("our options");
  return (
    <div className="addOnContainer">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          {/* <p>please choose </p> */}
          <p className="text-secondary">Select up to 4 Add on</p>
        </div>
        <p className="text-secondary">(optional)</p>
      </div>
      <form>
        {addOns.map((addOn, index) => (
          <div>
            <div className="d-flex justify-content-between" key={index}>
              <div>
                <input
                  {...register("addonsOptions", { required: true })}
                  type="checkbox"
                  onChange={(e) => handleSubmit(onSubmit(e.target.value))}
                  value={addOn.name}
                  id={addOn.name}
                  class="form-check-input customRadioStyles"
                />
                <label class="form-check-label" for={addOn.name}>
                  {addOn.name}
                </label>
              </div>
              <p className="">
                <span className="ms-5 ">+{addOn.price}/each</span>
              </p>
            </div>
            <hr className="hrline" />
          </div>
        ))}
      </form>
      {/* {addOns.map((addOn, index) => (
        <div key={index} className="addon mt-3">
          <div className="d-flex justify-content-between">
            <div class="form-check">
              <input
                class="form-check-input customRadioStyles"
                type="radio"
                name={addOn.name}
                id={addOn.name}
                onChange={(e) => {}}
              />
              <label class="form-check-label" for="flexRadioDefault1">
                {addOn.name}
              </label>
            </div>
            <p className="">
              <span className="ms-5 ">+{addOn.price}/each</span>
            </p>
          </div>
          <hr className="hrline" />
        </div>
      ))} */}
      {/* <div className="addon">
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
      </div> */}
      {/* <div className="addon">
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
      </div> */}
      {/* <div className="addon">
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
      </div> */}
    </div>
  );
};

export default AddOn;
