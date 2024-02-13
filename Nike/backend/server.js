import {
  categories,
  info,
  footballShoes,
  LifeStyle,
  basketball,
} from "./shoe_list.js";

import express from "express";
import cors from "cors";
import { clearConfigCache } from "prettier";

const app = express();
const PORT = 3000;

app.use(
  cors({
    origin: "http://localhost:5173", // frontend localhost is allowed to access this api as of now, add your own localhost's PORT to use this api
    methods: ["GET"],
  }),
);

app.get("/", (req, res) => {
  const method = req.method;
  const time = new Date().getFullYear();
  const url = req.url;
  res.send(`${method}` + ` ${time}` + ` ${url}`);
  console.log(`${(method, time, url)}`);
});

app.get("/api/football", (req, res) => {
  res.json(footballShoes);
});

app.get("/api/basketball", (req, res) => {
  res.json(basketball);
});

app.get("/api/categories", (req, res) => {
  res.json(categories);
});
app.get("/api/LifeStyle", (req, res) => {
  res.json(LifeStyle);
});

app.get("/api/info", (req, res) => {
  res.json(info);
});

app.listen(PORT, (req, res) => {
  console.log(`Server listening on PORT ${PORT}`);
});
