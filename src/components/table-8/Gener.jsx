/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from "react";

const Gener = ({ value }) => {
  return (
    <div>
      {value?.map((item, i) => {
        return <p key={i}> {item}</p>;
      })}
    </div>
  );
};

export default Gener;
