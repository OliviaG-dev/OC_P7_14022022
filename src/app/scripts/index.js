import { dataRecipes } from "/src/data/recipes.js";
//import {listOfIngredients, listOfAppliances, listOfUstensils } from './utils/services.js'
import { recipesFactory } from "./factories/recipes.js";
import { listenerCategories } from "./categories.js";

//console.log(dataRecipes);
const searchInputRecipes = document.querySelector("#search")
const searchResult = document.querySelector(".section__recipes")
// const searchIngredients = document.querySelector(".search__ingredients--input") 
// const searchAppliances = document.querySelector(".search__appliances--input") 
// const searchUstensils = document.querySelector(".search__ustensils--input") 

function displayRecipes(recipes) {
  const RecipesSection = document.querySelector(".section__recipes");

  recipes.forEach((recipes) => {
    const recipeModel = recipesFactory(recipes);
    const recipeCardDOM = recipeModel.getRecipeCardDOM();
    RecipesSection.appendChild(recipeCardDOM);
  });
}

//search bar
searchInputRecipes.addEventListener("input", filterData)

function filterData(e) {
    searchResult.innerHTML = ""

    const searchedString = e.target.value.toLowerCase().replace(/\s/g, "");

    const filterArray = 
    dataRecipes.filter(item => 
      item.name.toLowerCase().includes(searchedString) || 
      item.description.toLowerCase().includes(searchedString) && 
      e.length >2)

    displayRecipes(filterArray)
}

// searchIngredients.addEventListener("input", filterIngredients)

// searchAppliances.addEventListener("input", filterAppliances)

// searchUstensils.addEventListener("input", filterUstensils)

function init() {
  displayRecipes(dataRecipes);
  listenerCategories();
}

init();
