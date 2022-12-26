/*

console.log(23 + 97);
console.log(1 + 2 + 3 + 4 + 5 + 6);
console.log((4 + 6 + 9) / 77);


let a = 10;

console.log(a);

console.log(9 * a);

let b = 7 * a;

console.log(b);


const MAX = 57;

let actual = MAX -13;

let percentage = actual  / MAX;

console.log(percentage)
*/


// lesson 3

function add7(num) {
    return num + 7;
}

console.log(add7(10));

function multiply(num1, num2) {
    return num1 * num2;
}

console.log(multiply(2, 3));

function capitalize(string) {
    const firstLetter = string.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();

    const restOfLetters = string.slice(1);
    const restOfLettersLower = restOfLetters.toLowerCase();

    return firstLetterCap + restOfLettersLower;
}

console.log(capitalize('STRING'));


function lastLetter(string) {
    const lastLetters = string.charAt(string.length - 1);

    return lastLetters;
    
}

console.log(lastLetter('String'));