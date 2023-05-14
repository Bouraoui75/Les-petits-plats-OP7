const searchTags = (activeTags, recipe, visible) => {
    // TAG FILTERS
    // If there is any active tags, check if the recipe has any of them
    if (activeTags.length > 0) {
        const appareils = [recipe.appliance.toLowerCase()];
        const ingredients = recipe.ingredients.map(ingredients => ingredients.ingredient.toLowerCase());
        const ustensils = recipe.ustensils.map(ustensil => ustensil.toLowerCase());
        // Get all the tags
        const allFilters = [...appareils, ...ingredients, ...ustensils];

        activeTags.forEach(tag => {
            // If the tag is not included in allFilters, set visible to false
            if (!allFilters.includes(tag.name.toLowerCase())) {
                visible = false;
            }
        });
    }

    return visible;
}

export default searchTags;