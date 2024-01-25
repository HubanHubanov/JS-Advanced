function townsToJSON(input) {
  input.shift();

  let result = [];

  for (let el of input) {
    let tokens = el.split("|");

    let currTown = tokens[1].trim();
    let currLatitude = tokens[2].trim();
    let currLongitude = tokens[3].trim();

    let town = {
      Town: currTown,
      Latitude: Number(Number(currLatitude).toFixed(2)),
      Longitude: Number(Number(currLongitude).toFixed(2)),
    };

    result.push(town);
  }
  console.log(JSON.stringify(result));
}

townsToJSON([
  "| Town | Latitude | Longitude |",
  "| Sofia City | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);

// townsToJSON(['| Town | Latitude | Longitude |',
// '| Veliko Turnovo | 43.0757 | 25.6172 |',
// '| Monatevideo | 34.50 | 56.11 |']
// )
