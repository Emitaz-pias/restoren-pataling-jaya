import React, { useContext, useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ProductsContext } from "../../../App";
import "./AddOn.css";

const AddOn = () => {
  const { productSelection, price, addonPrice } = useContext(ProductsContext);
  const [selectedProduct] = productSelection;
  const [addOns, setAddOns] = useState(selectedProduct.addOns);
  const [totalPrice] = price;
  const [addonsPrice, setAddonsPrice] = addonPrice;

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    // post to our order object the data
  };
  console.log(totalPrice, addonsPrice);

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
        item.quantity === 0 ? (item.quantity = 0) : (item.quantity -= 1);
      }
    });
    setAddOns([...addOns]);
    //setAddonsPrice((parseInt(addOns.price) * addOns.quantity))
  };
  useEffect(() => {
    const getTotal = () => {
      const total = addOns.reduce(
        (total, prd) => total + parseInt(prd.price) * prd.quantity,
        0
      );
      setAddonsPrice(parseInt(totalPrice) + total);
    };
    getTotal();
  }, [addOns, totalPrice, setAddonsPrice]);
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
            <Row className="d-flex justify-content-between" key={index}>
              <Col sm={6}>
                <input
                  {...register("addonsOptions", { required: true })}
                  type="checkbox"
                  onChange={(e) => handleSubmit(onSubmit(e.target.value))}
                  value={addOn.name}
                  id={addOn.name}
                  className="form-check-input customRadioStyles"
                />
                <label className="form-check-label" for={addOn.name}>
                  {addOn.name}
                </label>
              </Col>
              <Col sm={6}>
                <Row>
                  <Col sm={6}>
                    <p className="">
                      <span className="ms-5 ">+{addOn.price}/each</span>
                    </p>
                  </Col>
                  <Col sm={6}>
                    <div>
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
                  </Col>
                </Row>
              </Col>
            </Row>
            <hr className="hrline" />
          </div>
        ))}
      </form>
    </div>
  );
};

export default AddOn;

// {/* {addOns.map((addOn, index) => (
//         <div key={index} className="addon mt-3">
//           <div className="d-flex justify-content-between">
//             <div className="form-check">
//               <input
//                 className="form-check-input customRadioStyles"
//                 type="radio"
//                 name={addOn.name}
//                 id={addOn.name}
//                 onChange={(e) => {}}
//               />
//               <label className="form-check-label" for="flexRadioDefault1">
//                 {addOn.name}
//               </label>
//             </div>
//             <p className="">
//               <span className="ms-5 ">+{addOn.price}/each</span>
//             </p>
//           </div>
//           <hr className="hrline" />
//         </div>
//       ))} */}
// {/* <div className="addon">
//         <div className="d-flex justify-content-between">
//           <div className="form-check">
//             <input
//               className="form-check-input customRadioStyles"
//               type="radio"
//               name="flexRadioDefault"
//               id="flexRadioDefault1"
//               onChange={(e) => {}}
//             />
//             <label className="form-check-label" for="flexRadioDefault1">
//               Telur Mata
//             </label>
//           </div>
//           <p className="ms-5 ps-5">
//             <span className="ms-5">+RM2.00/each</span>
//           </p>
//         </div>
//         <hr className="hrline" />
//       </div> */}
// {/* <div className="addon">
//         <div className="d-flex justify-content-between">
//           <div className="form-check">
//             <input
//               className="form-check-input customRadioStyles"
//               type="radio"
//               name="flexRadioDefault"
//               id="flexRadioDefault1"
//               onChange={(e) => {}}
//             />
//             <label className="form-check-label" for="flexRadioDefault1">
//               Telur Dadar
//             </label>
//           </div>
//           <p className="ms-5 ps-5">
//             <span className="ms-5 ">+RM2.10/each</span>
//           </p>
//         </div>
//         <hr className="hrline" />
//       </div> */}
// {/* <div className="addon">
//         <div className="d-flex justify-content-between">
//           <div className="form-check">
//             <input
//               className="form-check-input customRadioStyles"
//               type="radio"
//               name="flexRadioDefault"
//               id="flexRadioDefault1"
//               onChange={(e) => {}}
//             />
//             <label className="form-check-label" for="flexRadioDefault1">
//               Ayam Goreng
//             </label>
//           </div>
//           <p className="ms-5 ">
//             <span className="ms-5">+RM10.00/each</span>
//           </p>
//         </div>
//         <hr className="hrline" />
//       </div> */}
