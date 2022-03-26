const path = require("path");

// console.log(path.dirname('D:/jaldip/git/node.js/node/path_module/index.js'));            //D:/jaldip/git/node.js/node/path_module
// console.log(path.basename('D:/jaldip/git/node.js/node/path_module/index.js'));           //index.js
// console.log(path.extname('D:/jaldip/git/node.js/node/path_module/index.js'));            //.js

// console.log(path.parse('D:/jaldip/git/node.js/node/path_module/index.js'));
// {
    //     root: 'D:/',
    //     dir: 'D:/jaldip/git/node.js/node/path_module',
    //     base: 'index.js',
    //     ext: '.js',
    //     name: 'index'
//   }

const test = path.parse('D:/jaldip/git/node.js/node/path_module/index.js');
console.log(test.root);          //D:/
console.log(test.dir);           //D:/jaldip/git/node.js/node/path_module
console.log(test.name);          //index