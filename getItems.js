const fs = require("fs");

getAllItems("en_us.json");

function getAllItems(fileName) {
    data = readFile(fileName).split("\n");

    items = []

    for (line of data) {
        if (line.includes("item.minecraft")) {
            items.push(line.split(":")[0].slice(18, -1));
        }
    }

    return items;
}

function readFile(file) {
    const fileName = file;

    return fs.readFileSync(fileName, "utf-8");
}