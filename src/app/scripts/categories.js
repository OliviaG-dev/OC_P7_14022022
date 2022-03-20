import {
  listOfIngredients,
  listOfAppliances,
  listOfUstensils,
} from "./utils/services.js";
import { dataRecipes } from "/src/data/recipes.js";
import { displayRecipes } from "./index.js";

export function listenerCategories() {
  const btnIngredients = document.querySelector(".ingredients__button--btn");
  const btnAppliances = document.querySelector(".appliances__button--btn");
  const btnUstensils = document.querySelector(".ustensils__button--btn");

  const btnCloseBlue = document.querySelector(".button__close__blue");
  const btnCloseGreen = document.querySelector(".button__close__green");
  const btnCloseOrange = document.querySelector(".button__close__orange");

  const ingredientsPassif = document.querySelector(".categories__ingredients");
  const appliancesPassif = document.querySelector(".categories__appliances");
  const ustensilsPassif = document.querySelector(".categories__ustensils");

  const ingredientsActif = document.querySelector(
    ".categories__ingredients--active"
  );
  const appliancesActif = document.querySelector(
    ".categories__appliances--active"
  );
  const ustensilsActif = document.querySelector(
    ".categories__ustensils--active"
  );

  const closeIngredients = () => {
    ingredientsPassif.classList.remove("cat__passif");
    ingredientsActif.classList.remove("cat__actif");
  };

  const closeAppliances = () => {
    appliancesPassif.classList.remove("cat__passif");
    appliancesActif.classList.remove("cat__actif");
  };

  const closeUstencils = () => {
    ustensilsPassif.classList.remove("cat__passif");
    ustensilsActif.classList.remove("cat__actif");
  };

  //ouverture
  btnIngredients.addEventListener("click", () => {
    ingredientsPassif.classList.add("cat__passif");
    ingredientsActif.classList.add("cat__actif");
    closeAppliances();
    closeUstencils();
    addListItems();
  });

  btnAppliances.addEventListener("click", () => {
    appliancesPassif.classList.add("cat__passif");
    appliancesActif.classList.add("cat__actif");
    closeIngredients();
    closeUstencils();
    addListItems();
  });

  btnUstensils.addEventListener("click", () => {
    ustensilsPassif.classList.add("cat__passif");
    ustensilsActif.classList.add("cat__actif");
    closeAppliances();
    closeIngredients();
    addListItems();
  });

  //fermeture
  btnCloseBlue.addEventListener("click", () => {
    closeIngredients();
  });

  btnCloseGreen.addEventListener("click", () => {
    closeAppliances();
  });

  btnCloseOrange.addEventListener("click", () => {
    closeUstencils();
  });
}


let tagList = [];

//pensez a controler que le tag n'est pas insérer
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
  
  const searchResult = document.querySelector(".section__recipes");
  searchResult.innerHTML = ""

  
  // const searchedString = tagList.tagText;

  // console.log(searchedString);

    // const filterArray = 
    // dataRecipes.filter(item => 
    //   item.name.toLowerCase().includes(searchedString) || 
    //   item.description.toLowerCase().includes(searchedString))

    // displayRecipes(filterArray)


  // tagList.forEach(tag => {
  //   console.log(tag.tagText);
  //   console.log(dataRecipes.ingredients.ingredient);
  //   if (tag.tagText.includes(dataRecipes.ingredients.ingredient)) {
  //     recipes.style.display = "inline-block"
  //   } else {
  //     recipes.style.display = "none"
  //   }
  // })




  //remove TAG
  tagElement.addEventListener("click", (e) => {
    searchTag.removeChild(e.target);
    const tagRemove = e.target.textContent

  tagList = tagList.filter(data => {
    //console.log(data.tagText+"!="+tagRemove+" "+ (data.tagText.trim() != tagRemove.trim()));
    return data.tagText.trim() != tagRemove.trim();
  });
    //console.log(tagList);
    //console.log("2", tagList);
   //ici mettre la recherche 
  });
  //console.log("3", tagList);
   //ici mettre la recherche 
}

