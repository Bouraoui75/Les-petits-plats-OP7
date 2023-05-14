const recipeDisplayer = (recipe, visible) => {
    if (recipe.element.classList.contains("hidden") === visible) {
        recipe.toggleVisibility();
    }
}

export default recipeDisplayer;