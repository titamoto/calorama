import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import FoodPage from "./components/FoodPage";

function App() {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <Switch>
        <Route path="/" component={FoodPage}></Route>
        {/* <Route path="*">
          <h2>404 not found</h2>
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
