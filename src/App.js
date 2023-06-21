import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import FoodPage from "./components/FoodPage";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <AddFoodForm />
      <FoodPage />
    </div>
  );
}

export default App;
