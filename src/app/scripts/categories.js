import { capitalizer, normalizer, unique  } from './helpers.js'
 


//fonction pour: répertorier les ingrédients et les trier par ordre alphabetique.
function createListOfIngredients(allRecipes) {
    const listIngredients = []

    allRecipes.forEach(recipe => {
        recipe.ingredients.forEach(item => {
            const normalizeIngredient = normalizer(item.ingredient);
            const ingredient = capitalizer(normalizeIngredient);
            listIngredients.push(ingredient)
        })
    })
    return listIngredients
}

// filter
function cleanIngredients(listIngredients) {
    console.log(listIngredients);
    const cleanIngredients = listIngredients.filter(unique)
    cleanIngredients.sort((a, b) => a.localeCompare(b))
    console.log(cleanIngredients);
    return cleanIngredients
    
}
//function filterIngredients = allIngredients.filter(unique)
//filterIngredients.sort((a, b) => a.localeCompare(b))
//console.log(filterIngredients);
//return filterIngredients

 export function getAppliances(allRecipes) {
    const allAppliances = []
    allRecipes.forEach(recipe => {
        allAppliances.push(recipe.appliance)
    })
    const uniqueAppliances = allAppliances.filter(unique)
    uniqueAppliances.sort((a, b) => a.localeCompare(b))
    //console.log(uniqueAppliances);
    return uniqueAppliances
}

export function getUstensils(allRecipes) {
    const allUstensils = []
    allRecipes.forEach(recipe => recipe.ustensils.forEach(ustensil => allUstensils.push(ustensil)))
    const uniqueUstensils = allUstensils.filter(unique)
    uniqueUstensils.sort((a, b) => a.localeCompare(b))
    //console.log(uniqueUstensils);
    return uniqueUstensils
}

export function getIngredients(allRecipes) {
    cleanIngredients(createListOfIngredients(allRecipes))
    
}