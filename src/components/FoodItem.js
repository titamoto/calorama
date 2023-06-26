import { React, useState } from "react";

function FoodItem({ food, handleSaveButton }) {
  const [grams, setGrams] = useState(food.grams);
  const [calories, setCalories] = useState(food.calories);
  const [isFoodSaved, setIsFoodSaved] = useState(false);

  function handleGramsChange(e) {
    setGrams(e.target.value);
    setCalories((e.target.value * (food.calories / food.grams)).toFixed(2));
  }

  function handleCalChange(e) {
    setCalories(e.target.value);
    setGrams(((e.target.value * food.grams) / food.calories).toFixed(2));
  }

  function handleSaveClick() {
    setIsFoodSaved(!isFoodSaved);
    handleSaveButton(food);
  }

  return (
    <div className="food-card">
      <h4>{food.name}</h4>
      <img src={food.image} alt={food.name} width="200" height="200" />
      <p>{food.type}</p>
      <label>
        <input
          name="grams"
          type="number"
          step="1"
          value={grams}
          min="0"
          max="1000"
          onChange={handleGramsChange}
        ></input>
        <p>grams</p>
      </label>
      <label>
        <input
          name="calories"
          type="number"
          step="1"
          value={calories}
          min="0"
          onChange={handleCalChange}
        ></input>
        <p>calories</p>
      </label>
      {isFoodSaved ? (
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
