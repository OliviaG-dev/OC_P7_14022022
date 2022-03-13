import {
  listOfIngredients,
  listOfAppliances,
  listOfUstensils,
} from "./utils/services.js";
import { dataRecipes } from "/src/data/recipes.js";

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

function arrayRemove(arr, value) {
  return arr.filter(function (ele) {
    return ele != value;
  });
}

function deleteTest(arr, target) {
  arrayRemove(arr, target);
}

//console.log("3", listOfIngredients(dataRecipes));
//console.log("3", listOfAppliances(dataRecipes));
//console.log("3", listOfUstensils(dataRecipes));

const tagList = [];

//pensez a controler que le tag n'est pas insérer
function addTag(tagType, tag) {
  const tagText = tag.innerText;
  const searchTag = document.querySelector(".search__tags");

  tagList.push({ tagType, tagText });
  //console.log(tagList);
  const tagElement = document.createElement("div");
  tagElement.innerHTML = tagText + `<img src="app/assets/close tag.svg"/> `;
  tagElement.className = tagType + " tag";
  searchTag.appendChild(tagElement);


  // remove tag
  tagElement.addEventListener("click", (e) => {
    searchTag.removeChild(e.target);
    const tagRemove = e.target.textContent


  console.log( tagList.filter(data => data.tagText !=  tagRemove));
   
   //penser a supprimer du tableau
   //console.log(remainingArr);
});
console.log(tagList);

//lancer la recherche
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

  listOfIngredients(dataRecipes).forEach((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    li.className = "list__item";
    li.setAttribute("data-name", ingredient);
    li.setAttribute("data-set", "ingredients");
    listContainerIngredients.appendChild(li);
    li.addEventListener("click", (e) => {
      addTag("ingredient", e.target);
    });
  });

  listOfAppliances(dataRecipes).forEach((appliance) => {
    const li = document.createElement("li");
    li.textContent = appliance;
    li.className = "list__item";
    li.setAttribute("data-name", appliance);
    li.setAttribute("data-set", "appliances");
    listContainerAppliances.appendChild(li);
    li.addEventListener("click", (e) => {
      addTag("appliance", e.target);
    });
  });

  listOfUstensils(dataRecipes).forEach((ustensil) => {
    const li = document.createElement("li");
    li.textContent = ustensil;
    li.className = "list__item";
    li.setAttribute("data-name", ustensil);
    listContainerUstensils.appendChild(li);
    li.addEventListener("click", (e) => {
      addTag("ustensil", e.target);
    });
  });
}


// 117 
//console.log("0",  tagRemove);
//console.log("1", tagList);

// const array = []
// tagList.forEach((tag) => {
//   console.log("2", tag.tagText);
//   return array.push(tag.tagText)
// });

// console.log("3", array);
/*

tagList.forEach(tag => console.log('t', Object.values(tag).filter(item => item != tag.tagText)))

var newArray = tagList.filter(function(item) { 
    console.log("4", item);

    return  tagList !== item 
})
// var myIndex = array.indexOf(tagRemove);

// console.log(myIndex);
// if (myIndex !== -1) {
//     array.splice(myIndex, 1);
// }
/console.log("5",newArray)


// const myIndex = tagList.indexOf(e.target.textContent)
// console.log(myIndex);
// if (myIndex !== -1) {
//     tagList.splice(myIndex, 1);
//     }
//     console.log("2", tagList);

//console.log(tagList.splice(myIndex, 1));

//penser a supprimer du tableau
});
//lancer la recherche
}

//let myIndex = tagList.indexOf('e.target')


// var myArray = ['one', 'two', 'three'];
// var newArray = myArray.filter(function(f) { return f !== 'two' })
// console.log(newArray)

 jusqua la func addListItems*/