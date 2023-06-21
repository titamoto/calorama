import React from "react";
import FoodList from "./FoodList";
import SavedFoods from "./SavedFoods";

function FoodPage() {
  return (
    <div id="food-page">
      <FoodList />
      <SavedFoods />
    </div>
  );
}

export default FoodPage;
