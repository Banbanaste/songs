const express = require("express");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  const songs = [
    { id: 1, name: "Final Countdown" },
    { id: 2, name: "Swimming" }
  ];
  res.status(200).json(songs);
});

const port = 5000;
server.listen(port, () => console.log(`\n running on port ${port} \n`));
