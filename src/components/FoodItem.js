import React from "react";

function FoodItem({ food }) {
  return (
    <section>
      <p>{food.name}</p>
      <img src={food.image} alt={food.name} width="100" height="100" />
    </section>
  );
}

export default FoodItem;
