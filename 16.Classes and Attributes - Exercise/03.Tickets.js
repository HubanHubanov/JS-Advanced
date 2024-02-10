function result(info, sortingCriterion) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price =Number(price);
      this.status = status;
    }
  }

  let res = [];

  for (let el of info) {
    let [destination, price, status] = el.split("|");

    let myTicket = new Ticket(destination, price, status);
    res.push(myTicket);
  }

  if (sortingCriterion === "price") {
    res.sort((a, b) => a.price - b.price);
  } else if (sortingCriterion === "destination") {
    res.sort((a, b) => a.destination.localeCompare(b.destination));
  } else if (sortingCriterion === "status") {
    res.sort((a, b) => a.status.localeCompare(b.status));
  }

  return res
}


// tickets(
//   [
//     "Philadelphia|94.20|available",
//     "New York City|95.99|available",
//     "New York City|95.99|sold",
//     "Boston|126.20|departed",
//   ],
//   "destination"
// );

    // result(
    //   [
    //     "Philadelphia|94.20|available",
    //     "New York City|95.99|available",
    //     "New York City|95.99|sold",
    //     "Boston|126.20|departed",
    //   ],
    //   "status"
    // );

let resultArray = result(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination');
