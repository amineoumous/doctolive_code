const Sequelize = require('sequelize');
const config = require('./../config');

const { host, port, user, password, name } = config;

const connexion = new Sequelize(name, user, password,{
    host: host,
    dialect:'mysql',
    port:port,
});

module.exports = connexion; 
