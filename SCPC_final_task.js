// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

const inputString = "hello world";
const outputString = reverseString(inputString);
console.log(outputString);

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

function sumPositiveNumbers(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num > 0) {
            sum += num;
        }
    }
    return sum;
}

const inputArray = [2, -5, 10, -3, 7];
const outputSum = sumPositiveNumbers(inputArray);
console.log(outputSum);

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

function findMostFrequentElement(arr) {
    const frequencyMap = {};
    let mostFrequentElement;
    let maxFrequency = 0;

    for (const num of arr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;

        if (frequencyMap[num] > maxFrequency) {
            mostFrequentElement = num;
            maxFrequency = frequencyMap[num];
        }
    }

    return mostFrequentElement;
}

const inputArr = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const output = findMostFrequentElement(inputArr);
console.log(output);

// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculate(num1, num2, operator) {
    return operator === "+"
        ? num1 + num2
        : operator === "-"
        ? num1 - num2
        : operator === "*"
        ? num1 * num2
        : operator === "/"
        ? num2 !== 0
            ? num1 / num2
            : "Error: Cannot divide by zero"
        : "Error: Invalid operator";
}

const num1 = 5;
const num2 = 3;
const operator = "+";
const result = calculate(num1, num2, operator);
console.log(result);
