const randomNumber = Math.floor(Math.random() * 204) + 1;

const randomPokemon = () => {
    // #1: TAMPILAN PADA HEADER
    const randomPokemonParagraph = document.getElementById("randomPokemon");
    
    // Generate a random number between 1 and 151
    //const randomNumber = Math.floor(Math.random() * 151) + 1;

    // Update the paragraph content
    randomPokemonParagraph.innerHTML = `<h1>Random Pokemon Number: ${randomNumber}</h1>`;
};

// #2: TAMPILAN PADA IMAGE
const showImage = (src, width, height, alt) => {
    let img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // Append to the specific container
    document.getElementById("image-container").appendChild(img);
}

// Call the function when the page loads

randomPokemon();
showImage(`img/${randomNumber}.png`, 236, 274, "A placeholder image");

/*window.onload = function() {
    showImage(`img/1.png`, 236, 274, "A placeholder image");
};*/