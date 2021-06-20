const { Wedding } = require("../db/models");

exports.getList = async (req, res) => {
  try {
    const weddings = await Wedding.findAll({
      attributes: {
        include: ["name", "image", "id"],
      },
    });

    res.json(weddings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addEvent = async (req, res) => {
  try {
    const newEvent = await Wedding.create(req.body);
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const { eventId } = req.params;
    const foundEvent = await Wedding.findByPk(eventId);
    if (foundEvent) {
      foundEvent.update(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Event doesn't exist" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const { eventId } = req.params;
    const foundEvent = await Wedding.findByPk(eventId);
    if (foundEvent) {
      foundEvent.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Event doesn't exist" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getEventDetail = async (req, res) => {
  try {
    const { eventId } = req.params;
    const foundWedding = await Wedding.findByPk(eventId);

    res.json(foundWedding);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
