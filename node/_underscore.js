const _ = require("underscore");

// ##################################### Collection Functions (Arrays or Objects) ############################################

// ===========================================================================================================================
// _.each(list, iteratee, [context])                                     Alias: forEach
const car = { make: 'Honda', model: 'Accord', year: 1998 };
const arr = ["apple", "pinaple", "banana", "chickoo", "orange"]

// 1 <~~new~~> 
// _.each(car, console.log);
// Honda make { make: 'Honda', model: 'Accord', year: 1998 }
// Accord model { make: 'Honda', model: 'Accord', year: 1998 }
// 1998 year { make: 'Honda', model: 'Accord', year: 1998 }

// 2 <~~new~~> each on object
// _.each(car, function (val, key, list) {
//     console.log(key) // make  model year
//     console.log(val) // Honda Accord 1998
// });

// 3 each on array
// _.each(arr, function (val, ind, list) {
//     console.log(ind) // 0 1 2 3 4
//     console.log(val) // apple pinaple banana chickoo orange
// });

// ===========================================================================================================================
// _.map(list, iteratee, [context])                                      Alias: collect
// 1
// var a = _.map([1, 2, 3], (num) => num * 3);
// console.log(a)                                  // [3, 6, 9]

// 2
var a = _.map({ one: 1, two: 2, three: 3 }, function (num, key) { return num * 3; });
console.log(a)                                      // [3, 6, 9]

var obj = { one: 1, two: 2, three: 3 }
var a = _.map(obj, function (val, key) { return { key: val * 3 } });
console.log(a)                                      // [3, 6, 9]

// var a = _.map([[1, 2], [3, 4]], _.first);
// console.log(a)                                      // [1, 3]