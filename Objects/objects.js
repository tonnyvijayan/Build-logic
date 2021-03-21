//1. Given an array of objects of student's marks:

// Print the name and total marks of each student.
// Print the name of student whose total marks is highest.
// Print the name of student whose total marks is lowest.
// Print the average marks of the class in computer subject.
// Print the grades of all students:
// Grade A if total marks is higher than or equal to 75%,
// Grade B if higher than or equal to 60%,
// Grade C if higher than or equal to 35%,
// Grade D if lower than 35%.
// Print the total number of students passed and their names. Pass when total marks is greater than 35%.

const studentDetails = [
  {
    roll: "1",
    name: "Rohan Singh",
    maths: 86,
    science: 90,
    english: 75,
    computer: 85,
  },
  {
    roll: "2",
    name: "Ritvik Patel",
    maths: 27,
    science: 30,
    english: 35,
    computer: 30,
  },
  {
    roll: "3",
    name: "Neha Maurya",
    maths: 75,
    science: 69,
    english: 40,
    computer: 75,
  },
  {
    roll: "4",
    name: "Mohit Verma",
    maths: 21,
    science: 31,
    english: 45,
    computer: 40,
  },
  {
    roll: "5",
    name: "Karan Trivedi",
    maths: 70,
    science: 80,
    english: 35,
    computer: 60,
  },
];

// student name and total marks
let newArr = studentDetails.map((item) => {
  return {
    fullname: `${item.name}`,
    obtainedMarks: parseInt(
      `${item.maths + item.science + item.english + item.computer}`
    ),
    totalMarks: 400,
    percentage: parseInt(
      `${
        ((item.maths + item.science + item.english + item.computer) / 400) * 100
      }`
    ),
  };
});

console.log(newArr);

//   // student with max marks
console.log(
  newArr.filter((item) => {
    return item.totalMarks === Math.max(...totalMarks);
  })
);

// student with min marks
console.log(
  newArr.filter((item) => {
    return item.totalMarks === Math.min(...totalMarks);
  })
);

//   computer average
const computer = studentDetails.reduce(
  (accumulator, item, index) => {
    return {
      ...accumulator,
      total: accumulator.total + item.computer,
      students: index + 1,
    };
  },
  { total: 0, students: 0 }
);

console.log(`${computer.total / computer.students}`);

//   Grade Calculation
const grade = newArr.map((item) => {
  return {
    ...item,
    grade:
      item.percentage > 75
        ? "A"
        : item.percentage > 60
        ? "B"
        : item.percentage >= 35
        ? "C"
        : "D",
  };
});

console.log(grade);

//   student pass
const studentPass = grade.filter((item) => {
  return item.percentage > 35;
});

console.log(studentPass);

// 2.Salary calculation using OOPS concept.Create a Class using ES6 in JavaScript named Employee

class Employee {
  constructor(name, id, basicSalary, hra, allowances) {
    this.name = name;
    this.id = id;
    this.basicSalary = basicSalary;
    this.hra = hra;
    this.allowances = allowances;
  }

  getSalary() {
    console.log(
      `Hi ${this.name} your net salary is ${
        this.basicSalary + this.hra + this.allowances
      }`
    );
  }
}

const ramesh = new Employee("Ramesh Salunke", "KPM344", 55000, 15000, 10000);
const sumit = new Employee("Sumit lala", "KPM324", 65000, 22000, 19000);

console.log(ramesh.getSalary());
console.log(sumit.getSalary());

// 3.Bank Account (Object Oriented Programming in JavaScript)
class BankAccount {
  constructor(name, bankAccountNumber, accountBalance, accountType, ifsc) {
    this.name = name;
    this.bankAccountNumber = bankAccountNumber;
    this.accountBalance = accountBalance;
    this.accountType - accountType;
    this.ifscCode = ifsc;
  }
  accountDetails() {
    return `${this.name}your account balance is ${this.accountBalance}`;
  }
}

const ramesh = new BankAccount(
  "Ramesh Salunke",
  "KBL4234",
  700000,
  "SB",
  "KBL000456"
);
const hiresh = new BankAccount(
  "Hiresh Vazar",
  "KBL1234",
  328004,
  "CB",
  "KBL000456"
);
const karan = new BankAccount(
  "Karan Shankar",
  "KBL1234",
  700000,
  "SB",
  "KBL000456"
);

console.log(ramesh.accountDetails());
console.log(hiresh.accountDetails());
console.log(karan.accountDetails());
// console.log(ramesh.constructor.name);

// 4.Given an array of objects of items in cart

const cartItems = [
  {
    id: "101",
    name: "Oreo",
    count: 2,
    price: 30.0,
    discount: 0.18,
  },
  {
    id: "102",
    name: "Red Bull",
    count: 1,
    price: 99.0,
    discount: 0.15,
  },
  {
    id: "103",
    name: "Dairy Milk Silk",
    count: 3,
    price: 175.0,
    discount: 0.05,
  },
  {
    id: "104",
    name: "Pulse Candy Pack",
    count: 1,
    price: 135.0,
    discount: 0.2,
  },
];

// totalCartItems
const totalItems = cartItems.reduce((accumulator, item) => {
  return (accumulator += item.count);
}, 0);
console.log(totalItems);

// totalCartValue
const totalCartValue = cartItems.reduce((accumulator, item) => {
  return (accumulator += item.price);
}, 0);
console.log(totalCartValue);

// totalDicountedValue
const totalDicountedValue = cartItems.reduce((accumulator, item) => {
  return (accumulator += item.price * (1 - item.discount));
}, 0);
console.log(totalDicountedValue);

// tax
const tax = 0.18;
const totalTax = totalCartValue * tax;
console.log(totalTax);
