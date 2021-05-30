import React, { useState, createContext, useEffect } from "react";
import RecipeList from "./RecipeList";
import RecipeEdit from "./RecipeEdit";
import "../css/App.css";
import { v4 as uuidv4 } from "uuid";

export const RecipeContext = createContext();
const LOCAL_STORAGE_KEY = "cookingWithReact.recipes";

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON !== null) setRecipes(JSON.parse(recipeJSON));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  const recipeContextValue = {
    handleRecipeAdd: handleRecipeAdd,
    handleRecipeDelete: handleRecipeDelete,
  };

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "New",
      servings: 1,
      cookTime: "1:00",
      instructions: "Instr.",
      ingredients: [{ id: uuidv4(), name: "Name", amount: "1 Tbs" }],
    };

    setRecipes([...recipes, newRecipe]);
  }

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter((recipe) => recipe.id != id));
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
      <RecipeEdit />
    </RecipeContext.Provider>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chiken",
    servings: 3,
    cookTime: "1:45",
    instructions:
      "1. Put salt on Chicken\n2. Put Chicken in oven\n3. Eat Chicken",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 lbs",
      },
      {
        id: 2,
        name: "Salt",
        amount: "1 Tbs",
      },
    ],
  },
  {
    id: 2,
    name: "Plain Fish",
    servings: 2,
    cookTime: "2:00",
    instructions: "1. Put salt on Fish\n2. Put Fish in oven\n3. Eat Fish",
    ingredients: [
      {
        id: 1,
        name: "Fish",
        amount: "2 lbs",
      },
      {
        id: 2,
        name: "Salt",
        amount: "1 Tbs",
      },
    ],
  },
];

export default App;
