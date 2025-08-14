var textInput = document.getElementById("input");

/*function check() {
    const value = input.value;
    alert(value);
}*/

function reverseString(textInput) {
    //var re = /[\W_]/g;
    var re = /[^A-Za-z0-9]/g;
    var lowRegStr = textInput.toLowerCase().replace(re, "");
    const reversed = lowRegStr.split('').reverse().join('');
    return reversed;
}

function check() {
    const value = document.getElementById("input").value;
    const cleanedValue = value.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
    const reversed = reverseString(value);

    if(cleanedValue === reversed) {
        alert("A WILDD PALINDROME!");
        return true;
    } else {
        alert("Nice Try Diddy!");
        return false;
    }
}