import { listOfIngredients, listOfAppliances, listOfUstensils } from './utils/services.js'
import { dataRecipes } from '/src/data/recipes.js'

//ici mes categories 

//au click j'ouvre ...

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

    const ingredientsActif = document.querySelector(".categories__ingredients--active");
    const appliancesActif = document.querySelector(".categories__appliances--active");
    const ustensilsActif = document.querySelector(".categories__ustensils--active");
    
    const closeIngredients = () => {
        ingredientsPassif.classList.remove("cat__passif")
        ingredientsActif.classList.remove("cat__actif")
    }
    
    const closeAppliances = () => {
        appliancesPassif.classList.remove("cat__passif")
        appliancesActif.classList.remove("cat__actif")
    }

    const closeUstencils = () => {
        ustensilsPassif.classList.remove("cat__passif")
        ustensilsActif.classList.remove("cat__actif")
    }

    //ouverture
    btnIngredients.addEventListener("click", () => {
        ingredientsPassif.classList.add("cat__passif")
        ingredientsActif.classList.add("cat__actif")
        closeAppliances()
        closeUstencils()
        addListItems()
        
    });

    btnAppliances.addEventListener("click", () => {
        appliancesPassif.classList.add("cat__passif")
        appliancesActif.classList.add("cat__actif")
        closeIngredients()
        closeUstencils()
        addListItems()
    });

    btnUstensils.addEventListener("click", () => {
        ustensilsPassif.classList.add("cat__passif")
        ustensilsActif.classList.add("cat__actif")
        closeAppliances()
        closeIngredients()
        addListItems()
    })

    //fermeture 
    btnCloseBlue.addEventListener("click", ()=> {
        closeIngredients()
    });
    
    btnCloseGreen.addEventListener("click", ()=> {
        closeAppliances()
    });

    btnCloseOrange.addEventListener("click", ()=> {
        closeUstencils()
    });
}

//console.log("3", listOfIngredients(dataRecipes));
//console.log("3", listOfAppliances(dataRecipes));
//console.log("3", listOfUstensils(dataRecipes));

function addListItems() {
    const listContainerIngredients = document.querySelector(".list__filter--ingredients")
    listContainerIngredients.innerHTML = ''

    const listContainerAppliances = document.querySelector(".list__filter--appliances")
    listContainerAppliances.innerHTML = ''

    const listContainerUstensils = document.querySelector(".list__filter--ustensils")
    listContainerUstensils.innerHTML = ''

    listOfIngredients(dataRecipes).forEach(ingredient => {
        const li = document.createElement('li')
        li.textContent = ingredient
        li.className = ('list__item');
        li.setAttribute('data-name', ingredient)  
        li.setAttribute('data-set', "ingredients")      
        listContainerIngredients.appendChild(li)
    })

    listOfAppliances(dataRecipes).forEach(appliance => {
        const li = document.createElement('li')
        li.textContent = appliance
        li.className = ('list__item');
        li.setAttribute('data-name', appliance)   
        li.setAttribute('data-set', "appliances")   
        listContainerAppliances.appendChild(li)
    })

    listOfUstensils(dataRecipes).forEach(ustensil => {
        const li = document.createElement('li')
        li.textContent = ustensil
        li.className = ('list__item');
        li.setAttribute('data-name', ustensil)       
        listContainerUstensils.appendChild(li)
    })

}




