class Triathlon {
  constructor(competitionName) {
    this.competitionName = competitionName;
    this.participants = {};
    this.listOfFinalists = [];
  }
  addParticipant(participantName, participantGender) {
    if (this.participants.hasOwnProperty(participantName)) {
      return `${participantName} has already been added to the list`;
    }

    this.participants[participantName] = participantGender;

    return `A new participant has been added - ${participantName}`;
  }

  completeness(participantName, condition) {
    if (!this.participants.hasOwnProperty(participantName)) {
      throw new Error(
        `${participantName} is not in the current participants list`
      );
    }
    if (condition < 30) {
      throw new Error(
        `${participantName} is not well prepared and cannot finish any discipline`
      );
    }
    let completedCount = Math.floor(condition / 30);

    if (completedCount < 3) {
      return `${participantName} could only complete ${completedCount} of the disciplines`;
    } else {
      let finalist = {
        participantName: participantName,
        participantGender: this.participants[participantName],
      };
      this.listOfFinalists.push(finalist);
      delete this.participants.participantName;

      return `Congratulations, ${participantName} finished the whole competition`;
    }
  }

  rewarding(participantName) {
    let found = this.listOfFinalists.find(
      (e) => e.participantName === participantName
    );

    if (!found) {
      return `${participantName} is not in the current finalists list`;
    }

    return `${participantName} was rewarded with a trophy for his performance`;
  }

  showRecord(criteria) {
    if (this.listOfFinalists.length === 0) {
      return `There are no finalists in this competition`;
    }

    if (criteria === "all") {
      this.listOfFinalists.sort((a, b) =>
        a.participantName.localeCompare(b.participantName)
      );

      let res = `List of all ${this.competitionName} finalists:\n`;
      this.listOfFinalists.forEach((e) => {
        res += `${e.participantName}\n`;
      });
      return res.trim();
    }

    let found = this.listOfFinalists.find(
      (e) => e.participantGender === criteria
    );

    if (!found) {
      return `There are no ${criteria}'s that finished the competition`;
    }

    return `${found.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
  }
}


const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("male"));
