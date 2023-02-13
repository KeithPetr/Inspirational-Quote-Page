import { quotes } from "/quotes.js";
import { images } from "/quotes.js";

const quoteContainerEl = document.getElementById("quote-container");
const backgroundContainerEl = document.getElementById("background-container");
console.log(images)

function renderQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  backgroundContainerEl.style.backgroundImage = `url("images/${images[randomNumber]}")`
  quoteContainerEl.innerHTML = `
            <p class="quote">
            ${quotes[randomNumber].quote}
            </p>
            <p class="author">-${quotes[randomNumber].author}</p>
        `;
}

renderQuote();
