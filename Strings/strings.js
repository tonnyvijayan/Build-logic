// 1.Write a program that converts the string into uppercase

// const upperCase = (string) => {
//     return console.log(string.toUpperCase())
// }

// upperCase("32")


// 2.Write a program that reads two strings and append first string to the second. So if first string is Good second string is Morning , the program should print MorningGood

// const appendString = (stringOne, stringTwo) => {

//     return console.log(`${stringTwo}${stringOne}`)

// }

// appendString("Good", "morning")


// 3.Program that reads string and count number of characters present in the string

// const stringCount = (string) => {
//     let arrString = string.split("")
//     return console.log(arrString.length)
// }
// stringCount("hello")


// 4.Write a program that converts string like "124" to 124
// const strConvert = (string) => {
//     console.log(parseInt(string))
// }

// strConvert("1234")

// 5.Write a program to delete all vowels from a string. Assume string is not more than 80 characters long

const deleteVowels = (string) => {
    let arr = string.split("")
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === "a" || arr[i] === "e" || arr[i] === "i" || arr[i] === "o" || arr[i] === "u") {
            arr.splice(i, 1, null)

        }
    }
    let newArr = arr.filter((item) => {
        return item !== null;
    })
    return console.log(newArr)
}

deleteVowels("walatehoijkuujuk")