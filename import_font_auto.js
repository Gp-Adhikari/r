const fs = require("fs");

//file path
const file_path = "./fonts/Work_Sans/static";
const file_path_output = "../fonts/Work_Sans/static/";

let importStatement = "";

fs.readdirSync(file_path).forEach((filename) => {
  if (filename.endsWith(".ttf")) {
    importStatement += `url("${file_path_output}${filename}"),`;
  }
});

console.log(importStatement);
