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
        {/* <Route
          path="/saved-food"
          render={(props) => <SavedFoods {...props} />}
        /> */}
        <Route path="/add-food" component={AddFoodForm}></Route>
        <Route path="/" component={FoodPage}></Route>
        {/* <Route path="*">
          <h2>404 not found</h2>
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
