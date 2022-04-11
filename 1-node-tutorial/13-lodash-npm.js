// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
//npm install -D -> to install like a dev dependency

// package.json - manifest file (store important info about project/package)
// manual approach (creat package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// npm start
// npm run dev

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(items)
console.log(newItems)

console.log("Hello world !!!")
