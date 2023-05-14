export default class Api {
    static recipes = [];
    static allIngredients = [];
    static allAppliances = [];
    static allUstensils = [];

    static init = async () => {
        const req = await fetch('recipes.json');
        if (!req.ok) {
            throw new Error('Could not fetch data');
        }
        const data = await req.json();
        Api.recipes = data.recipes;
    }

    /**
     * Retreive all ingredients from recipes
     * @returns {Array} Array of all ingredients
     */
    static getAllIngredients = () => {
        if (Api.allIngredients.length === 0) {
            Api.recipes.forEach(recipe => {
                recipe.ingredients.map( ingredients => {
                    const ingredient =  ingredients.ingredient;

                    if (!Api.allIngredients.includes(ingredient.toLowerCase())) {
                        Api.allIngredients = [...Api.allIngredients, ingredient.toLowerCase()];
                    }
                })
            })
        }

        return Api.allIngredients;
    }

    /**
     * Retreive all appliances from recipes
     * @returns {Array} Array of all appliances
     */
    static getAllAppliances = () => {

        if (Api.allAppliances.length === 0) {
            Api.recipes.forEach(recipe => {
                if (!Api.allAppliances.includes(recipe.appliance.toLowerCase())) {
                    Api.allAppliances = [...Api.allAppliances, recipe.appliance.toLowerCase()];
                }
            })
        }

        return Api.allAppliances;
    }

    /**
     * Retreive all ustensiles from recipes
     * @returns {Array} Array of all ustensiles
     */
    static getAllUstensils = () => {
        if (Api.allUstensils.length === 0) {
            Api.recipes.forEach(recipe => {
                recipe.ustensils.map( ustensile => {

                    if (!Api.allUstensils.includes(ustensile.toLowerCase())) {
                        Api.allUstensils = [...Api.allUstensils, ustensile.toLowerCase()];
                    }
                })
            })
        }

        return Api.allUstensils;
    }

    /**
     * Retreive all existing recipes
     * @returns {Array} Array of all recipes   
    */
    static getAllRecipes = () => {
        return Api.recipes;
    }

    static getRecipe = (id) => {
        const recipe = Api.recipes.find(recipe => recipe.id === id);

        if (recipe.length !== 1) {
            throw new Error('Recipe not found');
        }
        return recipe[0];
    }
}
