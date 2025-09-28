export function add(num1,num2){
 console.log(`the add NUM = ${num1+num2}`)
}
export function subtract(num1,num2){
     console.log(`the add NUM = ${num1-num2}`)
}
export function multiply(num1,num2){
     console.log(`the add NUM = ${num1*num2}`)
}
export function divide(num1,num2){
     if (num2 === 0) {
    throw new Error("Cannot divide by zero");
  }
     console.log(`the add NUM = ${num1/num2}`)
}