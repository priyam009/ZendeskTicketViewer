const baseURL = require("../config/config.js").baseURL();
const authorization = require("../config/config.js").authorization();
const https = require("https");

// parse json from response and check for errors
const parseJsonFromResponse = (apiResponse, res) => {
  let data = "";

  apiResponse.on("data", (chunk) => {
    data += chunk;
  });

  apiResponse.on("end", () => {
    res.json(JSON.parse(data));
  });
};

module.exports = (app) => {
  //Render HTML page
  app.get("/", (_req, res) => {
    res.render("index");
  });

  //Get the first 25 ticket listings
  app.get("/tickets", (_req, res, next) => {
    https.get(
      `${baseURL}/tickets.json?page[size]=25`,
      authorization,
      (apiResponse) => {
        parseJsonFromResponse(apiResponse, res, next);
      }
    );
  });

  //Get next 25 ticket listings
  app.get("/tickets/next-page/:val", (req, res, next) => {
    https.get(
      `${baseURL}/tickets.json?page[size]=25&page[after]=${req.params.val}`,
      authorization,
      (apiResponse) => {
        parseJsonFromResponse(apiResponse, res, next);
      }
    );
  });

  //Get previous 25 ticket listings
  app.get("/tickets/previous-page/:val", (req, res, next) => {
    https.get(
      `${baseURL}/tickets.json?page[size]=25&page[before]=${req.params.val}`,
      authorization,
      (apiResponse) => {
        parseJsonFromResponse(apiResponse, res, next);
      }
    );
  });

  //Get Ticket by id
  app.get("/ticket/:id", (req, res, next) => {
    https.get(
      `${baseURL}/tickets/${req.params.id}`,
      authorization,
      (apiResponse) => {
        parseJsonFromResponse(apiResponse, res, next);
      }
    );
  });
};
