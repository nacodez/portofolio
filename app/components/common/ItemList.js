import React from "react";

const ItemList = ({ items, className }) => {
  return (
    <div className="flex flex-wrap justify-evenly gap-1">
      {items?.map((item, index) => (
        <span key={index} className={className}>
          {item}
        </span>
      ))}
    </div>
  );
};

export default ItemList;
