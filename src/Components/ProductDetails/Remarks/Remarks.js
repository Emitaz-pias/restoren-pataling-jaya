import React, { useContext, useState } from "react";
import "./Remarks.css";
import { useForm } from "react-hook-form";
import { ProductsContext } from "../../../App";

const Remarks = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { getRemarks } = useContext(ProductsContext);
  const [remarks, setRemarks] = getRemarks;

  const onSubmit = (data) => {
    setRemarks(data);
  };

  return (
    <div className="remarksContainer">
      <div className="d-flex justify-content-between align-items-center">
        <p>Remark</p>
        <small className="text-secondary">(optional)</small>
      </div>
      <input
        {...register("addonsOptions", { required: true, maxLength: 200 })}
        type="text"
        placeholder="Write any special request *(200 character max)"
        className="remarkText"
        onChange={(e) => handleSubmit(onSubmit(e.target.value))}
      />
    </div>
  );
};

export default Remarks;
