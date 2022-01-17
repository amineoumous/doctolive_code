const Sequelize = require('sequelize');
const connection = require('./../config/database');

const diplome = connection.define('diplome', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    domaine: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    annee:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    type:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    link:{
        type: Sequelize.STRING,
        allowNull: true,
    },
});

module.exports = diplome;