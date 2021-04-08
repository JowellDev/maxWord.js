const maxWords = (word) => {
  const wordSplitted = word.split("");

  const letters = Array.from(new Set(wordSplitted));

  let result = null;

  let counter = {};

  letters.forEach((letter) => {
    counter[letter] = 0;
  });

  wordSplitted.forEach((letter) => {
    counter[letter]++;
  });

  for (const letter in counter) {
    if (Object.hasOwnProperty.call(counter, letter)) {
      const element = counter[letter];
      if (result) {
        if (result.count < element) result = { letter: letter, count: element };
      } else {
        result = { letter: letter, count: element };
      }
    }
  }

  return result.letter;

};

console.log(maxWords("emmanuelle"));
