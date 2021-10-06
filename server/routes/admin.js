const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');

router.get("/", auth, async (req, res) => {
  res.send("Dashboard");
});

router.post("/", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  res.send(console.log("Posted"));
});

module.exports = router;