const Sequelize = require('sequelize');
const connection = require('../config/database');

const patient = connection.define('patient', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: true,
        unique:true,
    },
    nom: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    prenom: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    image:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    active: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
    },
    deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
    },
    addedByAdmin: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
    },
    passwordChanged: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
    },
    blocked: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
    },

});

module.exports = patient;