const fs = require("fs");

//fs.readdir(path[, options], callback)
fs.readdir(".", (err, filenames) => {
  if (err) {
    console.log(err);
  }
  console.log(filenames);
});
