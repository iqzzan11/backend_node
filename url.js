const url = require('url');

const urlSample = 'https://www.habbit.co.kr';
const parsedObject = url.parse(urlSample);

console.log(parsedObject);
console.clear();
console.log(parsedObject.href);
console.log(parsedObject.query);