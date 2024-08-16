const express = require("express");
const app = express();
const router = express.Router();
const Book = require("../models/Book");


router.post("/", async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET all books
router.get("/", async (req, res) => {
  try {
    const books = new Book(req.body);
    await books.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(book);

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
    try {
      const book = await Book.findByIdAndDelete(req.params.id);
      
      res.json(book);
  
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

module.exports = router;