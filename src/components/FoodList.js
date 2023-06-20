import { React, useEffect, useState } from "react";
import FoodItem from "./FoodItem";

function FoodList() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/foods")
      .then((r) => r.json())
      .then((foods) => setFoods(foods));
  }, []);

  return (
    <section id="food-list">
      {foods.map((food) => (
        <FoodItem key={food.id} food={food} />
      ))}
    </section>
  );
}

export default FoodList;
