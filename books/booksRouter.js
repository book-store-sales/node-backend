const router = require("express").Router()
const Books = require("./booksModel")

router.get("/", (req, res) => {
  Books.find()
    .then((book) => res.status(200).json(book))
    .catch((err) => res.status(500).json({ message: err.message }));
});

router.get("/:id", (req, res) => {
  Books.findById(req.params.id)
    .then((book) => res.status(200).json(book))
    .catch((err) => res.status(500).json({ message: err.message }));
});

router.post("/", (req, res) => {
  Books.insert(req.body)
    .then((book) => res.status(201).json(book))
    .catch((err) => res.status(500).json({ message: err.message }));
});
router.put("/:id", (req, res) => {
  const { id } = req.params;
  Books.edit(id, req.body)
    .then((book) => res.status(203).json(book))
    .catch((err) => res.status(500).json({ message: err.message }));
});
router.delete("/:id", (req, res) => {
  Books.remove(req.params.id)
    .then((book) => res.status(201).json(book))
    .catch((err) => res.status(500).json({ message: err.message }));
});

module.exports = router;