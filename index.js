let frase = null;
let autor = null;

document.addEventListener("DOMContentLoaded", setup);

async function setup() {
    const url = 'https://quote-garden.herokuapp.com/api/v3/quotes/random';
    const response = await fetch(url);
    const result = await response.json();
    
    frase = result.data[0].quoteText;
    autor = result.data[0].quoteAuthor;
}

