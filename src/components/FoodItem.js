import { React, useState } from "react";

function FoodItem({ food }) {
  const [grams, setGrams] = useState(food.grams);
  const [calories, setCalories] = useState(food.calories);

  function handleGramsChange(e) {
    setGrams(e.target.value);
    setCalories((e.target.value * (food.calories / food.grams)).toFixed(2));
    //setCalories(e.target.value * (food.calories / food.grams));
  }

  function handleCalChange(e) {
    setCalories(e.target.value);
    setGrams(((e.target.value * food.grams) / food.calories).toFixed(2));
  }

  return (
    <section>
      <h4>{food.name}</h4>
      <img src={food.image} alt={food.name} width="100" height="100" />
      <p>{food.type}</p>
      <label>
        <input
          type="number"
          step="1"
          value={grams}
          min="0"
          max="1000"
          onChange={handleGramsChange}
        ></input>
        grams
      </label>
      <label>
        <input
          type="number"
          step="1"
          value={calories}
          min="0"
          onChange={handleCalChange}
        ></input>
        calories
      </label>
    </section>
  );
}

export default FoodItem;
