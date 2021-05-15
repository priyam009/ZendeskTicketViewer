const express = require("express");
const path = require("path");

//Instantiate Express
const app = express();

//Set PORT
const PORT = 3000;

//Serve static files
app.use(express.static(path.join(__dirname + "/public")));

//Parse JSON and URLencoded data using middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//Register app routes
require("./routes/routes.js")(app);

//Start Server
app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});

//Export app
module.exports = app;
