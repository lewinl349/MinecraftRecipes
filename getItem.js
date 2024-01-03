const fs = require("fs");

getRecipe("acacia_boat");

function getRecipe(item) {
    const recipeObj = JSON.parse(readFile(item));

    console.log(recipeObj.pattern);
}

function readFile(item) {
    let fileName = item + ".json";

    return fs.readFileSync(fileName, "utf-8");
}

