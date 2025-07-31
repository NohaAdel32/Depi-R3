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
function filterArray(array,callbackfunction){
    let element=[]
 for(let i=0; i<array.length;i++){
    if(callbackfunction(array[i])){
        element.push(array[i])
    }
 }
 return element
}

let array2=[2,5,6,9]
console.log(filterArray(array2,x=>x%2===0))
///////////////////////////////////////////////////////////////////////////////
// 5 mapArray’
function mapArray(arr,callbackfunction){
    let array=[]
    for(let i=0;i<arr.length;i++){
        array.push(callbackfunction(arr[i]))
    }
    return array
}
let square=(item)=>(item*2)
console.log(mapArray(array,square))
/////////////////////////////////////////////////////////////////////////////////////
//6 reduceArray’
function reduceArray(arr,initial,callbackfunction){
    let acc=initial
 for(let i=0; i<arr.length;i++){
   acc= callbackfunction(arr[i],acc)
 }
 return acc
}
console.log(reduceArray(array,0,(item,acc)=>(item+acc)))
////////////////////////////////////////////////////////////////////////////////////
//7 forEachArray
function forEachArray(arr,callbackfunction){
for(let i=0;i<arr.length;i++){
   callbackfunction(arr[i])
}
}
function print(x){
    console.log(x)
}
forEachArray(array,print)
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
let keys = Object.keys(obj);     
let values = Object.values(obj);
let newObj={}
for(let i=0; i<keys.length;i++){
    newObj[values[i]] = keys[i];
}
  return newObj
}
const obj = { a: 1, b: 2, c: 3 } ;
console.log(invertObject(obj))
///////////////////////////////////////////////////////////////////////////////////
// 11 omitKeys
function omitKeys( obj,arrOfKeys){
    
   let newObj={}
   for(let i=0;i<arrOfKeys.length;i++){
    if(arrOfKeys[i]!="b" && arrOfKeys[i]!="d"){
       for (let key of arrOfKeys[i]) {
       if (key in obj) {
      newObj[key] = obj[key];
    }
    }
   }
  }
return newObj
}
let obj2= { a: 1, b: 2, c: 3, d: 4 }
let keys1=Object.keys(obj2);
console.log(omitKeys(obj2,keys1))
//////////////////////////////////////////////////////////////////////////////////
//12 pickKeys
function pickKeys( obj,arrOfKeys){
    
   let newObj={}
   for(let i=0;i<arrOfKeys.length;i++){
    if(arrOfKeys[i]==="b" || arrOfKeys[i]==="d"){
       for (let key of arrOfKeys[i]) {
       if (key in obj) {
      newObj[key] = obj[key];
    }
    }
   }
  }
return newObj
}
let obj3= { a: 1, b: 2, c: 3, d: 4 }
let keys3=Object.keys(obj3);
console.log(pickKeys(obj3,keys3))


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
function countOccurrences (arr,value){
 let count=0
 for(let i=0;i<arr.length;i++){
    if(arr[i]===value){
        count++
    }
 }
 return count
}
let arr = [1, 2, 3, 2, 4, 2,4];
console.log(countOccurrences (arr,4))

