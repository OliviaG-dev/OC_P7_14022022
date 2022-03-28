import { dataRecipes } from "/src/data/recipes.js";
import { recipesFactory } from "./factories/recipes.js";
import { listenerCategories } from "./categories.js";

//console.log(dataRecipes);
const searchInputRecipes = document.querySelector("#search")
const searchResult = document.querySelector(".section__recipes")

export function displayRecipes(recipes) {
  const RecipesSection = document.querySelector(".section__recipes");

  recipes?.forEach((recipes) => {
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

    // const filterUstensils =
    // dataRecipes.forEach( f => f.ustensils);

    // const filterIngredients = 
    // dataRecipes.forEach( f => f.ingredients.ingredient);

    // console.log(filterUstensils);
    // console.log(filterIngredients);

    const filterArray = 
    dataRecipes.filter(item => 
      item.name.toLowerCase().includes(searchedString) || 
      item.appliance.toLowerCase().includes(searchedString) ||
      item.description.toLowerCase().includes(searchedString) && 
      e.length >2) 

    const filterArray2 =
    dataRecipes.forEach( f => f.ustensils);
      

    
    displayRecipes(filterArray)
}

let tagList = []; 

// function matchTextSearch(recipe) {
//   const text = searchInputRecipes.value;
//   if (text.length > 2) {
//     if (
//       recipe.description.toLowerCase().includes(text.toLowerCase()) ||
//       recipe.name.toLowerCase().includes(text.toLowerCase()) ||
//       recipe.appliance.toLowerCase().includes(text.toLowerCase())
//     )
//       return true;
//     for (const ingredient of recipe.ingredients) {
//       if (ingredient.ingredient.toLowerCase().includes(text.toLowerCase()))
//         return true;
//     }
//     for (const ustensil of recipe.ustensils) {
//       if (ustensil.toLowerCase().includes(text.toLowerCase())) return true;
//     }
//     return false;
//   }
//   return true;
// }

export function addTag(tagType, tag) {
  const tagText = tag.innerText;
  const searchTag = document.querySelector(".search__tags");
  const tagElement = document.createElement("div");

  tagList.push({ tagType, tagText });
  tagElement.innerHTML = tagText + `<img src="app/assets/close tag.svg"/> `;
  tagElement.className = tagType + " tag";
  searchTag.appendChild(tagElement);

  //console.log("1", tagList);
  //ici faire la search

  // function filterTag() {

  //   const searchedTag = tagText.toLowerCase();
  //   console.log(searchedTag);

  //   const filterArrayTag = 
  //   dataRecipes.filter(item => 
  //     item.name.toLowerCase().includes(searchedString) || 
  //     item.description.toLowerCase().includes(searchedString) && 
  //     e.length >2)

  //   displayRecipes(filterArrayTag)

  // }

  // filterTag()

  // const recipes = dataRecipes
  // console.log(recipes);
  // recipes.forEach((recipe) => {
  //   tagList.forEach((f) => {
  //     console.log("ici" + recipe.id);
  //     if(recipe.id == 3) {
  //       console.log(recipe.includes(f.tagText)  +'&&'+ matchTextSearch(recipe));
  //     }
  //     if (recipe.includes(f.tagText) && matchTextSearch(recipe)) {
  //       recipe.style.display = "flex";
  //     } else {
  //       recipe.style.display = "none";
  //     }
  //   });
  // });


  //remove TAG
  tagElement.addEventListener("click", (e) => {
    searchTag.removeChild(e.target);
    const tagRemove = e.target.textContent;
    tagList = tagList.filter((data) => {
      //console.log(data.tagText+"!="+tagRemove+" "+ (data.tagText.trim() != tagRemove.trim()));
      return data.tagText.trim() != tagRemove.trim();
    });
   //ici remettre la recherche par tag
  });
}



function init() {
  displayRecipes(dataRecipes);
  listenerCategories();
}

init();
