import {
  listOfIngredients,
  listOfAppliances,
  listOfUstensils,
} from "./utils/services.js";
import { dataRecipes } from "/src/data/recipes.js";
import { addTag} from "./index.js";


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

  
  //---------------------------------Ingredients----------------------------------------
  
  const ingredients = listOfIngredients(dataRecipes).map((ingredient) => ({
    ingredient,
  }));

  ingredients.forEach((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient.ingredient;
    li.className = "list__item";
    li.setAttribute("data-name", ingredient);
    li.setAttribute("data-set", "ingredients");
    listContainerIngredients.appendChild(li);
    li.addEventListener("click", (e) => {
      addTag("ingredient", e.target);
      li.remove(e.target);
    });
    ingredient.tag = li;
  });

  const searchIngredients = document.querySelector(
    ".search__ingredients--input"
  );
  searchIngredients.addEventListener("input", (e) => {
    const searchedString = e.target.value.toLowerCase().replace(/\s/g, "");
    ingredients.forEach((ingredient) => {
      if (ingredient.ingredient.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu,"").includes(searchedString)) {
        ingredient.tag.style.display = "flex";
      } else {
        ingredient.tag.style.display = "none";
      }
    });
  });

  //---------------------------------Appliances----------------------------------------

  const appliances = listOfAppliances(dataRecipes).map((appliance) => ({
    appliance,
  }));

  appliances.forEach((appliance) => {
    const li = document.createElement("li");
    li.textContent = appliance.appliance;
    li.className = "list__item";
    li.setAttribute("data-name", appliance);
    li.setAttribute("data-set", "appliances");
    listContainerAppliances.appendChild(li);
    li.addEventListener("click", (e) => {
      addTag("appliance", e.target);
      li.remove(e.target);
    });
    appliance.tag = li;
  });

  const searchAppliances = document.querySelector(".search__appliances--input");
  searchAppliances.addEventListener("input", (e) => {
    const searchedString = e.target.value.toLowerCase().replace(/\s/g, "");
    appliances.forEach((appliance) => {
      if (appliance.appliance.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu,"").includes(searchedString)) {
        appliance.tag.style.display = "flex";
      } else {
        appliance.tag.style.display = "none";
      }
    });
  });

  //---------------------------------Ustensils----------------------------------------

  const ustensils = listOfUstensils(dataRecipes).map((ustensil) => ({
    ustensil,
  }));

  ustensils.forEach((ustensil) => {
    const li = document.createElement("li");
    li.textContent = ustensil.ustensil;
    li.className = "list__item";
    li.setAttribute("data-name", ustensil);
    listContainerUstensils.appendChild(li);
    li.addEventListener("click", (e) => {
      addTag("ustensil", e.target);
      li.remove(e.target);
    });
    ustensil.tag = li;
  });

  const searchUstensils = document.querySelector(".search__ustensils--input");

  searchUstensils.addEventListener("input", (e) => {
    const searchedString = e.target.value.toLowerCase().replace(/\s/g, "");
    ustensils.forEach((ustensil) => {
      if (ustensil.ustensil.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu,"").includes(searchedString)) {
        ustensil.tag.style.display = "flex";
      } else {
        ustensil.tag.style.display = "none";
      }
    });
  });
}
