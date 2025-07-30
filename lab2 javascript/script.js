'use strict'
// 1  capitalize
function capitalizeWords(str){
    return str.slice(0,1).toUpperCase()+str.slice(1).toLowerCase()
}
console.log(capitalizeWords("noha"))
/////////////////////////////////////////////////////////////////////////////
//2 ‘mergeSortedArrays’
function mergeSortedArrays(arr1,arr2){
  let array3=arr1.concat(arr2).toSorted()
  return array3
}
let arr1=[1,3,5]
let arr2=[2,4,6]
console.log(mergeSortedArrays(arr1,arr2))
//////////////////////////////////////////////////////////////////////////////////
//3 ‘sumOfSquares’
function sumOfSquares(arr){
    let arraySquare=arr.map(item=>Math.pow(item,2))
 return arraySquare.reduce((acc , current)=>acc+current,0)
}
let array=[1,2,3]
console.log(sumOfSquares(array))
///////////////////////////////////////////////////////////////////////////////////
//4 ‘filterArray’
function filterArray(array){
    let even=array.filter(item=>item%2===0)
    return even
}
let array2=[2,5,6,9]
console.log(filterArray(array2))
///////////////////////////////////////////////////////////////////////////////
// 5 mapArray’
function mapArray(arr){
    let array=arr.map(item=>item*2)
    return array
}
console.log(mapArray(array))
/////////////////////////////////////////////////////////////////////////////////////
//6 reduceArray’
function reduceArray(arr){
  return arr.reduce((acc , current)=>acc+current,0)
}
console.log(reduceArray(array))
////////////////////////////////////////////////////////////////////////////////////
//7 forEachArray
function forEachArray(arr){
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
}
forEachArray(array)
/////////////////////////////////////////////////////////////////////////////////////
//8 findMax
function findMax(arr){
    return  Math.max(...arr)
    
}
let ans=findMax(array2)
console.log(`The Max NUM for array = ${ans} `)
////////////////////////////////////////////////////////////////////////////////////
//9 mergeObjects
function mergeObjects(target,source){
return Object.assign(target, source);
}
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
console.log(mergeObjects(target,source))
///////////////////////////////////////////////////////////////////////////////////
//10 invertObject
function invertObject(obj){
return Object.entries(obj)
  
}
const obj = { foo: "bar", baz: 42 };
console.log(invertObject(obj))
///////////////////////////////////////////////////////////////////////////////////
// 11 omitKeys
// function omitKeys(){
//    let obj= { a: 1, b: 2, c: 3, d: 4 }
// const updatedObj = Object.fromEntries(
//   Object.entries(obj).filter(([key]) => key !== ['a','d'])
// );
// }
//////////////////////////////////////////////////////////////////////////////////
//12 pickKeys



///////////////////////////////////////////////////////////////////////////////////
//13 reverseArray
function reverseArray(arr){
    let ans=arr.reverse()
    return ans
}
let array4=[5,6,7]
 console.log(reverseArray(array4))
//////////////////////////////////////////////////////////////////////////////////
//14 countOccurrences 
function countOccurrences (arr){
return arr.length
}
console.log(countOccurrences (array4))

