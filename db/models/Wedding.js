module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Wedding", {
    organizer: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        len: [0, 20],
      },
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        not: ["^event+$", "i"],
      },
    },
    email: {
      type: DataTypes.STRING,
      notEmpty: true,
      isEmail: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numOfSeats: {
      type: DataTypes.INTEGER,
      validate: { min: 0 },
    },
    bookedSeats: {
      type: DataTypes.INTEGER,
      validate: {
        customValidator(value) {
          if (value > numOfSeats) {
            throw new Error("hiiii");
          }
        },
      },
    },

    startDate: {
      type: DataTypes.STRING,
      isDate: true,
      isAfter: "2021-06-21",
      validate: {
        customValidator(value) {
          if (value === endDate && !null) {
            throw new Error("byee");
          }
        },
      },
    },
    endDate: {
      type: DataTypes.DATE,
      validate: {
        customValidator(value) {
          if (value === startDate && !null) {
            throw new Error("bbyee");
          }
        },
      },
    },
  });
};
