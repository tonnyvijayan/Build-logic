// 1.Find sum of an array and display the output . Example [10,4,5,2,5,6,9].

const sumArray = (...args) => {
    let totalSum = 0;
    for (i = 0; i < args.length; i++) {
        totalSum += args[i]
    }
    return console.log(totalSum)
}

sumArray(3, 2, 4, 5, 6, 7, 8)

// 2.Find average of an array and display the output.

const arrayAvg = (...args) => {
    let totalSum = 0;
    for (i = 0; i < args.length; i++) {
        totalSum += args[i]
    }
    return console.log(totalSum / args.length)
}

arrayAvg(3, 2, 4, 5, 6, 7, 8, 6)


// 3.Find maximum and minimum of an array

const arrMin = (...args) => {
    for (let l = 0; l < args.length - 1; l++) {
        for (let i = 0, j = i + 1; i, j < args.length; i++, j++) {
            if (args[i] > args[j]) {
                let temp = args[i]
                args[i] = args[j]
                args[j] = temp
            }

        }

    }
    console.log(args)
    return console.log(`Min number=${args[0]}, Max number=${args[args.length-1]}`)
}

arrMin(37, 11, 6, 6, 9, 4, 333, 234, 546, 234, 1)
// arrMin([37, 11, 6, 6, 9, 4, 333,234,546,234,1])


// 5.Find number of constants and vowels in a string

const vowels = (string) => {
    let arr = string.split("")
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === "a" || arr[i] === "e" || arr[i] === "i" || arr[i] === "o" || arr[i] === "u") {
            arr.splice(i, 1, null)
        }
    }

    let newArr = arr.filter((item) => {
        return item !== null;
    })

    return console.log(`Number of vowels in String = ${arr.length-newArr.length}\nNumber of Consonants in String = ${newArr.length}`)
}

vowels("hetfhhswidooree")


// pallindrome checker


const pallindrome = (...args) => {
    for (let i = 0, j = args.length - 1; i < args.length, j >= 0; i++, j--) {
        if (args[i] !== args[j]) {
            return console.log("not a pallindrome")
        }
    }
    return console.log("It is a pallindrome")
}

pallindrome(2, 1, 3, 3, 1, 2)