const filterByTags = (ingredients) => {
//console.log(list);
console.log(tagList);
console.log(dataRecipes);
dataRecipes.filter( dataRecipe => {
  const tagFilter = [ingredients.concat(dataRecipe.appliance, dataRecipe.ustensils)]
  return tagList.some(f => tagFilter.includes(f));
  //tagList.every( filter => dataRecipe.description.includes(filter))
})

displayRecipes(filterByTags)
}




function addListItems() {
  const listContainerIngredients = document.querySelector(
    ".list__filter--ingredients"
  );
  listContainerIngredients.innerHTML = "";

  const listContainerAppliances = document.querySelector(
    ".list__filter--appliances"
  );
  listContainerAppliances.innerHTML = "";

  const listContainerUstensils = document.querySelector(
    ".list__filter--ustensils"
  );
  listContainerUstensils.innerHTML = "";

  const ingredients =  listOfIngredients(dataRecipes).map(ingredient => ({ingredient}))
  console.log(ingredients);

  //---------------------------------Ingredients----------------------------------------

  ingredients.forEach((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient.ingredient;
    li.className = "list__item";
    li.setAttribute("data-name", ingredient);
    li.setAttribute("data-set", "ingredients");
    listContainerIngredients.appendChild(li);
    li.addEventListener("click", (e) => {
      addTag("ingredient", e.target);
      filterByTags(ingredients)

    });
    ingredient.tag = li
  });
  
  const searchIngredients = document.querySelector(".search__ingredients--input") 
  searchIngredients.addEventListener("input", (e) => {
    console.log("ici");
    const searchedString = e.target.value.toLowerCase().replace(/\s/g, "");
    ingredients.forEach(ingredient => {
      if (ingredient.ingredient.toLowerCase().includes(searchedString)) {
        ingredient.tag.style.display = "inline-block"
      } else {
        ingredient.tag.style.display = "none"
      }
    })
  })

//---------------------------------Appliances----------------------------------------

  const appliances =  listOfAppliances(dataRecipes).map(appliance => ({appliance}))

  appliances.forEach((appliance) => {
    const li = document.createElement("li");
    li.textContent = appliance.appliance;
    li.className = "list__item";
    li.setAttribute("data-name", appliance);
    li.setAttribute("data-set", "appliances");
    listContainerAppliances.appendChild(li);
    li.addEventListener("click", (e) => {
      addTag("appliance", e.target);
      filterByTags()
    });
    appliance.tag = li
  });

  const searchAppliances = document.querySelector(".search__appliances--input") 
  searchAppliances.addEventListener("input", (e) => {
    console.log("ici");
    const searchedString = e.target.value.toLowerCase().replace(/\s/g, "");
    appliances.forEach(appliance => {
      if (appliance.appliance.toLowerCase().includes(searchedString)) {
        appliance.tag.style.display = "inline-block"
      } else {
        appliance.tag.style.display = "none"
      }
    })
  })

//---------------------------------Ustensils----------------------------------------
  
const ustensils =  listOfUstensils(dataRecipes).map(ustensil => ({ustensil}))

  ustensils.forEach((ustensil) => {
    const li = document.createElement("li");
    li.textContent = ustensil.ustensil;
    li.className = "list__item";
    li.setAttribute("data-name", ustensil);
    listContainerUstensils.appendChild(li);
    li.addEventListener("click", (e) => {
      addTag("ustensil", e.target);
      filterByTags()
    });
    ustensil.tag = li
  });

  const searchUstensils = document.querySelector(".search__ustensils--input") 

  searchUstensils.addEventListener("input", (e) => {
    console.log("ici");
    const searchedString = e.target.value.toLowerCase().replace(/\s/g, "");
    ustensils.forEach(ustensil => {
      if (ustensil.ustensil.toLowerCase().includes(searchedString)) {
        ustensil.tag.style.display = "inline-block"
      } else {
        ustensil.tag.style.display = "none"
      }
    })
  })
}
