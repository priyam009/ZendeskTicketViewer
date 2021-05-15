module.exports = (app) => {
  //Render HTML page
  app.get("/", (_req, res) => {
    res.render("index");
  });
};
