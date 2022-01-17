const Sequelize = require('sequelize');
const connection = require('./../config/database');

const feedback = connection.define('feedback', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    rank:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    type:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    description:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    isCompleted: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: true,
    },
});

module.exports = feedback;