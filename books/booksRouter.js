const router = require("express").Router()
const Books = require("./booksModel")

router.get("/", (req, res) => {
  Books.find()
    .then((book) => res.status(200).json(book))
    .catch((err) => res.status(500).json({ message: err.message }));
});
module.exports = router;