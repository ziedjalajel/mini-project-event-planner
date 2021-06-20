const express = require("express");
const app = express();
const eventRoute = require("./routes/eventRoute");

const db = require("./db/models");
app.use(express.json());
app.use("/weddings", eventRoute);
db.sequelize.sync({ force: true });
const PORT = 8080;
app.listen(PORT, () =>
  console.log(`The application runs on localhost : ${PORT}`)
);
