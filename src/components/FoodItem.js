import "./FoodItem.css";
import { React, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";

function FoodItem({ food, handleSaveButton, isFoodSaved }) {
  const [grams, setGrams] = useState(food.grams);
  const [calories, setCalories] = useState(food.calories);
  const [isSaved, setIsSaved] = useState(isFoodSaved);

  useEffect(() => {
    setIsSaved(isFoodSaved);
  }, [isFoodSaved]);

  function handleGramsChange(e) {
    setGrams(e.target.value);
    setCalories((e.target.value * (food.calories / food.grams)).toFixed(2));
  }

  function handleCalChange(e) {
    setCalories(e.target.value);
    setGrams(((e.target.value * food.grams) / food.calories).toFixed(2));
  }

  function handleSaveClick() {
    setIsSaved(!isSaved);
    handleSaveButton(food);
  }

  return (
    <div className="food-card">
      <h4>{food.name}</h4>
      <p className="food-type">{food.type}</p>
      <img src={food.image} alt={food.name} width="200" height="200" />

      <TextField
        className="numbers-input"
        size="small"
        label="grams"
        name="grams"
        type="number"
        step="1"
        value={grams}
        min="0"
        max="1000"
        margin="dense"
        onChange={handleGramsChange}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        className="numbers-input"
        label="calories"
        size="small"
        name="calories"
        type="number"
        step="1"
        value={calories}
        min="0"
        margin="dense"
        onChange={handleCalChange}
        InputLabelProps={{
          shrink: true,
        }}
      />

      {isSaved ? (
        <button type="button" id="delete-food" onClick={handleSaveClick}>
          delete
        </button>
      ) : (
        <button type="button" id="save-food" onClick={handleSaveClick}>
          save
        </button>
      )}
    </div>
  );
}

export default FoodItem;
