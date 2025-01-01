const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

// infoasmsadat
// T5bQvUAlYjz7RN5I

async function main() {
  await mongoose.connect(
    process.env.DB_URL
  );
  app.get("/", (req, res) => {
    res.send("Hello world!");
  });
}

main()
  .then(() => console.log("Mongobd connected successfully!"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
