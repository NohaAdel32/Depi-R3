import {cloneObject,mergeObjects} from './utils.js'

const objA = { name: 'Noha', age: 30 };
const objB = { country: 'Egypt', age: 31 };

const merge=mergeObjects(objA,objB);
console.log(merge)

const clone=cloneObject(objA);
console.log(clone)