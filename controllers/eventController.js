const { Wedding } = require("../db/models");
const sequelize = require("sequelize");
const Op = sequelize.Op;

exports.getList = async (req, res) => {
  try {
    let weddings;
    if (req.body.date) {
      weddings = await Wedding.findAll({
        where: {
          startDate: {
            [Op.gt]: req.body.date,
          },
        },
        attributes: ["id", "name", "image"],
      });
    } else {
      weddings = await Wedding.findAll({
        attributes: ["id", "name", "image"],
      });
    }

    res.json(weddings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addEvent = async (req, res) => {
  try {
    const newEvent = await Wedding.bulkCreate(req.body);
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
    await Wedding.destroy({
      where: {
        id: req.body,
      },
    });
    res.status(204).end();
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
// exports.getFullyBooked = async (req, res) => {
//   try {
//     const foundList = await Wedding.findAll({
//       where: {},
//     });
//   } catch (error) {}
// };
