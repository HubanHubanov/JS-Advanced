function wordsUpperCase(input) {
  let pattern = /\w+/gm;

  let match = pattern.exec(input);

  let res = [];

  while (match) {
   
    res.push(match[0].toUpperCase());

    match = pattern.exec(input);
  }

  console.log(res.join(", "));
}

wordsUpperCase("Hi, how are you?");

wordsUpperCase('hello')

