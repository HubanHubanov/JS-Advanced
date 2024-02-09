function requestValidator(obj) {
  let methodArr = ["GET", "POST", "DELETE", "CONNECT"];

  if (!methodArr.includes(obj.method)) {
    throw new Error(`Invalid request header: Invalid Method`);
  }

  let uriPattern = /^[\w.]+$/g;

  let text = obj.uri;
  let match = uriPattern.exec(text);

  if (!match || !obj.uri === "*" || !obj.uri) {
    throw new Error("Invalid request header: Invalid URI");
  }

  let versionArr = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];

  if (!versionArr.includes(obj.version) || !obj.version) {
    throw new Error("Invalid request header: Invalid Version");
  }

  let invalidArr = [">", "<", "&", '""', "'", "\\"];

  if (!obj.hasOwnProperty("message")) {
    throw new Error("Invalid request header: Invalid Message");
  }

  for (let el of obj.message) {
    if (invalidArr.includes(el)) {
      throw new Error("Invalid request header: Invalid Message");
    }
  }

  return obj;
}

requestValidator({
  method: "GET",
  uri: "svn.public.catalog",
  version: "HTTP/1.1",
  message: "",
});

// requestValidator({
//   method: "DELETE",
//   uri: "svn.pAblic.catalog",
//   version: "HTTP/1.1",
//   message: "dvadsvava",
// });

// requestValidator({
//   method: "OPTIONS",
//   uri: "git.master",
//   version: "HTTP/1.1",
//   message: "-recursive",
// });

//   requestValidator({
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'
//   }
//   )
