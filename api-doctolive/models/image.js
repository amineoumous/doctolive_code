const Sequelize = require('sequelize');
const connection = require('./../config/database');

const image = connection.define('picture', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    path: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = image;