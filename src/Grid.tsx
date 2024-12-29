import React from "react";
import "./styles.css";

const Grid = ({ isSelected, id }) => {
  return (
    <div
      draggable={true}
      id={id}
      className={`box ${isSelected ? "bg-blue" : ""}`}
    ></div>
  );
};

export default Grid;
