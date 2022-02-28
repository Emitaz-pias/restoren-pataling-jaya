import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ProductsContext } from "../../../App";
import "./AddOn.css";

const AddOn = () => {
  const { productSelection, price, addonPrice, selectAddons } =
    useContext(ProductsContext);

  const [selectedProduct] = productSelection;
  const [addOns, setAddOns] = useState(selectedProduct.addOns);
  const [selectedAddons, setSelectedAddons] = selectAddons;
  const [totalPrice, setTotalPrice] = price;
  const [addonsPrice, setAddonsPrice] = addonPrice;

  const { register } = useForm();

  console.log(totalPrice, addonsPrice);

  useEffect(() => {
    const getTotal = () => {
      const total = addOns.reduce(
        (total, prd) => total + parseInt(prd.price) * prd.quantity,
        0
      );
      setAddonsPrice(parseInt(totalPrice) + total);
    };
    getTotal();
  }, [addOns, totalPrice, setAddonsPrice, addonsPrice]);

  const hiddenGame = (index, value) => {
    let val = index.toString();
    const select = document.getElementById(val);
    select.classList.toggle("disBlock");
    var chb = document.getElementsByClassName('chk');

    if (chb[index].checked) {
      addOns.forEach((item) => {
        if (item.name.toString() === value.toString()) {
          item.quantity = 1;
          setSelectedAddons([...selectedAddons, item])
        }
      });
      setAddOns([...addOns]);
    }
    if (!chb[index].checked) {
      addOns.forEach((item) => {
        if (item.name.toString() === value.toString()) {
          item.quantity = 0;
        }
      });
      setAddOns([...addOns]);
      const deleItem = selectedAddons.filter(d => d.name !== value.toString())
      setSelectedAddons(deleItem)
    }
  };

  const increment = (name) => {
    addOns.forEach((item) => {
      if (item.name.toString() === name.toString()) {
        item.quantity += 1;
      }
    });
    setAddOns([...addOns]);
    //setAddonsPrice((parseInt(addOns.price) * addOns.quantity))
  };

  const decrement = (name) => {
    addOns.forEach((item) => {
      if (item.name.toString() === name.toString()) {
        item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
      }
    });
    setAddOns([...addOns]);
    //setAddonsPrice((parseInt(addOns.price) * addOns.quantity))
  };

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
          <div key={index}>
            <div className="d-flex justify-content-between" key={index}>
              <div>
                <input
                  {...register("addonsOptions", { required: true })}
                  type="checkbox"
                  onClick={(e) => hiddenGame(index, e.target.value)}
                  value={addOn.name}
                  id={addOn.name}
                  active
                  className="form-check-input customRadioStyles chk" />
                <label className="form-check-label" for={addOn.name}>
                  {addOn.name}
                </label>
              </div>

              <div className="d-flex justify-content-between">
                <p className="">
                  <span className="">+{addOn.price}/each</span>
                </p>
                <div className="ms-5 disBlock" id={index}>
                  <span
                    className="decBtn"
                    onClick={() => decrement(addOn.name)}
                  >
                    -
                  </span>
                  <span>{addOn.quantity}</span>
                  <span
                    className="incBtn"
                    onClick={() => increment(addOn.name)}
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
            <hr className="hrline" />
          </div>
        ))
        }
      </form >
    </div >
  );
};

export default AddOn;