import React from "react";

import { RecipeContext } from "./App";

export default function RecipeSearch() {
  const { handleSearchRecipe } = React.useContext(RecipeContext);
  return (
    <div className="search-box-container">
      <div className="search-title">Search</div>
      <div className="search-box">
        <input
          type="text"
          onChange={(e) => handleSearchRecipe(e.target.value)}
        ></input>
      </div>
    </div>
  );
}
