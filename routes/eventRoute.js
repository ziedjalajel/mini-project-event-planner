const express = require("express");
const {
  getList,
  addEvent,
  updateEvent,
  deleteEvent,
  getEventDetail,
} = require("../controllers/eventController");
const router = express.Router();

router.delete("/:eventId", deleteEvent);
router.post("/:eventId", updateEvent);
router.post("/", addEvent);
router.get("/", getList);

router.get("/:eventId", getEventDetail);

module.exports = router;
