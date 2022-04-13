export function recipesFactory(data) {
    const { name, time, description, ingredients, id } = data;
    
    const i = `assets/time recipe.png`;
    const picture = `assets/images/${id}.jpg`

    function getRecipeCardDOM() {
        const article = document.createElement("article");
        article.className = "recipe__container"
        
        const idHide = document.createElement("div");
        idHide.className = "cat__passif";
        idHide.innerText = id;

        const aside = document.createElement("aside");
        aside.className = "recipe__picture";


        const image = document.createElement("img");
        image.className = "recipe__picture--img";
        image.setAttribute("src", picture );
        image.setAttribute("alt", name )

        const div = document.createElement("div");
        div.className = "recipe__details";
        
        const containerHigh = document.createElement("div");
        containerHigh.className = "container__high"

        const title = document.createElement("h2");
        title.className = "recipe__details--name"
        title.textContent = name;
        
        const containerTime = document.createElement("div");
        containerTime.className = "container__time";

        const icone = document.createElement("img");
        icone.className = "recipe__details--icone";
        icone.setAttribute("src", i);

        const timer = document.createElement("span");
        timer.className = "recipe__details--time";
        timer.textContent = `${time} mn` 

        const containerLow = document.createElement("div");
        containerLow.className = "container__low"
        
        const containerLowLeft = document.createElement("div");
        containerLowLeft.className = "container__low--left"

        const ul = document.createElement("ul");
        ul.className = "recipe__details--list";

        ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.className = "recipe__details--ingredient";

            const span = document.createElement('span');
            span.textContent = `${ingredient.ingredient}`

            li.appendChild(span)

            if (ingredient.quantity) {
                const p = document.createElement('p')
                p.textContent = `: ${ingredient.quantity}`

                if (ingredient.unit) {
                    p.textContent = `: ${ingredient.quantity} ${ingredient.unit}`
                }
                li.appendChild(p)
            }
            ul.appendChild(li)
        })

        const containerLowRight = document.createElement("div");
        containerLowRight.className = "container__low--right"

        const instruction = document.createElement("p");
        instruction.className = "recipe__details--preperation";
        instruction.textContent = description;

        article.appendChild(idHide);
        article.appendChild(aside);
        aside.appendChild(image);
        article.appendChild(div);
        div.appendChild(containerHigh)
        containerHigh.appendChild(title);
        containerHigh.appendChild(containerTime);
        containerTime.appendChild(icone);
        containerTime.appendChild(timer);
        div.appendChild(containerLow);
        containerLow.appendChild(containerLowLeft);
        containerLowLeft.appendChild(ul);
        containerLow.appendChild(containerLowRight)
        containerLowRight.appendChild(instruction)

        return article;
    }
    return { name, time, description, getRecipeCardDOM, ingredients };
}
