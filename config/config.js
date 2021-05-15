require("dotenv").config();

module.exports = {
  subdomain: process.env.subdomain,
  email: process.env.email,
  password: process.env.password,

  baseURL: function () {
    return "https://" + this.subdomain + ".zendesk.com/api/v2";
  },

  authorization: function () {
    return {
      headers: {
        Accept: "application/json",
        Authorization:
          "Basic " +
          Buffer.from(this.email + ":" + this.password).toString("base64"),
      },
    };
  },
};
