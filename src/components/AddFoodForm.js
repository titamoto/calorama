import React, { useState } from "react";

function AddFoodForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [grams, setGrams] = useState(100);
  const [calories, setCalories] = useState(100);

  function handleSubmit(e) {
    e.preventDefault();
    const foodObject = { name, image, type, grams, calories };
    fetch("http://localhost:3000/foods", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(foodObject),
    }).then((r) => r.json());
    // .then((foodObjects) => console.log(foodObjects));
  }

  return (
    <div id="add-food">
      <h3>Add Food</h3>
      <div className="food-card">
        <form name="add-food-form" onSubmit={handleSubmit}>
          <label>
            name:
            <input
              value={name}
              name="name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            image:
            <input
              value={image}
              name="image"
              type="url"
              onChange={(e) => setImage(e.target.value)}
            />
          </label>
          <label>
            type:
            <input
              value={type}
              name="type"
              type="text"
              onChange={(e) => setType(e.target.value)}
            />
          </label>
          <label>
            grams:
            <input
              name="grams"
              value={grams}
              type="number"
              step="1"
              min="0"
              max="1000"
              onChange={(e) => setGrams(e.target.value)}
            />
          </label>
          <label>
            calories:
            <input
              name="calories"
              value={calories}
              type="number"
              step="1"
              min="0"
              max="1000"
              onChange={(e) => setCalories(e.target.value)}
            />
          </label>
          <button type="submit">save</button>
        </form>
      </div>
    </div>
  );
}

export default AddFoodForm;
