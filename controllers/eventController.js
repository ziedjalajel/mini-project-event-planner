const { Wedding } = require("../db/models");
exports.getList = async (req, res) => {
  const weddings = await Wedding.findAll({
    attributes: {
      include: ["name", "image", "id"],
    },
  });

  res.json(weddings);
};
