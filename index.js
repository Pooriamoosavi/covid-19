const express = require("express");
const axios = require("axios");
const ejsHelpers = require("./views/functions.js");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname));

app.get("/", function (reg, res) {
  const data = getData();
  data.then((response) => {
    res.render("index", { data: response.data.locations, helpers: ejsHelpers });
  });
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8080;
}
app.listen(port);
console.log("App Is Ready...");

const getData = async () => {
  const api = "http://covid19api.xapix.io/v2/locations";

  try {
    return await axios.get(api);
  } catch (error) {
    console.error(error);
  }
};
