//Requires
const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { exec } = require("child_process");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

//Static Routes
app.use("/dist", express.static(path.join(__dirname, "dist"), { etag: false }));
app.use(morgan("dev")); // logging

//Main App Route
app.get("/", (req, res, next) =>
  res.sendFile(path.join(__dirname, "dist/index.html")),
);

app.get("/fonts/*.ttf", (req, res, next) =>
  res.sendFile(path.join(__dirname, "static/" + req.url)),
);

//Run Server
const port = 2120;
app.listen(process.env.PORT || port, () =>
  console.log(`Listening on port ${port}`),
);
