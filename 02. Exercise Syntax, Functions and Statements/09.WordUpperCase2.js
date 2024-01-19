function wordsUpperCase(input) {
  return  input
      .split(/[^A-Za-z0-9)]+/)
      .join(" ")
      .trim()
      .split(" ")
      .map((x) => x.toUpperCase())
      .join(", ");
}

console.log(wordsUpperCase("Hi, how are you?"));


