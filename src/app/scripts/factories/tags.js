
function tagFactory(data){

    const { name, categories } = data;

    function getTagDOM(){

        const searchTag = document.querySelector('.search__tags')
    
        const tag = document.createElement('article')
        tag.classList.add(`tag__${categories}`)
        tag.setAttribute(`data-category`, categories)
        tag.setAttribute(`data-name`, name)

        const title = document.createElement('h3')
        title.className = "tag__title";
        title.textContent = name;

        const close = document.createElement('button')
        close.className = "tag__button";
        close.setAttribute(`data-category`, categories)
        close.setAttribute(`data-name`, name)

        searchTag.appendChild("tag");
        tag.appendChild("title");
        tag.appendChild("close");

        return searchTag; 
    } 
    return { name, categories, getTagDOM };
}
