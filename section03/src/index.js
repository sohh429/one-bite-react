// const moduleData = require("./math");
//const {add, sub} = require("./math");
// console.log(moduleData.add(1,2))

import {add, sub} from "./math.js" // 확장자 모두 명시


import mul, {add, sub} from "./math.js" // 합쳐서 불러오기 가능

console.log(add(1,3))
// console.log('test');


