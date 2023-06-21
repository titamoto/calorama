import React from "react";

function AddFoodForm() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <div id="save-food">
      <h3>Add Food</h3>
      <div className="food-card">
        <form onSubmit={handleSubmit}>
          <label>name:</label>
          <input type="text" />
          <label>image:</label>
          <input type="url" />
          <label>type:</label>
          <input type="text" />
          <label>grams:</label>
          <input type="number" step="1" defaultValue="0" min="0" max="1000" />
          <label>calories:</label>
          <input type="number" step="1" defaultValue="0" min="0" max="1000" />
          <button type="submit">save</button>
        </form>
      </div>
    </div>
  );
}

export default AddFoodForm;
