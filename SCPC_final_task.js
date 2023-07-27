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

// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_-+=[]{}|;:,.<>?";

    const allChars =
        uppercaseLetters + lowercaseLetters + numbers + specialChars;
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
    }

    return password;
}

const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);

// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInteger(romanNumeral) {
    const romanValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let integerValue = 0;

    for (let i = 0; i < romanNumeral.length; i++) {
        const currentValue = romanValues[romanNumeral[i]];
        const nextValue = romanValues[romanNumeral[i + 1]];

        if (currentValue < nextValue) {
            integerValue -= currentValue;
        } else {
            integerValue += currentValue;
        }
    }

    return integerValue;
}

const romanNumeral = "XXI";
console.log(romanToInteger(romanNumeral));
