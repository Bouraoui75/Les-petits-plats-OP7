import Api from "./Api.js";
import Tags from "./Tag.js";
import FilterDropdownFactory from "./FilterDropdownFactory.js";

const INGREDIENT = 'ingredient';
const APPLIANCE = 'appareil';
const USTENSIL = 'ustensile';

export default class TagFactory {

    static createTags = () => {
        const ingredients = Api.getAllIngredients().map(ingredient => new Tags(INGREDIENT, ingredient));
        const appareils = Api.getAllAppliances().map(appareil => new Tags(APPLIANCE, appareil));
        const ustensiles = Api.getAllUstensils().map(ustensile => new Tags(USTENSIL, ustensile));

        // create object with all tags
        const tags = {
            ingredients,
            appareils,
            ustensiles
        }

        FilterDropdownFactory.createFilterDropdown(tags);
    }
}
