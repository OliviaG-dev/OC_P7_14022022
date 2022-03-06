import { dataRecipes } from '/src/data/recipes.js'
//import {listOfIngredients, listOfAppliances, listOfUstensils } from './utils/services.js'
import { recipesFactory } from './factories/recipes.js'
import { listenerCategories } from './categories.js'

console.log(dataRecipes);

function displayRecipes(recipes) {
    const RecipesSection = document.querySelector(".section__recipes");
    
    recipes.forEach((recipes) => {
        const recipeModel = recipesFactory(recipes);
        const recipeCardDOM = recipeModel.getRecipeCardDOM();
        RecipesSection.appendChild(recipeCardDOM);
    });
}
//console.log( "2", ListOfIngredients(dataRecipes))
//console.log( "2",  listOfAppliances(dataRecipes))
//console.log("2", listOfUstensils(dataRecipes))

function init() {
    displayRecipes(dataRecipes);
    listenerCategories();
    //listOfIngredients(dataRecipes)
    //listOfAppliances(dataRecipes)
    //listOfUstensils(dataRecipes)
}

init()

