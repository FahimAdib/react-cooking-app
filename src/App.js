import React from 'react';
import RecipeList from './RecipeList'


function App() {
  return ( 
    <RecipeList recipes={sampleRecipes}/>
  )
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chiken',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Put salt on Chicken\n2. Put Chicken in oven\n3. Eat Chicken",
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 lbs'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs'
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Fish',
    servings: 2,
    cookTime: '2:00',
    instructions: "1. Put salt on Fish\n2. Put Fish in oven\n3. Eat Fish",
    ingredients: [
      {
        id: 1,
        name: 'Fish',
        amount: '2 lbs'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs'
      }
    ]
  }
]

export default App;
