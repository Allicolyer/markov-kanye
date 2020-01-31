//wait until the DOM is loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function() {
  const checkbox = document.querySelector("input[name=randomness]");
  const quoteText = document.getElementById("quote-text");
  const quoteButton = document.getElementById("quote_button");

  //set the first order for the Markov chain to be 2
  const order = 2;

  //Toggles between the first order and second order Markov chains
  checkbox.addEventListener("change", function() {
    if (this.checked) {
      order = 1;
    } else {
      order = 2;
    }
  });

  //Generate a new quote
  quoteButton.onclick = () => {
    fetch(`https://kanyefun.now.sh/sentence/${order}`)
      .then(response => response.json())
      .then(res => (quoteText.innerHTML = res));
  };
});
