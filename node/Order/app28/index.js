const _ = require("underscore");
const arr = [1, 2, 3];

// const a = _.map([11, 22, 33], console.log);
// const a = _.each({ one: 1, two: 2, three: 3 }, alert);

// const a = _.map([1, 2, 3], function (num) { return num * 3; });
// const a = _.map([1, 2, 3], function (num) {
//     console.log("num======", num);
// });

// const b = _.map({ one: 1, two: 2, three: 3 }, function (num, key) { return num * 3; })
// const b = _.map({ one: 1, two: 2, three: 3 }, function (num, key) {
//     console.log(num, key)
//     // return num * 3;  
// })

// console.log(b);


const a = _.invoke([[5, 1, 7], [3, 2, 1]], "some");
console.log("=====", a)

