import { dataRecipes } from "../data/recipes.js";
import { recipesFactory } from "./factories/recipes.js";
import { listenerCategories } from "categories.js";
//import { addListItems } from "./categories.js"

//console.log(dataRecipes);
const searchInputRecipes = document.querySelector("#search");
//const searchResult = document.querySelector(".section__recipes");
const noResult = document.querySelector(".no__result");

//affiche les recette
export function displayRecipes(recipes) {
  const RecipesSection = document.querySelector(".section__recipes");

  recipes?.forEach((recipe) => {
    const recipeModel = recipesFactory(recipe);
    const recipeCardDOM = recipeModel.getRecipeCardDOM();
    RecipesSection.appendChild(recipeCardDOM);
    recipe.htmlTag = recipeCardDOM;
  });
}



//search bar
searchInputRecipes.addEventListener("input", (e) => {
  const searchedString = e.target.value.toLowerCase().replace(/\s/g, "");
  //const cardRecipe = document.querySelectorAll(".recipe__container")
  filterRecipe(searchedString)
});

function filterRecipe (searchedString) {
  
  if (searchedString.length > 2) {
  const filterArray = dataRecipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(searchedString) ||
      recipe.appliance.toLowerCase().includes(searchedString) ||
      (recipe.description.toLowerCase().includes(searchedString))
  );

    dataRecipes.forEach((recipe) => {
      //console.log(recipe);
      //console.log(dataRecipes);
      //console.log(filterArray);
      filterArray.forEach((recipeFilter) => {

        console.log("1", recipe);
        console.log("2", recipeFilter);
        if (recipe == recipeFilter) {
          recipe.htmlTag.style.display = "flex";
          console.log(recipe.htmlTag);
          recipe.visible = true;
        } else {
          recipe.htmlTag.style.display = "none";
          recipe.visible = false;
        }
        
      })
      if (filterArray.length === 0) {
        recipe.htmlTag.style.display = "none";
        recipe.visible = false;
        noResult.className = "cat__actif";
        }
    })
  }
}


// function filterData(e) {
//   searchResult.innerHTML = "";

//   const searchedString = e.target.value.toLowerCase().replace(/\s/g, "");
//   const filterArray = dataRecipes.filter(
//     (item) =>
//       item.name.toLowerCase().includes(searchedString) ||
//       item.appliance.toLowerCase().includes(searchedString) ||
//       (item.description.toLowerCase().includes(searchedString) && e.length > 2)
//   );

//   if (filterArray.length === 0) {
//     noResult.className = "cat__actif";
//   }
//   displayRecipes(filterArray);
//   console.log(dataRecipes[0].visible);
//   const activeRecipes = dataRecipes.filter((recipe) => recipe.visible == true);
//   console.log(activeRecipes);
// }

// searchInputRecipes.addEventListener("input", filterData);

// function filterData(e) {
//   searchResult.innerHTML = "";

//   const searchedString = e.target.value.toLowerCase().replace(/\s/g, "");
//   const filterArray = dataRecipes.filter(
//     (item) =>
//       item.name.toLowerCase().includes(searchedString) ||
//       item.appliance.toLowerCase().includes(searchedString) ||
//       (item.description.toLowerCase().includes(searchedString) && e.length > 2)
//   );

//   if (filterArray.length === 0) {
//     noResult.className = "cat__actif";
//   }
//   displayRecipes(filterArray);
//   console.log(dataRecipes[0].visible);
//   const activeRecipes = dataRecipes.filter((recipe) => recipe.visible == true);
//   console.log(activeRecipes);
// }


let tagList = [];



function matchTextSearch(recipe) {
  const text = searchInputRecipes.value;
  if (text.length > 2) {
    if (
      recipe.description.toLowerCase().includes(text.toLowerCase()) ||
      recipe.name.toLowerCase().includes(text.toLowerCase()) ||
      recipe.appliance.toLowerCase().includes(text.toLowerCase())
    )
      return true;
    for (const ingredient of recipe.ingredients) {
      if (ingredient.ingredient.toLowerCase().includes(text.toLowerCase()))
        { recipe.visible = true
          return true;}
    }
    for (const ustensil of recipe.ustensils) {
      if (ustensil.toLowerCase().includes(text.toLowerCase())) {
        recipe.visible = true
        return true;}
    }
    recipe.visible = false
    return false;
  }
  //recipe.visible = true
  return true;
}

function containsTag(tag, recipe) {
  switch (tag.tagType) {
    case "ingredient":
      const findIngredient = recipe.ingredients.find(
        (ingredient) =>
          ingredient.ingredient.toLowerCase() == tag.tagText.toLowerCase()
      );
      return findIngredient != undefined;
    case "appliance":
      const findAppliance =
        recipe.appliance.toLowerCase() === tag.tagText.toLowerCase();
      return findAppliance != false;
    case "ustensil":
      const findUstensil = recipe.ustensils.find(
        (ustensils) => ustensils.toLowerCase() == tag.tagText.toLowerCase()
      );
      return findUstensil != undefined;
    default:
      console.log("pas trouvé");
  }
  
}

export function addTag(tagType, tag) {
  const tagText = tag.innerText;
  const searchTag = document.querySelector(".search__tags");
  const tagElement = document.createElement("div");

  tagList.push({ tagType, tagText });
  tagElement.innerHTML = tagText + `<img src="assets/close tag.svg"/> `;
  tagElement.className = tagType + " tag";
  searchTag.appendChild(tagElement);

  //recherche par tag
  dataRecipes.forEach((recipe) => {
    tagList.forEach((f) => {
      if (containsTag(f, recipe) && matchTextSearch(recipe)) {
        recipe.htmlTag.style.display = "flex";
        recipe.visible = true;
      } else {
        recipe.htmlTag.style.display = "none";
        recipe.visible = false;
      }
    });
  });

  //remove TAG
  tagElement.addEventListener("click", (e) => {
    searchTag.removeChild(e.target);
    const tagRemove = e.target.textContent;
    tagList = tagList.filter((data) => {
      //console.log(data.tagText+"!="+tagRemove+" "+ (data.tagText.trim() != tagRemove.trim()));
      return data.tagText.trim() != tagRemove.trim();
    });
    //ici remettre la recherche par tag
    dataRecipes.forEach((recipe) => {
      tagList.forEach((f) => {
        if (containsTag(f, recipe) && matchTextSearch(recipe)) {
          recipe.htmlTag.style.display = "flex";
          recipe.visible = true;
        } else {
          recipe.htmlTag.style.display = "none";
          recipe.visible = false;
        }
      });
    });

    // const activeRecipes = dataRecipes.filter(
    //   (recipe) => recipe.htmlTag.style.display == "flex"
    // );
    // console.log(activeRecipes);
    // reload quand le tableau est vide
    if (tagList.length === 0) {
      window.location.reload();
    }
  });
}



function init() {
  //console.log(dataRecipes);
  for(const recipe of dataRecipes) recipe.visible = true;
  displayRecipes(dataRecipes);
  listenerCategories();
}

init();
