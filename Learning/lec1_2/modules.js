// const xyz = require('./people'); // result of running people.js

// console.log(xyz); // {} --> if no export is done in the people.js file otherwise xyz will contain export value

// console.log(xyz.people, xyz.ages);

// ------------------------------------------------------------------------------------------------------------------------------------------

const {people, ages} = require('./people');

console.log(people, ages);

const os = require('os');
// console.log(os);
console.log(os.platform(), os.homedir());