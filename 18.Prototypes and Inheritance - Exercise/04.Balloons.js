function solution() {
  class Balloon {
    constructor(color, gasWeight) {
      this.color = color;
      this.gasWeight = gasWeight;
    }
  }

  class PartyBalloon extends Balloon {
    constructor(color, gasWeight, ribbonColor, ribbonLenght) {
      super(color, gasWeight);

      this.ribbonColor = ribbonColor;
      this.ribbonLenght = ribbonLenght;

      this.ribbon = {
        color: ribbonColor,
        length: ribbonLenght,
      };
    }

    get ribbon() {
      return this._ribbon;
    }

    set ribbon(data) {
      this._ribbon = data;
    }
  }

  class BirthdayBalloon extends PartyBalloon {
    constructor(color, gasWeight, ribbonColor, ribbonLenght, text) {
      super(color, gasWeight, ribbonColor, ribbonLenght);
      this.text = text;
    }

    get text() {
      return this._text;
    }

    set text(data) {
      this._text = data;
    }
  }

  return {
    Balloon,
    PartyBalloon,
    BirthdayBalloon,
  };
}

let classes = solution();
let testBalloon = new classes.Balloon("yellow", 20.5);
let testPartyBalloon = new classes.PartyBalloon("yellow", 20.5, "red", 10.25);
let ribbon = testPartyBalloon.ribbon;
console.log(testBalloon);
console.log(testPartyBalloon);
console.log(ribbon);
let testBirthdayBaloon = new classes.BirthdayBalloon(
  "Ben",
  100,
  "Ben",
  100,
  "Happy Birthday, Ben"
);
console.log(testBirthdayBaloon);
