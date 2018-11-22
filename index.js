const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

const users = [
  {
    id: 1,
    name: "Minh Thong"
  },
  {
    id: 2,
    name: "Minh Tu"
  }
];

app.get("/", (req, res) => {
  res.render("users/index", {
    users
  });
});

app.listen(port, () => {
  console.log(`listening to port ${port}...`);
});
