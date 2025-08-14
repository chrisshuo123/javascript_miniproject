function getQuotes() {
    const quoteArray = [
        ["Success is not final, failure is not fatal: It is the courage to continue that counts.", "-- Winston Churchill"],
        ["Believe you can and you're halfway there.", "Theodore Roosevelt"],
        ["Your limitation—it's only your imagination.", "Annonymous"],
        ["Push yourself, because no one else is going to do it for you.", "Annonymous"],
        ["The harder you work for something, the greater you'll feel when you achieve it.", "Annonymous"],
        ["Dream bigger. Do bigger.", "Annonymous"],
        ["Don’t stop when you’re tired, stop when you’re done.", "Annonymous"],
        ["Wake up with determination, go to bed with satisfaction.", "Annonymous"],
        ["Small steps every day lead to big results.", "Annonymous"],
        ["If it doesn’t challenge you, it won’t change you.", "Annonymous"]
    ]
    return quoteArray;
}


/*const quoteArray = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts. -- Winston Churchill",
    "Believe you can and you're halfway there. -- Theodore Roosevelt",
    "Your limitation—it's only your imagination. -- Annonymous",
    "Push yourself, because no one else is going to do it for you. -- Annonymous",
    "The harder you work for something, the greater you'll feel when you achieve it. -- Annonymous",
    "Dream bigger. Do bigger. -- Annonymous",
    "Don’t stop when you’re tired, stop when you’re done. -- Annonymous",
    "Wake up with determination, go to bed with satisfaction. -- Annonymous",
    "Small steps every day lead to big results. -- Annonymous",
    "If it doesn’t challenge you, it won’t change you. -- Annonymous"
]*/

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote() {
    const quoteArray = getQuotes(); // Get the array of quotes
    
    //quoteElement.innerHTML = "Hello World";
    let numberGenerator = Math.floor(Math.random() * quoteArray.length);
    const quote = quoteArray[numberGenerator];
    quoteElement.innerHTML = `"${quote[0]}" --${quote[1]}`;
    //quoteElement.innerHTML = `"${quote[0]}" --${quote[1]}`;
}

generateQuote();
//const [quote, author] = getRandomQuote();
//console.log(`"${quote}" --${author}`);

