const express = require("express");
const router = express.Router();
const { all, created, buy, user } = require('../models/Nft');
/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.get("/", async (req, res) => {
  try {
    res.json({
      status: 200,
      data: all,
      dataCreated: created,
      dataBuy: buy,
      user: user,
      message: "Get data has successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;