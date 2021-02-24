// 1.Given a and b, your function should return the value of ab

const power = (number, power) => {
    let value = number;
    for (i = 1; i < power; i++) {
        value = value * number;
    }
    return console.log(value)
};
power(10, 3)


// 2.Given length of a regular hexagon, your function should return area of the hexagon.

const areaOfHexagon = (side) => {
    let hexmultiplier = 2.598076;
    let totalArea = hexmultiplier * side * side
    return console.log(totalArea)
};
areaOfHexagon(10)


// 3.Given a sentence, your functions should return the number of words in the sentence.


const noOfWords = (sentence) => {
    let arr = sentence.split(" ");
    return console.log(`There are ${arr.length} words in your sentence`)
};
noOfWords("Today is a sunny day")


// 4.Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.


const findMin = (...args) => {
    let minNumber = Math.min(...args);
    return console.log(minNumber)
};

// const findMin = (...args) => console.log(Math.min(...args))
findMin(2, 5, 7, 89, -3, 4, 6);


// 5.Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.

const findMax = (...args) => {
    let maxNumber = Math.max(...args)
    return console.log(maxNumber)
};
findMax(2, 5, 7, 89, -3, 4, 6);


// 6.Given three angles of a triange, your function should return if it is a scalen, isosceles, equilateral triangle or not a triangle at all


const typeOfTraingle = (ang1, ang2, ang3) => {
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

const arrayLength1 = (...args) => {
    let i = 0;
    while (args[0] !== undefined) {
        args.pop(args[0])
        i = i + 1;
    }
    return console.log(i)
}
arrayLength1(2, 3, 4, 5, 6, 7, 8)
arrayLength1("hello", "how", "are", "you")

const arrayLength = (arr) => {
    return console.log(arr.length)
}
arrayLength2(2, 3, 4, 5, 6, 7, 8)

// 2.Given an array and an item, your function should return the index at which the item is present.

const indexOf = (arr, number) => {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === number) {
            return console.log(i)

        }

    }
}

indexOf([2, 3, 4, 5, 6, 7], 7)


// 3.Given an array and two numbers, your function should replace all entries of first number in an array with the second number.

const replace = (array, number, replace) => {
    for (i = 0; i < array.length; i++) {
        if (array[i] === number) {
            array[i] = replace;

        }
    }
    return console.log(array)
}
replace([5, 4, 8, 2, 5, 4, 1, 7, 9, 4, 9], 4, 33)


// 4.Given two arrays, your function should return single merged array.

const arrayMerge = (array1, array2) => {
    let mergedArray = [...array1, ...array2];
    return console.log(mergedArray)
}
arrayMerge([2, 3, 4, 5, 6], [6, 5, 3])


const arrayMerge1 = (array1, array2) => {
    const mergedArray = array1.concat(array2)
    return console.log(mergedArray)
}
arrayMerge1([2, 3, 4, 5, 6], [6, 5, 3])


// 5.Given a string and an index, your function should return the character present at that index in the string.

const charAt = (string, index) => {
    let strArr = string.split("");
    return console.log(strArr[index])
}

charAt("cardamon", 5)

// 6.Given two dates, your function should return which one comes before the other


const minDate = (date1, date2) => {
    let date1Array = date1.split("/");
    let date2Array = date2.split("/");

    if (parseInt(date1Array[2]) < parseInt(date2Array[2]) || parseInt(date1Array[2]) === parseInt(date2Array[2])) {

        if (parseInt(date1Array[1]) < parseInt(date2Array[1]) || parseInt(date1Array[1]) === parseInt(date2Array[1])) {

            if (parseInt(date1Array[0]) < parseInt(date2Array[0]) || parseInt(date1Array[0]) === parseInt(date2Array[0])) {
                console.log(`${date1} is min`)

            } else {
                console.log(`${date2} is min `)
            };

        } else {
            console.log(`${date2} is min `)
        };
    } else {
        console.log(`${date2} is min `)
    };


};

minDate("1/11/2020", "25/05/2012");