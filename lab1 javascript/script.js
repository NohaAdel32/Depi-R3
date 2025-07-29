'use strict'
// 1 type of var
function type_var(x){
   return typeof(x)
}
console.log(type_var("noha"))

// 2 add $ sub $ multi $ div
function add(num1,num2){
  let  result=num1+num2
    console.log(`Addition for two NUM: ${num1}+${num2}=${result}`)
}
function minus(num1,num2){
  let  result=num1-num2
    console.log(`Substraction for two NUM: ${num1}-${num2}=${result}`)
}
function multi(num1,num2){
  let  result=num1*num2
    console.log(`Multiple for two NUM: ${num1}*${num2}=${result}`)
}
function div(num1,num2){
  let  result=num1/num2
    console.log(`Division for two NUM: ${num1}/${num2}=${result}`)
}
add(2,5)
minus(5,2)
multi(5,2)
div(10,2)
////////////////////////////////////////////////////////////////////////////////////
// 3 NaN
function numOrnot(num){
 let  result= isNaN(num)
console.log(`The NUM or NOT: ${result}`)
}
numOrnot('58')
///////////////////////////////////////////////////////////////////////////////////

//4 even or odd
function evenOrodd(num){
    return num%2===0
}
let ans=evenOrodd(6)
console.log(`the NUM even or odd : ${ans}`)

/////////////////////////////////////////////////////////////////////////////////////
//5 concatonation
function AddTwoString(str1,str2){
    console.log(str1+" "+str2)
}
AddTwoString("Noha","Adel")
//////////////////////////////////////////////////////////////////////////////////////
//6 uppercase
function convTOupper(str){
    let result=str.toUpperCase()
    console.log(`Convert ${str} to uppercase : ${result}`)
}
convTOupper("nice day")
//////////////////////////////////////////////////////////////////////////////////////
// 7 indexOf
function index(str){
    let result=str.indexOf("d")
    console.log(`index of "d" for ${str} : ${result}`)
}
index("nice day")
/////////////////////////////////////////////////////////////////////////////////
// 8 greet function

function greet(name){
    return `Hello , ${name}`
}
console.log(greet("Noha"))
///////////////////////////////////////////////////////////////////////////////
//9 check null or undefined
function CheckNullOrUndefined(value){
       return value === null || value === undefined;
    }

console.log(CheckNullOrUndefined(0))
///////////////////////////////////////////////////////////////////////////////////////
//10 random
function generateRandom(x,y){
    let result= x+(y-2)*Math.random()
    console.log(`The random NUM (${x},${y})= ${result}`)
}
generateRandom(7,9)
/////////////////////////////////////////////////////////////////////////////////////////
// 11 positive or negative or zera
function checkNum(num){
    let result = num==0?"Zero":(num>0?"positive":"negative")
    console.log(`The Num ${num} is ${result}`)
}
checkNum(-9)
///////////////////////////////////////////////////////////////////////////////////////
// 12 eval
function evaluation(expression){
    return eval(expression)
}
let x=5
console.log(evaluation("x=x-2"))