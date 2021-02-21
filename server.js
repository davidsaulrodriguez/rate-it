//Server generated
const express = require("express");
const path = require("path");
const app = express();
const db = require("./models");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const exphbs = require("express-handlebars");

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");

require("./routes/html-routes.js")(app);

const PORT = process.env.PORT || 3000;

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
