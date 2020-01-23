// import { kanye_quotes } from "./formatted-quotes.js";

export const generate_map = (sentences, order) => {
  const map = {};
  map._START_ = [];
  map._ORDER_ = order;
  sentences.forEach(sentence => {
    add_to_map(sentence, map, order);
  });
  return map;
};

const add_to_map = (sentence, map) => {
  const new_sentence =
    "_START_ " +
    sentence
      .toLowerCase()
      .replace(/[,;]/g, " PAUSE")
      .replace(/[\/#.!?$%\^&\*;:{}=\_`~()]/g, "")
      .replace(/\s\s+/g, " ") +
    " _END_";

  const words = new_sentence.split(" ");
  const order = map._ORDER_;

  if (order > 1) {
    map["_START_"].push(words.slice(1, order).join(" "));
  }

  for (let i = 0; i < words.length - order; i++) {
    const key = words.slice(i, i + order).join(" ");
    const next_word = `${words[i + order]}`;

    if (!map[key]) {
      // if nothing exists for that key create an array
      map[key] = [next_word];
    } else {
      //otherwise push it onto the array
      map[key].push(next_word);
    }
  }
};

//create new sentences

export const generate_sentence = map => {
  let key = "_START_";
  let sentence = ["_START_"];
  let max_length = 25;
  let counter = 0;
  const order = map._ORDER_;

  while (!key.includes("_END_")) {
    //pick a random word from the list. Words that appeared more frequently are listed more than once in the array, so this also function picks words in the proportion that they appear
    let length = map[key].length - 1;
    let random = Math.round(Math.random() * length);
    let next_word = map[key][random].split(" ");
    sentence.push(next_word);
    sentence = sentence.flat();
    key = sentence.slice(-order).join(" ");
    counter += 1;
    //start over if the sentence is getting too long without reaching an END
    if (counter >= max_length) {
      counter = 0;
      key = "_START_";
      sentence = ["_START_"];
    }
  }
  // remove _START_ and _END_ from sentence, replace PAUSE with commas, capitalize I, I'm, and first letter of the sentence, capitalize all proper nouns.
  let quote = sentence.slice(1, sentence.length - 1).join(" ");
  return (
    quote.charAt(0).toUpperCase() +
    quote.substring(1, quote.length) +
    "."
  )
    .replace(/axl rose/gi, "Axl Rose")
    .replace(/george bush/gi, "George Bush")
    .replace(/henry ford/gi, "Henry Ford")
    .replace(/howard hughes/gi, "Howard Hughes")
    .replace(/ i /g, " I ")
    .replace(/ i'm /g, " I'm ")
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
    .replace(/steve jobs/gi, "Steve Jobs")
    .replace(/trump/gi, "Trump")
    .replace(/walt disney/gi, "Walt Disney")
    .replace(/warhol/gi, "Warhol")
    .replace(/willy wonka/gi, "Willy Wonka")
    .replace(/ god's /g, " God's ")
    .replace(/ god /g, " God ")
    .replace(/ PAUSE /g, ", ");
};
