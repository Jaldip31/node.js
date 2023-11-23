const _ = require("underscore");
// const arr = [
//     {
//         "Time": "Thu Mar 22 2012 13:41:22",
//         "club": {
//             "club_Speed": 25.740025740025743,
//             "TotalDistance": null,
//             "Club": "62e3a0380a6a7c22fdd6a79a"
//         }
//     },
//     {
//         "Time": "Thu Mar 22 2012 13:41:22",
//         "club": {
//             "club_Speed": 34.31409248583764,
//             "TotalDistance": null,
//             "Club": "62e3a0bd0a6a7c22fdd6a7b2"
//         }
//     },
//     {
//         "Time": "Thu Mar 22 2012 13:41:23",
//         "club": {
//             "club_Speed": 25.740025740025743,
//             "TotalDistance": null,
//             "Club": "62e3a0380a6a7c22fdd6a79a"
//         }
//     },
//     {
//         "Time": "Thu Mar 22 2012 13:41:23",
//         "club": {
//             "club_Speed": 34.31409248583764,
//             "TotalDistance": null,
//             "Club": "62e3a0bd0a6a7c22fdd6a7b2"
//         }
//     },
//     {
//         "Time": "Thu Mar 22 2012 13:41:23",
//         "club": {
//             "club_Speed": 34.31409248583764,
//             "TotalDistance": null,
//             "Club": "62e3a0bd0a6a7c22fdd6a7b2"
//         }
//     }
// ];

// const result = [];

// arr.forEach(ele => {
//     const a = result.filter(element => element.Time == ele.Time)
//     if (a.length == 0) {
//         result.push({
//             Time: ele.Time,
//             club: [ele.club]
//         })
//     }
//     else {
//         a[0].club.push(ele.club)
//     }
// })
// console.log("result===========", result)

// const obj = { one: 1, two: 2, three: 3 };

// for (let key in obj) {
//     obj[key] = obj[key] * 3
// }

// let b = _.each(obj, (val, key, list) => list[key] = val * 3)
// let b = _.each(obj, _.first)

// console.log("obj", obj)
// console.log("b-===", b)

// var list = [[0, 1], [2, 3], [4, 5]];
// var flat = _.reduce(list, function (a, b) { return a.concat(b); }, []);
// console.log(flat)

// const obj = [{ one: 1 }, { two: 2 }, { three: 3 }];
// const c = _.findWhere(obj, { two: 2 });
// console.log(c)
const obj = [{ one: 1 }, { two: 2 }, { three: 3 }];
// const obj = ["one", "two", "thre"];
const c = obj.filter((ele) => "two" in ele);
// const c = obj.includes("two");
// const c = obj.includes({ two: 3 });

// console.log(c);

// const a = _.groupBy(arr, 'Time')
// console.log("aaaaa", a)

// for (let key in a) {
//     console.log(a[key])
// }
