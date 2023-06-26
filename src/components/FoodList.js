import { React } from "react";
import FoodItem from "./FoodItem";

function FoodList({ handleSaveButton, foods, isFoodSaved }) {
  return (
    <div id="food-list">
      {foods.map((food) => (
        <FoodItem
          key={food.id}
          food={food}
          handleSaveButton={handleSaveButton}
          isFoodSaved={isFoodSaved}
        />
      ))}
    </div>
  );
}

export default FoodList;
