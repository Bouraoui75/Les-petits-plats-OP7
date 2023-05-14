import Api from "./Api.js";
import DOM from "../modules/dom.js";
import Recipe from "./Recipe.js";
import search from "../modules/search.js";
import Tag from "./Tag.js";

export default class RecipeFactory {
    static createRecipes() {
        Api.getAllRecipes().forEach(recipe => {
            const item = new Recipe(recipe);
            DOM.append(item.view(), document.getElementById("recipes-container"));
        });
    }

    static mainSearchListener() {
        const searchPrincipal = document.getElementById('main-search__input');
        // Listener for user input on the main search bar
        searchPrincipal.addEventListener('input', (e) => {
            if (e.target.value.length >= 3 || e.inputType === "deleteContentBackward") {
                search(Tag.active, Recipe.instances);
            }
        })
    }
}
