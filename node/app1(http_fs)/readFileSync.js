var fs = require("fs");
var content = "we are fine... ";

const a = fs.readFileSync("WriteFileSync.txt");
// console.log(a);                                         //<Buffer 77 65 20 61 72 65 20 61 67 61 69 6e 20 66 69 6e 65 2e 2e 2e 20>
console.log(a.toString());                              //we are again fine... 

console.log("Finish File");                                     //Finish File

// output :
// we are again fine...
// Finish File
