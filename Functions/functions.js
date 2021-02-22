// 1.Given a and b, your function should return the value of ab

function power(number, power) {
    let value = number;
    for (i = 1; i < power; i++) {
        value = value * number;
    }
    return console.log(value)
};
power(10, 3)


// 2.Given length of a regular hexagon, your function should return area of the hexagon.

function areaOfHexagon(side) {
    let hexmultiplier = 2.598076;
    let totalArea = hexmultiplier * side * side
    return console.log(totalArea)
};
areaOfHexagon(10)


// 3.Given a sentence, your functions should return the number of words in the sentence.


function noOfWords(sentence) {
    let arr = sentence.split(" ");
    return console.log(`There are ${arr.length} words in your sentence`)
};
noOfWords("Today is a sunny day")


// 4.Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.


function findMin(...args) {
    let minNumber = Math.min(...args);
    return console.log(minNumber)
};

// const findMin = (...args) => console.log(Math.min(...args))
findMin(2, 5, 7, 89, -3, 4, 6);


// 5.Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.

function findMax(...args) {
    let maxNumber = Math.max(...args)
    return console.log(maxNumber)
};
findMax(2, 5, 7, 89, -3, 4, 6);


// 6.Given three angles of a triange, your function should return if it is a scalen, isosceles, equilateral triangle or not a triangle at all


function typeOfTraingle(ang1, ang2, ang3) {
    if (ang1 + ang2 + ang3 > 180 || ang1 + ang2 + ang3 < 180) {
        return console.log("Not a Traingle")
    } else if (ang1 === ang2 && ang2 === ang3) {
        return console.log("This an Equilateral Traingle")
    } else if (ang1 == ang2 || ang2 === ang3 || ang3 === ang1) {
        return console.log("This is an Isosceles traingle")
    } else if (ang1 !== ang2 && ang2 !== ang3 && ang3 !== ang1) {
        return console.log("This is a Scalene Traingle")
    };
};
typeOfTraingle(30, 60, 90)



// Medium

// 1.Given an array, your function should return the length of the array

function arrayLength(arr) {
    return console.log(arr.length)
}

arrayLength([2, 3, 4, 5, 6, 7])