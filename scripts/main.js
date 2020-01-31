import { createMarkovChain, generateQuote } from "./markov.js";
import { kanyeQuotes } from "./formatted-quotes.js";

const firstOrderChain = createMarkovChain(kanyeQuotes, 1);
const secondOrderChain = createMarkovChain(kanyeQuotes, 2);
let markovChain = secondOrderChain;

//wait until the DOM is loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function() {
  const checkbox = document.querySelector("input[name=randomness]");
  const quoteText = document.getElementById("quote-text");
  const quoteButton = document.getElementById("quote_button");

  //toggles between the first order and second order markov chains
  checkbox.addEventListener("change", function() {
    if (this.checked) {
      markovChain = firstOrderChain;
    } else {
      markovChain = secondOrderChain;
    }
  });

  //Generate new setnence
  quoteButton.onclick = () => {
    quoteText.innerHTML = generateQuote(markovChain);
  };
});
