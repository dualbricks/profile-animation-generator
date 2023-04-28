import { getRepos } from "./api-github/index.js";
import express, { query } from "express";
import bodyParser from "body-parser";
import { svgGenerator } from "./svg-generator/generator.js";

const app = new express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.get("", (req, res) => {
  res.send("welcome");
});

app.get("/svg", (req, res) => {
  let options = {
    width: "1000px",
    height: "400px",
    text: "hello world",
    color: "#2596be",
    speed: "6.8s",
    size: 26,
    fontStyle: "Montserrat",
  };
  Object.keys(req.query).map((q) => {
    options[q] = req.query[q];
  });
  console.log(options);
  res.header("Content-Type", "image/svg+xml");
  res.send(svgGenerator(options.text, options));
});

app.listen(process.env.PORT, 3000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
