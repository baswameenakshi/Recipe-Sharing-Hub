import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Auth } from "./pages/auth";
import { CreateRecipe } from "./pages/create-recipe";
import { Home } from "./pages/home";
import { SavedRecipes } from "./pages/saved-recipes";
// import { FeaturedRecipes } from "./pages/FeaturedRecipes";
// import { About } from "./pages/About"
import FeaturedRecipes from "./pages/FeaturedRecipes"; // Correct for default export
import About from "./pages/About"; // Correct for default export
import CookingTips from "./pages/CookingTips";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/saved-recipes" element={<SavedRecipes />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/FeaturedRecipes" element={<FeaturedRecipes />} />
          <Route path="/About" element={<About />} />
          <Route path="/CookingTips" element={<CookingTips />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
