import "./AddFoodForm.css";
import React, { useState } from "react";

function AddFoodForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [grams, setGrams] = useState(100);
  const [calories, setCalories] = useState(100);
  const [message, setMessage] = useState("");
  const foodObject = { name, image, type, grams, calories };

  function handleSubmit(e) {
    e.preventDefault();
    const confirmed = window.confirm("Add this food?");
    if (confirmed) {
      setMessage("Food added");
      fetch("http://localhost:3000/foods", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(foodObject),
      }).then((r) => r.json());
    } else {
      setMessage("Food not added");
    }
    setTimeout(() => {
      setMessage("");
    }, 2000);
  }

  return (
    <div id="add-food">
      {message && <p>{message}</p>}
      <div id="add-food-card" className="food-card">
        <form name="add-food-form" onSubmit={handleSubmit}>
          <label>name:</label>
          <input
            value={name}
            name="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />

          <label>image:</label>
          <input
            value={image}
            name="image"
            type="url"
            onChange={(e) => setImage(e.target.value)}
          />

          <label>type: </label>
          <input
            value={type}
            name="type"
            type="text"
            onChange={(e) => setType(e.target.value)}
          />

          <label>grams:</label>
          <input
            name="grams"
            value={grams}
            type="number"
            step="1"
            min="0"
            max="1000"
            onChange={(e) => setGrams(e.target.value)}
          />

          <label>calories:</label>
          <input
            name="calories"
            value={calories}
            type="number"
            step="1"
            min="0"
            max="1000"
            onChange={(e) => setCalories(e.target.value)}
          />

          <button type="submit">save</button>
        </form>
      </div>
    </div>
  );
}

export default AddFoodForm;
