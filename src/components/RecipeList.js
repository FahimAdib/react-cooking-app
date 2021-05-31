import React, { useContext } from "react";
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";

import { RecipeContext } from "./App";

export default function RecipeList({ recipes }) {
  const { handleRecipeAdd } = useContext(RecipeContext);
  const { searchRecipe } = useContext(RecipeContext);
  return (
    <div className="recipe-list">
      <RecipeSearch />
      <div>
        {searchRecipe
          ? searchRecipe.map((recipe) => {
              return <Recipe key={recipe.id} {...recipe} />;
            })
          : recipes.map((recipe) => {
              return <Recipe key={recipe.id} {...recipe} />;
            })}
      </div>
      <div className="recipe-list-add-recipe-btn-container">
        <button className="btn btn-primary" onClick={handleRecipeAdd}>
          Add Recipe
        </button>
      </div>
    </div>
  );
}
