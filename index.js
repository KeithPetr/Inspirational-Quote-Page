import { quotes } from '/quotes.js'

const quoteContainerEl = document.getElementById("quote-container")

function renderQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length)
    for (let i = 0; i < quotes.length; i++) {
        quoteContainerEl.innerHTML = `
            <p class="quote">
            ${quotes[randomNumber].quote}
            </p>
            <p class="author">-${quotes[randomNumber].author}</p>
        `
    }
}

renderQuote()