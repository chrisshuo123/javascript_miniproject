// Declare Variable
// var green = document.getElementById("greenButton()");
// var red = document.getElementById("redButton()");
// var blue = document.getElementById("blueButton()");
// var random = document.getElementById("randomButton()");

// Create Random Function
function generateRandomColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    randomColor = randomColor.padStart(6, '0'); // Ensure 6 digits
    return `#${randomColor.toUpperCase()}`;
}

function greenButton() {
    document.body.style.backgroundColor = "green";
    console.log("Green button clicked");
} function redButton() {
    document.body.style.backgroundColor = "red";
    console.log("Red button clicked");
} function blueButton() {
    document.body.style.backgroundColor = "blue";
    console.log("Blue button clicked");
} function randomButton() {
    document.body.style.backgroundColor = generateRandomColor();
    console.log("Random button clicked");
}