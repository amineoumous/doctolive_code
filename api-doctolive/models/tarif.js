const Sequelize = require('sequelize');
const connection = require('./../config/database');

const tarif = connection.define('tarif', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    color:{
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "",
    },
    deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
    },
    active: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: true,
    },
});

module.exports = tarif;