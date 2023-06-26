import React from "react";
import FoodItem from "./FoodItem";

function SavedFoods({ savedFoods, handleSaveButton }) {
  //console.log(savedFoods);
  return (
    <div>
      <h3>Saved Foods</h3>
      {savedFoods.length > 0 ? (
        savedFoods.map((food) => (
          <FoodItem
            key={food.id}
            food={food}
            handleSaveButton={handleSaveButton}
            isFoodSaved={food.isSaved}
          />
        ))
      ) : (
        <p>No saved foods yet</p>
      )}
    </div>
  );
}

export default SavedFoods;
