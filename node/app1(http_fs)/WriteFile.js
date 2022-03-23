var fs = require("fs");
var content = "we are fine... ";

fs.writeFile("WriteFile.txt", content, "utf-8", function (error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("writing file completed");
    }
})
console.log("Finish File");                                     //Finish File

// output :
// Finish File
// writing file completed


