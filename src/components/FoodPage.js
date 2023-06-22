import React, { useEffect, useState } from "react";
import FoodList from "./FoodList";
import SavedFoods from "./SavedFoods";

function FoodPage() {
  const [savedFoods, setSavedFoods] = useState([]);
  const [isSaveClicked, setIsSaveClicked] = useState(false);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/foods")
      .then((r) => r.json())
      .then((foods) => setFoods(foods));
  }, []);

  useEffect(() => {
    if (isSaveClicked) {
      setIsSaveClicked(false);
    }
  }, [isSaveClicked]);

  function handleSaveButton(food) {
    setIsSaveClicked(true);
    const isFoodSaved = savedFoods.some(
      (savedFood) => savedFood.id === food.id
    );

    if (!isFoodSaved) {
      const newSavedFoods = [...savedFoods, food];
      setSavedFoods(newSavedFoods);
    } else if (isFoodSaved) {
      const savedFoodsRestored = savedFoods.filter(
        (foodToDelete) => foodToDelete.id !== food.id
      );
      setSavedFoods(savedFoodsRestored);
    }

    //console.log(savedFoods);
  }
  return (
    <div id="food-page">
      <FoodList handleSaveButton={handleSaveButton} foods={foods} />
      <SavedFoods handleSaveButton={handleSaveButton} savedFoods={savedFoods} />
    </div>
  );
}

export default FoodPage;
