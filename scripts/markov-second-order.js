import { kanye_quotes } from "./formatted-quotes.js";

const generate_map = sentences => {
  const map = {};
  map["START"] = [];
  sentences.forEach(sentence => {
    add_to_map(sentence, map);
  });
  return map;
};

const add_to_map = (sentence, map) => {
  const new_sentence =
    "START " +
    sentence
      .toLowerCase()
      .replace(/[,;]/g, " PAUSE")
      .replace(/[\/#.!?$%\^&\*;:{}=\_`~()]/g, "")
      .replace(/\s\s+/g, " ") +
    " END";

  const words = new_sentence.split(" ");

  map["START"].push(words[1]);

  for (let i = 0; i < words.length - 2; i++) {
    const key = `${words[i]} ${words[i + 1]}`;
    const next_word = `${words[i + 2]}`;

    if (!map[key]) {
      // if nothing exists for that key create an array
      map[key] = [next_word];
    } else {
      //otherwise push it onto the array
      map[key].push(next_word);
    }
  }

  //Remove END from the map
  // delete map.END;
};

//creating new sentences

export const generate_sentence_2_order = map => {
  let key = "START";
  let generated_sentence = ["START"];
  let max_length = 25;
  let counter = 0;

  while (!key.includes("END")) {
    //pick a random word from the list. Words that appeared more frequently are listed more than once in the array, so this also function picks words in the proportion that they appear
    let length = map[key].length - 1;
    let random = Math.round(Math.random() * length);
    let next_word = map[key][random];
    generated_sentence.push(next_word);
    key = `${generated_sentence[generated_sentence.length - 2]} ${
      generated_sentence[generated_sentence.length - 1]
    }`;
    counter += 1;
    //start over if the sentence is getting too long without reaching an END
    if (counter >= max_length) {
      counter = 0;
      key = "START";
      generated_sentence = ["START"];
    }
  }
  // remove END from sentence, replace PAUSE with commas, capitalize I, I'm, and first letter of the sentence, capitalize all proper nouns
  let quote = generated_sentence.join(" ");
  return (
    quote.charAt(6).toUpperCase() +
    quote.substring(7, quote.length - 4) +
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
    .replace(/jimi hendrix/gi, "Jimi Hendrix")
    .replace(/jim morrison/gi, "Jim Morrison")
    .replace(/kanye west/gi, "Kanye West")
    .replace(/louis vuitton/gi, "Louis Vuitton")
    .replace(/ lol /g, " LOL ")
    .replace(/marc jacobs/gi, "Marc Jacobs")
    .replace(/michael jordan/gi, "Michael Jordan")
    .replace(/michelangelo/gi, "Michelangelo")
    .replace(/motown/g, "Motown")
    .replace(/picasso/g, "Picasso")
    .replace(/paris/g, "Paris")
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

export const map_2_order = generate_map(kanye_quotes);
