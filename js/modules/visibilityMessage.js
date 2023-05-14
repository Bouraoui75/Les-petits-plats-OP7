const visibilityMessage = () => {
    // If no recipe match, display a message to the user that no recipe match with the search
    const visibleRecipes = document.querySelectorAll('.recipe:not(.hidden)');
    if(visibleRecipes.length === 0){
        document.querySelector('.recipes-container .empty-msg').innerHTML = "Aucune recette ne correspond à votre critère... vous pouvez chercher « tarte aux pommes », « poisson », etc.";
        document.querySelector('.recipes-container .empty-msg').classList.add('visible');
    } else {
        document.querySelector('.recipes-container .empty-msg').classList.remove('visible');
    }
}

export default visibilityMessage;