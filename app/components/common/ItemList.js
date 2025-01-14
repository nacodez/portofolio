import React from "react";

const ItemList = ({ items, className }) => {
  return (
    <div className="flex justify-evenly">
      {items?.map((item, index) => (
        <span key={index} className={className}>
          {item}
        </span>
      ))}
    </div>
  );
};

export default ItemList;
