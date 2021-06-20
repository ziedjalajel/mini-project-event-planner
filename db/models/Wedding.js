module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Wedding",
    {
      organizer: {
        //done
        type: DataTypes.STRING(20),
        unique: true,
      },
      name: {
        //done
        type: DataTypes.STRING,
        validate: {
          notContains: "event",
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
        type: DataTypes.DATE,
        validate: {
          isDate: true,

          customValidator(value) {
            if (this.endDate && !value) {
              throw new Error("error");
            }
            if (value < new Date()) {
              throw new Error("byee");
            }
          },
        },
      },
      endDate: {
        type: DataTypes.DATE,
        validate: {
          isDate: true,

          customValidator(value) {
            if (this.startDate && !value) {
              throw new Error("bbyee");
            }
          },
        },
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
};
