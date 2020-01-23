import { generate_map, generate_sentence } from "./markov.js";
import { kanye_quotes } from "./formatted-quotes.js";

const first_order_map = generate_map(kanye_quotes, 1);
const second_order_map = generate_map(kanye_quotes, 2);
let map = second_order_map;

//wait until the DOM is loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function() {
  const checkbox = document.querySelector("input[name=randomness]");
  const quote_text = document.getElementById("quote_text");
  const quote_button = document.getElementById("quote_button");

  //toggles between the first order and second order markov chains
  checkbox.addEventListener("change", function() {
    if (this.checked) {
      map = first_order_map;
    } else {
      map = second_order_map;
    }
  });

  //Generate new setnence
  quote_button.onclick = () => {
    quote_text.innerHTML = generate_sentence(map);
  };
});
