import React from "react";
import "./Remarks.css";

const Remarks = () => {
  return (
    <div className="remarksContainer">
      <div className="d-flex justify-content-between align-items-center">
        <h4>Remark</h4>
        <small className="text-secondary">(optional)</small>
      </div>
      <input
        type="text"
        placeholder="Write any special request *(200 character max)"
        className="remarkText"
      />
    </div>
  );
};

export default Remarks;
