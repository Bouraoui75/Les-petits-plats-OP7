const Normalize = string => string.normalize('NFD').toLowerCase();

const searchMainInput = (recipe, visible) => {
    const searchBar = document.getElementById('main-search__input');
    const searchTerms = (searchBar.value.length >= 3) ? Normalize(searchBar.value) : null;
    // SEARCH BAR
    // If the user type on the main search bar and it's superior or egal to 3 characters
    if (searchTerms) {
        const recipeName = Normalize(recipe.name);
        const recipeDescription = Normalize(recipe.description);

        // If the recipe name or the recipe description are including the search terms, set visible to true
        if(recipeName.includes(searchTerms) || recipeDescription.includes(searchTerms)) {
            visible = true;
        }

        // if visible is always false, it means that the recipe doesn't match with the search terms
        // for now but maybe it will match with the ingredients
        if (visible === false) {
            recipe.ingredients.forEach(current => {
                const ingredientName = Normalize(current.ingredient);
                if (ingredientName.includes(searchTerms)) {
                    visible = true;
                }
            });
        }
    } else {
        visible = true;
    }

    return visible;
}

export default searchMainInput;