const express = require("express");
const cors = require("cors")
const helmet = require("helmet");

const booksRouter = require('../books/booksRouter')

const server = express();

server.use(express.json())
server.use(helmet());
server.use(cors());

server.use('/api/books', booksRouter)

server.get("/", (req, res) => {
    res.status(200).json({message: "Welcome to the Books API",server: 'up and running!', port: `${process.env.PORT}`, environment: `${process.env.NODE_ENV}`})
  });

  

module.exports = server