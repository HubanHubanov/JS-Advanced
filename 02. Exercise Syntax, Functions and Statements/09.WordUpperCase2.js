function wordsUpperCase(input) {
  let pattern = /[^A-Za-z0-9)]+/gm;

  input.split(pattern);

  console.log(
    input
      .split(pattern)
      .join(" ")
      .trim()
      .split(" ")
      .map((x) => x.toUpperCase())
      .join(", ")
  );
}

wordsUpperCase("Hi, how are you?");

wordsUpperCase("hello");
