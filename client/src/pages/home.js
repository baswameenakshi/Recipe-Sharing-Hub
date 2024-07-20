import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";
import "./home.css";

export const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const userID = useGetUserID();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:3001/recipes");
        setRecipes(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/ids/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipes();
    fetchSavedRecipes();
  }, [userID]);

  const saveRecipe = async (recipeID) => {
    try {
      const response = await axios.put("http://localhost:3001/recipes", {
        recipeID,
        userID,
      });
      setSavedRecipes(response.data.savedRecipes);
    } catch (err) {
      console.log(err);
    }
  };

  const isRecipeSaved = (id) => savedRecipes.includes(id);

  const handleViewButtonClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="home">
      <h1>Recipe Hub</h1>
      {selectedRecipe && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>{selectedRecipe.name}</h2>
            <img src={selectedRecipe.imageUrl} alt={selectedRecipe.name} className="modal-image" />
            <div className="details">
              <div className="ingredients">
                <h3>Ingredients:</h3>
                <ul>
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div className="steps">
                <h3>Instructions:</h3>
                <ul>
                  {selectedRecipe.instructions.split('\n').map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </div>
              <p>Cooking Time: {selectedRecipe.cookingTime} minutes</p>
              <button
                onClick={() => saveRecipe(selectedRecipe._id)}
                disabled={isRecipeSaved(selectedRecipe._id)}
              >
                {isRecipeSaved(selectedRecipe._id) ? "Saved" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}

      <ul className="recipe-list">
        {recipes.map((recipe) => (
          <li key={recipe._id} className="recipe-card">
            <img src={recipe.imageUrl} alt={recipe.name} height={150} width={150} />
            <h2>{recipe.name}</h2>
            <button className="view-button" onClick={() => handleViewButtonClick(recipe)}>
              View Recipe
            </button>
            <button
              onClick={() => saveRecipe(recipe._id)}
              disabled={isRecipeSaved(recipe._id)}
            >
              {isRecipeSaved(recipe._id) ? "Saved" : "Save"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
