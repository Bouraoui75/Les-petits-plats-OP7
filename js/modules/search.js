import FilterDropdown from '../class/FilterDropdown.js';
import searchTags from './searchTags.js';
import searchMainInput from './searchMainInput.js';
import visibilityMessage from './visibilityMessage.js';
import recipeDisplayer from './recipeDisplayer.js';

const search = (activeTags, recipes) => {
    for (let i = 0; i < recipes.length; i++) {
        let recipe = recipes[i];
        // Set recipe visible to false by default
        let visible = false;

        // If the main search bar is used, check if the recipe match with the search terms
        visible = searchMainInput(recipe, visible);
        
        // If tags are used, check if the recipe match with the tags
        visible = searchTags(activeTags, recipe, visible);

        // Toggle the recipe visibility according the search results
        recipeDisplayer(recipe, visible);
        
    }

    // According the recipes visibility, we update the filters dropdowns
    FilterDropdown.updateDropDowns();

    // Message displayer
    visibilityMessage();
}

export default search;