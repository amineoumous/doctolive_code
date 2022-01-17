const Sequelize = require('sequelize');
const connection = require('./../config/database');

const callvideo = connection.define('callvideo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    start: {
        type: Sequelize.TIME,
        allowNull: true,
    },
    end: {
        type: Sequelize.TIME,
        allowNull: true,
    },
    isCompleted: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: true,
    },
});

module.exports = callvideo;