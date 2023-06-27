import { React } from "react";
import FoodItem from "./FoodItem";

function FoodList({ handleSaveButton, foods, savedFoods }) {
  return (
    <div className="food-list">
      {foods &&
        foods.map((food) => {
          const isFoodSaved = savedFoods.some(
            (savedFood) => savedFood.id === food.id
          );
          return (
            <FoodItem
              key={food.id}
              food={food}
              handleSaveButton={handleSaveButton}
              isFoodSaved={isFoodSaved}
            />
          );
        })}
    </div>
  );
}

export default FoodList;
