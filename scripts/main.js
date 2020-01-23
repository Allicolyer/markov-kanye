import { generate_map, generate_sentence } from "./markov.js";
import { kanye_quotes } from "./formatted-quotes.js";

const first_order_map = generate_map(kanye_quotes, 1);
const second_order_map = generate_map(kanye_quotes, 2);

document.addEventListener("DOMContentLoaded", function() {
  // const first_order_quote = document.getElementById("first_order_quote");
  const quote_text = document.getElementById("quote_text");
  const quote_button = document.getElementById("quote_button");

  quote_button.onclick = () => {
    // first_order_quote.innerHTML = generate_sentence(map);
    quote_text.innerHTML = generate_sentence(second_order_map);
  };
});
