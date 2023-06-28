import "./AddFoodForm.css";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";

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
          <TextField
            required
            label="name"
            className="text-input"
            value={name}
            name="name"
            type="text"
            size="small"
            margin="dense"
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            label="image URL"
            className="text-input"
            value={image}
            name="image"
            type="url"
            size="small"
            margin="dense"
            onChange={(e) => setImage(e.target.value)}
          />

          <TextField
            label="type"
            className="text-input"
            value={type}
            name="type"
            type="text"
            size="small"
            margin="dense"
            onChange={(e) => setType(e.target.value)}
          />

          <TextField
            label="grams"
            name="grams"
            className="number-input"
            value={grams}
            type="number"
            size="small"
            step="1"
            min="0"
            max="1000"
            margin="dense"
            onChange={(e) => setGrams(e.target.value)}
          />

          <TextField
            label="calories"
            name="calories"
            className="number-input"
            size="small"
            value={calories}
            type="number"
            step="1"
            min="0"
            max="1000"
            margin="dense"
            onChange={(e) => setCalories(e.target.value)}
          />

          <button type="submit">add</button>
        </form>
      </div>
    </div>
  );
}

export default AddFoodForm;
