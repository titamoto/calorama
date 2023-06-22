import React, { useEffect, useState } from "react";
import FoodList from "./FoodList";
import SavedFoods from "./SavedFoods";

function FoodPage() {
  const [savedFoods, setSavedFoods] = useState([]);
  const [isSaveClicked, setIsSaveClicked] = useState(false);

  useEffect(() => {
    if (isSaveClicked) {
      setIsSaveClicked(false);
    }
  }, [isSaveClicked]);

  function handleSaveButton(food) {
    const isFoodSaved = savedFoods.some(
      (savedFood) => savedFood.id === food.id
    );
    setIsSaveClicked(true);
    if (!isFoodSaved) {
      const newSavedFoods = [...savedFoods, food];
      setSavedFoods(newSavedFoods);
      console.log(savedFoods);
    }
  }
  return (
    <div id="food-page">
      <FoodList handleSaveButton={handleSaveButton} />
      <SavedFoods handleSaveButton={handleSaveButton} savedFoods={savedFoods} />
    </div>
  );
}

export default FoodPage;
