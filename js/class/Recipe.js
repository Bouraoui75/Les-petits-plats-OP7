export default class Recipe {
    constructor(recipe) {
        this.id = recipe.id;
        this.name = recipe.name;
        this.servings = recipe.servings;
        this.ingredients = recipe.ingredients;
        this.time = recipe.time;
        this.description = recipe.description;
        this.appliance = recipe.appliance;
        this.ustensils = recipe.ustensils;
        this.visible = true;

        // Stock all recipes in an array
        Recipe.instances = [...Recipe.instances, this];
    }

    static instances = [];

    /**
     * View of a receipe
     * @returns {HTMLElement}
     */
    view = () => {
        const container = document.createElement('article');
        container.setAttribute('class', 'recipe');

        const image = document.createElement('img');
        image.setAttribute('src', 'https://dummyimage.com/380x300/ED6454/fff'); // Default aaa/fff

        image.setAttribute('class', 'recipe__img');

        const description = document.createElement('div');
        description.setAttribute('class', 'recipe__description');

        const descriptionTop = document.createElement('div');
        descriptionTop.setAttribute('class', 'recipe__description__top');

        descriptionTop.innerHTML = `
            <h2 class="name">${this.name}</h2>
            <span class="duration"><i class="far fa-clock"></i>${this.time} min</span>
        `;

        const ingredients = document.createElement('ul');
        ingredients.setAttribute('class', 'ingredients-list');

        this.ingredients.forEach(ingredient => {

            const ingerdientQuantity = ingredient.quantity ? ingredient.quantity : '';
            const ingerdientUnit = ingredient.unit ? ingredient.unit : '';
            
            ingredients.innerHTML += 
            `
                <li class="ingredients-list__item"><span>
                    ${ingredient.ingredient}${ingerdientQuantity != '' ? ':' : ''} 
                </span>
                    ${ingerdientQuantity} ${ingerdientUnit}
                </li>
            `;
        });

        const howToCook = document.createElement('p');
        howToCook.setAttribute('class', 'howToCook');

        // If the description is too long, we cut it
        if (this.description.length >= 200) {
            howToCook.innerText = `${this.description.slice(0, 200)}...`;
        } else {
            howToCook.innerText = this.description;
        }

        const bottomDescription = document.createElement('div');
        bottomDescription.setAttribute('class', 'recipe__description__bottom');

        bottomDescription.appendChild(ingredients);
        bottomDescription.appendChild(howToCook);

        description.appendChild(descriptionTop);
        description.appendChild(bottomDescription);

        container.appendChild(image);
        container.appendChild(description);

        this.element = container;

        return container;
    }

    /**
     * Switch the visibility between visible and not visible
     */
    toggleVisibility = () => {
        this.element.classList.toggle('hidden');
        this.visible = !this.visible;
    }
}
