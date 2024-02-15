class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = { picture: 200, photo: 50, item: 250 };
    this.listOfArticles = [];
    this.guests = [];
  }

  addArticle(articleModel, articleName, quantity) {
    articleModel = articleModel.toLowerCase();
    if (!this.possibleArticles.hasOwnProperty(articleModel)) {
      throw new Error("This article model is not included in this gallery!");
    }
    let found = this.listOfArticles.find((e) => e.articleName === articleName);
    if (!found) {
      let el = { articleModel, articleName, quantity };
      this.listOfArticles.push(el);
      return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    } else {
      if (found.articleModel === articleModel) {
        found.quantity += quantity;
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;

        
      }

    }
  }

  inviteGuest(guestName, personality) {
    let foundGuest = this.guests.find((e) => e.guestName === guestName);
    if (foundGuest) {
      throw new Error(`${guestName} has already been invited.`);
    } else {
      let points = 0;
      if (personality === "Vip") {
        points = 500;
      } else if (personality === "Middle") {
        points = 250;
      } else {
        points = 50;
      }

      let record = { guestName, points, purchaseArticle: 0 };
      this.guests.push(record);
      return `You have successfully invited ${guestName}!`;
    }
  }

  buyArticle(articleModel, articleName, guestName) {
    let foundName = this.listOfArticles.find(e => {
      e.articleName === articleName
    }
    );

    if (!foundName) {
      throw new Error("This article is not found.");
    }
    if (foundName) {
      if (foundName.articleModel !== articleModel) {
        throw new Error("This article is not found.");
      }
    }
    if (foundName.quantity === 0) {
      return `The ${articleName} is not available.`;
    }

    let foundGuest = this.guests.find((e) => e.guestName === guestName);

    if (!foundGuest) {
      return "This guest is not invited.";
    }

    let pointsNeeded = this.possibleArticles[articleModel];

    let availablePoints = foundGuest.points;

    if (pointsNeeded > availablePoints) {
      return "You need to more points to purchase the article.";
    }

    foundName.quantity -= 1;
    foundGuest.points -= pointsNeeded;
    foundGuest.purchaseArticle += 1;

    return `${guestName} successfully purchased the article worth ${pointsNeeded} points.`;
  }

  showGalleryInfo(criteria) {
    if (criteria === "article") {
      let res = "Articles information:\n";
      this.listOfArticles.forEach((e) => {
        res += `${e.articleModel} - ${e.articleName} - ${e.quantity}\n`;
      });

      return res.trim();
    } else if (criteria === "guest") {
      let res = "Guests information:\n";
      this.guests.forEach((e) => {
        res += `${e.guestName} - ${e.purchaseArticle}\n`;
      });
      return res.trim();
    }
  }
}

const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('pictUre', 'Mona Liza', 3));
console.log(artGallery.addArticle('picture', 'Mona Liza', 1));

