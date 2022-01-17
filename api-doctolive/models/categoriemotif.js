const Sequelize = require('sequelize');
const connection = require('./../config/database');

const motif = connection.define('categorie_motif', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = motif;