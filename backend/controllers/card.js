const Card = require("../models/card");

const createCard = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (title === undefined) {
      return res
        .status(400)
        .json({ status: false, message: "Title Field Required" });
    } else if (description === undefined) {
      return res
        .status(400)
        .json({ status: false, message: "Description Field Required" });
    } else if (typeof title !== "string") {
      return res
        .status(400)
        .json({ status: false, message: "Title can only be a string" });
    } else if (typeof description !== "string") {
      return res
        .status(400)
        .json({ status: false, message: "Description can only be a string" });
    }

    const isCardAlreadyCreated = await Card.find({ title: title });
    if (isCardAlreadyCreated.length >= 1) {
      return res
        .status(400)
        .json({ status: false, message: "Title Already Present in Database" });
    }

    const card = await Card.create({ title: title, description: description });
    return res.status(201).json({ status: true, card: card });
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: "Failed to Create Card",
    });
  }
};

const getCards = async (req, res) => {
  try {
    const cards = await Card.find({});
    return res.status(200).json({ status: true, cards: cards });
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: "Could Not Retrieve Cards From Database",
    });
  }
};

const getCard = async (req, res) => {
  try {
    const { title } = req.params;
    const card = await Card.find({ title: title });

    if (card.length < 1) {
      return res.status(404).json({
        status: false,
        message: "No Card Found for Given Title",
      });
    } else {
      return res.status(200).json({ status: true, card: card });
    }
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: "Could Not Retrieve Card",
    });
  }
};

module.exports = { createCard, getCards, getCard };
