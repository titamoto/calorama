import "./SavedFoods.css";
import React from "react";
import FoodItem from "./FoodItem";

function SavedFoods({ savedFoods, handleSaveButton }) {
  return (
    <div className="food-list">
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
        <div id="no-saved-foods">
          <p>no saved foods yet...</p>
          <img
            src="./images/lisa-simpsons-dinner.jpg"
            alt="no food"
            width="400px"
          />
        </div>
      )}
    </div>
  );
}

export default SavedFoods;
