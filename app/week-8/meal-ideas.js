"use client";
import React, { useState, useEffect } from "react";

function displayMealIngredients(mealId) {
  //loop through the meals state
  // find the meal by meal id
  // get list of ingredients from that meal object
  //return a custom array with the list of ingredients for that meal
}

export default function MealList({ingredient}){

  //holds list of meal ideas through an empty array
  const [meals, setMeals] = useState([])

  const fetchMealIdeas = async (ingredient) => {
      try
      {
          //trys and pulls meals from the website/API
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
          const data = await response.json();
          setMeals(data.meals);
      }
      catch(error)
      {
          //catches if an error occurs with a message
          console.error("error fetching meal ideas: ", error);
      }
  };

  


  useEffect(() => 
  {
      if (ingredient)
      {
          fetchMealIdeas(ingredient);
      }
  }, [ingredient]);

  return(
      <main>
      <h2>Meal ideas with {ingredient}:</h2>
          <ul>
              {meals && meals.map((meal) =>
              <li onClick={() => displayMealIngredients(meal.idmeal)} key={meal.idmeal}> {meal.strMeal} </li>)}
          </ul>
          
      </main>
  )
}

