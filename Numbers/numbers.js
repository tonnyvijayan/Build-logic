// 1.Write a program to input 2 numbers and display the sum of the numbers to the console.

const sum = (num1, num2) => {
    console.log(num1 + num2)
};
sum(23, 42)

// 2.Write a JavaScript program to calculate the simple interest given P,R,T with the given formula.Where: P = principal amount T = time R = rate SI = simple interest

const simpleInterest = (principal, time, rate) => {
    let sI = (principal * time * rate) / 100
    return console.log(sI)
};
simpleInterest(100, 2, 6)

// 3.Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'

const kineticEnergy = (massKg, velocityMs) => {
    let ki = (0.5 * massKg * velocityMs * velocityMs)
    return console.log(`${ki}Joules`)

}
kineticEnergy(10, 100)


// 4.Write a program to convert Fahrenheit to Celsius.

const celsiusToFahrenheit = (tempF) => {
    const tempDeg = (1.8 * tempF + 32)
    return console.log(tempDeg)

}
celsiusToFahrenheit(40)




// 5.Calculate the area, perimeter of a s1.re of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.

const squareProp = (side) => {
    const squareArea = side * side;
    const squarePerimeter = 4 * side
    return console.log(`Area = ${squareArea}\nPerimeter = ${squarePerimeter}`)
}
squareProp(10)
const cubeProp = (side) => {
    const cubeVolume = side * side * side
    const cubeSurfaceArea = 6 * side * side
    return console.log(`Surface Area = ${cubeSurfaceArea}\nVolume = ${cubeVolume}`)
}
cubeProp(10)


// 6.Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.

const profitCalculate = (costPrice, sellPrice) => {
    let profit = sellPrice - costPrice
    if (profit == 0) {
        console.log("No Profit No Loss")
    } else if (profit < 0) {
        console.log(`Loss of ${-1*profit}`)
    } else {
        console.log(`Profit of ${profit}`)
    }
}

profitCalculate(1000, 100)


// 7.Write a program to calculate sum of N natural digits, as input by the users?

const sumOfNaturalNumber = (number) => {
    let sum = 0;
    for (i = 1; i <= number; i++) {
        sum += i;
    }
    return console.log(sum)
}

sumOfNaturalNumber(100)

