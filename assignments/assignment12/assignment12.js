function submit() {
    alert(output.textContent);
    // console.log(outputInt);
    console.log(digitsLength);
}

function reset() {
        outputInt = '';
        output.textContent = outputInt;
}

// ONE
function seven() {
    // let digits = outputInt.length;
    // console.log(digits);
    // console.log(digitsLength);
    // if (digitsLength == 3) {
    //     alert('Are you kidding me... You know phone numbers only have 10 digits, right??');
    // }
    // else {
        outputInt = '一';
        output.textContent += outputInt;
    // }
}

// TWO
function eight() {
    outputInt = '二';
    output.textContent += outputInt;
}

// THREE
function three() {
    outputInt = '三';
    output.textContent += outputInt;
}

// FOUR
function two() {
    outputInt = '四';
    output.textContent += outputInt;
}

// FIVE
function nine() {
    outputInt = '五';
    output.textContent += outputInt;
}

// SIX
function one() {
    outputInt = '六';
    output.textContent += outputInt;
}

// SEVEN
function five() {
    outputInt = '七';
    output.textContent += outputInt;
}

// EIGHT
function four() {
    outputInt = '八';
    output.textContent += outputInt;
}

//NINE
function six() {
    outputInt = '十';
    output.textContent += outputInt;
}

console.log("This code assigns the wrong numbers to each button and prints those incorrect numbers in Chinese. You'd have to translate all the numbers and remember which one is matched to each button to enter your number correctly.")

const output = document.querySelector('.output');
digitsString = JSON.stringify(output);
digitsLength = digitsString.length;
// console.log(length);
// console.log(typeof(digitsLength));

let outputInt = JSON.stringify(output.textContent);
// console.log(outputInt);
// console.log(typeof(outputInt));

// numberString = JSON.stringify(output);
// let digits = numberString.length;
// console.log(digits.length);
// console.log(typeof(outputInt));


const oneButton = document.querySelector('.one').addEventListener('click', one);
const twoButton = document.querySelector('.two').addEventListener('click', two);
const threeButton = document.querySelector('.three').addEventListener('click', three);
const fourButton = document.querySelector('.four').addEventListener('click', four);
const fiveButton = document.querySelector('.five').addEventListener('click', five);
const sixButton = document.querySelector('.six').addEventListener('click', six);
const sevenButton = document.querySelector('.seven').addEventListener('click', seven);
const eightButton = document.querySelector('.eight').addEventListener('click', eight);
const nineButton = document.querySelector('.nine').addEventListener('click', nine);
const submitButton = document.querySelector('.submit').addEventListener('click', submit);
const resetButton = document.querySelector('.reset').addEventListener('click', reset);
