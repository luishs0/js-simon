
//Facciamo partire il timer in h1
// Stampare in h2 un array con 5 numeri casuali
    // Creare un array di 5 numeri casuali
    // Stamparli in h2 

//Quando il timer arriva a 0 si ferma e pulliamo h2

//Chiedere all'utente 5 numeri tramite 5 prompt e salvarli
//confrontare i numeri dell'array con i numeri che ha scritto l'utente

let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let msg = document.querySelector(".msg");
let firstNumber = 30;

let numbers = [];
let userNumbers = [];

while (numbers.length < 5) {
    let rndNumber = getRndInteger(1, 100);
    if (!numbers.includes(rndNumber)) {
        numbers.push(rndNumber);
    }
}

console.log(numbers);

h2.innerHTML = numbers;

const timer = setInterval(timerFunction, 1000);

const timerQuestion = setTimeout(question, (firstNumber + 4) * 1000);

console.log(userNumbers);

const resultGame = setTimeout(comparing, (firstNumber + 5) * 1000);




console.log(userNumbers[0]);


// FUNCTIONS--------------------------------------
function timerFunction() {
    if (firstNumber >= 0) {
        h1.innerHTML = firstNumber;
        firstNumber--;
    } else {
        h2.classList.add("d-none");
    }
}

function question() {
    for (let i = numbers.length; i > 0; i--) {
        let numberUser = parseInt(prompt(`Dimmi il ${i} numero`));
        userNumbers.push(numberUser);
    }
}

function comparing() {
    for (let k = 0; k < numbers.length; k++) {
        if (userNumbers[0] == numbers[k]) {
            msg.innerHTML += ` ${userNumbers[0]}`
        } 
        if (userNumbers[1] == numbers[k]) {
            msg.innerHTML += ` ${userNumbers[1]}`
        }
        if (userNumbers[2] == numbers[k]) {
            msg.innerHTML += ` ${userNumbers[2]}`
        }
        if (userNumbers[3] == numbers[k]) {
            msg.innerHTML += ` ${userNumbers[3]}`
        }
        if (userNumbers[4] == numbers[k]) {
            msg.innerHTML += ` ${userNumbers[4]}`
        }
    }
    msg.classList.remove("d-none");
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
