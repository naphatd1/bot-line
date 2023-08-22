const express = require("express");
const router = express.Router();
const config = require("../config/line");
const service = require('../service/handle-event')
/* GET users listing. */
router.post(
  "/callback",
  config.line.middleware(config.lineConfig),
  (req, res, next) => {
    Promise.all(req.body.events.map(service.handleEvent))
      .then((result) => res.json(result))
      .catch((err) => {
        console.error(err);
        res.status(500).end();
      });
  }
);


module.exports = router;
