class WineSelection {
  constructor(space) {
    this.space = space;
    this.wines = [];
    this.bill = 0;
  }

  reserveABottle(wineName, wineType, price) {
    if (this.space <= 0) {
      throw new Error("Not enough space in the cellar.");
    }

    this.wines.push({ wineName, wineType, price, paid: false });
    this.space--;
    return `You reserved a bottle of ${wineName} ${wineType} wine.`;
  }

  payWineBottle( wineName, price ) {

    let found = this.wines.find(e => e.wineName === wineName)

    if(!found) {
        throw new Error(`${wineName} is not in the cellar.`) 
    }

    if(found.paid === true) {
        throw new Error(`${wineName} has already been paid.`)
    }
    found.paid = true;
    this.bill += price;
    return `You bought a ${wineName} for a ${price}$.`



  } 

  openBottle(wineName) {
    let found = this.wines.find(e => e.wineName === wineName)

    if(!found) {
        throw new Error("The wine, you're looking for, is not found.")
    }
    if(found.paid === false) {
        throw new Error(`${wineName} need to be paid before open the bottle.`)
    }

    let index = this.wines.indexOf(found)   
    this.wines.splice(index,1)
    return `You drank a bottle of ${wineName}.`
  }

  cellarRevision(wineType) {
    if(wineType === undefined) {
    let res = `You have space for ${this.space} bottles more.\n`
    res += `You paid ${this.bill}$ for the wine.\n`
    
    this.wines.sort((a,b) => a.wineName.localeCompare(b.wineName))

    this.wines.forEach(e => {
        res += `${e.wineName} > ${e.wineType} - ${e.paid === true ? "Has Paid." : "Not Paid."}\n`
    })
    return res.trim()
}
let found = this.wines.find(e => e.wineType === wineType) 

if(!found) {
    throw new Error(`There is no ${wineType} in the cellar.`)
}
let res = "";
this.wines.forEach(e=> {
    if (e.wineType === wineType) {
          res+= `${e.wineName} > ${e.wineType} - ${e.paid === true ? "Has Paid." : "Not Paid."}\n`
    }
}) 
return res.trim()

}
}






const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());




