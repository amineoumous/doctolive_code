const Sequelize = require('sequelize');
const connection = require('./../config/database');

const consultation = connection.define('consultation', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
    time: {
        type: Sequelize.TIME,
        allowNull: false,
    },
    description:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    title:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    teleconsultation: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    isMedecinAbscent: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    isPatientAbscent: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    active: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: true,
    },
    canceled: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
    },
    updated: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
    },
    confirmed: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
    },
});

module.exports = consultation;