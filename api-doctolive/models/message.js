const Sequelize = require('sequelize');
const connection = require('./../config/database');

const image = connection.define('message', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    message: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    sentTo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = image;