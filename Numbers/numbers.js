// 1.Write a program to input 2 numbers and display the sum of the numbers to the console.

const sum = (num1, num2) => {
  console.log(num1 + num2);
};
sum(23, 42);

// 2.Write a JavaScript program to calculate the simple interest given P,R,T with the given formula.Where: P = principal amount T = time R = rate SI = simple interest

const simpleInterest = (principal, time, rate) => {
  let sI = (principal * time * rate) / 100;
  return console.log(sI);
};
simpleInterest(100, 2, 6);

// 3.Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'

const kineticEnergy = (massKg, velocityMs) => {
  let ki = 0.5 * massKg * velocityMs * velocityMs;
  return console.log(`${ki}Joules`);
};
kineticEnergy(10, 100);

// 4.Write a program to convert Fahrenheit to Celsius.

const celsiusToFahrenheit = (tempF) => {
  const tempDeg = 1.8 * tempF + 32;
  return console.log(tempDeg);
};
celsiusToFahrenheit(40);

// 5.Calculate the area, perimeter of a s1.re of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.

const squareProp = (side) => {
  const squareArea = side * side;
  const squarePerimeter = 4 * side;
  return console.log(`Area = ${squareArea}\nPerimeter = ${squarePerimeter}`);
};
squareProp(10);
const cubeProp = (side) => {
  const cubeVolume = side * side * side;
  const cubeSurfaceArea = 6 * side * side;
  return console.log(
    `Surface Area = ${cubeSurfaceArea}\nVolume = ${cubeVolume}`
  );
};
cubeProp(10);

// 6.Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.

const profitCalculate = (costPrice, sellPrice) => {
  let profit = sellPrice - costPrice;
  if (profit == 0) {
    console.log("No Profit No Loss");
  } else if (profit < 0) {
    console.log(`Loss of ${-1 * profit}`);
  } else {
    console.log(`Profit of ${profit}`);
  }
};

profitCalculate(1000, 100);

// 7.Write a program to calculate sum of N natural digits, as input by the users?

const sumOfNaturalNumber = (number) => {
  let sum = 0;
  for (i = 1; i <= number; i++) {
    sum += i;
  }
  return console.log(sum);
};

sumOfNaturalNumber(100);

// 9.Write a JavaScript program to compute the sum of all digits that occur in a given string

const sumOfDigits = (number) => {
  const numArr = number.toString().split("");
  const sum = numArr.reduce((accumulator, value) => {
    return (accumulator += parseInt(value));
  }, 0);
  console.log(sum);
};
sumOfDigits(12345678991);

// 10.Write a JavaScript program that reverses a number.

const reverseNumber = (number) => {
  const numArr = number.toString().split("");
  for (i = 0, j = numArr.length - 1; i <= j; i++, j--) {
    let temp = parseInt(numArr[i]);
    numArr[i] = parseInt(numArr[j]);
    numArr[j] = temp;
  }
  console.log(numArr.join(""));
};
reverseNumber(123455);

// 11.Write a Program to cyclically Rotate a Number by X positions in the left direction, as provided by the user
const leftRotate = (number, d) => {
  const numArr = number.toString().split("");
  let tempArr = numArr.slice(0, d);
  let anotherTempArr = numArr.slice(d, numArr.length);
  console.log([...anotherTempArr, ...tempArr].join(""));
};
leftRotate(12345, 4);

// function rotateLeft(d, arr) {

//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let newIndex = (i + arr.length - d) % arr.length;
//     newArr[newIndex] = arr[i];
//   }
//   return newArr;
// }

// console.log(rotateLeft(2, [3, 4, 5, 6, 7]));

// 12.Write a Program to convert Decimal to Binary.

const decimalToBinary = (number) => {
  let newArr = [];
  while (number !== 0) {
    let quotient = number / 2;
    let remainder = number % 2;
    newArr.unshift(remainder);
    number = parseInt(quotient);
  }

  console.log(newArr.join(""));
};
decimalToBinary(71);
