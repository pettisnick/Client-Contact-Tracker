module.exports = function(sequelize, DataTypes) {
  const Client = sequelize.define("Client", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 160]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 160]
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 160]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      unique: false,
      validate: {
        len: [10]
      }
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 160]
      }
    }
  });

  Client.associate = function(models) {
    // Associating Client with Notes
    // When an Client is deleted, also delete any associated Notes
    Client.hasMany(models.Notes, {
      onDelete: "cascade"
    });
  };

  // Add a belongsTo association to Clients here
  // Example: https://github.com/sequelize/express-example/blob/master/models/task.js
  return Client;
};
