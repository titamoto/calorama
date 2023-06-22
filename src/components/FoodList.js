import { React } from "react";
import FoodItem from "./FoodItem";

function FoodList({ handleSaveButton, foods }) {
  return (
    <div id="food-list">
      {foods.map((food) => (
        <FoodItem
          key={food.id}
          food={food}
          handleSaveButton={handleSaveButton}
        />
      ))}
    </div>
  );
}

export default FoodList;
