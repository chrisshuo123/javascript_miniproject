const randomPokemon = () => {
    const randomPokemonParagraph = document.getElementById("randomPokemon");
    
    // Generate a random number between 1 and 151
    const randomNumber = Math.floor(Math.random() * 151) + 1;

    // Update the paragraph content
    randomPokemonParagraph.innerHTML = `<h1>Random Pokemon Number: ${randomNumber}</h1>`;
};

randomPokemon();