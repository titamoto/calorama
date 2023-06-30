import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import FoodPage from "./components/FoodPage";

function App() {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <Route path="/">
        <FoodPage />
      </Route>
    </div>
  );
}

export default App;
