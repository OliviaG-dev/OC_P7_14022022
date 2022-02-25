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
    const cleanIngredients = listIngredients.filter(unique)
    cleanIngredients.sort((a, b) => a.localeCompare(b))
    return cleanIngredients
}

//* ///////////////////////////////////////////////////////////////////////////////////////////////////////

function createListOfAppliances(allRecipes) {
    const listAppliances = []
    allRecipes.forEach(recipe => {      
            const normalizeAppliances = normalizer(recipe.appliance);
            const appliance = capitalizer(normalizeAppliances);
            listAppliances.push(appliance)
    })
    return listAppliances
}

function cleanAppliances(listAppliances) {
    const cleanAppliances = listAppliances.filter(unique)
    cleanAppliances.sort((a, b) => a.localeCompare(b))
    return cleanAppliances
}

////* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function createListOfUstensils(allRecipes) {
    const listUstensils = []

    allRecipes.forEach(recipe => {
        recipe.ustensils.forEach(ustensil => {
            const normalizeUstensils = normalizer(ustensil);
            const Ustensil = capitalizer(normalizeUstensils);
            listUstensils.push(Ustensil)
        })
    })
    return listUstensils
}

function cleanUstensils(listUstensils) {
    const cleanUstensils = listUstensils.filter(unique)
    cleanUstensils.sort((a, b) => a.localeCompare(b))
    return cleanUstensils
}

//////* /////////////////////////////////////////////////////////////////////////////////////////////////


export function getIngredients(allRecipes) {
    cleanIngredients(createListOfIngredients(allRecipes))   
    console.log(cleanIngredients(createListOfIngredients(allRecipes)));
}

export function getAppliances(allRecipes) {
    cleanAppliances(createListOfAppliances(allRecipes))
    console.log(cleanAppliances(createListOfAppliances(allRecipes)));
}

export function getUstensils(allRecipes) {
    cleanUstensils(createListOfUstensils(allRecipes))
    console.log(cleanUstensils(createListOfUstensils(allRecipes)));
}


//////* /////////////////////////////////////////////////////////////////////////////////////////////////
