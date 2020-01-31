export const createMarkovChain = (quotes, order) => {
  const markovChain = {};
  markovChain._ORDER_ = order;
  markovChain._START_ = [];

  // Add _START_ and _END_ to each quote, make everything lowercase, replace all commas and semi-colon with _PAUSE_, remove other puncuation, remove extra spaces
  quotes.forEach(quote => {
    const newQuote =
      "_START_ " +
      quote
        .toLowerCase()
        .replace(/[\/#.!?$%\^&\*:{}=\_`~()]/g, "")
        .replace(/[,;]/g, " _PAUSE_")
        .replace(/\s\s+/g, " ") +
      " _END_";

    //Turn each quote into an array called words
    const words = newQuote.split(" ");
    const order = markovChain._ORDER_;

    //If the order is greater than 1, add starting words to the Markov chain under the key "_START_"
    if (order > 1) {
      markovChain["_START_"].push(words.slice(1, order).join(" "));
    }

    //For each combination of words that is 'order' long, add them as a key to the Markov chain and add the next word as the value
    for (let i = 0; i < words.length - order; i++) {
      const key = words.slice(i, i + order).join(" ");
      const next_word = `${words[i + order]}`;

      if (!markovChain[key]) {
        // if nothing exists for that key create an array
        markovChain[key] = [next_word];
      } else {
        //otherwise push it onto the array
        markovChain[key].push(next_word);
      }
    }
  });
  return markovChain;
};

//Generate a quote from a Markov chain
export const generateQuote = markovChain => {
  let key = "_START_";
  let quote = ["_START_"];
  let max_length = 25;
  let counter = 0;
  const order = markovChain._ORDER_;

  while (!key.includes("_END_")) {
    //Pick a random word from the list. Words that appeared more frequently are listed more than once in the array, so words will be picked in proportion to their frequency
    let length = markovChain[key].length - 1;
    let random = Math.round(Math.random() * length);
    let next_word = markovChain[key][random].split(" ");
    quote.push(next_word);
    quote = quote.flat();
    key = quote.slice(-order).join(" ");
    counter += 1;
    //start over if the quote is getting too long without reaching an _END_
    if (counter >= max_length) {
      counter = 0;
      key = "_START_";
      quote = ["_START_"];
    }
  }

  // remove _START_ and _END_ from quote, replace _PAUSE_ with commas, capitalize I, I'm, and first letter of the quote, capitalize all proper nouns.
  let formattedQuote = quote.slice(1, quote.length - 1).join(" ");
  return (
    formattedQuote.charAt(0).toUpperCase() +
    formattedQuote.substring(1, formattedQuote.length) +
    "."
  )
    .replace(/axl rose/gi, "Axl Rose")
    .replace(/america/gi, "America")
    .replace(/american/gi, "American")
    .replace(/america's/gi, "America's")
    .replace(/eminem/gi, "Eminem")
    .replace(/george bush/gi, "George Bush")
    .replace(/henry ford/gi, "Henry Ford")
    .replace(/howard hughes/gi, "Howard Hughes")
    .replace(/ i /g, " I ")
    .replace(/ i'm /g, " I'm ")
    .replace(/ i'll /g, " I'll ")
    .replace(/ i've /g, " I've ")
    .replace(/ i'd /g, " I'd ")
    .replace(/iphone/g, "iPhone")
    .replace(/james perse/gi, "James Perse")
    .replace(/jesus/gi, "Jesus")
    .replace(/jimi hendrix/gi, "Jimi Hendrix")
    .replace(/jim morrison/gi, "Jim Morrison")
    .replace(/kanye west/gi, "Kanye West")
    .replace(/kathie lee/gi, "Kathie Lee")
    .replace(/louis vuitton/gi, "Louis Vuitton")
    .replace(/ lol /g, " LOL ")
    .replace(/marc jacobs/gi, "Marc Jacobs")
    .replace(/michael jordan/gi, "Michael Jordan")
    .replace(/michael jackson/gi, "Michael Jackson")
    .replace(/michelangelo/gi, "Michelangelo")
    .replace(/motown/g, "Motown")
    .replace(/picasso/g, "Picasso")
    .replace(/paris/g, "Paris")
    .replace(/regis/gi, "Regis")
    .replace(/rick owens/gi, "Rick Owens")
    .replace(/shakespeare/gi, "Shakespeare")
    .replace(/steve jobs/gi, "Steve Jobs")
    .replace(/trump/gi, "Trump")
    .replace(/walt disney/gi, "Walt Disney")
    .replace(/warhol/gi, "Warhol")
    .replace(/willy wonka/gi, "Willy Wonka")
    .replace(/ god's /g, " God's ")
    .replace(/ god /g, " God ")
    .replace(/ _PAUSE_ /g, ", ");
};
