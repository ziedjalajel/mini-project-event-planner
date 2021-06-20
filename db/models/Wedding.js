module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Wedding", {
    organizer: {
      //done
      type: DataTypes.STRING(20),
      unique: true,
    },
    name: {
      //done
      type: DataTypes.STRING,
      validate: {
        not: ["^event+$", "i"],
      },
    },
    email: {
      //done
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    image: {
      //done
      type: DataTypes.STRING,
      allowNull: false,
    },
    numOfSeats: {
      //done
      type: DataTypes.INTEGER,
      validate: { min: 0 },
    },
    bookedSeats: {
      //done
      type: DataTypes.INTEGER,
      validate: {
        customValidator(value) {
          if (value > this.numOfSeats) {
            throw new Error("Over booked seats");
          }
        },
      },
    },

    startDate: {
      type: DataTypes.STRING,
      validate: {
        isDate: true,
        isAfter: "2021-06-21",
        customValidator(value) {
          if (null === this.endDate && value !== null) {
            throw new Error("byee");
          }
        },
      },
    },
    endDate: {
      type: DataTypes.STRING,
      validate: {
        isDate: true,
        isAfter: "2021-06-21",
        customValidator(value) {
          if (value !== null && this.startDate === null) {
            throw new Error("bbyee");
          }
        },
      },
    },
  });
};
