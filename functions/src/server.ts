import bodyParser from "body-parser";
import express from "express";

export const app = express();

app.use(bodyParser.json());

app.get("/hello", async (req, res) => {
  console.log("hello");
  return res.json({
    hello: "world",
  });
});
