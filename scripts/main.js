import { map, generate_sentence } from "./markov.js";
import {
  map_2_order,
  generate_sentence_2_order
} from "./markov-second-order.js";

document.addEventListener("DOMContentLoaded", function() {
  const first_order_quote = document.getElementById("first_order_quote");
  const quote_text = document.getElementById("quote_text");
  const quote_button = document.getElementById("quote_button");

  quote_button.onclick = () => {
    first_order_quote.innerHTML = generate_sentence(map);
    quote_text.innerHTML = generate_sentence_2_order(map_2_order);
  };
});
