console.log("my first node js file");

const fs = require("fs");

fs.writeFile("myfirstfile.txt", "this is my first file created by node js", (err) => {
    if (err) {
        console.error("Error writing file:", err);
    } else {
        console.log("File written successfully!");
    }
});
