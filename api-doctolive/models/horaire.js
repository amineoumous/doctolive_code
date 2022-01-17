const Sequelize = require('sequelize');
const connection = require('./../config/database');

const horaire = connection.define('horaire', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    jour: {
        type: Sequelize.ENUM('lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'),
        allowNull: false,
    },
    debut_matin: {
        type: Sequelize.TIME,
        allowNull: true,
    },
    fin_matin: {
        type: Sequelize.TIME,
        allowNull: true,
    },
    debut_soir: {
        type: Sequelize.TIME,
        allowNull: true,
    },
    fin_soir: {
        type: Sequelize.TIME,
        allowNull: true,
    },
    is_matin: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
    },
    is_soir: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
    },
    
    duree: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 15,
    },
},
{
    indexes: [
        {
            unique: true,
            fields: ['jour', 'medecinId']
        }
    ]
});

module.exports = horaire;