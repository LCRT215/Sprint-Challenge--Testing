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
    const game = req.body;
    if (game.title && game.genre) {
      try {
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(400).json({ message: "title and genre are required" });
    }
  });

module.exports = server;
