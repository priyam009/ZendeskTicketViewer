const express = require("express");
const path = require("path");
require("dotenv").config();

//Instantiate Express
const app = express();

//Set PORT
let PORT = 3000;

if (process.env.NODE_ENV === "test") {
  PORT = 3001;
}

//Serve static files
app.use(express.static(path.join(__dirname + "/public")));

//Parse JSON and URLencoded data using middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Register app routes
require("./routes/routes.js")(app);

//Start Server
app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});

//Export app
module.exports = app;
