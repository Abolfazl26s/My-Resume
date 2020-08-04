import React from "react";

const DownIcon = (props) => {
  return (
    <div
      className="w-100 btn wow animate__headShake"
      data-wow-duration="2s"
      data-wow-iteration="infinite"
    >
      <img src={props.Icon} alt="" />
    </div>
  );
};

export default DownIcon;
