//1. Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

let numberAdder = (n1, n2, n3, n4, n5) => {
    return n1 + n2 + n3 + n4 + n5;
};
console.log(numberAdder(5, 13, 7, 21, 48));


//2. Write a program to take a number input from user and determine whether the number is odd or even.

let readLineSync = require('readline-sync');
let userNumber = readLineSync.question("Please enter a number\n");
if (userNumber % 2 === 0) {
    return console.log("number is even")
};
console.log("number is odd")


// 3.Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

let num1 = 129;
let num2 = 251;

if (num2 - num1 < 0) {
    return console.log(`${num2} is minimum and ${num1} is maximum`);
};
console.log(`${num1} is minimum and ${num2} is maximum`)


// 4.Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17

let num1 = 8;
let num2 = 2;
let num3 = 7;

if (num3 > num2 && num3 > num1) {
    console.log("num3 is the max")
} else if (num2 > num3 && num2 > num1) {
    console.log("num2 is max")
} else {
    console.log("num1 is max")
};

// 5.Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

let num1 = 8;
let num2 = 2;
let num3 = 7;

if (num3 < num2 && num3 < num1) {
    console.log("num3 is the Minimum")
} else if (num2 < num3 && num2 < num1) {
    console.log("num2 is Minimum")
} else {
    console.log("num1 is Minimum")
};

// 6.Write program to take a month as an input from the user and find out whether the month has 31 days or not.

let readLineSync = require("readline-sync");
let month30 = ["JANUARY", "MARCH", "MAY", "JULY", "AUGUST", "OCTOBER", "DECEMBER"];

let userInput = readLineSync.question("Type in a month to check if it has 31 days\n").toUpperCase()

function dayFinder(userInput) {
    if (month30.includes(userInput)) {
        return console.log(`${userInput} has 31 days`)
    }
    console.log(`${userInput} doesn't have 31 days`)
};

dayFinder(userInput);


// Intermediate problems

// 1.Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

let arr = [];

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        arr.push("FizzBuzz")
    } else if (i % 3 === 0) {
        arr.push("Fizz")
    } else if (i % 5 === 0) {
        arr.push("Buzz")
    } else if (i > 0) {
        arr.push(i)
    }
};
console.log(arr);

// 2.Print the following star pattern

function starPattern(number) {
    let currentStars = "*";
    for (i = 1; i < number; i++) {
        console.log(currentStars)
        currentStars += "*"
    }
};
starPattern(33)

// 3.Write a program to take a number input from user and print multiplication table 12 times for that number

let readLineSync = require("readline-sync");
let userNumber = readLineSync.question("Please enter a number to get the table\n");

function multiplier(userNumber) {
    for (i = 1; i <= 12; i++) {
        console.log(`${userNumber}*${i}=${i*userNumber}`)
    }
};
multiplier(userNumber)


// 4.Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

function fiboGenerator(number) {
    let arr = [0];
    for (i = 1; i <= number; i++) {
        if (arr.length < 2) {
            arr.push(i)
        }
        arr.push(arr[arr.length - 1] + arr[arr.length - 2])

    }
    console.log(arr)
};
fiboGenerator(20)


// 5.Write a program to take an input from a user and find its Factorial

function factorialGenerator(number) {
    let finalValue = number;
    for (i = number - 1; i >= 1; i--) {
        finalValue = finalValue * i;
    };
    console.log(finalValue)
};
factorialGenerator(10)

// 6.Write a Program to take a number input from user and find if the number is Prime or not

function primeNumber(number) {
    for (i = number - 1; i > 1; i--) {
        if (number % i === 0) {
            return console.log("Not a prime number")
        }

    }
    console.log("Is a prime number")
};
primeNumber(101)

// 7.Write a program to take a day as an input and determine whether it is a weekday or weekend.

let weekDays = ["monday", "tuesday", "wednesday", "thursday"]
let weekEndDays = ["firday", "saturday"]

let readLineSync = require("readline-sync")
let userDate = readLineSync.question("Enter a day of the week\n").toLowerCase()

function dayFinder(day) {
    if (day === "sunday") {
        return console.log("It's a Sunday")
    } else if (weekDays.includes(day)) {
        return console.log(`${day} is a weekday`)
    } else if (weekEndDays.includes(day)) {
        return console.log(`${day} is  weekend`)
    }
    console.log("Please enter a valid day of the week")
};

dayFinder(userDate);