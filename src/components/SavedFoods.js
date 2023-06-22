import React from "react";
import FoodItem from "./FoodItem";

function SavedFoods({ savedFoods, handleSaveButton }) {
  console.log(savedFoods);

  return (
    <div>
      {savedFoods &&
        savedFoods.map((food) => (
          <FoodItem
            key={food.id}
            food={food}
            handleSaveButton={handleSaveButton}
          />
        ))}
    </div>
  );
}

export default SavedFoods;
