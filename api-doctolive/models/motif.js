const Sequelize = require('sequelize');
const connection = require('./../config/database');

const motif = connection.define('motif', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    teleconsultation: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }
});

module.exports = motif;