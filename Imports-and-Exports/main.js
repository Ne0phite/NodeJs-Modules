const mathModule = require('./math-module.js');
const stringModule = require('./string-module.js');

//mathModule
let sum = mathModule.sum;
let multiply = mathModule.multiply;
let divide = mathModule.divide;
let square = mathModule.square;

let sumOfTwoAndFour = sum(2, 4);
console.log("sum ", sumOfTwoAndFour);
let multiplyTwoAndFour = multiply(2, 4);
console.log("muntiply ", multiplyTwoAndFour)
let divideTwoByFour = divide(2, 4);
console.log("divide ", divideTwoByFour);
let squareOfTwo = square(2);
console.log("square ", squareOfTwo);

//stringModule
let reverse = stringModule.reverse;
let capFirst = stringModule.capFirst;
let isPali = stringModule.isPalindrome;

let reversedStr = reverse("Hola Mundo");
console.log("reverse ", reversedStr)
let strFirstLetterCapped = capFirst("hello, my name is steve, how may i help you?");
console.log("capFirst ", strFirstLetterCapped);
console.log("isPalindrome", isPali("abccba"));
