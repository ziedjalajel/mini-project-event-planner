const express = require("express");
const {
  getList,
  addEvent,
  updateEvent,
  deleteEvent,
  getEventDetail,
  getFullyBooked,
  searchList,
} = require("../controllers/eventController");
const router = express.Router();

router.delete("/", deleteEvent);
router.put("/:eventId", updateEvent);
router.get("/:query", searchList);
router.post("/", addEvent);
router.get("/", getList);
router.get("/fullybooked", getFullyBooked);
router.get("/:eventId", getEventDetail);

module.exports = router;
