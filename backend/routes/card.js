const express = require("express");
const router = express.Router();

// Require Card Controllers
const { getCards, getCard, createCard } = require("../controllers/card");

router.get("/", getCards);

router.post("/", createCard);

router.get("/:title", getCard);

module.exports = router;
