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
