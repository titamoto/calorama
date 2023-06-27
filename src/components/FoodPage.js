import "./FoodPage.css";
import React, { useEffect, useState } from "react";
import AddFoodForm from "./AddFoodForm";
import FoodList from "./FoodList";
import SavedFoods from "./SavedFoods";
import { Route } from "react-router-dom";

function FoodPage() {
  const [savedFoods, setSavedFoods] = useState([]);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/foods")
      .then((r) => r.json())
      .then((foods) => setFoods(foods));
  }, []);

  function handleSaveButton(food) {
    const isFoodSaved = savedFoods.some(
      (savedFood) => savedFood.id === food.id
    );

    if (!isFoodSaved) {
      const newSavedFoods = [...savedFoods, { ...food, isSaved: true }];
      setSavedFoods(newSavedFoods);
    } else if (isFoodSaved) {
      const savedFoodsRestored = savedFoods.filter(
        (foodToDelete) => foodToDelete.id !== food.id
      );
      setSavedFoods(savedFoodsRestored);
    }
  }

  //console.log(savedFoods);
  return (
    <div className="food-page">
      <Route path="/add-food">
        <AddFoodForm savedFood={savedFoods} />
      </Route>
      <Route exact path="/saved-food">
        <SavedFoods
          handleSaveButton={handleSaveButton}
          savedFoods={savedFoods}
        />
      </Route>
      <Route exact path="/">
        <FoodList
          handleSaveButton={handleSaveButton}
          foods={foods}
          savedFoods={savedFoods}
        />
      </Route>
    </div>
  );
}

export default FoodPage;
