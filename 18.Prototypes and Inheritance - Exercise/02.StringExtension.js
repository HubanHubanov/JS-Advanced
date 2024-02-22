(function () {

  String.prototype.ensureStart = function (str) {
    return this.startsWith(str) ? this.toString() : str + this;
  };

  String.prototype.ensureEnd = function (str) {

    return this.endsWith(str) ? this.toString() : this + str
  }
  
  String.prototype.isEmpty = function () {
        //   return this.length === 0 ? true : false
        return !this.toString()
  }

  String.prototype.truncate = function (n) {
    if( n < 4) {
        return ".".repeat(n)
    }
   
     if(this.length <= n) {
        return this.toString()
     }

     if(this.includes(" ")) {
        let words = this.split(" ")
        let res = []

        for(let word of words) {
            if(res.join(" ").length + word.length + 3 <= n) {
                res.push(word)
            } else {
                break
            }
        }
        return res.join(" ") + ".".repeat(3)
     }
     return this.slice(0,3) +"..."

  }

  String.format = function (str, ...params) {

    for(let i = 0; i < params.length; i ++) {
       str =  str.replace(`{${i}}`, params[i])

    }
    return str

  }
 


})()

// let str = "hello my string";
// str = str.ensureEnd("string");
// str = str.ensureEnd(" is red");
// console.log(str.isEmpty());
// str = str.truncate(16);
// str = str.truncate(14);
// str = str.truncate(8);
// str = str.truncate(4);
// str = str.truncate(2);
// console.log(str.truncate(1));
str = String.format('The {0} {1} fox',
  'quick', 'brown');
  console.log(str);
str = String.format('jumps {0} {1}',
  'dog');
  console.log(str);

