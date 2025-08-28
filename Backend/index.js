const express = require("express");
const connectDb = require("./config/db.js");
const dotenv = require("dotenv");


dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {
  connectDb();
  console.log(`Server is running on port ${port}`);
});
