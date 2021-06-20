const express = require("express");
const {
  getList,
  addEvent,
  updateEvent,
  deleteEvent,
  getEventDetail,
  getFullyBooked,
} = require("../controllers/eventController");
const router = express.Router();

router.delete("/", deleteEvent);
router.put("/:eventId", updateEvent);
router.post("/", addEvent);
router.get("/", getList);
router.get("/fullybooked", getFullyBooked);
router.get("/:eventId", getEventDetail);

module.exports = router;
