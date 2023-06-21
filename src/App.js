import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import FoodPage from "./components/FoodPage";
import AddFoodForm from "./components/AddFoodForm";
import SavedFoods from "./components/SavedFoods";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Route exact path="/">
        <FoodPage />
      </Route>
      <Route exact path="/saved-food">
        <SavedFoods />
      </Route>
      <Route exact path="/add-food">
        <AddFoodForm />
      </Route>
    </div>
  );
}

export default App;
