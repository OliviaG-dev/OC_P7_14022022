export function recipesFactory(data) {
    const { name, time, description, ingredients } = data;


    function getRecipeCardDOM() {
        const article = document.createElement("article");
        article.className = "recipe__container"

        const aside = document.createElement("aside");
        aside.className = "recipe__picture";
        
        const div = document.createElement("div");
        div.className = "recipe__details";

        const title = document.createElement("h2");
        title.className = "recipe__details--name"
        title.textContent = name;

        const timer = document.createElement("span");
        timer.className = "recipe__details--time";
        timer.textContent = `${time} mn` 

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

        const instruction = document.createElement("p");
        instruction.className = "recipe__details--preperation";
        instruction.textContent = description;

        article.appendChild(aside);
        article.appendChild(div);
        div.appendChild(title);
        div.appendChild(timer);
        div.appendChild(ul);
        div.appendChild(instruction)

        return article;
    }
    return { name, time, description, getRecipeCardDOM, ingredients };
}
