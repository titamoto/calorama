import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import FoodPage from "./components/FoodPage";
import AddFoodForm from "./components/AddFoodForm";
import SavedFoods from "./components/SavedFoods";
// import { Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/saved-food">
          <SavedFoods />
        </Route>
        <Route exact path="/add-food">
          <AddFoodForm />
        </Route>
        <Route exact path="/">
          <FoodPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
