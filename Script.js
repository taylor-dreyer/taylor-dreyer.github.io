// Simple Functions
function tickUp() {
    let counter = document.getElementById("counter");
    counter.textContent = parseInt(counter.textContent) + 1;
}

function tickDown() {
    let counter = document.getElementById("counter");
    counter.textContent = parseInt(counter.textContent) - 1;
}

// Simple For Loop
function runForLoop() {
    let counter = parseInt(document.getElementById("counter").textContent);
    let result = "";
    for (let i = 0; i <= counter; i++) {
        result += i + " ";
    }
    document.getElementById("forLoopResult").textContent = result.trim();
}

// Repetition with Condition
function showOddNumbers() {
    let counter = parseInt(document.getElementById("counter").textContent);
    let result = "";
    for (let i = 1; i <= counter; i++) {
        if (i % 2 !== 0) {
            result += i + " ";
        }
    }
    document.getElementById("oddNumberResult").textContent = result.trim();
}

// Arrays
function addMultiplesToArray() {
    let counter = parseInt(document.getElementById("counter").textContent);
    let arr = [];
    if (counter >= 5) {
        for (let i = counter; i >= 5; i--) {
            if (i % 5 === 0) {
                arr.push(i);
            }
        }
    }
    console.log(arr);
}

// Objects and Form Fields
function printCarObject() {
    let carObj = {
        cType: document.getElementById("carType").value,
        cMPG: document.getElementById("carMPG").value,
        cColor: document.getElementById("carColor").value
    };
    console.log(carObj);
}

// Objects and Form Fields pt. 2
function loadCar(num) {
    let car;
    if (num === 1) car = carObject1;
    else if (num === 2) car = carObject2;
    else if (num === 3) car = carObject3;

    document.getElementById("carType").value = car.cType;
    document.getElementById("carMPG").value = car.cMPG;
    document.getElementById("carColor").value = car.cColor;
}

// Changing Styles
function changeColor(num) {
    let para = document.getElementById("styleParagraph");
    if (num === 1) para.style.color = "red";
    else if (num === 2) para.style.color = "green";
    else if (num === 3) para.style.color = "blue";
}