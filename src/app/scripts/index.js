import { dataRecipes } from '/src/data/recipes.js'
import { getUstensils, getAppliances, getIngredients } from './utils/services.js'
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

function init() {
    displayRecipes(dataRecipes);
    listenerCategories();
    getIngredients(dataRecipes);
    getAppliances(dataRecipes);
    getUstensils (dataRecipes);
}

init()

