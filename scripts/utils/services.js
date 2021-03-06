import { capitalizer, normalizer, unique  } from './helpers.js'



//fonction pour: répertorier les ingrédients et les trier par ordre alphabetique.
export function listOfIngredients(allRecipes) {
    const listIngredients = []

    allRecipes.forEach(recipe => {
        recipe.ingredients.forEach(item => {
            const normalizeIngredient = normalizer(item.ingredient);
            const ingredient = capitalizer(normalizeIngredient);
            listIngredients.push(ingredient)
        })
    })
    const cleanIngredients = listIngredients.filter(unique)
    cleanIngredients.sort((a, b) => a.localeCompare(b))
    return cleanIngredients
}

//* ///////////////////////////////////////////////////////////////////////////////////////////////////////

export function listOfAppliances(allRecipes) {
    const listAppliances = []
    allRecipes.forEach(recipe => {      
            const normalizeAppliances = normalizer(recipe.appliance);
            const appliance = capitalizer(normalizeAppliances);
            listAppliances.push(appliance)
    })
    const cleanAppliances = listAppliances.filter(unique)
    cleanAppliances.sort((a, b) => a.localeCompare(b))
    return cleanAppliances
}

////* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function listOfUstensils(allRecipes) {
    const listUstensils = []

    allRecipes.forEach(recipe => {
        recipe.ustensils.forEach(ustensil => {
            const normalizeUstensils = normalizer(ustensil);
            const Ustensil = capitalizer(normalizeUstensils);
            listUstensils.push(Ustensil)
        })
    })
    const cleanUstensils = listUstensils.filter(unique)
    cleanUstensils.sort((a, b) => a.localeCompare(b))
    return cleanUstensils
}


