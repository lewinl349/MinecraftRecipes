const fs = require("fs");

// This only gets recipes from shaped crafting. (Have to check for smelting, shapeless, etc...)

//const recipe = getRecipe("acacia_boat");
const recipe = getRecipe("piston");

for (x of recipe) {
    console.log(x);
}

function getRecipe(item) {
    const recipeObj = JSON.parse(readFile(item));

    return convertToArray(recipeObj.pattern, getIngredients(recipeObj.key));
}

function getIngredients(data) {
    const ingredientSymbols = {};

    for (symbol in data) {
        for (item in data[symbol]) {
            ingredientSymbols[symbol] = data[symbol][item];
        }      
    }

    //console.log(ingredientSymbols);
    return ingredientSymbols;
}

function readFile(item) {
    const fileName = item + ".json";

    return fs.readFileSync(fileName, "utf-8");
}

function convertToArray(pattern, ingredientSymbols) {
    const recipe = [];

    for (let i = 0; i < pattern.length; i++) {
        recipe.push([]);
        for (letter of pattern[i]) {
            if (letter == " ") {
                recipe[i].push("");
            }
            else {
                recipe[i].push(ingredientSymbols[letter]);
            }
        }
    }

    return recipe;
}

