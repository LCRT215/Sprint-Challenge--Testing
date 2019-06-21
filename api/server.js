const express = require("express");
const server = express();
server.use(express.json());

//sanity check
server
  .get("/", (req, res) => {
    res.status(200).json({ message: "hey, girl!" });
  })
  .get("/games", async (req, res) => {
    try {
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  })
  .post("/games", async (req, res) => {
    const game = { ...req.body };
    if (!game.title && !game.genre) {
      return res.status(422).json({ message: "title and genre required" });
    }
    try {
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "error adding to the database" });
    }
  });

module.exports = server;
