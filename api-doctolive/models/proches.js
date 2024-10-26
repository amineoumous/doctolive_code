const Sequelize = require('sequelize');
const connection = require('../config/database');
const sequelize = require('sequelize');

const proches = connection.define('proches', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    patientId: {
        type: sequelize.INTEGER
      },
    nom: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    prenom:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    date_naissance:{
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "",
    },
    lieu_naissance:{
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "",
    },
    address:{
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "",
    }, 
    gender:{
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "",
    }, 
});

module.exports = proches;