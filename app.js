// Selectors
// Basic Percentage
const bFirstNum = document.querySelector("#b-first-num");
const bSecondNum = document.querySelector("#b-second-num");
const bCalButn = document.querySelector("#b-calculate");
const bResultField = document.querySelector("#b-result");
// Add Percentage
const aFirstNum = document.querySelector("#a-first-num");
const aSecondNum = document.querySelector("#a-second-num");
const aCalButn = document.querySelector("#a-calculate");
const aResultField = document.querySelector("#a-result");
// Percentage of 
const pFirstNum = document.querySelector("#p-first-num");
const pSecondNum = document.querySelector("#p-second-num");
const pCalButn = document.querySelector("#p-calculate");
const pResultField = document.querySelector("#p-result");

//Event Listeners

bCalButn.addEventListener('click', calBasic)
aCalButn.addEventListener('click', calAdd)
pCalButn.addEventListener('click', calPOf)
// Functions

function calBasic(event) {
    event.preventDefault();
    let bResult = bFirstNum.value / 100 * bSecondNum.value;
    bResultField.value = Math.round((bResult +  Number.EPSILON) * 1000) / 1000;
    // console.log(bResult)
}

function calAdd(event) {
    event.preventDefault();
    let aResult = parseFloat(aFirstNum.value) / 100 * parseFloat(aSecondNum.value) + parseFloat(aFirstNum.value);
    aResultField.value = Math.round((aResult +  Number.EPSILON) * 1000) / 1000;
    // console.log(aResult)
}

function calPOf(event) {
    event.preventDefault();
    let pResult = parseFloat(pFirstNum.value) / parseFloat(pSecondNum.value) * 100;
    pResultField.value = Math.round((pResult +  Number.EPSILON) * 1000) / 1000;
    // console.log(pResult)
}