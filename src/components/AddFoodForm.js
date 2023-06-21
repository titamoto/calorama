import React from "react";

function AddFoodForm() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <div id="food-card">
      <h3>Add new food</h3>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" />
        <label>Image:</label>
        <input type="url" />
        <label>Type:</label>
        <input type="text" />
        <label>Grams:</label>
        <input type="number" step="1" defaultValue="0" min="0" max="1000" />
        <label>Calories:</label>
        <input type="number" step="1" defaultValue="0" min="0" max="1000" />
        <button type="submit">Save food</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
