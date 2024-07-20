import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";
import "./saved-recipes.css"; // Import your CSS file for styling

export const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null); // State to track the selected recipe
  const userID = useGetUserID();

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSavedRecipes();
  }, [userID]);

  const handleViewButtonClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <div>
      <h1>Saved Recipes</h1>
      {selectedRecipe && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>{selectedRecipe.name}</h2>
            <img src={selectedRecipe.imageUrl} alt={selectedRecipe.name} className="modal-image" />
            <div className="details">
              <p>Description: {selectedRecipe.description}</p>
              <p>Ingredients:</p>
              <ul>
                {selectedRecipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <p>Instructions: {selectedRecipe.instructions}</p>
              <p>Cooking Time: {selectedRecipe.cookingTime} minutes</p>
            </div>
          </div>
        </div>
      )}

      <ul className="recipe-list">
        {savedRecipes.map((recipe) => (
          <li key={recipe._id}>
            <div>
              <h2>{recipe.name}</h2>
              <img src={recipe.imageUrl} alt={recipe.name} />
              <button className="view-button" onClick={() => handleViewButtonClick(recipe)}>
                View Recipe
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
