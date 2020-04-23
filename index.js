const express = require("express");
const axios = require("axios");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname));

app.get("/", function (reg, res) {
  const data = getData();
  data.then((response) => {
    res.render("index", { data: response.data.locations });
  });
});

app.listen(8080);
console.log("App is running on 8080");

const getData = async () => {
  const api = "http://covid19api.xapix.io/v2/locations";

  try {
    return await axios.get(api);
  } catch (error) {
    console.error(error);
  }
};
