function extract(elementId) {
text = document.getElementById(elementId).textContent
  let pattern = /\((?<word>[^()]*)\)/g;

  let match = pattern.exec(text);

  let res = [];

  while (match) {
    res.push(match.groups.word);

    match = pattern.exec(text);
  }

  let resStr = res.join("; ");

  return resStr;
}

// function extract(elementId) {
//     let para = document.getElementById(elementId).textContent;
//     let pattern = /\(([^)]+)\)/g;
//     let result = [];
//     let match = pattern.exec(para);
//     while(match) {
//     result.push(match[1]);
//     match = pattern.exec(para);
//     }
//     return result.join('; ');
//     }
    
