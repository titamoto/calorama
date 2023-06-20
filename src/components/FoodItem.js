import React from "react";

function FoodItem({ food }) {
  return (
    <div>
      <p>{food.name}</p>
    </div>
  );
}

export default FoodItem;
