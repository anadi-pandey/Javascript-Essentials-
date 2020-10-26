const testWrapper = document.querySelector(".test-wrapper");
const testArea  = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p");
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup",spellCHeck,false);
resetButton.addEventListener("click", reset, false);

function spellCHeck() {
    let textEntered = testArea.value;
    console.log(textEntered);
}

function start() {
    let textEnteredLength = testArea.value.length;
    console.log(textEnteredLength);
}

function reset(){
    console.log("RESET BUTTON PRESSSED");
}