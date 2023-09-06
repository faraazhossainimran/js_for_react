// 'almas', 5, true, {}, []
// '', 0, false, null, undefined

let myVar = 5;
// check any truthy 
if(myVar){
    myVar = myVar * 100;
} else {
    myVar = 0;
}

let myMoney = 50;
// check negative or falsy anything
if(!myMoney){
 console.log('coffee khabo');
}

const money = 80;
let food;
if(money > 100){
    food = 'biriyani';
} else {
    food = 'cha kha'
}

// ternary
let food1 = money > 100? 'biriyani' : 'cha kha';
console.log(food1);

// number to sting - conversion
const num1 = 50;
console.log(typeof num1);
const numStr = num1 + '';
console.log(typeof numStr);

// string to number - conversion
const input = '500'
const inputNum = +input;
console.log(typeof inputNum);


// 
const isActive = false;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');

isActive ? showUser() : hideUser();
// use of &&
isActive && showUser();
//  use of || 
isActive || hideUser();

// toggle bolean
isActive = !isActive



