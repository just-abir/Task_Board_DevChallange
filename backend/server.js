require("dotenv").config();

const app = require("./src/app.js");

const connectDB = require("./src/db/database.js");

connectDB();

const port = process.env.PORT;
app.listen(3000, () => {
  console.log("Server is running on port ...");
});
