function playingCards(face, suit) {
  

    const validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
    const validSuits = ["H", "S", "C", "D"]
   
    if(validFaces.indexOf(face) === -1) {
        throw new Error("Error")
    }
    if(validSuits.indexOf(suit) === -1) {
        throw new Error("Error")
    }

    switch(suit) {
        case "S": suit =  "\u2660"; break;
        case "H": suit =  "\u2665"; break;
        case "D": suit = "\u2666"; break;
        case "C": suit =  "\u2663"; break;
    }

    return  {
        face: face,
        suit:suit,
        toString() {
             return `${face}${suit}`;
        }
    }

}

let x = playingCards("A", "S");
console.log(x.toString());
// let y = playingCards("1", "C");
// y.toString();

